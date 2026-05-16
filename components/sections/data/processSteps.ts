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
    title: "Processamento Inteligente",
    body: "Digitalize e processe grandes volumes de documentos simultaneamente sem perda de velocidade. O motor de processamento da e-BoxAI organiza, classifica e valida cada arquivo em tempo real, eliminando gargalos manuais e permitindo que sua equipe foque na análise, não na burocracia do arquivamento.",
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
    body: "Transformamos o caos de arquivos em um banco de dados estruturado. Cada documento recebe metadados automáticos e tags de identificação, permitindo que você localize qualquer arquivo físico ou digital em segundos através de uma busca por palavras-chave ou categorias específicas.",
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
    body: "Unificamos a organização das prateleiras físicas com a taxonomia digital. Nossa plataforma estrutura metadados e localizações geográficas dentro do depósito, permitindo uma gestão visual e técnica completa do inventário com máxima precisão e controle de ponta a ponta.",
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
    title: "Disponibilidade",
    body: " Localize e visualize seus documentos de forma imediata. Integramos filtros inteligentes e metadados para que a recuperação de qualquer arquivo seja precisa, informando instantaneamente o status de consulta e a localização física para retirada, se necessário.",
    stats: [
      { value: "<200ms", label: "BUSCA" },
      { value: "WEB", label: "+ MOBILE + API" },
      { value: "AUDITORIA", label: "TOTAL" },
    ],
  },
];
