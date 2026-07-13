"use client";

import * as React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Lock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

gsap.registerPlugin(useGSAP);

export function Work() {
  const { t } = useLanguage();
  const ref = React.useRef<HTMLDivElement>(null);
  const previewRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState<number | null>(null);
  const [canHover, setCanHover] = React.useState(false);

  React.useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  useGSAP(
    () => {
      const container = ref.current;
      const preview = previewRef.current;
      if (!container || !preview) return;
      if (!window.matchMedia("(hover: hover)").matches) return;

      const xTo = gsap.quickTo(preview, "x", { duration: 0.55, ease: "power3" });
      const yTo = gsap.quickTo(preview, "y", { duration: 0.55, ease: "power3" });

      function onMove(e: MouseEvent) {
        const rect = container!.getBoundingClientRect();
        xTo(e.clientX - rect.left);
        yTo(e.clientY - rect.top);
      }
      container.addEventListener("mousemove", onMove);
      return () => container.removeEventListener("mousemove", onMove);
    },
    { scope: ref }
  );

  React.useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;
    gsap.to(preview, {
      autoAlpha: active !== null && canHover ? 1 : 0,
      scale: active !== null && canHover ? 1 : 0.9,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [active, canHover]);

  return (
    <section id="realisations" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:px-10">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.12em] text-muted-foreground">
            {t.work.label}
          </p>
        </Reveal>

        <div ref={ref} className="relative" onMouseLeave={() => setActive(null)}>
          {/* Préview flottante (desktop) */}
          <div
            ref={previewRef}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden -translate-x-1/2 -translate-y-1/2 opacity-0 md:block"
            aria-hidden
          >
            <div className="relative h-[240px] w-[340px] overflow-hidden rounded-md bg-muted shadow-xl">
              {t.work.projects.map((project, i) => (
                <Image
                  key={project.name}
                  src={project.image}
                  alt=""
                  fill
                  sizes="340px"
                  className={`object-cover object-top transition-opacity duration-200 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                {active !== null && t.work.projects[active].href ? (
                  t.work.view
                ) : (
                  <Lock className="size-4" aria-hidden />
                )}
              </span>
            </div>
          </div>

          <Reveal stagger={0.08}>
            {t.work.projects.map((project, i) => {
              const inner = (
                <>
                  <div className="min-w-0">
                    <h3 className="text-3xl font-medium tracking-tight transition-transform duration-300 group-hover:-translate-x-2 sm:text-5xl lg:text-6xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm text-muted-foreground md:mt-3">
                      {project.description}
                      {!project.href && (
                        <span className="mt-1 flex items-center gap-1.5 text-xs">
                          <Lock className="size-3" aria-hidden />
                          {t.work.privateNote}
                        </span>
                      )}
                    </p>
                    {/* Image inline sur mobile (pas de hover) */}
                    <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-md border md:hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <p className="shrink-0 pt-2 text-sm text-muted-foreground sm:pt-4">
                    {project.category}
                  </p>
                </>
              );
              const rowClass =
                "group flex items-start justify-between gap-6 border-t py-8 transition-opacity duration-300 sm:py-10 " +
                (active !== null && active !== i && canHover
                  ? "opacity-30"
                  : "opacity-100");

              return project.href ? (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={rowClass}
                  onMouseEnter={() => setActive(i)}
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={project.name}
                  className={rowClass}
                  onMouseEnter={() => setActive(i)}
                >
                  {inner}
                </div>
              );
            })}
          </Reveal>
          <div className="border-t" />
        </div>
      </div>
    </section>
  );
}
