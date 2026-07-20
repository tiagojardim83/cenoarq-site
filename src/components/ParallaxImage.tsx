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
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  strength?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;

    function update() {
      ticking = false;
      const el = containerRef.current;
      const img = imgRef.current;
      if (!el || !img) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const progress =
        (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      img.style.transform = `scale(1.15) translateY(${clamped * strength}px)`;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className ?? ""}`}>
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
