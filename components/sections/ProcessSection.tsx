"use client";

import { useRef } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { useProcessScrollLock } from "@/hooks/useProcessScrollLock";
import { PROCESS_STEPS } from "./data/processSteps";
import MobileProcessCards from "./MobileProcessCards";

const STEP_LABEL_CLASS = [
  "container21",
  "container24",
  "container27",
  "container30",
  "container33",
];

export default function ProcessSection() {
  const processRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useProcessScrollLock(
    processRef,
    PROCESS_STEPS.length
  );

  const active = PROCESS_STEPS[activeStep];
  const ActiveIcon = active.Icon;

  return (
    <div ref={processRef} className="container-group">
      <div className="container11">
        <div className="heading-22">
          <div className="do-fsico-ao">
            Do físico ao digital. Do armazenamento ao controle total.
          </div>
        </div>
      </div>
      <div className="uma-plataforma-integrada2">
        Transformamos documentos físicos em conhecimento estruturado e
        pesquisável usando OCR avançado e IA generativa. Um processo técnico,
        escalável e totalmente automatizado.
      </div>

      <MobileProcessCards
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />

      <div className="component-1">
        <div className="container-container">
          <div className="container12">
            <div className="container13">
              <div
                className="container14"
                data-completed={0 < activeStep || undefined}
              />
              <div
                className="container15"
                data-completed={1 < activeStep || undefined}
              />
              <div
                className="container16"
                data-completed={2 < activeStep || undefined}
              />
              <div
                className="container17"
                data-completed={3 < activeStep || undefined}
              />
              <div className="container18">
                {PROCESS_STEPS.map((step, i) => {
                  const isActive = i === activeStep;
                  const isCompleted = i <= activeStep;
                  return (
                    <button
                      type="button"
                      key={step.num}
                      className="step-row"
                      data-active={isActive || undefined}
                      data-completed={isCompleted || undefined}
                      onClick={() => setActiveStep(i)}
                      aria-label={`Ir para etapa ${step.num}: ${step.label}`}
                      aria-current={isActive ? "step" : undefined}
                    >
                      <div className="step-circle">
                        <div className="div">{step.num}</div>
                      </div>
                      <div className={STEP_LABEL_CLASS[i]}>
                        <div className="step-label">{step.label}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="container34">
              <div className="icon-parent">
                <CaretDown className="icon" weight="bold" />
                <div className="text">
                  <div className="scroll-para-explorar">
                    Scroll para explorar
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container35"
            key={activeStep}
            data-process-card
          >
            <div className="frame-div">
              <div className="container36">
                <div className="container37">
                  <div className="container38">
                    <div className="material-symbolsscan-outline-parent">
                      <div className="material-symbolsscan-outline">
                        <ActiveIcon
                          className="vector-icon4"
                          weight="regular"
                        />
                      </div>
                      <div className="container38">
                        <b className="digitalizao-de-alta">{active.title}</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="paragraph5">
                  <div className="ocr-avanado-com">{active.body}</div>
                </div>
              </div>
              <div className="container39">
                {active.stats.map((s, i) => (
                  <div key={i} className="container40">
                    <div className="container41">
                      <b className="b">{s.value}</b>
                    </div>
                    <div className="container42">
                      <div className="monitoramento">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
