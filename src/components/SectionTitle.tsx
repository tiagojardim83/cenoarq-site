"use client";

import { createElement, type CSSProperties, type ReactNode } from "react";
import { useCenterActive } from "@/hooks/useCenterActive";
import { hoverLetters } from "@/components/HoverLetters";

function renderHoverable(children: ReactNode, keyPrefix: string): ReactNode {
  if (typeof children === "string") {
    return hoverLetters(children, keyPrefix);
  }
  if (Array.isArray(children)) {
    return children.map((child, i) =>
      typeof child === "string" ? (
        <span key={`${keyPrefix}-part-${i}`}>
          {hoverLetters(child, `${keyPrefix}-${i}`)}
        </span>
      ) : (
        child
      ),
    );
  }
  return children;
}

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
    renderHoverable(children, "title"),
  );
}
