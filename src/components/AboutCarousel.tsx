"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselImage {
  src: string;
  alt: string;
}

interface AboutCarouselProps {
  images: CarouselImage[];
}

export default function AboutCarousel({ images }: AboutCarouselProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="flex-1 w-full relative">
      <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group relative bg-slate-950">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIdx}
            src={images[currentIdx].src}
            alt={images[currentIdx].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="absolute inset-x-0 bottom-6 flex items-center justify-between px-6 z-20">
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-slate-900/80 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Indicators */}
          <div className="flex gap-1.5">
            {images.map((_, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Go to image ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIdx === idx ? "bg-white w-4" : "bg-white/40 w-2"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-slate-900/80 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex flex-col justify-end p-8 pt-20 pointer-events-none">
          <p className="text-white font-medium text-xs leading-relaxed drop-shadow-md">
            {images[currentIdx].alt}
          </p>
        </div>
      </div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-aqua-50 rounded-3xl -z-10 hidden sm:block" />
    </div>
  );
}

