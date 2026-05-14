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
    body: "Coleta, transporte e custódia segura do acervo físico com rastreamento em cada etapa do trajeto até o nosso centro técnico.",
    iconClass: "vector-icon20",
    wrapperClass: "container76",
  },
  {
    Icon: MapTrifold,
    label: "Mapeamento de Acervo",
    body: "Inventário automático da massa documental com classificação por tipo, secretaria e temporalidade conforme CONARQ.",
    iconClass: "vector-icon21",
    wrapperClass: "container79",
  },
  {
    Icon: MagnifyingGlass,
    label: "Busca Unificada",
    body: "Pesquisa semântica por conceito, autor, data ou conteúdo em milissegundos via plataforma web ou API.",
    iconClass: "vector-icon22",
    wrapperClass: "container82",
  },
  {
    Icon: ListMagnifyingGlass,
    label: "Rastreabilidade Total",
    body: "Cada documento tem trilha completa de movimentações, acessos e edições registrada de forma imutável.",
    iconClass: "vector-icon23",
    wrapperClass: "container85",
  },
  {
    Icon: Timer,
    label: "Temporalidade Documental",
    body: "Gestão automática de prazos de guarda, transferência e eliminação conforme a tabela de temporalidade do órgão.",
    iconClass: "vector-icon10",
    wrapperClass: "container88",
  },
  {
    Icon: Tag,
    label: "Etiquetas Inteligentes",
    body: "RFID e QR Code em cada caixa-arquivo permitem leitura instantânea por scanner ou celular.",
    iconClass: "vector-icon25",
    wrapperClass: "container91",
  },
  {
    Icon: ChartLine,
    label: "Painéis Gerenciais",
    body: "Dashboards em tempo real com indicadores de produtividade, conformidade e SLA por secretaria.",
    iconClass: "vector-icon7",
    wrapperClass: "container94",
  },
  {
    Icon: Graph,
    label: "IoT & Automação",
    body: "Sensores IoT monitoram temperatura, umidade e segurança física do depósito documental 24/7.",
    iconClass: "vector-icon27",
    wrapperClass: "container97",
  },
];

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
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
