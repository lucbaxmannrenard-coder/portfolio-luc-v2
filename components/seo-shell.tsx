import Link from "next/link";
import { links } from "@/lib/i18n";

/**
 * Coque des pages de service (/services/…), en français : en-tête sobre et pied de page
 * qui relie le hub et l'accueil. Le site d'accueil garde son propre design ; ces pages
 * restent volontairement simples, rendues côté serveur et lisibles sans JavaScript.
 */
export function SeoShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-1 flex-col"
      style={
        {
          "--seo-accent": "var(--primary)",
          "--seo-accent-ink": "var(--primary-foreground)",
          "--seo-soft": "var(--accent)",
          "--seo-top": "2.5rem",
        } as React.CSSProperties
      }
    >
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/fr" className="font-medium tracking-tight">
            Luc Baxmann
          </Link>
          <nav aria-label="Navigation principale" className="flex items-center gap-5 text-sm">
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
            <Link href="/fr#realisations" className="hover:text-primary">
              Réalisations
            </Link>
            <Link
              href="/fr#contact"
              className="rounded-full bg-ink px-4 py-1.5 text-ink-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
          <p>Luc Baxmann, développeur web freelance à Marseille</p>
          <nav aria-label="Pied de page" className="flex flex-wrap gap-5">
            <Link href="/services" className="hover:text-foreground">
              Tous les services
            </Link>
            <Link href="/fr" className="hover:text-foreground">
              Accueil
            </Link>
            <Link href="/" hrefLang="en" lang="en" className="hover:text-foreground">
              English
            </Link>
            <a href={links.linkedin} className="hover:text-foreground" rel="me">
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
