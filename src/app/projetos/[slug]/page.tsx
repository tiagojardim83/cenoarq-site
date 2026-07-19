import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { assetPath } from "@/lib/site-config";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 pt-10 md:px-10">
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {project.title.toUpperCase()}
        </h1>
      </div>

      <div className="relative mt-8 aspect-[16/9] w-full sm:aspect-[21/9]">
        <Image
          src={assetPath(project.heroImage)}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 border-b border-black/10 px-6 py-6 sm:flex-row sm:items-center md:px-10">
        <div>
          <p className="font-display text-lg font-extrabold">
            {project.title}
          </p>
          <p className="text-sm italic text-black/50">{project.subtitle}</p>
        </div>
        <span className="text-sm text-black/50">{project.category}</span>
        <span className="text-sm text-black/50">/ {project.year}</span>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 sm:grid-cols-[1fr_2fr]">
          <div className="flex items-start justify-between text-2xl text-black/60 sm:flex-col sm:gap-40">
            <span aria-hidden>+</span>
            <span aria-hidden>+</span>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              {project.title.toUpperCase()}
              <br />
              {project.subtitle.toUpperCase()}
            </h2>
            <div className="mt-6 space-y-4 text-black/70">
              {project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 space-y-10">
          {project.gallery.map((image, i) => (
            <div key={image} className="relative aspect-[21/9] w-full">
              <Image
                src={assetPath(image)}
                alt={`${project.title} — imagem ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
