const BULLETS = [
  "Digitalização de Alta Performance: Captura nítida de cada detalhe.",
  "Processamento com OCR: Reconhecimento inteligente de conteúdo em múltiplos idiomas.",
  "Indexação LLM: Compreensão de significado e contexto por IA generativa.",
  "Estruturação Automática: Organização hierárquica baseada no conteúdo real.",
  "Disponibilidade: Localize qualquer documento por conceito ou relação, instantaneamente.",
];

export default function IntelligenceSection() {
  return (
    <div className="dashboardpreview3">
      <div className="heading-26">
        <div className="a-inteligncia-que-container">
          <span>A Inteligência que Organiza o seu Legado e</span>
          <span className="tempo-real"> Impulsiona o seu Futuro</span>
        </div>
      </div>
      <div className="uma-plataforma-integrada5">
        Na e-BoxAI, acreditamos que a gestão de documentos não deve ser um
        obstáculo, mas um ativo estratégico para a sua organização. Unimos a
        solidez e a segurança do arquivamento físico com o poder transformador
        da Inteligência Artificial para criar uma solução de ponta a ponta que
        atende tanto ao setor público quanto ao privado.
      </div>
      <div className="uma-plataforma-integrada-container">
        {BULLETS.map((b, i) => (
          <div key={i}>
            <p className="blank-line">&nbsp;</p>
            <ul className="digitalizao-de-alta-performa">
              <li className={i < BULLETS.length - 1 ? "processamento-com-ocr" : undefined}>
                {b}
              </li>
            </ul>
          </div>
        ))}
      </div>
      <img
        className="gemini-generated-image-lv1jszl-icon"
        src="/images/gemini-lv1jsz.webp"
        alt="Inteligência artificial organizando documentos digitalizados"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
