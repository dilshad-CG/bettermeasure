import { company, services, faqs, rating, reviews } from "./content";

const ORG_ID = `${company.url}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": ORG_ID,
  name: company.name,
  url: company.url,
  email: company.email,
  telephone: company.phone,
  description:
    "100% black female-owned, family-run event and creative solutions company in Alberton, Gauteng, delivering end-to-end events across South Africa.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Camborne Road, New Redruth",
    addressLocality: "Alberton",
    addressRegion: "Gauteng",
    postalCode: "1449",
    addressCountry: "ZA",
  },
  areaServed: { "@type": "Country", name: "South Africa" },
  openingHours: "Mo-Fr 08:30-16:00",
  founder: { "@type": "Person", name: company.managingDirector },
  sameAs: [],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: rating.value,
    reviewCount: rating.count,
    bestRating: 5,
    worstRating: 1,
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    reviewBody: r.text,
  })),
};

export function serviceSchema(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    serviceType: s.name,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "South Africa" },
    url: `${company.url}/solutions/${s.slug}`,
  };
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function serviceFaqSchema(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s || s.faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${company.url}${t.url}`,
    })),
  };
}
