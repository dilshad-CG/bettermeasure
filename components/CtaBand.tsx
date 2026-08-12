import { company } from "@/lib/content";

export default function CtaBand({
  heading = "Ready to plan your event?",
  sub = "Tell us what you're planning, we'll come back within 24 hours.",
  primaryLabel = "Get a Quote",
}: {
  heading?: string;
  sub?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="bg-coral">
      <div className="container-bm flex flex-col items-center gap-6 py-14 text-center text-white">
        <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">{heading}</h2>
        <p className="max-w-xl text-white/90">{sub}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/talk-to-us" className="btn bg-white text-coral hover:bg-cream">{primaryLabel}</a>
          <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="btn border border-white text-white hover:bg-white/10">Chat on WhatsApp</a>
          <a href={`tel:${company.phone}`} className="btn border border-white text-white hover:bg-white/10">Call {company.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
