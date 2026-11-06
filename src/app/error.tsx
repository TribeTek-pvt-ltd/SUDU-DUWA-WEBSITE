"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[APPLICATION ERROR CAPTURED]:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-dark-deep py-24 px-4">
      <div className="max-w-lg text-center space-y-6 bg-white/5 border border-white/10 rounded-[40px] p-10 sm:p-12 backdrop-blur-xl shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto">
          <AlertTriangle size={32} />
        </div>
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-red-400 font-bold">
            Unexpected Error
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Something Went Wrong
          </h1>
          <p className="text-slate-300 text-sm font-light leading-relaxed">
            We encountered a temporary issue while loading this page. Our technical team has been notified.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            type="button"
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-aqua-500 to-blue-500 text-slate-950 font-bold px-6 py-3.5 rounded-full text-sm hover:from-aqua-400 hover:to-blue-400 transition-all w-full sm:w-auto cursor-pointer"
          >
            <RotateCcw size={16} /> Try Again
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-6 py-3.5 rounded-full text-sm hover:bg-white/20 transition-all w-full sm:w-auto"
          >
            <Home size={16} /> Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

