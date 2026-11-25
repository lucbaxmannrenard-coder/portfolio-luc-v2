import { SeoShell } from "@/components/seo-shell";

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SeoShell>{children}</SeoShell>;
}
