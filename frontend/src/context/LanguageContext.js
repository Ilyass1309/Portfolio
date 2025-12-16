"use client";
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext({
  t: (k) => k,
  lang: "fr",
  setLang: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");

  const translations = {};

  const t = (key) => {
    const map = translations[lang] || {};
    return map[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ t, lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
