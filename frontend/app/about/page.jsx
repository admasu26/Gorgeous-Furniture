'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  ShieldCheck,
  Truck,
  Sparkles,
  CheckCircle2,
  Armchair,
  Flame,
  Users,
  MapPin,
  ArrowRight,
} from 'lucide-react';

export default function About() {
  const offerings = [
    { title: "Lounge Suites", desc: "Crafted for luxurious modern living rooms with stain-resistant finishes." },
    { title: "Recliner Couches", desc: "Smart electronic recliners with USB charging ports & cup holders." },
    { title: "Dining Suites", desc: "Sleek dining tables with velvet & genuine leather chairs." },
    { title: "Occasional & Bar Chairs", desc: "Versatile counter stools and vanity seating options." },
    { title: "Outdoor Patio Furniture", desc: "All-weather rattan and aluminum outdoor lounging sets." },
    { title: "Zero Gravity Massage Chairs", desc: "Equipped with Bluetooth audio, lumbar heat & pressure sensors." },
  ];

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-slate-900 font-sans pb-16">
      
      {/* SECTION 1: HERO HEADER (BOLD WHITE DISPLAY) */}
      <section className="relative overflow-hidden bg-[#0B0F17] py-16 sm:py-24 md:py-28 text-center text-white">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/images/about_header.jpg"
            alt="About Gorgeous Furniture Ethiopia Header"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-80 scale-100 transition-all duration-700 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/60 to-[#0B0F17]/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 text-[#E8D5A3] border border-[#D4AF37]/60 text-[11px] font-black uppercase tracking-[0.35em] backdrop-blur-md shadow-2xl mb-3">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span>A B O U T   U S</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-none my-2">
            CRAFTING LUXURY
            <span className="block mt-2 font-serif text-3xl sm:text-5xl md:text-6xl italic font-light text-amber-100 drop-shadow-md capitalize">
              Style, Comfort &amp; Durability
            </span>
          </h1>

          <p className="text-white text-xs sm:text-base md:text-lg mt-3 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Welcome to Gorgeous Furniture Ethiopia — home for smart recliner couches, luxury dining suites, and zero gravity massage chairs across 4 Addis Ababa showrooms.
          </p>
        </div>
      </section>

      {/* SECTION 2: OUR STORY & DIRECTORS (CONTAINER PANEL) */}
      <section className="py-8 sm:py-12">
        <div className="luxury-container">
          <div className="container-panel p-6 sm:p-10 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
              
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 text-[#8c6d2a] border border-amber-300/60 text-xs font-black uppercase tracking-widest shadow-xs">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>Over 10 Years Sector Expertise</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-950 leading-tight">
                  Our Journey & Commitment to Excellence
                </h2>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-light">
                  Founded in 2020 in Addis Ababa, <strong className="text-slate-950 font-bold">Gorgeous Furniture Ethiopia</strong> has quickly established itself as a trusted leader in the East African luxury furniture landscape. Backed by directors and management with over a decade of hands-on experience in furniture design, manufacturing, and customer care, we curate pieces that combine timeless aesthetics with everyday durability.
                </p>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-light">
                  Whether you are furnishing a contemporary villa, a luxury apartment in Bole or Kazanchis, or sourcing bulk commercial pieces for hotel developments across Ethiopia, our team ensures every couch, chair, and dining table passes rigorous quality checks.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-amber-200/60">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-xs font-black text-slate-900">2-Year Structural Warranty</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-xs font-black text-slate-900">Fast Addis Ababa Delivery</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 relative h-[320px] sm:h-[420px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-amber-200/60 gold-card-hover">
                <Image
                  src="/marble_dining.png"
                  alt="Gorgeous Dining Setup Ethiopia"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE OFFER GRID (CONTAINER PANEL) */}
      <section className="py-8 sm:py-12">
        <div className="luxury-container">
          <div className="container-panel p-6 sm:p-10 md:p-12">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="section-kicker block mb-2">
                Signature Product Range
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
                What We Offer
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 font-light">
                Tailored furniture solutions for every room in your home or commercial space in Ethiopia.
              </p>
              <div className="w-16 h-1 gold-gradient-bg mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerings.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-amber-50/35 border border-amber-200/60 space-y-3 island-card">
                  <div className="w-10 h-10 rounded-xl bg-[#0B0F17] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center shadow-md">
                    <Armchair className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-950 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SHOWROOM CALLOUT (CONTAINER BANNER) */}
      <section className="py-6 sm:py-8">
        <div className="luxury-container">
          <div className="rounded-3xl bg-gradient-to-r from-amber-100/70 via-white to-amber-100/70 border border-amber-300/70 p-6 sm:p-10 md:p-12 shadow-[0_14px_36px_rgba(26,24,20,0.06)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 text-[#8c6d2a] text-xs font-black uppercase tracking-widest">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Addis Ababa Showroom Store</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">Experience Our Furniture in Person</h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-light">
                Visit our Bole Road showroom next to Edna Mall in Addis Ababa to test our zero gravity massage chairs, try out smart recliners, and view fabric & leather finishes firsthand.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="gold-metallic-btn px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition flex items-center justify-center gap-2 shadow-md"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4 text-[#0B0F17]" />
              </Link>

              <Link
                href="/wholesale-application"
                className="border-2 border-amber-300 bg-white hover:bg-[#0B0F17] hover:border-[#0B0F17] hover:text-[#E8D5A3] text-slate-950 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition flex items-center justify-center shadow-xs"
              >
                B2B Wholesale Portal
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}