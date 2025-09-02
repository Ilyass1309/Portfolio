"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t, lang } = useLanguage();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-screen overflow-hidden pt-32 px-4 page-enter">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-12 page-enter-delay-1">
        {/* Texte à gauche */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-6">{lang === 'fr' ? "Je suis Ilyass" : "I'm Ilyass"}</h1>
          <p className="text-lg text-neutral-600 mb-6">
            {lang === 'fr'
              ? "Je suis apprenti analyste et développeur basé à Toulouse (France). Je travaille chez Continental Automotive en parallèle de mes études, où je conçois des solutions logicielles innovantes."
              : "I'm an apprentice analyst and developer based in Toulouse, France. I work at Continental Automotive alongside my studies, building innovative software solutions."}
          </p>
          <p className="text-lg text-neutral-600">
            {lang === 'fr'
              ? "Je suis passionné par la création d'expériences numériques belles, fonctionnelles et accessibles. En dehors du code, j'aime explorer la nature ou jouer de la guitare."
              : "I'm passionate about crafting digital experiences that are beautiful, functional, and accessible. Outside of coding, I enjoy exploring outdoors or playing guitar."}
          </p>
        </div>
        {/* Image à droite */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border-4 border-white">
            <Image
              src="/pp_ilyass.jpg"
              alt="Portrait of Sean"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
      {/* Section Éducation & Expérience */}
      <div className="mt-8 sm:mt-12 w-full max-w-4xl page-enter-delay-2">
  <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center sm:text-left">{lang === 'fr' ? 'Éducation & Expérience' : 'Education & Experience'}</h2>
        <ol className="relative border-l-2 border-neutral-200 pl-2 sm:pl-0">
          {/* Expérience Aumovio */}
          <li className="mb-6 sm:mb-10 ml-4 sm:ml-6">
            <span
              className="absolute -left-2.5 sm:-left-3 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full ring-4 sm:ring-8 ring-white"
              style={{
                background: 'linear-gradient(135deg,#002E5D 0%,#005B99 55%,#00A4E0 100%)'
              }}
              aria-hidden="true"
            ></span>
            <h3 className="text-base sm:text-lg font-bold">AUMOVIO</h3>
            <span className="block text-xs sm:text-sm text-neutral-500 mb-1">01/09/2025 - {lang === 'fr' ? 'Présent' : 'Present'} · {lang === 'fr' ? 'Apprenti Analyste & Développeur' : 'Apprentice Analyst & Developer'}</span>
            <p className="text-neutral-600 text-sm sm:text-base">{lang === 'fr' ? 'Conception et développement de solutions logicielles (continuité de mon rôle précédent).' : 'Designing and developing software solutions (continuity of my previous role).'} </p>
          </li>
          {/* Expérience 1 (mise à jour Continental) */}
          <li className="mb-6 sm:mb-10 ml-4 sm:ml-6">
            <span className="absolute -left-2.5 sm:-left-3 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-blue-200 rounded-full ring-4 sm:ring-8 ring-white"></span>
            <h3 className="text-base sm:text-lg font-bold">Continental Automotive</h3>
            <span className="block text-xs sm:text-sm text-neutral-500 mb-1">2024 - 31/08/2025 · {lang === 'fr' ? 'Apprenti Analyste & Développeur' : 'Apprentice Analyst & Developer'}</span>
            <p className="text-neutral-600 text-sm sm:text-base">{lang === 'fr' ? 'Développement de solutions logicielles innovantes (applications automobiles).' : 'Developing innovative software solutions for automotive applications.'}</p>
          </li>
          {/* Expérience 2 */}
          <li className="mb-6 sm:mb-10 ml-4 sm:ml-6">
            <span className="absolute -left-2.5 sm:-left-3 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-green-200 rounded-full ring-4 sm:ring-8 ring-white"></span>
            <h3 className="text-base sm:text-lg font-bold">CESI Toulouse</h3>
            <span className="block text-xs sm:text-sm text-neutral-500 mb-1">2024 - 2027 · {lang === 'fr' ? 'École d\'ingénieurs' : 'Engineering School'}</span>
            <p className="text-neutral-600 text-sm sm:text-base">{lang === 'fr' ? 'Études en informatique et ingénierie.' : 'Studying computer science and engineering.'}</p>
          </li>
          {/* Expérience 3 */}
          <li className="mb-6 sm:mb-10 ml-4 sm:ml-6">
            <span className="absolute -left-2.5 sm:-left-3 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-yellow-200 rounded-full ring-4 sm:ring-8 ring-white"></span>
            <h3 className="text-base sm:text-lg font-bold">{lang === 'fr' ? 'Université de Toulouse' : 'University of Toulouse'}</h3>
            <span className="block text-xs sm:text-sm text-neutral-500 mb-1">2021 - 2023 · {lang === 'fr' ? 'Double cursus Mathématiques & Informatique' : 'Mathematical & Computer Science dual degree'}</span>
            <p className="text-neutral-600 text-sm sm:text-base">{lang === 'fr' ? 'Diplôme technique en informatique et mathématiques.' : 'Technical degree in computer science and mathematics.'}</p>
          </li>
          {/* Expérience 4 */}
          <li className="mb-6 sm:mb-10 ml-4 sm:ml-6">
            <span className="absolute -left-2.5 sm:-left-3 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-purple-200 rounded-full ring-4 sm:ring-8 ring-white"></span>
            <h3 className="text-base sm:text-lg font-bold">IRIT – {lang === 'fr' ? 'Institut de Recherche en Informatique de Toulouse' : 'CS Research Institute (Toulouse)'}</h3>
            <span className="block text-xs sm:text-sm text-neutral-500 mb-1">2021 · {lang === 'fr' ? 'Stage' : 'Internship'}</span>
            <p className="text-neutral-600 text-sm sm:text-base">{lang === 'fr' ? 'Développement d\'un outil d\'analyse par eye-tracking pour évaluer des claviers.' : 'Built an eye‑tracking analysis tool to evaluate keyboard performance.'}</p>
          </li>
        </ol>
      </div>
      {/* Section contacts */}
      <footer className="w-full flex flex-col items-center mt-16 sm:mt-24 mb-8 px-4 page-enter-delay-3">
        <div className="flex gap-4 sm:gap-6 items-center">
          <a
            href="https://www.linkedin.com/in/ilyass-tran/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform"
          >
            <svg width="28" height="28" className="sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.75.79-1.75 1.75v5.22h-3v-9h3v1.24c.4-.77 1.39-1.24 2.5-1.24 2.68 0 3.5 1.77 3.5 4.06v5.5z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/Ilyass1309"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 transition-transform"
          >
            <svg width="28" height="28" className="sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 0c-6.627 0-12 5.373-12 12 0 5.304 3.438 9.832 8.207 11.387.6.111.793-.261.793-.577 0-.287-.011-1.045-.016-2.052-3.338.724-4.042-1.607-4.042-1.607-.546-1.387-1.333-1.757-1.333-1.757-1.087-.743.083-.728.083-.728 1.204.085 1.838 1.237 1.838 1.237 1.067 1.827 2.803 1.297 3.487.992.108-.772.418-1.297.761-1.597-2.665-.303-5.467-1.333-5.467-5.933 0-1.313.469-2.386 1.235-3.227-.124-.303-.537-1.52.117-3.165 0 0 1.008-.323 3.303 1.23.957-.266 1.987-.399 3.007-.404 1.02.005 2.05.138 3.007.404 2.295-1.553 3.303-1.23 3.303-1.23.654 1.645.241 2.862.118 3.165.766.841 1.235 1.914 1.235 3.227 0 4.605-2.805 5.63-5.465 5.933.429.371.815 1.104.815 2.224 0 1.607-.014 2.903-.014 3.293 0 .319.191.694.798.577 4.769-1.555 8.207-6.083 8.207-11.387 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a
            href="/CV-ilyass-2026-(2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CV"
            className="hover:scale-110 transition-transform"
          >
            <svg width="28" height="28" className="sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828a2 2 0 0 0-.586-1.414l-4.828-4.828A2 2 0 0 0 13.172 2H6zm6 1.414L18.586 10H14a2 2 0 0 1-2-2V3.414zM8 14h8v2H8v-2zm0-4h8v2H8v-2z"
              />
            </svg>
          </a>
        </div>
        <div className="mt-2 text-neutral-500 text-xs sm:text-sm text-center">
          {lang === 'fr' ? 'Retrouve-moi sur LinkedIn, GitHub ou télécharge mon CV' : 'Find me on LinkedIn, GitHub or download my resume'}
        </div>
      </footer>
    </main>
  );
}
