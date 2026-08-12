const popular = [
  { href: "/solutions", label: "Our solutions" },
  { href: "/our-magic", label: "Portfolio" },
  { href: "/faq", label: "FAQ" },
  { href: "/talk-to-us", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-dark text-white">
      {/* Soft brand glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue/25 blur-3xl" />
        <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-blue-light/10 blur-3xl" />
      </div>

      <div className="container-bm relative flex flex-col items-center py-24 text-center sm:py-32">
        <p className="font-display text-7xl font-semibold leading-none text-blue-light sm:text-8xl">404</p>
        <h1 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
          This page has moved on to its next event
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-cream/70">
          The page you&apos;re looking for isn&apos;t here, but every great event still needs a plan.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/" className="btn bg-white text-navy hover:bg-cream">Back to home</a>
          <a href="/talk-to-us" className="btn border border-white/40 text-white hover:bg-white/10">
            Talk to us
          </a>
        </div>

        <div className="mt-14 w-full max-w-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-light">Popular pages</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {popular.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-cream/90 transition-colors hover:border-white/20 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
