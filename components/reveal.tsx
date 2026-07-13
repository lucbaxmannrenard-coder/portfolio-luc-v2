"use client";

import * as React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay between direct children; 0 animates the wrapper as one block. */
  stagger?: number;
};

export function Reveal({ children, className, stagger = 0 }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets = stagger > 0 ? Array.from(el.children) : el;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(targets, {
          autoAlpha: 0,
          y: 24,
          duration: 0.7,
          ease: "power3.out",
          stagger,
          clearProps: "all",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
