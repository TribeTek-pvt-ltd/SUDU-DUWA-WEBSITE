import Hero from "@/components/Hero";
import React from "react";

const faqs = [
  {
    question: "Where are your hatchery operations located?",
    answer: "Both of our primary operations—the Naupillia Center and the St. Rogus Prawn Hatchery—are located in Ambakandawilla, Chilaw. Our strategic coastal location provides access to pristine seawater, essential for healthy prawn breeding."
  },
  {
    question: "Are your prawn seeds Specific Pathogen Free (SPF)?",
    answer: "Yes. We maintain rigorous biosecurity protocols and laboratory screening. All our nauplii and post-larvae (PL) are SPF certified, ensuring they are free from major viral pathogens before they are stocked in your farm."
  },
  {
    question: "How do I place an order for post-larvae (PL)?",
    answer: "You can contact us via our Head Office phone line (0322055422) or message us directly on WhatsApp (0706665295). Due to breeding cycles, we recommend contacting us in advance to check availability and reserve your stock."
  },
  {
    question: "Do you provide technical support for farmers?",
    answer: "Absolutely. Our Managing Director, Selvarajah Pradeeban, holds a BSc in Food Science and Technology with a Specialization in Aquaculture. We provide our buyers with expert technical consultation on pond preparation, water quality management, and feeding protocols to ensure high survival rates."
  },
  {
    question: "How do you transport the nauplii and PL to my farm?",
    answer: "We use specialized, oxygenated transportation bags packed inside temperature-controlled insulated boxes. This minimizes transit stress and ensures the seeds arrive at your farm healthy and ready for acclimation."
  }
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="flex flex-col gap-16 pb-24 bg-white">
      <Hero 
        title="Frequently Asked Questions"
        subtitle="Find quick answers regarding our prawn seeds, biosecurity protocols, and technical farm support."
      />

      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-50 rounded-[30px] p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                {faq.question}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
