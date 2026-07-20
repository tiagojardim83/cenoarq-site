import { contact } from "@/lib/data";

export const metadata = {
  title: "Contatos | Cenoarq",
};

export default function ContatosPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-16">
      <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
        Contatos
      </h1>
      <p className="mt-6 max-w-xl text-xl text-black/70 sm:text-2xl">
        Tem um evento em mente? Fale com a CENOARQ e vamos transformar seu
        conceito em uma experiência memorável.
      </p>

      <dl className="mt-14 grid max-w-md gap-8 border-t border-black/10 pt-10">
        <div>
          <dt className="text-sm uppercase tracking-widest text-black/40">
            E-mail
          </dt>
          <dd className="mt-1">
            <a href={`mailto:${contact.email}`} className="inline-block text-lg text-black/70 transition-all hover:translate-x-1 hover:text-black hover:underline">
              {contact.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm uppercase tracking-widest text-black/40">
            Telefone
          </dt>
          <dd className="mt-1">
            <a
              href={`tel:${contact.phone.replace(/\s|-/g, "")}`}
              className="inline-block text-lg text-black/70 transition-all hover:translate-x-1 hover:text-black hover:underline"
            >
              {contact.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm uppercase tracking-widest text-black/40">
            Whatsapp
          </dt>
          <dd className="mt-1">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg text-black/70 transition-all hover:translate-x-1 hover:text-black hover:underline"
            >
              Enviar mensagem
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
