import { LogoBox, LogoNetwork } from "@/components/ui/LogoMark";

type Variant = "dark" | "light";

export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const eBoxColor = variant === "dark" ? "#0F172A" : "#FFFFFF";
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <span className="relative inline-flex flex-col items-center" style={{ width: 52 }}>
        <LogoNetwork
          style={{ color: "#EA580C", width: 20, height: 21, marginLeft: 0 }}
        />
        <LogoBox
          style={{ color: "#EA580C", width: 52, height: 34, marginTop: -5 }}
        />
      </span>
      <span
        className="font-display text-[32px] leading-none tracking-[0.09em] whitespace-nowrap md:text-[40px]"
        style={{ color: eBoxColor }}
      >
        e-Box<span style={{ color: "#EA580C" }}>AI</span>
      </span>
    </span>
  );
}
