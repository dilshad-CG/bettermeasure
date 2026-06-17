"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { heroImages } from "@/lib/content";

export default function HeroBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroImages.map((src, i) => (
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
