const REPEAT = 4;
const text = "Arquitetura & Cenografia";
const base = Array.from({ length: REPEAT }, () => text);
const track = [...base, ...base];

export default function FooterMarquee() {
  return (
    <div className="marquee-wrap overflow-hidden border-y border-white/15 py-6">
      <div className="flex w-max animate-marquee items-center gap-8">
        {track.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display whitespace-nowrap text-5xl font-extrabold uppercase tracking-tight text-brand-red sm:text-7xl lg:text-8xl">
              {t}
            </span>
            <span
              className="text-4xl text-brand-red/50 sm:text-5xl lg:text-6xl"
              aria-hidden
            >
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
