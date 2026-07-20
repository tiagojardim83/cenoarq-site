import Image from "next/image";
import Link from "next/link";
import { projects, clients, aboutText } from "@/lib/data";
import { assetPath } from "@/lib/site-config";
import ClientsMarquee from "@/components/ClientsMarquee";
import ServicesAccordion from "@/components/ServicesAccordion";
import HeroCarousel from "@/components/HeroCarousel";
import StatsGrid from "@/components/StatsGrid";
import AnimatedPlusMarks from "@/components/AnimatedPlusMarks";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Home() {
  return (
    <div id="top">
      {/* Hero */}
      <HeroCarousel />

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-[1600px] px-6 py-24 md:px-16">
        <AnimatedPlusMarks
          className="flex items-start justify-between text-black/70"
          style={{ fontSize: "clamp(28px, 5.5vw, 70px)" }}
        />

        <h2
          className="font-display mt-6 font-extrabold leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(24px, 6.25vw, 100px)" }}
        >
          Transformando espaços em experiências memoráveis.
        </h2>

        <div
          className="mt-10 space-y-4 text-black/70"
          style={{ fontSize: "clamp(12px, 1.5625vw, 25px)" }}
        >
          {aboutText.map((paragraph, i) => (
            <p key={i}>
              {i === 0
                ? (() => {
                    const marker = "CENOARQ";
                    const idx = paragraph.indexOf(marker);
                    return (
                      <>
                        {paragraph.slice(0, idx)}
                        <span className="font-bold">{marker}</span>
                        {paragraph.slice(idx + marker.length)}
                      </>
                    );
                  })()
                : paragraph}
            </p>
          ))}
        </div>

        <StatsGrid />
      </section>

      {/* Serviços */}
      <section id="servicos">
        <div className="relative aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[1920/955]">
          <Image
            src={assetPath("/images/services-banner.jpg")}
            alt="Serviços — arquitetura e cenografia"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-between px-6 py-10 sm:px-16 sm:py-14">
            <div className="flex items-start justify-between text-3xl font-bold sm:text-4xl">
              <span aria-hidden>+</span>
              <span aria-hidden>+</span>
            </div>
            <div className="flex items-baseline gap-3">
              <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-[79px]">
                SERVIÇOS
              </h2>
              <span className="whitespace-nowrap text-base italic text-black/60 sm:text-xl">
                / {pad(2)}
              </span>
            </div>
          </div>
        </div>

        <ServicesAccordion />
      </section>

      {/* Projetos */}
      <section id="projetos">
        <div className="relative aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[1920/955]">
          <Image
            src={assetPath("/images/projetos-banner.jpg")}
            alt="Projetos"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-between px-6 py-10 sm:px-16 sm:py-14">
            <div className="flex items-start justify-between text-3xl font-bold sm:text-4xl">
              <span aria-hidden>+</span>
              <span aria-hidden>+</span>
            </div>
            <div className="flex items-baseline gap-3">
              <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-[79px]">
                PROJETOS
              </h2>
              <span className="whitespace-nowrap text-base italic text-black/60 sm:text-xl">
                / {pad(projects.length)}
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="flex items-center justify-between border-b border-black/10 py-4 text-xs uppercase tracking-widest text-black/50">
            <span>Projeto</span>
            <span className="hidden sm:inline">Categoria</span>
            <span>Ano</span>
          </div>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projetos/${project.slug}`}
              className="group flex items-center justify-between gap-4 border-b border-black/10 py-8"
            >
              <div>
                <p className="font-display text-2xl font-extrabold sm:text-3xl">
                  {project.title}
                </p>
                <p className="text-base italic text-black/50 sm:text-lg">
                  {project.subtitle}
                </p>
              </div>
              <span className="hidden text-xl italic text-black/40 sm:inline sm:text-2xl lg:text-[27px]">
                {project.category}
              </span>
              <div className="flex items-center gap-4">
                <span className="text-base text-black/50">/ {project.year}</span>
                <span className="text-base underline decoration-black/30 underline-offset-4 group-hover:text-black">
                  ver mais
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="flex items-baseline gap-2">
            <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[62px]">
              CLIENTES
            </h2>
            <span className="text-sm italic text-black/40">
              / {pad(clients.length)}
            </span>
          </div>
        </div>
        <div className="mt-10">
          <ClientsMarquee />
        </div>
      </section>
    </div>
  );
}
