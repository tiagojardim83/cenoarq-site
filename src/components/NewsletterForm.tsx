"use client";

import { useState, FormEvent } from "react";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("done");
  }

  if (status === "done") {
    return (
      <p className="text-sm text-white/70">
        Obrigado! Em breve você receberá nossas novidades.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm items-center justify-between rounded-full border border-white/30 py-1.5 pl-5 pr-1.5"
    >
      <input
        type="email"
        required
        placeholder="Seu e-mail"
        className="w-full bg-transparent text-base text-white placeholder:text-white/50 focus:outline-none"
      />
      <button
        type="submit"
        className="group flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-base font-medium text-black transition-all duration-300 hover:bg-white/90"
      >
        Sign Up{" "}
        <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
