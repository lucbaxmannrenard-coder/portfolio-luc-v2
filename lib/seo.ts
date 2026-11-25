import type { Metadata } from "next";
import { dictionaries, links, type Lang } from "@/lib/i18n";

export const SITE_URL = "https://lucbaxmann.com";
export const SITE_NAME = "Luc Baxmann";

/** Chemin de la page pour chaque langue (EN = racine, FR = /fr). */
export const pagePath: Record<Lang, string> = { en: "/", fr: "/fr" };

export const pageUrl = (lang: Lang) =>
  lang === "fr" ? `${SITE_URL}/fr` : SITE_URL;

/**
 * Textes SEO par langue. Titre : mot-clé d'abord, marque en dernier ; description
 * sous 155 caractères pour ne pas être tronquée dans les résultats.
 */
const copy: Record<
  Lang,
  { title: string; description: string; ogLocale: string; ogAlt: string }
> = {
  en: {
    title: "Freelance Web Developer & AI Automation — Luc Baxmann",
    description:
      "Freelance web developer in Marseille building fast, conversion-focused websites and custom AI automations for small businesses. Remote worldwide.",
    ogLocale: "en_US",
    ogAlt: "Luc Baxmann — Freelance web developer & AI automation, Marseille",
  },
  fr: {
    title: "Développeur web freelance à Marseille — Luc Baxmann",
    description:
      "Développeur web freelance à Marseille : sites rapides orientés conversion et automatisations IA sur mesure pour TPE et PME. Remote possible partout.",
    ogLocale: "fr_FR",
    ogAlt: "Luc Baxmann — Développeur web freelance & automatisation IA, Marseille",
  },
};

export const ogAlt = (lang: Lang) => copy[lang].ogAlt;

export function buildMetadata(lang: Lang): Metadata {
  const c = copy[lang];
  const other: Lang = lang === "en" ? "fr" : "en";

  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: pagePath[lang],
      languages: { en: "/", fr: "/fr", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: c.title,
      description: c.description,
      url: pagePath[lang],
      locale: c.ogLocale,
      alternateLocale: [copy[other].ogLocale],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
  };
}

/**
 * JSON-LD d'une page de service (/services/…) : un `Service` rendu par la même personne
 * que sur l'accueil (même @id). Rien d'inventé : zone et prestataire viennent des mêmes
 * faits que `buildJsonLd`.
 */
export function buildServiceJsonLd(page: {
  slug: string;
  label: string;
  description: string;
}) {
  const url = `${SITE_URL}${page.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: page.label,
    description: page.description || undefined,
    url,
    inLanguage: "fr",
    provider: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: pageUrl("fr"),
    },
    areaServed: [
      { "@type": "City", name: "Marseille" },
      "Remote — monde entier",
    ],
  };
}

/**
 * Données structurées (JSON-LD) : WebSite + Person, reliés par @id.
 * Tout est dérivé du dictionnaire et de `links` : une seule source de vérité,
 * rien d'inventé (pas d'adresse postale, pas de téléphone, pas de tarifs).
 */
export function buildJsonLd(lang: Lang) {
  const t = dictionaries[lang];
  const c = copy[lang];
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: ["en", "fr"],
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: SITE_NAME,
        url: pageUrl(lang),
        image: `${SITE_URL}/luc-memoji-3.png`,
        jobTitle: t.hero.role.join(" "),
        description: c.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Marseille",
          addressCountry: "FR",
        },
        knowsAbout: t.about.stack,
        knowsLanguage: ["fr", "en", "es"],
        sameAs: [links.linkedin, links.github, links.upwork],
        mainEntityOfPage: { "@id": websiteId },
        makesOffer: t.services.items.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item.title,
            description: item.description,
            provider: { "@id": personId },
            areaServed: [
              { "@type": "City", name: "Marseille" },
              lang === "fr" ? "Remote — monde entier" : "Remote — worldwide",
            ],
          },
        })),
      },
    ],
  };
}
