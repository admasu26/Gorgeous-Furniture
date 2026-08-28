'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
  Send,
  Navigation,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/Icons';

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  // Check if store is currently open (Mon-Fri 8:30-16:00, Sat 9:00-15:00)
  const isStoreOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours() + now.getMinutes() / 60;
    if (day >= 1 && day <= 5 && hours >= 8.5 && hours <= 16) return true;
    if (day === 6 && hours >= 9 && hours <= 15) return true;
    return false;
  };

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-slate-900 font-sans pb-16">
      
      {/* HEADER BANNER (FRAMED CONTAINER LAYOUT) */}
      <section>
        <div className="w-full">
          <div className="relative min-h-screen flex items-center text-white text-center overflow-hidden bg-[#0B0F17]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/contact_header.jpg"
                alt="Contact Gorgeous Furniture Showrooms Ethiopia"
                fill
                priority
                className="object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/80 via-[#0B0F17]/65 to-[#0B0F17]/85" />
            </div>

            <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8D5A3] border border-[#D4AF37]/50 text-xs font-black uppercase tracking-widest mb-4 backdrop-blur-md shadow">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>We Are Here To Help</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-white drop-shadow-lg">
                Contact Gorgeous Furniture
                <span className="block mt-1 gold-gradient-text italic font-serif text-2xl sm:text-3xl md:text-4xl font-normal">Ethiopia</span>
              </h1>
              <p className="text-amber-100/90 text-xs sm:text-sm font-light leading-relaxed drop-shadow max-w-xl mx-auto">
                Questions about smart recliner couches, custom leather options, or wholesale orders? Visit any of our 4 showrooms or reach us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: FORM & HERO IMAGE (CONTAINER PANEL) */}
      <section className="py-8 sm:py-12">
        <div className="luxury-container">
          <div className="container-panel overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              
              {/* Form Side */}
              <div className="w-full lg:w-1/2 p-6 sm:p-10 md:p-12">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-wide mb-2 font-serif">
                  Send Us a Message
                </h2>
                <p className="text-xs text-slate-500 mb-8 font-light">
                  Fill in your details below and our team will get back to you within 2 business hours.
                </p>

                {submitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-2xl flex flex-col items-center text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 animate-bounce" />
                    <h4 className="text-base font-bold text-emerald-950">Message Sent Successfully!</h4>
                    <p className="text-xs text-emerald-700">
                      Thank you for reaching out to Gorgeous Furniture Ethiopia. A representative will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Abebe Bikila"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3.5 bg-amber-50/40 border border-amber-200/80 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:bg-white transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 block mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@domain.et"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full p-3.5 bg-amber-50/40 border border-amber-200/80 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:bg-white transition"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 block mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+251 91 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-3.5 bg-amber-50/40 border border-amber-200/80 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:bg-white transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 block mb-1">
                        Your Inquiry / Message *
                      </label>
                      <textarea
                        required
                        rows="4"
                        placeholder="Tell us which sofa, chair, or dining set you're inquiring about..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3.5 bg-amber-50/40 border border-amber-200/80 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:bg-white transition resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full gold-metallic-btn py-4 rounded-full text-xs font-black uppercase tracking-widest transition flex items-center justify-center gap-2 shadow-xl"
                    >
                      <Send className="w-4 h-4 text-[#0B0F17]" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Showroom Image Side */}
              <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-[550px] bg-[#0B0F17]">
                <Image
                  src="/hero_recliner.png"
                  alt="Bole Showroom Presentation Ethiopia"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] block mb-1">
                    VISIT BOLE SHOWROOM
                  </span>
                  <h3 className="text-xl font-bold font-serif gold-gradient-text-soft">Bole Road, Addis Ababa</h3>
                  <p className="text-xs text-amber-100/80 font-light mt-1">Next to Edna Mall, Bole Sub-City, Ethiopia</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4 SHOWROOM HUBS IN ADDIS ABABA (CONTAINER PANEL) */}
      <section className="py-8 sm:py-12">
        <div className="luxury-container">
          <div className="container-panel p-6 sm:p-10 md:p-12">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="section-kicker block mb-2">
                PHYSICAL SHOWROOM LOCATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 font-serif uppercase tracking-tight">
                Visit Any of Our 4 Addis Ababa Hubs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 font-light">
                Inspect product assembly, test recliner cushioning, and view custom fabric swatches live.
              </p>
              <div className="w-16 h-1 gold-gradient-bg mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              
              {/* Hub 1: CMC */}
              <div className="bg-amber-50/35 p-6 rounded-2xl border border-amber-200/60 island-card flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-[#0B0F17] text-[#D4AF37] border border-[#D4AF37]/40 rounded-xl w-max mb-3 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#D4AF37] bg-[#0B0F17] px-2.5 py-1 rounded-full border border-[#D4AF37]/40">
                    FLAGSHIP HUB
                  </span>
                  <h3 className="text-base font-extrabold text-slate-950 font-serif mt-2">CMC Hub</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mt-1">
                    Tsehay Real Estate Ground Floor, CMC Commercial District, Addis Ababa
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=CMC+Tsehay+Real+Estate+Addis+Ababa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#8c6d2a] hover:underline pt-3 border-t border-amber-200/60 mt-3"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                </a>
              </div>

              {/* Hub 2: Semit 72 */}
              <div className="bg-amber-50/35 p-6 rounded-2xl border border-amber-200/60 island-card flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-[#0B0F17] text-[#D4AF37] border border-[#D4AF37]/40 rounded-xl w-max mb-3 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#D4AF37] bg-[#0B0F17] px-2.5 py-1 rounded-full border border-[#D4AF37]/40">
                    SOFA & DINING
                  </span>
                  <h3 className="text-base font-extrabold text-slate-950 font-serif mt-2">Semit 72 Hub</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mt-1">
                    Main Commercial Strip, Semit 72 District, Addis Ababa
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Semit+72+Addis+Ababa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#8c6d2a] hover:underline pt-3 border-t border-amber-200/60 mt-3"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                </a>
              </div>

              {/* Hub 3: Gerji */}
              <div className="bg-amber-50/35 p-6 rounded-2xl border border-amber-200/60 island-card flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-[#0B0F17] text-[#D4AF37] border border-[#D4AF37]/40 rounded-xl w-max mb-3 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#D4AF37] bg-[#0B0F17] px-2.5 py-1 rounded-full border border-[#D4AF37]/40">
                    CUSTOM STUDIO
                  </span>
                  <h3 className="text-base font-extrabold text-slate-950 font-serif mt-2">Gerji Hub</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mt-1">
                    Prime Furniture Strip, Gerji Avenue, Addis Ababa
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Gerji+Addis+Ababa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#8c6d2a] hover:underline pt-3 border-t border-amber-200/60 mt-3"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                </a>
              </div>

              {/* Hub 4: Betel */}
              <div className="bg-amber-50/35 p-6 rounded-2xl border border-amber-200/60 island-card flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-[#0B0F17] text-[#D4AF37] border border-[#D4AF37]/40 rounded-xl w-max mb-3 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#D4AF37] bg-[#0B0F17] px-2.5 py-1 rounded-full border border-[#D4AF37]/40">
                    RETAIL & DISPATCH
                  </span>
                  <h3 className="text-base font-extrabold text-slate-950 font-serif mt-2">Betel Hub</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mt-1">
                    Shopping Plaza Center, Betel Commercial District, Addis Ababa
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Betel+Addis+Ababa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#8c6d2a] hover:underline pt-3 border-t border-amber-200/60 mt-3"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                </a>
              </div>

            </div>

            {/* Operating Hours & Direct Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-amber-200/60">
              {/* Card 1: Hours */}
              <div className="bg-amber-50/35 p-6 sm:p-8 rounded-2xl border border-amber-200/60 space-y-4 island-card">
                <div className="p-3 bg-[#0B0F17] text-[#D4AF37] border border-[#D4AF37]/40 rounded-xl w-max shadow-md">
                  <Clock className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-950 font-serif">Showroom Operating Hours</h3>
                
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between border-b border-amber-100 pb-1.5">
                    <span className="font-bold text-slate-900">Monday - Friday</span>
                    <span className="font-semibold text-slate-800">08:30 - 18:00 (EAT)</span>
                  </div>
                  <div className="flex justify-between border-b border-amber-100 pb-1.5">
                    <span className="font-bold text-slate-900">Saturday</span>
                    <span className="font-semibold text-slate-800">09:00 - 17:00 (EAT)</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Contact Channels */}
              <div className="bg-amber-50/35 p-6 sm:p-8 rounded-2xl border border-amber-200/60 space-y-4 island-card">
                <div className="p-3 bg-[#0B0F17] text-[#D4AF37] border border-[#D4AF37]/40 rounded-xl w-max shadow-md">
                  <Phone className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-950 font-serif">Direct Customer Channels</h3>
                
                <div className="space-y-3 text-xs">
                  <a href="tel:+251911234567" className="flex items-center gap-3 text-slate-900 hover:text-[#D4AF37] transition">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-mono font-bold text-sm">+251 91 123 4567 (Addis Hotline)</span>
                  </a>

                  <a href="tel:+251116612345" className="flex items-center gap-3 text-slate-900 hover:text-[#D4AF37] transition">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-mono">+251 11 661 2345 (Hubs Operations)</span>
                  </a>

                  <a href="mailto:info@gorgeousfurniture.et" className="flex items-center gap-3 text-slate-900 hover:text-[#D4AF37] transition">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                    <span className="underline font-semibold">info@gorgeousfurniture.et</span>
                  </a>
                </div>

                {/* Social & TikTok Row */}
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="https://wa.me/251940510000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition shadow-md"
                    title="WhatsApp (0940510000 / 0940520000)"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                  </a>
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#000000] text-[#00f2fe] border border-[#ff0050] flex items-center justify-center hover:scale-105 transition shadow-md font-black text-xs"
                    title="TikTok Video Catalog"
                  >
                    🎵
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}