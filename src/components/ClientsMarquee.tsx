import Image from "next/image";
import { clients } from "@/lib/data";
import { assetPath } from "@/lib/site-config";

export default function ClientsMarquee() {
  const track = [...clients, ...clients];

  return (
    <div className="marquee-wrap overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-20 py-4">
        {track.map((client, i) => (
          <Image
            key={`${client.name}-${i}`}
            src={assetPath(client.logo)}
            alt={client.name}
            width={140}
            height={56}
            className="h-10 w-auto shrink-0 object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-12"
          />
        ))}
      </div>
    </div>
  );
}
