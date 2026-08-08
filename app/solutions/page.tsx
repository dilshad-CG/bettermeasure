import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { services, capabilities, adHocCopy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions & Services — Event Planning, Activations & More",
  description:
    "Better Measure offers tailored event solutions across South Africa: full-service planning, express events, brand activations, logistics, RSVP & accreditation, creative, catering, marquees, apparel and promotional items.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }]} />

      <section className="section pt-10">
        <div className="container-bm max-w-3xl">
          <p className="eyebrow">Solutions &amp; services</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Tailored event solutions, end to end</h1>
          <p className="mt-5 text-lg text-ink/80">
            Whether you need a full-scale production managed from concept to breakdown, or a single gap
            filled fast, we step in where you need us most, and make every detail count.
          </p>
        </div>

        <div className="container-bm mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.05}>
              <Link href={`/solutions/${s.slug}`} className="group flex h-full gap-5 rounded-2xl border border-ink/10 bg-white p-5 transition-shadow hover:shadow-lg">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-navy/5">
                  <Image src={s.image} alt={s.imageAlt} fill className="object-cover" sizes="96px" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold text-navy">{s.name}</h2>
                    {s.isNew && <span className="rounded-full bg-coral/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-coral">New</span>}
                  </div>
                  <p className="mt-2 text-sm text-ink/70">{s.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-coral">Learn more →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities + ad hoc (verbatim) */}
      <section className="section bg-white">
        <div className="container-bm grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Flexible, ad hoc support</h2>
            <p className="mt-5 leading-relaxed text-ink/80">{adHocCopy}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {capabilities.map((c) => (
              <span key={c} className="rounded-full border border-navy/30 bg-navy/5 px-5 py-2.5 text-sm font-medium text-navy">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Not sure which solution you need?" sub="Tell us about your event and we'll recommend the right mix." primaryLabel="Talk to us" />
    </>
  );
}
