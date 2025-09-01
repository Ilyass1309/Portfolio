"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  return (
    <nav className="sticky top-6 left-1/2 -translate-x-1/2 mx-auto px-6 sm:px-10 py-3 bg-white/80 backdrop-blur-md shadow-lg rounded-full flex justify-center z-50 border border-neutral-200 w-fit mt-4 sm:mt-8">
      <ul className="flex gap-4 sm:gap-8 text-neutral-700 text-sm sm:text-base">
        <li>
          <Link href="/" className="hover:text-black transition-colors duration-200">
            {t('work')}
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-black transition-colors duration-200">
            {t('about')}
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-black transition-colors duration-200">
            {t('contact')}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
