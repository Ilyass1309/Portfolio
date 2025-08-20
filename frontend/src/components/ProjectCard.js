import Link from "next/link";
import Image from "next/image";

const TAG_STYLES = {
  blue:   "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  green:  "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
};

export default function ProjectCard({
  href,
  title,
  description,
  tag,
  tagColor = "blue",
  imgSrc,
  imgAlt,
}) {
  return (
    <Link
      href={href}
      aria-label={title}
      className="
        group relative rounded-3xl no-underline
        bg-white/80 dark:bg-neutral-900/60
        border border-neutral-200/70 dark:border-white/10
        shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.35)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500
        backdrop-blur-md
        p-5 sm:p-6 flex flex-col items-center text-center
      "
    >
      {/* Halo gradient */}
      <span className="
        pointer-events-none absolute inset-0 rounded-3xl
        bg-gradient-to-br from-emerald-200/0 via-indigo-200/0 to-fuchsia-200/0
        group-hover:from-emerald-200/40 group-hover:via-indigo-200/30 group-hover:to-fuchsia-200/40
        dark:group-hover:from-emerald-500/10 dark:group-hover:via-indigo-500/10 dark:group-hover:to-fuchsia-500/10
        transition-colors
      " />

      {/* Icone */}
      <div className="
        relative mb-4 sm:mb-5
        w-16 h-16 sm:w-20 sm:h-20
        grid place-items-center rounded-full
        ring-1 ring-black/5 dark:ring-white/10
        bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900
        shadow-sm
        group-hover:scale-[1.03] transition-transform
      ">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={80}
          height={80}
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-90"
        />
      </div>

      <h3 className="
        text-lg sm:text-xl font-bold mb-2
        text-neutral-900 dark:text-neutral-100
        group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors
      ">
        {title}
      </h3>

      <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base mb-4">
        {description}
      </p>

      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${TAG_STYLES[tagColor]}`}>
        {tag}
      </span>

      <span className="
        mt-4 inline-flex items-center gap-1 text-sm font-medium
        text-neutral-700 dark:text-neutral-200
        group-hover:text-indigo-700 dark:group-hover:text-indigo-300
      ">
        Voir le projet
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M12.293 5.293a1 1 0 011.414 0l4 4a.997.997 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"/>
        </svg>
      </span>
    </Link>
  );
}
