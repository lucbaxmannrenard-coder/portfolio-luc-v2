import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { SeoArticle } from "@/components/seo-article";
import { buildServiceJsonLd } from "@/lib/seo";
import { hubPath, seoMetadata, seoPage, seoPages } from "@/lib/seo-playbook";

// Chaque page seo/pages/*.md dont l'adresse est sous le hub (/services/…), construite au déploiement.
export const dynamicParams = false;

export function generateStaticParams() {
  const hub = hubPath();
  return seoPages()
    .filter((p) => p.slug.startsWith(hub + "/"))
    .map((p) => ({ slug: p.segments[p.segments.length - 1] }));
}

type Props = { params: Promise<{ slug: string }> };

const segments = (slug: string) => [...hubPath().split("/").filter(Boolean), slug];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = seoPage(segments((await params).slug));
  return page ? seoMetadata(page) : {};
}

export default async function ServicePage({ params }: Props) {
  const page = seoPage(segments((await params).slug));
  if (!page) notFound();
  return (
    <>
      <JsonLd data={buildServiceJsonLd(page)} />
      <SeoArticle page={page} />
    </>
  );
}
