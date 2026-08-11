"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { heroImages } from "@/lib/content";

// Static export with unoptimized images doesn't auto-prefix the GitHub Pages
// base path for local /public assets.
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function HeroBackground() {
  const [index, setIndex] = useState(0);
  // Only the first hero image loads on paint (it's the LCP element). The rest
  // of the crossfade set is mounted after the browser goes idle so they don't
  // compete with LCP or inflate the initial payload — a Core Web Vitals win.
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const start = () => setShowAll(true);
    const g = globalThis as unknown as {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (g.requestIdleCallback) idleId = g.requestIdleCallback(start, { timeout: 2500 });
    else timeoutId = setTimeout(start, 1500);
    return () => {
      if (idleId !== undefined) g.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!showAll) return;
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(t);
  }, [showAll]);

  const images = showAll ? heroImages : heroImages.slice(0, 1);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={src}
          src={`${base}${src}`}
          alt=""
          aria-hidden="true"
          fill
          priority={i === 0}
          loading={i === 0 ? "eager" : "lazy"}
          sizes="100vw"
          className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Navy brand wash for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/75 to-navy-dark/45" />
    </div>
  );
}
