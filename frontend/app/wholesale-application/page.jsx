'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Building2,
  ShieldCheck,
  Award,
  Truck,
  FileCheck,
  CheckCircle2,
  Send,
  Sparkles,
} from 'lucide-react';

export default function WholesaleApplicationPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    registrationNumber: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: 'Retailer / Furniture Store',
    estimatedMonthlyVolume: 'ETB 250,000 - ETB 750,000',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.companyName && formData.email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 7000);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-slate-900 font-sans pb-16">
      
      {/* BANNER (BOLD WHITE DISPLAY) */}
      <section className="relative overflow-hidden bg-[#0B0F17] min-h-[62vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/images/wholesale_header.jpg"
            alt="Wholesale & Commercial Furniture Trade Header"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-80 scale-100 transition-all duration-700 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/60 to-[#0B0F17]/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 text-[#E8D5A3] border border-[#D4AF37]/60 text-[11px] font-black uppercase tracking-[0.35em] backdrop-blur-md shadow-2xl mb-3">
            <Building2 className="w-4 h-4 text-[#D4AF37]" />
            <span>W H O L E S A L E   P O R T A L</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-none my-2">
            TRADE PARTNERS
            <span className="block mt-2 font-serif text-3xl sm:text-5xl md:text-6xl italic font-light text-amber-100 drop-shadow-md capitalize">
              Commercial &amp; B2B Wholesale
            </span>
          </h1>

          <p className="text-white text-xs sm:text-base md:text-lg mt-3 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Partner with Gorgeous Furniture Ethiopia. Access direct manufacturer pricing, custom leather &amp; fabric options, and dedicated account support for retail stockists, hospitality projects, and interior designers in East Africa.
          </p>
        </div>
      </section>

      {/* MAIN B2B FORM & BENEFITS (CONTAINER LAYOUT) */}
      <section className="py-8 sm:py-12">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Column: Benefits Card */}
            <div className="space-y-6">
              <div className="container-panel p-6 sm:p-8 space-y-6">
                <span className="text-xs font-black text-[#8c6d2a] uppercase tracking-widest block">
                  Trade Member Privileges
                </span>
                <h3 className="text-xl font-bold font-serif text-slate-950">Why Partner With Us?</h3>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-950 font-bold block">Direct Wholesale Margins</strong>
                      <span>Substantial margin potential on smart recliners & massage chairs.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-950 font-bold block">Priority Container & Stock Dispatch</strong>
                      <span>First allocation from our Addis Ababa warehouse & import shipments.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-950 font-bold block">Custom Hospitality Orders</strong>
                      <span>Tailored fabric, leather, and dimensions for hotels & resorts.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-950 font-bold block">2-Year Structural Warranty</strong>
                      <span>Complete peace of mind for commercial developments.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: B2B Application Form */}
            <div className="lg:col-span-2 container-panel p-6 sm:p-10 md:p-12">
              <h2 className="text-2xl font-black text-slate-950 font-serif uppercase tracking-wide mb-2">
                Apply for Wholesale Account
              </h2>
              <p className="text-xs text-slate-500 mb-8">
                Please complete the application form below. Verified business accounts are processed within 24 business hours.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-300 rounded-2xl flex flex-col items-center text-center space-y-3">
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 animate-bounce" />
                  <h4 className="text-lg font-bold text-emerald-950">Application Submitted!</h4>
                  <p className="text-xs text-emerald-700 max-w-md">
                    Thank you for applying for a Gorgeous Furniture Ethiopia Wholesale Account. Our B2B Account Manager will verify your details and issue your commercial catalog & pricing sheet.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 block mb-1">
                      Company / Registered Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Prestige Interiors (Pty) Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full p-3.5 bg-amber-50/40 border border-amber-200/80 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 block mb-1">
                      Company Reg or VAT Number
                    </label>
                    <input
                      type="text"
                      placeholder="2020/XXXXXX/07"
                      value={formData.registrationNumber}
                      onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                      className="w-full p-3.5 bg-amber-50/40 border border-amber-200/80 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 block mb-1">
                      Primary Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full p-3.5 bg-amber-50/40 border border-amber-200/80 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 block mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="orders@prestigeinteriors.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3.5 bg-amber-50/40 border border-amber-200/80 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+27 82 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3.5 bg-amber-50/40 border border-amber-200/80 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 block mb-1">
                      Business Type
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full p-3.5 bg-amber-50/40 border border-amber-200/80 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    >
                      <option>Retailer / Furniture Store</option>
                      <option>Interior Designer / Architect</option>
                      <option>Property Developer / Hotel Project</option>
                      <option>Online E-Commerce Seller</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 block mb-1">
                    Project Notes & Target Products
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Specify target products (e.g. 50x Orissa chairs, 20x Z600 massage chairs)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-3.5 bg-amber-50/40 border border-amber-200/80 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full gold-metallic-btn py-4 rounded-xl text-xs font-black uppercase tracking-widest transition flex items-center justify-center gap-2 shadow-xl"
                >
                  <Send className="w-4 h-4 text-[#0B0F17]" />
                  <span>Submit B2B Trade Application</span>
                </button>
              </form>
            )}
          </div>

          </div>
        </div>
      </section>

    </main>
  );
}
