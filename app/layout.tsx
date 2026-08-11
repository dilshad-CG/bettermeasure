import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { company } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });

const ogDescription =
  "Better Measure is a 100% black female-owned, family-run event company in Alberton, Gauteng. End-to-end event planning, activations, staffing, catering & more across South Africa and internationally.";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Better Measure | End-to-End Event Solutions in South Africa",
    template: "%s | Better Measure",
  },
  description: ogDescription,
  applicationName: "Better Measure",
  keywords: [
    "event management South Africa",
    "event planning Alberton",
    "corporate events",
    "brand activations",
    "exhibitions",
    "conferences",
    "RSVP and accreditation",
    "event production Gauteng",
    "female-led event company",
  ],
  authors: [{ name: "Better Measure" }],
  creator: "Better Measure",
  publisher: "Better Measure",
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Better Measure",
    locale: "en_ZA",
    title: "Better Measure | End-to-End Event Solutions",
    description: ogDescription,
    url: "/",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Better Measure — End-to-End Event Solutions That Connect Heart & Purpose",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Measure | End-to-End Event Solutions",
    description: ogDescription,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport = {
  themeColor: "#1E2A5E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Speed up the first connections to the image host and GTM */}
        <link rel="preconnect" href="https://bettermeasure.africa" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* Google Tag Manager */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5TMZVCT8');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5TMZVCT8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <JsonLd data={organizationSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
