import type { Metadata } from "next";
import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

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
  alternates: {
    canonical: "/",
  },
  title: {
    default: "SUDU DUWA AQUA PRODUCTS (PVT) LTD | Sri Lanka's Premier Prawn Hatchery",
    template: "%s | SUDU DUWA AQUA PRODUCTS 🦐",
  },
  description:
    "Sri Lanka's premier SPF-certified prawn hatchery in Chilaw. Supplying high-survival Litopenaeus Vannamei nauplii and post-larvae (PL) to commercial farms. Led by aquaculture specialist Selvarajah Pradeeban (BSc Food Science).",
  keywords: [
    "prawn hatchery Sri Lanka",
    "nauplii supplier",
    "post larvae PL",
    "SPF certified prawns",
    "Chilaw aquaculture",
    "Ambakandawilla hatchery",
    "Sudu Duwa Aqua Products",
    "commercial prawn farming",
    "prawn seeds Sri Lanka",
    "aquaculture specialist Chilaw",
    "Litopenaeus Vannamei Sri Lanka",
    "shrimp seeds Chilaw"
  ],
  authors: [{ name: "SUDU DUWA AQUA PRODUCTS (PVT) LTD" }],
  creator: "SUDU DUWA AQUA PRODUCTS",
  publisher: "SUDU DUWA AQUA PRODUCTS",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "SUDU DUWA AQUA PRODUCTS | Sri Lanka's Premier Prawn Hatchery",
    description:
      "SPF-certified Litopenaeus Vannamei prawn nauplii and post-larvae for commercial farms across Sri Lanka. Science-driven hatchery in Chilaw.",
    url: "https://sududuwa.com",
    siteName: "SUDU DUWA AQUA PRODUCTS",
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: "/logo.ico",
        width: 640,
        height: 640,
        alt: "SUDU DUWA AQUA PRODUCTS Official Hatchery Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SUDU DUWA AQUA PRODUCTS | Sri Lanka's Premier Prawn Hatchery",
    description:
      "SPF-certified prawn nauplii and post-larvae. Science-driven hatchery in Chilaw, Sri Lanka.",
    images: ["/logo.ico"],
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
  icons: {
    icon: [
      { url: "/logo.ico" },
      { url: "/logo.ico", type: "image/jpeg" },
    ],
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "FishFarm"],
      "@id": "https://sududuwa.com/#organization",
      "name": "SUDU DUWA AQUA PRODUCTS (PVT) LTD",
      "alternateName": [
        "Sudu Duwa Aqua Products",
        "Sudu Duwa Hatchery",
        "St. Rogus Prawn Hatchery",
        "Sudu Duwa Naupilia Center"
      ],
      "image": "https://sududuwa.com/logo.ico",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sududuwa.com/logo.ico",
        "width": 640,
        "height": 640
      },
      "url": "https://sududuwa.com",
      "telephone": "+94706665295",
      "email": "suduaqua726@gmail.com",
      "priceRange": "$$",
      "currenciesAccepted": "LKR, USD",
      "paymentAccepted": "Cash, Bank Transfer",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+94706665295",
          "contactType": "sales",
          "areaServed": "LK",
          "availableLanguage": ["English", "Sinhala", "Tamil"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+94322055422",
          "contactType": "customer service",
          "areaServed": "LK",
          "availableLanguage": ["English", "Sinhala", "Tamil"]
        }
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Sri Lanka"
      },
      "founder": {
        "@type": "Person",
        "name": "Selvarajah Pradeeban",
        "jobTitle": "Managing Director & Aquaculture Specialist",
        "description": "BSc in Food Science & Technology specialized in Aquaculture."
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "136/52/B/1 Sangathddana Puttalam Road",
        "addressLocality": "Chilaw",
        "addressRegion": "North Western Province",
        "postalCode": "61000",
        "addressCountry": "LK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 7.5744,
        "longitude": 79.7963
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://chat.whatsapp.com/CsRdedlj0xgC1hbjHDlnUi",
        "https://wa.me/94706665295",
        "https://www.facebook.com/sududuwaaquaproducts"
      ],
      "knowsAbout": [
        "Litopenaeus Vannamei Seed Production",
        "Specific Pathogen Free (SPF) Nauplii",
        "Post-Larvae (PL) Acclimation",
        "Shrimp Pond Water Quality Management",
        "Biosecurity PCR Testing"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://sududuwa.com/#website",
      "url": "https://sududuwa.com",
      "name": "SUDU DUWA AQUA PRODUCTS",
      "publisher": {
        "@id": "https://sududuwa.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://sududuwa.com/products?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-KSZXHD6LQP";
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        {/* Preconnect hints for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </Script>
        {metaPixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
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
