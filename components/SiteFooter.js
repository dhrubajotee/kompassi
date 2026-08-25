import { site } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-birch">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-base italic text-ink/70">
            Made by a student who had to figure it out first.
          </p>
          <p className="font-mono text-[12px] uppercase tracking-wide text-ink/45">
            {site.name} · Jyväskylä · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
