"use client";

import { useEffect, useState } from "react";
import ParallaxImage from "@/components/ParallaxImage";
import { assetPath } from "@/lib/site-config";

export default function BannerCarousel({
  images,
  alt,
  holdMs = 4000,
}: {
  images: string[];
  alt: string;
  holdMs?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, holdMs);
    return () => clearInterval(interval);
  }, [images.length, holdMs]);

  return (
    <>
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <ParallaxImage
            src={assetPath(src)}
            alt={`${alt} ${i + 1}`}
            priority={i === 0}
            className="absolute inset-0"
          />
        </div>
      ))}
    </>
  );
}
