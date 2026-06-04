import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Anchor, CheckCircle2, FlaskConical, Droplets, Activity, ChevronRight, Send, Globe2 } from "lucide-react";

const featuredProducts = [
  {
    name: "Litopenaeus Vannamei Nauplii",
    category: "SPF Certified Seed",
    description: "Disease-free, high-survival rate Pacific White Shrimp nauplii. Bred from premium USA imported broodstock.",
    image: "/assets/changes/naupillia.jpeg"
  },
  {
    name: "Vannamei Post-Larvae (PL)",
    category: "Farm Stocking",
    description: "Robust post-larvae ready for high-density stocking. Acclimated to local Sri Lankan salinity conditions.",
    image: "/assets/changes/post-larvae.jpeg"
  },
  {
    name: "Farm Consultation",
    category: "Expert Services",
    description: "Technical guidance on pond preparation, water cleaning technology, and farm management by our Aquaculture specialist Owner & MD.",
    image: "/assets/changes/farm-consultation.jpeg"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-0">
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark-deep pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,116,144,0.15),transparent_55%)]" />
          <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full overflow-hidden opacity-25 mix-blend-luminosity">
            <div className="absolute inset-0 bg-gradient-to-r from-dark-deep via-dark-deep/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-transparent to-transparent z-10" />
            <video
              src="/assets/changes/feedback-from-farmers/whatsapp-video-2026-05-28-at-12.00.11.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-aqua-400 font-bold tracking-[0.1em] text-[10px] sm:text-[11px] uppercase backdrop-blur-md">
                  <Globe2 size={12} /> USA Imported Broodstock
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold tracking-[0.1em] text-[10px] sm:text-[11px] uppercase backdrop-blur-md">
                  <ShieldCheck size={12} /> SPF Certified
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Premium <span className="italic font-light">Vannamei</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-blue-300 relative inline-block mt-2">
                  Prawn Hatchery
                  <svg className="absolute w-full h-2 sm:h-3 -bottom-1 left-0 text-aqua-400/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed font-light">
                Scientifically bred <strong className="text-white font-medium">Litopenaeus Vannamei</strong> (Pacific White Shrimp) nauplii and post-larvae for commercial aquaculture. Led by experts in Chilaw, Sri Lanka.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/products"
                  className="group flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-dark-deep px-8 py-4 rounded-full font-bold transition-all duration-500 ease-in-out w-full sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                  View Seed Availability
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="group flex items-center justify-center gap-3 bg-transparent hover:bg-white/5 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all duration-500 ease-in-out w-full sm:w-auto"
                >
                  Our Facilities
                </Link>
              </div>
            </div>

            {/* Quick Lead Capture Form */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-aqua-500/20 to-blue-500/20 rounded-[40px] blur-2xl z-0" />
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-[30px] relative z-10 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-aqua-500/20 flex items-center justify-center text-aqua-400">
                    <Send size={18} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Check PL Stock</h3>
                    <p className="text-sm text-slate-300 font-light">Get a quote for your next cycle</p>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="sr-only">Farm Name / Contact Person</label>
                    <input type="text" placeholder="Farm Name / Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all duration-500 ease-in-out" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="sr-only">Phone Number</label>
                      <input type="tel" placeholder="Phone (WhatsApp)" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all duration-500 ease-in-out" />
                    </div>
                    <div>
                      <label className="sr-only">Required Quantity</label>
                      <input type="text" placeholder="Est. PL Quantity" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all duration-500 ease-in-out" />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-aqua-500 to-blue-500 hover:from-aqua-400 hover:to-blue-400 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-0.5 mt-2 flex items-center justify-center gap-2">
                    Request Availability <ChevronRight size={18} />
                  </button>
                </form>
                <p className="text-center text-slate-400 text-xs mt-4 font-light">We typically respond within 2-4 hours.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom SVG Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[40px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.28,193.38,103.7,243.68,91.13,285.55,67.75,321.39,56.44Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      {/* Trust & Authority Section */}
      <section className="bg-slate-50 pt-20 pb-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-aqua-600 font-bold tracking-[0.2em] text-[10px] mb-8 uppercase shadow-sm">
                <Activity size={14} /> Corporate Overview
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                Advanced Aquaculture in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-600 to-blue-600">Ambakandawilla, Chilaw</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-12 max-w-xl font-light">
                SUDU DUWA AQUA PRODUCTS (PVT) LTD is a trusted backbone of regional shrimp aquaculture. Under the direction of our Managing Director, <strong>Selvarajah Pradeeban</strong> (BSc Food Science & Technology), we operate two state-of-the-art facilities dedicated to producing the highest quality Pacific White Shrimp seeds.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-aqua-100 to-transparent opacity-50 blur-2xl rounded-full -z-10" />
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-[30px] border border-white shadow-xl  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <div className="w-12 h-12 bg-gradient-to-br from-aqua-50 to-blue-50 rounded-2xl flex items-center justify-center text-aqua-600 mb-6 shadow-sm">
                    <FlaskConical size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-xl mb-3">Sudu Duwa Aqua Project – Nawpiliya Center</h4>
                  <p className="text-slate-500 leading-relaxed font-light text-sm">Dedicated facility in Ambakandawilla producing robust, SPF certified nauplii from USA imported broodstock.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-[30px] border border-white shadow-xl  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-4 sm:translate-y-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-aqua-50 to-blue-50 rounded-2xl flex items-center justify-center text-aqua-600 mb-6 shadow-sm">
                    <Anchor size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-xl mb-3">St. Rogus Hatchery</h4>
                  <p className="text-slate-500 leading-relaxed font-light text-sm">Advanced maturation facility ensuring rapid PL development and high farm-level survival.</p>
                </div>
              </div>
            </div>

            <div className="flex-1 relative w-full mt-10 lg:mt-0">
              <svg className="absolute -top-10 -right-10 w-full h-full text-aqua-100 -z-10 animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,97.7,-2.2C98.6,13.6,94.5,29.7,85.6,43.3C76.7,56.9,63.1,68.1,48.2,75.3C33.3,82.5,17.2,85.8,0.7,84.6C-15.8,83.4,-31.6,77.7,-46.2,70.2C-60.8,62.7,-74.2,53.4,-82.9,40.4C-91.6,27.4,-95.6,10.7,-93.8,-5.4C-92,-21.5,-84.4,-37.1,-73.4,-49.4C-62.4,-61.7,-48,-70.7,-33.7,-77.7C-19.4,-84.7,-5.2,-89.7,4.8,-88.2C14.8,-86.7,29.6,-78.7,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>

              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-8 border-white group">
                <img src="/assets/changes/feedback-from-farmers/whatsapp-image-2026-05-28-at-12.00.11-13.jpeg" alt="Hatchery Facility Operations" className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>

              <div className="absolute -left-10 bottom-20 bg-white/90 backdrop-blur-xl p-8 rounded-[30px] z-20 border border-white shadow-2xl hidden sm:flex flex-col items-center animate-bounce-slow">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-aqua-400 to-blue-500 rounded-full text-white mb-4 shadow-lg shadow-aqua-500/40">
                  <ShieldCheck size={32} />
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">SPF</div>
                <div className="text-[10px] font-bold text-aqua-600 uppercase tracking-widest text-center">Specific Pathogen<br />Free Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section (Premium Dark) */}
      <section className="bg-dark-deep py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-full h-[40px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.28,193.38,103.7,243.68,91.13,285.55,67.75,321.39,56.44Z" className="fill-slate-50"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 mt-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-aqua-400 font-bold tracking-[0.2em] text-[10px] mb-6 uppercase backdrop-blur-md">
              <FlaskConical size={14} /> Hatchery Technology
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Science-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-blue-400">Vannamei Breeding</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light">
              Our operations are rooted in rigorous scientific methodology, optimizing every step for maximum survival rates at your commercial farm.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[250px]">
            {/* Bento Box 1 - Large */}
            <div className="md:col-span-2 md:row-span-2 group relative bg-dark-deep border border-white/10 rounded-[40px] overflow-hidden">
              <img
                src="/assets/changes/hatchery-tech-uncompromising.jpeg"
                alt="Hatchery Technology"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-dark-deep/60 to-transparent z-0" />
              <div className="absolute inset-0 bg-gradient-to-br from-aqua-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0" />
              <div className="relative z-10 h-full flex flex-col justify-end p-10">
                <div className="w-16 h-16 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-aqua-400 mb-6 shadow-lg backdrop-blur-md">
                  <Globe2 size={28} />
                </div>
                <h3 className="font-bold text-white text-3xl mb-4 drop-shadow-lg">USA Imported Broodstock</h3>
                <p className="text-white text-lg leading-relaxed font-light max-w-lg drop-shadow-md">
                  We source premium, genetically superior Litopenaeus Vannamei broodstock directly from certified facilities in the USA, ensuring exceptional growth rates and disease resistance.
                </p>
              </div>
            </div>

            {/* Bento Box 2 */}
            <div className="group relative bg-white/5 border border-white/10 p-8 rounded-[40px] hover:bg-white/10 transition-all duration-500 ease-in-out overflow-hidden">
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 mb-4 backdrop-blur-md">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-bold text-white text-xl mb-2">Biosecurity</h3>
                <p className="text-slate-300 text-sm font-light">Strict quarantine and PCR pathogen screening protocols.</p>
              </div>
            </div>

            {/* Bento Box 3 */}
            <div className="group relative bg-white/5 border border-white/10 p-8 rounded-[40px] hover:bg-white/10 transition-all duration-500 ease-in-out overflow-hidden">
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-aqua-400 mb-4 backdrop-blur-md">
                  <Droplets size={20} />
                </div>
                <h3 className="font-bold text-white text-xl mb-2">Water Quality</h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed">Continuous checking of pH, salinity, micro & macro mineral tests, and Vibrio count.</p>
              </div>
            </div>

            {/* Bento Box 4 - Wide */}
            <div className="md:col-span-3 group relative bg-gradient-to-r from-aqua-900/40 to-dark-deep border border-aqua-500/20 p-8 md:p-10 rounded-[40px] flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
              <div className="relative z-10 flex items-start sm:items-center gap-6">
                <div className="w-16 h-16 bg-aqua-500/20 border border-aqua-500/30 rounded-full flex items-center justify-center text-aqua-400 shrink-0 shadow-lg">
                  <Activity size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-2xl mb-2">Expert Technical Guidance</h3>
                  <div className="text-slate-300 font-light text-sm flex flex-col gap-3">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-aqua-400 shrink-0" />
                      Direct hatchery / post-larvae production techniques
                    </span>
                    <div className="flex flex-col gap-1 sm:pl-3.5">
                      <span className="text-aqua-400 font-bold uppercase tracking-wider text-[10px]">Technical support in:</span>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" /> Farm pond preparation
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" /> Water cleaning technology
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" /> Farm management
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/farming-practices" className="flex items-center gap-2 text-aqua-400 font-bold hover:text-white transition-colors duration-500 ease-in-out relative z-10 whitespace-nowrap">
                Read Practices <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products (Clean White) */}
      <section className="bg-slate-50 py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-aqua-600 font-bold tracking-[0.2em] text-[10px] mb-8 uppercase shadow-sm">
                Seed Availability
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Vannamei <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-600 to-blue-600">Seeds & Services</span>
              </h2>
              <p className="text-slate-500 text-base sm:text-lg font-light">
                We supply high-yield SPF Litopenaeus Vannamei nauplii and post-larvae to commercial farms across Sri Lanka.
              </p>
            </div>
            <Link
              href="/products"
              className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-aqua-600 transition-all duration-500 ease-in-out shadow-md"
            >
              View Full Availability <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-500 ease-in-out" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Hatchery Facility Tour Teaser Section */}
      <section className="bg-white py-32 border-t border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-aqua-600 font-bold tracking-[0.2em] text-[10px] mb-6 uppercase shadow-sm">
              <Globe2 size={12} /> Facility Tour Preview
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Virtual Hatchery <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-600 to-blue-600">Operations Tour</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-light">
              Explore a direct look into our advanced breeding tanks, industrial water purifiers, and quality-control systems in Ambakandawilla, Chilaw.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Teaser 1 - Image */}
            <div className="group relative aspect-square rounded-[30px] overflow-hidden bg-slate-950 border border-slate-100 shadow-sm">
              <img
                src="/assets/changes/post-larvae.jpeg"
                alt="High-Vigor Larvae"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6 z-10">
                <span className="text-[8px] font-bold text-aqua-400 uppercase tracking-widest mb-1">Larvae Stage</span>
                <h4 className="text-white font-bold text-base leading-tight">High-Vigor Larvae</h4>
              </div>
            </div>

            {/* Teaser 2 - Tank */}
            <div className="group relative aspect-square rounded-[30px] overflow-hidden bg-slate-950 border border-slate-100 shadow-sm">
              <img
                src="/assets/changes/brood-stock.jpeg"
                alt="Maturation Tanks"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6 z-10">
                <span className="text-[8px] font-bold text-aqua-400 uppercase tracking-widest mb-1">Maturation</span>
                <h4 className="text-white font-bold text-base leading-tight">Spawning Bay</h4>
              </div>
            </div>

            {/* Teaser 3 - Filtration */}
            <div className="group relative aspect-square rounded-[30px] overflow-hidden bg-slate-950 border border-slate-100 shadow-sm">
              <img
                src="/assets/changes/water-quality-test.jpeg"
                alt="Continuous Aeration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6 z-10">
                <span className="text-[8px] font-bold text-aqua-400 uppercase tracking-widest mb-1">Water Systems</span>
                <h4 className="text-white font-bold text-base leading-tight">Aeration Systems</h4>
              </div>
            </div>

            {/* Teaser 4 - QC */}
            <div className="group relative aspect-square rounded-[30px] overflow-hidden bg-slate-950 border border-slate-100 shadow-sm">
              <img
                src="/assets/changes/laboratory-work-image.jpeg"
                alt="Larvae Density Check"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6 z-10">
                <span className="text-[8px] font-bold text-aqua-400 uppercase tracking-widest mb-1">Larvae Quality</span>
                <h4 className="text-white font-bold text-base leading-tight">Seed Density Verification</h4>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 bg-slate-900 text-white hover:bg-aqua-600 px-10 py-4.5 rounded-full font-bold transition-all duration-500 shadow-lg hover:-translate-y-0.5"
            >
              Explore Full Media Gallery (28+ Photos & Videos) <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ & Final CTA (White Flow) */}
      <section className="bg-white pt-32 pb-40 border-t border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* FAQ Left Side */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-aqua-600 font-bold tracking-[0.2em] text-[10px] mb-8 uppercase shadow-sm">
                Farmer Information
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight">
                Frequently Asked <br />Questions
              </h2>
              <div className="space-y-6">
                {[
                  { q: "Are your seeds SPF certified?", a: "Yes, all our Litopenaeus Vannamei nauplii and PL are bred under strict biosecurity protocols and certified Specific Pathogen Free." },
                  {
                    q: "Where is the broodstock from?",
                    a: (
                      <span>
                        We import premium, genetically superior SPF broodstock directly from certified{" "}
                        <a
                          href="https://www.shrimpimprovement.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-aqua-600 hover:text-aqua-700 font-bold underline transition-colors"
                        >
                          Shrimp Improvement Systems (SIS)
                        </a>{" "}
                        facilities in Florida, USA.
                      </span>
                    )
                  },
                  { q: "How do I place a bulk order for PL?", a: "Farmers can use the inquiry form on our website or contact us directly via WhatsApp (0706665295) to reserve batches." }
                ].map((faq, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-[30px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-4">
                      <div className="mt-1 bg-white p-1 rounded-full text-aqua-600 shrink-0 shadow-sm hidden xs:block">
                        <CheckCircle2 size={16} />
                      </div>
                      {faq.q}
                    </h3>
                    <p className="text-slate-500 leading-relaxed xs:ml-10 font-light">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Right Side */}
            <div className="relative mt-10 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-tr from-aqua-100 to-blue-100 rounded-[50px] blur-xl opacity-60 animate-pulse-slow" />
              <div className="bg-white p-12 md:p-16 rounded-[40px] shadow-2xl border border-slate-100 text-center relative overflow-hidden z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-aqua-400 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-[0_0_30px_rgba(14,116,144,0.3)]">
                  <Send size={32} className="ml-1" />
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Stock Your Farm</h2>
                <p className="text-slate-500 mb-10 text-lg leading-relaxed font-light">
                  Ready to achieve higher survival rates? Reserve your next batch of USA-lineage Vannamei PL today.
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/94706665295"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-aqua-500 to-blue-500 text-white px-8 py-5 rounded-2xl font-bold hover:shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-1"
                  >
                    WhatsApp Inquiry <ArrowRight size={20} />
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-3 bg-transparent text-slate-700 border-2 border-slate-200 px-8 py-5 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all duration-500 ease-in-out hover:-translate-y-1"
                  >
                    Contact Office
                  </Link>
                  <a
                    href="https://chat.whatsapp.com/CsRdedlj0xgC1hbjHDlnUi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-5 rounded-2xl font-bold hover:shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-1 mt-2"
                  >
                    Join WhatsApp Community
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LocalBusiness Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SUDU DUWA AQUA PRODUCTS (PVT) LTD",
            "description": "Premier Pacific White Shrimp (Litopenaeus Vannamei) Hatchery and Nauplii Center in Chilaw, Sri Lanka.",
            "image": "https://sududuwa.com/logo.jpeg",
            "telephone": "+94 32 2055422",
            "email": "suduaqua726@gmail.com",
            "founder": {
              "@type": "Person",
              "name": "Selvarajah Pradeeban"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "136/52/B/1 Sangathddana Puttalam Road",
              "addressLocality": "Chilaw",
              "addressCountry": "LK"
            },
            "department": [
              {
                "@type": "LocalBusiness",
                "name": "SUDU DUWA AQUA PRODUCTS NAWPILIYA CENTER",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "No 08, Ambakandawilla",
                  "addressLocality": "Chilaw",
                  "addressCountry": "LK"
                }
              },
              {
                "@type": "LocalBusiness",
                "name": "ST ROGUS PRAWN HATCHERY",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Ambakandawilla",
                  "addressLocality": "Chilaw",
                  "addressCountry": "LK"
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
