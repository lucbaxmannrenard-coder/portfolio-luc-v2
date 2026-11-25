import type { Metadata } from "next";
import { RootShell } from "@/components/root-shell";
import { SITE_URL } from "@/lib/seo";
import "../globals.css";

// Root layout de la version anglaise (`/`). Les métadonnées propres à la page
// (title, description, canonical, hreflang, Open Graph…) sont dans page.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell lang="en">{children}</RootShell>;
}
