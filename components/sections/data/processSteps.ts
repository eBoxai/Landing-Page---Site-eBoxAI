import {
  CheckCircle,
  Folders,
  Lightning,
  MagnifyingGlass,
  Scan,
} from "@phosphor-icons/react/dist/ssr";

export type ProcessStep = {
  num: number;
  label: string;
  /** Label curto pra tabs mobile (cabe em ~60px). */
  shortLabel: string;
  Icon: typeof Scan;
  title: string;
  body: string;
  stats: { value: string; label: string }[];
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: 1,
    label: "Digitalização",
    shortLabel: "Digitalização",
    Icon: Scan,
    title: "Digitalização de Alta Performance",
    body: "Garantimos a integridade dos dados desde o primeiro contato: cada documento passa por uma rigorosa limpeza e ordenação antes da captura. Utilizamos tecnologia de ponta para converter o físico em digital com máxima fidelidade, assegurando nitidez absoluta e acesso imediato à informação.",
    stats: [
      { value: "24/7", label: "MONITORAMENTO" },
      { value: "10", label: "MAIS RÁPIDO" },
      { value: "100%", label: "RASTREÁVEL" },
    ],
  },
  {
    num: 2,
    label: "Processamento Inteligente",
    shortLabel: "Processamento",
    Icon: Lightning,
    title: "Processamento com IA",
    body: "OCR avançado e modelos de IA generativa extraem texto, classificam automaticamente e estruturam metadados em segundos. Múltiplos idiomas, layouts e tipos de arquivo são processados sem intervenção manual, com correção contínua via aprendizado de máquina.",
    stats: [
      { value: "95%+", label: "PRECISÃO OCR" },
      { value: "50+", label: "IDIOMAS" },
      { value: "12s", label: "POR PÁGINA" },
    ],
  },
  {
    num: 3,
    label: "Indexação Conforme CONARQ",
    shortLabel: "Indexação",
    Icon: CheckCircle,
    title: "Indexação Padronizada",
    body: "Cada documento é indexado seguindo a tabela de temporalidade e classificação do CONARQ. Metadados estruturados garantem conformidade legal, recuperação rápida para auditoria e prazos automáticos para transferência ou eliminação.",
    stats: [
      { value: "100%", label: "CONFORMIDADE" },
      { value: "CONARQ", label: "+ e-ARQ BRASIL" },
      { value: "AUDITORIA", label: "PRONTA" },
    ],
  },
  {
    num: 4,
    label: "Classificação Hierárquica",
    shortLabel: "Estruturação",
    Icon: Folders,
    title: "Estrutura Organizada",
    body: "A IA classifica documentos em hierarquias customizáveis por órgão, secretaria ou tipo documental. Tags inteligentes e relações entre arquivos formam uma árvore navegável que reflete a realidade do seu acervo público.",
    stats: [
      { value: "∞", label: "HIERARQUIA" },
      { value: "TAGS", label: "+ RELAÇÕES" },
      { value: "CUSTOM", label: "POR ÓRGÃO" },
    ],
  },
  {
    num: 5,
    label: "Disponibilidade",
    shortLabel: "Disponibilidade",
    Icon: MagnifyingGlass,
    title: "Acesso Imediato",
    body: "Pesquise por conceito, autor, data ou conteúdo. Resultados em milissegundos via plataforma web, mobile ou API. Trilha de auditoria registra cada acesso com permissões granulares por usuário, secretaria ou tipo de documento.",
    stats: [
      { value: "<200ms", label: "BUSCA" },
      { value: "WEB", label: "+ MOBILE + API" },
      { value: "AUDITORIA", label: "TOTAL" },
    ],
  },
];
