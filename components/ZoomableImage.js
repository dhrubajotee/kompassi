"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Thumbnail (used inline in the page) + a fullscreen lightbox on click.
// Click the lightbox image itself to toggle a closer zoom.
export default function ZoomableImage({ src, alt, sizes, wrapperClassName = "" }) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative block w-full min-h-[220px] cursor-zoom-in ${wrapperClassName}`}
        aria-label={`View larger image: ${alt}`}
      >
        <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/15">
          <span className="scale-90 rounded-full bg-ink/70 p-2 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
              <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 sm:p-10"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-birch/10 p-2 text-birch transition-colors hover:bg-birch/20"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div
            className={`relative max-h-full max-w-full overflow-auto ${zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
            onClick={(e) => {
              e.stopPropagation();
              setZoomed((z) => !z);
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className={`max-h-[85vh] w-auto transition-transform duration-300 ${
                zoomed ? "scale-[1.8]" : "scale-100"
              }`}
            />
          </div>
        </div>
      )}
    </>
  );
}