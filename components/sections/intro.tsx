"use client";

import { Check } from "lucide-react";
import { Magnetic } from "@/components/magnetic";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export function Intro() {
  const { t } = useLanguage();

  return (
    <section className="border-t">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <p className="max-w-2xl text-2xl leading-snug tracking-tight sm:text-4xl">
            {t.intro.statement}
          </p>
        </Reveal>

        <Reveal className="flex flex-col gap-10">
          <p className="text-muted-foreground">{t.intro.paragraph}</p>

          <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            {t.intro.trust.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <Magnetic className="w-fit">
            <a
              href="#contact"
              className="flex size-36 items-center justify-center rounded-full bg-ink text-sm text-ink-foreground transition-colors hover:bg-primary sm:size-44"
            >
              {t.intro.circleCta}
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
