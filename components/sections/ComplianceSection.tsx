import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

const ORANGE_LIGHT = "#f97316";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="checkcircle-group">
      <div className="checkcircle">
        <div className="arrowright">
          <CheckCircle
            className="vector-icon11"
            weight="regular"
            style={{ color: ORANGE_LIGHT }}
          />
        </div>
      </div>
      <div className="text-wrapper">
        <div className="container66">
          <div className="lgpd-proteo">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function ComplianceSection() {
  return (
    <div className="dashboardpreview" id="compliance">
      <div className="container62">
        <div className="container63">
          <div className="container64">
            <div className="heading-312">
              <div className="conformidade-legal">Conformidade Legal</div>
            </div>
            <div className="container65">
              <div className="container66">
                <CheckItem>LGPD — Proteção de Dados Garantida</CheckItem>
              </div>
              <CheckItem>
                Conformidade com Padrões CONARQ <br />e e-ARQ Brasil
              </CheckItem>
              <CheckItem>
                Gestão Automática de Prazos Conforme <br />
                CONARQ
              </CheckItem>
              <CheckItem>
                U Trilha de Auditoria para Órgãos de <br />
                Controle
              </CheckItem>
              <CheckItem>Assinatura Digital ICP-Brasil Integrada</CheckItem>
            </div>
          </div>
          <div className="container67">
            <div className="heading-313">
              <div className="conformidade-legal">Segurança da Informação</div>
            </div>
            <div className="container68">
              <CheckItem>Criptografia em Repouso e em Trânsito</CheckItem>
              <CheckItem>Controle Granular de Acesso por Perfil</CheckItem>
              <CheckItem>Backup Redundante em Múltiplas Regiões</CheckItem>
              <CheckItem>Registro Imutável de Todas as Operações</CheckItem>
            </div>
          </div>
        </div>
      </div>
      <img
        className="chatgpt-image-5-de-mai-de-202"
        src="/images/chatgpt-2214.webp"
        alt="Painel de conformidade LGPD com indicadores de segurança"
        loading="lazy"
        decoding="async"
      />
      <img
        className="gemini-generated-image-10zq711-icon"
        src="/images/gemini-10zq71.webp"
        alt="Cadeado digital simbolizando proteção de dados"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
