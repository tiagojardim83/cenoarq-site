"use client";

import { useEffect, useRef, useState } from "react";

const CYAN = "#22d3ee";
const RED = "#b11e29";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    function onMove(e: MouseEvent) {
      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest(
        "a, button, h1, h2, h3, [data-cursor-hover]",
      );
      setActive(isInteractive);
    }

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", onMove);
    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full transition-[width,height,background-color] duration-200 ease-out"
      style={{
        width: active ? 32 : 14,
        height: active ? 32 : 14,
        backgroundColor: active ? RED : CYAN,
      }}
    />
  );
}
