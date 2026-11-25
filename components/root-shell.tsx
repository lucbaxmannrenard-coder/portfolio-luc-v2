import { Analytics } from "@vercel/analytics/next";
import { geistMono, hankenSans } from "@/lib/fonts";
import type { Lang } from "@/lib/i18n";

/**
 * Coque <html>/<body> du site. Chaque langue a son propre root layout
 * (`app/(en)` et `app/(fr)`), donc `<html lang>` est correct dès le HTML serveur :
 * c'est ce que lisent Google et les lecteurs d'écran, avant toute hydratation.
 */
export function RootShell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={lang}
      className={`${hankenSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
