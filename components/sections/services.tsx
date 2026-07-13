"use client";

import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="scroll-mt-20 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="mb-14 text-xs uppercase tracking-[0.12em] text-ink-muted">
            {t.services.label}
          </p>
        </Reveal>

        <Reveal stagger={0.12}>
          {t.services.items.map((service, i) => (
            <div
              key={service.title}
              className="grid gap-4 border-t border-ink-foreground/15 py-10 sm:grid-cols-[80px_1fr_1.2fr] sm:gap-8 sm:py-14"
            >
              <p className="text-sm text-ink-muted">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-2xl font-medium tracking-tight sm:text-4xl">
                {service.title}
              </h3>
              <p className="max-w-lg leading-relaxed text-ink-muted sm:pt-2">
                {service.description}
              </p>
            </div>
          ))}
        </Reveal>
        <div className="border-t border-ink-foreground/15" />
      </div>
    </section>
  );
}
