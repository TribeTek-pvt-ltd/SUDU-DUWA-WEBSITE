import type { Metadata } from "next";
import { Suspense } from "react";
import Hero from "@/components/Hero";
import ProductsClient from "@/components/ProductsClient";

export const metadata: Metadata = {
  title: "Vannamei Seeds & Hatchery Services | Nauplii & Post-Larvae (PL)",
  description: "SPF Litopenaeus Vannamei Nauplii and Post-Larvae (PL) bred from certified USA SIS broodstock. High-survival commercial prawn seeds, water quality testing, and farm consultation in Chilaw, Sri Lanka.",
  alternates: {
    canonical: "/products",
  },
  keywords: [
    "Vannamei post larvae", "shrimp nauplii Sri Lanka", "SPF prawn seed", "Litopenaeus Vannamei Chilaw",
    "shrimp farm stocking", "prawn hatchery Sri Lanka", "water quality testing aquaculture"
  ],
  openGraph: {
    title: "🦐 Vannamei Seeds & Services | SUDU DUWA AQUA PRODUCTS",
    description: "Reserve SPF certified Litopenaeus Vannamei Nauplii and Post-Larvae (PL). Fast-growth genetics from USA imported broodstock.",
    url: "https://sududuwa.com/products",
    images: [
      {
        url: "/logo.jpeg",
        width: 640,
        height: 640,
        alt: "SUDU DUWA AQUA PRODUCTS Seeds and Hatchery Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🦐 Vannamei Seeds & Services | SUDU DUWA AQUA PRODUCTS",
    description: "Reserve SPF certified Litopenaeus Vannamei Nauplii and Post-Larvae (PL).",
    images: ["/logo.jpeg"],
  },
};

const products = [
  {
    id: "vannamei-nauplii",
    name: "Litopenaeus Vannamei Nauplii",
    category: "Hatchery Seed",
    description: "Premium Pacific White Shrimp nauplii bred at our Naupillia Center. SPF certified from USA lineage, ready for hatchery rearing.",
    image: "/assets/changes/stages/nuapillia.jpeg",
  },
  {
    id: "vannamei-post-larvae",
    name: "Vannamei Post-Larvae (PL)",
    category: "Farm Stocking",
    description: "Robust post-larvae reared at St. Rogus Hatchery. Acclimated to local salinity levels for optimal farm survival and high-density yields.",
    image: "/assets/changes/stages/Post leave.jpeg",
  },
  {
    id: "farm-consultation",
    name: "Farm Consultation",
    category: "Expert Services",
    description: "Direct technical guidance from MD Selvarajah Pradeeban on pond preparation, biofloc/water cleaning technology, and farm management.",
    image: "/assets/changes/farm-consultation.jpeg",
  },
  {
    id: "water-quality-testing",
    name: "Water Quality Testing",
    category: "Laboratory Services",
    description: "Scientific analysis of farm water parameters (pH, salinity, dissolved oxygen, ammonia) to ensure a safe environment for PL stocking.",
    image: "/assets/changes/water-quality-test.jpeg",
  },
  {
    id: "pathogen-screening",
    name: "Pathogen Screening",
    category: "Biosecurity",
    image: "/assets/changes/Pathogen Screening.jpeg",
    description: "PCR testing and pathogen screening services to maintain strict biosecurity protocols on your commercial shrimp farm.",
  },
  {
    id: "custom-breeding-programs",
    name: "Custom Breeding Programs",
    category: "Specialized Services",
    image: "/assets/changes/custom-breeding-new.png",
    description: "Tailored breeding cycles for large-scale aquaculture operations requiring specific genetic traits and harvest timelines.",
  },
];

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "SUDU DUWA Prawn Seeds and Hatchery Services",
  "description": "Catalog of SPF Litopenaeus Vannamei nauplii, post-larvae, and laboratory aquaculture services.",
  "itemListElement": products.map((product, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": product.name,
      "description": product.description,
      "category": product.category,
      "image": `https://sududuwa.com${product.image}`,
      "brand": {
        "@type": "Brand",
        "name": "SUDU DUWA AQUA PRODUCTS"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "LKR",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "SUDU DUWA AQUA PRODUCTS (PVT) LTD"
        }
      }
    }
  }))
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-0 pb-0 bg-white">
      <Hero
        title="Vannamei Seeds & Services"
        subtitle="Explore our availability of high-yield SPF nauplii, robust post-larvae, and expert aquaculture services designed to maximize your commercial farm's success."
      />

      <Suspense fallback={<div className="container mx-auto px-4 py-20 text-center text-slate-400">Loading catalog...</div>}>
        <ProductsClient products={products} />
      </Suspense>

      {/* Community CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="bg-slate-950 rounded-[40px] p-12 md:p-16 border border-slate-800 shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-aqua-900/30 to-blue-900/30 opacity-50" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to secure your high-vigor PL seeds?</h2>
              <p className="text-slate-400 font-light max-w-2xl mx-auto">
                Join our active WhatsApp community to get real-time updates on our seed availability and consult with our experts.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://chat.whatsapp.com/CsRdedlj0xgC1hbjHDlnUi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all w-full sm:w-auto"
                >
                  Join WhatsApp Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData)
        }}
      />
    </div>
  );
}
