// =============================================================================
// Better Measure, content source of truth
// Verbatim copy preserved from the live WordPress site (Phase 0 audit) plus
// supplementary new copy clearly marked. Images reference the EXACT files
// already hosted at bettermeasure.africa/wp-content/uploads (Phase 0 rule:
// reuse originals, no new/AI imagery).
// =============================================================================

export const UPLOADS = "https://bettermeasure.africa/wp-content/uploads";

export const company = {
  name: "Better Measure",
  legalNote: "100% black female-owned, family-run event & creative solutions company",
  tagline: "End-to-End Event Solutions That Connect Heart & Purpose",
  phone: "+27790907039",
  phoneDisplay: "+27 79 090 7039",
  email: "dee@bettermeasure.africa",
  whatsapp: "https://wa.me/27790907039",
  address: "Camborne Road, New Redruth, Alberton, Gauteng 1449",
  hours: "Online anytime · Office hours 08:30–16:00, Mon–Fri",
  serviceArea: "Headquartered in Alberton, Gauteng, delivering events across South Africa and internationally",
  yearsExperience: "20+ years combined experience",
  managingDirector: "Danette Warburton",
  url: "https://bettermeasure.africa",
  // Office visits are by appointment only, surfaced on the Contact page.
  visitNote: "Office visits are by appointment only, please arrange a time with us before popping in.",
  // Social links, fill with the real profile URLs to render icons in the footer.
  socials: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
};

// --- HOME / ABOUT verbatim copy --------------------------------------------
export const intro = {
  // New "Purpose-Led Event Solutionists" narrative (client-approved copy).
  lead:
    "Every event tells a story, builds relationships, and creates opportunities. At Better Measure, we believe exceptional events are driven by purposeful strategy, thoughtful creativity, and flawless execution.",
  body:
    "We partner with businesses, organisations, institutions, NGOs, governments, and global clients to design and deliver experiences that inspire, connect, and leave a lasting impact. From intimate executive gatherings to large-scale conferences, brand activations, exhibitions, and corporate events, we provide end-to-end event and project solutions tailored to every client's vision.",
  extra:
    "As a proudly female-led company with over 20 years of combined industry experience, we bring together strategic thinking, creative innovation, operational excellence, and meticulous attention to detail. Whether we're managing complex logistics behind the scenes or delivering unforgettable guest experiences, our commitment remains the same, to transform ideas into seamless, meaningful experiences that exceed expectations.",
  ethos:
    "Because at Better Measure, every detail matters, and every experience is measured by the impact it leaves behind.",
};

// Core values (rendered as text on the About page, replaces the old graphic).
export const coreValues = [
  { name: "Integrity", body: "We do what's right, honour our word, and stay accountable at every step." },
  { name: "Agility", body: "We adapt fast, solve problems on our feet, and deliver under pressure." },
  { name: "Impact", body: "We measure success by the difference every experience leaves behind." },
  { name: "Collaboration", body: "We work as an extension of your team, and treat our partners as family." },
];

export const about = {
  // verbatim from /heart/
  title: "Heart-led Event Production Team",
  paragraphs: [
    "Better Measure, purpose-led event planners in South Africa, is a proudly family-run project solutions company, built on over 20 years of combined experience across brand marketing, promotional and branding items, brand activations, project management, and event planning and logistics. Our story is rooted in a shared passion for bringing ideas to life, blending creativity with strategy, and vision with measurable execution.",
    "Born from the desire to bridge innovative thinking with data-driven precision, Better Measure was founded to deliver more than just events, we create experiences with purpose. Our team is made up of dynamic problem-solvers who understand that no two projects are the same. That's why we tailor every solution to suit your unique needs, while ensuring impact, efficiency, and excellence.",
    "Whether we're managing a high-pressure launch, driving engagement through activations, or fine-tuning logistics behind the scenes, our goal is simple: to turn your vision into a reality, and make every detail count!",
    "With a track record that spans everything from intimate brand launches to large-scale international convenings, Better Measure brings a wealth of hands-on experience to every project we undertake. Our team is well-versed in managing diverse event scales and dynamics, ensuring each one is executed with the same level of care and precision. Over the years, we've built a trusted panel of suppliers and partners who understand our standards and align with our commitment to excellence. Their continued collaboration speaks volumes about the reliability of our process and the strength of the relationships we've nurtured along the way.",
    "Our service providers are part of our family, mutual love and high levels of respect. They will go to war for us!",
  ],
  quote:
    "The spirit of Better Measure lives in our people, resilient, imaginative, and committed to creating with purpose.",
  vision:
    "To be Africa's most trusted event and activation solutionist, known for combining creative flair with precise execution.",
  mission:
    "To deliver unforgettable brand experiences and seamless project solutions by uniting innovation, intelligence, and integrity.",
  values: [
    "Family-owned with heart, but driven by professionalism.",
    "A proven track record across multiple sectors and brands.",
    "Hands-on, agile, and always solution-oriented.",
    "Passionate about fusing data with imagination.",
    "Trusted by clients who need things done right, the first time!",
  ],
  image: `${UPLOADS}/2025/06/Values-01.png`,
  people: [
    { src: `${UPLOADS}/2025/06/People-01.png`, alt: "Better Measure team on site at an event" },
    { src: `${UPLOADS}/2025/06/People-02.png`, alt: "Safety team at a Better Measure event at Constitution Hill" },
    { src: `${UPLOADS}/2025/06/People-03.png`, alt: "RSVP staff at an event for the Presidency" },
  ],
};

// --- SERVICES ---------------------------------------------------------------
// First 6: verbatim descriptions from /solutions/.
// Last 4: NEW supplementary copy for the "ad hoc support" lines the brief
// asks to expand (catering, marquees, apparel, promo items).
export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string; // lead answer (40–60 words, GEO-friendly)
  includes: string[];
  forWho: string;
  image: string;
  imageAlt: string;
  isNew?: boolean;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "full-service-event-planning",
    name: "Full Service Event Planning & Management",
    short: "Concept to on-site execution, handled end to end.",
    description:
      "From small-scale product launches to high-profile international summits, we offer end-to-end event planning that covers concept development, supplier coordination, budgeting, staffing, venue management, and on-site execution.",
    includes: ["Concept development", "Supplier coordination", "Budgeting", "Staffing", "Venue management", "On-site execution"],
    forWho: "Brands and organisations that want a single accountable partner from first brief to final breakdown.",
    image: `${UPLOADS}/2025/06/Services-01-1.png`,
    imageAlt: "Better Measure full-service event planning",
    faqs: [
      { q: "How far in advance should I book full event planning?", a: "For large events we recommend 8–12 weeks, but we regularly deliver high-quality events on tighter timelines, talk to us about your date and we'll tell you honestly what's achievable." },
      { q: "Do you handle the budget end to end?", a: "Yes. We build, manage and reconcile the event budget across all suppliers so you have one transparent line of accountability." },
    ],
  },
  {
    slug: "brand-activations",
    name: "Brand Activations & Experiential Campaigns",
    short: "Interactive brand experiences that drive engagement.",
    description:
      "We design and deliver creative, interactive brand experiences that resonate with audiences and strengthen customer engagement.",
    includes: ["Experiential concept design", "Interactive installations", "Promotional staffing", "Audience engagement"],
    forWho: "Marketing teams that want their brand felt, not just seen.",
    image: `${UPLOADS}/2025/06/Services-11.png`,
    imageAlt: "Branded Better Measure brand activation stand at a corporate event",
    faqs: [
      { q: "Do you provide promotional staff for activations?", a: "Yes, we supply, brief and manage trained promotional and brand-ambassador staff as part of an activation, including apparel and accreditation." },
    ],
  },
  {
    slug: "project-logistics-coordination",
    name: "Project & Logistics Coordination",
    short: "Every moving part, kept in perfect sync.",
    description:
      "From behind-the-scenes planning to seamless execution, we manage all moving parts, ensuring timelines, stakeholders, and suppliers work in perfect sync.",
    includes: ["Timeline management", "Stakeholder coordination", "Supplier management", "On-site logistics"],
    forWho: "Organisations with complex, multi-supplier events that need a steady coordinating hand.",
    image: `${UPLOADS}/2025/06/Services-16.png`,
    imageAlt: "Better Measure event set-up and logistics coordination",
    faqs: [
      { q: "Can you coordinate suppliers we've already booked?", a: "Absolutely. We can step in purely as the coordinating layer over your existing suppliers, or source and manage them ourselves." },
    ],
  },
  {
    slug: "rsvp-accreditation",
    name: "RSVP & Accreditation Management",
    short: "Secure guest management and stress-free check-in.",
    description:
      "Our secure systems streamline guest list management, invitation tracking, check-in protocols, and access control for professional and stress-free entry experiences.",
    includes: ["Guest list management", "Invitation tracking", "Check-in protocols", "Access control & accreditation"],
    forWho: "High-profile and high-security events where access control and a smooth arrival matter.",
    image: `${UPLOADS}/2025/06/Services-02-1.png`,
    imageAlt: "Better Measure staff at an event RSVP and accreditation check-in table",
    faqs: [
      { q: "Do you provide on-site accreditation staff?", a: "Yes. We have delivered RSVP and accreditation for events including work for the Presidency, with trained staff and secure check-in systems." },
    ],
  },
  {
    slug: "creative-direction-content",
    name: "Creative Direction & Content Services",
    short: "Thoughtful design and messaging aligned to your brand.",
    description:
      "We bring vision to life through thoughtful design, creative concepts, and tailored messaging that align with your brand and objectives.",
    includes: ["Creative concept development", "Event design direction", "Tailored messaging", "Content production"],
    forWho: "Brands that need the look, feel and story of an event to ladder up to their objectives.",
    image: `${UPLOADS}/2025/06/Services-03.png`,
    imageAlt: "Custom branded event collateral by Better Measure creative direction",
    faqs: [
      { q: "Can you align the event creative with our existing brand guidelines?", a: "Yes, we work to your brand guidelines and can extend them into a bespoke event identity, signage, and content." },
    ],
  },
  // ---- NEW supplementary service lines (expanded from "ad hoc support") ----
  {
    slug: "catering",
    name: "Catering",
    short: "Sourced, managed catering for any event size.",
    description:
      "We source and manage catering tailored to your event, from corporate canapés and conference catering to large-scale functions. We match the right caterer to your guest count, budget, and dietary needs, and manage delivery on the day so you don't have to.",
    includes: ["Caterer sourcing & vetting", "Menu & dietary planning", "Beverage and service staff", "On-the-day coordination"],
    forWho: "Events that need reliable, well-matched catering without the supplier headache.",
    image: `${UPLOADS}/2025/06/Services-07.png`,
    imageAlt: "Catering set-up for a Better Measure event",
    isNew: true,
    faqs: [
      { q: "How much does event catering cost in South Africa?", a: "Catering is priced per head and varies widely with menu and service level, from light finger lunches to plated dinners. Tell us your guest count and budget range and we'll source options that fit." },
      { q: "Can you cater for dietary requirements?", a: "Yes, halaal, kosher, vegetarian, vegan and allergen-aware menus are all handled through our vetted catering partners." },
    ],
  },
  {
    slug: "branded-apparel",
    name: "Branded Apparel & Staff Uniforms",
    short: "On-brand staff apparel and event uniforms.",
    description:
      "We design and supply branded apparel and event uniforms, from staff and promotional-team kit to corporate gifting wear. Garments are branded to your guidelines so your team looks consistent, professional, and unmistakably on-brand on the day.",
    includes: ["Staff & promo-team uniforms", "Branded corporate apparel", "Embroidery & print branding", "Sizing & on-time delivery"],
    forWho: "Brands and events that want a polished, uniformed team presence.",
    image: `${UPLOADS}/2025/06/People-03.png`,
    imageAlt: "Better Measure event team in matching branded staff uniforms",
    isNew: true,
    faqs: [
      { q: "Can you brand apparel to our corporate identity?", a: "Yes, we print or embroider to your brand guidelines and can produce matching kit across an entire event team." },
    ],
  },
  {
    slug: "promotional-items",
    name: "Promotional & Branded Items",
    short: "Branded giveaways, gifting and promotional merchandise.",
    description:
      "We source and brand promotional items and corporate gifts, giveaways, delegate packs, and branded merchandise that extend your event well beyond the day. With 20+ years in promotional and branding items, we match the right product to your audience and budget.",
    includes: ["Branded giveaways & merch", "Delegate & gift packs", "Corporate gifting", "Sourcing, branding & delivery"],
    forWho: "Campaigns and events that want a lasting, tangible brand touchpoint.",
    image: `${UPLOADS}/2025/06/Services-13.png`,
    imageAlt: "Branded delegate gift bags produced by Better Measure",
    isNew: true,
    faqs: [
      { q: "Do you have a minimum order for promotional items?", a: "Minimums depend on the product and branding method. Tell us your quantity and budget and we'll source options that work, small runs included." },
    ],
  },
];

// Capability icons from /solutions/ (verbatim labels)
export const capabilities = ["Decor", "Catering", "Sound & Tech", "Experiences"];

// "Ad hoc support" paragraph from /solutions/.
export const adHocCopy =
  "At Better Measure, we understand that not every event requires full-scale production, but every moment still deserves thoughtful execution. That's why we offer flexible, ad hoc event support tailored to your needs. Whether it's sourcing catering, handling event admin, providing staff apparel, or supplying branded promotional items, we step in where you need us most. Our goal is to fill the gaps, lighten your load, and ensure every element, big or small, measures up.";

// --- CLIENTS (logos from audit) --------------------------------------------
export const clients = [
  { name: "Ford Foundation", logo: `${UPLOADS}/2026/01/Ford_Foundation_Logo_500x500.png` },
  { name: "Oriflame", logo: `${UPLOADS}/2026/01/Oriflame-Logo_500x500.png` },
  { name: "CRTVE", logo: `${UPLOADS}/2026/01/CRTVE_FINAL_BLACK_500x500.png` },
  { name: "Warbie Couture", logo: `${UPLOADS}/2026/01/Warbie_Warbie-Couture_500x500.png` },
  { name: "Warbie Rentals", logo: `${UPLOADS}/2026/01/Warbie_Warbie-Rentals_500x500.png` },
];

// --- HERO + PORTFOLIO images (real event photos from audit) -----------------
export const heroImages = [
  `${UPLOADS}/2026/01/DSC00049_1920x800.jpg`,
  `${UPLOADS}/2026/01/1L0A1733_1920x800.jpg`,
  `${UPLOADS}/2026/01/DSC00075_1920x800.jpg`,
  `${UPLOADS}/2026/01/FF-Darren-Walker-Farewell_082A9045_1920x800.jpg`,
  `${UPLOADS}/2026/01/FF-Darren-Walker-Farewell_082A9612_1920x800.jpg`,
  `${UPLOADS}/2026/01/FF-Darren-Walker-Farewell_082A9166_1920x800.jpg`,
];

// A broad selection of the archive gallery for the portfolio page — real
// event photography. Local `/portfolio/*` files are self-hosted in /public;
// the rest reference the Better Measure media library. The gallery component
// prefixes the base path for local (non-http) sources.
export const portfolio: { src: string; alt: string }[] = [
  { src: `/portfolio/grantee-reception-01.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-02.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-03.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-04.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-05.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-06.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-07.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-08.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-09.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-10.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-11.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-12.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-13.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-14.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-15.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-16.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `/portfolio/grantee-reception-17.jpg`, alt: "Ford Foundation grantee reception produced by Better Measure" },
  { src: `${UPLOADS}/2026/01/DSC00321-1-scaled.jpg`, alt: "Better Measure event production" },
  { src: `${UPLOADS}/2026/01/DSC00486-scaled.jpg`, alt: "Guests at a Better Measure event" },
  { src: `${UPLOADS}/2026/01/DSC08187-scaled.jpg`, alt: "Better Measure event production" },
  { src: `${UPLOADS}/2026/01/DSC08204-scaled.jpg`, alt: "Event staging by Better Measure" },
  { src: `${UPLOADS}/2026/01/DSC08228-scaled.jpg`, alt: "Better Measure event set-up" },
  { src: `${UPLOADS}/2026/01/DSC08251-scaled.jpg`, alt: "Better Measure event detail" },
  { src: `${UPLOADS}/2026/01/DSC08271-scaled.jpg`, alt: "Better Measure event production" },
  { src: `${UPLOADS}/2026/01/DSC08302-scaled.jpg`, alt: "Event staging by Better Measure" },
  { src: `${UPLOADS}/2026/01/DSC08471-scaled.jpg`, alt: "Better Measure event guests" },
  { src: `${UPLOADS}/2026/01/DSC08589-scaled.jpg`, alt: "Better Measure event décor" },
  { src: `${UPLOADS}/2026/01/DSC08659-scaled.jpg`, alt: "Better Measure event production" },
  { src: `${UPLOADS}/2026/01/DSC08807-scaled.jpg`, alt: "Event set-up by Better Measure" },
  { src: `${UPLOADS}/2026/01/DSC08886-scaled.jpg`, alt: "Better Measure event detail" },
  { src: `${UPLOADS}/2026/01/DSC08906-scaled.jpg`, alt: "Better Measure event detail" },
  { src: `${UPLOADS}/2026/01/DSC08919-scaled.jpg`, alt: "Better Measure event production" },
  { src: `${UPLOADS}/2026/01/DSC09028-scaled.jpg`, alt: "Better Measure event guests" },
  { src: `${UPLOADS}/2026/01/DSC09287-scaled.jpg`, alt: "Better Measure event production" },
  { src: `${UPLOADS}/2026/01/FF-Darren-Walker-Farewell_082A9030-scaled.jpg`, alt: "Ford Foundation Darren Walker farewell event by Better Measure" },
  { src: `${UPLOADS}/2026/01/FF-Darren-Walker-Farewell_082A9045-scaled.jpg`, alt: "Ford Foundation Darren Walker farewell event by Better Measure" },
  { src: `${UPLOADS}/2026/01/FF-Darren-Walker-Farewell_082A9072-scaled.jpg`, alt: "Ford Foundation farewell event staging by Better Measure" },
  { src: `${UPLOADS}/2026/01/FF-Darren-Walker-Farewell_082A9097-scaled.jpg`, alt: "Ford Foundation Darren Walker farewell event by Better Measure" },
  { src: `${UPLOADS}/2026/01/FF-Darren-Walker-Farewell_082A9145-scaled.jpg`, alt: "Ford Foundation Darren Walker farewell event by Better Measure" },
  { src: `${UPLOADS}/2026/01/FF-Darren-Walker-Farewell_082A9160-scaled.jpg`, alt: "Ford Foundation Darren Walker farewell event by Better Measure" },
  { src: `${UPLOADS}/2026/01/FF-Darren-Walker-Farewell_082A9166-scaled.jpg`, alt: "Ford Foundation farewell event detail" },
  { src: `${UPLOADS}/2026/01/FF-Darren-Walker-Farewell_082A9186-scaled.jpg`, alt: "Ford Foundation Darren Walker farewell event by Better Measure" },
  { src: `${UPLOADS}/2026/01/FF-Darren-Walker-Farewell_082A9272-scaled.jpg`, alt: "Ford Foundation Darren Walker farewell event by Better Measure" },
  { src: `${UPLOADS}/2026/01/FF-Darren-Walker-Farewell_082A9573-scaled.jpg`, alt: "Ford Foundation Darren Walker farewell event by Better Measure" },
  { src: `${UPLOADS}/2026/01/FF-Darren-Walker-Farewell_082A9588-scaled.jpg`, alt: "Ford Foundation Darren Walker farewell event by Better Measure" },
  { src: `${UPLOADS}/2026/01/FF-Darren-Walker-Farewell_082A9612-scaled.jpg`, alt: "Ford Foundation farewell event by Better Measure" },
  { src: `${UPLOADS}/2026/01/CF-Fund.jpg`, alt: "Corporate conference and fund event by Better Measure" },
  { src: `${UPLOADS}/2026/01/CF-Fund-2.jpg`, alt: "Corporate conference and fund event by Better Measure" },
  { src: `${UPLOADS}/2026/01/CF-Fund-3.jpg`, alt: "Corporate conference and fund event by Better Measure" },
  { src: `${UPLOADS}/2026/01/CF-Fund-4.jpg`, alt: "Corporate conference and fund event by Better Measure" },
  { src: `${UPLOADS}/2026/01/CF-Fund-5.jpg`, alt: "Corporate conference and fund event by Better Measure" },
  { src: `${UPLOADS}/2026/01/CF-Fund-6.jpg`, alt: "Corporate conference and fund event by Better Measure" },
  { src: `${UPLOADS}/2026/01/CF-Fund-7.jpg`, alt: "Corporate conference and fund event by Better Measure" },
  { src: `${UPLOADS}/2026/01/CF-Fund-8.jpg`, alt: "Corporate conference and fund event by Better Measure" },
  { src: `${UPLOADS}/2026/01/CF-Fund-9.jpg`, alt: "Corporate conference and fund event by Better Measure" },
];

// --- HOW IT WORKS (new, conversion / anxiety-reducer) ----------------------
export const howItWorks = [
  { step: 1, title: "Tell us about your event", body: "Share your date, guest count and goals via the quote form, WhatsApp or a quick call." },
  { step: 2, title: "We scope & quote", body: "We come back with a tailored plan and transparent budget, usually within 24 hours." },
  { step: 3, title: "We plan & coordinate", body: "We lock suppliers, logistics, staffing and creative, keeping you updated at every step." },
  { step: 4, title: "We deliver on the day", body: "Our team runs the event end to end so you can be present, not stressed." },
];

// --- FAQ (homepage / FAQPage schema) ---------------------------------------
export const faqs = [
  { q: "What does Better Measure do?", a: "Better Measure is a 100% black female-owned, family-run event and creative solutions company based in Alberton, Gauteng, with 20+ years of combined experience. We deliver end-to-end events for corporates, organisations, institutions, NGOs, governments and international clients, planning, brand activations, exhibitions, logistics, RSVP and accreditation, creative direction, catering, apparel and promotional items." },
  { q: "Where is Better Measure based and what areas do you serve?", a: "Our head office is in Alberton, Gauteng. We deliver events across South Africa, from intimate brand launches to large-scale international convenings." },
  { q: "How do I get a quote?", a: "Use the Get a Quote form on our Contact page, message us on WhatsApp at +27 79 090 7039, or email dee@bettermeasure.africa. We typically respond within 24 hours." },
  { q: "What types of events do you specialise in?", a: "Corporate events, product launches, brand activations, exhibitions, high-profile and government functions, conferences and convenings, and experiential campaigns." },
  { q: "Do you provide event staffing?", a: "Yes, including promotional staff, RSVP and accreditation teams, and on-site event crew, all briefed and managed by us." },
  { q: "Can Better Measure manage the whole event, or just parts?", a: "Both. We offer full-service end-to-end management, or flexible ad hoc support where we fill specific gaps, such as catering, staffing, apparel or promo items." },
  { q: "How far in advance should I book?", a: "For large events, 8–12 weeks is ideal, but we regularly deliver excellent events on tighter timelines. Talk to us about your date." },
];

// --- GOOGLE REVIEWS (from GMB listing) -------------------------------------
export const rating = { value: 5.0, count: 20 };

export const reviews: { name: string; text: string }[] = [
  {
    name: "Jade Clark",
    text: "We recently hosted a client networking event to showcase our latest scanner technologies and services to our valued resellers and channel partners. Better Measure was instrumental in making the entire event a huge success.",
  },
  {
    name: "Angelique Janse van Rensburg",
    text: "I was absolutely blown away by how professional and supportive everyone was. I got more than what I asked for! I recommend Better Measure for any event. They definitely go over and above for their clients. They have passion and integrity in all that they do. You will not be disappointed, that I can promise!",
  },
  {
    name: "Pat Craig",
    text: "Thanks to Dee and Ros and team from Better Measure for not only their brilliant and professional service, but for their personal touch and involvement in everything they do, no matter how big or small. You add value in so many extra ways which is quite unique in today's busy world.",
  },
  {
    name: "Angela Warburton",
    text: "Truly amazing! Good prices and stunning customer satisfaction! I would recommend them for all listed services!",
  },
  {
    name: "Shama Nortje",
    text: "Wow wow wow. I cannot stretch the wowness enough. Thank you Better Measure for making my dream event a reality.",
  },
  {
    name: "Tricia Holder",
    text: "Would highly recommend! Great team with professional service.",
  },
  {
    name: "Khathutshelo Admire",
    text: "I vouch for this one, their services are outstanding.",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/heart" },
  { label: "Portfolio", href: "/our-magic" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/talk-to-us" },
];
