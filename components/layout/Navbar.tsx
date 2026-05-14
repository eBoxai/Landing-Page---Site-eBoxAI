"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import LogoMark from "@/components/ui/LogoMark";

const NAV_LINKS: { href: string; label: string; labelClass: string }[] = [
  { href: "#features", label: "Plataforma", labelClass: "plataforma2" },
  { href: "#process", label: "IA & Digitalização", labelClass: "label" },
  { href: "#compliance", label: "Segurança", labelClass: "plataforma2" },
  { href: "#target", label: "Empresas", labelClass: "plataforma2" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha menu ao apertar Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Trava scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header className={`component-3${menuOpen ? " is-open" : ""}`}>
      <div className="container-frame">
        <a
          href="#top"
          className="container121"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="logo-container">
            <LogoMark style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div className="company-name">
            <span>e-Box</span>
            <span className="tempo-real">AI</span>
          </div>
        </a>
      </div>

      <button
        type="button"
        className="navbar-burger"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        aria-controls="navbar-menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? (
          <X size={28} weight="bold" />
        ) : (
          <List size={28} weight="bold" />
        )}
      </button>

      <nav
        id="navbar-menu"
        className={`container-parent7${menuOpen ? " is-open" : ""}`}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className={i === 0 ? "container122" : "container123"}
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => setMenuOpen(false)}
          >
            <div className={link.labelClass}>{link.label}</div>
          </a>
        ))}
      </nav>
    </header>
  );
}
