"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackProductView, trackWhatsAppClick } from "@/lib/analytics";

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  image?: string;
}

const categoryColors: Record<string, string> = {
  "Hatchery Production": "bg-aqua-600/90 text-white",
  "Prawn Seeds": "bg-emerald-600/90 text-white",
  "Aquaculture Services": "bg-slate-800/90 text-white",
  "SPF Certified Seed": "bg-aqua-500/90 text-white border border-aqua-400/20",
  "Hatchery Seed": "bg-blue-600/90 text-white border border-blue-400/20",
  "Farm Stocking": "bg-indigo-600/90 text-white border border-indigo-400/20",
  "Expert Services": "bg-purple-600/90 text-white border border-purple-400/20",
  "Laboratory Services": "bg-teal-600/90 text-white border border-teal-400/20",
  "Biosecurity": "bg-rose-600/90 text-white border border-rose-400/20",
  "Specialized Services": "bg-slate-700/90 text-white border border-slate-600/20",
};

export default function ProductCard({ name, category, description, image }: ProductCardProps) {
  const badgeClass = categoryColors[category] ?? "bg-white/90 text-slate-900";
  const whatsappUrl = `https://wa.me/94706665295?text=${encodeURIComponent(`Hello Sudu Duwa, I'm interested in ${name}. Please let me know more details.`)}`;

  const handleClick = () => {
    trackProductView({ name, category });
    trackWhatsAppClick({ source: "product_card", productName: name });
  };

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover="hover"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group block relative rounded-[28px] overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-xl transition-shadow duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-aqua-100 to-slate-100">
        {image ? (
          <img
            src={image}
            alt={`${name} - Litopenaeus Vannamei Prawn Seed & Aquaculture Service`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-aqua-50 to-blue-50">
            <div className="w-16 h-16 rounded-full bg-aqua-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-aqua-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1.5 text-[9px] font-black tracking-widest uppercase rounded-lg backdrop-blur-sm shadow-sm ${badgeClass}`}>
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start gap-4 mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-aqua-600 transition-colors duration-500 leading-snug">
              {name}
            </h3>
          </div>
          <div 
            className="shrink-0 w-11 h-11 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-[#25d366] group-hover:bg-[#25d366] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-[#25d366]/20 relative z-30"
          >
            <WhatsAppIcon size={22} className="relative z-10" />
          </div>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-light">
          {description}
        </p>
      </div>
    </motion.a>
  );
}
