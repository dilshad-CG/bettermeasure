"use client";

import { useState } from "react";
import { services } from "@/lib/content";

// FormSubmit.co delivers submissions by email — no backend needed for the
// static export. Primary recipient in the URL, second recipient via `_cc`.
// NOTE: FormSubmit requires a one-time email activation: the first submission
// triggers a confirmation link sent to dee@bettermeasure.africa that must be
// clicked once before submissions start being delivered.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/dee@bettermeasure.africa";
const CC_EMAIL = "dilshad@clickgenius.co.za";

const eventTypes = [
  "Corporate event",
  "Product launch",
  "Exhibition",
  "Conference / convening",
  "Government / official function",
  "Private / other",
];
const guestCounts = ["Under 50", "50–150", "150–500", "500+"];
const budgets = ["Under R50k", "R50k–R150k", "R150k–R500k", "R500k+", "Not sure yet"];

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

// When `service` is supplied (service pages), the form is locked to that
// solution and the "Services needed" picker is omitted — the visitor is
// already on that service's page.
export default function QuoteForm({ service }: { service?: string }) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [otherService, setOtherService] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const serviceSlugs = fd.getAll("services").map(String);
    const serviceNames = serviceSlugs
      .filter((s) => s !== "other")
      .map((slug) => services.find((x) => x.slug === slug)?.name || slug);
    if (serviceSlugs.includes("other")) serviceNames.push("Other");

    const data: Record<string, string> = {
      first_name: String(fd.get("firstName") || ""),
      last_name: String(fd.get("lastName") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("contact") || ""),
      event_date: String(fd.get("date") || ""),
      event_type: String(fd.get("eventType") || ""),
      guests: String(fd.get("guests") || ""),
      budget: String(fd.get("budget") || ""),
      services_needed: serviceNames.join(", "),
      other_service: String(fd.get("otherService") || ""),
      message: String(fd.get("message") || ""),
    };
    if (service) data.service = service;

    // 1) Fire the dataLayer event on every submit so GTM can capture the lead
    // with all the fields the user filled in.
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submitted",
        form_name: service ? "service_quote" : "quote",
        form_location: typeof location !== "undefined" ? location.pathname : "",
        ...data,
      });
    }

    // 2) Deliver the submission by email via FormSubmit (to dee + CC dilshad).
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: service
            ? `New ${service} enquiry — Better Measure website`
            : "New event enquiry — Better Measure website",
          _cc: CC_EMAIL,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error(`FormSubmit responded ${res.status}`);
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

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
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
      {service && <input type="hidden" name="service" value={service} />}

      <Field label="First name" name="firstName" required />
      <Field label="Last name" name="lastName" required />
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
            <label className="flex cursor-pointer items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1.5 text-xs hover:border-blue">
              <input
                type="checkbox"
                name="services"
                value="other"
                className="accent-blue"
                checked={otherService}
                onChange={(e) => setOtherService(e.target.checked)}
              />
              Other
            </label>
          </div>
          {otherService && (
            <div className="mt-3">
              <label htmlFor="otherService" className="mb-1.5 block text-sm font-medium">
                Tell us what you need
              </label>
              <input
                id="otherService"
                name="otherService"
                type="text"
                placeholder="Describe the support you're looking for"
                className="h-12 w-full rounded-xl border border-ink/15 bg-white px-4 text-sm text-ink focus:border-blue focus:outline-none"
              />
            </div>
          )}
        </div>
      )}

      <Select label="Budget range" name="budget" options={budgets} className="sm:col-span-2" />

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          {service ? `Tell us about your ${service.toLowerCase()} needs` : "Tell us about your event"}
        </label>
        <textarea id="message" name="message" rows={4} className="w-full rounded-xl border border-ink/15 px-4 py-3 text-sm focus:border-blue focus:outline-none" />
      </div>

      {error && (
        <div className="sm:col-span-2 rounded-xl border border-coral/30 bg-coral/5 px-4 py-3 text-sm text-ink/80" role="alert">
          Something went wrong sending your request. Please email{" "}
          <a href="mailto:dee@bettermeasure.africa" className="font-semibold text-coral">dee@bettermeasure.africa</a>{" "}
          or WhatsApp us at +27 79 090 7039 and we&apos;ll pick it up right away.
        </div>
      )}

      <div className="sm:col-span-2">
        <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
          {submitting
            ? "Sending…"
            : service
            ? `Request my ${service.split(" ")[0].toLowerCase()} quote`
            : "Request my quote"}
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
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-12 w-full appearance-none rounded-xl border border-ink/15 bg-white px-4 text-sm text-ink [color-scheme:light] focus:border-blue focus:outline-none"
      />
    </div>
  );
}

function Select({ label, name, options, className = "" }: { label: string; name: string; options: string[]; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">{label}</label>
      <select id={name} name={name} className="h-12 w-full rounded-xl border border-ink/15 bg-white px-4 text-sm focus:border-blue focus:outline-none">
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
