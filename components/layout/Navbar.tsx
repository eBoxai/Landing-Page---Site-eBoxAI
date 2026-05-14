"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "Plataforma", href: "#archive" },
  { label: "IA & Digitalização", href: "#process" },
  { label: "Segurança", href: "#compliance" },
  { label: "Empresas", href: "#target" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-3 sm:px-5">
      <div className="glass mx-auto flex max-w-[1344px] items-center justify-between rounded-2xl px-5 py-4 md:py-[23px]">
        <a href="#top" aria-label="e-BoxAI" className="flex-shrink-0">
          <Logo variant="dark" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-xl font-semibold text-text transition-colors hover:text-brand ${
                  isActive ? "border-b border-surface-2" : "border-b border-transparent"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open && (
        <div className="glass mx-auto mt-2 max-w-[1344px] rounded-2xl p-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-xl font-semibold text-text hover:bg-surface"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
