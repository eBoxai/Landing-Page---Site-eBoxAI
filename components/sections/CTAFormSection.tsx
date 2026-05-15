"use client";

import { useState } from "react";
import { Clock, Medal, ShieldCheck, Star } from "@phosphor-icons/react/dist/ssr";
import LegalModal from "@/components/ui/LegalModal";
import { PrivacyContent, TermsContent } from "@/components/legal/LegalContent";

type LegalModalKind = null | "privacy" | "terms";

const FIELDS: { name: string; label: string; type: string; required?: boolean }[] = [
  { name: "nome", label: "Nome completo", type: "text", required: true },
  { name: "instituicao", label: "Instituição / Órgão", type: "text" },
  { name: "email", label: "E-mail institucional", type: "email", required: true },
];

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; message: string };

type FieldErrors = Partial<Record<
  "nome" | "email" | "telefone" | "lgpd" | "aceita_contato",
  string
>>;

function validateForm(data: {
  nome: string;
  email: string;
  telefone: string;
  lgpd: boolean;
  aceita_contato: boolean;
}): FieldErrors {
  const errors: FieldErrors = {};
  if (data.nome.trim().length < 2) {
    errors.nome = "Informe seu nome completo";
  }
  if (!data.email.trim()) {
    errors.email = "Informe seu e-mail institucional";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "E-mail inválido";
  }
  const onlyDigits = data.telefone.replace(/\D/g, "");
  if (!data.telefone.trim()) {
    errors.telefone = "Informe seu telefone";
  } else if (onlyDigits.length < 8) {
    errors.telefone = "Telefone inválido (mín. 8 dígitos)";
  }
  if (!data.lgpd) {
    errors.lgpd = "É necessário aceitar a Política de Privacidade e os Termos de Uso";
  }
  if (!data.aceita_contato) {
    errors.aceita_contato = "É necessário autorizar o contato da e-BoxAI";
  }
  return errors;
}

export default function CTAFormSection() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [legalModal, setLegalModal] = useState<LegalModalKind>(null);
  const [errors, setErrors] = useState<FieldErrors>({});

  const clearError = (field: keyof FieldErrors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status.kind === "loading") return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const lgpdEl = form.elements.namedItem("lgpd") as HTMLInputElement | null;
    const aceitaEl = form.elements.namedItem("aceita_contato") as HTMLInputElement | null;

    const payload = {
      nome: String(formData.get("nome") ?? ""),
      instituicao: String(formData.get("instituicao") ?? ""),
      email: String(formData.get("email") ?? ""),
      telefone: String(formData.get("telefone") ?? ""),
      descricao: String(formData.get("descricao") ?? ""),
      lgpd: !!lgpdEl?.checked,
      aceita_contato: !!aceitaEl?.checked,
      _honeypot: String(formData.get("_honeypot") ?? ""),
    };

    // VALIDAÇÃO CLIENT-SIDE — antes de enviar
    const fieldErrors = validateForm(payload);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      // Foca no 1º campo com erro
      const firstErrField = Object.keys(fieldErrors)[0];
      const el = form.elements.namedItem(firstErrField) as HTMLElement | null;
      el?.focus();
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      setStatus({ kind: "idle" });
      return;
    }

    setErrors({});
    setStatus({ kind: "loading" });

    try {
      const res = await fetch("/send-email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let result: { ok?: boolean; error?: string } = {};
      try {
        result = await res.json();
      } catch {
        // resposta não-JSON
      }

      if (!res.ok || !result.ok) {
        throw new Error(result.error || `Erro ${res.status} ao enviar`);
      }

      setStatus({ kind: "success" });
      form.reset();
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "Erro desconhecido",
      });
    }
  };

  const isLoading = status.kind === "loading";

  return (
    <div className="ctasection" id="cta">
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
          <form className="form" onSubmit={handleSubmit} noValidate>
            {/* Honeypot anti-bot — campo invisível que humanos nunca preenchem */}
            <input
              type="text"
              name="_honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: 1,
                height: 1,
                opacity: 0,
                pointerEvents: "none",
              }}
            />

            {FIELDS.map((field) => {
              const labelWithMark = field.required ? `${field.label} *` : field.label;
              const fieldErr = errors[field.name as keyof FieldErrors];
              return (
                <div className="text-field" key={field.name}>
                  <div
                    className="text-field2"
                    style={fieldErr ? { borderColor: "#ef4444" } : undefined}
                  >
                    <div className="state-layer">
                      <div className="content">
                        <div className="input-text-container">
                          <input
                            className="input-text"
                            name={field.name}
                            type={field.type}
                            placeholder={labelWithMark}
                            disabled={isLoading}
                            aria-invalid={fieldErr ? "true" : undefined}
                            aria-describedby={fieldErr ? `err-${field.name}` : undefined}
                            onChange={() => clearError(field.name as keyof FieldErrors)}
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
                          <div
                            className="label-text"
                            style={fieldErr ? { color: "#ef4444" } : undefined}
                          >
                            {labelWithMark}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {fieldErr && (
                    <div
                      id={`err-${field.name}`}
                      role="alert"
                      style={{
                        color: "#ef4444",
                        fontSize: 12,
                        marginTop: 4,
                        paddingLeft: 4,
                      }}
                    >
                      {fieldErr}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="text-field7">
              <div
                className="text-field8"
                style={errors.telefone ? { borderColor: "#ef4444" } : undefined}
              >
                <div className="state-layer">
                  <div className="content">
                    <div className="input-text-container">
                      <input
                        className="input-text"
                        name="telefone"
                        type="tel"
                        placeholder="Telefone / WhatsApp *"
                        disabled={isLoading}
                        aria-invalid={errors.telefone ? "true" : undefined}
                        aria-describedby={errors.telefone ? "err-telefone" : undefined}
                        onChange={() => clearError("telefone")}
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
                      <div
                        className="label-text"
                        style={errors.telefone ? { color: "#ef4444" } : undefined}
                      >
                        Telefone / WhatsApp *
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {errors.telefone && (
                <div
                  id="err-telefone"
                  role="alert"
                  style={{
                    color: "#ef4444",
                    fontSize: 12,
                    marginTop: 4,
                    paddingLeft: 4,
                  }}
                >
                  {errors.telefone}
                </div>
              )}
            </div>
            <div className="text-field9">
              <div className="text-field2">
                <div className="state-layer">
                  <div className="content5">
                    <div className="input-text-container">
                      <textarea
                        className="input-text"
                        name="descricao"
                        rows={1}
                        placeholder="Descreva brevemente seu acervo ou desafio atual"
                        disabled={isLoading}
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
              <div>
                <label className="checkboxes-parent">
                  <div className="checkboxes">
                    <div className="checkboxes2">
                      <div className="state-layer6">
                        <input
                          type="checkbox"
                          name="lgpd"
                          className="container108"
                          disabled={isLoading}
                          aria-invalid={errors.lgpd ? "true" : undefined}
                          aria-describedby={errors.lgpd ? "err-lgpd" : undefined}
                          onChange={() => clearError("lgpd")}
                          style={{
                            appearance: "none",
                            margin: 0,
                            cursor: "pointer",
                            borderColor: errors.lgpd ? "#ef4444" : undefined,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="li-e-concordo-container"
                    style={errors.lgpd ? { color: "#ef4444" } : undefined}
                  >
                    Li e concordo com a{" "}
                    <button
                      type="button"
                      className="legal-link"
                      onClick={(e) => {
                        e.preventDefault();
                        setLegalModal("privacy");
                      }}
                    >
                      Política de Privacidade
                    </button>{" "}
                    e os{" "}
                    <button
                      type="button"
                      className="legal-link"
                      onClick={(e) => {
                        e.preventDefault();
                        setLegalModal("terms");
                      }}
                    >
                      Termos de Uso
                    </button>
                    .
                  </div>
                </label>
                {errors.lgpd && (
                  <div
                    id="err-lgpd"
                    role="alert"
                    style={{
                      color: "#ef4444",
                      fontSize: 12,
                      marginTop: 4,
                      paddingLeft: 30,
                    }}
                  >
                    {errors.lgpd}
                  </div>
                )}
              </div>
              <div>
                <label className="checkboxes-parent">
                  <div className="checkboxes">
                    <div className="checkboxes2">
                      <div className="state-layer6">
                        <input
                          type="checkbox"
                          name="aceita_contato"
                          className="container108"
                          disabled={isLoading}
                          aria-invalid={errors.aceita_contato ? "true" : undefined}
                          aria-describedby={errors.aceita_contato ? "err-aceita" : undefined}
                          onChange={() => clearError("aceita_contato")}
                          style={{
                            appearance: "none",
                            margin: 0,
                            cursor: "pointer",
                            borderColor: errors.aceita_contato ? "#ef4444" : undefined,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="li-e-concordo-container"
                    style={errors.aceita_contato ? { color: "#ef4444" } : undefined}
                  >
                    Concordo em receber o contato da e-BoxAI de acordo com a{" "}
                    <button
                      type="button"
                      className="legal-link"
                      onClick={(e) => {
                        e.preventDefault();
                        setLegalModal("privacy");
                      }}
                    >
                      Política de Privacidade
                    </button>
                    .
                  </div>
                </label>
                {errors.aceita_contato && (
                  <div
                    id="err-aceita"
                    role="alert"
                    style={{
                      color: "#ef4444",
                      fontSize: 12,
                      marginTop: 4,
                      paddingLeft: 30,
                    }}
                  >
                    {errors.aceita_contato}
                  </div>
                )}
              </div>
            </div>

            {status.kind === "success" && (
              <div
                role="status"
                style={{
                  background: "#dcfce7",
                  color: "#166534",
                  border: "1px solid #86efac",
                  borderRadius: 12,
                  padding: "12px 16px",
                  fontSize: 14,
                  lineHeight: 1.45,
                }}
              >
                ✓ Mensagem enviada! Nossa equipe entrará em contato em breve.
              </div>
            )}
            {status.kind === "error" && (
              <div
                role="alert"
                style={{
                  background: "#fee2e2",
                  color: "#991b1b",
                  border: "1px solid #fca5a5",
                  borderRadius: 12,
                  padding: "12px 16px",
                  fontSize: 14,
                  lineHeight: 1.45,
                }}
              >
                ✕ {status.message}. Tente novamente ou envie e-mail direto para{" "}
                <strong>suporte@eboxai.com.br</strong>.
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="toggle-button-elevated"
              style={{
                border: 0,
                padding: 0,
                background: "transparent",
                cursor: isLoading ? "wait" : "pointer",
                textAlign: "inherit",
                opacity: isLoading ? 0.7 : 1,
                transition: "opacity 200ms ease",
              }}
            >
              <div className="toggle-button-elevated2">
                <div className="content6">
                  <div className="state-layer8">
                    <div className="label">
                      {isLoading ? "Enviando..." : "Solicitar Demonstração Gratuita"}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>

      <LegalModal
        open={legalModal === "terms"}
        onClose={() => setLegalModal(null)}
        title="Termos e Condições de Uso"
      >
        <TermsContent />
      </LegalModal>
      <LegalModal
        open={legalModal === "privacy"}
        onClose={() => setLegalModal(null)}
        title="Política de Privacidade"
      >
        <PrivacyContent />
      </LegalModal>
    </div>
  );
}
