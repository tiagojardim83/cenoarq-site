"use client";

import { useState } from "react";
import { services } from "@/lib/data";

export default function ServicesAccordion() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-[1600px] divide-y divide-black/10 border-b border-black/10 px-6 md:px-16">
      {services.map((service) => {
        const isOpen = openSlug === service.slug;
        return (
          <div key={service.slug}>
            <button
              type="button"
              onClick={() => setOpenSlug(isOpen ? null : service.slug)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between py-8 text-left"
            >
              <h3 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                {service.title.toUpperCase()}
              </h3>
              <span
                className="text-3xl text-black/60 transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className="grid overflow-hidden transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0">
                <p className="max-w-2xl pb-8 text-lg text-black/70 sm:text-xl">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
