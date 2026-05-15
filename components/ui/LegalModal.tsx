"use client";

import { useEffect, useRef } from "react";
import { X } from "@phosphor-icons/react/dist/ssr";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

/**
 * Modal acessível pra exibir documentos legais (Termos de Uso / Política de Privacidade).
 *
 * Comportamento:
 * - Fecha ao apertar Escape
 * - Fecha ao clicar no backdrop
 * - Trava o scroll do body enquanto aberto
 * - Foco vai pro botão de fechar ao abrir
 * - role="dialog" + aria-modal pra screen readers
 */
export default function LegalModal({ open, onClose, title, children }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Escape fecha o modal
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Trava scroll do body
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Foco no botão de fechar quando abre (acessibilidade)
  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="legal-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="legal-modal-card">
        <header className="legal-modal-head">
          <h2 id="legal-modal-title" className="legal-modal-title">
            {title}
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            className="legal-modal-close"
            aria-label="Fechar"
            onClick={onClose}
          >
            <X size={24} weight="bold" />
          </button>
        </header>
        <div className="legal-modal-body">{children}</div>
      </div>
    </div>
  );
}
