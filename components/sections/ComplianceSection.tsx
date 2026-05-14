import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

const legal = [
  "LGPD — Proteção de Dados Garantida",
  "Conformidade com Padrões CONARQ\ne e-ARQ Brasil",
  "Gestão Automática de Prazos Conforme\nCONARQ",
  "U Trilha de Auditoria para Órgãos de\nControle",
  "Assinatura Digital ICP-Brasil Integrada",
];

const security = [
  "Criptografia em Repouso e em Trânsito",
  "Controle Granular de Acesso por Perfil",
  "Backup Redundante em Múltiplas Regiões",
  "Registro Imutável de Todas as Operações",
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-5">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-4">
          <CheckCircle
            size={26}
            className="mt-0.5 shrink-0 text-brand-2"
            weight="regular"
          />
          <span className="whitespace-pre-line text-lg text-white">{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ComplianceSection() {
  return (
    <section id="compliance" className="bg-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-24">
          <div className="flex flex-col gap-8">
            <div className="relative aspect-[407/342] overflow-hidden rounded-2xl">
              <Image
                src="/images/gemini-10zq71.jpg"
                alt="Acervo físico com etiquetas QR"
                fill
                sizes="(min-width: 1024px) 407px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[407/342] overflow-hidden rounded-2xl">
              <Image
                src="/images/chatgpt-2214.jpg"
                alt="Sistema de controle de acesso"
                fill
                sizes="(min-width: 1024px) 407px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-14">
            <div>
              <h2 className="font-display text-4xl uppercase leading-tight tracking-[0.05em] text-white sm:text-[38px]">
                Conformidade Legal
              </h2>
              <div className="mt-8">
                <CheckList items={legal} />
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl uppercase leading-tight tracking-[0.05em] text-white sm:text-[38px]">
                Segurança da Informação
              </h2>
              <div className="mt-8">
                <CheckList items={security} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
