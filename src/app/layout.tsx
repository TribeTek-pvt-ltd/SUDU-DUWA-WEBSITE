import type { Metadata } from "next";
import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sududuwa.com"),
  title: {
    default: "SUDU DUWA AQUA PRODUCTS (PVT) LTD | Sri Lanka's Premier Prawn Hatchery",
    template: "%s | SUDU DUWA AQUA PRODUCTS"
  },
  description: "Sri Lanka's premier SPF-certified prawn hatchery in Chilaw. Supplying high-survival nauplii and post-larvae (PL) to commercial farms. Expert-led by a BSc Aquaculture Food Science specialist.",
  keywords: [
    "prawn hatchery Sri Lanka", "nauplii supplier", "post larvae PL", "SPF certified prawns",
    "Chilaw aquaculture", "Ambakandawilla hatchery", "Sudu Duwa Aqua Products",
    "commercial prawn farming", "prawn seeds Sri Lanka", "aquaculture specialist Chilaw"
  ],
  authors: [{ name: "SUDU DUWA AQUA PRODUCTS (PVT) LTD" }],
  creator: "SUDU DUWA AQUA PRODUCTS",
  publisher: "SUDU DUWA AQUA PRODUCTS",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "SUDU DUWA AQUA PRODUCTS | Sri Lanka's Premier Prawn Hatchery",
    description: "SPF-certified prawn nauplii and post-larvae for commercial farms across Sri Lanka. Science-driven hatchery in Chilaw.",
    url: "https://sududuwa.com",
    siteName: "SUDU DUWA AQUA PRODUCTS",
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUDU DUWA AQUA PRODUCTS | Sri Lanka's Premier Prawn Hatchery",
    description: "SPF-certified prawn nauplii and post-larvae. Science-driven hatchery in Chilaw, Sri Lanka.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SUDU DUWA AQUA PRODUCTS (PVT) LTD",
  "image": "https://sududuwa.com/logo.jpeg",
  "@id": "https://sududuwa.com",
  "url": "https://sududuwa.com",
  "telephone": "+94322055422",
  "email": "suduaqua726@gmail.com",
  "founder": { "@type": "Person", "name": "Selvarajah Pradeeban" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "136/52/B/1 Sangathddana Puttalam Road",
    "addressLocality": "Chilaw",
    "addressCountry": "LK"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 7.5744, "longitude": 79.7963 },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "07:00",
    "closes": "18:00"
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
