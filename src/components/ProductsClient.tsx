"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import RetentionEmailCapture from "@/components/RetentionEmailCapture";
import { Search, Filter, ShieldCheck, Anchor, FlaskConical, CheckCircle2, Send } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackProductListView, trackContactSubmit, trackWhatsAppClick } from "@/lib/analytics";

export interface ProductItem {
  id?: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  specifications?: string[];
}

interface ProductsClientProps {
  products: ProductItem[];
}

export default function ProductsClient({ products }: ProductsClientProps) {
  const searchParams = useSearchParams();
  const queryParam = searchParams?.get("q") || "";

  const [searchTerm, setSearchTerm] = useState(queryParam);
  const [prevQuery, setPrevQuery] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Adjust state during render when search param changes
  if (queryParam !== prevQuery) {
    setPrevQuery(queryParam);
    setSearchTerm(queryParam);
  }

  // Lead form state
  const [leadForm, setLeadForm] = useState({
    name: "",
    farmName: "",
    phone: "",
    seedType: "Post-Larvae (PL)",
    notes: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fire GA4 Product List View event on mount
    trackProductListView();
  }, []);

  const categories = [
    "All Categories",
    "Hatchery Seed",
    "Farm Stocking",
    "Expert Services",
    "Laboratory Services",
    "Biosecurity",
    "Specialized Services"
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) return;
    setIsSubmitting(true);

    trackContactSubmit({
      formName: "Products Page Batch Reservation",
      inquiryType: leadForm.seedType,
      farmName: leadForm.farmName || leadForm.name,
      quantity: leadForm.notes,
    });

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadForm.name,
          farmName: leadForm.farmName,
          phone: leadForm.phone,
          inquiryType: leadForm.seedType,
          quantity: leadForm.notes,
          source: "products_page_reservation",
        }),
      });
    } catch (err) {
      console.error("[LEAD SUBMIT ERROR]:", err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  return (
    <>
      <section className="container mx-auto px-4 md:px-6 py-16">
        {/* Quick Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">SPF Certified Seeds</h4>
              <p className="text-sm text-slate-500">Disease-free Florida USA lineage</p>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-aqua-100 text-aqua-600 flex items-center justify-center shrink-0">
              <Anchor size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">USA SIS Broodstock</h4>
              <p className="text-sm text-slate-500">Fast growth & uniform harvest</p>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
              <FlaskConical size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Lab & PCR Tested</h4>
              <p className="text-sm text-slate-500">Salinity acclimated before transport</p>
            </div>
          </div>
        </div>

        {/* Filters bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 p-4 md:p-6 bg-white rounded-[30px] border border-slate-200 shadow-lg shadow-slate-200/50">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Vannamei seeds & lab services..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-aqua-500 transition-all outline-none text-slate-900"
            />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="hidden md:flex items-center gap-2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700">
              <Filter size={18} />
              Filter By
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex-grow md:w-64 px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-aqua-500 transition-all outline-none appearance-none cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200 mb-20">
            <p className="text-slate-500 text-lg">No products found matching &ldquo;{searchTerm}&rdquo;</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All Categories");
              }}
              className="mt-4 text-aqua-600 font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            {filteredProducts.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        )}
      </section>

      {/* Retention Mechanic Section */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <RetentionEmailCapture source="products_catalog" />
      </section>

      {/* Lead Generation Section - Reserve Batch */}
      <section id="reserve" className="bg-dark-deep py-24 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-aqua-600/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-aqua-400 font-bold tracking-[0.2em] text-[10px] mb-8 uppercase backdrop-blur-sm">
                Reserve Your Batch
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Check Seed <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-blue-400">Availability</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed font-light mb-8 max-w-lg">
                Due to the precise scientific nature of our breeding cycles, SPF Litopenaeus Vannamei Nauplii and PL availability fluctuates. Reserve your batch early to secure high-quality stock for your next farm cycle.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-300 font-light">
                  <CheckCircle2 size={20} className="text-aqua-400" /> Guaranteed SPF USA Lineage (SIS Florida)
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-light">
                  <CheckCircle2 size={20} className="text-aqua-400" /> Acclimated to target pond salinity
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-light">
                  <CheckCircle2 size={20} className="text-aqua-400" /> PCR tested before delivery
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-[40px] shadow-2xl">
              {formSubmitted ? (
                <div className="text-center py-8 space-y-5">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Batch Request Logged</h3>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    Thank you, <strong className="text-white">{leadForm.name}</strong>. Our production team has noted your request for <strong>{leadForm.seedType}</strong>. We will contact you at {leadForm.phone} shortly.
                  </p>
                  <a
                    href="https://wa.me/94706665295"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick({ source: "reserve_batch_wa_instant" })}
                    className="inline-flex items-center gap-2 bg-[#25d366] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-green-500/30 transition-all"
                  >
                    <WhatsAppIcon size={18} /> Connect on WhatsApp Now
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-white mb-2">Request Quote & Availability</h3>
                  <p className="text-slate-300 text-sm mb-8 font-light">Fill out the form below or message us on WhatsApp for faster response.</p>

                  <form onSubmit={handleLeadSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={leadForm.name}
                          onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Farm Name</label>
                        <input
                          type="text"
                          value={leadForm.farmName}
                          onChange={(e) => setLeadForm({ ...leadForm, farmName: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={leadForm.phone}
                          onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Seed Type</label>
                        <select
                          value={leadForm.seedType}
                          onChange={(e) => setLeadForm({ ...leadForm, seedType: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all appearance-none cursor-pointer"
                        >
                          <option className="bg-dark-deep" value="Post-Larvae (PL)">Post-Larvae (PL)</option>
                          <option className="bg-dark-deep" value="Nauplii">Nauplii</option>
                          <option className="bg-dark-deep" value="Water Testing Service">Water Testing Service</option>
                          <option className="bg-dark-deep" value="Technical Consultation">Technical Consultation</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Estimated Quantity & Date Required</label>
                      <textarea
                        rows={3}
                        value={leadForm.notes}
                        onChange={(e) => setLeadForm({ ...leadForm, notes: e.target.value })}
                        placeholder="e.g., 500,000 PL for pond stocking on November 25th..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-aqua-500/50 transition-all resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-aqua-500 to-blue-500 hover:from-aqua-400 hover:to-blue-400 text-white font-bold py-5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Inquiry"} <Send size={18} className="ml-1" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

