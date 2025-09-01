"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="fixed top-7 sm:top-8 right-4 sm:right-6 px-3 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-md hover:bg-white/100 text-neutral-700 hover:text-black rounded-full transition-all duration-200 border border-neutral-200 text-sm font-medium shadow-lg z-50"
    >
      {lang === 'fr' ? 'FR' : 'EN'}
    </button>
  );
}
