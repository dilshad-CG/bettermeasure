import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { about, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Heart — Purpose-Led Event Planners in South Africa",
  description:
    "Better Measure is a proudly family-run, 100% black female-owned event company with 20+ years' combined experience. Read our story, vision and mission.",
  alternates: { canonical: "/heart" },
};

export default function HeartPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", url: "/" }, { name: "About", url: "/heart" }]} />

      <section className="section pt-10">
        <div className="container-bm grid items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">Our heart</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{about.title}</h1>
            <div className="mt-6 space-y-4 leading-relaxed text-ink/80">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.04}><p>{p}</p></Reveal>
              ))}
            </div>
            <blockquote className="mt-8 border-l-4 border-coral pl-5 font-display text-xl italic text-navy">
              “{about.quote}”
            </blockquote>
          </div>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl bg-navy/5">
              <div className="relative aspect-[4/5]">
                <Image src={about.image} alt="Better Measure values" fill className="object-contain p-8" sizes="(max-width:1024px) 100vw, 33vw" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="section bg-white">
        <div className="container-bm grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-navy p-10 text-white">
            <p className="eyebrow text-coral">Our Soul — Vision</p>
            <p className="mt-4 font-display text-2xl leading-snug">{about.vision}</p>
          </div>
          <div className="rounded-3xl bg-coral p-10 text-white">
            <p className="eyebrow text-white/80">Our Soul — Mission</p>
            <p className="mt-4 font-display text-2xl leading-snug">{about.mission}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-bm">
          <p className="eyebrow">Why Better Measure</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">What sets us apart</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {about.values.map((v, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <li className="flex h-full items-start gap-3 rounded-2xl border border-ink/10 bg-white p-5">
                  <span className="mt-0.5 text-coral" aria-hidden>✦</span>
                  <span className="text-ink/80">{v}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* People */}
      <section className="section bg-white">
        <div className="container-bm">
          <h2 className="text-3xl font-semibold sm:text-4xl">Our people on the ground</h2>
          <p className="mt-3 max-w-2xl text-ink/70">{company.serviceArea}.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {about.people.map((p) => (
              <div key={p.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy/5">
                <Image src={p.src} alt={p.alt} fill className="object-contain p-4" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Let’s create something with purpose" />
    </>
  );
}
