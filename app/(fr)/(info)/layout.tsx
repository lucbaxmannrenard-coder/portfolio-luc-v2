import { SeoShell } from "@/components/seo-shell";

// Pages d'information du site (mentions légales, confidentialité) : même coque sobre
// que les pages de service, rendues côté serveur.
export default function InfoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SeoShell>{children}</SeoShell>;
}
