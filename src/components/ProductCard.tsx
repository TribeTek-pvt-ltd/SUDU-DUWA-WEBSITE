"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  image?: string;
}

const categoryColors: Record<string, string> = {
  "Hatchery Production": "bg-aqua-600/90 text-white",
  "Prawn Seeds":         "bg-gold-500/90 text-slate-900",
  "Aquaculture Services":"bg-slate-800/90 text-white",
};

export default function ProductCard({ name, category, description, image }: ProductCardProps) {
  const badgeClass = categoryColors[category] ?? "bg-white/90 text-slate-900";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[28px] overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-2xl hover:shadow-aqua-600/10 hover:-translate-y-2 transition-all duration-500"
    >
      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-aqua-100 to-slate-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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

        {/* Hover overlay with CTA */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
          <a
            href="https://wa.me/94706665295"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#22c55e] text-white font-bold text-sm py-3 rounded-xl shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-400"
          >
            <MessageCircle size={16} />
            Inquire via WhatsApp
          </a>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1.5 text-[9px] font-black tracking-widest uppercase rounded-lg backdrop-blur-sm shadow-sm ${badgeClass}`}>
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-aqua-600 transition-colors leading-snug">
            {name}
          </h3>
          <div className="shrink-0 w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-aqua-600 group-hover:border-aqua-600 group-hover:text-white transition-all duration-300">
            <ArrowUpRight size={17} />
          </div>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-light">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-aqua-500 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
    </motion.div>
  );
}
