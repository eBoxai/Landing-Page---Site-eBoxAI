"use client";

import { useState } from "react";
import {
  BoxArrowUp,
  ChartLine,
  Graph,
  ListMagnifyingGlass,
  MagnifyingGlass,
  MapTrifold,
  Minus,
  Plus,
  Tag,
  Timer,
} from "@phosphor-icons/react/dist/ssr";

const ORANGE = "#ea580c";

type Item = {
  Icon: typeof BoxArrowUp;
  label: string;
  body: string;
  iconClass: string;
  wrapperClass: string;
};

const ITEMS: Item[] = [
  {
    Icon: BoxArrowUp,
    label: "Logística integrada",
    body: "Gestão operacional de ponta a ponta, incluindo o envio de equipe própria para a higienização, organização e transporte seguro do seu acervo para o arquivo.",
    iconClass: "vector-icon20",
    wrapperClass: "container76",
  },
  {
    Icon: MapTrifold,
    label: "Mapeamento de Acervo",
    body: "Catalogação completa do acervo físico e digital com localização precisa de cada documento.",
    iconClass: "vector-icon21",
    wrapperClass: "container79",
  },
  {
    Icon: MagnifyingGlass,
    label: "Busca Unificada",
    body: "Recuperação inteligente de documentos por meio de metadados, tags e IA, eliminando o tempo perdido com procuras manuais no acervo.",
    iconClass: "vector-icon22",
    wrapperClass: "container82",
  },
  {
    Icon: ListMagnifyingGlass,
    label: "Rastreabilidade Total",
    body: "Controle absoluto do histórico de cada documento, com registro em tempo real de quem acessou, editou ou movimentou o arquivo físico e digital.",
    iconClass: "vector-icon23",
    wrapperClass: "container85",
  },
  {
    Icon: Timer,
    label: "Temporalidade Documental",
    body: "Monitoramento inteligente do prazo de validade de cada documento, com alertas automáticos para renovação, arquivamento definitivo ou eliminação.",
    iconClass: "vector-icon10",
    wrapperClass: "container88",
  },
  {
    Icon: Tag,
    label: "Etiquetas Inteligentes",
    body: "Utilização de tecnologia RFID (Identificação por Radiofrequência) e QR Codes para identificar a localização exata de cada caixa e pasta no arquivo físico, permitindo o rastreamento automatizado por radiofrequência.",
    iconClass: "vector-icon25",
    wrapperClass: "container91",
  },
  {
    Icon: ChartLine,
    label: "Painéis Gerenciais",
    body: "Controle estratégico através de gráficos e métricas em tempo real, transformando o inventário físico e digital em inteligência para a tomada de decisão.",
    iconClass: "vector-icon7",
    wrapperClass: "container94",
  },
  {
    Icon: Graph,
    label: "IoT & Automação",
    body: "Integração de sensores inteligentes conectados em tempo real para o monitoramento contínuo de temperatura e umidade, garantindo as condições ambientais ideais para a preservação do acervo.",
    iconClass: "vector-icon27",
    wrapperClass: "container97",
  },
];

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="dashboardpreview2" id="features">
      <div className="frame-container">
        <div className="heading-2-parent">
          <div className="heading-25">
            <div className="seu-arquivo-fsico">
              <span>Seu Arquivo Físico Conectado em</span>
              <span className="tempo-real"> Tempo Real</span>
            </div>
          </div>
          <div className="uma-plataforma-integrada4">
            A e-BoxAI integra logística, digitalização e inteligência
            artificial em um único fluxo, garantindo controle total sobre cada
            documento desde a coleta até a recuperação.
          </div>
        </div>
        <div className="container-parent5">
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            const ToggleIcon = isOpen ? Minus : Plus;
            return (
              <div
                key={item.label}
                className={item.wrapperClass}
                data-open={isOpen || undefined}
              >
                <button
                  type="button"
                  className="container77"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-body-${i}`}
                >
                  <div className="container78">
                    <div className="boxarrowup">
                      <div className="arrowright">
                        <item.Icon
                          className={item.iconClass}
                          weight="regular"
                          style={{ color: ORANGE }}
                        />
                      </div>
                    </div>
                    <b className="mapeamento-de-acervo">{item.label}</b>
                  </div>
                  <div className="button">
                    <ToggleIcon
                      className="icon2"
                      weight="bold"
                      style={{ color: ORANGE }}
                    />
                  </div>
                </button>
                {isOpen && (
                  <div
                    id={`accordion-body-${i}`}
                    className="accordion-body"
                    role="region"
                  >
                    {item.body}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
