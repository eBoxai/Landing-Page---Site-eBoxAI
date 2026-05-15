# Deploy — eBoxAI no Hostinger

Guia rápido pra atualizar o site `eboxai.com.br` após mudanças no código.

## 🚀 Deploy automatizado (GitHub Actions) — RECOMENDADO

Existe uma pipeline em `.github/workflows/deploy.yml` que faz build + upload + extração automaticamente a cada `push` na branch `main`. Você também pode disparar manualmente pela aba **Actions** do GitHub.

### Setup (uma vez só)

No repositório do GitHub: **Settings → Secrets and variables → Actions → New repository secret**

Cria os 4 secrets:

| Nome | Valor |
|---|---|
| `HOSTINGER_HOST` | `195.200.3.151` |
| `HOSTINGER_PORT` | `65002` |
| `HOSTINGER_USER` | `u214730228` |
| `HOSTINGER_PASSWORD` | sua senha SSH do Hostinger |

⚠️ **Atenção**: a senha tem caracteres especiais (`&`, `@`). Copia/cola exatamente como está no Hostinger sem aspas — o GitHub Secrets cuida da escape automaticamente.

### Como usar

- **Automático**: faz `git push` pra branch `main` → pipeline roda → deploy completo
- **Manual**: GitHub → aba **Actions** → "Deploy to Hostinger" → **Run workflow**

A pipeline executa em ~2-3 min:
1. Clone do código
2. `npm ci` (instala deps com cache)
3. `npm run build` (gera `./out`)
4. Cria `site.zip`
5. SCP do ZIP pra `~/domains/eboxai.com.br/public_html/`
6. SSH: faz backup atual em `~/last-deploy-backup.tar.gz`, limpa public_html, extrai novo
7. Smoke test: faz `curl` no site e valida HTTP 200

### Rollback rápido

Se algo quebrar, o último backup fica em `~/last-deploy-backup.tar.gz` no servidor:

```bash
ssh -p 65002 u214730228@195.200.3.151
cd ~/domains/eboxai.com.br/public_html/
rm -rf *
tar -xzf ~/last-deploy-backup.tar.gz
```

---

## 📋 Pré-requisitos

- Node.js instalado (`node -v` deve mostrar v18+)
- Dependências instaladas: `npm install` (só na primeira vez ou se mudar `package.json`)

## 🔁 Workflow de atualização

### 1. Desenvolvimento local

```bash
cd /Users/brunopedroso/Documents/Projetos/eboxai
npm run dev
```

Abre `http://localhost:3000` no navegador. Edita o código — hot reload atualiza automático.

### 2. Build estático

Quando estiver tudo pronto:

```bash
npm run build
```

Gera a versão estática em `./out/` (HTML, CSS, JS, imagens prontos pra subir).

> **Configuração**: `next.config.ts` está com `output: "export"` + `trailingSlash: true` + `images.unoptimized: true`. Não usar `next/image`, API routes, ou Server Actions — quebraria o export.

### 3. Empacotar em ZIP

```bash
cd out
zip -r ../eboxai-site.zip . -x "__next*.txt"
cd ..
```

Gera `eboxai-site.zip` (~52 MB) na raiz do projeto.

### 4. Upload no Hostinger

1. Login em https://hpanel.hostinger.com/
2. **Sites** → **`eboxai.com.br`** → **Painel de controle**
3. Card **"Gerenciador de arquivos"** (abre o File Browser v2.63.2)
4. Navega até a pasta home (🏠) — esse é o `public_html` do site
5. **Apaga** todos os arquivos antigos do site (404/, _next/, images/, index.html, etc.)
6. **Upload** do `eboxai-site.zip`
7. Clique direito no ZIP → **"Desarquivar"**:
   - Nome da pasta: `site` (qualquer nome temporário)
   - Sobrescrever arquivos existentes: ✓ marcado
8. Entra em `/site/`, **seleciona tudo** (Ctrl+A ou shift-click), clique direito → **"Mover arquivo"** → destino: `/` (home)
9. Volta pro home, **deleta a pasta `site/` vazia** e o ZIP

> ⚠️ **Gotcha**: o File Browser do Hostinger exige nome obrigatório no Desarquivar, por isso o passo de mover.

### 5. Verificar

- Acessa `https://eboxai.com.br` em janela anônima (Cmd+Shift+N) — evita cache
- Se mostrar versão antiga, **Limpar cache** no painel: card "Limpar cache" no painel de controle do site

## 🔧 Configurações importantes

### `next.config.ts`
```ts
{
  output: "export",        // gera HTML estático
  trailingSlash: true,     // URLs como /pagina/ funcionam em qualquer host
  images: { unoptimized: true }
}
```

### Estrutura esperada em `public_html/`
```
public_html/
├── index.html          ← página principal
├── 404.html
├── _next/              ← bundles JS/CSS
├── _not-found/
├── 404/
├── fonts/
├── images/
├── favicon.ico
└── *.svg
```

## 🌐 Domínio & DNS

### Status atual (instalado em 2026-05-14):
- **Domínio**: `eboxai.com.br` (Registro.br)
- **Nameservers**: `ns1.dns-parking.com` / `ns2.dns-parking.com` (Hostinger)
- **IP do servidor**: `195.200.3.151`
- **A record `@`** → `195.200.3.151`

### Mudar nameservers (se precisar):
- No Registro.br: Meus Domínios → eboxai.com.br → DNS → "Outro provedor"
- Propagação: 15min a 24h

## 🐛 Troubleshooting

### Site mostra 404 com skater
Página de parking do Hostinger — virtual host ainda provisionando. Aguardar 15min-2h.

### SSL inválido / cadeado quebrado
Certificado Let's Encrypt ainda emitindo (primeiras 1-2h após criar site). Acessar via `http://` enquanto isso.

### Site não atualiza após upload
1. **Limpar cache do Hostinger**: Painel → "Limpar cache"
2. **Cache do navegador**: Cmd+Shift+R (hard refresh) ou janela anônima
3. Confirmar que sobrescreveu o `index.html` (verificar data de modificação no File Manager)

### `npm run build` falha
- Tipos do TypeScript: rodar `npx tsc --noEmit` pra ver erros
- Lint: `npm run lint`
- Limpar cache do Next: `rm -rf .next out node_modules/.cache && npm run build`

### Arquivo muito grande pra upload
- Verifica se imagens não estão sendo bundleadas no `_next/static/media/`
- Otimiza imagens em `public/images/` antes do build (TinyPNG, etc.)

## 📝 Notas

- Mudanças em **componentes client (`"use client"`)** funcionam normalmente — são incluídos no bundle estático.
- **Server Components com `fetch`** estático funcionam (data fetching no build time).
- **API Routes (`app/api/*`)** NÃO funcionam em export estático.
- **Server Actions** NÃO funcionam.
- Se precisar de backend, migrar pra Vercel ou plano Node.js do Hostinger.

## 📧 Formulário "Falar com um Especialista" — backend PHP

O form do CTAFormSection envia POST JSON pra `/send-email.php`, que está em `public/send-email.php` (Next.js copia automático pra `out/send-email.php` durante o build).

### Como funciona
- Hostinger Premium tem **PHP nativo** + função `mail()` (sem plano extra de servidor)
- O `mail()` usa o SMTP interno do Hostinger (`mx1/mx2.hostinger.com`), com SPF/DKIM/DMARC já configurados no DNS
- Destinatário: **`suporte@eboxai.com.br`** (precisa de plano Hostinger Email pra ter caixa de entrada real)
- Remetente exibido: `noreply@eboxai.com.br` (não precisa existir como inbox)
- Reply-To: e-mail do visitante (responder direto vai pro contato dele)

### Configuração
- Destinatário, remetente e CORS allowed origins ficam em constantes no topo do `send-email.php`
- Anti-spam embutido: honeypot, rate-limit por IP (30s), sanitização anti header injection
- Limites: nome 120, instituição 200, telefone 50, descrição 2000 caracteres

### Pré-requisitos pra funcionar em produção
1. ✅ Domínio `eboxai.com.br` configurado no Hostinger
2. ✅ DNS apontando pro servidor (SPF/DKIM já no DNS)
3. ⚠️ **Plano Hostinger Email Starter** (R$2.49/mês) ativo com caixa `suporte@eboxai.com.br` criada — sem isso, mensagens vão pro vazio
4. ✅ `send-email.php` no `public_html/` (vai junto com o build)

### Trocar e-mail destinatário
Edita `public/send-email.php` linha:
```php
const DESTINATION_EMAIL = 'suporte@eboxai.com.br';
```
e roda `npm run build` + redeploy.

### Testar localmente
PHP não roda com `npm run dev`. Pra testar form, precisa fazer o build + upload no Hostinger. Em desenvolvimento, o submit vai falhar (404 do PHP) — é esperado.

---

Última atualização: 2026-05-14
