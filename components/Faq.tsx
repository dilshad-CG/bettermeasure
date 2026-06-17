"use client";

import { useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
      {items.map((f, i) => (
        <div key={i}>
          <button
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-medium text-ink">{f.q}</span>
            <span className={`text-coral transition-transform ${open === i ? "rotate-45" : ""}`} aria-hidden>＋</span>
          </button>
          {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-ink/70">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}
