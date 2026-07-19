import Image from "next/image";
import Link from "next/link";
import { nav, contact } from "@/lib/data";
import { assetPath } from "@/lib/site-config";
import NewsletterForm from "@/components/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 md:px-10">
        <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Seja o primeiro a
          <br />
          receber nossas novidades!
        </h2>

        <div className="mt-10">
          <NewsletterForm />
        </div>

        <div className="mt-20 flex flex-col gap-12 border-t border-white/15 py-10 sm:flex-row sm:items-start sm:justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={assetPath("/logos/Vanilla_cenoarq_horizontal.png")}
              alt="Cenoarq"
              width={120}
              height={28}
              className="h-auto w-auto"
            />
          </Link>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-20">
            <div>
              <h3 className="text-sm font-semibold text-white/90">Navegação</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white/90">Social</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white/90">Contatos</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>
                  <a href={`mailto:${contact.email}`} className="hover:text-white">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${contact.phone.replace(/\s|-/g, "")}`} className="hover:text-white">
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Whatsapp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <a
            href="#top"
            aria-label="Voltar ao topo"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-black"
          >
            ↑
          </a>
        </div>

        <div className="border-t border-white/15 py-6 text-xs text-white/50">
          © {new Date().getFullYear()} Cenoarq. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
