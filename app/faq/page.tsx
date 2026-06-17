import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about Better Measure's event services in South Africa — quotes, lead times, staffing, service areas and more.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumbs trail={[{ name: "Home", url: "/" }, { name: "FAQ", url: "/faq" }]} />
      <section className="section pt-10">
        <div className="container-bm max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Frequently asked questions</h1>
          <div className="mt-8"><Faq items={faqs} /></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
