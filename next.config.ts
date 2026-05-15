import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera site 100% estático em ./out (sem precisar de Node.js no servidor).
  output: "export",
  // Cria URLs como /pagina/ em vez de /pagina — funciona em qualquer host.
  trailingSlash: true,
  // Desabilita Image Optimization (precisa de servidor Next.js). Nosso projeto
  // usa <img> simples, mas previne falha caso adicionem next/image depois.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
