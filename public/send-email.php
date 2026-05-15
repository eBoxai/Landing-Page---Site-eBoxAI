<?php
/**
 * eBoxAI — Formulário "Falar com um Especialista"
 *
 * Recebe POST JSON do CTAFormSection.tsx, valida, e envia e-mail pra suporte@eboxai.com.br.
 *
 * Deploy: este arquivo está em /public/ — o Next.js copia automático pra /out/ durante o
 * `npm run build` e ele sobe junto com o site no public_html do Hostinger.
 */

declare(strict_types=1);

// ============================================================================
// CONFIGURAÇÃO
// ============================================================================

const DESTINATION_EMAIL = 'suporte@eboxai.com.br';
const FROM_EMAIL        = 'noreply@eboxai.com.br';
const FROM_NAME         = 'eBoxAI Site';
const ALLOWED_ORIGINS   = [
    'https://eboxai.com.br',
    'https://www.eboxai.com.br',
];

const RATE_LIMIT_SECONDS = 30;   // mínimo entre submissões do mesmo IP
const MAX_BODY_LENGTH    = 5000; // tamanho máximo do JSON recebido

// ============================================================================
// HEADERS / CORS
// ============================================================================

header('Content-Type: application/json; charset=utf-8');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ALLOWED_ORIGINS, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit;
}

// ============================================================================
// RATE LIMIT POR IP
// ============================================================================

$ip = $_SERVER['HTTP_CF_CONNECTING_IP']
    ?? $_SERVER['HTTP_X_FORWARDED_FOR']
    ?? $_SERVER['REMOTE_ADDR']
    ?? 'unknown';

$rateFile = sys_get_temp_dir() . '/eboxai_rate_' . hash('md5', (string) $ip);
$lastSubmit = file_exists($rateFile) ? (int) file_get_contents($rateFile) : 0;
$now = time();

if ($now - $lastSubmit < RATE_LIMIT_SECONDS) {
    http_response_code(429);
    echo json_encode(['error' => 'Aguarde alguns segundos antes de enviar novamente.']);
    exit;
}

// ============================================================================
// PARSE INPUT
// ============================================================================

$raw = file_get_contents('php://input') ?: '';
if (strlen($raw) > MAX_BODY_LENGTH) {
    http_response_code(413);
    echo json_encode(['error' => 'Payload muito grande']);
    exit;
}

$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

// ============================================================================
// HONEYPOT (anti-bot)
// ============================================================================

if (!empty($data['_honeypot'])) {
    // Bot detectado — finge sucesso pra não revelar a armadilha
    @file_put_contents($rateFile, (string) $now);
    echo json_encode(['ok' => true]);
    exit;
}

// ============================================================================
// HELPERS
// ============================================================================

/**
 * Remove quebras de linha pra evitar header injection.
 */
function clean(string $s): string {
    return trim(preg_replace('/[\r\n]+/', ' ', $s) ?? '');
}

// ============================================================================
// EXTRAÇÃO + SANITIZAÇÃO
// ============================================================================

$nome           = clean((string) ($data['nome']           ?? ''));
$instituicao    = clean((string) ($data['instituicao']    ?? ''));
$email          = clean((string) ($data['email']          ?? ''));
$telefone       = clean((string) ($data['telefone']       ?? ''));
$descricao      = trim((string)  ($data['descricao']      ?? ''));
$lgpd           = !empty($data['lgpd']);
$aceitaContato  = !empty($data['aceita_contato']);

// ============================================================================
// VALIDAÇÃO
// ============================================================================

$errors = [];
if (mb_strlen($nome)                                            < 2)   $errors[] = 'Nome obrigatório';
if (!filter_var($email, FILTER_VALIDATE_EMAIL))                        $errors[] = 'E-mail inválido';
if (mb_strlen(preg_replace('/\D/', '', $telefone) ?? '')        < 8)   $errors[] = 'Telefone inválido';
if (!$lgpd)                                                            $errors[] = 'É necessário aceitar a Política de Privacidade e os Termos de Uso';
if (!$aceitaContato)                                                   $errors[] = 'É necessário autorizar o contato da e-BoxAI';
// Instituição é opcional — sem validação

if ($errors) {
    http_response_code(400);
    echo json_encode(['error' => implode('. ', $errors)]);
    exit;
}

// Limita tamanho de campos pra evitar abuso
$nome        = mb_substr($nome, 0, 120);
$instituicao = mb_substr($instituicao, 0, 200);
$telefone    = mb_substr($telefone, 0, 50);
$descricao   = mb_substr($descricao, 0, 2000);

// ============================================================================
// MONTAGEM DO E-MAIL
// ============================================================================

$subject = "[eBoxAI] Novo contato — $nome";

$body  = "Novo contato pelo formulário do site eBoxAI:\n";
$body .= str_repeat('-', 60) . "\n\n";
$body .= "Nome:             $nome\n";
$body .= "Instituição:      " . ($instituicao !== '' ? $instituicao : '(não preenchida)') . "\n";
$body .= "E-mail:           $email\n";
$body .= "Telefone:         $telefone\n";
$body .= "Aceite LGPD:      Sim\n";
$body .= "Aceita contato:   " . ($aceitaContato ? 'Sim' : 'Não') . "\n\n";
$body .= "Descrição:\n";
$body .= ($descricao !== '' ? $descricao : '(não preenchida)') . "\n\n";
$body .= str_repeat('-', 60) . "\n";
$body .= "IP:   $ip\n";
$body .= "Data: " . date('Y-m-d H:i:s') . "\n";

$headers  = 'From: ' . FROM_NAME . ' <' . FROM_EMAIL . ">\r\n";
$headers .= 'Reply-To: ' . encodeHeader($nome) . " <$email>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

/**
 * Codifica nome do remetente em quoted-printable pra suportar acentos no header.
 */
function encodeHeader(string $value): string {
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

// Assunto também precisa encoding pra acentos
$encodedSubject = encodeHeader($subject);

// ============================================================================
// ENVIO
// ============================================================================

$sent = @mail(DESTINATION_EMAIL, $encodedSubject, $body, $headers, '-f' . FROM_EMAIL);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['error' => 'Falha ao enviar e-mail. Tente novamente em alguns minutos.']);
    exit;
}

// Atualiza rate limit
@file_put_contents($rateFile, (string) $now);

echo json_encode(['ok' => true]);
