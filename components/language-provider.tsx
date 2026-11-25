"use client";

import * as React from "react";
import { dictionaries, type Dictionary, type Lang } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Lang;
  t: Dictionary;
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

/**
 * La langue vient de l'URL (`/` = EN, `/fr` = FR), pas d'un état client :
 * chaque version est rendue côté serveur, donc lisible et indexable par Google.
 */
export function LanguageProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const value = React.useMemo(
    () => ({ lang, t: dictionaries[lang] }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
