import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { portfolio } from "@/lib/content";

// Static export with unoptimized images doesn't auto-prefix the GitHub Pages
// base path for local /public assets, so add it for non-http sources.
const withBase = (src: string) =>
  src.startsWith("http") ? src : `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${src}`;

export const metadata: Metadata = {
  title: "Our Magic — Event Portfolio & Gallery",
  description:
    "See Better Measure in action: a selection of events we've produced across South Africa, from brand activations to high-profile convenings including the Ford Foundation.",
  alternates: { canonical: "/our-magic" },
};

export default function OurMagicPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", url: "/" }, { name: "Portfolio", url: "/our-magic" }]} />

      <section className="section pt-10">
        <div className="container-bm max-w-3xl">
          <p className="eyebrow">Our magic, our profile</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Our work, our proof</h1>
          <p className="mt-5 text-lg text-ink/80">
            From intimate brand launches to large-scale international convenings, a glimpse of the events
            we&apos;ve brought to life.
          </p>
        </div>

        <div className="container-bm mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {portfolio.map((p, i) => (
            <Reveal key={p.src} delay={(i % 3) * 0.05}>
              <figure className="overflow-hidden rounded-2xl bg-navy/5">
                <Image
                  src={withBase(p.src)}
                  alt={p.alt}
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand heading="Picture your event here" />
    </>
  );
}
