import Image from "next/image";
import {
  FileMagnifyingGlass,
  MagnifyingGlass,
  Scales,
  Timer,
} from "@phosphor-icons/react/dist/ssr";

const problems = [
  {
    icon: FileMagnifyingGlass,
    title: "Documentos extraviados",
    description: "Arquivos perdidos geram retrabalho e custos operacionais elevados.",
  },
  {
    icon: MagnifyingGlass,
    title: "Falta de rastreabilidade",
    description: "Impossível saber quem acessou, moveu ou modificou documentos críticos.",
  },
  {
    icon: Scales,
    title: "Riscos jurídicos",
    description:
      "Não conformidade com regulamentações pode resultar em multas e processos.",
  },
  {
    icon: Timer,
    title: "Tempo perdido",
    description: "Horas desperdiçadas procurando informações que deveriam estar acessíveis.",
  },
];

export default function ProblemsSection() {
  return (
    <section id="problems" className="bg-surface">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 sm:py-16 lg:py-[65px]">
        <header className="mx-auto max-w-[846px] text-center">
          <h2 className="font-display text-[36px] leading-none text-text sm:text-[42px] lg:text-[48px]">
            Os desafios do arquivo público
          </h2>
          <p className="mt-4 text-base text-body sm:text-lg lg:text-xl">
            Uma plataforma integrada, do acervo físico à busca com IA.
          </p>
        </header>

        <div className="mt-12 flex flex-col items-center gap-10 lg:mt-[99px] lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 xl:px-[144px]">
          <div className="flex w-full max-w-[477px] flex-col gap-4">
            {problems.map((p) => (
              <article
                key={p.title}
                className="flex items-center gap-4 rounded-xl bg-brand p-3 text-surface lg:h-[95px] lg:px-[10px] lg:py-[5px]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center lg:h-[43px] lg:w-[43px]">
                  <p.icon size={36} weight="regular" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold leading-tight sm:text-lg lg:text-xl">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-snug sm:text-base">{p.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative aspect-[435/426] w-full max-w-[435px] overflow-hidden rounded-2xl shadow-[0_4px_9.2px_5px_rgba(0,0,0,0.25)] lg:shrink-0">
            <Image
              src="/images/gemini-122dul.jpg"
              alt="Acervo físico organizado"
              fill
              sizes="(min-width:1024px) 435px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
