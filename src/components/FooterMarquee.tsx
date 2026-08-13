const REPEAT = 4;
const text = "Cenoarq — Arquitetura";
const base = Array.from({ length: REPEAT }, () => text);
const track = [...base, ...base];

export default function FooterMarquee() {
  return (
    <div className="marquee-wrap overflow-hidden border-y border-white/15 py-6">
      <div className="flex w-max animate-marquee items-center gap-16">
        {track.map((t, i) => (
          <span
            key={i}
            className="font-display whitespace-nowrap text-5xl font-extrabold uppercase tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
