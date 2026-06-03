import Hero from "@/components/Hero";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

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
                  <h4 className="font-bold text-slate-900">Headquarters</h4>
                  <p className="text-slate-500 text-sm mt-1">136/52/B/1 Sangathddana<br />Puttalam Road, Chilaw</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-aqua-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Office Lines</h4>
                  <p className="text-slate-500 text-sm mt-1">Tel: <a href="tel:0322055422" className="hover:text-aqua-600 font-medium">0322055422</a></p>
                  <p className="text-slate-500 text-sm">Mobile: <a href="tel:0706665295" className="hover:text-aqua-600 font-medium">0706665295</a></p>
                  <p className="text-slate-500 text-sm mt-1">WhatsApp: <a href="https://wa.me/94706665295" target="_blank" rel="noopener noreferrer" className="hover:text-aqua-600 font-medium flex items-center gap-1"><MessageCircle size={12} /> 0706665295</a></p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-aqua-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-500 text-sm mt-1"><a href="mailto:suduaqua726@gmail.com" className="hover:text-aqua-600">suduaqua726@gmail.com</a></p>
                  <p className="text-slate-500 text-sm"><a href="mailto:Sududuwa372@gmail.com" className="hover:text-aqua-600">Sududuwa372@gmail.com</a></p>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 mt-8">
                <h4 className="font-bold text-slate-900 mb-4">Direct Contact: MD</h4>
                <p className="text-slate-700 font-semibold text-sm">Selvarajah Pradeeban</p>
                <p className="text-slate-500 text-xs mb-3 italic">BSc Food Science & Technology (Special in Aquaculture)</p>
                <p className="text-slate-500 text-sm">Mobile: <a href="tel:0778065295" className="hover:text-aqua-600 font-medium">0778065295</a></p>
                <p className="text-slate-500 text-sm mt-1">WhatsApp: <a href="https://wa.me/94713057361" target="_blank" rel="noopener noreferrer" className="hover:text-aqua-600 font-medium flex items-center gap-1"><MessageCircle size={12} /> 0713057361</a></p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-slate-200">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-900 ml-1">Farm / Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Farm or Name" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-aqua-500 outline-none text-slate-900"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-900 ml-1">Contact Number</label>
                    <input 
                      type="tel" 
                      placeholder="e.g., 07x xxx xxxx" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-aqua-500 outline-none text-slate-900"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-900 ml-1">Inquiry Type</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-700 focus:ring-2 focus:ring-aqua-500 outline-none appearance-none cursor-pointer">
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
                    placeholder="How can we help your farm?" 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-aqua-500 outline-none resize-none text-slate-900"
                  ></textarea>
                </div>
                <button className="flex items-center justify-center gap-3 w-full md:w-auto px-10 py-5 bg-slate-900 hover:bg-aqua-600 text-white rounded-2xl font-bold transition-all shadow-lg hover:-translate-y-1 active:scale-95">
                  Send Inquiry <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="w-full h-[500px] bg-slate-100 rounded-[50px] overflow-hidden relative border border-slate-200">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-30 mix-blend-multiply" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-8 rounded-3xl shadow-xl text-center border border-slate-200 max-w-xs animate-float">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-md">
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Our Headquarters</h4>
                <p className="text-slate-500 text-sm">136/52/B/1 Sangathddana Puttalam Road, Chilaw</p>
              </div>
           </div>
        </div>
      </section>

      {/* LocalBusiness Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SUDU DUWA AQUA PRODUCTS (PVT) LTD",
            "image": "https://sududuwa.com/logo.jpeg",
            "telephone": "0322055422",
            "email": "suduaqua726@gmail.com",
            "founder": {
              "@type": "Person",
              "name": "Selvarajah Pradeeban"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "136/52/B/1 Sangathddana Puttalam Road",
              "addressLocality": "Chilaw",
              "addressCountry": "LK"
            }
          })
        }}
      />
    </div>
  );
}
