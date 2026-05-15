import {
  ArrowRight,
  FileMagnifyingGlass,
  MagnifyingGlass,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import CaretDownIcon from "@/components/ui/CaretDownIcon";

const WHITE = "#f8fafc";
const DARK = "#020617";

export default function HeroSection() {
  return (
    <div className="hero">
      <img
        className="chatgpt-image-5-de-mai-de-2022"
        src="/images/hero-1925.jpg"
        alt=""
      />
      <div className="hero-inner">
        <div className="frame-parent3">
          <div className="seus-documentos-esto-seguros-parent">
            <div className="seus-documentos-esto">
              Seus documentos estão seguros…
              <br />
              ou você só espera que estejam?
            </div>
            <div className="gesto-inteligente-de">
              Gestão inteligente de documentos com segurança, rastreabilidade e
              inteligência artificial.
            </div>
          </div>
          <div className="toggle-button-elevated-parent">
            <div className="container-wrapper">
              <a href="#cta" className="toggle-button-elevated4">
                <div className="content8">
                  <div className="state-layer10">
                    <div className="icon15">
                      <div className="arrowright">
                        <ArrowRight
                          className="vector-icon34"
                          weight="bold"
                          style={{ color: WHITE }}
                        />
                      </div>
                    </div>
                    <div className="label">Solicitar Demonstração Gratuita</div>
                  </div>
                </div>
              </a>
            </div>
            <a href="#features" className="button-outline2">
              <div className="button-outline3">
                <div className="content9">
                  <div className="state-layer11">
                    <div className="icon15">
                      <div className="arrowright">
                        <ArrowRight
                          className="vector-icon34"
                          weight="bold"
                          style={{ color: DARK }}
                        />
                      </div>
                    </div>
                    <div className="label">Saiba mais</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="frame-parent4">
        <div className="shieldcheck-wrapper">
          <div className="shieldcheck5">
            <div className="arrowright">
              <ShieldCheck
                className="vector-icon36"
                weight="regular"
                style={{ color: DARK }}
              />
            </div>
          </div>
        </div>
        <div className="seus-documentos-esto">
          Segurança
          <br />
          de ponta a ponta
        </div>
      </div>
      <div className="frame-parent5">
        <div className="shieldcheck-wrapper">
          <div className="shieldcheck5">
            <div className="arrowright">
              <MagnifyingGlass
                className="vector-icon37"
                weight="regular"
                style={{ color: DARK }}
              />
            </div>
          </div>
        </div>
        <div className="seus-documentos-esto">
          Busca inteligente
          <br />e rápida
        </div>
      </div>
      <div className="frame-parent6">
        <div className="shieldcheck-wrapper">
          <div className="shieldcheck5">
            <div className="arrowright">
              <FileMagnifyingGlass
                className="vector-icon38"
                weight="regular"
                style={{ color: DARK }}
              />
            </div>
          </div>
        </div>
        <div className="seus-documentos-esto">
          Rastreabilidade
          <br />
          completa
        </div>
      </div>
      <div className="caretdown">
        <div className="arrowright">
          <CaretDownIcon
            className="vector-icon39"
            style={{ color: DARK }}
          />
        </div>
      </div>
    </div>
  );
}
