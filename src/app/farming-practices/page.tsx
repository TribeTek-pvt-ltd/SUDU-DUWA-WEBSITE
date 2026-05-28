import Hero from "@/components/Hero";
import { CheckCircle2, ShieldCheck, Droplets, FlaskConical, Microscope, Anchor } from "lucide-react";

const steps = [
  {
    title: "Brood Stock",
    description: "We source premium, genetically superior SPF USA SIS Fast Growth line Brood Stock to ensure fast growth rates and robust health in our post-larvae.",
    icon: <Anchor size={32} />,
  },
  {
    title: "Water Management",
    description: "Advanced filtration and continuous monitoring of salinity, pH, micro and macro mineral levels, and Vibrio count.",
    icon: <Droplets size={32} />,
  },
  {
    title: "Scientific Nutrition",
    description: "Larvae are fed optimized micro-algae and specialized formulations to ensure rapid development and high survival.",
    icon: <FlaskConical size={32} />,
  },
  {
    title: "Laboratory Screening",
    description: "Every batch of PL undergoes rigorous PCR pathogen testing and quality grading before being cleared for farm distribution.",
    icon: <Microscope size={32} />,
  },
];

export default function HatcheryTechnologyPage() {
  return (
    <div className="flex flex-col gap-24 pb-24 bg-white">
      <Hero 
        title="Hatchery Technology"
        subtitle="Where science meets aquaculture. Our state-of-the-art hatcheries in Ambakandawilla produce Sri Lanka's most resilient Litopenaeus Vannamei seeds."
      />

      {/* Main Philosophy */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Uncompromising <span className="text-aqua-600">Biosecurity</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              At SUDU DUWA AQUA PRODUCTS, our seed production is grounded in strict biosecurity protocols. We understand that a successful harvest begins with healthy nauplii, which is why our facilities operate under rigorous scientific standards to eliminate pathogens and maximize larval vigor.
            </p>
            <ul className="space-y-4">
              {[
                "Specific Pathogen Free (SPF) Certified",
                "Advanced Water Recirculation Systems",
                "Continuous PCR Pathogen Screening",
                "Expert-Led Nutritional Protocols",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle2 className="text-aqua-600" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full aspect-square bg-slate-50 rounded-[60px] overflow-hidden relative border border-slate-100 shadow-sm">
             <div className="absolute inset-0 bg-[url('/hatchery_facility.png')] bg-cover bg-center opacity-80 mix-blend-multiply" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl border border-white">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-xl">
                    <ShieldCheck size={32} />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our 4-Stage Breeding Protocol</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Meticulous attention to detail at every stage of the nauplii and PL lifecycle ensures premium, high-survival seeds for commercial farmers.
          </p>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="group p-10 bg-white rounded-[40px] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-aqua-600 mb-8 group-hover:scale-110 group-hover:bg-aqua-600 group-hover:text-white transition-all">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-white border border-slate-200 rounded-[50px] p-12 md:p-20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-aqua-50 rounded-full blur-3xl -z-10" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">Laboratory & <br />Water Systems</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Our hatcheries are equipped with cutting-edge laboratories to test water quality continuously. By maintaining perfect equilibrium in our tanks, we minimize stress on the Litopenaeus Vannamei seeds, ensuring they acclimate quickly once stocked in your ponds.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Water Quality Test</h4>
                  <p className="text-xs text-slate-500">Salinity, pH & minerals balance</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Vibrio Count</h4>
                  <p className="text-xs text-slate-500">Bacterial monitoring</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Algae Quality Test</h4>
                  <p className="text-xs text-slate-500">Indoor & outdoor pure live feed</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Post Larvae Quality</h4>
                  <p className="text-xs text-slate-500">Vigor & physical screening</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 sm:col-span-2">
                  <h4 className="font-bold text-slate-900 mb-1">MBV Test</h4>
                  <p className="text-xs text-slate-500">Monodon Baculovirus screening</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
               <div className="h-4 bg-slate-100 rounded-full overflow-hidden relative">
                 <div className="absolute top-0 left-0 h-full bg-slate-900 w-full opacity-10" />
                 <div className="h-full bg-aqua-600 w-[99%] rounded-full relative z-10 flex items-center px-2">
                   <span className="text-[10px] text-white font-bold tracking-widest">SALINITY OPTIMIZATION</span>
                 </div>
               </div>
               <div className="h-4 bg-slate-100 rounded-full overflow-hidden relative">
                 <div className="absolute top-0 left-0 h-full bg-slate-900 w-full opacity-10" />
                 <div className="h-full bg-slate-900 w-[100%] rounded-full relative z-10 flex items-center px-2">
                   <span className="text-[10px] text-white font-bold tracking-widest">PATHOGEN CLEARANCE RATE</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
