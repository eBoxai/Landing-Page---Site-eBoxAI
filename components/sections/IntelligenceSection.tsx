import Image from "next/image";

const items = [
  "Digitalização de Alta Performance: Captura nítida de cada detalhe.",
  "Processamento com OCR: Reconhecimento inteligente de conteúdo em múltiplos idiomas.",
  "Indexação LLM: Compreensão de significado e contexto por IA generativa.",
  "Estruturação Automática: Organização hierárquica baseada no conteúdo real.",
  "Disponibilidade: Localize qualquer documento por conceito ou relação, instantaneamente.",
];

export default function IntelligenceSection() {
  return (
    <section id="intelligence" className="bg-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl uppercase leading-tight text-white sm:text-5xl lg:text-[48px]">
            A Inteligência que Organiza o seu Legado e{" "}
            <span className="text-brand">Impulsiona o seu Futuro</span>
          </h2>
        </header>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,567px)] lg:gap-16">
          <div className="text-white">
            <p className="text-justify text-lg leading-relaxed">
              Na e-BoxAI, acreditamos que a gestão de documentos não deve ser um obstáculo, mas
              um ativo estratégico para a sua organização. Unimos a solidez e a segurança do
              arquivamento físico com o poder transformador da Inteligência Artificial para
              criar uma solução de ponta a ponta que atende tanto ao setor público quanto ao
              privado.
            </p>
            <ul className="mt-8 flex flex-col gap-4 pl-4 marker:text-white">
              {items.map((it) => (
                <li key={it} className="list-disc text-lg leading-relaxed">
                  {it}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[567/416] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/gemini-lv1jsz.jpg"
              alt="Inteligência artificial aplicada à gestão documental"
              fill
              sizes="(min-width: 1024px) 567px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
