import Image from "next/image";
import { clients } from "@/lib/data";

export default function ClientsMarquee() {
  const track = [...clients, ...clients];

  return (
    <div className="overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-20 py-4">
        {track.map((client, i) => (
          <Image
            key={`${client.name}-${i}`}
            src={client.logo}
            alt={client.name}
            width={140}
            height={56}
            className="h-10 w-auto shrink-0 object-contain opacity-70 grayscale transition-opacity hover:opacity-100 md:h-12"
          />
        ))}
      </div>
    </div>
  );
}
