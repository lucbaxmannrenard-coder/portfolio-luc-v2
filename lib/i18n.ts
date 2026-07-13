export type Lang = "fr" | "en";

export type Project = {
  name: string;
  category: string;
  description: string;
  image: string;
  href?: string;
};

export type Dictionary = {
  nav: { services: string; work: string; about: string; contact: string };
  hero: {
    role: [string, string];
    located: [string, string];
    availability: string;
    cta: string;
  };
  intro: {
    statement: string;
    paragraph: string;
    circleCta: string;
    trust: string[];
  };
  work: {
    label: string;
    view: string;
    privateNote: string;
    projects: Project[];
  };
  services: {
    label: string;
    items: { title: string; description: string }[];
  };
  about: {
    label: string;
    intro: string;
    timeline: { period: string; role: string; detail: string }[];
    stackLabel: string;
    stack: string[];
    languagesLabel: string;
    languages: string;
  };
  contact: {
    heading: [string, string];
    subtitle: string;
    name: string;
    email: string;
    company: string;
    companyOptional: string;
    projectType: string;
    projectTypes: string[];
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    directLabel: string;
    localTime: string;
  };
  footer: { tagline: string };
};

export const dictionaries: Record<Lang, Dictionary> = {
  fr: {
    nav: {
      services: "Services",
      work: "Réalisations",
      about: "Parcours",
      contact: "Contact",
    },
    hero: {
      role: ["Développeur web freelance", "& automatisation IA"],
      located: ["Basé à", "Marseille"],
      availability: "Disponible pour de nouveaux projets",
      cta: "Discutons de votre projet",
    },
    intro: {
      statement:
        "J'aide les petites entreprises à gagner des clients en ligne. Des sites qui convertissent, des workflows qui tournent seuls. Sans détour.",
      paragraph:
        "Formé au business, j'aborde chaque projet par le résultat : plus de leads, moins de travail manuel. 100 % code écrit main, connecté à vos outils existants.",
      circleCta: "Parlons-en",
      trust: [
        "100 % code écrit main, pas de no-code",
        "Sécurité par défaut : OAuth 2.0, jamais de partage de mots de passe",
        "Remote monde entier",
      ],
    },
    work: {
      label: "Réalisations récentes",
      view: "Voir",
      privateNote: "Code privé — démo sur demande",
      projects: [
        {
          name: "Cemax Store",
          category: "E-commerce",
          description:
            "E-commerce de nootropiques orienté conversion : catalogue, paiement, gestion des commandes. Next.js, Stripe, Supabase.",
          image: "/work/cemax.jpg",
          href: "https://cemax-store.com",
        },
        {
          name: "Canaria+",
          category: "Landing page",
          description:
            "Landing de lancement du bracelet anti coup de chaleur, avec Provence E.P.I.",
          image: "/work/canaria.jpg",
          href: "https://canaria.provence-epi.com",
        },
        {
          name: "hydra-agent",
          category: "Agent IA",
          description:
            "Agent e-commerce autonome : veille produit, validation humaine via Telegram, mise en boutique automatique.",
          image: "/work/hydra-store.jpg",
        },
        {
          name: "Expérience immersive",
          category: "Créatif",
          description:
            "Vol de caméra piloté au scroll dans un monde généré par IA (Veo 3 + Imagen 4).",
          image: "/work/portfolio.jpg",
          href: "https://portfolio-luc-baxmann.vercel.app",
        },
      ],
    },
    services: {
      label: "Je peux vous aider avec",
      items: [
        {
          title: "Développement web",
          description:
            "Landing pages de lancement, sites d'entreprise, e-commerce, apps sur mesure. Un seul objectif : transformer vos visiteurs en clients.",
        },
        {
          title: "Automatisation IA",
          description:
            "Des agents et workflows codés sur mesure — prospection, CRM, saisie de données — connectés aux outils que vous utilisez déjà (Microsoft Graph, OAuth 2.0, REST).",
        },
        {
          title: "Le pack complet",
          description:
            "Un site qui convertit + les automatisations qui s'occupent du reste. Vous vous concentrez sur votre métier, le système travaille pour vous.",
        },
      ],
    },
    about: {
      label: "Parcours",
      intro:
        "Formé au business à KEDGE BS (Marseille), passé au développement pour construire ce que je recommandais : des systèmes qui font gagner du temps et des clients.",
      timeline: [
        {
          period: "2026 — auj.",
          role: "Freelance — développeur web & automatisation IA",
          detail:
            "Sites, CRM sur mesure et systèmes de prospection autonomes pour PME.",
        },
        {
          period: "2026 — auj.",
          role: "Provence E.P.I — Business Developer",
          detail:
            "Landing Canaria+, recherche de prospects automatisée, CRM sur mesure.",
        },
        {
          period: "2025 — auj.",
          role: "ACCEDE Provence Entrepreneurs (Junior-Entreprise KEDGE)",
          detail:
            "Research Analyst : conseil PME régionales, système d'outreach automatisé.",
        },
        {
          period: "2025",
          role: "DGFIP — stagiaire finances publiques",
          detail: "Données fiscales, recouvrement, conformité.",
        },
        {
          period: "2025 — auj.",
          role: "KEDGE Business School — IBBA",
          detail: "Dont bootcamp IA générative (agents & automatisation).",
        },
      ],
      stackLabel: "Stack",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "Python",
        "Supabase",
        "Stripe",
        "Microsoft Graph",
        "OAuth 2.0",
        "Agents IA",
      ],
      languagesLabel: "Langues",
      languages: "Français (natif) · Anglais (professionnel) · Espagnol",
    },
    contact: {
      heading: ["Travaillons", "ensemble"],
      subtitle:
        "Décrivez votre besoin en deux lignes — je reviens vers vous sous 24 h avec une proposition concrète.",
      name: "Nom",
      email: "Email",
      company: "Entreprise",
      companyOptional: "optionnel",
      projectType: "Type de projet",
      projectTypes: ["Site web", "E-commerce", "Automatisation IA", "Autre"],
      message: "Message",
      messagePlaceholder:
        "Votre activité, votre besoin, vos délais si vous en avez…",
      submit: "Envoyer",
      sending: "Envoi…",
      success:
        "Merci ! Votre message est bien parti — je vous réponds sous 24 h.",
      error: "Un problème est survenu — écrivez-moi directement à ",
      directLabel: "Ou directement",
      localTime: "Heure locale",
    },
    footer: {
      tagline: "Développeur web & automatisation IA — Marseille",
    },
  },
  en: {
    nav: {
      services: "Services",
      work: "Work",
      about: "Background",
      contact: "Contact",
    },
    hero: {
      role: ["Freelance Developer", "& AI Automation"],
      located: ["Located in", "Marseille"],
      availability: "Available for new projects",
      cta: "Let's talk about your project",
    },
    intro: {
      statement:
        "Helping small businesses win clients online. Websites that convert, workflows that run themselves. No nonsense.",
      paragraph:
        "Business-trained, I approach every project from the outcome: more leads, less manual work. 100% hand-written code, connected to the tools you already use.",
      circleCta: "Let's talk",
      trust: [
        "100% hand-written code, no no-code",
        "Secure by default: OAuth 2.0, never password sharing",
        "Remote worldwide",
      ],
    },
    work: {
      label: "Recent work",
      view: "View",
      privateNote: "Private code — demo on request",
      projects: [
        {
          name: "Cemax Store",
          category: "E-commerce",
          description:
            "Conversion-focused nootropics e-commerce: catalog, checkout, order management. Next.js, Stripe, Supabase.",
          image: "/work/cemax.jpg",
          href: "https://cemax-store.com",
        },
        {
          name: "Canaria+",
          category: "Landing page",
          description:
            "Launch landing page for a heatstroke-prevention wristband, with Provence E.P.I.",
          image: "/work/canaria.jpg",
          href: "https://canaria.provence-epi.com",
        },
        {
          name: "hydra-agent",
          category: "AI agent",
          description:
            "Autonomous e-commerce agent: product scouting, human validation via Telegram, automatic store listing.",
          image: "/work/hydra-store.jpg",
        },
        {
          name: "Immersive experience",
          category: "Creative",
          description:
            "Scroll-driven camera flight through an AI-generated world (Veo 3 + Imagen 4).",
          image: "/work/portfolio.jpg",
          href: "https://portfolio-luc-baxmann.vercel.app",
        },
      ],
    },
    services: {
      label: "I can help you with",
      items: [
        {
          title: "Web development",
          description:
            "Launch landing pages, company websites, e-commerce, custom apps. One goal: turning your visitors into customers.",
        },
        {
          title: "AI automation",
          description:
            "Custom-coded agents and workflows — prospecting, CRM, data entry — connected to the tools you already use (Microsoft Graph, OAuth 2.0, REST).",
        },
        {
          title: "The full package",
          description:
            "A website that converts + the automations that handle the rest. You focus on your business, the system works for you.",
        },
      ],
    },
    about: {
      label: "Background",
      intro:
        "Business-trained at KEDGE BS (Marseille), I moved into development to build what I used to recommend: systems that win time and customers.",
      timeline: [
        {
          period: "2026 — now",
          role: "Freelance — web developer & AI automation",
          detail:
            "Websites, custom CRMs and autonomous prospecting systems for SMBs.",
        },
        {
          period: "2026 — now",
          role: "Provence E.P.I — Business Developer",
          detail:
            "Canaria+ landing page, automated prospect research, custom CRM.",
        },
        {
          period: "2025 — now",
          role: "ACCEDE Provence Entrepreneurs (KEDGE Junior-Enterprise)",
          detail:
            "Research Analyst: consulting for regional SMBs, automated outreach system.",
        },
        {
          period: "2025",
          role: "DGFIP (French public finances) — intern",
          detail: "Tax data, collection, compliance.",
        },
        {
          period: "2025 — now",
          role: "KEDGE Business School — IBBA",
          detail: "Incl. generative AI bootcamp (agents & automation).",
        },
      ],
      stackLabel: "Stack",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "Python",
        "Supabase",
        "Stripe",
        "Microsoft Graph",
        "OAuth 2.0",
        "AI agents",
      ],
      languagesLabel: "Languages",
      languages: "French (native) · English (professional) · Spanish",
    },
    contact: {
      heading: ["Let's work", "together"],
      subtitle:
        "Describe your need in two lines — I'll get back to you within 24 hours with a concrete proposal.",
      name: "Name",
      email: "Email",
      company: "Company",
      companyOptional: "optional",
      projectType: "Project type",
      projectTypes: ["Website", "E-commerce", "AI automation", "Other"],
      message: "Message",
      messagePlaceholder:
        "Your business, your need, your timeline if you have one…",
      submit: "Send",
      sending: "Sending…",
      success:
        "Thank you! Your message is on its way — I'll reply within 24 hours.",
      error: "Something went wrong — please email me directly at ",
      directLabel: "Or directly",
      localTime: "Local time",
    },
    footer: {
      tagline: "Web developer & AI automation — Marseille, France",
    },
  },
};

export const links = {
  email: "luc.baxmannrenard@kedgebs.com",
  linkedin: "https://www.linkedin.com/in/luc-baxmannrenard-0382aa368/",
  upwork: "https://www.upwork.com/freelancers/~01f5cdbd2778576923",
  github: "https://github.com/lucbaxmannrenard-coder",
};
