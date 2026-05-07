import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Anchor, CheckCircle2, FlaskConical, Droplets, Activity } from "lucide-react";

const featuredProducts = [
  {
    name: "High-Quality Nauplii",
    category: "Hatchery Production",
    description: "Disease-free, high-survival rate prawn nauplii produced at our specialized Naupillia Center in Ambakandawilla.",
    image: "/post_larvae.png"
  },
  {
    name: "Post-Larvae (PL)",
    category: "Prawn Seeds",
    description: "Robust post-larvae ready for farm stocking. Bred under strict scientific protocols for optimal growth.",
    image: "/sri_lankan_aquaculture_hero_1777616340247.png" 
  },
  {
    name: "Expert Consultation",
    category: "Aquaculture Services",
    description: "Technical guidance on water quality and farm management by our MD, an Aquaculture Food Science specialist.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-0">
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center bg-[#071828] pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(26,95,122,0.18),transparent_55%)]" />
          <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full overflow-hidden opacity-40 mix-blend-luminosity">
             <div className="absolute inset-0 bg-gradient-to-r from-[#071828] via-[#071828]/80 to-transparent z-10" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#071828] via-transparent to-transparent z-10" />
             <img 
               src="/hatchery_facility.png" 
               alt="Hatchery operations background" 
               className="w-full h-full object-cover animate-pulse-slow"
             />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-aqua-600/20 text-aqua-400">
                <Droplets size={14} />
              </div>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-aqua-400">
                Sudu Duwa Aqua Products (Pvt) Ltd
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tighter text-white mb-8 leading-[1.1]">
              Sri Lanka's Premier <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-aqua-300 relative inline-block mt-2">
                Prawn Hatchery
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-aqua-400/25" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-light">
              Scientifically bred prawn nauplii and post-larvae (PL) for maximum survival. Led by aquaculture specialists in Chilaw, Sri Lanka.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link 
                href="/about"
                className="group flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                Our Hatchery Science
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://wa.me/94706665295"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-aqua-600/10 hover:bg-aqua-600/20 text-aqua-400 border border-aqua-600/30 px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto"
              >
                Check Seed Availability
              </a>
            </div>
          </div>
        </div>

        {/* Bottom SVG Wave (Dark to Soft Off-White) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.28,193.38,103.7,243.68,91.13,285.55,67.75,321.39,56.44Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      {/* Trust & Authority Section (Soft Off-White) */}
      <section className="bg-slate-50 pt-20 pb-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-aqua-600 font-bold tracking-[0.2em] text-[10px] mb-8 uppercase shadow-sm">
                <Activity size={14} /> Corporate Overview
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                Advanced Aquaculture in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-600 to-blue-600">Ambakandawilla, Chilaw</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-xl font-light">
                SUDU DUWA AQUA PRODUCTS (PVT) LTD is the backbone of regional prawn farming. Under the direction of our Managing Director, Selvarajah Pradeeban (BSc Food Science & Technology), we operate two state-of-the-art facilities dedicated to producing the highest quality prawn seeds.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-aqua-100 to-transparent opacity-50 blur-2xl rounded-full -z-10" />
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-[30px] border border-white shadow-xl hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-aqua-50 to-blue-50 rounded-2xl flex items-center justify-center text-aqua-600 mb-6 shadow-sm">
                    <FlaskConical size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-xl mb-3">Naupillia Center</h4>
                  <p className="text-slate-500 leading-relaxed font-light">Dedicated facility in Ambakandawilla producing robust, disease-free nauplii.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-[30px] border border-white shadow-xl hover:-translate-y-2 transition-transform duration-500 translate-y-4 sm:translate-y-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-aqua-50 to-blue-50 rounded-2xl flex items-center justify-center text-aqua-600 mb-6 shadow-sm">
                    <Anchor size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-xl mb-3">St. Rogus Hatchery</h4>
                  <p className="text-slate-500 leading-relaxed font-light">Advanced maturation facility ensuring rapid PL development and high survival.</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative w-full mt-10 lg:mt-0">
              {/* Decorative SVG behind image */}
              <svg className="absolute -top-10 -right-10 w-full h-full text-aqua-100 -z-10 animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,97.7,-2.2C98.6,13.6,94.5,29.7,85.6,43.3C76.7,56.9,63.1,68.1,48.2,75.3C33.3,82.5,17.2,85.8,0.7,84.6C-15.8,83.4,-31.6,77.7,-46.2,70.2C-60.8,62.7,-74.2,53.4,-82.9,40.4C-91.6,27.4,-95.6,10.7,-93.8,-5.4C-92,-21.5,-84.4,-37.1,-73.4,-49.4C-62.4,-61.7,-48,-70.7,-33.7,-77.7C-19.4,-84.7,-5.2,-89.7,4.8,-88.2C14.8,-86.7,29.6,-78.7,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
              
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-8 border-white group">
                <img src="/post_larvae.png" alt="Hatchery Facility Operations" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
              
              <div className="absolute -left-10 bottom-20 bg-white/90 backdrop-blur-xl p-8 rounded-[30px] z-20 border border-white shadow-2xl hidden sm:flex flex-col items-center animate-bounce-slow">
                 <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-aqua-400 to-blue-500 rounded-full text-white mb-4 shadow-lg shadow-aqua-500/40">
                   <ShieldCheck size={32} />
                 </div>
                 <div className="text-3xl font-black text-slate-900 mb-1">SPF</div>
                 <div className="text-[10px] font-bold text-aqua-600 uppercase tracking-widest text-center">Specific Pathogen<br/>Free Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (Premium Dark Navy) */}
      <section className="bg-[#071828] py-32 relative overflow-hidden">
        {/* Top Inverse SVG Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-full h-[40px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.28,193.38,103.7,243.68,91.13,285.55,67.75,321.39,56.44Z" className="fill-slate-50"></path>
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-aqua-600/8 rounded-full blur-[120px] -z-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 mt-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-12">
              <div>
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-aqua-400 font-bold tracking-[0.2em] text-[10px] mb-8 uppercase backdrop-blur-md">
                  <FlaskConical size={14} /> Hatchery Technology
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                  Science-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-blue-400">Breeding</span>
                </h2>
                <p className="text-slate-400 leading-relaxed text-lg font-light">
                  Our operations are rooted in rigorous scientific methodology. From water quality management to optimal larval nutrition, every step is optimized for maximum survival rates at your farm.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Water Quality Parameters", desc: "Continuous monitoring of salinity, pH, and dissolved oxygen to mimic natural estuarine conditions.", icon: <Droplets size={24} /> },
                  { title: "Biosecurity Protocols", desc: "Strict quarantine and pathogen screening ensure our nauplii and PL are robust and healthy.", icon: <ShieldCheck size={24} /> }
                ].map((item, i) => (
                  <div key={i} className="group relative bg-white/5 border border-white/10 p-8 rounded-[30px] hover:bg-white/10 transition-all duration-500 overflow-hidden hover:-translate-y-2 backdrop-blur-sm">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-aqua-500/20 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                    <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-aqua-400 mb-6 shadow-[0_0_30px_rgba(14,116,144,0.3)]">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full relative">
              <div className="w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10 border border-white/5">
                <img src="/aquaculture_lab.png" alt="Advanced Hatchery Equipment" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071828]/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products (Clean White) */}
      <section className="bg-white py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-aqua-600 font-bold tracking-[0.2em] text-[10px] mb-8 uppercase shadow-sm">
                Seed Availability
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Prawn <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-600 to-blue-600">Seeds & Services</span>
              </h2>
              <p className="text-slate-500 text-lg font-light">
                We supply high-yield prawn nauplii and post-larvae to commercial farms across Sri Lanka.
              </p>
            </div>
            <Link 
              href="/products" 
              className="group flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-aqua-600 transition-all shadow-md hover:-translate-y-1"
            >
              View Full Availability <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CTA (Soft Gray to White Flow) */}
      <section className="bg-slate-50 pt-32 pb-40 border-t border-slate-200/60 relative overflow-hidden">
        {/* Background Decorative SVG */}
        <svg className="absolute bottom-0 left-0 w-full h-[600px] text-slate-200/50 -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0,100 C20,80 50,100 100,60 L100,100 Z" fill="currentColor"/>
        </svg>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* FAQ Left Side */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-aqua-600 font-bold tracking-[0.2em] text-[10px] mb-8 uppercase shadow-sm">
                Farmer Information
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight">
                Frequently Asked <br />Questions
              </h2>
              <div className="space-y-6">
                {[
                  { q: "Where are your hatcheries located?", a: "Our Naupillia Center and St. Rogus Prawn Hatchery are both located in Ambakandawilla, Chilaw." },
                  { q: "Who oversees the quality of the seeds?", a: "Operations are directed by Selvarajah Pradeeban, who holds a BSc in Food Science & Technology with a specialization in Aquaculture." },
                  { q: "How do I place a bulk order for PL?", a: "Farmers can contact us directly via WhatsApp (0706665295) or call our office (0322055422) to check seed availability and place orders." }
                ].map((faq, i) => (
                  <div key={i} className="bg-white p-8 rounded-[30px] border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-4">
                      <div className="mt-1 bg-aqua-50 p-1 rounded-full text-aqua-600 shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      {faq.q}
                    </h3>
                    <p className="text-slate-500 leading-relaxed ml-10 font-light">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Right Side (Glassmorphism overlap) */}
            <div className="relative mt-10 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-tr from-aqua-400 to-blue-500 rounded-[50px] blur-xl opacity-30 animate-pulse-slow" />
              <div className="bg-white/90 backdrop-blur-xl p-12 md:p-16 rounded-[40px] shadow-2xl border border-white text-center relative overflow-hidden z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-aqua-400 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-[0_0_30px_rgba(14,116,144,0.4)]">
                   <FlaskConical size={32} />
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Stock Your Farm</h2>
                <p className="text-slate-500 mb-10 text-lg leading-relaxed font-light">
                  Ready to achieve higher survival rates? Contact us today to check current nauplii and post-larvae availability.
                </p>
                <div className="flex flex-col gap-4">
                  <Link 
                    href="/contact"
                    className="flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-2xl font-bold hover:bg-aqua-600 transition-all shadow-lg hover:-translate-y-1"
                  >
                    Contact Office <ArrowRight size={20} />
                  </Link>
                  <a 
                    href="https://wa.me/94706665295"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-transparent text-slate-700 border-2 border-slate-200 px-8 py-5 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1"
                  >
                    WhatsApp Inquiry
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
            "description": "Premier Prawn Hatchery and Nauplii Center in Chilaw, Sri Lanka.",
            "image": "https://sududuwa.com/logo.png",
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
                "name": "SUDU DUWA AQUA PRODUCTS NAUPILLIA CENTER",
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

