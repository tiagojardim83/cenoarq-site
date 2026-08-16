"use client";

import { useEffect, useRef, useState } from "react";
import { stats, type Stat } from "@/lib/data";
import { useCenterActive } from "@/hooks/useCenterActive";

function StatNumber({ target, active }: { target: number; active: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }

    let start: number | null = null;
    let raf = 0;
    const duration = 1200;

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return <>{value}</>;
}

function StatItem({
  stat,
  index,
  revealed,
}: {
  stat: Stat;
  index: number;
  revealed: boolean;
}) {
  const target = parseInt(stat.value.replace("+", ""), 10);
  const { ref, active } = useCenterActive<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="group border-y border-black/20 pb-6 pt-6 transition-all duration-700 ease-out"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <p className="font-display text-6xl text-black sm:text-7xl lg:text-[85px]">
        <span className="font-normal">+</span>
        <span className="font-black">
          <StatNumber target={target} active={revealed} />
        </span>
      </p>
      <p
        className={`mt-1 text-xl transition-colors duration-300 sm:text-2xl lg:text-[28px] ${
          active ? "text-brand-red" : "text-black/50 group-hover:text-brand-red"
        }`}
      >
        {stat.label}
      </p>
    </div>
  );
}

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
        <StatItem key={stat.label} stat={stat} index={i} revealed={visible} />
      ))}
    </div>
  );
}
