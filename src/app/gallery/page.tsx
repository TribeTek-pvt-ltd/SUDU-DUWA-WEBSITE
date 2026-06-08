"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Maximize2, X, ChevronLeft, ChevronRight, Volume2, VolumeX, Eye } from "lucide-react";
import Hero from "@/components/Hero";

// Custom media items array representing all 24 images and 4 videos from the changes folder
const mediaItems = [
  // Videos
  {
    id: "vid-1",
    type: "video",
    src: "/assets/changes/feedback-from-farmers/whatsapp-video-2026-05-28-at-12.00.11.mp4",
    category: "maturation",
    title: "Maturation Facility Tour",
    description: "Inside the St. Rogus maturation facility showing stocking tanks, temperature control, and water flows."
  },
  {
    id: "vid-2",
    type: "video",
    src: "/assets/changes/feedback-from-farmers/whatsapp-video-2026-05-28-at-12.00.11-1.mp4",
    category: "seeds",
    title: "Active Larvae Care",
    description: "Monitoring and grading young post-larvae under precise environmental conditions for maximum survival."
  },
  {
    id: "vid-3",
    type: "video",
    src: "/assets/changes/feedback-from-farmers/whatsapp-video-2026-05-28-at-12.00.42.mp4",
    category: "systems",
    title: "Continuous Aeration",
    description: "Industrial blower pipelines providing high-volume oxygen distribution to keep larval seeds strong."
  },
  {
    id: "vid-4",
    type: "video",
    src: "/assets/changes/feedback-from-farmers/whatsapp-video-2026-05-28-at-12.00.42-1.mp4",
    category: "seeds",
    title: "High-Vigor SPF Nauplii",
    description: "Larval nauplii moving rapidly in the spawning tank, exhibiting outstanding activity and fitness."
  },
  // Images
  // {
  //   id: "img-0",
  //   type: "image",
  //   src: "/assets/changes/bacteria-colony.jpeg",
  //   category: "systems",
  //   title: "Water Filtration Control",
  //   description: "Refined monitoring of sea water pipelines entering the maturation facility."
  // },
  {
    id: "img-1",
    type: "image",
    src: "/assets/changes/breeding-programs.jpeg",
    category: "maturation",
    title: "Spawning & Maturation Tanks",
    description: "Circular maturation tanks raising SPF Litopenaeus Vannamei parent broodstock."
  },
  {
    id: "img-2",
    type: "image",
    src: "/assets/changes/farm-consultation.jpeg",
    category: "seeds",
    title: "Larval Stocking Preparation",
    description: "Post-larvae seeds prepared in transport-ready bags acclimated to target farm salinity."
  },
  {
    id: "img-3",
    type: "image",
    src: "/assets/changes/hatchery-tech-uncompromising.jpeg",
    category: "maturation",
    title: "Hatchery Facility View",
    description: "Wide angle layout of our bio-secure prawn seed hatchery facility in Ambakandawilla."
  },
  {
    id: "img-4",
    type: "image",
    src: "/assets/changes/hatchery.jpeg",
    category: "maturation",
    title: "Spawning Water Filtration",
    description: "Dedicated pipeline systems providing temperature-controlled water to maturation units."
  },
  // {
  //   id: "img-5",
  //   type: "image",
  //   src: "/assets/changes/laboratory-work-image.jpeg",
  //   category: "maturation",
  //   title: "Spawning Tanks Operation",
  //   description: "Rearing lines and tanks built for maximum bio-safety and easy sterilizing between cycles."
  // },
  {
    id: "img-6",
    type: "image",
    src: "/assets/changes/whatsapp-image-2026-05-28-at-12.00.11-3.jpeg",
    category: "maturation",
    title: "Maturation Center Racks",
    description: "Secure, biological tracking boards and pipelines for breeding parent stock."
  },
  {
    id: "img-7",
    type: "image",
    src: "/assets/changes/stages/nuapillia.jpeg",
    category: "maturation",
    title: "Spawning Tank Inspection",
    description: "Hatchery operators preparing tanks for a new batch of SPF nauplii seeds."
  },
  // {
  //   id: "img-8",
  //   type: "image",
  //   src: "/assets/changes/whatsapp-image-2026-05-28-at-12.00.11-5.jpeg",
  //   category: "maturation",
  //   title: "Primary Maturation Row",
  //   description: "Parallel rows of spawning tanks ensuring continuous year-round availability of seeds."
  // },
  {
    id: "img-9",
    type: "image",
    src: "/assets/changes/stages/Post leave.jpeg",
    category: "maturation",
    title: "Tanks Setup Ambakandawilla",
    description: "Close examination of aeration jets in our maturation tanks."
  },
  // {
  //   id: "img-10",
  //   type: "image",
  //   src: "/assets/changes/brood-stock.jpeg",
  //   category: "seeds",
  //   title: "Vigorous Nauplii Quality Control",
  //   description: "Sampling larvae to inspect for high physical activity and body completeness under light."
  // },
  // {
  //   id: "img-11",
  //   type: "image",
  //   src: "/assets/changes/water-quality-test.jpeg",
  //   category: "seeds",
  //   title: "Post-Larvae Holding Tanks",
  //   description: "Holding bays where post-larvae (PL) are fed high-nutrient live feed (Artemia & algae)."
  // },

  // Feedback Images
  {
    id: "feedback-img-1",
    type: "image",
    src: "/assets/changes/feedback-from-farmers/whatsapp-image-2026-05-28-at-12.00.11-13.jpeg",
    category: "feedback",
    title: "Premium Harvest Quality",
    description: "A close look at the premium quality and size of shrimp yielded by our partner farmers."
  },
  {
    id: "feedback-img-2",
    type: "image",
    src: "/assets/changes/feedback-from-farmers/whatsapp-image-2026-05-28-at-12.00.11-14.jpeg",
    category: "feedback",
    title: "Farmer Satisfaction",
    description: "Visual proof of high survival rates and impressive weight gain shared by our farming community."
  }
];

const categories = [
  { id: "all", name: "All Media" },
  { id: "videos", name: "Videos" },
  { id: "maturation", name: "Maturation Center" },
  { id: "seeds", name: "Larvae & Seeds" },
  { id: "systems", name: "Systems & Biotech" },
  { id: "feedback", name: "Farmer Feedback" }
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mutedVideoId, setMutedVideoId] = useState<string | null>(null);

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
  }, [lightboxIndex, activeTab]);

  // Filter items based on selected tab
  const filteredItems = mediaItems.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "videos") return item.type === "video";
    return item.category === activeTab;
  });

  const navigateLightbox = (direction: number) => {
    if (lightboxIndex === null) return;
    const nextIndex = (lightboxIndex + direction + filteredItems.length) % filteredItems.length;
    setLightboxIndex(nextIndex);
  };

  const currentMedia = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="flex flex-col gap-0 pb-0 bg-white">
      {/* Hero Banner */}
      <Hero
        title="Hatchery Media Gallery"
        subtitle="Take a virtual tour through our state-of-the-art maturation centers, larvae rearing units, water purification plants, and biosecurity systems in Ambakandawilla, Chilaw."
      />

      <section className="container mx-auto px-4 md:px-6 py-20">

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${activeTab === cat.id
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
              const isMuted = mutedVideoId === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative aspect-square rounded-[30px] overflow-hidden bg-slate-950 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => setLightboxIndex(idx)}
                >
                  {/* Media Content */}
                  {isVideo ? (
                    <div className="relative w-full h-full">
                      <video
                        src={item.src}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                      <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                        <Play size={12} className="ml-0.5 fill-white" />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      loading="lazy"
                    />
                  )}

                  {/* Dark Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-10">
                    <span className="text-[9px] font-bold text-aqua-400 uppercase tracking-widest mb-1.5 inline-block">
                      {item.type === "video" ? "Video Tour" : item.category === "maturation" ? "Maturation Facility" : item.category === "seeds" ? "Larvae & Seeds" : item.category === "feedback" ? "Farmer Feedback" : "Hatchery Systems"}
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
            <p className="text-slate-500 font-light">No media assets found in this category.</p>
          </div>
        )}
      </section>

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
                  {currentMedia.type === "video" ? "Maturation & Rearing Video Tour" : "Hatchery Operations Photograph"}
                </span>
                <h4 className="text-white font-bold text-xl">{currentMedia.title}</h4>
              </div>
              <button
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
    </div>
  );
}
