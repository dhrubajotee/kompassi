import Link from "next/link";
import { neighborhoods } from "@/lib/content";

// Shown on topic pages where "which building you're in" actually changes
// the answer (Transport, Groceries) — points to the hyper-local
// neighborhood pages instead of duplicating that detail here.
export default function NeighborhoodCallout() {
  if (neighborhoods.length === 0) return null;

  return (
    <div className="mt-16 rounded-2xl border border-ink/10 bg-birchdim p-6 sm:p-7">
      <p className="font-mono text-[11px] uppercase tracking-widest text-ink/45">
        Where you live
      </p>
      <h3 className="mt-2 font-display text-xl font-medium leading-snug">
        The exact stop and shop depend on your building.
      </h3>
      <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-ink/65">
        This page covers the city-wide picture. For the nearest bus stop,
        nearest shop, and laundry/sauna specifics for your block, check your
        neighborhood page.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        {neighborhoods.map((n) => (
          <Link
            key={n.slug}
            href={`/live/${n.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 font-mono text-[12px] uppercase tracking-wide text-ink/75 transition-colors hover:border-ink/40 hover:text-ink"
          >
            {n.name}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
