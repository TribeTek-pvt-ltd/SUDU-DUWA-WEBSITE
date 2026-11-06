import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// Real Facebook SVG component
const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-dark-medium border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-aqua-600/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Social Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.jpeg" alt="Sudu Duwa Aqua Products Logo" className="h-14 w-auto rounded-full object-contain" />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Sri Lanka&apos;s premier scientific prawn hatchery. We produce SPF-certified nauplii and highly robust post-larvae (PL) to empower regional aquaculture farmers.
            </p>

            {/* Social Media Links */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Connect Socially</h5>
              <div className="flex items-center gap-3">
                <a
                  href="https://chat.whatsapp.com/CsRdedlj0xgC1hbjHDlnUi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#25d366] hover:bg-[#25d366] hover:text-white transition-all shadow-sm"
                  aria-label="Join WhatsApp Community"
                >
                  <WhatsAppIcon size={18} />
                </a>
                <a
                  href="https://www.facebook.com/sududuwaaquaproducts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all shadow-sm"
                  aria-label="Facebook Page"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="https://wa.me/94706665295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-aqua-400 hover:bg-aqua-500 hover:text-slate-950 transition-all shadow-sm"
                  aria-label="Direct WhatsApp Support"
                >
                  <Phone size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-300 hover:text-aqua-400 text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-aqua-600 rounded-full" /> Home</Link></li>
              <li><Link href="/products" className="text-aqua-400 hover:text-white font-semibold text-sm transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-aqua-400 rounded-full" /> Seed Availability & Products</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-aqua-400 text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-aqua-600 rounded-full" /> Our Science & Facilities</Link></li>
              <li><Link href="/farming-practices" className="text-slate-300 hover:text-aqua-400 text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-aqua-600 rounded-full" /> Hatchery Technology</Link></li>
              <li><Link href="/faq" className="text-slate-300 hover:text-aqua-400 text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-aqua-600 rounded-full" /> Farmer FAQ</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-aqua-400 text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-aqua-600 rounded-full" /> Contact Head Office</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Operations</h4>
            <div className="grid sm:grid-cols-2 gap-8">
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-aqua-400">
                    <MapPin size={18} />
                  </div>
                  <span className="text-slate-300 text-sm leading-relaxed mt-1">
                    136/52/B/1 Sangathddana<br />Puttalam Road, Chilaw
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-aqua-400">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <a href="mailto:suduaqua726@gmail.com" className="text-slate-300 hover:text-aqua-400 text-sm transition-colors">suduaqua726@gmail.com</a>
                  </div>
                </li>
              </ul>

              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-aqua-400">
                    <Phone size={18} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+94322055422" className="text-slate-300 hover:text-aqua-400 text-sm transition-colors">032 205 5422 (Office)</a>
                    <a href="tel:+94706665295" className="text-slate-300 hover:text-aqua-400 text-sm transition-colors">070 666 5295 (Mobile)</a>
                  </div>
                </li>
                <li>
                  <Link
                    href="/products#reserve"
                    className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-aqua-500 to-blue-500 hover:from-aqua-400 hover:to-blue-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm transition-all mt-2 shadow-lg"
                  >
                    Reserve Batch in Advance <ArrowRight size={14} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Automation & Uptime Monitoring / Legal Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-light">
            © {new Date().getFullYear()} SUDU DUWA AQUA PRODUCTS (PVT) LTD. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <a
              href="/api/health"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>99.9% Platform Uptime (Live Monitor)</span>
            </a>
            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-aqua-400 transition-colors"
            >
              AI Crawl Specs (llms.txt)
            </a>
            <span className="text-slate-500 uppercase tracking-widest text-[10px]">
              Ambakandawilla | Chilaw
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
