"use client";

import { useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/data";

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
          <div className="flex items-center justify-between px-6 py-4">
            <span className="font-display text-lg font-extrabold">cenoarq</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="flex h-10 w-10 items-center justify-center text-2xl"
            >
              ×
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-6 px-8 pb-20">
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
        </div>
      )}
    </div>
  );
}
