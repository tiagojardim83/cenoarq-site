"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ParallaxImage({
  src,
  alt,
  priority,
  className,
  imgClassName,
  strength = 40,
  panAmount = 24,
  panDuration = 9000,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  strength?: number;
  panAmount?: number;
  panDuration?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let raf = 0;

    function update(time: number) {
      const el = containerRef.current;
      const img = imgRef.current;
      if (el && img) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const progress =
          (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
        const clampedY = Math.max(-1, Math.min(1, progress)) * strength;

        // Continuous left-right pan, independent of scroll — loops forever.
        const x = Math.sin((time / panDuration) * Math.PI * 2) * panAmount;

        img.style.transform = `scale(1.15) translate(${x}px, ${clampedY}px)`;
      }
      raf = requestAnimationFrame(update);
    }

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [strength, panAmount, panDuration]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className ?? "relative h-full w-full"}`}>
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover will-change-transform ${imgClassName ?? ""}`}
      />
    </div>
  );
}
