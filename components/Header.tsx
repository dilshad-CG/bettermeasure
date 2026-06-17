"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { navLinks, services, company } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileSolutions(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? "bg-cream/95 shadow-sm backdrop-blur" : "bg-cream"
      }`}
    >
      <div className="container-bm flex h-16 items-center justify-between">
        <Link href="/" aria-label="Better Measure home" className="flex items-center">
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.png`} alt="Better Measure — Visions That Add Up" width={1183} height={710} priority className="h-12 w-auto sm:h-14" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((l) =>
            l.href === "/solutions" ? (
              <div key={l.href} className="group relative">
                <Link
                  href="/solutions"
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue ${
                    pathname.startsWith("/solutions") ? "text-blue" : "text-ink/80"
                  }`}
                  aria-haspopup="true"
                >
                  Solutions
                  <span className="text-[10px] transition-transform group-hover:rotate-180" aria-hidden>▾</span>
                </Link>

                {/* Mega menu */}
                <div className="invisible absolute left-1/2 top-full z-50 w-[680px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-xl">
                    <div className="grid grid-cols-2 gap-1 p-3">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/solutions/${s.slug}`}
                          className="rounded-xl p-3 transition-colors hover:bg-cream"
                        >
                          <span className="block text-sm font-semibold text-navy">{s.name}</span>
                          <span className="mt-0.5 block text-xs leading-snug text-ink/60">{s.short}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="flex items-center justify-between border-t border-ink/10 bg-cream px-5 py-3">
                      <Link href="/solutions" className="text-sm font-semibold text-blue hover:text-blue-dark">
                        View all solutions →
                      </Link>
                      <Link href="/talk-to-us" className="btn-primary !px-4 !py-1.5 !text-xs">Get a Quote</Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-blue ${
                  pathname === l.href ? "text-blue" : "text-ink/80"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
          <Link href="/talk-to-us" className="btn-primary !px-5 !py-2">Get a Quote</Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-navy transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-ink/10 bg-cream md:hidden" aria-label="Mobile">
          <div className="container-bm flex flex-col py-3">
            <Link href="/" className="py-2.5 text-sm font-medium text-ink/90">Home</Link>

            <button
              className="flex items-center justify-between py-2.5 text-left text-sm font-medium text-ink/90"
              onClick={() => setMobileSolutions((v) => !v)}
              aria-expanded={mobileSolutions}
            >
              Solutions
              <span className={`text-xs transition-transform ${mobileSolutions ? "rotate-180" : ""}`} aria-hidden>▾</span>
            </button>
            {mobileSolutions && (
              <div className="ml-3 flex flex-col border-l border-ink/10 pl-3">
                <Link href="/solutions" className="py-2 text-sm font-semibold text-blue">All solutions</Link>
                {services.map((s) => (
                  <Link key={s.slug} href={`/solutions/${s.slug}`} className="py-2 text-sm text-ink/80">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            {navLinks
              .filter((l) => l.href !== "/" && l.href !== "/solutions")
              .map((l) => (
                <Link key={l.href} href={l.href} className="py-2.5 text-sm font-medium text-ink/90">
                  {l.label}
                </Link>
              ))}

            <Link href="/talk-to-us" className="btn-primary mt-3">Get a Quote</Link>
            <a href={`tel:${company.phone}`} className="mt-2 py-2 text-sm text-navy">Call {company.phoneDisplay}</a>
          </div>
        </nav>
      )}
    </header>
  );
}
