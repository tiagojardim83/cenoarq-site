"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { nav, contact } from "@/lib/data";
import { assetPath } from "@/lib/site-config";
import { InstagramIcon, WhatsappIcon, PhoneIcon } from "@/components/icons";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // On mobile there's no cursor, so the "hover" state instead activates
  // whichever link is passing through the vertical center of the screen
  // as the list scrolls (works scrolling either direction).
  useEffect(() => {
    if (!open) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = linkRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    linkRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const contactLinks = [
    { href: contact.instagram, icon: <InstagramIcon className="h-5 w-5" />, label: "Instagram", external: true },
    {
      href: `tel:${contact.phone.replace(/\s|-/g, "")}`,
      icon: <PhoneIcon className="h-5 w-5" />,
      label: "Telefone",
      external: false,
    },
    { href: contact.whatsappHref, icon: <WhatsappIcon className="h-5 w-5" />, label: "WhatsApp", external: true },
  ];

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-black transition-opacity duration-200 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      <div
        className={`fixed inset-0 z-50 flex flex-col bg-white transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center px-6 py-5">
          <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
            <Image
              src={assetPath("/logos/cenoarq_horizontal_dark.svg")}
              alt="Cenoarq"
              width={140}
              height={26}
              priority
            />
          </Link>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-5 overflow-y-auto px-8">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              ref={(el) => {
                linkRefs.current[i] = el;
              }}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-baseline gap-4 font-display text-4xl font-extrabold tracking-tight transition-colors duration-300 ${
                activeIndex === i ? "text-brand-red" : "text-black"
              }`}
            >
              <span className="text-base font-normal text-black/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-4 border-t border-black/10 px-8 py-8">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 text-black/70 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red hover:text-brand-red"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
