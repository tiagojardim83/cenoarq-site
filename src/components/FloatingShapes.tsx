import Image from "next/image";
import { assetPath } from "@/lib/site-config";

export default function FloatingShapes({ images }: { images: string[] }) {
  const track = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-16 py-4 sm:gap-20">
        {track.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-24 w-24 shrink-0 animate-spin sm:h-32 sm:w-32 md:h-40 md:w-40"
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
        ))}
      </div>
    </div>
  );
}
