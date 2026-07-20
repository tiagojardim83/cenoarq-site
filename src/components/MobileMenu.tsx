"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { nav, contact } from "@/lib/data";
import { assetPath } from "@/lib/site-config";

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3a9 9 0 0 0-7.75 13.55L3 21l4.6-1.2A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8.6c.2-.5.5-.5.8-.5h.6c.2 0 .5 0 .7.5.2.5.7 1.7.8 1.8.1.2.1.4 0 .6-.1.2-.2.3-.4.5-.2.2-.4.4-.2.7.2.4.9 1.4 1.9 2.2 1.3 1 2.3 1.4 2.6 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.6.8 1.9 1 .3.1.5.2.5.4 0 .2 0 .9-.4 1.3-.4.5-1.4 1-2.3 1-2.1 0-4.3-1.2-5.9-2.7-1.6-1.6-2.8-3.7-2.8-5.8 0-.9.4-1.6.8-2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span className="block h-0.5 w-6 bg-black" />
        <span className="block h-0.5 w-6 bg-black" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex items-center justify-between px-6 py-5">
            <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
              <Image
                src={assetPath("/logos/cenoarq_horizontal.svg")}
                alt="Cenoarq"
                width={140}
                height={26}
                priority
              />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="flex h-10 w-10 items-center justify-center text-2xl"
            >
              ×
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-6 px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-extrabold tracking-tight"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-8 border-t border-black/10 px-8 py-8">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 text-black/70 transition-colors hover:text-black"
            >
              <InstagramIcon />
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center gap-2 text-black/70 transition-colors hover:text-black"
            >
              <WhatsappIcon />
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
