import Hero from "@/components/Hero";
import { FlaskConical, Target, Eye, Microscope, Award, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-0 pb-0 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-dark-medium pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(26,95,122,0.18),transparent_55%)]" />
          <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full overflow-hidden opacity-30 mix-blend-luminosity">
            <div className="absolute inset-0 bg-gradient-to-r from-dark-medium via-dark-medium/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-medium via-transparent to-transparent z-10" />
            <img
              src="/assets/WhatsApp Image 2026-04-20 at 10.16.52.jpeg"
              alt="Hatchery Science"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Our Science & <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-blue-500">Mission</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              SUDU DUWA AQUA PRODUCTS is built on a foundation of rigorous scientific protocols, specialized breeding from USA imported broodstock, and a commitment to advancing Sri Lanka's Litopenaeus Vannamei aquaculture industry.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-50 py-32 border-b border-slate-200/60">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-aqua-50 rounded-2xl flex items-center justify-center text-aqua-600 mb-8">
                <Eye size={28} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                To be the most technologically advanced and scientifically reliable Pacific White Shrimp hatchery in Sri Lanka, producing the highest quality SPF (Specific Pathogen Free) Litopenaeus Vannamei seeds that guarantee robust yields for commercial farmers.
              </p>
            </div>
            <div className="bg-dark-medium p-12 rounded-[40px] shadow-xl relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-aqua-500/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-aqua-400 mb-8">
                  <Target size={28} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-slate-300 leading-relaxed text-lg font-light">
                  To utilize cutting-edge food science and aquaculture technology to breed superior USA-lineage Litopenaeus Vannamei nauplii and post-larvae (PL). We aim to empower local farmers with the healthiest seeds, driving the success of the aquaculture economy across the entire island of Sri Lanka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Operations Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-10">
              <div>
                <div className="flex items-center gap-3 text-aqua-600 font-bold tracking-[0.2em] text-[10px] mb-4 uppercase">
                  Scientific Leadership
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Expertise Led by <br /><span className="text-aqua-600">Selvarajah Pradeeban</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Our operations are driven by our Owner and Managing Director, Selvarajah Pradeeban. Holding a BSc in Food Science and Technology with a Specialization in Aquaculture, his academic background and practical expertise form the scientific backbone of our hatchery protocols.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900">Our Operational Units</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-slate-900 mb-2">Sudu Juwa Aqua Project Naupillia Center</h4>
                    <p className="text-sm text-slate-500 mb-4">No. 08, Ambakandawilla, Chilaw</p>
                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                      A specialized facility dedicated to the scientific breeding and initial rearing of Litopenaeus Vannamei nauplii. Engineered for highly robust and fast growth, utilizing premium USA imported lineage.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-slate-900 mb-2">St. Rogus Prawn Hatchery</h4>
                    <p className="text-sm text-slate-500 mb-4">Ambakandawilla, Chilaw</p>
                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                      Our advanced maturation and rearing unit, producing certified SPF PL (post-larvae) backed by years of aquaculture knowledge, hands-on experience, and rigorous science.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group">
                <img src="/assets/WhatsApp Image 2026-04-20 at 10.16.17.jpeg" alt="Scientific Aquaculture Facility" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-aqua-50 rounded-3xl -z-10 hidden sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Values Section */}
      <section className="bg-dark-medium py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            <div className="space-y-4">
              <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-aqua-400 to-blue-500 block">SPF</span>
              <span className="text-slate-300 font-bold uppercase tracking-widest text-xs">Pathogen Free Status</span>
            </div>
            <div className="space-y-4">
              <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-aqua-400 to-blue-500 block">PL</span>
              <span className="text-slate-300 font-bold uppercase tracking-widest text-xs">High-Yield Post-Larvae</span>
            </div>
            <div className="space-y-4">
              <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-aqua-400 to-blue-500 block">2</span>
              <span className="text-slate-300 font-bold uppercase tracking-widest text-xs">Specialized Hatcheries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">The Scientific Advantage</h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              Our location in Chilaw and our rigorous academic approach to aquaculture give farmers the reliable foundation they need for a successful harvest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[30px] border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-aqua-50 rounded-2xl flex items-center justify-center text-aqua-600 mb-6">
                <Microscope size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Laboratory Tested</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Every batch of nauplii is rigorously tested under laboratory conditions to ensure absolute biosecurity and genetic robustness before dispatch.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[30px] border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-aqua-50 rounded-2xl flex items-center justify-center text-aqua-600 mb-6">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Strict Biosecurity</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Our hatcheries enforce strict quarantine protocols, ensuring a contamination-free environment that yields resilient, fast-growing Litopenaeus Vannamei seeds.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[30px] border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-aqua-50 rounded-2xl flex items-center justify-center text-aqua-600 mb-6">
                <Award size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Technical Support</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Led by our MD's academic expertise, we provide unparalleled consultation to commercial farmers on pond preparation and water management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
