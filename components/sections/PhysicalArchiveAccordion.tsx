"use client";

import { useState } from "react";
import {
  Minus,
  Plus,
  BoxArrowUp,
  Folders,
  MagnifyingGlass,
  ListMagnifyingGlass,
  Timer,
  Tag,
  ChartLine,
  Graph,
} from "@phosphor-icons/react";

type Item = {
  icon: React.ComponentType<{ size?: number; weight?: "regular" | "bold" | "fill"; className?: string }>;
  title: string;
  body: string;
};

const items: Item[] = [
  {
    icon: BoxArrowUp,
    title: "Logística integrada",
    body: "Catalogação completa do acervo físico e digital com localização precisa de cada documento.",
  },
  {
    icon: Folders,
    title: "Mapeamento de Acervo",
    body: "Catalogação completa do acervo físico e digital com localização precisa de cada documento.",
  },
  {
    icon: MagnifyingGlass,
    title: "Busca Unificada",
    body: "Pesquise por conceito, autor, data ou conteúdo — seu acervo físico e digital em um único índice.",
  },
  {
    icon: ListMagnifyingGlass,
    title: "Rastreabilidade Total",
    body: "Cada movimento registrado: quem acessou, moveu ou alterou, com trilha imutável de auditoria.",
  },
  {
    icon: Timer,
    title: "Temporalidade Documental",
    body: "Tabelas de temporalidade automatizadas conforme CONARQ — alertas para guarda, transferência e eliminação.",
  },
  {
    icon: Tag,
    title: "Etiquetas Inteligentes",
    body: "RFID e QR Code identificam cada caixa em tempo real, integrados aos sensores e à plataforma.",
  },
  {
    icon: ChartLine,
    title: "Painéis Gerenciais",
    body: "Indicadores em tempo real de produção, ocupação física, prazos e SLA para gestão e auditoria.",
  },
  {
    icon: Graph,
    title: "IoT & Automação",
    body: "Sensores ambientais e atuadores conectados à plataforma — preservação e segurança automatizadas.",
  },
];

export default function PhysicalArchiveAccordion() {
  const [open, setOpen] = useState<Set<number>>(new Set([0, 1]));

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section id="archive" className="bg-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl uppercase leading-tight text-surface sm:text-5xl lg:text-[48px]">
            Seu Arquivo Físico Conectado em <span className="text-brand">Tempo Real</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-surface/90">
            A e-BoxAI integra logística, digitalização e inteligência artificial em um único
            fluxo, garantindo controle total sobre cada documento desde a coleta até a
            recuperação.
          </p>
        </header>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {items.map((it, i) => {
            const isOpen = open.has(i);
            return (
              <button
                key={it.title}
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className={`group rounded-2xl bg-white p-6 text-left shadow-[0_8px_32px_rgba(234,88,12,0.12)] transition-all ${
                  isOpen ? "border-2 border-brand" : "border-2 border-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <it.icon size={28} className="shrink-0 text-brand" weight="regular" />
                  <span className="flex-1 text-center text-lg font-bold text-dark">
                    {it.title}
                  </span>
                  <span className="grid h-7 w-7 shrink-0 place-items-center text-brand">
                    {isOpen ? <Minus size={18} weight="bold" /> : <Plus size={18} weight="bold" />}
                  </span>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 text-base leading-relaxed text-mute-2">{it.body}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
