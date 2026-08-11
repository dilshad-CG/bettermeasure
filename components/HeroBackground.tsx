"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { heroImages } from "@/lib/content";

export default function HeroBackground() {
  const [index, setIndex] = useState(0);
  // Only the first hero image loads and paints on arrival (it is the LCP
  // element). The rest of the crossfade set is neither loaded nor rotated
  // until the visitor first interacts — this keeps the auto-advancing slides
  // from registering as later, slower LCP candidates (a Core Web Vitals win)
  // while still giving real users the full crossfading hero the moment they
  // scroll or tap.
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const start = () => setStarted(true);
    const opts: AddEventListenerOptions = { once: true, passive: true };
    const events = ["scroll", "pointerdown", "touchstart", "keydown"] as const;
    events.forEach((e) => window.addEventListener(e, start, opts));
    return () => events.forEach((e) => window.removeEventListener(e, start));
  }, []);

  useEffect(() => {
    if (!started) return;
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(t);
  }, [started]);

  const images = started ? heroImages : heroImages.slice(0, 1);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          fill
          priority={i === 0}
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
