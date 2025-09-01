"use client";
import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const [iaModalOpen, setIaModalOpen] = useState(false);
  const { t, lang } = useLanguage();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-screen overflow-hidden pt-20 sm:pt-32 page-enter">
      <div className="text-center px-4 sm:px-6 page-enter-delay-1">
        <h1
          className="font-extrabold text-center mb-2 flex justify-center items-center dtgetai-title whitespace-pre-line"
          style={{
            fontSize: "clamp(48px, 8vw, 110px)",
            width: "100%",
            maxWidth: "900px",
            height: "auto",
            margin: "10px auto 60px sm:110px auto",
            letterSpacing: "-1px sm:-2px",
            color: "hsla(172, 95%, 18%, 1)",
            lineHeight: "0.9",
          }}
        >
          {t('hiTitle')}
        </h1>
        <p
          className="mt-12 sm:mt-16 text-base sm:text-lg max-w-sm sm:max-w-xl text-center-description px-4 sm:px-0"
          style={{ color: "hsla(171, 15%, 35%, 1)" }}
        >
          {t('intro')}
        </p>
      </div>

      {/* Section Projets */}
      <section className="w-full max-w-5xl px-4 sm:px-6 mt-12 sm:mt-20 page-enter-delay-2 mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">
        {t('projects')}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <ProjectCard
          href="/breezy"
          title="Breezy"
          description={t('breezyDesc')}
          tag="Web App"
          tagColor="blue"
          imgSrc="/AI-tchat.png"
          imgAlt="Breezy"
        />

        <ProjectCard
          href="/easysave"
          title="EasySave"
          description={t('easysaveDesc')}
          tag="Software"
          tagColor="green"
          imgSrc="/backup2.png"
          imgAlt="EasySave"
        />

        <ProjectCard
          href="#"
          onClick={(e) => { e.preventDefault(); setIaModalOpen(true); }}
          title="IA Stratégie"
          description={t('iaDesc')}
          tag={lang === 'fr' ? 'IA / Jeu' : 'AI / Game'}
          tagColor="purple"
          imgSrc="/globe.svg"
          imgAlt="Projet IA"
        />
      </div>
    </section>
    {iaModalOpen && (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" role="dialog" aria-modal="true">
        <div className="relative w-full max-w-md rounded-2xl shadow-xl ring-1 ring-black/10 dark:ring-white/10 bg-white dark:bg-neutral-900 overflow-hidden animate-fadeIn">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500" />
          <div className="p-6 sm:p-7">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-neutral-900 dark:text-white">{t('iaWipTitle')}</h3>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300 mb-5">
              {t('iaWipBody')}
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-end gap-3">
              <button
                onClick={() => setIaModalOpen(false)}
                className="px-4 py-2.5 rounded-lg font-medium border border-neutral-300 dark:border-neutral-600 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-4"
              >
                {t('close')}
              </button>
              <button
                onClick={() => { setIaModalOpen(false); window.location.href = '/breezy'; }}
                className="px-5 py-2.5 rounded-lg font-semibold text-white shadow hover:scale-[1.02] transition focus:outline-none focus-visible:ring-4"
                style={{ background: 'hsla(172,95%,18%,1)' }}
              >
                {t('seeOther')}
              </button>
            </div>
          </div>
          <button
            onClick={() => setIaModalOpen(false)}
            aria-label="Fermer"
            className="absolute top-2 right-2 w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
    )}

      {/* Section contacts */}
      <footer className="w-full flex flex-col items-center mt-16 sm:mt-24 mb-8 px-4 page-enter-delay-3">
        <div className="flex gap-4 sm:gap-6 items-center">
          <a href="https://www.linkedin.com/in/ilyass-tran/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
            <svg width="28" height="28" className="sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
          </a>
          <a href="https://github.com/Ilyass1309" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
            <svg width="28" height="28" className="sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576 4.765-1.587 8.2-6.086 8.2-11.385 0-6.63-5.373-12-12-12z"/></svg>
          </a>
          <a href="/CV-ilyass-2026-(2).pdf" target="_blank" rel="noopener noreferrer" aria-label="CV" className="hover:scale-110 transition-transform">
            <svg width="28" height="28" className="sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828a2 2 0 0 0-.586-1.414l-4.828-4.828A2 2 0 0 0 13.172 2H6zm6 1.414L18.586 10H14a2 2 0 0 1-2-2V3.414zM8 14h8v2H8v-2zm0-4h8v2H8v-2z"/></svg>
          </a>
        </div>
  <div className="mt-2 text-neutral-500 text-xs sm:text-sm text-center">{t('footerLine')}</div>
      </footer>
  </main>
  );
}
