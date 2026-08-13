import { clients } from "@/lib/data";
import { assetPath } from "@/lib/site-config";

export default function ClientsMarquee() {
  const track = [...clients, ...clients];

  return (
    <div className="marquee-wrap overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-20 py-4">
        {track.map((client, i) => {
          const url = assetPath(client.logo);
          return (
            <div
              key={`${client.name}-${i}`}
              role="img"
              aria-label={client.name}
              className="h-10 w-[140px] shrink-0 bg-black opacity-70 transition-opacity duration-300 hover:opacity-100 md:h-12"
              style={{
                WebkitMaskImage: `url(${url})`,
                maskImage: `url(${url})`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
