import Link from "next/link";
import Image from "next/image";
import { company, services, navLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-cream/90">
      <div className="container-bm grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          {/* White logo: brightness-0 + invert renders the navy mark as solid white */}
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.png`} alt="Better Measure — Visions That Add Up" width={1183} height={710} className="h-16 w-auto brightness-0 invert" />
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            {company.legalNote}. {company.yearsExperience}.
          </p>
          <p className="mt-3 text-sm text-cream/70">{company.serviceArea}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-coral">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-coral">Solutions</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="hover:text-white">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-coral">Get in touch</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={`tel:${company.phone}`} className="hover:text-white">{company.phoneDisplay}</a></li>
            <li><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>
            <li><a href={company.whatsapp} className="hover:text-white">Chat on WhatsApp</a></li>
            <li className="text-cream/70">{company.address}</li>
            <li className="text-cream/70">{company.hours}</li>
          </ul>
          <Link href="/talk-to-us" className="btn-primary mt-4 !py-2 !px-5">Get a Quote</Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-bm flex flex-col gap-2 py-5 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Managing Director: {company.managingDirector}</p>
        </div>
      </div>
    </footer>
  );
}
