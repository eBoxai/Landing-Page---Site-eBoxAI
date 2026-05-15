/**
 * Conteúdo dos documentos legais (Termos de Uso + Política de Privacidade).
 *
 * Os textos vêm dos PDFs em:
 *  - /Users/brunopedroso/Documents/Projetos/eboxai/TERMOS E CONDIÇÕES DE USO — e-BoxAI.pdf
 *  - /Users/brunopedroso/Documents/Projetos/eboxai/POLITICA DE PRIVACIDADE eBoxAI.pdf
 *
 * Renderizados dentro do <LegalModal> via clique nos links do formulário CTA
 * (e podem ser reutilizados no Footer ou em outras seções, se desejado).
 */

export function TermsContent() {
  return (
    <article className="legal-body">
      <p className="legal-meta">
        <strong>Última atualização:</strong> 14 de maio de 2026
      </p>
      <p>
        Bem-vindo à <strong>e-BoxAI</strong>. Estes Termos e Condições de Uso
        (&ldquo;Termos&rdquo;) regem o acesso e a utilização dos serviços
        oferecidos pela plataforma e-BoxAI, operada para fornecer soluções
        inteligentes em gestão documental.
      </p>
      <p>
        Ao acessar este website, cadastrar seus dados ou utilizar nossos
        serviços, você declara estar ciente e concordar integralmente com as
        condições estabelecidas abaixo.
      </p>

      <h3>1. Objeto e Serviços</h3>
      <p>A e-BoxAI presta serviços integrados de gestão documental, que compreendem:</p>
      <ul>
        <li>
          <strong>Processamento Digital:</strong> Higienização física,
          organização, escaneamento/digitalização de documentos e busca
          inteligente via sistema.
        </li>
        <li>
          <strong>Armazenamento:</strong> Custódia física de documentos em
          ambiente seguro e armazenamento digital em nuvem.
        </li>
        <li>
          <strong>Logística:</strong> Transporte especializado para retirada e
          entrega de acervos físicos sob demanda.
        </li>
        <li>
          <strong>Inteligência:</strong> Aplicação de IA para rastreabilidade
          e eficiência operacional do acervo.
        </li>
      </ul>

      <h3>2. Cadastro e Uso de Leads</h3>
      <ul>
        <li>
          <strong>Veracidade:</strong> O usuário compromete-se a fornecer
          informações exatas e atualizadas nos formulários de contato.
        </li>
        <li>
          <strong>Comunicação Comercial:</strong> Ao fornecer seus dados de
          contato, o usuário autoriza a e-BoxAI a utilizá-los como{" "}
          <strong>lead comercial</strong>, podendo enviar e-mails informativos,
          propostas, newsletters e conteúdos educativos.
        </li>
        <li>
          <strong>Descadastro:</strong> O usuário poderá, a qualquer momento,
          solicitar a interrupção do recebimento de comunicações através do
          link de &ldquo;descadastro&rdquo; presente nos e-mails enviados.
        </li>
      </ul>

      <h3>3. Responsabilidade pelo Conteúdo</h3>
      <ul>
        <li>
          <strong>Propriedade:</strong> O Usuário/Contratante declara ser o
          legítimo proprietário ou possuir autorização legal sobre todos os
          documentos confiados à e-BoxAI.
        </li>
        <li>
          <strong>Legalidade:</strong> É terminantemente proibido o uso do
          sistema para o arquivamento de documentos de origem ilícita ou que
          violem a legislação brasileira.
        </li>
        <li>
          <strong>Custódia:</strong> A e-BoxAI atua como depositária e
          processadora técnica, não sendo responsável pelo conteúdo jurídico
          ou pela veracidade das informações contidas nos documentos geridos.
        </li>
      </ul>

      <h3>4. Operação e Logística (Arquivo Físico)</h3>
      <ul>
        <li>
          <strong>Solicitação:</strong> O pedido de retirada ou entrega de
          documentos físicos deve ser realizado pelos canais oficiais da
          plataforma.
        </li>
        <li>
          <strong>Transporte:</strong> A e-BoxAI disponibilizará transporte
          especializado para a movimentação do acervo. A responsabilidade da
          empresa sobre o arquivo físico inicia-se no momento da retirada e
          encerra-se na entrega protocolada.
        </li>
        <li>
          <strong>Acondicionamento:</strong> O usuário deve seguir as
          orientações de embalagem e lacre fornecidas pela e-BoxAI para
          garantir a integridade do transporte.
        </li>
      </ul>

      <h3>5. Propriedade Intelectual</h3>
      <p>
        Todo o conteúdo da plataforma, incluindo logotipos, design de
        interface (UX/UI), algoritmos de inteligência artificial, textos e
        códigos-fonte, são de propriedade exclusiva da e-BoxAI ou de seus
        licenciadores, protegidos pelas leis de direito autoral e propriedade
        industrial.
      </p>

      <h3>6. Limitação de Responsabilidade</h3>
      <p>A e-BoxAI não será responsabilizada por:</p>
      <ul>
        <li>Danos causados por falhas na conexão de internet do usuário.</li>
        <li>Uso indevido das credenciais de acesso por terceiros.</li>
        <li>
          Eventos de força maior ou caso fortuito (como desastres naturais)
          que excedam as medidas de segurança e prevenção padrão de mercado
          para guarda de documentos.
        </li>
      </ul>

      <h3>7. Rescisão e Devolução de Acervo</h3>
      <p>Em caso de término da prestação de serviços:</p>
      <ol>
        <li>
          A e-BoxAI disponibilizará o acervo digital para download por período
          determinado em contrato.
        </li>
        <li>
          A devolução do acervo físico será programada mediante agendamento
          logístico.
        </li>
        <li>
          Após a entrega e encerramento do contrato, a e-BoxAI procederá com a
          eliminação ou anonimização dos dados de acesso, conforme a LGPD.
        </li>
      </ol>

      <h3>8. Alterações dos Termos</h3>
      <p>
        A e-BoxAI reserva-se o direito de atualizar estes Termos a qualquer
        momento para refletir melhorias técnicas ou mudanças legais. A versão
        atualizada estará sempre disponível no website.
      </p>

      <h3>9. Legislação e Foro</h3>
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil,
        em especial a <strong>Lei Geral de Proteção de Dados (LGPD)</strong> e
        o <strong>Marco Civil da Internet</strong>.
      </p>
      <p>
        <strong>
          Fica eleito o foro da comarca de Rio Verde, Estado de Goiás
        </strong>
        , para dirimir quaisquer controvérsias decorrentes destes Termos de
        Uso, com renúncia expressa a qualquer outro, por mais privilegiado que
        seja.
      </p>
    </article>
  );
}

export function PrivacyContent() {
  return (
    <article className="legal-body">
      <p className="legal-meta">
        <strong>Última atualização:</strong> 14 de maio de 2026
      </p>
      <p>
        A <strong>e-BoxAI</strong> valoriza a transparência, a proteção de
        dados e a privacidade de seus usuários. Esta Política de Privacidade
        explica como coletamos, utilizamos, armazenamos e protegemos suas
        informações pessoais ao interagir com nossa landing page e utilizar
        nossos serviços de gestão documental.
      </p>
      <p>
        Ao acessar nosso website ou fornecer seus dados, você declara estar
        ciente das práticas descritas nesta Política, elaborada em
        conformidade com a{" "}
        <strong>
          Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)
        </strong>
        .
      </p>

      <h3>1. Dados Coletados e Forma de Coleta</h3>
      <p>
        Coletamos informações que você nos fornece voluntariamente e dados
        capturados automaticamente:
      </p>
      <ul>
        <li>
          <strong>Dados de Contato:</strong> Nome, e-mail, telefone, empresa e
          cargo (fornecidos via formulários).
        </li>
        <li>
          <strong>Dados de Navegação:</strong> Endereço IP, cookies, tipo de
          navegador, páginas acessadas e tempo de visita.
        </li>
        <li>
          <strong>Dados de Documentos:</strong> Informações contidas nos
          documentos enviados para digitalização ou guarda física (tratados
          estritamente para a execução do serviço).
        </li>
      </ul>

      <h3>2. Finalidade do Tratamento (por que coletamos?)</h3>
      <p>Os dados são utilizados para:</p>
      <ul>
        <li>
          <strong>Prestação de Serviço:</strong> Processar solicitações,
          gerenciar o acervo digital/físico e coordenar a logística de
          transporte.
        </li>
        <li>
          <strong>Gestão de Leads e Marketing:</strong> Enviar comunicações
          comerciais, ofertas de serviços, newsletters e conteúdos
          informativos sobre gestão documental e IA.
        </li>
        <li>
          <strong>Atendimento:</strong> Responder a dúvidas, fornecer suporte
          técnico e orçamentos.
        </li>
        <li>
          <strong>Segurança:</strong> Prevenir fraudes e garantir a proteção
          dos dados armazenados no sistema.
        </li>
      </ul>

      <h3>3. Base Legal para o Tratamento</h3>
      <p>A e-BoxAI trata dados pessoais fundamentada em:</p>
      <ul>
        <li>
          <strong>Consentimento:</strong> Quando você autoriza o recebimento
          de comunicações.
        </li>
        <li>
          <strong>Execução de Contrato:</strong> Necessário para o
          processamento e guarda dos seus documentos.
        </li>
        <li>
          <strong>Legítimo Interesse:</strong> Para a promoção de serviços que
          possam ser de seu interesse profissional (Marketing B2B).
        </li>
        <li>
          <strong>Obrigação Legal:</strong> Quando necessário para cumprir
          normas fiscais ou regulatórias.
        </li>
      </ul>

      <h3>4. Compartilhamento de Dados</h3>
      <p>
        A e-BoxAI <strong>não comercializa</strong> seus dados pessoais. O
        compartilhamento ocorre apenas quando necessário para a operação:
      </p>
      <ul>
        <li>Com provedores de hospedagem de dados e infraestrutura de TI.</li>
        <li>
          Com parceiros de logística para a coleta e entrega de documentos
          físicos.
        </li>
        <li>
          Com plataformas de automação de marketing para o envio de e-mails
          (leads).
        </li>
        <li>Mediante ordem judicial ou requisição de autoridades competentes.</li>
      </ul>

      <h3>5. Uso de Cookies</h3>
      <p>
        Utilizamos cookies para melhorar sua experiência, analisar o tráfego
        do site e personalizar anúncios. Você pode gerenciar as preferências
        de cookies diretamente nas configurações do seu navegador, embora
        isso possa afetar algumas funcionalidades do site.
      </p>

      <h3>6. Seus Direitos (Titular dos Dados)</h3>
      <p>
        Conforme a LGPD, você pode, a qualquer momento, solicitar através de
        nossos canais oficiais:
      </p>
      <ul>
        <li>Acesso aos seus dados.</li>
        <li>Correção de dados incompletos ou desatualizados.</li>
        <li>
          <strong>Eliminação ou descadastro (opt-out)</strong> de comunicações
          de marketing.
        </li>
        <li>Revogação do consentimento previamente fornecido.</li>
      </ul>

      <h3>7. Segurança da Informação</h3>
      <p>
        Adotamos protocolos de segurança rigorosos, incluindo criptografia e
        controle de acesso, para proteger tanto os dados pessoais quanto o
        conteúdo sensível dos documentos sob nossa custódia. Contudo,
        ressaltamos que nenhum sistema é 100% infalível contra ataques
        externos sofisticados.
      </p>

      <h3>8. Retenção e Exclusão</h3>
      <p>
        Os dados serão mantidos pelo período necessário para cumprir as
        finalidades descritas nesta política ou conforme exigido por lei.
        Dados de leads serão mantidos até que o usuário solicite o
        descadastro.
      </p>

      <h3>9. Alterações nesta Política</h3>
      <p>
        Esta Política pode passar por atualizações para ficar cada vez melhor
        e mais segura. Se fizermos mudanças importantes,{" "}
        <strong>
          avisaremos você por e-mail ou através de um destaque em nossa
          plataforma
        </strong>
        . Você também pode conferir a versão mais recente sempre que desejar
        aqui nesta página.
      </p>

      <h3>10. Contato e Foro</h3>
      <p>
        Para dúvidas sobre privacidade, entre em contato pelos canais
        indicados na landing page.
      </p>
      <p>
        <strong>
          Fica eleito o foro da comarca de Rio Verde, Estado de Goiás
        </strong>
        , para dirimir quaisquer controvérsias decorrentes desta Política de
        Privacidade, conforme a legislação brasileira vigente.
      </p>
    </article>
  );
}
