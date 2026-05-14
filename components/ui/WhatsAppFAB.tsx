"use client";

import { WhatsappLogo } from "@phosphor-icons/react";

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/5564984043097"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com a e-BoxAI no WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#34c759] text-white shadow-[0_4px_8px_3px_rgba(0,0,0,0.15),0_1px_3px_rgba(0,0,0,0.3)] transition-transform hover:scale-105"
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  );
}
