"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  image?: string;
}

const categoryColors: Record<string, string> = {
  "Hatchery Production": "bg-aqua-600/90 text-white",
  "Prawn Seeds": "bg-gold-500/90 text-slate-900",
  "Aquaculture Services": "bg-slate-800/90 text-white",
};

export default function ProductCard({ name, category, description, image }: ProductCardProps) {
  const badgeClass = categoryColors[category] ?? "bg-white/90 text-slate-900";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover="hover"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-[28px] overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-xl transition-shadow duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-aqua-100 to-slate-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
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
          <a 
            href="https://wa.me/94706665295"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-11 h-11 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-[#25d366] hover:bg-[#25d366] hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-[#25d366]/20 relative z-30"
            title="Inquire via WhatsApp"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle size={22} fill="currentColor" fillOpacity={0.1} className="group-hover:fill-white" />
          </a>
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
    </motion.div>
  );
}
