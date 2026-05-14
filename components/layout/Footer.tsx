import {
  Envelope,
  Phone,
  MapPin,
  LinkedinLogo,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";
import Logo from "@/components/ui/Logo";

const solutions = [
  "Mapeamento de Acervo",
  "Busca Unificada",
  "Rastreabilidade",
  "Gestão de Prazos",
  "Sensores Inteligentes",
];

const products = ["Plataforma", "IA & Digitalização", "Segurança", "Empresas"];
const compliance = ["Política de privacidade", "Termos de uso"];
const badges = ["LGPD", "CONARQ", "ISO 27001"];
const socials = [
  { Icon: LinkedinLogo, label: "LinkedIn" },
  { Icon: InstagramLogo, label: "Instagram" },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return <h4 className="text-base font-semibold text-surface">{children}</h4>;
}

function Link({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="text-xs font-normal text-surface transition-colors hover:text-white">
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="flex flex-col bg-dark pt-16 lg:min-h-[434px]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-[45px]">
          <div>
            <Logo variant="light" />
            <p className="mt-2 max-w-[399px] text-xs font-normal leading-relaxed text-surface">
              Gestão Documental Inteligente para o Setor Público
            </p>

            <div className="mt-6 flex items-center gap-4">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-5 w-5 items-center justify-center text-surface transition-colors hover:text-brand"
                >
                  <Icon size={20} weight="fill" />
                </a>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded bg-dark-2 px-3 py-1 text-[11px] leading-[1.5] text-surface"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <ColumnHeading>Soluções</ColumnHeading>
            <ul className="flex flex-col gap-2">
              {solutions.map((s) => (
                <li key={s} className="leading-tight">
                  <Link>{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <ColumnHeading>Produtos</ColumnHeading>
            <ul className="flex flex-col gap-2">
              {products.map((p) => (
                <li key={p} className="leading-tight">
                  <Link>{p}</Link>
                </li>
              ))}
            </ul>
            <h4 className="text-base font-semibold text-surface">Conformidade</h4>
            <ul className="flex flex-col gap-2">
              {compliance.map((c) => (
                <li key={c} className="leading-tight">
                  <Link>{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-[22px]">
            <div className="flex flex-col gap-4">
              <ColumnHeading>Contato</ColumnHeading>
              <ul className="flex flex-col gap-2 text-xs font-normal leading-tight text-surface">
                <li className="flex items-center gap-2">
                  <Envelope size={16} className="shrink-0" />
                  <span className="min-w-0 flex-1 break-words">suporte@eboxai.com.br</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="shrink-0" />
                  <span className="min-w-0 flex-1 break-words">64 98404-3097</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span className="min-w-0 flex-1 break-words leading-[1.4]">
                    Av. JK nº 293 Qd. 67 Lt. 4 e 5, Morada do Sol, Rio Verde GO CEP 75.909-080
                  </span>
                </li>
              </ul>
            </div>
            <a
              href="#cta"
              className="inline-flex items-center justify-center self-start rounded-full border border-surface px-3 py-1.5 text-base font-semibold text-surface transition-colors hover:bg-surface hover:text-dark"
            >
              Fale com um Especialista
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-7xl px-4 sm:px-6 lg:mt-auto">
        <div className="border-t border-divider pt-8 pb-5">
          <p className="text-center text-[13px] leading-[1.5] text-mute-2">
            © 2026 eBoxAI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
