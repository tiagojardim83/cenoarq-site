import { projects, clients, aboutText, projetosBannerImages, servicosBannerImages } from "@/lib/data";
import ClientsMarquee from "@/components/ClientsMarquee";
import ServicesAccordion from "@/components/ServicesAccordion";
import HeroCarousel from "@/components/HeroCarousel";
import StatsGrid from "@/components/StatsGrid";
import AnimatedPlusMarks from "@/components/AnimatedPlusMarks";
import BannerCarousel from "@/components/BannerCarousel";
import SectionTitle from "@/components/SectionTitle";
import ProjectRow from "@/components/ProjectRow";

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

        <SectionTitle
          as="h2"
          className="font-display mt-6 font-extrabold leading-[1.05] tracking-tight transition-colors duration-300 hover:text-brand-red"
          style={{ fontSize: "clamp(24px, 6.25vw, 100px)" }}
        >
          Transformando espaços em experiências memoráveis.
        </SectionTitle>

        <div
          className="mt-10 space-y-4 text-black"
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
        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[1920/955]">
          <BannerCarousel images={servicosBannerImages} alt="Serviços — arquitetura e cenografia" />
          <div className="absolute inset-0 flex flex-col justify-between px-6 py-10 sm:px-16 sm:py-14">
            <AnimatedPlusMarks className="flex items-start justify-between text-3xl font-bold sm:text-4xl" />
            <div className="flex items-baseline gap-3">
              <SectionTitle
                as="h2"
                className="font-display text-4xl font-extrabold tracking-tight text-white transition-colors duration-300 hover:text-brand-red sm:text-6xl lg:text-[79px]"
              >
                SERVIÇOS
              </SectionTitle>
              <span className="whitespace-nowrap text-base italic text-white/70 sm:text-xl">
                / {pad(2)}
              </span>
            </div>
          </div>
        </div>

        <ServicesAccordion />
      </section>

      {/* Projetos */}
      <section id="projetos">
        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[1920/955]">
          <BannerCarousel images={projetosBannerImages} alt="Projetos" />
          <div className="absolute inset-0 flex flex-col justify-between px-6 py-10 sm:px-16 sm:py-14">
            <AnimatedPlusMarks className="flex items-start justify-between text-3xl font-bold sm:text-4xl" />
            <div className="flex items-baseline gap-3">
              <SectionTitle
                as="h2"
                className="font-display text-4xl font-extrabold tracking-tight text-white transition-colors duration-300 hover:text-brand-red sm:text-6xl lg:text-[79px]"
              >
                PROJETOS
              </SectionTitle>
              <span className="whitespace-nowrap text-base italic text-white/70 sm:text-xl">
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
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="flex items-baseline gap-2">
            <SectionTitle
              as="h2"
              className="font-display text-4xl font-extrabold tracking-tight transition-colors duration-300 hover:text-brand-red sm:text-5xl lg:text-[62px]"
            >
              CLIENTES
            </SectionTitle>
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
