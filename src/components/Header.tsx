import Link from "next/link";
import Image from "next/image";
import { nav } from "@/lib/data";
import { assetPath } from "@/lib/site-config";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-16 md:py-6">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-70">
          <Image
            src={assetPath("/logos/cenoarq_horizontal.svg")}
            alt="Cenoarq"
            width={155}
            height={29}
            priority
          />
        </Link>
        <nav className="hidden gap-10 text-sm tracking-wide sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-black/80 transition-colors hover:text-black"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
