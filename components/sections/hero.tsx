"use client";

import * as React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight, Globe } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SocialLinks } from "@/components/social-icons";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const { t } = useLanguage();
  const ref = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-item", {
          autoAlpha: 0,
          y: 30,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          clearProps: "all",
        });
        gsap.from(".hero-badge", {
          xPercent: -105,
          duration: 0.9,
          delay: 0.5,
          ease: "power3.out",
          clearProps: "transform",
        });
        gsap.from(".hero-photo", {
          autoAlpha: 0,
          y: 50,
          duration: 1.1,
          delay: 0.15,
          ease: "power3.out",
          clearProps: "all",
        });
      });
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className="relative flex min-h-svh flex-col justify-between overflow-hidden pt-20"
    >
      {/* Avatar memoji, centré, derrière le marquee (signature Snellenberg) */}
      <div className="hero-photo pointer-events-none absolute bottom-0 left-1/2 z-0 h-[50svh] w-[92vw] max-w-[560px] -translate-x-1/2 sm:bottom-auto sm:top-1/2 sm:h-[78svh] sm:max-w-[760px] sm:-translate-y-1/2">
        <Image
          src="/luc-memoji-2.png"
          alt="Luc Baxmann — avatar"
          fill
          priority
          sizes="(max-width: 640px) 92vw, 760px"
          className="object-contain object-bottom sm:object-center"
        />
      </div>

      {/* Badge localisation, accroché au bord gauche (signature Snellenberg) */}
      <div className="hero-badge absolute left-0 top-[38%] z-10 hidden sm:flex">
        <div className="flex items-center gap-4 rounded-r-full bg-ink py-3 pl-6 pr-3 text-ink-foreground">
          <p className="text-sm leading-tight">
            {t.hero.located[0]}
            <br />
            <span className="font-medium">{t.hero.located[1]}</span>
          </p>
          <span className="flex size-11 items-center justify-center rounded-full bg-ink-foreground/10">
            <Globe className="animate-spin-slow size-5" aria-hidden />
          </span>
        </div>
      </div>

      {/* Rôle + dispo + CTA, à droite */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-start justify-end px-6 sm:items-center sm:px-10">
        <div className="hero-item max-w-md pt-6 sm:pt-0">
          <ArrowDownRight className="mb-4 size-7 text-muted-foreground" aria-hidden />
          <h1 className="text-2xl font-normal leading-snug tracking-tight sm:text-3xl">
            {t.hero.role[0]}
            <br />
            {t.hero.role[1]}
          </h1>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {t.hero.availability}
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block border-b border-foreground/30 pb-0.5 text-sm transition-colors hover:border-foreground"
          >
            {t.hero.cta} ↓
          </a>
          <SocialLinks className="mt-8" />
        </div>
      </div>

      {/* Nom géant en marquee */}
      <div className="hero-item relative z-10 overflow-hidden pb-2" aria-hidden>
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="pr-8 text-[17vw] font-medium leading-none tracking-tight sm:text-[12vw]"
            >
              Luc Baxmann&nbsp;—&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
