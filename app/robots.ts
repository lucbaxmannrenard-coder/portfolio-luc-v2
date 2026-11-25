import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Tout est ouvert aux robots, y compris les crawlers IA (GPTBot, ClaudeBot,
 * PerplexityBot…) : le site est une vitrine, être cité est un objectif.
 * `/_next/` ne doit surtout pas être bloqué, Google en a besoin pour rendre la page.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
