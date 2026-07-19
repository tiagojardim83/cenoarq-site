import Link from "next/link";
import Image from "next/image";
import { nav } from "@/lib/data";
import { assetPath } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="shrink-0">
          <Image
            src={assetPath("/logos/cenoarq_horizontal.svg")}
            alt="Cenoarq"
            width={140}
            height={33}
            className="h-auto w-auto"
            priority
          />
        </Link>
        <nav className="hidden gap-8 text-sm font-medium tracking-wide sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-black/80 transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
