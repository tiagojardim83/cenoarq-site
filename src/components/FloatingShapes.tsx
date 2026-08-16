"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { assetPath } from "@/lib/site-config";

const AMPLITUDE = 16;
const BASE_PERIOD = 6000;

export default function FloatingShapes({ images }: { images: string[] }) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;

    function update(time: number) {
      refs.current.forEach((el, i) => {
        if (!el) return;
        const phase = (i / images.length) * Math.PI * 2;
        const period = BASE_PERIOD + i * 350;
        const x = Math.sin((time / period) * Math.PI * 2 + phase) * AMPLITUDE;
        el.style.transform = `translateX(${x}px)`;
      });
      raf = requestAnimationFrame(update);
    }

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [images.length]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-14">
      {images.map((src, i) => (
        <div
          key={src}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className="relative h-24 w-24 shrink-0 will-change-transform sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48"
        >
          <Image
            src={assetPath(src)}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
