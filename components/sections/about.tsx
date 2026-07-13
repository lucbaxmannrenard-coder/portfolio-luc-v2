"use client";

import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="parcours" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.12em] text-muted-foreground">
            {t.about.label}
          </p>
          <p className="max-w-2xl text-xl leading-snug tracking-tight sm:text-2xl">
            {t.about.intro}
          </p>
        </Reveal>

        <Reveal className="mt-14 grid gap-14 lg:grid-cols-[1fr_300px]">
          <ol>
            {t.about.timeline.map((item) => (
              <li
                key={item.role}
                className="grid gap-1 border-t py-6 sm:grid-cols-[140px_1fr] sm:gap-8"
              >
                <p className="text-sm text-muted-foreground">{item.period}</p>
                <div>
                  <p className="font-medium">{item.role}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {t.about.stackLabel}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.about.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border px-3 py-1 text-xs text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {t.about.languagesLabel}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                {t.about.languages}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
