const TARGETS: { title: string; body: string; bodyClass: string; cardClass: string }[] = [
  {
    title: "Prefeituras",
    body: "Gestão centralizada de toda documentação municipal, da câmara ao arquivo histórico.",
    bodyClass: "ocr-com-95",
    cardClass: "container70",
  },
  {
    title: "Secretarias",
    body: "Controle por secretaria. Saúde, Educação, Fazenda — cada uma com suas permissões.",
    bodyClass: "ocr-com-952",
    cardClass: "container71",
  },
  {
    title: "Protocolo",
    body: "Tramitação e rastreamento de processos com registro completo de movimentações.",
    bodyClass: "ocr-com-953",
    cardClass: "container72",
  },
  {
    title: "Controle Interno",
    body: "Auditoria facilitada com acesso rápido a trilhas e históricos completos.",
    bodyClass: "ocr-com-954",
    cardClass: "container72",
  },
  {
    title: "Arquivos Centrais",
    body: "Gestão completa do acervo histórico. Temporalidade automática conforme CONARQ.",
    bodyClass: "ocr-com-955",
    cardClass: "container71",
  },
  {
    title: "Equipes de Arquivo",
    body: "Interface intuitiva para arquivistas — menos treinamento, mais produtividade.",
    bodyClass: "ocr-com-956",
    cardClass: "container70",
  },
];

const PARAGRAPH_CLASS = ["paragraph12", "paragraph13", "paragraph13", "paragraph12", "paragraph12", "paragraph12"];

export default function TargetSection() {
  return (
    <div className="container-parent3" id="target">
      <div className="container-stage3">
        <div className="container69">
          <div className="heading-22">
            <div className="solues-para-o">Soluções para o Setor Público</div>
          </div>
        </div>
        <div className="uma-plataforma-integrada3">
          Cada órgão público tem desafios únicos. eBoxAI foi criado para
          resolver todos.
        </div>
        <div className="container-parent4">
          {TARGETS.map((t, i) => (
            <div key={t.title} className={t.cardClass}>
              <div className="heading-314">
                <div className="prefeituras">{t.title}</div>
              </div>
              <div className={PARAGRAPH_CLASS[i]}>
                <div className={t.bodyClass}>{t.body}</div>
              </div>
            </div>
          ))}
        </div>
        <img
          className="gemini-generated-image-79qp027-icon"
          src="/images/gemini-79qp02.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
