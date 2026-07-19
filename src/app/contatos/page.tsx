import { contact } from "@/lib/data";

export const metadata = {
  title: "Contatos | Cenoarq",
};

export default function ContatosPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        Contatos
      </h1>
      <p className="mt-6 max-w-xl text-black/70">
        Tem um evento em mente? Fale com a CENOARQ e vamos transformar seu
        conceito em uma experiência memorável.
      </p>

      <dl className="mt-14 grid max-w-md gap-8 border-t border-black/10 pt-10">
        <div>
          <dt className="text-sm uppercase tracking-widest text-black/40">
            E-mail
          </dt>
          <dd className="mt-1">
            <a href={`mailto:${contact.email}`} className="text-lg hover:underline">
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
              className="text-lg hover:underline"
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
              className="text-lg hover:underline"
            >
              Enviar mensagem
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
