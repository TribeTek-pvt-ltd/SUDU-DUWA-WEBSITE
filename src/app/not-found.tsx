import Link from "next/link";
import { ArrowRight, Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-dark-deep py-24 px-4">
      <div className="max-w-xl text-center space-y-8 bg-white/5 border border-white/10 rounded-[40px] p-10 sm:p-14 backdrop-blur-xl shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-aqua-500/20 text-aqua-400 flex items-center justify-center mx-auto">
          <Compass size={32} />
        </div>
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-aqua-400 font-bold">
            404 — Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Off the Hatchery Map
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed font-light">
            The page you are looking for does not exist or may have moved. You can navigate back to our seed catalog or return to the homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-full text-sm hover:bg-slate-100 transition-all w-full sm:w-auto"
          >
            <Home size={16} /> Return to Homepage
          </Link>
          <Link
            href="/products"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-aqua-500 to-blue-500 text-slate-950 font-bold px-6 py-3.5 rounded-full text-sm hover:from-aqua-400 hover:to-blue-400 transition-all w-full sm:w-auto"
          >
            View Seed Catalog <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

