import type { Metadata } from "next";
import { company } from "@/lib/content";

// Archived seasonal campaign template (Santa's Garden of Lights, Dec 16–21).
// Kept as a reusable template for future seasonal events; removed from primary
// nav and noindexed while inactive.
export const metadata: Metadata = {
  title: "Santa's Garden of Lights — Seasonal Event",
  robots: { index: false, follow: false },
  alternates: { canonical: "/christmas" },
};

const includes = [
  "Santa's Garden of Lights walkthrough",
  "Santa's craft workshop",
  "Outdoor Christmas movie night",
  "Kids under 5 enter free",
];

export default function ChristmasPage() {
  return (
    <section className="section">
      <div className="container-bm max-w-3xl text-center">
        <span className="inline-block rounded-full bg-ink/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-ink/60">
          Seasonal event · Archived
        </span>
        <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">🎄 Santa&apos;s Garden of Lights</h1>
        <p className="mt-3 text-lg text-ink/70">16 to 21 December · Tickets from R75 · Kids under 5 free</p>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          {includes.map((i) => (
            <div key={i} className="rounded-2xl border border-ink/10 bg-white p-5">{i}</div>
          ))}
        </div>

        <p className="mt-8 text-ink/70">
          This festive event has wrapped up. Planning a seasonal experience of your own?
          We&apos;d love to bring it to life.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="/talk-to-us" className="btn-primary">Plan a seasonal event</a>
          <a href={`tel:${company.phone}`} className="btn-secondary">Call {company.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
