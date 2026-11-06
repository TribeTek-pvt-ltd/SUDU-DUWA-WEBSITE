"use client";

import React, { useState, useEffect } from "react";
import { Mail, CheckCircle2, Bell, Sparkles, Download, ArrowRight } from "lucide-react";
import { trackNewsletterSignup } from "@/lib/analytics";
import { recordVisitorSession, markEmailSubscribed } from "@/lib/retention";

interface RetentionEmailCaptureProps {
  source?: string;
  variant?: "full" | "compact" | "card";
}

export default function RetentionEmailCapture({
  source = "homepage",
  variant = "full",
}: RetentionEmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("North Western Province");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isReturningSub, setIsReturningSub] = useState(false);

  useEffect(() => {
    // Check retention state after initial mount
    const timer = setTimeout(() => {
      const session = recordVisitorSession();
      if (session.isSubscribed) {
        setIsReturningSub(true);
        if (session.subscribedEmail) {
          setEmail(session.subscribedEmail);
        }
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    // Track GA4 key event & Meta lead
    trackNewsletterSignup({
      email,
      source: `retention_${source}`,
      farmLocation: location,
    });

    try {
      await fetch("/api/retention", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          farmLocation: location,
          source: `retention_${source}`,
        }),
      });
    } catch (err) {
      console.error("[RETENTION SUBMIT ERROR]:", err);
    }

    markEmailSubscribed(email);
    setIsSubmitted(true);
  };

  if (isReturningSub && !isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-aqua-950/40 via-dark-deep to-slate-900 border border-aqua-500/30 rounded-3xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-aqua-500/20 text-aqua-400 flex items-center justify-center shrink-0">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-aqua-400 uppercase tracking-widest mb-1">
              <Sparkles size={12} /> VIP Farmer Member
            </div>
            <h4 className="text-white font-bold text-lg">Welcome back!</h4>
            <p className="text-slate-300 text-sm font-light">
              You are actively subscribed to Sudu Duwa seed batch alerts and technical bulletins.
            </p>
          </div>
        </div>
        <a
          href="/products"
          className="inline-flex items-center gap-2 bg-aqua-500 hover:bg-aqua-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all whitespace-nowrap shadow-lg"
        >
          Check Current PL Stock <ArrowRight size={16} />
        </a>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-emerald-950/50 via-slate-900 to-emerald-950/30 border border-emerald-500/30 rounded-3xl p-8 text-center shadow-2xl">
        <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">You&apos;re Subscribed!</h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto mb-6 font-light">
          We have registered <strong className="text-white font-medium">{email}</strong>. You&apos;ll receive early alerts 48 hours prior to new SPF Vannamei PL batch releases.
        </p>
        <div className="inline-flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://chat.whatsapp.com/CsRdedlj0xgC1hbjHDlnUi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg"
          >
            Join WhatsApp Community <ArrowRight size={16} />
          </a>
          <a
            href="/farming-practices"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
          >
            <Download size={16} /> Read Technical Protocol
          </a>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email for batch alerts"
            className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-aqua-500 transition-all"
          />
        </div>
        <button
          type="submit"
          className="bg-aqua-500 hover:bg-aqua-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg"
        >
          Subscribe <ArrowRight size={16} />
        </button>
      </form>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-dark-navy via-dark-deep to-slate-950 border border-white/10 rounded-[36px] p-8 sm:p-12 shadow-2xl overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Value Proposition */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aqua-500/10 border border-aqua-500/20 text-aqua-400 text-xs font-bold tracking-widest uppercase">
            <Bell size={12} /> Seed Cycle Alerts &amp; Retention Club
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Never Miss a <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-blue-300">Vannamei PL Stocking</span> Window
          </h3>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Hatchery cycles fill up fast. Subscribe your farm to receive notification <strong>48 hours before</strong> new SPF nauplii and post-larvae batches are cleared for delivery, plus seasonal stocking guidance.
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-aqua-400" /> SPF Broodstock batch updates
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-aqua-400" /> Free Water Parameter Guide
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-aqua-400" /> No spam. Unsubscribe anytime.
            </span>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Your Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@farm.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-900/80 border border-white/10 rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-aqua-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Farming Region
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-900/80 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-aqua-500 transition-all cursor-pointer"
              >
                <option value="Chilaw / Puttalam">Chilaw / Puttalam District</option>
                <option value="Batticaloa / Eastern">Batticaloa / Eastern Province</option>
                <option value="Mannar / Northern">Mannar / Northern Province</option>
                <option value="Southern Province">Southern Province</option>
                <option value="Other / Commercial Hatchery">Other Commercial Farm</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-aqua-500 to-blue-500 hover:from-aqua-400 hover:to-blue-400 text-slate-950 font-bold py-4 rounded-xl text-sm transition-all shadow-lg hover:shadow-aqua-500/25 flex items-center justify-center gap-2 mt-2"
            >
              Get Stock Alerts &amp; Free Guide <ArrowRight size={16} />
            </button>
            <p className="text-[11px] text-center text-slate-400 font-light">
              Join 250+ Sri Lankan aquaculture operators tracking our breeding cycles.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
