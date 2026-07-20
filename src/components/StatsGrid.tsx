"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

export default function StatsGrid() {
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
    <div
      ref={ref}
      className="mt-16 grid grid-cols-2 gap-x-10 gap-y-16 sm:gap-x-20 sm:gap-y-24 lg:grid-cols-[max-content_max-content] lg:justify-between lg:gap-x-0 lg:px-24"
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="border-y border-black/20 pb-6 pt-6 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transitionDelay: `${i * 120}ms`,
          }}
        >
          <p className="font-display text-6xl text-[#6e6e6e] sm:text-7xl lg:text-[85px]">
            <span className="font-normal">+</span>
            <span className="font-black">{stat.value.replace("+", "")}</span>
          </p>
          <p className="mt-1 text-xl text-[#c2c2c2] sm:text-2xl lg:text-[28px]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
