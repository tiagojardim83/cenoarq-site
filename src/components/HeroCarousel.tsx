"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { heroSlides } from "@/lib/data";
import { assetPath } from "@/lib/site-config";
import ParallaxImage from "@/components/ParallaxImage";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const total = heroSlides.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startAutoplay() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 2000);
  }

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function go(delta: number) {
    setIndex((i) => (i + delta + total) % total);
    startAutoplay();
  }

  return (
    <div className="relative aspect-[4/6] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[1920/1105]">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.image}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <ParallaxImage
            src={assetPath(slide.image)}
            alt={`Cenoarq — ${slide.label}`}
            priority={i === 0}
            className="h-full w-full"
            strength={50}
          />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col justify-between px-6 py-10 sm:px-16 sm:py-14">
        <div className="flex items-center gap-4 text-xl font-extrabold sm:text-2xl">
          <span>{pad(index + 1)}</span>
          <span className="h-px w-20 bg-black/50 sm:w-32" aria-hidden />
          <span>{pad(total)}</span>
        </div>

        <div className="mx-auto flex flex-col items-center gap-5 text-center">
          <span className="text-sm font-medium tracking-[0.3em] sm:text-base lg:text-[25px] lg:tracking-[0.15em]">
            SERVICES
          </span>
          <h1 className="font-display text-4xl font-medium tracking-[0.08em] sm:text-5xl lg:text-[60px]">
            [ {heroSlides[index].label} ]
          </h1>
          <Link
            href="#servicos"
            className="rounded-full border border-black/40 px-7 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
          >
            ver mais
          </Link>
        </div>

        <div className="flex justify-end gap-4 text-lg">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Slide anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:bg-black/10"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próximo slide"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:bg-black/10"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
