"use client";

import { useEffect, useRef, useState } from "react";
import {
  FileMagnifyingGlass,
  MagnifyingGlass,
  ListMagnifyingGlass,
  Scales,
  Timer,
  Scan,
  BellRinging,
  ThermometerSimple,
  Barcode,
  Lock,
  ShieldCheck,
  Lightning,
  CheckCircle,
  Path,
  Folders,
  Tag,
  Gear,
  Medal,
  Clock,
  Star,
  ArrowRight,
  CaretDown,
  Plus,
  WhatsappLogo,
  Envelope,
  Phone,
  MapPin,
  LinkedinLogo,
  InstagramLogo,
  BoxArrowUp,
  MapTrifold,
  ChartLine,
  Graph,
} from "@phosphor-icons/react";
import { LogoBox, LogoNetwork } from "@/components/ui/LogoMark";
import Footer from "@/components/layout/Footer";

const ORANGE = "#ea580c";
const ORANGE_LIGHT = "#f97316";
const WHITE = "#f8fafc";
const DARK = "#020617";

const PROCESS_STEPS: {
  num: number;
  label: string;
  Icon: typeof Scan;
  title: string;
  body: string;
  stats: { value: string; label: string }[];
}[] = [
  {
    num: 1,
    label: "Digitalização",
    Icon: Scan,
    title: "Digitalização de Alta Performance",
    body: "Garantimos a integridade dos dados desde o primeiro contato: cada documento passa por uma rigorosa limpeza e ordenação antes da captura. Utilizamos tecnologia de ponta para converter o físico em digital com máxima fidelidade, assegurando nitidez absoluta e acesso imediato à informação.",
    stats: [
      { value: "24/7", label: "MONITORAMENTO" },
      { value: "10", label: "MAIS RÁPIDO" },
      { value: "100%", label: "RASTREÁVEL" },
    ],
  },
  {
    num: 2,
    label: "Processamento Inteligente",
    Icon: Lightning,
    title: "Processamento com IA",
    body: "OCR avançado e modelos de IA generativa extraem texto, classificam automaticamente e estruturam metadados em segundos. Múltiplos idiomas, layouts e tipos de arquivo são processados sem intervenção manual, com correção contínua via aprendizado de máquina.",
    stats: [
      { value: "95%+", label: "PRECISÃO OCR" },
      { value: "50+", label: "IDIOMAS" },
      { value: "12s", label: "POR PÁGINA" },
    ],
  },
  {
    num: 3,
    label: "Indexação Conforme CONARQ",
    Icon: CheckCircle,
    title: "Indexação Padronizada",
    body: "Cada documento é indexado seguindo a tabela de temporalidade e classificação do CONARQ. Metadados estruturados garantem conformidade legal, recuperação rápida para auditoria e prazos automáticos para transferência ou eliminação.",
    stats: [
      { value: "100%", label: "CONFORMIDADE" },
      { value: "CONARQ", label: "+ e-ARQ BRASIL" },
      { value: "AUDITORIA", label: "PRONTA" },
    ],
  },
  {
    num: 4,
    label: "Classificação Hierárquica",
    Icon: Folders,
    title: "Estrutura Organizada",
    body: "A IA classifica documentos em hierarquias customizáveis por órgão, secretaria ou tipo documental. Tags inteligentes e relações entre arquivos formam uma árvore navegável que reflete a realidade do seu acervo público.",
    stats: [
      { value: "∞", label: "HIERARQUIA" },
      { value: "TAGS", label: "+ RELAÇÕES" },
      { value: "CUSTOM", label: "POR ÓRGÃO" },
    ],
  },
  {
    num: 5,
    label: "Disponibilidade",
    Icon: MagnifyingGlass,
    title: "Acesso Imediato",
    body: "Pesquise por conceito, autor, data ou conteúdo. Resultados em milissegundos via plataforma web, mobile ou API. Trilha de auditoria registra cada acesso com permissões granulares por usuário, secretaria ou tipo de documento.",
    stats: [
      { value: "<200ms", label: "BUSCA" },
      { value: "WEB", label: "+ MOBILE + API" },
      { value: "AUDITORIA", label: "TOTAL" },
    ],
  },
];

export default function FigmaLandingPage() {
  const processRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const el = processRef.current;
    if (!el) return;

    const mq = window.matchMedia("(min-width: 900px)");
    const lastIndex = PROCESS_STEPS.length - 1;
    let cleanup: (() => void) | null = null;

    const enable = () => {
      let inView = false;
      let currentStep = 0;
      let lock = false;

      // Posição do topo da viewport onde a seção começa a "travar" — abaixo do navbar fixo.
      // Menor = trava mais cedo (seção mais alta). Maior = trava mais tarde (seção mais baixa).
      const LOCK_AT_TOP = 40;
      let wasInView = false;
      let lastScrollY = window.scrollY;
      setActiveStep(0);
      // eslint-disable-next-line no-console
      console.log("[process-lock] ENABLE — width:", window.innerWidth, "section top:", el.getBoundingClientRect().top, "section h:", el.offsetHeight);

      const onScroll = () => {
        const rect = el.getBoundingClientRect();
        const sectionH = el.offsetHeight;
        const goingDown = window.scrollY > lastScrollY;
        lastScrollY = window.scrollY;

        // Lock ativo: topo da seção já passou o gatilho E ainda há seção visível abaixo
        const nowInView =
          rect.top <= LOCK_AT_TOP && rect.top > -(sectionH - 200);

        if (nowInView !== inView) {
          // eslint-disable-next-line no-console
          console.log("[process-lock]", nowInView ? "→ IN VIEW" : "← OUT", "rect.top:", Math.round(rect.top), "sectionH:", sectionH);
        }
        el.dataset.lockActive = nowInView ? "true" : "false";

        // Reset step quando ENTRA descendo (cruza o gatilho de cima pra baixo)
        if (nowInView && !wasInView && goingDown) {
          currentStep = 0;
          setActiveStep(0);
        }

        inView = nowInView;
        wasInView = nowInView;
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      const onWheel = (e: WheelEvent) => {
        if (!inView) return;
        const goingDown = e.deltaY > 0;
        // Apenas trava na rolagem PRA BAIXO. Rolagem pra cima passa livre.
        if (!goingDown) return;
        // Já no último step + rolando pra baixo: libera pra próxima seção
        if (currentStep >= lastIndex) {
          // eslint-disable-next-line no-console
          console.log("[process-lock] release — last step reached");
          return;
        }
        // Captura e avança step
        e.preventDefault();
        if (lock) return;
        lock = true;
        currentStep = Math.min(lastIndex, currentStep + 1);
        // eslint-disable-next-line no-console
        console.log("[process-lock] step", currentStep, "of", lastIndex);
        setActiveStep(currentStep);
        window.setTimeout(() => {
          lock = false;
        }, 550);
      };

      let touchStartY = 0;
      const onTouchStart = (e: TouchEvent) => {
        touchStartY = e.touches[0]?.clientY ?? 0;
      };
      const onTouchMove = (e: TouchEvent) => {
        if (!inView) return;
        const y = e.touches[0]?.clientY ?? 0;
        const dy = touchStartY - y;
        if (Math.abs(dy) < 24) return;
        const goingDown = dy > 0;
        if (!goingDown) return;
        if (currentStep >= lastIndex) return;
        e.preventDefault();
        if (lock) return;
        lock = true;
        currentStep = Math.min(lastIndex, currentStep + 1);
        setActiveStep(currentStep);
        touchStartY = y;
        window.setTimeout(() => {
          lock = false;
        }, 550);
      };

      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: false });

      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchmove", onTouchMove);
      };
    };

    const apply = () => {
      cleanup?.();
      cleanup = null;
      if (mq.matches) {
        // Desktop: ativa o scroll-lock.
        cleanup = enable();
      } else {
        // Mobile/tablet: mostra cards empilhados (mobile-process-cards) — sem trava.
        setActiveStep(lastIndex);
      }
    };

    apply();
    mq.addEventListener("change", apply);

    return () => {
      mq.removeEventListener("change", apply);
      cleanup?.();
    };
  }, []);

  return (
    <>
    <div className="landing-page">
      {/* SVG filters: Figma Glass — refraction (feDisplacementMap) + chromatic dispersion (RGB channel split) */}
      <svg style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }} aria-hidden>
        <defs>
          <filter id="glass-refraction" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
            {/* Smooth low-frequency noise → looks like curved glass, not water ripples */}
            <feTurbulence type="fractalNoise" baseFrequency="0.005 0.009" numOctaves="1" seed="6" result="rawNoise" />
            <feGaussianBlur in="rawNoise" stdDeviation="2.5" result="noise" />

            {/* RGB channel split with different displacement scales = real chromatic aberration */}
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" xChannelSelector="R" yChannelSelector="G" result="dispR" />
            <feColorMatrix in="dispR" type="matrix" values="1 0 0 0 0
                                                            0 0 0 0 0
                                                            0 0 0 0 0
                                                            0 0 0 1 0" result="rChan" />

            <feDisplacementMap in="SourceGraphic" in2="noise" scale="17" xChannelSelector="R" yChannelSelector="G" result="dispG" />
            <feColorMatrix in="dispG" type="matrix" values="0 0 0 0 0
                                                            0 1 0 0 0
                                                            0 0 0 0 0
                                                            0 0 0 1 0" result="gChan" />

            <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" result="dispB" />
            <feColorMatrix in="dispB" type="matrix" values="0 0 0 0 0
                                                            0 0 0 0 0
                                                            0 0 1 0 0
                                                            0 0 0 1 0" result="bChan" />

            {/* Recombine the 3 channels — slight offset between them = visible chromatic edges */}
            <feBlend mode="screen" in="rChan" in2="gChan" result="rg" />
            <feBlend mode="screen" in="rg" in2="bChan" result="rgb" />

            {/* Tiny final blur smooths the high-freq aberration into a glassy look */}
            <feGaussianBlur in="rgb" stdDeviation="0.4" />
          </filter>
        </defs>
      </svg>

      {/* Section: Problems */}
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
                  Arquivos perdidos geram retrabalho e custos operacionais elevados.
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
                  Impossível saber quem acessou, moveu ou modificou documentos críticos.
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
                  Não conformidade com regulamentações pode resultar em multas e processos.
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
                  Horas desperdiçadas procurando informações que deveriam estar acessíveis.
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

      {/* Section: Process Stepper */}
      <div ref={processRef} className="container-group">
        <div className="container11">
          <div className="heading-22">
            <div className="do-fsico-ao">
              Do físico ao digital. Do armazenamento ao controle total.
            </div>
          </div>
        </div>
        <div className="uma-plataforma-integrada2">
          Transformamos documentos físicos em conhecimento estruturado e pesquisável usando OCR
          avançado e IA generativa. Um processo técnico, escalável e totalmente automatizado.
        </div>
        {/* Mobile-only: stack todos os 5 steps como cards empilhados */}
        <div className="mobile-process-cards">
          {PROCESS_STEPS.map((step) => {
            const StepIcon = step.Icon;
            return (
              <div key={step.num} className="mobile-process-card">
                <div className="mobile-process-card-head">
                  <span className="mobile-process-num">{step.num}</span>
                  <StepIcon className="mobile-process-icon" weight="regular" />
                  <b className="mobile-process-title">{step.title}</b>
                </div>
                <p className="mobile-process-body">{step.body}</p>
                <div className="mobile-process-stats">
                  {step.stats.map((s, i) => (
                    <div key={i} className="mobile-process-stat">
                      <b className="mobile-process-stat-value">{s.value}</b>
                      <span className="mobile-process-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="component-1">
          <div className="container-container">
            <div className="container12">
              <div className="container13">
                <div className="container14" data-completed={0 < activeStep || undefined} />
                <div className="container15" data-completed={1 < activeStep || undefined} />
                <div className="container16" data-completed={2 < activeStep || undefined} />
                <div className="container17" data-completed={3 < activeStep || undefined} />
                <div className="container18">
                  {PROCESS_STEPS.map((step, i) => {
                    const isActive = i === activeStep;
                    const isCompleted = i <= activeStep;
                    const labelClassByIndex = ["container21", "container24", "container27", "container30", "container33"];
                    return (
                      <div
                        key={step.num}
                        className="step-row"
                        data-active={isActive || undefined}
                        data-completed={isCompleted || undefined}
                      >
                        <div className="step-circle">
                          <div className="div">{step.num}</div>
                        </div>
                        <div className={labelClassByIndex[i]}>
                          <div className="step-label">{step.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="container34">
                <div className="icon-parent">
                  <CaretDown className="icon" weight="bold" />
                  <div className="text">
                    <div className="scroll-para-explorar">Scroll para explorar</div>
                  </div>
                </div>
              </div>
            </div>
            {(() => {
              const active = PROCESS_STEPS[activeStep];
              const ActiveIcon = active.Icon;
              return (
                <div className="container35" key={activeStep} data-process-card>
                  <div className="frame-div">
                    <div className="container36">
                      <div className="container37">
                        <div className="container38">
                          <div className="material-symbolsscan-outline-parent">
                            <div className="material-symbolsscan-outline">
                              <ActiveIcon className="vector-icon4" weight="regular" />
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
              );
            })()}
          </div>
        </div>
      </div>

      {/* Section: Features grid (6 cards orange-top) */}
      <div className="container-parent2">
        <div className="container49">
          <div className="heading-22">
            <div className="seu-arquivo-fsico">Seu Arquivo Físico Conectado em Tempo Real</div>
          </div>
        </div>
        <div
          className="container50 feature-card"
          style={{ "--hover-image": "url('/images/feature-hover/bellringing.png')" } as React.CSSProperties}
        >
          <div className="frame-parent">
            <div className="frame-group">
              <div className="bellringing-parent">
                <div className="bellringing">
                  <div className="arrowright">
                    <BellRinging className="vector-icon5" weight="regular" style={{ color: ORANGE }} />
                  </div>
                </div>
                <div className="heading-36">
                  <b className="notificaes-em-tempo">Notificações em Tempo Real</b>
                </div>
              </div>
              <div className="paragraph6">
                <div className="notificaes-imediatas-por">
                  Notificações imediatas por e-mail e app quando parâmetros saem do limite
                  aceitável.
                </div>
              </div>
            </div>
            <div className="container51">
              <div className="reduo-de-perdas">60% redução de perdas documentais</div>
            </div>
          </div>
        </div>
        <div
          className="container52 feature-card"
          style={{ "--hover-image": "url('/images/feature-hover/thermometer.png')" } as React.CSSProperties}
        >
          <div className="thermometersimple-parent">
            <div className="bellringing">
              <div className="arrowright">
                <ThermometerSimple className="vector-icon6" weight="regular" style={{ color: ORANGE }} />
              </div>
            </div>
            <div className="heading-37">
              <b className="notificaes-imediatas-por">Monitoramento Contínuo</b>
            </div>
            <div className="paragraph7">
              <div className="notificaes-imediatas-por">
                Sensores monitoram temperatura e umidade para preservação ideal do acervo
                histórico.
              </div>
            </div>
            <div className="container53">
              <div className="em-tempo-real">24/7 em tempo real</div>
            </div>
          </div>
        </div>
        <div
          className="container54 feature-card"
          style={{ "--hover-image": "url('/images/feature-hover/barcode.png')" } as React.CSSProperties}
        >
          <div className="barcode-parent">
            <div className="bellringing">
              <div className="arrowright">
                <Barcode className="vector-icon7" weight="regular" style={{ color: ORANGE }} />
              </div>
            </div>
            <div className="heading-37">
              <b className="notificaes-imediatas-por">Rastreamento Inteligente</b>
            </div>
            <div className="paragraph7">
              <div className="notificaes-imediatas-por">
                Etiquetas RFID identificam localização exata de cada caixa e pasta no arquivo
                físico.
              </div>
            </div>
            <div className="container51">
              <div className="reduo-de-perdas">99,8% de precisão de rastreamento</div>
            </div>
          </div>
        </div>
        <div
          className="container56 feature-card"
          style={{ "--hover-image": "url('/images/feature-hover/lock.png')" } as React.CSSProperties}
        >
          <div className="barcode-parent">
            <div className="bellringing">
              <div className="arrowright">
                <Lock className="vector-icon8" weight="regular" style={{ color: ORANGE }} />
              </div>
            </div>
            <div className="heading-39">
              <b className="proteo-de-dados">Proteção de Dados</b>
            </div>
            <div className="paragraph7">
              <div className="notificaes-imediatas-por">
                Controle de acesso granular, criptografia e logs de auditoria nativos à
                plataforma.
              </div>
            </div>
            <div className="container51">
              <div className="reduo-de-perdas">Pronto para Conformidade</div>
            </div>
          </div>
        </div>
        <div
          className="container58 feature-card"
          style={{ "--hover-image": "url('/images/feature-hover/shieldcheck.png')" } as React.CSSProperties}
        >
          <div className="thermometersimple-parent">
            <div className="bellringing">
              <div className="arrowright">
                <ShieldCheck className="vector-icon9" weight="regular" style={{ color: ORANGE }} />
              </div>
            </div>
            <div className="heading-37">
              <b className="notificaes-imediatas-por">Conformidade Total</b>
            </div>
            <div className="paragraph7">
              <div className="notificaes-imediatas-por">
                Cada ação registrada. Conformidade total com CGU, TCU e controladoria interna.
              </div>
            </div>
            <div className="container53">
              <div className="em-tempo-real">Auditável</div>
            </div>
          </div>
        </div>
        <div
          className="container60 feature-card"
          style={{ "--hover-image": "url('/images/feature-hover/timer.png')" } as React.CSSProperties}
        >
          <div className="thermometersimple-parent">
            <div className="bellringing">
              <div className="arrowright">
                <Lightning className="vector-icon10" weight="regular" style={{ color: ORANGE }} />
              </div>
            </div>
            <div className="heading-37">
              <b className="notificaes-imediatas-por">Localização com IA</b>
            </div>
            <div className="paragraph7">
              <div className="notificaes-imediatas-por">
                Localização e recuperação de documentos 10 vezes mais ágil que métodos
                tradicionais.
              </div>
            </div>
            <div className="container51">
              <div className="reduo-de-perdas">10x Mais Rápido</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Compliance (dark) */}
      <div className="dashboardpreview">
        <div className="container62">
          <div className="container63">
            <div className="container64">
              <div className="heading-312">
                <div className="conformidade-legal">Conformidade Legal</div>
              </div>
              <div className="container65">
                <div className="container66">
                  <div className="checkcircle-parent">
                    <div className="checkcircle">
                      <div className="arrowright">
                        <CheckCircle className="vector-icon11" weight="regular" style={{ color: ORANGE_LIGHT }} />
                      </div>
                    </div>
                    <div className="text-wrapper">
                      <div className="container66">
                        <div className="lgpd-proteo">LGPD — Proteção de Dados Garantida</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkcircle-group">
                  <div className="checkcircle">
                    <div className="arrowright">
                      <CheckCircle className="vector-icon11" weight="regular" style={{ color: ORANGE_LIGHT }} />
                    </div>
                  </div>
                  <div className="text-wrapper">
                    <div className="text3">
                      <div className="lgpd-proteo">
                        Conformidade com Padrões CONARQ <br />e e-ARQ Brasil
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkcircle-container">
                  <div className="checkcircle">
                    <div className="arrowright">
                      <CheckCircle className="vector-icon11" weight="regular" style={{ color: ORANGE_LIGHT }} />
                    </div>
                  </div>
                  <div className="text-wrapper">
                    <div className="container66">
                      <div className="lgpd-proteo">
                        Gestão Automática de Prazos Conforme <br />CONARQ
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkcircle-parent2">
                  <div className="checkcircle">
                    <div className="arrowright">
                      <CheckCircle className="vector-icon11" weight="regular" style={{ color: ORANGE_LIGHT }} />
                    </div>
                  </div>
                  <div className="text-wrapper">
                    <div className="container66">
                      <div className="lgpd-proteo">
                        U Trilha de Auditoria para Órgãos de <br />Controle
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkcircle-group">
                  <div className="checkcircle">
                    <div className="arrowright">
                      <CheckCircle className="vector-icon11" weight="regular" style={{ color: ORANGE_LIGHT }} />
                    </div>
                  </div>
                  <div className="text-wrapper">
                    <div className="container66">
                      <div className="lgpd-proteo">Assinatura Digital ICP-Brasil Integrada</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container67">
              <div className="heading-313">
                <div className="conformidade-legal">Segurança da Informação</div>
              </div>
              <div className="container68">
                <div className="checkcircle-group">
                  <div className="checkcircle">
                    <div className="arrowright">
                      <CheckCircle className="vector-icon11" weight="regular" style={{ color: ORANGE_LIGHT }} />
                    </div>
                  </div>
                  <div className="text-wrapper">
                    <div className="container66">
                      <div className="lgpd-proteo">Criptografia em Repouso e em Trânsito</div>
                    </div>
                  </div>
                </div>
                <div className="checkcircle-group">
                  <div className="checkcircle">
                    <div className="arrowright">
                      <CheckCircle className="vector-icon11" weight="regular" style={{ color: ORANGE_LIGHT }} />
                    </div>
                  </div>
                  <div className="text-wrapper">
                    <div className="container66">
                      <div className="lgpd-proteo">Controle Granular de Acesso por Perfil</div>
                    </div>
                  </div>
                </div>
                <div className="checkcircle-group">
                  <div className="checkcircle">
                    <div className="arrowright">
                      <CheckCircle className="vector-icon11" weight="regular" style={{ color: ORANGE_LIGHT }} />
                    </div>
                  </div>
                  <div className="text-wrapper">
                    <div className="container66">
                      <div className="lgpd-proteo">Backup Redundante em Múltiplas Regiões</div>
                    </div>
                  </div>
                </div>
                <div className="checkcircle-group">
                  <div className="checkcircle">
                    <div className="arrowright">
                      <CheckCircle className="vector-icon11" weight="regular" style={{ color: ORANGE_LIGHT }} />
                    </div>
                  </div>
                  <div className="text-wrapper">
                    <div className="container66">
                      <div className="lgpd-proteo">Registro Imutável de Todas as Operações</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="chatgpt-image-5-de-mai-de-202"
          src="/images/chatgpt-2214.jpg"
          alt=""
        />
        <img
          className="gemini-generated-image-10zq711-icon"
          src="/images/gemini-10zq71.jpg"
          alt=""
        />
      </div>

      {/* Section: Target / Soluções */}
      <div className="container-parent3">
        <div className="container69">
          <div className="heading-22">
            <div className="solues-para-o">Soluções para o Setor Público</div>
          </div>
        </div>
        <div className="uma-plataforma-integrada3">
          Cada órgão público tem desafios únicos. eBoxAI foi criado para resolver todos.
        </div>
        <div className="container-parent4">
          <div className="container70">
            <div className="heading-314">
              <div className="prefeituras">Prefeituras</div>
            </div>
            <div className="paragraph12">
              <div className="ocr-com-95">
                Gestão centralizada de toda documentação municipal, da câmara ao arquivo
                histórico.
              </div>
            </div>
          </div>
          <div className="container71">
            <div className="heading-314">
              <div className="prefeituras">Secretarias</div>
            </div>
            <div className="paragraph13">
              <div className="ocr-com-952">
                Controle por secretaria. Saúde, Educação, Fazenda — cada uma com suas
                permissões.
              </div>
            </div>
          </div>
          <div className="container72">
            <div className="heading-314">
              <div className="prefeituras">Protocolo</div>
            </div>
            <div className="paragraph13">
              <div className="ocr-com-953">
                Tramitação e rastreamento de processos com registro completo de movimentações.
              </div>
            </div>
          </div>
          <div className="container72">
            <div className="heading-314">
              <div className="prefeituras">Controle Interno</div>
            </div>
            <div className="paragraph12">
              <div className="ocr-com-954">
                Auditoria facilitada com acesso rápido a trilhas e históricos completos.
              </div>
            </div>
          </div>
          <div className="container71">
            <div className="heading-314">
              <div className="prefeituras">Arquivos Centrais</div>
            </div>
            <div className="paragraph12">
              <div className="ocr-com-955">
                Gestão completa do acervo histórico. Temporalidade automática conforme CONARQ.
              </div>
            </div>
          </div>
          <div className="container70">
            <div className="heading-314">
              <div className="prefeituras">Equipes de Arquivo</div>
            </div>
            <div className="paragraph12">
              <div className="ocr-com-956">
                Interface intuitiva para arquivistas — menos treinamento, mais produtividade.
              </div>
            </div>
          </div>
        </div>
        <img
          className="gemini-generated-image-79qp027-icon"
          src="/images/gemini-79qp02.jpg"
          alt=""
        />
      </div>

      {/* Section: Accordion (dark) */}
      <div className="dashboardpreview2">
        <div className="frame-container">
          <div className="heading-2-parent">
            <div className="heading-25">
              <div className="seu-arquivo-fsico">
                <span>Seu Arquivo Físico Conectado em</span>
                <span className="tempo-real"> Tempo Real</span>
              </div>
            </div>
            <div className="uma-plataforma-integrada4">
              A e-BoxAI integra logística, digitalização e inteligência artificial em um único
              fluxo, garantindo controle total sobre cada documento desde a coleta até a
              recuperação.
            </div>
          </div>
          <div className="container-parent5">
            {[
              { Icon: BoxArrowUp, label: "Logística integrada", iconClass: "vector-icon20" },
              { Icon: MapTrifold, label: "Mapeamento de Acervo", iconClass: "vector-icon21" },
              { Icon: MagnifyingGlass, label: "Busca Unificada", iconClass: "vector-icon22" },
              { Icon: ListMagnifyingGlass, label: "Rastreabilidade Total", iconClass: "vector-icon23" },
              { Icon: Timer, label: "Temporalidade Documental", iconClass: "vector-icon10" },
              { Icon: Tag, label: "Etiquetas Inteligentes", iconClass: "vector-icon25" },
              { Icon: ChartLine, label: "Painéis Gerenciais", iconClass: "vector-icon7" },
              { Icon: Graph, label: "IoT & Automação", iconClass: "vector-icon27" },
            ].map((item, i) => {
              const wrapperClass = [
                "container76",
                "container79",
                "container82",
                "container85",
                "container88",
                "container91",
                "container94",
                "container97",
              ][i];
              return (
                <div key={item.label} className={wrapperClass}>
                  <div className="container77">
                    <div className="container78">
                      <div className="boxarrowup">
                        <div className="arrowright">
                          <item.Icon className={item.iconClass} weight="regular" style={{ color: ORANGE }} />
                        </div>
                      </div>
                      <b className="mapeamento-de-acervo">{item.label}</b>
                    </div>
                    <div className="button">
                      <Plus className="icon2" weight="bold" style={{ color: ORANGE }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section: Intelligence (dark) */}
      <div className="dashboardpreview3">
        <div className="heading-26">
          <div className="a-inteligncia-que-container">
            <span>A Inteligência que Organiza o seu Legado e</span>
            <span className="tempo-real"> Impulsiona o seu Futuro</span>
          </div>
        </div>
        <div className="uma-plataforma-integrada5">
          Na e-BoxAI, acreditamos que a gestão de documentos não deve ser um obstáculo, mas um
          ativo estratégico para a sua organização. Unimos a solidez e a segurança do
          arquivamento físico com o poder transformador da Inteligência Artificial para criar
          uma solução de ponta a ponta que atende tanto ao setor público quanto ao privado.
        </div>
        <div className="uma-plataforma-integrada-container">
          <p className="blank-line">&nbsp;</p>
          <ul className="digitalizao-de-alta-performa">
            <li className="processamento-com-ocr">
              Digitalização de Alta Performance: Captura nítida de cada detalhe.
            </li>
          </ul>
          <p className="blank-line">&nbsp;</p>
          <ul className="digitalizao-de-alta-performa">
            <li className="processamento-com-ocr">
              Processamento com OCR: Reconhecimento inteligente de conteúdo em múltiplos idiomas.
            </li>
          </ul>
          <p className="blank-line">&nbsp;</p>
          <ul className="digitalizao-de-alta-performa">
            <li className="processamento-com-ocr">
              Indexação LLM: Compreensão de significado e contexto por IA generativa.
            </li>
          </ul>
          <p className="blank-line">&nbsp;</p>
          <ul className="digitalizao-de-alta-performa">
            <li className="processamento-com-ocr">
              Estruturação Automática: Organização hierárquica baseada no conteúdo real.
            </li>
          </ul>
          <p className="blank-line">&nbsp;</p>
          <ul className="digitalizao-de-alta-performa">
            <li>
              Disponibilidade: Localize qualquer documento por conceito ou relação,
              instantaneamente.
            </li>
          </ul>
        </div>
        <img
          className="gemini-generated-image-lv1jszl-icon"
          src="/images/gemini-lv1jsz.jpg"
          alt=""
        />
      </div>

      {/* Section: CTA Form */}
      <div className="ctasection">
        <div className="container100">
          <div className="container101">
            <div className="heading-27">
              <div className="pronto-para-transformar">Pronto para Transformar Seu Arquivo?</div>
            </div>
            <div className="paragraph18">
              <div className="agende-uma-demonstrao">
                Agende uma demonstração gratuita e veja o eBoxAI em funcionamento com dados do
                seu órgão.
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
              {[
                { label: "Nome completo", type: "text" },
                { label: "Instituição / Órgão", type: "text" },
                { label: "E-mail institucional", type: "email" },
              ].map((field) => (
                <div className="text-field" key={field.label}>
                  <div className="text-field2">
                    <div className="state-layer">
                      <div className="content">
                        <div className="input-text-container">
                          <input
                            className="input-text"
                            type={field.type}
                            placeholder={field.label}
                            style={{ border: 0, outline: 0, background: "transparent", flex: 1, font: "inherit", color: "inherit" }}
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
                          style={{ border: 0, outline: 0, background: "transparent", flex: 1, font: "inherit", color: "inherit" }}
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
                          style={{ border: 0, outline: 0, background: "transparent", flex: 1, font: "inherit", color: "inherit", resize: "none" }}
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
                          style={{ appearance: "none", margin: 0, cursor: "pointer" }}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="li-e-concordo-container">
                    Li e concordo com a Política de
                    <span className="privacidade-e-os"> Privacidade e os Termos de Uso</span>.
                  </div>
                </label>
                <label className="checkboxes-parent">
                  <div className="checkboxes">
                    <div className="checkboxes2">
                      <div className="state-layer6">
                        <input
                          type="checkbox"
                          className="container108"
                          style={{ appearance: "none", margin: 0, cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="li-e-concordo-container">
                    Concordo em receber o contato da e-BoxAI de acordo com <br />a Política de
                    Privacidade.
                  </div>
                </label>
              </div>
              <button
                type="submit"
                className="toggle-button-elevated"
                style={{ border: 0, padding: 0, background: "transparent", cursor: "pointer", textAlign: "inherit" }}
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

      {/* Hero */}
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
                Seus documentos estão seguros…<br />ou você só espera que estejam?
              </div>
              <div className="gesto-inteligente-de">
                Gestão inteligente de documentos com segurança, rastreabilidade e inteligência
                artificial.
              </div>
            </div>
            <div className="toggle-button-elevated-parent">
              <div className="container-wrapper">
                <a href="#cta" className="toggle-button-elevated4">
                  <div className="content8">
                    <div className="state-layer10">
                      <div className="icon15">
                        <div className="arrowright">
                          <ArrowRight className="vector-icon34" weight="bold" style={{ color: WHITE }} />
                        </div>
                      </div>
                      <div className="label">Solicitar Demonstração Gratuita</div>
                    </div>
                  </div>
                </a>
              </div>
              <a href="#archive" className="button-outline2">
                <div className="button-outline3">
                  <div className="content9">
                    <div className="state-layer11">
                      <div className="icon15">
                        <div className="arrowright">
                          <ArrowRight className="vector-icon34" weight="bold" style={{ color: DARK }} />
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
                <ShieldCheck className="vector-icon36" weight="regular" style={{ color: DARK }} />
              </div>
            </div>
          </div>
          <div className="seus-documentos-esto">Segurança<br />de ponta a ponta</div>
        </div>
        <div className="frame-parent5">
          <div className="shieldcheck-wrapper">
            <div className="shieldcheck5">
              <div className="arrowright">
                <MagnifyingGlass className="vector-icon37" weight="regular" style={{ color: DARK }} />
              </div>
            </div>
          </div>
          <div className="seus-documentos-esto">Busca inteligente<br />e rápida</div>
        </div>
        <div className="frame-parent6">
          <div className="shieldcheck-wrapper">
            <div className="shieldcheck5">
              <div className="arrowright">
                <FileMagnifyingGlass className="vector-icon38" weight="regular" style={{ color: DARK }} />
              </div>
            </div>
          </div>
          <div className="seus-documentos-esto">Rastreabilidade<br />completa</div>
        </div>
        <div className="caretdown">
          <div className="arrowright">
            <CaretDown className="vector-icon39" weight="bold" style={{ color: DARK }} />
          </div>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className="component-3">
        <div className="container-frame">
          <a href="#top" className="container121" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="logo-container">
              <LogoNetwork className="vector-icon40" style={{ color: ORANGE }} />
              <LogoBox className="vector-icon41" style={{ color: "#0f172a" }} />
            </div>
            <div className="company-name">
              <span>e-Box</span>
              <span className="tempo-real">AI</span>
            </div>
          </a>
        </div>
        <nav className="container-parent7">
          <a href="#features" className="container122" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="plataforma2">Plataforma</div>
          </a>
          <a href="#process" className="container123" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="label">IA & Digitalização</div>
          </a>
          <a href="#compliance" className="container123" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="plataforma2">Segurança</div>
          </a>
          <a href="#target" className="container123" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="plataforma2">Empresas</div>
          </a>
        </nav>
      </header>

      {/* FAB WhatsApp */}
      <a
        href="https://wa.me/5564984043097"
        target="_blank"
        rel="noopener noreferrer"
        className="fab"
        aria-label="WhatsApp"
        style={{ textDecoration: "none" }}
      >
        <div className="state-layer12">
          <div className="icon17">
            <div className="arrowright">
              <WhatsappLogo className="vector-icon42" weight="fill" style={{ color: WHITE }} />
            </div>
          </div>
        </div>
      </a>
    </div>
    <Footer />
    </>
  );
}
