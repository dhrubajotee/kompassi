import Link from "next/link";

const accentMap = {
  amber: "group-hover:border-amber/60",
  lake: "group-hover:border-lake/60",
  spruce: "group-hover:border-spruce/60",
  lakedeep: "group-hover:border-lakedeep/60",
  ink: "group-hover:border-ink/60",
  ember: "group-hover:border-ember/60",
};

const dotMap = {
  amber: "bg-amber",
  lake: "bg-lake",
  spruce: "bg-spruce",
  lakedeep: "bg-lakedeep",
  ink: "bg-ink",
  ember: "bg-ember",
};

export default function CategoryCard({ category, featured = false, index }) {
  return (
    <Link
      href={`/guide/${category.slug}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ink/10 bg-white/60 p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:p-7 ${
        accentMap[category.accent]
      } ${featured ? "sm:col-span-2" : ""}`}
    >
      <div>
        <div className="mb-5 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink/45">
            {String(index + 1).padStart(2, "0")} · {category.eyebrow}
          </span>
          <span className={`h-2 w-2 rounded-full ${dotMap[category.accent]}`} />
        </div>
        <h3
          className={`font-display font-medium leading-tight text-ink ${
            featured ? "text-3xl sm:text-4xl" : "text-2xl"
          }`}
        >
          {category.title}
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/65">
          {category.blurb}
        </p>
      </div>
      <div className="mt-8 flex items-center gap-2 font-mono text-[12px] uppercase tracking-wide text-ink/50 transition-colors group-hover:text-ink">
        Read the guide
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className="transition-transform group-hover:translate-x-1"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
