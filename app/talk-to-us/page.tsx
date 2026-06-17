import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Talk to Us — Get an Event Quote",
  description:
    "Get a quote from Better Measure. Call +27 79 090 7039, WhatsApp us, or email dee@bettermeasure.africa. Based in Alberton, Gauteng, serving all of South Africa.",
  alternates: { canonical: "/talk-to-us" },
};

const mapQuery = encodeURIComponent(company.address);

export default function TalkToUsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", url: "/" }, { name: "Contact", url: "/talk-to-us" }]} />

      <section className="section pt-10">
        <div className="container-bm grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">Talk to us</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Let&apos;s plan your event</h1>
            <p className="mt-4 text-ink/70">
              Share a few details and we&apos;ll come back with a tailored plan and quote — usually within 24 hours.
              Prefer to talk? Call or WhatsApp us directly.
            </p>
            <div className="mt-8 rounded-3xl border border-ink/10 bg-white p-6 sm:p-8">
              <QuoteForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${company.phone}`} className="btn-primary flex-1">Call us now</a>
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex-1">WhatsApp</a>
            </div>

            <ContactCard label="Call us now!" value={company.phoneDisplay} href={`tel:${company.phone}`} note="We are available after hours too or on WhatsApp" />
            <ContactCard label="Pop us a mail!" value={company.email} href={`mailto:${company.email}`} />
            <div className="rounded-2xl border border-ink/10 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-coral">Address</p>
              <p className="mt-1 text-ink/80">{company.address}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-coral">Hours</p>
              <p className="mt-1 text-ink/80">{company.hours}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-bm">
          <div className="overflow-hidden rounded-3xl border border-ink/10">
            <iframe
              title="Better Measure location"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({ label, value, href, note }: { label: string; value: string; href: string; note?: string }) {
  return (
    <a href={href} className="block rounded-2xl border border-ink/10 bg-white p-5 transition-shadow hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-wider text-coral">{label}</p>
      <p className="mt-1 text-lg font-semibold text-navy">{value}</p>
      {note && <p className="mt-1 text-sm text-ink/60">{note}</p>}
    </a>
  );
}
