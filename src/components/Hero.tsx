"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Droplets } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink, image }: HeroProps) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center overflow-hidden bg-[#0a0f1c] pt-32 pb-20">
      {/* Background system - dark and premium */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,116,144,0.15),transparent_50%)]" />
        
        {image ? (
          <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full overflow-hidden opacity-30 mix-blend-luminosity">
             <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c] via-[#0a0f1c]/80 to-transparent z-10" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent z-10" />
             <img 
               src={image} 
               alt="Hero background" 
               className="w-full h-full object-cover"
             />
          </div>
        ) : (
          <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-10">
            <svg className="w-full h-full animate-[spin_120s_linear_infinite] text-aqua-600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,97.7,-2.2C98.6,13.6,94.5,29.7,85.6,43.3C76.7,56.9,63.1,68.1,48.2,75.3C33.3,82.5,17.2,85.8,0.7,84.6C-15.8,83.4,-31.6,77.7,-46.2,70.2C-60.8,62.7,-74.2,53.4,-82.9,40.4C-91.6,27.4,-95.6,10.7,-93.8,-5.4C-92,-21.5,-84.4,-37.1,-73.4,-49.4C-62.4,-61.7,-48,-70.7,-33.7,-77.7C-19.4,-84.7,-5.2,-89.7,4.8,-88.2C14.8,-86.7,29.6,-78.7,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-aqua-600/20 text-aqua-400">
              <Droplets size={14} />
            </div>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-aqua-400">
              Sudu Duwa Aqua Products
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
            {title.split(" ").map((word, i) => {
              // Highlight specific words
              const highlightWords = ["hatchery", "seeds", "science", "mission", "technology", "quality"];
              const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
              const isHighlight = highlightWords.includes(cleanWord);
              
              if (isHighlight) {
                return (
                  <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-blue-500 relative inline-block">
                    {word}{" "}
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-aqua-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                  </span>
                );
              }
              return <span key={i}>{word} </span>;
            })}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-light">
            {subtitle}
          </p>
          
          {ctaText && ctaLink && (
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link 
                href={ctaLink}
                className="group flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                {ctaText}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Bottom SVG Wave (Dark to Soft Off-White) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[40px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.28,193.38,103.7,243.68,91.13,285.55,67.75,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
