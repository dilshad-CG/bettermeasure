import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { company } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Better Measure | End-to-End Event Solutions in South Africa",
    template: "%s | Better Measure",
  },
  description:
    "Better Measure is a 100% black female-owned, family-run event company in Alberton, Gauteng. End-to-end event planning, activations, staffing, catering & more across South Africa.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Better Measure",
    locale: "en_ZA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <JsonLd data={organizationSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
