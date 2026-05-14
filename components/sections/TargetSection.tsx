import Image from "next/image";

const targets = [
  {
    title: "Prefeituras",
    body: "Gestão centralizada de toda documentação municipal, da câmara ao arquivo histórico.",
  },
  {
    title: "Secretarias",
    body: "Controle por secretaria. Saúde, Educação, Fazenda — cada uma com suas permissões.",
  },
  {
    title: "Protocolo",
    body: "Tramitação e rastreamento de processos com registro completo de movimentações.",
  },
  {
    title: "Controle Interno",
    body: "Auditoria facilitada com acesso rápido a trilhas e históricos completos.",
  },
  {
    title: "Arquivos Centrais",
    body: "Gestão completa do acervo histórico. Temporalidade automática conforme CONARQ.",
  },
  {
    title: "Equipes de Arquivo",
    body: "Interface intuitiva para arquivistas — menos treinamento, mais produtividade.",
  },
];

export default function TargetSection() {
  return (
    <section id="target" className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl uppercase leading-tight text-dark sm:text-5xl lg:text-[48px]">
            Soluções para o Setor Público
          </h2>
          <p className="mt-4 text-base text-body sm:text-lg lg:text-xl">
            Cada órgão público tem desafios únicos. eBoxAI foi criado para resolver todos.
          </p>
        </header>

        <div className="mt-10 grid items-start gap-8 sm:mt-12 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,445px)] lg:gap-10">
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[17px]">
            {targets.map((t) => (
              <article
                key={t.title}
                className="rounded-[14px] border border-body/60 bg-dark p-5 sm:p-[22px] lg:p-[25px]"
              >
                <h3 className="text-lg font-semibold text-surface sm:text-xl lg:leading-[30px]">
                  {t.title}
                </h3>
                <p className="mt-2 text-[15px] text-surface/85 sm:text-base">
                  {t.body}
                </p>
              </article>
            ))}
          </div>

          <div className="relative mx-auto aspect-[445/609] w-full max-w-sm overflow-hidden rounded-2xl lg:max-w-none">
            <Image
              src="/images/gemini-79qp02.jpg"
              alt="Setor público"
              fill
              sizes="(min-width: 1024px) 445px, (min-width: 640px) 384px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
