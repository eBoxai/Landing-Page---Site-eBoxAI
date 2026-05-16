"use client";

import { useRef, type Dispatch, type SetStateAction } from "react";
import { PROCESS_STEPS } from "./data/processSteps";

type Props = {
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
};

/**
 * Versão mobile da seção Process — visível em telas < 900px via CSS.
 *
 * Layout:
 * - Tabs numerados no topo (1 2 3 4 5) lado a lado, clicáveis.
 * - Card abaixo mostrando o step ativo (sem o número dentro do card).
 *   Click no tab faz scroll suave até o card correspondente.
 */
export default function MobileProcessCards({
  activeStep,
  setActiveStep,
}: Props) {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleTabClick = (i: number) => {
    setActiveStep(i);
    const target = cardRefs.current[i];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="mobile-process-wrap">
      <div className="mobile-process-tabs" role="tablist" aria-label="Etapas do processo">
        {PROCESS_STEPS.map((step, i) => {
          const isActive = i === activeStep;
          return (
            <button
              type="button"
              key={step.num}
              role="tab"
              aria-selected={isActive}
              aria-label={`Etapa ${step.num}: ${step.label}`}
              className="mobile-process-tab"
              data-active={isActive || undefined}
              onClick={() => handleTabClick(i)}
            >
              <span className="mobile-process-tab-circle">{step.num}</span>
              <span className="mobile-process-tab-text">{step.shortLabel}</span>
            </button>
          );
        })}
      </div>

      <div className="mobile-process-cards">
        {PROCESS_STEPS.map((step, i) => {
          const StepIcon = step.Icon;
          return (
            <div
              key={step.num}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="mobile-process-card"
              data-active={i === activeStep || undefined}
            >
              <div className="mobile-process-card-head">
                <StepIcon className="mobile-process-icon" weight="regular" />
                <b className="mobile-process-title">{step.title}</b>
              </div>
              <p className="mobile-process-body">{step.body}</p>
              <div className="mobile-process-stats">
                {step.stats.map((s, idx) => (
                  <div key={idx} className="mobile-process-stat">
                    <b className="mobile-process-stat-value">
                      {s.value === "∞" ? (
                        <span className="stat-infinity">∞</span>
                      ) : (
                        s.value
                      )}
                    </b>
                    <span className="mobile-process-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
