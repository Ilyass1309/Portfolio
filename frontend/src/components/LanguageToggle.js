"use client";

import { useState } from "react";

export default function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState("FR");

  const toggleLanguage = () => {
    setCurrentLang(currentLang === "FR" ? "EN" : "FR");
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="fixed top-7 sm:top-8 right-4 sm:right-6 px-3 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-md hover:bg-white/100 text-neutral-700 hover:text-black rounded-full transition-all duration-200 border border-neutral-200 text-sm font-medium shadow-lg z-50"
    >
      {currentLang}
    </button>
  );
}
