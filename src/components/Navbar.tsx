"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Phone, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackWhatsAppClick } from "@/lib/analytics";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products & Seeds", href: "/products" },
  { name: "Our Science", href: "/about" },
  { name: "Hatchery Tech", href: "/farming-practices" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

/* ─── SD Monogram Logo ──────────────────────────────────────────────────── */
function LogoBadge({ scrolled }: { scrolled: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="Sudu Duwa Aqua Products Home">
      <img
        src="/logo.jpeg"
        alt="Sudu Duwa Aqua Products Logo"
        className="h-10 md:h-12 w-10 md:w-12 rounded-full object-cover shadow-sm ring-2 ring-aqua-500/30 group-hover:ring-aqua-400 transition-all shrink-0"
      />
      <div className="flex flex-col">
        <span
          className={`font-black text-sm md:text-base tracking-wider uppercase font-display leading-none transition-colors ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          Sudu Duwa
        </span>
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-aqua-400 font-bold leading-tight mt-1">
          Aqua Products
        </span>
      </div>
    </Link>
  );
}

/* ─── Announcement Bar ──────────────────────────────────────────────────── */
function subscribeAnnouncement(callback: () => void) {
  window.addEventListener("announcement_change", callback);
  return () => window.removeEventListener("announcement_change", callback);
}

function getAnnouncementSnapshot() {
  try {
    return sessionStorage.getItem("announcement_dismissed") === "true";
  } catch {
    return false;
  }
}

function getAnnouncementServerSnapshot() {
  return false;
}

function AnnouncementBar() {
  const isDismissed = useSyncExternalStore(
    subscribeAnnouncement,
    getAnnouncementSnapshot,
    getAnnouncementServerSnapshot
  );

  const handleDismiss = () => {
    try {
      sessionStorage.setItem("announcement_dismissed", "true");
      window.dispatchEvent(new Event("announcement_change"));
    } catch {
      // Ignore storage errors in private mode
    }
  };

  if (isDismissed) return null;

  return (
    <div className="relative text-white text-center py-2 px-4 text-xs font-semibold tracking-wide overflow-hidden" style={{ background: 'linear-gradient(90deg, #071522, #0e2a3a, #071522)' }}>
      {/* Shimmer sweep */}
      <span className="absolute inset-0 shimmer-bg opacity-30 pointer-events-none" />
      <span className="relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center">
        <img
          src="/logo.jpeg"
          alt="Sudu Duwa Logo"
          className="w-4 h-4 rounded-full object-cover ring-1 ring-aqua-400/60 inline-block shadow-sm shrink-0"
        />
        <span className="text-slate-200">New Cycle PL Stock Released —</span>
        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-aqua-300 hover:text-white font-bold underline underline-offset-2 transition-colors"
        >
          Check Seed Availability on /products
          <ArrowRight size={11} />
        </Link>
      </span>
      <button
        onClick={handleDismiss}
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
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  return (
    <>
      {/* Announcement bar sits above the fixed nav */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBar />

        <nav
          className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled
            ? "bg-white/95 backdrop-blur-2xl py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.07)] border-b border-slate-100"
            : "bg-transparent py-6"
            }`}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between">
              <LogoBadge scrolled={scrolled} />

              {/* ── Desktop Nav ── */}
              <div className="hidden lg:flex items-center gap-7">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-[11px] font-bold tracking-[0.16em] uppercase transition-all relative group ${scrolled
                        ? isActive ? "text-aqua-600" : "text-slate-600 hover:text-slate-900"
                        : isActive ? "text-aqua-300" : "text-white/80 hover:text-white"
                        }`}
                    >
                      {link.name}
                      {/* Active / hover underline */}
                      <span
                        className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full transform origin-left transition-transform duration-300 ${isActive ? "scale-x-100 w-full" : "scale-x-0 group-hover:scale-x-100 w-full"
                          } ${scrolled ? "bg-aqua-600" : "bg-aqua-400"}`}
                      />
                    </Link>
                  );
                })}

                {/* Phone quick-dial */}
                <a
                  href="tel:+94322055422"
                  className={`hidden xl:flex items-center gap-2 text-[11px] font-bold tracking-wide transition-colors ${scrolled ? "text-slate-500 hover:text-slate-900" : "text-white/60 hover:text-white"
                    }`}
                >
                  <Phone size={13} />
                  032 205 5422
                </a>

                {/* Internal /products CTA */}
                <Link
                  href="/products"
                  className="relative group overflow-hidden px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest text-white shadow-lg transition-all hover:-translate-y-0.5 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #1a5f7a 0%, #113547 50%, #1a5f7a 100%)",
                    backgroundSize: "200% auto",
                    animation: "shimmer 3s linear infinite",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Check Availability <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
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
                <div className="flex items-center gap-3">
                  <img src="/logo.jpeg" alt="Sudu Duwa Aqua Products Logo" className="h-9 w-9 rounded-full object-cover ring-2 ring-aqua-400/40" />
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm uppercase tracking-wider font-display">Sudu Duwa</span>
                    <span className="text-[9px] text-aqua-400 uppercase tracking-widest font-semibold">Aqua Products</span>
                  </div>
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
                      transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
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
                  href="/products"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-aqua-600 to-aqua-700 text-white px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-aqua-900/50 hover:from-aqua-500 hover:to-aqua-600 transition-all"
                >
                  View Products & Seeds <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/94706665295"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick({ source: "mobile_drawer_whatsapp" })}
                  className="flex items-center justify-center gap-2 w-full bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all hover:bg-[#25d366]/20"
                >
                  <WhatsAppIcon size={16} /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
