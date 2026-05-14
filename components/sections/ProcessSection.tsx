"use client";

import {
  CaretDown,
  Scan,
  Cpu,
  FileMagnifyingGlass,
  TreeStructure,
  GlobeSimple,
} from "@phosphor-icons/react";
import { useStepScroll } from "@/hooks/useStepScroll";

const steps = [
  {
    label: "Digitalização",
    icon: Scan,
    title: "Digitalização de Alta Performance",
    description:
      "Garantimos a integridade dos dados desde o primeiro contato: cada documento passa por uma rigorosa limpeza e ordenação antes da captura. Utilizamos tecnologia de ponta para converter o físico em digital com máxima fidelidade, assegurando nitidez absoluta e acesso imediato à informação.",
    stats: [
      { value: "24/7", label: "MONITORAMENTO" },
      { value: "10×", label: "MAIS RÁPIDO" },
      { value: "100%", label: "RASTREÁVEL" },
    ],
  },
  {
    label: "Processamento Inteligente",
    icon: Cpu,
    title: "Processamento Inteligente com IA",
    description:
      "Motor de OCR multilíngue com reconhecimento de layout e semântica. Extrai texto, tabelas e metadados automaticamente, gerando dados estruturados prontos para indexação. Cada documento é processado com algoritmos de visão computacional que detectam padrões e estruturas.",
    stats: [
      { value: "95%+", label: "PRECISÃO OCR" },
      { value: "Multi", label: "IDIOMAS" },
      { value: "Auto", label: "EXTRAÇÃO" },
    ],
  },
  {
    label: "Indexação Conforme CONARQ",
    icon: FileMagnifyingGlass,
    title: "Indexação Conforme CONARQ",
    description:
      "Transformamos o caos de arquivos em um banco de dados estruturado. Cada documento recebe metadados automáticos e tags de identificação, permitindo que você localize qualquer arquivo físico ou digital em segundos através de uma busca por palavras-chave ou categorias específicas.",
    stats: [
      { value: "0,5s", label: "TEMPO DE BUSCA" },
      { value: "100", label: "INDEXAÇÃO AUTO" },
      { value: "TAGS", label: "ILIMITADAS" },
    ],
  },
  {
    label: "Classificação Hierárquica",
    icon: TreeStructure,
    title: "Classificação Hierárquica Automática",
    description:
      "IA generativa organiza automaticamente o acervo em planos de classificação hierárquica, criando estruturas baseadas no conteúdo real — fundo, subfundo, série, subsérie. Toda a estruturação é auditável, reversível e adaptável aos padrões da sua instituição.",
    stats: [
      { value: "IA", label: "GENERATIVA" },
      { value: "Auto", label: "CLASSIFICAÇÃO" },
      { value: "100%", label: "AUDITÁVEL" },
    ],
  },
  {
    label: "Disponibilidade",
    icon: GlobeSimple,
    title: "Disponibilidade e Acesso Total",
    description:
      "Acesso instantâneo por busca semântica. Localize qualquer documento por conceito, relação ou contexto — não apenas por palavras-chave. Integração com sistemas legados via API e disponibilidade 24/7 com SLA garantido.",
    stats: [
      { value: "API", label: "INTEGRAÇÃO" },
      { value: "Semântica", label: "BUSCA" },
      { value: "99,9%", label: "UPTIME" },
    ],
  },
];

export default function ProcessSection() {
  const { currentStep, containerRef, goToStep } = useStepScroll(steps.length);
  const step = steps[currentStep];
  const StepIcon = step.icon;

  return (
    <section id="process" className="bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl uppercase leading-tight text-text sm:text-5xl lg:text-[48px]">
            Do físico ao digital. Do armazenamento ao controle total.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-mute-2">
            Transformamos documentos físicos em conhecimento estruturado e pesquisável usando OCR
            avançado e IA generativa. Um processo técnico, escalável e totalmente automatizado.
          </p>
        </header>

        <div
          ref={containerRef}
          className="mt-16 grid items-start gap-12 lg:grid-cols-[280px_1fr] lg:gap-20"
        >
          <ol className="relative flex flex-col gap-7">
            {steps.map((s, i) => {
              const isActive = i === currentStep;
              const isCompleted = i < currentStep;
              const filled = isActive || isCompleted || i === 0;
              return (
                <li key={s.label} className="relative">
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden
                      className={`absolute left-[17px] top-9 h-[calc(100%-12px)] w-0.5 ${
                        isCompleted ? "bg-brand/60" : "bg-border"
                      }`}
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => goToStep(i)}
                    className="relative z-10 flex w-full items-center gap-4 text-left"
                  >
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold transition-all ${
                        filled
                          ? "bg-brand text-white shadow-[0_4px_7.7px_rgba(234,88,12,0.61)]"
                          : "border-2 border-border bg-white text-mute-2"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`text-sm leading-tight transition-colors ${
                        isActive
                          ? "font-semibold text-text"
                          : "font-medium text-mute-2"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                </li>
              );
            })}
            <li className="mt-6 hidden items-center gap-2 text-xs text-muted lg:flex">
              <CaretDown size={14} className="animate-bounce-y text-muted" />
              Scroll para explorar
            </li>
          </ol>

          <div
            key={currentStep}
            className="animate-fade-in rounded-2xl border border-brand bg-white p-8 shadow-[0_4px_6px_-4px_rgba(234,88,12,0.05),0_10px_15px_-3px_rgba(234,88,12,0.05)]"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center text-brand">
                <StepIcon size={28} weight="regular" />
              </span>
              <h3 className="text-xl font-bold text-text">{step.title}</h3>
            </div>
            <p className="mt-5 text-justify text-base leading-relaxed text-mute-2">
              {step.description}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {step.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-white px-5 py-4"
                >
                  <div className="text-2xl font-bold text-brand">{stat.value}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.05em] text-mute-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
