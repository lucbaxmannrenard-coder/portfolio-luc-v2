"use client";

import { useLanguage } from "@/components/language-provider";
import type { Lang } from "@/lib/i18n";

export function SiteHeader() {
  const { lang, t, setLang } = useLanguage();

  const navItems = [
    { href: "#services", label: t.nav.services },
    { href: "#realisations", label: t.nav.work },
    { href: "#parcours", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 sm:px-10">
        <a href="#" className="text-sm font-medium tracking-tight">
          © Luc Baxmann
        </a>

        <div className="flex items-center gap-7">
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 scale-0 rounded-full bg-foreground transition-transform duration-200 group-hover:scale-100" />
              </a>
            ))}
          </nav>

          <div
            className="flex items-center rounded-full border border-foreground/15 p-0.5"
            role="group"
            aria-label="Language"
          >
            {(["en", "fr"] as Lang[]).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium uppercase transition-colors ${
                  lang === code
                    ? "bg-ink text-ink-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
