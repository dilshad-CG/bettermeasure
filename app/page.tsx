import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import Reviews from "@/components/Reviews";
import CtaBand from "@/components/CtaBand";
import HeroBackground from "@/components/HeroBackground";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { intro, services, clients, howItWorks, faqs, company } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <HeroBackground />
        <div className="container-bm relative py-28 sm:py-36">
          <div className="max-w-2xl text-white">
            <p className="eyebrow text-blue-light">{company.legalNote}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              End-to-End Event Solutions That Connect Heart &amp; Purpose
            </h1>
            <p className="mt-5 max-w-xl text-lg text-cream/90">
              Full-service event production for corporates, organisations, institutions, NGOs,
              governments and international clients, planning, activations, staffing, catering and
              creative, handled end to end across South Africa and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/talk-to-us" className="btn-primary">Get a Quote</Link>
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Plan my event on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-ink/10 bg-white">
        <div className="container-bm grid grid-cols-2 gap-6 py-8 text-center sm:grid-cols-4">
          {[
            ["20+ years", "Combined experience"],
            ["100%", "Black female-owned"],
            ["Local & global", "South Africa & beyond"],
            ["End to end", "Concept to breakdown"],
          ].map(([big, small]) => (
            <div key={small}>
              <div className="font-display text-2xl font-semibold text-navy">{big}</div>
              <div className="text-xs uppercase tracking-wider text-ink/60">{small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container-bm grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Purpose-led event solutionists</h2>
            <p className="mt-5 leading-relaxed text-ink/80">{intro.lead}</p>
            <p className="mt-4 leading-relaxed text-ink/80">{intro.body}</p>
            <p className="mt-4 leading-relaxed text-ink/80">{intro.extra}</p>
            <Link href="/heart" className="btn-secondary mt-6">More about our heart</Link>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="rounded-3xl bg-navy p-10 text-2xl font-display leading-snug text-white">
              “{intro.ethos}”
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-white">
        <div className="container-bm">
          <div className="max-w-2xl">
            <p className="eyebrow">Solutions</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Where you relax and we execute</h2>
            <p className="mt-4 text-ink/70">From full-service production to filling a single gap, here&apos;s how we help.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.05}>
                <Link href={`/solutions/${s.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-cream transition-shadow hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy/5">
                    <Image src={s.image} alt={s.imageAlt} fill className="object-contain p-6 transition-transform group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold text-navy">{s.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-ink/70">{s.short}</p>
                    <span className="mt-4 text-sm font-semibold text-coral">Learn more →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/solutions" className="btn-secondary">Find out more about what we offer</Link>
          </div>
        </div>
      </section>

      {/* CLIENTS / SOCIAL PROOF */}
      <section className="section">
        <div className="container-bm text-center">
          <p className="eyebrow">Some of our amazing clients</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Trusted by brands and institutions</h2>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((c) => (
              <div key={c.name} className="flex h-36 items-center justify-center rounded-2xl border border-ink/10 bg-white p-6 shadow-sm sm:h-40">
                <div className="relative h-full w-full">
                  <Image src={c.logo} alt={`${c.name} logo`} fill className="object-contain" sizes="280px" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <Reviews />

      {/* HOW IT WORKS */}
      <section className="section bg-navy-dark text-cream">
        <div className="container-bm">
          <p className="eyebrow text-blue-light">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">From first message to flawless delivery</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s) => (
              <div key={s.step}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral font-display text-xl font-semibold text-white">{s.step}</div>
                <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-cream/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-bm grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Questions, answered</h2>
            <p className="mt-4 text-ink/70">Can&apos;t find what you&apos;re looking for? <Link href="/talk-to-us" className="font-semibold text-coral">Talk to us</Link>.</p>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
