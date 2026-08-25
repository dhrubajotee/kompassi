import Image from "next/image";
import DaylightBar from "@/components/DaylightBar";
import CategoryCard from "@/components/CategoryCard";
import NeighborhoodCard from "@/components/NeighborhoodCard";
import { categories, neighborhoods, site } from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden text-birch">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/Jyväskylä.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-aurora-fade opacity-50" />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-14">
          <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.2em] text-amber drop-shadow-md">
            62.24° N · Jyväskylä, Finland
          </p>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-5xl font-semibold leading-[1.05] text-birch drop-shadow-md sm:text-7xl">
            You&rsquo;ll land here knowing{" "}
            <span className="italic text-amber">nothing</span>.
            <br />
            That part is normal.
          </h1>
          <p className="mt-4 max-w-xl text-balance text-lg font-medium leading-relaxed text-birch/90 drop-shadow-sm sm:text-xl">
            {site.tagline} Everything the group chats eventually tell you -
            written down once, in one place, before you need it.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#guide"
              className="rounded-full bg-amber px-6 py-3 font-mono text-[13px] uppercase tracking-wide text-ink transition-colors hover:bg-birch"
            >
              Start with the guide
            </a>
            <span className="font-mono text-[13px] text-birch/70">
              8 topics, updated as the city changes
            </span>
          </div>

          {/* Signature: daylight hours across the year */}
          <div className="mt-10 rounded-2xl border border-birch/15 bg-birch/[0.04] p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-xl italic text-birch/90">
                What the light actually does here
              </h2>
              <span className="font-mono text-[11px] uppercase tracking-wide text-birch/45">
                Avg. daylight hours / month
              </span>
            </div>
            <DaylightBar variant="dark" />
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-birch/60">
              December gives you under six hours of daylight. June gives you
              nearly twenty. Nothing about your new life here - your
              schedule, your energy, your winter coat budget - makes sense
              until you internalise that swing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Guide grid ─────────────────────────────────────────────── */}
      <section id="guide" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-[12px] uppercase tracking-widest text-ink/45">
            The guide
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-medium leading-tight sm:text-5xl">
            Eight things worth knowing before you need them.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {categories.map((category, i) => (
            <CategoryCard
              key={category.slug}
              category={category}
              index={i}
              featured={i === 0}
            />
          ))}
        </div>
      </section>

      {/* ── Neighborhoods ──────────────────────────────────────────── */}
      {neighborhoods.length > 0 && (
        <section id="neighborhoods" className="border-t border-ink/10 bg-ink">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
            <div className="mb-12 max-w-2xl">
              <p className="font-mono text-[12px] uppercase tracking-widest text-amber">
                Where you live
              </p>
              <h2 className="mt-4 text-balance font-display text-4xl font-medium leading-tight text-birch sm:text-5xl">
                The topic guides cover the city. This covers your block.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-birch/60">
                Nearest bus stop, nearest shop, laundry room, sauna sign-up -
                the details that change depending on exactly where you live.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {neighborhoods.map((n) => (
                <NeighborhoodCard key={n.slug} neighborhood={n} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── About ──────────────────────────────────────────────────── */}
      <section id="about" className="border-t border-ink/10 bg-birchdim">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-16">
            <div className="sm:col-span-2">
              <p className="font-mono text-[12px] uppercase tracking-widest text-ink/45">
                Why this exists
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl">
                Built by someone who searched for all of this the hard way.
              </h2>
            </div>
            <div className="sm:col-span-3">
              <p className="text-[15px] leading-relaxed text-ink/70">
                I&rsquo;m {site.author}, a recent Master&rsquo;s graduate who
                moved to Jyväskylä without knowing where to buy groceries,
                which bus to trust, or how to read a Finnish lease. Every new
                cohort of international students rediscovers the same
                answers, one Facebook group post at a time.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
                {site.name} is that knowledge written down once, kept
                current, and handed to you before you need it - not after.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
