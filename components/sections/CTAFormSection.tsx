"use client";

import { useState } from "react";
import { ShieldCheck, Medal, Timer, Star, CheckCircle } from "@phosphor-icons/react";
import FloatingField from "@/components/ui/FloatingField";

const trustBadges = [
  { icon: ShieldCheck, label: "Conformidade LGPD" },
  { icon: Medal, label: "Conforme CONARQ" },
  { icon: Timer, label: "Demo em 30min" },
  { icon: Star, label: "Suporte incluído" },
];

export default function CTAFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    institution: "",
    email: "",
    phone: "",
    description: "",
    privacy: false,
    contact: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.privacy) return;
    setSubmitted(true);
  };

  return (
    <section id="cta" className="bg-brand py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-center lg:gap-32">
        <div>
          <h2 className="font-display text-4xl uppercase leading-tight tracking-[0.05em] text-white sm:text-5xl lg:text-[48px]">
            Pronto para Transformar Seu Arquivo?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white">
            Agende uma demonstração gratuita e veja o eBoxAI em funcionamento com dados do seu
            órgão.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {trustBadges.map((b) => (
              <li key={b.label} className="flex items-center gap-3 text-white">
                <b.icon size={30} weight="regular" className="shrink-0" />
                <span className="text-base">{b.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-8 sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center py-6 text-center">
              <CheckCircle size={56} weight="fill" className="text-brand" />
              <h3 className="mt-4 text-xl font-semibold text-text">Solicitação enviada!</h3>
              <p className="mt-2 text-base text-mute-2">
                Nossa equipe entrará em contato em até 24 horas úteis.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="mb-2 text-xl font-semibold text-text">Falar com um Especialista</h3>

              <FloatingField
                label="Nome completo"
                required
                value={form.name}
                onChange={(v) => setForm((s) => ({ ...s, name: v }))}
              />
              <FloatingField
                label="Instituição / Órgão"
                required
                value={form.institution}
                onChange={(v) => setForm((s) => ({ ...s, institution: v }))}
              />
              <FloatingField
                label="E-mail institucional"
                type="email"
                required
                value={form.email}
                onChange={(v) => setForm((s) => ({ ...s, email: v }))}
              />
              <FloatingField
                label="Telefone / WhatsApp"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm((s) => ({ ...s, phone: v }))}
              />
              <FloatingField
                as="textarea"
                label="Descreva brevemente seu acervo ou desafio atual"
                rows={3}
                value={form.description}
                onChange={(v) => setForm((s) => ({ ...s, description: v }))}
              />

              <label className="mt-2 flex items-start gap-3 text-xs text-mute-2">
                <input
                  type="checkbox"
                  required
                  checked={form.privacy}
                  onChange={(e) => setForm((s) => ({ ...s, privacy: e.target.checked }))}
                  className="mt-0.5 h-4 w-4 accent-brand"
                />
                <span>
                  Li e concordo com a Política de{" "}
                  <a href="#" className="underline">Privacidade e os Termos de Uso</a>.
                </span>
              </label>

              <label className="flex items-start gap-3 text-xs text-mute-2">
                <input
                  type="checkbox"
                  checked={form.contact}
                  onChange={(e) => setForm((s) => ({ ...s, contact: e.target.checked }))}
                  className="mt-0.5 h-4 w-4 accent-brand"
                />
                <span>
                  Concordo em receber o contato da e-BoxAI de acordo com a Política de
                  Privacidade.
                </span>
              </label>

              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-text px-6 py-4 text-base font-semibold text-white shadow-[0_2px_6px_2px_rgba(0,0,0,0.15),0_1px_2px_rgba(0,0,0,0.3)] transition-colors hover:bg-dark-2"
              >
                Solicitar Demonstração Gratuita
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
