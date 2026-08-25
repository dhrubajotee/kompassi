import Link from "next/link";

const accentBorder = {
  amber: "group-hover:border-amber/60",
  lake: "group-hover:border-lake/60",
  spruce: "group-hover:border-spruce/60",
  lakedeep: "group-hover:border-lakedeep/60",
  ink: "group-hover:border-ink/60",
  ember: "group-hover:border-ember/60",
};

const accentText = {
  amber: "text-amber",
  lake: "text-lake",
  spruce: "text-spruce",
  lakedeep: "text-lakedeep",
  ink: "text-ink",
  ember: "text-ember",
};

export default function NeighborhoodCard({ neighborhood }) {
  return (
    <Link
      href={`/live/${neighborhood.slug}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ink/10 bg-ink p-6 text-birch shadow-card transition-all duration-300 hover:-translate-y-0.5 sm:p-7 ${accentBorder[neighborhood.accent]}`}
    >
      <div>
        <div className={`mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest ${accentText[neighborhood.accent]}`}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
          </svg>
          {neighborhood.eyebrow}
        </div>
        <h3 className="font-display text-2xl font-medium leading-tight text-birch sm:text-3xl">
          {neighborhood.name}
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-birch/65">
          {neighborhood.blurb}
        </p>
      </div>
      <div className="mt-8 flex items-center gap-2 font-mono text-[12px] uppercase tracking-wide text-birch/50 transition-colors group-hover:text-birch">
        Building-specific info
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
