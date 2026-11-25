import { JsonLd } from "@/components/json-ld";
import { LanguageProvider } from "@/components/language-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Work } from "@/components/sections/work";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import type { Lang } from "@/lib/i18n";
import { buildJsonLd } from "@/lib/seo";

export function Home({ lang }: { lang: Lang }) {
  return (
    <LanguageProvider lang={lang}>
      <JsonLd data={buildJsonLd(lang)} />
      <SmoothScroll />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
