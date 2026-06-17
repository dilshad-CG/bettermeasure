/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

// GitHub Pages serves project sites under /<repo>, so production builds need a
// base path. Local dev stays at the root.
const repo = "bettermeasure";

const nextConfig = {
  output: "export", // static HTML export for GitHub Pages
  basePath: isProd ? `/${repo}` : "",
  trailingSlash: true,
  // Exposed so local public assets used via next/image (which doesn't auto-add
  // basePath when images are unoptimized) can be prefixed manually.
  env: { NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "" },
  images: {
    // Static export can't use the on-the-fly image optimizer.
    unoptimized: true,
    // Reuse the exact event/brand images already hosted on the live WordPress site
    // (Phase 0 rule: no new/AI-generated imagery — reference originals).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bettermeasure.africa",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
