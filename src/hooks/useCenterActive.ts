"use client";

import { useEffect, useRef, useState } from "react";

// On desktop, "hover" is handled by plain CSS :hover. Touch devices have
// no cursor, so instead we treat an element as "active" while it's
// crossing the vertical center of the screen (works scrolling either
// direction). Desktop is left alone — the observer never attaches there.
export function useCenterActive<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: none)").matches) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, active };
}
