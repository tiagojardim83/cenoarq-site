import Image from "next/image";
import Link from "next/link";
import { stats, services, projects, clients, aboutText } from "@/lib/data";
import ClientsMarquee from "@/components/ClientsMarquee";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Home() {
  return (
    <div id="top">
      {/* Hero */}
      <Link href="#servicos" className="block">
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
          <Image
            src="/images/hero-building.jpg"
            alt="Cenoarq — cenografia"
            fill
            priority
            className="object-cover"
          />
        </div>
      </Link>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="flex items-start justify-between text-2xl text-black/70">
          <span aria-hidden>+</span>
          <span aria-hidden>+</span>
        </div>

        <h2 className="font-display mt-6 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
          Transformando espaços em experiências memoráveis.
        </h2>

        <div className="mt-8 max-w-2xl space-y-4 text-black/70">
          {aboutText.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-black/10 pt-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-extrabold sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-black/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos">
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
          <Image
            src="/images/services-banner.jpg"
            alt="Serviços — arquitetura e cenografia"
            fill
            className="object-cover"
          />
        </div>

        <div className="mx-auto max-w-7xl divide-y divide-black/10 border-b border-black/10 px-6 md:px-10">
          {services.map((service) => (
            <div
              key={service.slug}
              className="flex items-center justify-between py-6"
            >
              <h3 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
                {service.title.toUpperCase()}
              </h3>
              <span className="text-2xl text-black/60" aria-hidden>
                +
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos">
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
          <Image
            src="/images/projetos-banner.jpg"
            alt="Projetos"
            fill
            className="object-cover"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-center justify-between border-b border-black/10 py-4 text-xs uppercase tracking-widest text-black/50">
            <span>Projeto</span>
            <span className="hidden sm:inline">Categoria</span>
            <span>Ano</span>
          </div>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projetos/${project.slug}`}
              className="group flex items-center justify-between gap-4 border-b border-black/10 py-6"
            >
              <div>
                <p className="font-display text-lg font-extrabold sm:text-xl">
                  {project.title}
                </p>
                <p className="text-sm italic text-black/50">
                  {project.subtitle}
                </p>
              </div>
              <span className="hidden text-sm text-black/50 sm:inline">
                {project.category}
              </span>
              <div className="flex items-center gap-4">
                <span className="text-sm text-black/50">/ {project.year}</span>
                <span className="text-sm underline decoration-black/30 underline-offset-4 group-hover:text-black">
                  ver mais
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="flex items-baseline gap-2">
          <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
            CLIENTES
          </h2>
          <span className="text-sm italic text-black/40">
            / {pad(clients.length)}
          </span>
        </div>
        <div className="mt-10">
          <ClientsMarquee />
        </div>
      </section>
    </div>
  );
}
