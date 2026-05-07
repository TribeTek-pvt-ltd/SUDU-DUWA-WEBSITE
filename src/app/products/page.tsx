import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Search, Filter } from "lucide-react";

const products = [
  {
    name: "High-Survival Nauplii",
    category: "Hatchery Seed",
    description: "Premium prawn nauplii bred at our Naupillia Center. SPF certified and ready for hatchery rearing.",
    image: "/premium_sri_lankan_prawns_1777616363350.png"
  },
  {
    name: "Post-Larvae (PL) Seeds",
    category: "Farm Stocking",
    description: "Robust post-larvae reared at St. Rogus Hatchery. Acclimated to local salinity levels for optimal farm survival.",
    image: "/sri_lankan_aquaculture_hero_1777616340247.png"
  },
  {
    name: "Farm Consultation",
    category: "Expert Services",
    description: "Direct technical guidance from MD Selvarajah Pradeeban on pond preparation and water quality management.",
  },
  {
    name: "Water Quality Testing",
    category: "Laboratory Services",
    description: "Scientific analysis of farm water parameters (pH, salinity, dissolved oxygen) to ensure a safe environment for PL stocking.",
  },
  {
    name: "Pathogen Screening",
    category: "Biosecurity",
    description: "PCR testing and pathogen screening services to maintain strict biosecurity protocols on your commercial farm.",
  },
  {
    name: "Custom Breeding Programs",
    category: "Specialized Services",
    description: "Tailored breeding cycles for large-scale aquaculture operations requiring specific genetic traits and harvest timelines.",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-16 pb-24 bg-white">
      <Hero 
        title="Premium Prawn Seeds & Services"
        subtitle="Explore our availability of high-yield nauplii, robust post-larvae, and expert aquaculture services designed to maximize your farm's success."
      />

      <section className="container mx-auto px-4 md:px-6">
        {/* Filters bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 p-6 bg-slate-50 rounded-[30px] border border-slate-200 shadow-sm">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search products & services..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-aqua-500 transition-all outline-none text-slate-900"
            />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 cursor-pointer hover:bg-slate-50 transition-colors">
              <Filter size={18} />
              Filter By
            </div>
            <select className="flex-grow md:w-48 px-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-aqua-500 transition-all outline-none appearance-none cursor-pointer">
              <option>All Categories</option>
              <option>Hatchery Seed</option>
              <option>Farm Stocking</option>
              <option>Expert Services</option>
              <option>Laboratory Services</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
        
      </section>
      
      {/* Inquiry CTA */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-50 rounded-[40px] p-12 text-center border border-slate-200 shadow-sm">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">Checking Seed Availability?</h3>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Due to the scientific nature of our breeding cycles, Nauplii and PL availability fluctuates. Contact our team in Chilaw to check current stock and place your reservations.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-slate-900 hover:bg-aqua-600 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-1"
          >
            Contact Hatchery
          </a>
        </div>
      </section>

      {/* Product FAQ Section for AEO */}
      <section className="container mx-auto px-4 md:px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            Frequently Asked Questions about <span className="text-aqua-600">Our Seeds</span>
          </h2>
          <div className="grid gap-6">
            <div className="bg-white p-8 rounded-[30px] border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Are your post-larvae Specific Pathogen Free (SPF)?</h3>
              <p className="text-slate-500 leading-relaxed">Yes, all our nauplii and post-larvae are bred under strict biosecurity protocols and are certified SPF to ensure they are free from major viral diseases before stocking.</p>
            </div>
            <div className="bg-white p-8 rounded-[30px] border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">How do I transport the PL to my farm?</h3>
              <p className="text-slate-500 leading-relaxed">We package our PL in specialized oxygenated transport bags within insulated boxes to maintain optimal temperature and water quality during transit from Chilaw to your location.</p>
            </div>
            <div className="bg-white p-8 rounded-[30px] border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Do you provide guidance on pond preparation?</h3>
              <p className="text-slate-500 leading-relaxed">Absolutely. Our MD, Selvarajah Pradeeban, and our technical team provide expert consultation on water quality, plankton blooms, and salinity adjustments to prepare your pond for optimal PL survival.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": products.map((product, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": product.name,
                "description": product.description,
                "category": product.category,
                "brand": {
                  "@type": "Brand",
                  "name": "SUDU DUWA AQUA PRODUCTS"
                },
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock"
                }
              }
            }))
          })
        }}
      />
    </div>
  );
}
