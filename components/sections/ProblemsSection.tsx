import {
  FileMagnifyingGlass,
  MagnifyingGlass,
  Scales,
  Timer,
} from "@phosphor-icons/react/dist/ssr";

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
        <div className="container3">
          <div className="filemagnifyingglass">
            <div className="arrowright">
              <FileMagnifyingGlass className="vector-icon" weight="regular" />
            </div>
          </div>
          <div className="container4">
            <div className="heading-3">
              <b className="documentos-extraviados">Documentos extraviados</b>
            </div>
            <div className="paragraph">
              <div className="coleta-transporte-e">
                Arquivos perdidos geram retrabalho e custos operacionais
                elevados.
              </div>
            </div>
          </div>
        </div>
        <div className="container3">
          <div className="filemagnifyingglass">
            <div className="arrowright">
              <MagnifyingGlass className="vector-icon2" weight="regular" />
            </div>
          </div>
          <div className="container4">
            <div className="heading-3">
              <b className="documentos-extraviados">Falta de rastreabilidade</b>
            </div>
            <div className="paragraph2">
              <div className="coleta-transporte-e">
                Impossível saber quem acessou, moveu ou modificou documentos
                críticos.
              </div>
            </div>
          </div>
        </div>
        <div className="container3">
          <div className="law">
            <Scales className="scale-icon" weight="regular" />
          </div>
          <div className="container4">
            <div className="heading-3">
              <b className="documentos-extraviados">Riscos jurídicos</b>
            </div>
            <div className="paragraph">
              <div className="coleta-transporte-e">
                Não conformidade com regulamentações pode resultar em multas e
                processos.
              </div>
            </div>
          </div>
        </div>
        <div className="container3">
          <div className="filemagnifyingglass">
            <div className="arrowright">
              <Timer className="vector-icon3" weight="regular" />
            </div>
          </div>
          <div className="container4">
            <div className="heading-3">
              <b className="documentos-extraviados">Tempo perdido</b>
            </div>
            <div className="paragraph2">
              <div className="coleta-transporte-e">
                Horas desperdiçadas procurando informações que deveriam estar
                acessíveis.
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="gemini-generated-image-122dul1-icon"
        src="/images/gemini-122dul.jpg"
        alt=""
      />
    </div>
  );
}
