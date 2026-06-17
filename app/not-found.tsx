import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-bm max-w-xl py-20 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-ink/70">The page you&apos;re looking for has moved or no longer exists.</p>
        <Link href="/" className="btn-primary mt-8">Back to home</Link>
      </div>
    </section>
  );
}
