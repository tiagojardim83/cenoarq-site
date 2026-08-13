"use client";

import { createElement, type CSSProperties, type ReactNode } from "react";
import { useCenterActive } from "@/hooks/useCenterActive";

export default function SectionTitle({
  as = "h2",
  className,
  style,
  children,
}: {
  as?: "h1" | "h2" | "h3";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const { ref, active } = useCenterActive<HTMLHeadingElement>();

  return createElement(
    as,
    {
      ref,
      style,
      className: `${className ?? ""} ${active ? "!text-brand-red" : ""}`,
    },
    children,
  );
}
