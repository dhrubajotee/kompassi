import Link from "next/link";
import { notFound } from "next/navigation";
import { neighborhoods, getNeighborhood } from "@/lib/content";
import ZoomableImage from "@/components/ZoomableImage";

export function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }) {
  const neighborhood = getNeighborhood(params.slug);
  if (!neighborhood) return {};
  return {
    title: `${neighborhood.name} · Kompassi`,
    description: neighborhood.blurb,
  };
}

const accentText = {
  amber: "text-amber",
  lake: "text-lake",
  spruce: "text-spruce",
  lakedeep: "text-lakedeep",
  ink: "text-ink",
  ember: "text-ember",
};

const accentBorder = {
  amber: "border-amber",
  lake: "border-lake",
  spruce: "border-spruce",
  lakedeep: "border-lakedeep",
  ink: "border-ink",
  ember: "border-ember",
};

export default function NeighborhoodPage({ params }) {
  const neighborhood = getNeighborhood(params.slug);
  if (!neighborhood) notFound();

  return (
    <main>
      {/* ── Page header ────────────────────────────────────────────── */}
      <section className="border-b border-ink/10 bg-birchdim">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20">
          <Link
            href="/#neighborhoods"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wide text-ink/50 transition-colors hover:text-ink"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M11 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Where you live
          </Link>
          <p
            className={`mt-8 flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest ${accentText[neighborhood.accent]}`}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
            </svg>
            {neighborhood.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-medium leading-tight sm:text-6xl">
            {neighborhood.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/65">
            {neighborhood.blurb}
          </p>
        </div>
      </section>

      {/* ── Sections ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-[220px_1fr] sm:gap-16">
          <aside className="hidden sm:block">
            <div className="sticky top-28">
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40">
                On this page
              </p>
              <ul className="mt-4 space-y-3">
                {neighborhood.sections.map((s) => (
                  <li key={s.heading}>
                    <a
                      href={`#${slugify(s.heading)}`}
                      className="text-sm leading-snug text-ink/55 transition-colors hover:text-ink"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-xl border border-ink/10 bg-birchdim p-4">
                <p className="text-[13px] leading-relaxed text-ink/60">
                  Also check the{" "}
                  <Link href="/guide/transport" className="underline decoration-ink/30 hover:text-ink">
                    Transport
                  </Link>{" "}
                  and{" "}
                  <Link href="/guide/groceries" className="underline decoration-ink/30 hover:text-ink">
                    Groceries
                  </Link>{" "}
                  guides for the city-wide picture.
                </p>
              </div>
            </div>
          </aside>

          <div className="space-y-16">
            {neighborhood.sections.map((s, i) => (
              <div
                key={s.heading}
                id={slugify(s.heading)}
                className={`scroll-mt-28 border-l-2 pl-6 ${accentBorder[neighborhood.accent]}/30`}
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={`mt-2 ${s.image ? "grid grid-cols-1 gap-6 sm:grid-cols-[1fr_260px] sm:items-stretch sm:gap-10" : ""}`}>
                  <div>
                    <h2 className="font-display text-2xl font-medium leading-snug sm:text-3xl">
                      {s.heading}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {s.body.map((p, j) => {
                        const text = typeof p === "string" ? p : p.text;
                        const link = typeof p === "string" ? null : p.link;
                        const isMap = link?.type === "map";
                        return (
                          <div key={j}>
                            <p className="text-[15px] leading-relaxed text-ink/70">{text}</p>
                            {link && (
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group mt-2 inline-flex items-center gap-1.5 rounded-full border bg-white/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide transition-colors hover:bg-white ${
                                  isMap
                                    ? "border-ink/15 text-lake hover:border-lake/40 hover:text-lakedeep"
                                    : "border-ink/15 text-ink/60 hover:border-ink/30 hover:text-ink"
                                }`}
                              >
                                {isMap ? (
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
                                  </svg>
                                ) : (
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                    <path d="M3 12h18M12 3c2.5 2.6 4 5.9 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.9-4-9s1.5-6.4 4-9z" stroke="currentColor" strokeWidth="1.5" />
                                  </svg>
                                )}
                                {link.label}
                                <svg
                                  width="11"
                                  height="11"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  className="transition-transform group-hover:translate-x-0.5"
                                >
                                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </a>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    {s.tip && (
                      <div className="mt-5 rounded-xl bg-amber/10 px-5 py-4 text-[14px] leading-relaxed text-ink/80">
                        <span className="font-mono text-[11px] uppercase tracking-wide text-ember">
                          Tip ·{" "}
                        </span>
                        {s.tip}
                      </div>
                    )}
                    {s.map && (
                      <a
                        href={s.map.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wide text-lake transition-colors hover:text-lakedeep"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        {s.map.label}
                      </a>
                    )}
                  </div>

                  {s.image && (
                    <figure className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 shadow-card">
                      <ZoomableImage
                        src={s.image.src}
                        alt={s.image.alt}
                        sizes="(max-width: 640px) 100vw, 260px"
                        wrapperClassName="relative aspect-[4/3] flex-1 bg-birchdim sm:aspect-auto"
                      />
                      {s.image.caption && (
                        <figcaption className="bg-birchdim px-3 py-2 font-mono text-[10px] uppercase tracking-wide text-ink/50">
                          {s.image.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}