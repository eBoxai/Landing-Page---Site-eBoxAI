import LogoMark from "@/components/ui/LogoMark";

type Variant = "dark" | "light";

export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const isDark = variant === "dark";
  const eBoxColor = isDark ? "#0F172A" : "#FFFFFF";
  // Em fundo escuro, abas navy somem — usa branco pra manter legibilidade.
  const flapColor = isDark ? "#0F172A" : "#FFFFFF";
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <LogoMark
        flapColor={flapColor}
        style={{ width: 52, height: "auto", display: "block" }}
      />
      <span
        className="font-display text-[32px] leading-none tracking-[0.09em] whitespace-nowrap md:text-[40px]"
        style={{ color: eBoxColor }}
      >
        e-Box<span style={{ color: "#EA580C" }}>AI</span>
      </span>
    </span>
  );
}
