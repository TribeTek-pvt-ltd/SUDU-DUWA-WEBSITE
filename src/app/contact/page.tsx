import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Hatchery Office & Technical Support | Chilaw, Sri Lanka",
  description:
    "Contact SUDU DUWA AQUA PRODUCTS in Chilaw, Sri Lanka. Bulk order inquiries for SPF Litopenaeus Vannamei Nauplii, PL seeds, and aquaculture consultation.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Hatchery Office | SUDU DUWA AQUA PRODUCTS",
    description:
      "Commercial inquiries for Litopenaeus Vannamei Nauplii, PL seeds, and aquaculture technical consultation in Chilaw.",
    url: "https://sududuwa.com/contact",
    images: [
      {
        url: "/logo.jpeg",
        width: 640,
        height: 640,
        alt: "SUDU DUWA AQUA PRODUCTS Headquarters Chilaw",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Hatchery Office | SUDU DUWA AQUA PRODUCTS",
    description:
      "Commercial inquiries for Litopenaeus Vannamei Nauplii, PL seeds, and aquaculture technical consultation in Chilaw.",
    images: ["/logo.jpeg"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Sudu Duwa Aqua Products",
  "description":
    "Commercial inquiries for Litopenaeus Vannamei Nauplii, PL seeds, and aquaculture technical consultation.",
  "url": "https://sududuwa.com/contact",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "SUDU DUWA AQUA PRODUCTS (PVT) LTD",
    "telephone": "+94706665295",
    "email": "suduaqua726@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "136/52/B/1 Sangathddana Puttalam Road",
      "addressLocality": "Chilaw",
      "addressRegion": "North Western Province",
      "postalCode": "61000",
      "addressCountry": "LK",
    },
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-24 pb-24 bg-white">
      <Hero
        title="Contact the Hatchery"
        subtitle="Have questions about nauplii availability, PL stocking, or technical farm support? We're here to help."
      />

      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Head Office</h2>
              <p className="text-slate-500 font-light">
                Reach out to our main office for commercial bulk orders, or contact our Managing Director directly for technical consultation.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-aqua-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Headquarters</h3>
                  <p className="text-slate-500 text-sm mt-1">
                    136/52/B/1 Sangathddana
                    <br />
                    Puttalam Road, Chilaw
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-aqua-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Office Lines</h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Tel:{" "}
                    <a
                      href="tel:+94322055422"
                      className="hover:text-aqua-600 font-medium"
                    >
                      032 205 5422
                    </a>
                  </p>
                  <p className="text-slate-500 text-sm">
                    Mobile / Orders:{" "}
                    <a
                      href="tel:+94706665295"
                      className="hover:text-aqua-600 font-medium"
                    >
                      070 666 5295
                    </a>
                  </p>
                  <p className="text-slate-500 text-sm mt-1">
                    WhatsApp:{" "}
                    <a
                      href="https://wa.me/94706665295"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-aqua-600 font-medium inline-flex items-center gap-1"
                    >
                      <WhatsAppIcon size={14} className="text-emerald-600" /> 070 666 5295
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-aqua-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email Us</h3>
                  <p className="text-slate-500 text-sm mt-1">
                    <a
                      href="mailto:suduaqua726@gmail.com"
                      className="hover:text-aqua-600"
                    >
                      suduaqua726@gmail.com
                    </a>
                  </p>
                  <p className="text-slate-500 text-sm">
                    <a
                      href="mailto:Sududuwa372@gmail.com"
                      className="hover:text-aqua-600"
                    >
                      Sududuwa372@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 mt-8">
                <h3 className="font-bold text-slate-900 mb-2">Direct Contact: MD</h3>
                <p className="text-slate-700 font-semibold text-sm">Selvarajah Pradeeban</p>
                <p className="text-slate-500 text-xs mb-3 italic">
                  BSc Food Science & Technology (Special in Aquaculture)
                </p>
                <p className="text-slate-500 text-sm">
                  Mobile:{" "}
                  <a
                    href="tel:+94778065295"
                    className="hover:text-aqua-600 font-medium"
                  >
                    077 806 5295
                  </a>
                </p>
                <p className="text-slate-500 text-sm mt-1">
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/94713057361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-aqua-600 font-medium inline-flex items-center gap-1"
                  >
                    <WhatsAppIcon size={14} className="text-emerald-600" /> 071 305 7361
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Client Component */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="w-full h-[400px] bg-slate-100 rounded-[50px] overflow-hidden relative border border-slate-200">
          <div className="absolute inset-0 bg-[url('/assets/changes/hatchery.jpeg')] bg-cover bg-center opacity-30 mix-blend-multiply" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-3xl shadow-xl text-center border border-slate-200 max-w-xs">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-md">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Our Headquarters</h3>
              <p className="text-slate-500 text-sm">
                136/52/B/1 Sangathddana Puttalam Road, Chilaw
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
    </div>
  );
}
