import {
  FileMagnifyingGlass,
  MagnifyingGlass,
  Scales,
  Timer,
} from "@phosphor-icons/react/dist/ssr";

const ICON_COLOR = "#f8fafc";

type Problem = {
  Icon: typeof FileMagnifyingGlass;
  title: string;
  body: string;
};

const PROBLEMS: Problem[] = [
  {
    Icon: FileMagnifyingGlass,
    title: "Documentos extraviados",
    body: "Arquivos perdidos geram retrabalho e custos operacionais elevados.",
  },
  {
    Icon: MagnifyingGlass,
    title: "Falta de rastreabilidade",
    body: "Impossível saber quem acessou, moveu ou modificou documentos críticos.",
  },
  {
    Icon: Scales,
    title: "Riscos jurídicos",
    body: "Não conformidade com regulamentações pode resultar em multas e processos.",
  },
  {
    Icon: Timer,
    title: "Tempo perdido",
    body: "Horas desperdiçadas procurando informações que deveriam estar acessíveis.",
  },
];

export default function ProblemsSection() {
  return (
    <div className="container-parent">
      <div className="container">
        <div className="heading-2">
          <div className="os-desafios-do">Os desafios do arquivo público</div>
        </div>
        <div className="uma-plataforma-integrada">
          Uma plataforma integrada, do acervo físico à busca com IA.
        </div>
      </div>
      <div className="container2">
        {PROBLEMS.map(({ Icon, title, body }) => (
          <div key={title} className="container3">
            <div className="problem-icon">
              <Icon size={32} weight="regular" style={{ color: ICON_COLOR }} />
            </div>
            <div className="container4">
              <div className="heading-3">
                <b className="documentos-extraviados">{title}</b>
              </div>
              <div className="paragraph">
                <div className="coleta-transporte-e">{body}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        className="gemini-generated-image-122dul1-icon"
        src="/images/gemini-122dul.webp"
        alt="Servidor pública trabalhando em escritório com pilhas de documentos"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
