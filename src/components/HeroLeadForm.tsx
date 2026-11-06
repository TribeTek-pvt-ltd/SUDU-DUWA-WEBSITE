"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, ChevronRight, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackContactSubmit, trackWhatsAppClick } from "@/lib/analytics";

export default function HeroLeadForm() {
  const [farmName, setFarmName] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!farmName || !phone) return;
    setLoading(true);
    setErrorMessage("");

    trackContactSubmit({
      formName: "Homepage Hero Quick Stock Check",
      inquiryType: "PL Availability Check",
      farmName,
      quantity,
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: farmName,
          phone,
          quantity,
          inquiryType: "PL Availability Check",
          source: "homepage_hero_lead_form",
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const errorStr =
        err instanceof Error ? err.message : "Submission failed. Please WhatsApp us directly.";
      setErrorMessage(errorStr);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-br from-aqua-500/20 to-blue-500/20 rounded-[40px] blur-2xl z-0" />
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-[30px] relative z-10 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-aqua-500/20 flex items-center justify-center text-aqua-400">
            <Send size={18} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Check PL Stock</h3>
            <p className="text-sm text-slate-300 font-light">Get an immediate quote for your next cycle</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={28} />
            </div>
            <h4 className="text-white font-bold text-lg">Inquiry Received</h4>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              Thanks {farmName}! Our team will verify pond-acclimated PL readiness and reach you at {phone}.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/94706665295"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: "hero_form_instant_wa" })}
                className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white py-3 rounded-xl font-bold text-xs shadow-lg hover:bg-[#20ba59] transition-all"
              >
                <WhatsAppIcon size={14} /> WhatsApp Fast Track
              </a>
              <Link
                href="/products"
                className="text-aqua-300 hover:text-white text-xs underline font-medium pt-1"
              >
                Browse all seed varieties & lab services →
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && (
              <div className="p-3 bg-red-500/20 border border-red-500/40 text-red-200 text-xs rounded-xl">
                {errorMessage}
              </div>
            )}
            <div>
              <label className="sr-only">Farm Name / Contact Person</label>
              <input
                type="text"
                required
                value={farmName}
                onChange={(e) => setFarmName(e.target.value)}
                placeholder="Farm Name / Your Name *"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all duration-300 text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="sr-only">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone (WhatsApp) *"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label className="sr-only">Required Quantity</label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Est. PL Quantity"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all duration-300 text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-aqua-500 to-blue-500 hover:from-aqua-400 hover:to-blue-400 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 mt-2 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
            >
              {loading ? "Checking..." : "Request Availability"} <ChevronRight size={18} />
            </button>
            <div className="flex items-center justify-between pt-1">
              <span className="text-slate-400 text-[11px] font-light">Response time: 2–4 hrs</span>
              <Link
                href="/products"
                className="text-aqua-300 hover:text-white text-[11px] font-bold underline"
              >
                View Seed Specs & Pricing →
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
