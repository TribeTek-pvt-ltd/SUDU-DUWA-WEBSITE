"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackContactSubmit, trackWhatsAppClick } from "@/lib/analytics";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    inquiryType: "Nauplii Bulk Order",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setLoading(true);
    setErrorMessage("");

    // Track GA4 key conversion event
    trackContactSubmit({
      formName: "Contact Page Main Form",
      inquiryType: formData.inquiryType,
      farmName: formData.name,
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          inquiryType: formData.inquiryType,
          message: formData.message,
          source: "contact_page",
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const errorStr =
        err instanceof Error ? err.message : "Something went wrong. Please try again or WhatsApp us.";
      setErrorMessage(errorStr);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-slate-200">
      {submitted ? (
        <div className="text-center py-12 space-y-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="text-3xl font-bold text-slate-900">Inquiry Sent Successfully</h3>
          <p className="text-slate-600 max-w-lg mx-auto font-light leading-relaxed">
            Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our hatchery operations team has received your request regarding <strong>{formData.inquiryType}</strong> and will follow up within 2–4 hours.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/94706665295"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ source: "contact_post_submission_wa" })}
              className="inline-flex items-center gap-2 bg-[#25d366] text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-0.5"
            >
              <WhatsAppIcon size={18} /> Immediate WhatsApp Follow-up
            </a>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", phone: "", inquiryType: "Nauplii Bulk Order", message: "" });
              }}
              className="px-6 py-4 text-slate-600 hover:text-slate-900 font-bold text-sm"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {errorMessage && (
            <div className="p-4 bg-red-50 text-red-700 text-sm rounded-xl border border-red-200">
              {errorMessage}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-900 ml-1">Farm / Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Farm or Name"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-aqua-500 outline-none text-slate-900"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-900 ml-1">Contact Number (WhatsApp) *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g., +94 7x xxx xxxx"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-aqua-500 outline-none text-slate-900"
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-900 ml-1">Inquiry Type</label>
            <select
              value={formData.inquiryType}
              onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-700 focus:ring-2 focus:ring-aqua-500 outline-none cursor-pointer"
            >
              <option>Nauplii Bulk Order</option>
              <option>Post-Larvae (PL) Availability</option>
              <option>Technical Consultation (Water Quality / Breeding)</option>
              <option>General Support</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-900 ml-1">Your Message</label>
            <textarea
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Estimated seed quantity needed, stocking date, or farm requirements..."
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-aqua-500 outline-none resize-none text-slate-900"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-3 w-full md:w-auto px-10 py-5 bg-slate-900 hover:bg-aqua-600 text-white rounded-2xl font-bold transition-all shadow-lg hover:-translate-y-1 active:scale-95 disabled:opacity-50"
          >
            {loading ? "Sending Inquiry..." : "Send Inquiry"} <Send size={20} />
          </button>
        </form>
      )}
    </div>
  );
}

