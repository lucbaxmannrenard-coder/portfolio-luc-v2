"use client";

import * as React from "react";
import { dictionaries, type Dictionary, type Lang } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Lang;
  t: Dictionary;
  setLang: (lang: Lang) => void;
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("en");

  React.useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "en" || saved === "fr") setLangState(saved);
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = React.useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("lang", next);
  }, []);

  const value = React.useMemo(
    () => ({ lang, t: dictionaries[lang], setLang }),
    [lang, setLang]
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
