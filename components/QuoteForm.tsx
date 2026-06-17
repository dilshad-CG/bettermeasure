"use client";

import { useState } from "react";
import { services } from "@/lib/content";

const eventTypes = [
  "Corporate event",
  "Product launch",
  "Brand activation",
  "Conference / convening",
  "Government / official function",
  "Private / other",
];
const guestCounts = ["Under 50", "50–150", "150–500", "500+"];
const budgets = ["Under R50k", "R50k–R150k", "R150k–R500k", "R500k+", "Not sure yet"];

// When `service` is supplied (service pages), the form is locked to that
// solution and the "Services needed" picker is omitted — the visitor is
// already on that service's page.
export default function QuoteForm({ service }: { service?: string }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl bg-navy/5 p-8 text-center" role="status">
        <h3 className="text-xl font-semibold text-navy">Thank you — we&apos;ve got it.</h3>
        <p className="mt-2 text-ink/70">
          We&apos;ll respond within 24 hours. Need us sooner? Message us on WhatsApp at
          {" "}+27 79 090 7039.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        // Demo prototype: replace with real handler / Formspree / WP REST endpoint.
        setSent(true);
      }}
    >
      {service && <input type="hidden" name="service" value={service} />}

      <Field label="Name" name="name" required />
      <Field label="Contact number" name="contact" type="tel" required />
      <Field label="Email address" name="email" type="email" required />
      <Field label="Date of event" name="date" type="date" />

      {!service && (
        <>
          <Select label="Event type" name="eventType" options={eventTypes} />
          <Select label="Estimated guests" name="guests" options={guestCounts} />
        </>
      )}

      {!service && (
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium">Services needed</label>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <label key={s.slug} className="flex cursor-pointer items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1.5 text-xs hover:border-blue">
                <input type="checkbox" name="services" value={s.slug} className="accent-blue" />
                {s.name.replace(/ &.*| Management| Solutions| Coordination| Services| Campaigns/g, "")}
              </label>
            ))}
          </div>
        </div>
      )}

      <Select label="Budget range" name="budget" options={budgets} className="sm:col-span-2" />

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          {service ? `Tell us about your ${service.toLowerCase()} needs` : "Tell us about your event"}
        </label>
        <textarea id="message" name="message" rows={4} className="w-full rounded-xl border border-ink/15 px-4 py-3 text-sm focus:border-blue focus:outline-none" />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          {service ? `Request my ${service.split(" ")[0].toLowerCase()} quote` : "Request my quote"}
        </button>
        <p className="mt-3 text-xs text-ink/50">No account needed. We typically respond within 24 hours.</p>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label} {required && <span className="text-coral">*</span>}
      </label>
      <input id={name} name={name} type={type} required={required} className="w-full rounded-xl border border-ink/15 px-4 py-3 text-sm focus:border-blue focus:outline-none" />
    </div>
  );
}

function Select({ label, name, options, className = "" }: { label: string; name: string; options: string[]; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">{label}</label>
      <select id={name} name={name} className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm focus:border-blue focus:outline-none">
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
