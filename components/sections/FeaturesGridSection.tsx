import Image from "next/image";
import {
  Barcode,
  ThermometerSimple,
  BellRinging,
  Lock,
  ShieldCheck,
  Timer,
} from "@phosphor-icons/react/dist/ssr";

type Feature = {
  icon: React.ComponentType<{ size?: number; weight?: "regular" | "bold" | "fill"; className?: string }>;
  title: string;
  body: string;
  highlight: string;
  image: string;
};

// Imagens placeholder por enquanto — substitua por fotos próprias em /public/images/features/.
const features: Feature[] = [
  {
    icon: Barcode,
    title: "Rastreamento Inteligente",
    body: "Etiquetas RFID identificam localização exata de cada caixa e pasta no arquivo físico.",
    highlight: "99,8% de precisão de rastreamento",
    image: "/images/gemini-122dul.jpg",
  },
  {
    icon: ThermometerSimple,
    title: "Monitoramento Contínuo",
    body: "Sensores monitoram temperatura e umidade para preservação ideal do acervo histórico.",
    highlight: "24/7 em tempo real",
    image: "/images/gemini-10zq71.jpg",
  },
  {
    icon: BellRinging,
    title: "Notificações em Tempo Real",
    body: "Notificações imediatas por e-mail e app quando parâmetros saem do limite aceitável.",
    highlight: "60% redução de perdas documentais",
    image: "/images/chatgpt-2214.jpg",
  },
  {
    icon: Timer,
    title: "Localização com IA",
    body: "Localização e recuperação de documentos 10 vezes mais ágil que métodos tradicionais.",
    highlight: "10x Mais Rápido",
    image: "/images/gemini-79qp02.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade Total",
    body: "Cada ação registrada. Conformidade total com CGU, TCU e controladoria interna.",
    highlight: "Auditável",
    image: "/images/gemini-lv1jsz.jpg",
  },
  {
    icon: Lock,
    title: "Proteção de Dados",
    body: "Controle de acesso granular, criptografia e logs de auditoria nativos à plataforma.",
    highlight: "Pronto para Conformidade",
    image: "/images/hero-1925.jpg",
  },
];

export default function FeaturesGridSection() {
  return (
    <section id="features" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl uppercase leading-tight text-text sm:text-5xl lg:text-[48px]">
            Seu Arquivo Físico Conectado em Tempo Real
          </h2>
        </header>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative isolate flex aspect-[266/371] flex-col overflow-hidden rounded-2xl border-t-[3px] border-brand bg-white p-6 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.25)]"
            >
              <Image
                src={f.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="-z-10 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="flex h-full flex-col transition-opacity duration-300 group-hover:opacity-0">
                <f.icon size={32} className="text-brand" weight="regular" />
                <h3 className="mt-4 text-lg font-bold text-text">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{f.body}</p>
                <p className="mt-auto pt-6 font-display text-2xl uppercase leading-tight text-brand">
                  {f.highlight}
                </p>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 opacity-0 transition-opacity delay-150 duration-500 group-hover:opacity-100">
                <h3 className="text-lg font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                  {f.title}
                </h3>
                <p className="font-display text-2xl uppercase leading-tight text-brand-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                  {f.highlight}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
