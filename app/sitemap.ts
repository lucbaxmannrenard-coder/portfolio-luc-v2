import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { seoSitemap } from "@/lib/seo-playbook";

// Pas de lastModified : une date qui change à chaque build est ignorée par Google.
// /noe (zone servie par un autre projet Vercel) n'est volontairement pas listé.
const languages = {
  en: SITE_URL,
  fr: `${SITE_URL}/fr`,
  "x-default": SITE_URL,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, alternates: { languages } },
    { url: `${SITE_URL}/fr`, alternates: { languages } },
    // Hub /services et pages de service (seo/pages/*.md publiées), en français seulement.
    ...seoSitemap(),
  ];
}
