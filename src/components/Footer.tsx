import Link from "next/link";
import { Droplets, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-medium border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-aqua-600/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.jpeg" alt="Sudu Duwa Aqua Products Logo" className="h-14 w-auto rounded-full object-contain" />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Sri Lanka's premier scientific prawn hatchery. We produce SPF-certified nauplii and highly robust post-larvae (PL) to empower regional aquaculture farmers.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-300 hover:text-aqua-400 text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-aqua-600 rounded-full" /> Home</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-aqua-400 text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-aqua-600 rounded-full" /> Our Science</Link></li>
              <li><Link href="/products" className="text-slate-300 hover:text-aqua-400 text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-aqua-600 rounded-full" /> Seed Availability</Link></li>
              <li><Link href="/farming-practices" className="text-slate-300 hover:text-aqua-400 text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-aqua-600 rounded-full" /> Hatchery Technology</Link></li>
              <li><Link href="/faq" className="text-slate-300 hover:text-aqua-400 text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-aqua-600 rounded-full" /> Farmer FAQ</Link></li>
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
                    <a href="tel:0322055422" className="text-slate-300 hover:text-aqua-400 text-sm transition-colors">0322055422 (Office)</a>
                    <a href="tel:0706665295" className="text-slate-300 hover:text-aqua-400 text-sm transition-colors">0706665295 (Mobile)</a>
                  </div>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full bg-aqua-600/10 hover:bg-aqua-600/20 text-aqua-400 border border-aqua-600/30 px-6 py-3 rounded-xl font-bold text-sm transition-all mt-2"
                  >
                    Direct Technical Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-light">
            © {new Date().getFullYear()} SUDU DUWA AQUA PRODUCTS (PVT) LTD. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-slate-600 text-xs font-light uppercase tracking-widest">
              Ambakandawilla | Chilaw
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
