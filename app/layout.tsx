import type { Metadata } from "next";
import "./globals.css";
import "./figma.css";

export const metadata: Metadata = {
  title: "e-BoxAI — Gestão Documental Inteligente para o Setor Público",
  description:
    "Gestão inteligente de documentos com segurança, rastreabilidade e inteligência artificial. Conformidade LGPD, CONARQ e e-ARQ Brasil.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Gothic&family=Inter:wght@400;500;600;700&family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
