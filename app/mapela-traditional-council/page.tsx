import type { Metadata } from "next";
import { company } from "@/lib/content";

// Kept per request. This is a private proposal letter, not marketing content,
// so it is excluded from search indexing and the sitemap to avoid diluting SEO.
export const metadata: Metadata = {
  title: "Mapela Traditional Council — Proposal",
  robots: { index: false, follow: false },
  alternates: { canonical: "/mapela-traditional-council" },
};

const services = [
  "Strategic event planning and advisory",
  "Protocol-aligned programme development",
  "Stakeholder and community engagement coordination",
  "Technical production, staging, and logistics",
  "Guest management, registration, and reporting",
  "Creative direction that honours cultural identity",
];

export default function MapelaPage() {
  return (
    <section className="section">
      <div className="container-bm max-w-3xl">
        <div className="rounded-3xl border border-ink/10 bg-white p-8 sm:p-12">
          <p className="text-sm text-ink/50">2026/01/01</p>
          <h1 className="mt-3 text-2xl font-semibold sm:text-3xl">ATT: Mapela Traditional Council</h1>
          <p className="mt-1 font-medium text-navy">To: Honorable Alfred Langa — Mapela Traditional Council</p>

          <div className="mt-6 space-y-4 leading-relaxed text-ink/80">
            <p>We extend our respectful greetings to you and the esteemed members of the Mapela Traditional Council.</p>
            <p>
              Better Measure Africa is a South African–based, 100% black female-owned event management and
              creative solutions company with extensive experience in the planning, coordination, and execution
              of high-level events.
            </p>
            <p>
              What distinguishes Better Measure is our deep respect for leadership structures, cultural context,
              and community representation.
            </p>
            <p>Our services include:</p>
            <ul className="list-disc space-y-1 pl-6">
              {services.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <p>We thank you for your time, leadership, and consideration.</p>
            <p className="pt-2">
              Yours respectfully,<br />
              <span className="font-semibold">{company.managingDirector}</span><br />
              Managing Director — Better Measure Solutions
            </p>
            <p className="text-sm text-ink/60">
              {company.phoneDisplay} · {company.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
