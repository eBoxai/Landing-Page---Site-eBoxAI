import {
  Barcode,
  BellRinging,
  Lightning,
  Lock,
  ShieldCheck,
  ThermometerSimple,
} from "@phosphor-icons/react/dist/ssr";

const ORANGE = "#ea580c";

export default function FeaturesSection() {
  return (
    <div className="container-parent2">
      <div className="container49">
        <div className="heading-22">
          <div className="seu-arquivo-fsico">
            Seu Arquivo Físico Conectado em Tempo Real
          </div>
        </div>
      </div>
      <div
        className="container50 feature-card"
        style={
          {
            "--hover-image": "url('/images/feature-hover/bellringing.webp')",
          } as React.CSSProperties
        }
      >
        <div className="frame-parent">
          <div className="frame-group">
            <div className="bellringing-parent">
              <div className="bellringing">
                <div className="arrowright">
                  <BellRinging
                    className="vector-icon5"
                    weight="regular"
                    style={{ color: ORANGE }}
                  />
                </div>
              </div>
              <div className="heading-36">
                <b className="notificaes-em-tempo">
                  Notificações em Tempo Real
                </b>
              </div>
            </div>
            <div className="paragraph6">
              <div className="notificaes-imediatas-por">
                Notificações imediatas por e-mail e app quando parâmetros saem
                do limite aceitável.
              </div>
            </div>
          </div>
          <div className="container51">
            <div className="reduo-de-perdas">
              60% redução de perdas documentais
            </div>
          </div>
        </div>
      </div>
      <div
        className="container52 feature-card"
        style={
          {
            "--hover-image": "url('/images/feature-hover/thermometer.webp')",
          } as React.CSSProperties
        }
      >
        <div className="thermometersimple-parent">
          <div className="bellringing">
            <div className="arrowright">
              <ThermometerSimple
                className="vector-icon6"
                weight="regular"
                style={{ color: ORANGE }}
              />
            </div>
          </div>
          <div className="heading-37">
            <b className="notificaes-imediatas-por">Monitoramento Contínuo</b>
          </div>
          <div className="paragraph7">
            <div className="notificaes-imediatas-por">
              Sensores monitoram temperatura e umidade para preservação ideal
              do acervo histórico.
            </div>
          </div>
          <div className="container53">
            <div className="em-tempo-real">24/7 em tempo real</div>
          </div>
        </div>
      </div>
      <div
        className="container54 feature-card"
        style={
          {
            "--hover-image": "url('/images/feature-hover/barcode.webp')",
          } as React.CSSProperties
        }
      >
        <div className="barcode-parent">
          <div className="bellringing">
            <div className="arrowright">
              <Barcode
                className="vector-icon7"
                weight="regular"
                style={{ color: ORANGE }}
              />
            </div>
          </div>
          <div className="heading-37">
            <b className="notificaes-imediatas-por">
              Rastreamento Inteligente
            </b>
          </div>
          <div className="paragraph7">
            <div className="notificaes-imediatas-por">
              Etiquetas RFID identificam localização exata de cada caixa e
              pasta no arquivo físico.
            </div>
          </div>
          <div className="container51">
            <div className="reduo-de-perdas">
              99,8% de precisão de rastreamento
            </div>
          </div>
        </div>
      </div>
      <div
        className="container56 feature-card"
        style={
          {
            "--hover-image": "url('/images/feature-hover/lock.webp')",
          } as React.CSSProperties
        }
      >
        <div className="barcode-parent">
          <div className="bellringing">
            <div className="arrowright">
              <Lock
                className="vector-icon8"
                weight="regular"
                style={{ color: ORANGE }}
              />
            </div>
          </div>
          <div className="heading-39">
            <b className="proteo-de-dados">Proteção de Dados</b>
          </div>
          <div className="paragraph7">
            <div className="notificaes-imediatas-por">
              Controle de acesso granular, criptografia e logs de auditoria
              nativos à plataforma.
            </div>
          </div>
          <div className="container51">
            <div className="reduo-de-perdas">Pronto para Conformidade</div>
          </div>
        </div>
      </div>
      <div
        className="container58 feature-card"
        style={
          {
            "--hover-image": "url('/images/feature-hover/shieldcheck.webp')",
          } as React.CSSProperties
        }
      >
        <div className="thermometersimple-parent">
          <div className="bellringing">
            <div className="arrowright">
              <ShieldCheck
                className="vector-icon9"
                weight="regular"
                style={{ color: ORANGE }}
              />
            </div>
          </div>
          <div className="heading-37">
            <b className="notificaes-imediatas-por">Conformidade Total</b>
          </div>
          <div className="paragraph7">
            <div className="notificaes-imediatas-por">
              Cada ação registrada. Conformidade total com CGU, TCU e
              controladoria interna.
            </div>
          </div>
          <div className="container53">
            <div className="em-tempo-real">Auditável</div>
          </div>
        </div>
      </div>
      <div
        className="container60 feature-card"
        style={
          {
            "--hover-image": "url('/images/feature-hover/timer.webp')",
          } as React.CSSProperties
        }
      >
        <div className="thermometersimple-parent">
          <div className="bellringing">
            <div className="arrowright">
              <Lightning
                className="vector-icon10"
                weight="regular"
                style={{ color: ORANGE }}
              />
            </div>
          </div>
          <div className="heading-37">
            <b className="notificaes-imediatas-por">Localização com IA</b>
          </div>
          <div className="paragraph7">
            <div className="notificaes-imediatas-por">
              Localização e recuperação de documentos 10 vezes mais ágil que
              métodos tradicionais.
            </div>
          </div>
          <div className="container51">
            <div className="reduo-de-perdas">10x Mais Rápido</div>
          </div>
        </div>
      </div>
    </div>
  );
}
