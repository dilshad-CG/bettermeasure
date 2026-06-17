import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import QuoteForm from "@/components/QuoteForm";
import RatingBadge from "@/components/RatingBadge";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, serviceFaqSchema } from "@/lib/schema";
import { services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: `${s.name} — South Africa`,
    description: s.description,
    alternates: { canonical: `/solutions/${s.slug}` },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={serviceSchema(s.slug)} />
      <JsonLd data={serviceFaqSchema(s.slug)} />

      {/* HERO with conversion form in the first fold */}
      <section className="bg-navy text-white">
        <div className="container-bm pt-6">
          <Breadcrumbs
            bare
            tone="light"
            trail={[
              { name: "Home", url: "/" },
              { name: "Solutions", url: "/solutions" },
              { name: s.name, url: `/solutions/${s.slug}` },
            ]}
          />
        </div>
        <div className="container-bm grid gap-10 pb-14 pt-8 lg:grid-cols-2 lg:items-start lg:gap-16 lg:pb-20">
          <div className="lg:pt-4">
            <p className="eyebrow text-blue-light">Solution</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{s.name}</h1>
            {/* Lead answer — self-contained 40–60 words for AI extraction */}
            <p className="mt-5 text-lg leading-relaxed text-cream/90">{s.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {s.includes.slice(0, 4).map((inc) => (
                <li key={inc} className="flex items-start gap-2 text-sm text-cream/85">
                  <span className="mt-0.5 text-blue-light" aria-hidden>✓</span>{inc}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/solutions" className="btn border border-white/40 text-white hover:bg-white/10">All solutions</Link>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 text-ink shadow-xl sm:p-8">
            <p className="eyebrow">Get a quote</p>
            <h2 className="mt-1 text-xl font-semibold text-navy">Tell us about your event</h2>
            <RatingBadge className="mt-2" />
            <div className="mt-5">
              <QuoteForm service={s.name} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-bm grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl bg-navy/5 lg:order-1">
            <Image src={s.image} alt={s.imageAlt} fill className="object-contain p-8" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-semibold">What&apos;s included</h2>
            <ul className="mt-5 space-y-3">
              {s.includes.map((inc) => (
                <li key={inc} className="flex items-start gap-3 text-ink/80">
                  <span className="mt-1 text-coral" aria-hidden>✓</span>{inc}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xl font-semibold">Who it&apos;s for</h3>
            <p className="mt-3 leading-relaxed text-ink/80">{s.forWho}</p>
          </div>
        </div>
      </section>

      {s.faqs.length > 0 && (
        <section className="section">
          <div className="container-bm max-w-3xl">
            <h2 className="text-3xl font-semibold">Frequently asked</h2>
            <div className="mt-6"><Faq items={s.faqs} /></div>
          </div>
        </section>
      )}

      <section className="section bg-white">
        <div className="container-bm">
          <h2 className="text-2xl font-semibold">Explore more solutions</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/solutions/${o.slug}`} className="rounded-2xl border border-ink/10 p-5 transition-shadow hover:shadow-md">
                <h3 className="font-semibold text-navy">{o.name}</h3>
                <p className="mt-2 text-sm text-ink/70">{o.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading={`Get a quote for ${s.name}`} />
    </>
  );
}
