"use client";

import React from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function WhatsAppButton() {
  const phoneNumber = "+94706665295";
  const message = "Hello Sudu Duwa, I'm interested in your products and seed availability.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    trackWhatsAppClick({
      source: "floating_whatsapp_widget",
      productName: "General Inquire",
    });
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] bg-[#25d366] text-white p-3.5 md:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-float group flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon size={30} className="w-7 h-7 md:w-8 md:h-8 fill-current" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 dark:border-slate-800 hidden md:block pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
