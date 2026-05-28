"use client";

import { motion } from "framer-motion";

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

// Real WhatsApp Icon SVG component
const WhatsAppIcon = ({ size = 22, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function ProductCard({ name, category, description, image }: ProductCardProps) {
  const badgeClass = categoryColors[category] ?? "bg-white/90 text-slate-900";
  const whatsappUrl = `https://wa.me/94706665295?text=${encodeURIComponent(`Hello Sudu Duwa, I'm interested in ${name}. Please let me know more details.`)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
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
            alt={name}
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

      {/* Bottom accent line - Progressive liquid growth */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-aqua-500 via-blue-500 to-aqua-400"
        initial={{ width: 0 }}
        variants={{
          hover: { width: "100%" }
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1]
        }}
      />
    </motion.a>
  );
}

