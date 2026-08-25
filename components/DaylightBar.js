import { daylight } from "@/lib/content";

// The site's signature element: a strip of Jyväskylä's monthly daylight
// hours (62°N swings from ~5.5 to ~19.5 hours). It doubles as decoration
// and as genuinely useful orientation for someone who has never lived
// this far north.
export default function DaylightBar({ variant = "dark", className = "" }) {
  const max = Math.max(...daylight.map((d) => d.hrs));
  const isDark = variant === "dark";

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-end gap-[3px] sm:gap-1.5 h-20 sm:h-28">
        {daylight.map((d) => (
          <div key={d.m} className="group relative flex-1 h-full flex items-end">
            <div
              className={`w-full rounded-t-sm transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-t from-amber to-amber/50 group-hover:from-amber group-hover:to-amber"
                  : "bg-gradient-to-t from-lakedeep to-lake/70 group-hover:to-lake"
              }`}
              style={{ height: `${(d.hrs / max) * 100}%` }}
            />
            <span
              className={`pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] opacity-0 transition-opacity group-hover:opacity-100 ${
                isDark ? "text-birch" : "text-ink"
              }`}
            >
              {d.hrs}h
            </span>
          </div>
        ))}
      </div>
      <div
        className={`mt-2 flex gap-[3px] sm:gap-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-wide ${
          isDark ? "text-frost" : "text-ink/50"
        }`}
      >
        {daylight.map((d) => (
          <span key={d.m} className="flex-1 text-center">
            {d.m[0]}
          </span>
        ))}
      </div>
    </div>
  );
}
