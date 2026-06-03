import Hero from "@/components/Hero";
import { CheckCircle2, ShieldCheck, Droplets, FlaskConical, Microscope, Anchor, CalendarDays, Scale } from "lucide-react";

const growthStages = [
  { day: "30", weight: "5.5g", image: "/assets/changes/growth/30day 5.5g.jpeg" },
  { day: "40", weight: "10g", image: "/assets/changes/growth/40day 10g.jpeg" },
  { day: "50", weight: "15g", image: "/assets/changes/growth/50 days 15g.jpeg" },
  { day: "60", weight: "22g", image: "/assets/changes/growth/60 days 22g.jpeg" },
  { day: "70", weight: "28g", image: "/assets/changes/growth/70 days 28g.jpeg" }
];

const steps = [
  {
    title: "Brood Stock Selection",
    description: "We source premium, genetically superior SPF USA SIS Fast Growth line Brood Stock to ensure fast growth rates and robust health in our post-larvae.",
    icon: <Anchor size={24} />,
    image: "/assets/changes/brood stock.jpeg"
  },
  {
    title: "Water Management",
    description: "Advanced filtration and continuous monitoring of salinity, pH, micro and macro mineral levels, and Vibrio count.",
    icon: <Droplets size={24} />,
    image: "/assets/changes/water quality test.jpeg"
  },
  {
    title: "Scientific Nutrition",
    description: "Larvae are fed optimized micro-algae and specialized formulations to ensure rapid development and high survival.",
    icon: <FlaskConical size={24} />,
    image: "/assets/changes/Hatchery tech--uncompromising.jpeg"
  },
  {
    title: "Laboratory Screening",
    description: "Every batch of PL undergoes rigorous PCR pathogen testing and quality grading before being cleared for farm distribution.",
    icon: <Microscope size={24} />,
    image: "/assets/changes/Laboratory work image.jpeg"
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
             <img src="/assets/changes/Bacteria colony.jpeg" alt="Hatchery Facilities Biosecurity" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" />
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
              <div key={i} className="group bg-white rounded-[40px] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col">
                <div className="h-48 w-full overflow-hidden relative bg-slate-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-aqua-600 shadow-md">
                    {step.icon}
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Performance Presentation */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-aqua-600 font-bold tracking-[0.2em] text-[10px] mb-6 uppercase shadow-sm">
            Shrimp Development
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Growth Performance Stages</h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Witness the rapid development of our Litopenaeus Vannamei seeds. From 30 days up to 70 days, they achieve remarkable weight gains through our scientific breeding and nutrition protocols.
          </p>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {growthStages.map((stage, i) => (
              <div key={i} className="group bg-slate-50 rounded-[30px] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col">
                <div className="h-56 w-full overflow-hidden relative bg-slate-200">
                  <img
                    src={stage.image}
                    alt={`Shrimp Growth Stage Day ${stage.day}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 text-aqua-600 font-bold shadow-md text-sm">
                    <CalendarDays size={16} /> Day {stage.day}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                    <Scale size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">{stage.weight}</h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
                    Avg Weight
                  </p>
                </div>
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
    </div>
  );
}
