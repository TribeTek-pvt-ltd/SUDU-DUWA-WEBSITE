"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

export interface MediaItem {
  id: string;
  type: "video" | "image";
  src: string;
  category: "maturation" | "seeds" | "systems" | "feedback";
  title: string;
  description: string;
}

interface GalleryClientProps {
  mediaItems: MediaItem[];
}

const categories = [
  { id: "all", name: "All Media" },
  { id: "videos", name: "Videos" },
  { id: "maturation", name: "Maturation Center" },
  { id: "seeds", name: "Larvae & Seeds" },
  { id: "systems", name: "Systems & Biotech" },
  { id: "feedback", name: "Farmer Feedback" },
];

export default function GalleryClient({ mediaItems }: GalleryClientProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on selected tab
  const filteredItems = mediaItems.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "videos") return item.type === "video";
    return item.category === activeTab;
  });

  const navigateLightbox = useCallback(
    (direction: number) => {
      setLightboxIndex((prev) => {
        if (prev === null) return null;
        return (prev + direction + filteredItems.length) % filteredItems.length;
      });
    },
    [filteredItems.length]
  );

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, navigateLightbox]);

  const currentMedia =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section className="container mx-auto px-4 md:px-6 py-20">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
        {categories.map((cat) => (
          <button
            type="button"
            key={cat.id}
            onClick={() => {
              setActiveTab(cat.id);
              setLightboxIndex(null);
            }}
            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === cat.id
                ? "bg-slate-900 text-white shadow-lg shadow-slate-950/20 scale-105"
                : "bg-slate-50 text-slate-500 hover:text-slate-900 border border-slate-200/50 hover:bg-slate-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => {
            const isVideo = item.type === "video";

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square rounded-[30px] overflow-hidden bg-slate-950 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setLightboxIndex(idx)}
              >
                {/* Media Content */}
                {isVideo ? (
                  <div className="relative w-full h-full">
                    <video
                      src={item.src}
                      poster="/assets/changes/USA_Imported_Broodstock.jpeg"
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={item.title}
                    />
                    <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                      <Play size={12} className="ml-0.5 fill-white" />
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                )}

                {/* Dark Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10 pointer-events-none">
                  <span className="text-[9px] font-bold text-aqua-400 uppercase tracking-widest mb-1.5 inline-block">
                    {item.type === "video"
                      ? "Video Tour"
                      : item.category === "maturation"
                      ? "Maturation Facility"
                      : item.category === "seeds"
                      ? "Larvae & Seeds"
                      : item.category === "feedback"
                      ? "Farmer Feedback"
                      : "Hatchery Systems"}
                  </span>
                  <h3 className="text-white font-bold text-lg leading-tight mb-1 flex items-center gap-2">
                    {item.title}
                    <Eye size={14} className="opacity-60" />
                  </h3>
                  <p className="text-slate-300 text-xs font-light line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500 font-light">
            No media assets found in this category.
          </p>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && currentMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between p-6 relative z-10">
              <div className="flex flex-col text-left">
                <span className="text-aqua-400 text-[10px] font-bold tracking-widest uppercase">
                  {currentMedia.type === "video"
                    ? "Maturation & Rearing Video Tour"
                    : "Hatchery Operations Photograph"}
                </span>
                <h4 className="text-white font-bold text-xl">
                  {currentMedia.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Stage */}
            <div className="flex-1 flex items-center justify-center px-4 md:px-12 relative z-0">
              {/* Previous Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox(-1);
                }}
                className="absolute left-6 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-all z-10"
                aria-label="Previous item"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Media Display */}
              <div
                className="relative max-w-full max-h-[70vh] flex items-center justify-center select-none"
                onClick={(e) => e.stopPropagation()}
              >
                {currentMedia.type === "video" ? (
                  <video
                    src={currentMedia.src}
                    className="max-w-full max-h-[70vh] rounded-3xl object-contain shadow-2xl border border-white/10"
                    controls
                    autoPlay
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={currentMedia.src}
                    alt={currentMedia.title}
                    className="max-w-full max-h-[70vh] rounded-3xl object-contain shadow-2xl border border-white/10"
                  />
                )}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox(1);
                }}
                className="absolute right-6 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-all z-10"
                aria-label="Next item"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Modal Bottom Bar */}
            <div className="bg-slate-900/40 border-t border-white/5 p-8 text-center relative z-10">
              <p className="text-slate-300 text-sm max-w-2xl mx-auto font-light leading-relaxed">
                {currentMedia.description}
              </p>
              <div className="text-slate-500 text-xs mt-3">
                Asset {lightboxIndex + 1} of {filteredItems.length} (Use Left / Right arrow keys)
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

