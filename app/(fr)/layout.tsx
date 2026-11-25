import type { Metadata } from "next";
import { RootShell } from "@/components/root-shell";
import { SITE_URL } from "@/lib/seo";
import "../globals.css";

// Root layout de la version française (`/fr`). Les métadonnées propres à la page
// sont dans fr/page.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function FrenchRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell lang="fr">{children}</RootShell>;
}
