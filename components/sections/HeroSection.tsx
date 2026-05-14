import Image from "next/image";
import {
  ArrowRight,
  CaretDown,
  ShieldCheck,
  MagnifyingGlass,
  FileMagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";

const pills = [
  { icon: ShieldCheck, label: "Segurança\nde ponta a ponta" },
  { icon: MagnifyingGlass, label: "Busca inteligente\ne rápida" },
  { icon: FileMagnifyingGlass, label: "Rastreabilidade\ncompleta" },
];

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-bg"
      style={{ minHeight: "min(100svh, 1024px)" }}
    >
      <Image
        src="/images/hero-1925.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />

      <div className="relative flex min-h-[100svh] flex-col px-4 sm:px-6 lg:px-12">
        <div className="flex flex-1 items-center pt-28 pb-8 sm:pt-32 lg:pb-12">
          <div className="glass w-full max-w-[705px] rounded-2xl border border-white/40 p-8 sm:p-10 lg:px-[58px] lg:py-14">
            <div className="flex flex-col items-stretch gap-6 sm:gap-8 lg:gap-[37px]">
              <h1 className="font-display text-left text-4xl leading-[1.05] text-text sm:text-5xl lg:text-[64px]">
                Seus documentos estão seguros…
                <br />
                ou você só espera que estejam?
              </h1>
              <p className="text-justify text-base text-text sm:text-lg lg:text-xl">
                Gestão inteligente de documentos com segurança, rastreabilidade e inteligência
                artificial.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[23px] lg:mt-[68px]">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-base font-semibold text-white shadow-[0_2px_6px_2px_rgba(0,0,0,0.15),0_1px_2px_rgba(0,0,0,0.3)] transition-colors hover:bg-[#c2410c] lg:text-xl"
              >
                <ArrowRight size={24} weight="regular" />
                Solicitar Demonstração Gratuita
              </a>
              <a
                href="#archive"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-text bg-transparent px-6 py-4 text-base font-semibold text-text transition-colors hover:bg-text hover:text-white lg:text-xl"
              >
                <ArrowRight size={24} weight="regular" />
                Saiba mais
              </a>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-wrap items-end justify-center gap-8 pb-12 sm:justify-end sm:gap-12">
          {pills.map((p) => (
            <div key={p.label} className="flex flex-col items-center gap-1 text-center">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full backdrop-blur"
                style={{ backgroundColor: "rgba(248, 250, 252, 0.3)" }}
              >
                <p.icon size={22} className="text-divider" weight="regular" />
              </span>
              <span className="whitespace-pre-line text-xs text-body">{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#problems"
        aria-label="Descer"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text/70 hover:text-brand"
      >
        <CaretDown size={48} weight="regular" className="animate-bounce-y" />
      </a>
    </section>
  );
}
