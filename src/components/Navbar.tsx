"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Phone, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Hatchery Tech", href: "/farming-practices" },
  // { name: "FAQ", href: "/faq" },
  // { name: "Contact", href: "/contact" },
];

/* ─── SD Monogram Logo ──────────────────────────────────────────────────── */
function LogoBadge({ scrolled }: { scrolled: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="Sudu Duwa Aqua Products Home">
      {/* Monogram badge */}
      {/* <div
        className={`relative w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden transition-all duration-500 group-hover:scale-105 ${scrolled
            ? "bg-gradient-to-br from-aqua-600 to-sky-deep text-white shadow-aqua-600/20"
            : "bg-white/10 border border-white/25 text-white backdrop-blur-md"
          }`}
      >
        <span className="font-display font-black text-base leading-none tracking-tighter select-none">SD</span>
        Subtle shimmer sweep
      <span className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div> */}

      <div className="flex flex-col leading-none">
        <span className={`text-base sm:text-lg font-black tracking-tighter uppercase leading-none transition-colors ${scrolled ? "text-slate-900" : "text-white"
          }`}>
          SUDU DUWA
        </span>
        <span className={`text-[8px] sm:text-[9px] font-black tracking-[0.2em] sm:tracking-[0.28em] uppercase transition-colors ${scrolled ? "text-aqua-600" : "text-aqua-300"
          }`}>
          AQUA PRODUCTS
        </span>
      </div>
    </Link >
  );
}

/* ─── Announcement Bar ──────────────────────────────────────────────────── */
function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative text-white text-center py-2.5 px-4 text-xs font-semibold tracking-wide overflow-hidden" style={{ background: 'linear-gradient(90deg, #071522, #0e2a3a, #071522)' }}>
      {/* Shimmer sweep */}
      <span className="absolute inset-0 shimmer-bg opacity-30 pointer-events-none" />
      <span className="relative z-10 flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 text-center">
        <span className="text-aqua-300 hidden xs:inline">🦐</span>
        <span className="text-slate-200">Seed Season Open —</span>
        <a
          href="https://wa.me/94706665295"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-aqua-300 hover:text-white font-bold underline underline-offset-2 transition-colors"
        >
          WhatsApp for availability
          <ArrowRight size={11} />
        </a>
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
        aria-label="Dismiss announcement"
      >
        <X size={13} />
      </button>
    </div>
  );
}

/* ─── Navbar ────────────────────────────────────────────────────────────── */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <>
      {/* Announcement bar sits above the fixed nav */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBar />

        <nav
          className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled
            ? "bg-white/95 backdrop-blur-2xl py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.07)] border-b border-slate-100"
            : "bg-transparent py-6"
            }`}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between">
              <LogoBadge scrolled={scrolled} />

              {/* ── Desktop Nav ── */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-[11px] font-bold tracking-[0.18em] uppercase transition-all relative group ${scrolled
                        ? isActive ? "text-aqua-600" : "text-slate-500 hover:text-slate-900"
                        : isActive ? "text-aqua-300" : "text-white/75 hover:text-white"
                        }`}
                    >
                      {link.name}
                      {/* Active / hover underline */}
                      <span
                        className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full transform origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "scale-x-100 w-full" : "scale-x-0 group-hover:scale-x-100 w-full"
                          } ${scrolled ? "bg-aqua-600" : "bg-aqua-400"}`}
                      />
                    </Link>
                  );
                })}

                {/* Phone quick-dial */}
                <a
                  href="tel:0322055422"
                  className={`hidden xl:flex items-center gap-2 text-[11px] font-bold tracking-wide transition-colors ${scrolled ? "text-slate-500 hover:text-slate-900" : "text-white/60 hover:text-white"
                    }`}
                >
                  <Phone size={13} />
                  032 205 5422
                </a>

                {/* Shimmer gradient CTA */}
                <Link
                  href="/contact"
                  className="relative group overflow-hidden px-7 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest text-white shadow-lg transition-all hover:-translate-y-0.5 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #1a5f7a 0%, #113547 50%, #1a5f7a 100%)",
                    backgroundSize: "200% auto",
                    animation: "shimmer 3s linear infinite",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Check Availability <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Glow on hover */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-2xl"
                    style={{ boxShadow: "0 0 30px rgba(8,145,178,0.5)" }}
                  />
                </Link>
              </div>

              {/* ── Mobile Hamburger ── */}
              <button
                className={`lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all border ${scrolled
                  ? "bg-white border-slate-200 shadow-sm text-slate-900"
                  : "bg-white/10 border-white/20 text-white backdrop-blur-md"
                  }`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled ? "bg-slate-900" : "bg-white"
                  } ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled ? "bg-slate-900" : "bg-white"
                  } ${isOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled ? "bg-slate-900" : "bg-white"
                  } ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-dark-navy z-50 lg:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex flex-col">
                  <span className="text-white font-black tracking-tighter uppercase text-lg leading-none">SUDU DUWA</span>
                  <span className="text-aqua-400 text-[9px] font-bold tracking-[0.28em] uppercase">AQUA PRODUCTS</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between px-4 py-4 rounded-2xl font-bold text-sm uppercase tracking-[0.15em] transition-all ${isActive
                          ? "bg-aqua-600/20 text-aqua-300 border border-aqua-600/30"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                          }`}
                      >
                        {link.name}
                        <ChevronRight size={16} className="opacity-40" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer footer CTAs */}
              <div className="p-6 border-t border-white/10 space-y-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-aqua-600 to-aqua-700 text-white px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-aqua-900/50 hover:from-aqua-500 hover:to-aqua-600 transition-all"
                >
                  Check Availability <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/94706665295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all hover:bg-[#25d366]/20"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
