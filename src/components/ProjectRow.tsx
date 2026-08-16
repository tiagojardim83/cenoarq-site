"use client";

import Link from "next/link";
import { useCenterActive } from "@/hooks/useCenterActive";
import { hoverLetters } from "@/components/HoverLetters";
import type { Project } from "@/lib/data";

export default function ProjectRow({ project }: { project: Project }) {
  const { ref, active } = useCenterActive<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      href={`/projetos/${project.slug}`}
      className="group flex flex-col gap-2 border-b border-black/10 py-8"
    >
      <div className="flex items-baseline justify-between gap-4">
        <p
          className={`font-display text-2xl font-extrabold transition-all duration-300 ease-out sm:text-3xl ${
            active ? "translate-x-2 !text-brand-red" : "group-hover:translate-x-2"
          }`}
        >
          {hoverLetters(project.title, project.slug)}
        </p>
        <span className="hidden text-xl italic text-black/40 sm:inline sm:text-2xl lg:text-[27px]">
          {project.category}
        </span>
        <span className="text-base text-black/50">/ {project.year}</span>
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <p
          className={`text-base italic text-black/50 transition-all duration-300 ease-out sm:text-lg ${
            active ? "translate-x-2" : "group-hover:translate-x-2"
          }`}
        >
          {project.subtitle}
        </p>
        <span
          className={`text-base italic text-black/50 underline decoration-black/30 underline-offset-4 transition-colors ${
            active ? "!text-brand-red" : "group-hover:text-brand-red"
          }`}
        >
          ver mais
        </span>
      </div>
    </Link>
  );
}
