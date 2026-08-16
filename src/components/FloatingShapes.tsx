import Image from "next/image";
import { assetPath } from "@/lib/site-config";

export default function FloatingShapes({ images }: { images: string[] }) {
  const track = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-16 py-14 sm:gap-20 sm:py-20 md:py-24">
        {track.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="flex h-32 w-32 shrink-0 items-center justify-center sm:h-40 sm:w-40 md:h-48 md:w-48"
          >
            <div
              className="relative h-20 w-20 animate-spin sm:h-24 sm:w-24 md:h-28 md:w-28"
              style={{
                animationDuration: `${10 + (i % images.length)}s`,
              }}
            >
              <Image
                src={assetPath(src)}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
