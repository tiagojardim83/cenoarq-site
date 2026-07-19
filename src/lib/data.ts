export const nav = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Contatos", href: "/contatos" },
];

export const stats = [
  { value: "+15", label: "anos de história" },
  { value: "+84", label: "eventos realizados" },
  { value: "+102", label: "projetos realizados" },
  { value: "+74", label: "clientes satisfeitos" },
];

export const services = [
  {
    slug: "arquitetura",
    title: "Arquitetura",
    description:
      "Projetos arquitetônicos completos para eventos e espaços corporativos, unindo técnica, segurança e um olhar apurado para cada detalhe estrutural.",
  },
  {
    slug: "cenografia",
    title: "Cenografia",
    description:
      "Criação de cenários únicos que transformam qualquer espaço em uma experiência memorável, sob medida para o conceito de cada evento.",
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  heroImage: string;
  gallery: string[];
  description: string[];
};

export const projects: Project[] = [
  {
    slug: "love-wine-summer-times",
    title: "Love Wine",
    subtitle: "Summer Times",
    category: "cenografia",
    year: "2025",
    heroImage: "/images/love-wine-hero.jpg",
    gallery: [
      "/images/gallery-drawing.jpg",
      "/images/gallery-spiral.jpg",
      "/images/gallery-fabric.jpg",
    ],
    description: [
      "Na CENOARQ, unimos criatividade, técnica e excelência para criar experiências únicas. Especializados em arquitetura e cenografia para grandes eventos, transformamos espaços em verdadeiros espetáculos, onde cada detalhe é pensado para encantar e impressionar.",
      "Com um olhar atento às tendências e um compromisso inabalável com a qualidade, entregamos projetos que superam expectativas e elevam o padrão de qualquer ocasião.",
      "Seja um evento corporativo, um show deslumbrante ou uma festa exclusiva, a CENOARQ está pronta para dar vida ao seu conceito com profissionalismo e maestria.",
    ],
  },
];

export const clients = [
  { name: "Coca-Cola", logo: "/clients/coca-cola.svg" },
  { name: "Beefeater", logo: "/clients/Beefeater.svg" },
  { name: "Cemig", logo: "/clients/Cemig.svg" },
  { name: "It's Show Time", logo: "/clients/its-show-time.svg" },
  { name: "Jameson", logo: "/clients/Jameson.svg" },
  { name: "Minas Gerais", logo: "/clients/minas-gerais.svg" },
];

export const contact = {
  email: "cenoarq@cenoarq.com.br",
  phone: "+55 31 9212-0601",
  whatsappHref: "https://wa.me/553192120601",
  instagram: "https://instagram.com/cenoarq",
};

export const aboutText = [
  "Na CENOARQ, unimos criatividade, técnica e excelência para criar experiências únicas. Especializados em arquitetura e cenografia para grandes eventos, transformamos espaços em verdadeiros espetáculos, onde cada detalhe é pensado para encantar e impressionar.",
  "Com um olhar atento às tendências e um compromisso inabalável com a qualidade, entregamos projetos que superam expectativas e elevam o padrão de qualquer ocasião.",
  "Seja um evento corporativo, um show deslumbrante ou uma festa exclusiva, a CENOARQ está pronta para dar vida ao seu conceito com profissionalismo e maestria.",
];
