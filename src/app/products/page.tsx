import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Search, Filter, ShieldCheck, Anchor, ChevronRight, Send, FlaskConical, CheckCircle2 } from "lucide-react";

const products = [
  {
    name: "Litopenaeus Vannamei Nauplii",
    category: "Hatchery Seed",
    description: "Premium Pacific White Shrimp nauplii bred at our Naupillia Center. SPF certified from USA lineage, ready for hatchery rearing.",
    image: "/hatchery_facility.png"
  },
  {
    name: "Vannamei Post-Larvae (PL)",
    category: "Farm Stocking",
    description: "Robust post-larvae reared at St. Rogus Hatchery. Acclimated to local salinity levels for optimal farm survival and high-density yields.",
    image: "/post_larvae.png"
  },
  {
    name: "Farm Consultation",
    category: "Expert Services",
    description: "Direct technical guidance from MD Selvarajah Pradeeban on pond preparation, biofloc/water cleaning technology, and farm management.",
    image: "/images/farming.png"
  },
  {
    name: "Water Quality Testing",
    category: "Laboratory Services",
    description: "Scientific analysis of farm water parameters (pH, salinity, dissolved oxygen, ammonia) to ensure a safe environment for PL stocking.",
  },
  {
    name: "Pathogen Screening",
    category: "Biosecurity",
    description: "PCR testing and pathogen screening services to maintain strict biosecurity protocols on your commercial shrimp farm.",
  },
  {
    name: "Custom Breeding Programs",
    category: "Specialized Services",
    description: "Tailored breeding cycles for large-scale aquaculture operations requiring specific genetic traits and harvest timelines.",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-0 pb-0 bg-white">
      <Hero 
        title="Vannamei Seeds & Services"
        subtitle="Explore our availability of high-yield SPF nauplii, robust post-larvae, and expert aquaculture services designed to maximize your commercial farm's success."
      />

      <section className="container mx-auto px-4 md:px-6 py-20">
        
        {/* Quick Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
           <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">SPF Certified</h4>
                <p className="text-sm text-slate-500">Disease-free lineage</p>
              </div>
           </div>
           <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-aqua-100 text-aqua-600 flex items-center justify-center shrink-0">
                <Anchor size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">USA Broodstock</h4>
                <p className="text-sm text-slate-500">Premium genetics</p>
              </div>
           </div>
           <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                <FlaskConical size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Lab Tested</h4>
                <p className="text-sm text-slate-500">Rigorous quality control</p>
              </div>
           </div>
        </div>

        {/* Filters bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 p-4 md:p-6 bg-white rounded-[30px] border border-slate-200 shadow-lg shadow-slate-200/50">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search products & services..." 
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-aqua-500 transition-all outline-none text-slate-900"
            />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="hidden md:flex items-center gap-2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors">
              <Filter size={18} />
              Filter By
            </div>
            <select className="flex-grow md:w-56 px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-aqua-500 transition-all outline-none appearance-none cursor-pointer">
              <option>All Categories</option>
              <option>Hatchery Seed</option>
              <option>Farm Stocking</option>
              <option>Expert Services</option>
              <option>Biosecurity</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
        
      </section>
      
      {/* Lead Generation Section - Reserve Batch */}
      <section className="bg-dark-deep py-24 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-aqua-600/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-aqua-400 font-bold tracking-[0.2em] text-[10px] mb-8 uppercase backdrop-blur-sm">
                Reserve Your Batch
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Check Seed <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-blue-400">Availability</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed font-light mb-8 max-w-lg">
                Due to the precise scientific nature of our breeding cycles, SPF Litopenaeus Vannamei Nauplii and PL availability fluctuates. Reserve your batch early to secure high-quality stock for your next farm cycle.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-300 font-light">
                  <CheckCircle2 size={20} className="text-aqua-400" /> Guaranteed SPF USA Lineage
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-light">
                  <CheckCircle2 size={20} className="text-aqua-400" /> Acclimated to target salinity
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-light">
                  <CheckCircle2 size={20} className="text-aqua-400" /> PCR tested before delivery
                </li>
              </ul>
              
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-[40px] shadow-2xl">
               <h3 className="text-2xl font-bold text-white mb-2">Request Quote & Availability</h3>
               <p className="text-slate-300 text-sm mb-8 font-light">Fill out the form below or message us on WhatsApp for faster response.</p>
               
               <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Farm Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                      <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Seed Type</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all appearance-none cursor-pointer">
                        <option className="bg-dark-deep">Post-Larvae (PL)</option>
                        <option className="bg-dark-deep">Nauplii</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Estimated Quantity & Date Required</label>
                    <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-aqua-500 to-blue-500 hover:from-aqua-400 hover:to-blue-400 text-white font-bold py-5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg">
                    Submit Inquiry <Send size={18} className="ml-1" />
                  </button>
               </form>
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
