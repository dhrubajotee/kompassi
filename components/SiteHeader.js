import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-birch/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-birch">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2 L15 10 L22 12 L15 14 L12 22 L9 14 L2 12 L9 10 Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="font-display text-lg font-medium tracking-tight">
            Kompassi
          </span>
        </Link>
        <nav className="hidden items-center gap-8 font-mono text-[13px] uppercase tracking-wide text-ink/70 sm:flex">
          <Link href="/#guide" className="transition-colors hover:text-ink">
            Guide
          </Link>
          <Link href="/#neighborhoods" className="transition-colors hover:text-ink">
            Where you live
          </Link>
          <Link href="/#about" className="transition-colors hover:text-ink">
            About
          </Link>
        </nav>
        <Link
          href="/#guide"
          className="rounded-full bg-ink px-4 py-2 font-mono text-[12px] uppercase tracking-wide text-birch transition-colors hover:bg-spruce sm:hidden"
        >
          Menu
        </Link>
      </div>
    </header>
  );
}
