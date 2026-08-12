import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export default function Breadcrumbs({
  trail,
  tone = "dark",
  bare = false,
}: {
  trail: { name: string; url: string }[];
  tone?: "dark" | "light";
  bare?: boolean;
}) {
  const light = tone === "light";
  const inner = (
    <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${light ? "text-cream/60" : "text-ink/60"}`}>
      {trail.map((t, i) => (
        <li key={t.url} className="flex items-center gap-1.5">
          {i > 0 && <span aria-hidden>/</span>}
          {i < trail.length - 1 ? (
            <a href={t.url} className={light ? "hover:text-white" : "hover:text-coral"}>{t.name}</a>
          ) : (
            <span className={light ? "text-cream/90" : "text-ink/80"}>{t.name}</span>
          )}
        </li>
      ))}
    </ol>
  );

  // `bare` lets a page place the breadcrumb inside its own hero/container.
  if (bare) {
    return (
      <nav aria-label="Breadcrumb">
        <JsonLd data={breadcrumbSchema(trail)} />
        {inner}
      </nav>
    );
  }

  return (
    <nav aria-label="Breadcrumb" className="container-bm pt-6">
      <JsonLd data={breadcrumbSchema(trail)} />
      {inner}
    </nav>
  );
}
