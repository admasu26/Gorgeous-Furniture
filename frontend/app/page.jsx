'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { useShop } from './components/ShopContext';
import {
  Sparkles,
  ArrowRight,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Building2,
  Play,
  Scissors,
  Video,
} from 'lucide-react';
import { WhatsAppIcon } from './components/Icons';

const categories = [
  {
    name: 'Sofa Sets & Living',
    subtitle: 'Recliners & Smart Couches',
    img: '/hero_recliner.png',
    href: '/living-room',
    badge: 'Luxury',
  },
  {
    name: 'King Bedroom Packages',
    subtitle: 'King Beds, Wardrobes & Vanities',
    img: '/king_bedroom.png',
    href: '/bedroom',
    badge: 'Bedroom Suites',
  },
  {
    name: 'Elegant Dining Tables',
    subtitle: 'Marble & Velvet Dining Sets',
    img: '/marble_dining.png',
    href: '/dining-room',
    badge: 'Popular',
  },
  {
    name: 'TV Stands & Media Units',
    subtitle: 'Marble & Fluted Wood Consoles',
    img: '/images/Table1.png',
    href: '/tv-stand',
    badge: 'New Arrivals',
  },
];

const showroomHubs = [
  {
    name: 'CMC Hub (Tsehay Ground Floor)',
    district: 'CMC / Opposite AICC',
    address: 'Tsehay Real Estate Ground Floor (Directly opposite AICC), CMC, Addis Ababa',
    phone: '0940510000',
    tag: 'FLAGSHIP SHOWROOM',
    highlight: 'Full bedroom suite setups & lounge displays opposite AICC',
  },
  {
    name: 'Semit 72 Hub',
    district: 'Bole Kebele 50 / Semit 72',
    address: 'Semit 72 Area, Bole Kebele 50, Addis Ababa',
    phone: '0940520000 / 0925314444',
    tag: 'NEW EXPANSION',
    highlight: 'Dining suites & recliner sofa gallery',
  },
  {
    name: 'Gerji Hub',
    district: 'Gerji Mebrat Hayel',
    address: 'Gerji Mebrat Hayel Area (Along Ring Road), Addis Ababa',
    phone: '0940510000',
    tag: 'DESIGNER STUDIO',
    highlight: 'Bespoke fabric & leather swatch center',
  },
  {
    name: 'Betel Hub',
    district: 'Betel District',
    address: 'Betel Neighborhood Shopping Center, Addis Ababa',
    phone: '0925154444',
    tag: 'RETAIL CENTER',
    highlight: 'In-stock sofa sets & fast dispatch',
  },
];

const tiktokCatalog = [
  {
    id: 1,
    title: 'New Container Arrival at Addis Ababa Port & Hubs',
    views: '45.2K Views',
    duration: '0:45',
    img: '/hero_recliner.png',
    desc: 'Unboxing imported luxury sofa sets and marble dining tables landing live at our CMC & Semit hubs.',
  },
  {
    id: 2,
    title: 'Bespoke Sofa Assembly & Texture Stress Test',
    views: '38.9K Views',
    duration: '0:58',
    img: '/marble_dining.png',
    desc: 'Demonstrating frame durability, stain resistance of velvet fabrics, and smooth electronic power recliners.',
  },
  {
    id: 3,
    title: 'King Bedroom Suite Setup at Tsehay Real Estate Hub',
    views: '52.1K Views',
    duration: '1:12',
    img: '/king_bedroom.png',
    desc: 'Complete walkthrough of fitted wardrobes, plush tufted headboards, and marble dresser vanity sets.',
  },
];

const featuredProducts = [
  {
    id: 'emperor-king-bedroom-suite',
    name: 'Emperor Royal Tufted King Bedroom Package',
    price: 185000,
    img: '/king_bedroom.png',
    badge: 'BEDROOM SUITE',
    category: 'King Bedroom Package',
    description: 'Includes a grand velvet tufted king bedframe, 2 marble-top nightstands, 6-door fitted wardrobe, and luxury dresser vanity.',
  },
  {
    id: 'z600-massage-chair',
    name: 'Z600 Britanica Zero Gravity Massage Chair',
    price: 145000,
    img: '/massage_chair.png',
    badge: 'FLAGSHIP',
    category: 'Massage Chairs',
    description: 'Equipped with zero gravity positioning, Bluetooth sound system, lumbar heating, and smart pressure sensors.',
  },
  {
    id: 'enfriador-lounge-suite',
    name: 'Enfriador 3-Piece Lounge Suite with Bar Fridge',
    price: 115000,
    img: '/hero_recliner.png',
    badge: 'BESTSELLER',
    category: 'Living Room',
    description: 'Features a built-in bar fridge, soft reclining seats, USB charging ports, and cup holders for modern entertainment spaces.',
  },
  {
    id: 'orissa-dining-set',
    name: 'Calacatta Marble 6-Seater Dining Table Set',
    price: 115000,
    img: '/marble_dining.png',
    badge: 'LUXURY DINING',
    category: 'Dining Room',
    description: 'Genuine white Calacatta marble top supported by gold stainless steel geometric pedestal base.',
  },
];

export default function Home() {
  const { setQuickViewProduct } = useShop();

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-slate-900 font-sans">

      {/* HERO BANNER — full-width, edge-to-edge */}
      <section className="relative min-h-[62vh] flex items-end overflow-hidden bg-[#0B0F17] py-12 sm:py-16">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover object-center scale-105 hero-kenburns"
          >
            <source src="/images/GF.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/65 to-[#0B0F17]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-[#0B0F17]/25" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pb-10 sm:pb-14 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/50 text-[#E8D5A3] text-[11px] font-black uppercase tracking-[0.35em] mb-4 shadow-xl">
            <Building2 className="w-4 h-4 text-[#D4AF37]" />
            <span>G O R G E O U S   F U R N I T U R E</span>
          </div>

          <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight max-w-4xl leading-none mb-3 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            YOUR DREAM
            <span className="block mt-2 italic font-serif font-light text-amber-100 text-2xl sm:text-4xl lg:text-5xl capitalize drop-shadow-md">
              Furniture that feels like a private showroom
            </span>
          </h1>

          <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl font-medium mb-7 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Imported sofa sets, king bedroom suites, and marble dining tables — styled, tested, and delivered from four premier hubs across Addis Ababa.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-9">
            <Link
              href="/bedroom"
              className="flex items-center justify-center gap-3 gold-metallic-btn px-8 py-3.5 rounded-full text-xs uppercase transition-all shadow-xl"
            >
              <span>Explore King Bedrooms</span>
              <ArrowRight className="w-4 h-4 text-[#0B0F17]" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border border-white/35 bg-white/10 text-white hover:bg-white hover:text-[#0B0F17] px-7 py-3.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase backdrop-blur-md transition-all shadow-md"
            >
              <span>Visit a Showroom</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            {[
              ['4 Hubs', 'CMC, Semit, Gerji, Betel'],
              ['Bespoke', 'Custom dimensions'],
              ['TikTok', 'Video catalog'],
              ['Warranty', 'Quality guaranteed'],
            ].map(([title, subtitle]) => (
              <div key={title} className="rounded-2xl border border-white/15 bg-black/30 backdrop-blur-md px-4 py-3">
                <p className="text-xl font-serif text-[#E8D5A3]">{title}</p>
                <p className="text-amber-100/60 text-[10px] uppercase tracking-wider mt-1">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-[#0B0F17] border-y border-[#D4AF37]/20 overflow-hidden py-3">
        <div className="marquee-track text-[#E8D5A3] text-[11px] font-semibold uppercase tracking-[0.32em]">
          {Array.from({ length: 2 }).map((_, loop) => (
            <div key={loop} className="flex items-center">
              {['CMC Flagship', 'Semit 72', 'Gerji Studio', 'Betel Hub', 'Free Delivery over ETB 50k', '2-Year Warranty', 'Bespoke Fabrics'].map((item) => (
                <span key={`${loop}-${item}`} className="px-8 flex items-center gap-3 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SHOWROOM HUBS */}
      <section className="py-16 sm:py-24 bg-[#f7f3ec]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-kicker block mb-3">Physical Showroom Network</span>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight font-serif text-slate-950">
              Visit our Addis Ababa hubs
            </h2>
            <p className="text-slate-500 text-sm mt-3 font-light leading-relaxed">
              Experience product assembly, feel fabric textures, and test our smart recliners live.
            </p>
            <div className="w-16 h-1 gold-gradient-bg mx-auto mt-5 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showroomHubs.map((hub, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#eadfcb] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2.5 bg-amber-100/70 text-[#8c6d2a] border border-amber-200/80 rounded-xl">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#9A7B4F] bg-amber-100/80 px-2.5 py-1 rounded-full border border-amber-200/80">
                      {hub.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-black font-serif text-slate-950">{hub.name}</h3>
                  <p className="text-[11px] text-[#9A7B4F] font-bold uppercase tracking-wider mt-0.5">{hub.district}</p>
                  <p className="text-xs text-slate-500 font-light leading-relaxed mt-3">{hub.address}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-amber-100 space-y-2">
                  <p className="text-[11px] text-[#9A7B4F] font-bold italic">✨ {hub.highlight}</p>
                  <div className="flex items-center justify-between">
                    <a href={`tel:${hub.phone.replace(/\s+/g, '')}`} className="text-xs font-mono font-bold text-slate-900 hover:text-[#D4AF37] transition">
                      {hub.phone}
                    </a>
                    <Link href="/contact" className="text-[10px] font-black uppercase tracking-widest text-[#9A7B4F] hover:underline">
                      Directions →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SISTER VENUE BANNER */}
      <section className="py-10 bg-[#f7f3ec]">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-amber-100/80 via-white to-amber-100/80 border border-amber-200 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-amber-50 text-[#D4AF37] border border-amber-200 rounded-2xl shrink-0">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-black text-[#9A7B4F] uppercase tracking-[0.25em] block mb-1">Sister Luxury Venue • AICC CMC</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                  Visiting Our CMC Showroom? Experience Gorgeous Restaurant
                </h3>
                <p className="text-sm text-slate-600 font-light mt-1.5 max-w-2xl leading-relaxed">
                  Located directly opposite our CMC Tsehay showroom inside AICC. Fine European fusion plates, Awaze Beef Chikina Tibs, and romantic luxury ambiance.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/251911234567?text=Hi%20Gorgeous%20Restaurant!%20I'd%20like%20to%20reserve%20a%20table."
              target="_blank"
              rel="noopener noreferrer"
              className="gold-metallic-btn px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest shrink-0 shadow-md text-center"
            >
              Explore Reservations
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORY SHOWCASE */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-kicker block mb-3">Signature Product Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-medium text-slate-950 tracking-tight font-serif">
              Core luxury collections
            </h2>
            <div className="w-16 h-1 gold-gradient-bg mx-auto mt-5 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.href} className="group flex flex-col">
                <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden bg-[#0B0F17] shadow-lg border border-amber-200/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 opacity-90 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/90 via-[#0B0F17]/20 to-transparent" />
                  {cat.badge && (
                    <span className="absolute top-4 left-4 gold-gradient-bg text-[#0B0F17] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">
                      {cat.badge}
                    </span>
                  )}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-base font-black tracking-wider uppercase group-hover:text-[#D4AF37] transition-colors">{cat.name}</h3>
                    <p className="text-xs text-amber-100/80 font-light mt-1 flex items-center justify-between">
                      <span>{cat.subtitle}</span>
                      <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BESPOKE CUSTOMIZATION STUDIO */}
      <section className="py-16 sm:py-24 bg-[#0B0F17] text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/50 text-xs font-black uppercase tracking-widest">
                <Scissors className="w-4 h-4" />
                <span>Bespoke Material & Floor Plan Service</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold gold-gradient-text-soft leading-tight">
                Tailor-Made Dimensions & Fabric Swatches
              </h2>
              <p className="text-amber-100/75 text-sm font-light leading-relaxed">
                Gorgeous Furniture is renowned across Addis Ababa for its bespoke customization. Choose exact couch dimensions, L-shape orientations, and over <strong className="text-white font-medium">50+ luxury fabric & leather color options</strong> tailored to your specific villa or apartment floor plan.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-amber-900/50 text-xs">
                {['Custom Sofa Lengths', '50+ Swatches', 'Floor Plan Fitting'].map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/251911234567?text=Hi%20Gorgeous%20Furniture!%20I'd%20like%20to%20request%20custom%20sofa%20dimensions%20and%20fabric%20swatches%20for%20my%20home."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gold-metallic-btn px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest shadow-xl"
              >
                Request Bespoke Swatches & Quote
              </a>
            </div>
            <div className="lg:w-2/5 relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
              <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover object-center scale-105 hero-kenburns"
          >
            <source src="/images/GF.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            </div>
          </div>
        </div>
      </section>

      {/* TIKTOK VIDEO CATALOG */}
      <section className="py-16 sm:py-24 bg-[#f7f3ec]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-xs font-black text-[#8c6d2a] uppercase tracking-[0.25em] flex items-center gap-2 mb-2">
                <Video className="w-4 h-4 text-[#D4AF37]" />
                <span>Digital Video Catalog</span>
              </span>
              <h2 className="text-4xl sm:text-5xl font-medium text-slate-950 tracking-tight font-serif">
                TikTok previews & new arrivals
              </h2>
            </div>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-metallic-btn px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-md"
            >
              <span>Follow TikTok Catalog</span>
              <Play className="w-3.5 h-3.5 fill-[#0B0F17]" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiktokCatalog.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl overflow-hidden border border-[#eadfcb] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-56 bg-[#0B0F17] overflow-hidden">
                  <Image
                    src={video.img}
                    alt={video.title}
                    fill
                    className="object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/60 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 bg-[#0B0F17]/90 text-[#D4AF37] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#D4AF37]/40">
                    {video.duration}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/90 flex items-center justify-center shadow-2xl hover:scale-110 transition">
                      <Play className="w-5 h-5 fill-[#0B0F17] ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-extrabold text-[#8c6d2a] uppercase tracking-wider block mb-1">{video.views} • TikTok Preview</span>
                  <h4 className="text-sm font-extrabold text-slate-950 font-serif leading-snug">{video.title}</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed mt-1.5">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-xs font-black text-[#8c6d2a] uppercase tracking-[0.25em] block mb-2">Showroom Best Sellers</span>
              <h2 className="text-4xl sm:text-5xl font-medium text-slate-950 tracking-tight font-serif">Featured luxury pieces</h2>
            </div>
            <Link
              href="/chairs"
              className="flex items-center gap-2 text-xs font-black text-slate-900 hover:text-[#D4AF37] tracking-widest uppercase transition"
            >
              <span>View All Collections</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-24 bg-[#f7f3ec]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-kicker block mb-3">Homes across Addis</span>
            <h2 className="text-4xl sm:text-5xl font-medium font-serif text-slate-950">Loved in villas, apartments & hotels</h2>
            <div className="w-16 h-1 gold-gradient-bg mx-auto mt-5 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: 'The CMC showroom let us sit, recline, and choose velvet that actually matched our living room light.', name: 'Hanna M.', place: 'Bole villa' },
              { quote: 'Our king bedroom package arrived fully coordinated — wardrobe, vanity, and nightstands felt like one design.', name: 'Yonas K.', place: 'Kazanchis apartment' },
              { quote: 'The marble dining set is the piece guests always ask about. Delivery to Gerji was careful and on time.', name: 'Selam T.', place: 'Gerji' },
            ].map((t) => (
              <blockquote key={t.name} className="bg-white p-8 rounded-2xl border border-[#eadfcb] shadow-sm flex flex-col justify-between">
                <p className="text-slate-700 font-serif text-lg leading-relaxed italic">"{t.quote}"</p>
                <p className="mt-6 pt-4 border-t border-[#eadfcb] text-xs uppercase tracking-[0.16em] text-[#8c6d2a] font-bold">
                  {t.name} · {t.place}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* MASSAGE CHAIR SPOTLIGHT */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="/massage_chair.png"
                alt="Z600 Massage Chair Ethiopia"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
            </div>
            <div className="relative z-10 p-8 sm:p-14 max-w-xl">
              <span className="text-xs font-black text-[#9A7B4F] uppercase tracking-widest flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin" style={{ animationDuration: '4s' }} />
                Full-Body Relaxation Technology
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-medium text-slate-950 mb-4">
                Z600 Britanica
                <span className="block gold-gradient-text italic font-serif">Zero Gravity Massage Chair</span>
              </h2>
              <p className="text-slate-600 text-sm font-light leading-relaxed mb-8">
                Experience the pinnacle of wellness tech in Addis Ababa. Intelligent pressure rollers, lumbar heating, bluetooth speakers, and weightless zero-gravity recline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    setQuickViewProduct({
                      id: 'z600-massage-chair',
                      name: 'Z600 Britanica Zero Gravity Massage Chair',
                      price: 145000,
                      img: '/massage_chair.png',
                      category: 'Massage Chairs',
                      description: 'Equipped with zero gravity positioning, Bluetooth sound system, lumbar heating, and smart pressure sensors.',
                    })
                  }
                  className="gold-metallic-btn px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest shadow-xl"
                >
                  Inquire & Order (ETB 145,000)
                </button>
                <a
                  href="https://wa.me/251940510000?text=Hi%20Gorgeous%20Furniture%20Ethiopia!%20I'd%20like%20to%20inquire%20about%20the%20Z600%20Massage%20Chair."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-4 rounded-full font-bold text-xs tracking-wider transition flex items-center justify-center gap-2 shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>WhatsApp (0940510000)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}