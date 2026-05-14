import {
  Envelope,
  Phone,
  MapPin,
  LinkedinLogo,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";
import Logo from "@/components/ui/Logo";

const solutions = [
  "Mapeamento de Acervo",
  "Busca Unificada",
  "Rastreabilidade",
  "Gestão de Prazos",
  "Sensores Inteligentes",
];

const products = ["Plataforma", "IA & Digitalização", "Segurança", "Empresas"];
const compliance = ["Política de privacidade", "Termos de uso"];
const socials = [
  { Icon: LinkedinLogo, label: "LinkedIn" },
  { Icon: InstagramLogo, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container110">
        <div className="container111">
          <div className="container112">
            <div className="container113">
              <Logo variant="light" />
            </div>

            <div className="paragraph19">
              <div className="gesto-documental-inteligente">
                Gestão Documental Inteligente para o Setor Público
              </div>
            </div>

            <div className="container114">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="link"
                  style={{ textDecoration: "none", color: "#f8fafc" }}
                >
                  <Icon size={20} weight="fill" className="icon10" />
                </a>
              ))}
            </div>

            <div className="container115">
              <div className="text15">
                <div className="lgpd">LGPD</div>
              </div>
              <div className="text16">
                <div className="lgpd">CONARQ</div>
              </div>
              <div className="text17">
                <div className="lgpd">ISO 27001</div>
              </div>
            </div>
          </div>

          <div className="container116">
            <div className="heading-3">
              <div className="solues">Soluções</div>
            </div>
            <div className="list">
              {solutions.map((s) => (
                <div key={s} className="list-item">
                  <div className="busca-unificada">{s}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="container117">
            <div className="heading-42">
              <div className="solues">Produtos</div>
            </div>
            <div className="list2">
              {products.map((p) => (
                <div key={p} className="list-item">
                  <div className="busca-unificada">{p}</div>
                </div>
              ))}
            </div>
            <div className="list-item10">
              <div className="conformidade">Conformidade</div>
            </div>
            <div className="list2">
              {compliance.map((c) => (
                <div key={c} className="list-item">
                  <div className="busca-unificada">{c}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="container-parent6">
            <div className="container118">
              <div className="heading-4-parent">
                <div className="heading-3">
                  <div className="solues">Contato</div>
                </div>
                <div className="list4">
                  <div className="list-item13">
                    <Envelope
                      size={16}
                      className="icon12"
                      style={{ color: "#f8fafc" }}
                    />
                    <div className="text18">
                      <div className="suporteeboxaicombr">
                        suporte@eboxai.com.br
                      </div>
                    </div>
                  </div>
                  <div className="list-item14">
                    <Phone
                      size={16}
                      className="icon12"
                      style={{ color: "#f8fafc" }}
                    />
                    <div className="text19">
                      <div className="div6">64 98404-3097</div>
                    </div>
                  </div>
                  <div className="list-item15">
                    <MapPin
                      size={16}
                      className="icon12"
                      style={{ color: "#f8fafc", marginTop: 2 }}
                    />
                    <div className="text20">
                      <div className="av-jk-n">
                        Av. JK nº 293 Qd. 67 Lt. 4 e 5, Morada do Sol, Rio Verde
                        GO CEP 75.909-080
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#cta"
              className="button-outline"
              style={{ textDecoration: "none" }}
            >
              <div className="content7">
                <div className="state-layer9">
                  <div className="label">Fale com um Especialista</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="container119">
          <div className="container120">
            <div className="paragraph20">
              <div className="eboxai-todos-os">
                © 2026 eBoxAI. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
