"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

export default function AnimatedPlusMarks({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      <span
        aria-hidden
        className="inline-block transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "rotate(0deg)" : "rotate(-180deg)",
        }}
      >
        +
      </span>
      <span
        aria-hidden
        className="inline-block transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "rotate(0deg)" : "rotate(-180deg)",
          transitionDelay: "120ms",
        }}
      >
        +
      </span>
    </div>
  );
}
