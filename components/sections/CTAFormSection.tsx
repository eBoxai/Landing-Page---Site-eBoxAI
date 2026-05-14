"use client";

import { Clock, Medal, ShieldCheck, Star } from "@phosphor-icons/react/dist/ssr";

const FIELDS: { label: string; type: string }[] = [
  { label: "Nome completo", type: "text" },
  { label: "Instituição / Órgão", type: "text" },
  { label: "E-mail institucional", type: "email" },
];

export default function CTAFormSection() {
  return (
    <div className="ctasection">
      <div className="container100">
        <div className="container101">
          <div className="heading-27">
            <div className="pronto-para-transformar">
              Pronto para Transformar Seu Arquivo?
            </div>
          </div>
          <div className="paragraph18">
            <div className="agende-uma-demonstrao">
              Agende uma demonstração gratuita e veja o eBoxAI em funcionamento
              com dados do seu órgão.
            </div>
          </div>
          <div className="container102">
            <div className="container103">
              <div className="medal">
                <div className="arrowright">
                  <ShieldCheck className="vector-icon28" weight="regular" />
                </div>
              </div>
              <div className="text11">
                <div className="em-tempo-real">Conformidade LGPD</div>
              </div>
            </div>
            <div className="container104">
              <div className="medal">
                <div className="arrowright">
                  <Medal className="vector-icon29" weight="regular" />
                </div>
              </div>
              <div className="text12">
                <div className="em-tempo-real">Conforme CONARQ</div>
              </div>
            </div>
            <div className="container105">
              <div className="medal">
                <div className="arrowright">
                  <Clock className="vector-icon30" weight="regular" />
                </div>
              </div>
              <div className="text13">
                <div className="em-tempo-real">Demo em 30min</div>
              </div>
            </div>
            <div className="container106">
              <div className="medal">
                <div className="arrowright">
                  <Star className="vector-icon31" weight="regular" />
                </div>
              </div>
              <div className="text11">
                <div className="em-tempo-real">Suporte incluído</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container107">
          <div className="container41">
            <div className="falar-com-um">Falar com um Especialista</div>
          </div>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            {FIELDS.map((field) => (
              <div className="text-field" key={field.label}>
                <div className="text-field2">
                  <div className="state-layer">
                    <div className="content">
                      <div className="input-text-container">
                        <input
                          className="input-text"
                          type={field.type}
                          placeholder={field.label}
                          style={{
                            border: 0,
                            outline: 0,
                            background: "transparent",
                            flex: 1,
                            font: "inherit",
                            color: "inherit",
                          }}
                        />
                      </div>
                      <div className="label-text-container">
                        <div className="label-text">{field.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-field7">
              <div className="text-field8">
                <div className="state-layer">
                  <div className="content">
                    <div className="input-text-container">
                      <input
                        className="input-text"
                        type="tel"
                        placeholder="Telefone / WhatsApp"
                        style={{
                          border: 0,
                          outline: 0,
                          background: "transparent",
                          flex: 1,
                          font: "inherit",
                          color: "inherit",
                        }}
                      />
                    </div>
                    <div className="label-text-container">
                      <div className="label-text">Telefone / WhatsApp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-field9">
              <div className="text-field2">
                <div className="state-layer">
                  <div className="content5">
                    <div className="input-text-container">
                      <textarea
                        className="input-text"
                        rows={1}
                        placeholder="Descreva brevemente seu acervo ou desafio atual"
                        style={{
                          border: 0,
                          outline: 0,
                          background: "transparent",
                          flex: 1,
                          font: "inherit",
                          color: "inherit",
                          resize: "none",
                        }}
                      />
                    </div>
                    <div className="label-text-container">
                      <div className="label-text">Descrição</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent2">
              <label className="checkboxes-parent">
                <div className="checkboxes">
                  <div className="checkboxes2">
                    <div className="state-layer6">
                      <input
                        type="checkbox"
                        className="container108"
                        style={{
                          appearance: "none",
                          margin: 0,
                          cursor: "pointer",
                        }}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="li-e-concordo-container">
                  Li e concordo com a Política de
                  <span className="privacidade-e-os">
                    {" "}
                    Privacidade e os Termos de Uso
                  </span>
                  .
                </div>
              </label>
              <label className="checkboxes-parent">
                <div className="checkboxes">
                  <div className="checkboxes2">
                    <div className="state-layer6">
                      <input
                        type="checkbox"
                        className="container108"
                        style={{
                          appearance: "none",
                          margin: 0,
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="li-e-concordo-container">
                  Concordo em receber o contato da e-BoxAI de acordo com <br />a
                  Política de Privacidade.
                </div>
              </label>
            </div>
            <button
              type="submit"
              className="toggle-button-elevated"
              style={{
                border: 0,
                padding: 0,
                background: "transparent",
                cursor: "pointer",
                textAlign: "inherit",
              }}
            >
              <div className="toggle-button-elevated2">
                <div className="content6">
                  <div className="state-layer8">
                    <div className="label">Solicitar Demonstração Gratuita</div>
                  </div>
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
