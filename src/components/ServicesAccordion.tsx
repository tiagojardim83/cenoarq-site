"use client";

import { useState } from "react";
import { services, type Service } from "@/lib/data";
import { useCenterActive } from "@/hooks/useCenterActive";

function ServiceItem({
  service,
  isOpen,
  onToggle,
}: {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { ref, active } = useCenterActive<HTMLButtonElement>();

  return (
    <div>
      <button
        ref={ref}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between py-8 text-left"
      >
        <h3
          className={`font-display text-3xl font-extrabold tracking-tight text-black transition-colors duration-300 sm:text-4xl ${
            active ? "!text-brand-red" : "group-hover:text-brand-red"
          }`}
        >
          {service.title.toUpperCase()}
        </h3>
        <span
          className={`text-3xl text-black/60 transition-all duration-300 ${
            active ? "!text-brand-red" : "group-hover:text-brand-red"
          }`}
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
}

export default function ServicesAccordion() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-[1600px] divide-y divide-black/10 border-b border-black/10 px-6 md:px-16">
      {services.map((service) => (
        <ServiceItem
          key={service.slug}
          service={service}
          isOpen={openSlug === service.slug}
          onToggle={() => setOpenSlug(openSlug === service.slug ? null : service.slug)}
        />
      ))}
    </div>
  );
}
