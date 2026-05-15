import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./figma.css";

const SITE_URL = "https://eboxai.com.br";
const SITE_NAME = "e-BoxAI";
const SITE_TITLE = "e-BoxAI — Gestão Documental Inteligente para o Setor Público";
const SITE_DESCRIPTION =
  "Plataforma de gestão documental com IA para o setor público. Digitalização com OCR, indexação automática conforme CONARQ, conformidade LGPD e rastreabilidade completa do acervo físico e digital.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | e-BoxAI",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "gestão documental",
    "gestão de documentos",
    "digitalização de documentos",
    "OCR",
    "LGPD",
    "CONARQ",
    "e-ARQ Brasil",
    "arquivo público",
    "setor público",
    "inteligência artificial",
    "rastreabilidade documental",
    "temporalidade documental",
    "eBoxAI",
  ],
  authors: [{ name: "e-BoxAI" }],
  creator: "e-BoxAI",
  publisher: "e-BoxAI",
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/hero-1925.webp",
        width: 1600,
        height: 1067,
        alt: "e-BoxAI — Gestão Documental Inteligente para o Setor Público",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/hero-1925.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#ea580c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect às origens de fontes (CRP — economiza ~100ms na LCP) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Preload do hero — primeira imagem visível (melhora LCP no mobile) */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-1925.webp"
          fetchPriority="high"
        />
        {/* Fonts do Google com display=swap (evita FOIT/CLS) */}
        <link
          href="https://fonts.googleapis.com/css2?family=League+Gothic&family=Inter:wght@400;500;600;700&family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD: Organization (Schema.org) — rich snippets pro Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "e-BoxAI",
              url: SITE_URL,
              logo: `${SITE_URL}/favicon.ico`,
              description: SITE_DESCRIPTION,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. JK nº 293 Qd. 67 Lt. 4 e 5",
                addressLocality: "Rio Verde",
                addressRegion: "GO",
                postalCode: "75.909-080",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: "suporte@eboxai.com.br",
                telephone: "+55-64-98404-3097",
                areaServed: "BR",
                availableLanguage: ["Portuguese"],
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
