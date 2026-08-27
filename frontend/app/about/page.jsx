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
    <main className="min-h-screen bg-[#f7f3ec] text-slate-900 font-sans">
      
      {/* SECTION 1: HERO HEADER */}
      <section className="relative py-20 sm:py-36 text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_header.jpg"
            alt="About Gorgeous Furniture Ethiopia Header"
            fill
            priority
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/70 via-[#0B0F17]/55 to-[#0B0F17]/75" />
        </div>

        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/60 text-xs font-black uppercase tracking-widest mb-5 backdrop-blur-sm shadow">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span>Established 2020 • Addis Ababa, Ethiopia</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold leading-tight mb-5 text-white drop-shadow-lg">
            Crafting Comfort,
            <span className="block mt-1 gold-gradient-text italic font-serif">Style & Durability</span>
          </h1>
          <p className="text-amber-100/90 text-sm sm:text-base font-light leading-relaxed drop-shadow max-w-2xl mx-auto">
            Welcome to <strong className="text-white font-bold">Gorgeous Furniture Ethiopia</strong> — home for smart recliner couches, luxury dining suites, and zero gravity massage chairs across 4 Addis Ababa showrooms.
          </p>
        </div>
      </section>

      {/* SECTION 2: OUR STORY & DIRECTORS */}
      <section className="py-20 container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-black uppercase tracking-widest shadow-sm">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>Over 10 Years Sector Expertise</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 leading-tight">
              Our Journey & Commitment to Excellence
            </h2>

            <p className="text-slate-700 text-sm leading-relaxed">
              Founded in 2020 in Addis Ababa, <strong className="text-slate-950 font-bold">Gorgeous Furniture Ethiopia</strong> has quickly established itself as a trusted leader in the East African luxury furniture landscape. Backed by directors and management with over a decade of hands-on experience in furniture design, manufacturing, and customer care, we curate pieces that combine timeless aesthetics with everyday durability.
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              Whether you are furnishing a contemporary villa, a luxury apartment in Bole or Kazanchis, or sourcing bulk commercial pieces for hotel developments across Ethiopia, our team ensures every couch, chair, and dining table passes rigorous quality checks.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-amber-200/60">
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

          <div className="lg:w-1/2 relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-amber-200/60 gold-card-hover">
            <Image
              src="/marble_dining.png"
              alt="Gorgeous Dining Setup Ethiopia"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE OFFER GRID */}
      <section className="py-20 bg-white border-y border-amber-200/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black text-[#D4AF37] uppercase tracking-[0.25em] block mb-2">
              Signature Product Range
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              What We Offer
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 font-light">
              Tailored furniture solutions for every room in your home or commercial space in Ethiopia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-amber-50/30 border border-amber-200/60 hover:border-[#D4AF37] transition-all hover:shadow-xl space-y-3 gold-card-hover">
                <div className="w-10 h-10 rounded-xl bg-[#0B0F17] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center shadow-md">
                  <Armchair className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-base font-extrabold text-slate-950 uppercase tracking-wide">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SHOWROOM CALLOUT */}
      <section className="py-20 container mx-auto px-6">
        <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50 text-slate-900 rounded-3xl p-8 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-amber-300">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-2 text-[#9A7B4F] text-xs font-black uppercase tracking-widest">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Addis Ababa Showroom Store</span>
            </div>
            <h3 className="text-3xl font-serif font-bold text-slate-950">Experience Our Furniture in Person</h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
              Visit our Bole Road showroom next to Edna Mall in Addis Ababa to test our zero gravity massage chairs, try out smart recliners, and view fabric & leather finishes firsthand.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="gold-metallic-btn px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition flex items-center justify-center gap-2 shadow-md"
            >
              <span>Get Directions</span>
              <ArrowRight className="w-4 h-4 text-[#0B0F17]" />
            </Link>

            <Link
              href="/wholesale-application"
              className="border-2 border-amber-300 bg-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#0B0F17] text-slate-950 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition flex items-center justify-center shadow-sm"
            >
              B2B Wholesale Portal
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}