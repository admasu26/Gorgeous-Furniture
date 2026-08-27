'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProductCard from '../components/ProductCard';
import { useShop } from '../components/ShopContext';
import { Sparkles, BedDouble, ShieldCheck, Truck, Palette } from 'lucide-react';

const bedroomProducts = [
  {
    id: 'emperor-king-bedroom-suite',
    name: 'Emperor Royal Tufted King Bedroom Package',
    price: 185000,
    img: '/king_bedroom.png',
    badge: 'FLAGSHIP',
    category: 'King Bedroom Package',
    description: 'Includes a grand velvet tufted king bedframe, 2 marble-top nightstands, 6-door fitted wardrobe, and luxury dresser vanity.',
  },
  {
    id: 'nordic-velvet-bedroom-set',
    name: 'Nordic Velvet King Bed & Wardrobe Package',
    price: 165000,
    img: '/king_bedroom.png',
    badge: 'BESTSELLER',
    category: 'King Bedroom Package',
    description: 'Ergonomic plush wingback king bedframe with matching 4-drawer dresser and soft-closing bedside tables.',
  },
  {
    id: 'modern-floating-bed-package',
    name: 'Modern Ambient LED Floating King Bed Suite',
    price: 155000,
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800',
    badge: 'NEW ARRIVAL',
    category: 'King Bedroom Package',
    description: 'Floating platform king bed with built-in ambient LED headboard lighting, wireless phone chargers, and dual nightstands.',
  },
  {
    id: 'bespoke-leather-bedroom-set',
    name: 'Bespoke Genuine Leather Executive Bedroom Set',
    price: 195000,
    img: 'https://images.unsplash.com/photo-1540518614846-7ede433c517a?auto=format&fit=crop&q=80&w=800',
    badge: 'CUSTOMIZABLE',
    category: 'King Bedroom Package',
    description: 'Upholstered in Italian grain leather with solid oak frame, custom mattress support, and full vanity mirror.',
  },
];

export default function BedroomPage() {
  const [sortOrder, setSortOrder] = useState('DEFAULT');
  const { searchQuery } = useShop();

  const filteredProducts = bedroomProducts.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'LOW_HIGH') return a.price - b.price;
    if (sortOrder === 'HIGH_LOW') return b.price - a.price;
    return 0;
  });

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-slate-900 font-sans">
      
      {/* HEADER */}
      <section className="relative py-20 sm:py-32 text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/king_bedroom.png"
            alt="Bedroom Packages Header"
            fill
            priority
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/70 via-[#0B0F17]/55 to-[#0B0F17]/75" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/60 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-4 sm:mb-5 backdrop-blur-sm shadow">
            <BedDouble className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]" />
            <span>King-Sized Bedroom Packages</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-lg">
            Luxury Bedroom Suites
            <span className="block mt-1 gold-gradient-text italic font-serif text-2xl sm:text-3xl md:text-4xl font-normal">&amp; Bespoke Packages</span>
          </h1>
          <p className="text-amber-100/90 text-sm mt-4 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
            Imported and crafted high-end king bedframes, fitted wardrobes, and matching vanity dressers.
            Custom sizes and 50+ fabric colors across our 4 Addis Ababa showrooms.
          </p>
        </div>
      </section>

      {/* BESPOKE CUSTOMIZATION CALLOUT STRIP */}
      <section className="bg-amber-50/60 text-slate-900 py-6 border-b border-amber-200/80">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Palette className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <span className="font-black text-[#9A7B4F] uppercase tracking-wider block">Bespoke Bed Dimensions & Fabrics</span>
              <span className="text-slate-600 font-medium">Custom fit for your master bedroom floor plan in Addis Ababa.</span>
            </div>
          </div>
          <a
            href="https://wa.me/251911234567?text=Hi%20Gorgeous%20Furniture!%20I'd%20like%20to%20customize%20a%20King-Sized%20Bedroom%20Package."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-metallic-btn px-5 py-2.5 rounded-xl font-black text-[11px] uppercase tracking-wider shrink-0 shadow-md"
          >
            Order Custom Dimensions
          </a>
        </div>
      </section>

      {/* FILTER & PRODUCT GRID */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center pb-8 border-b border-amber-200/60 gap-4 mb-8">
          <p className="text-xs font-black text-slate-700 uppercase tracking-widest">
            Showing <strong className="text-[#D4AF37] font-black">{sortedProducts.length}</strong> Bedroom Suites
          </p>

          <div className="flex items-center gap-3">
            <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Sort By:</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-white border border-amber-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#D4AF37] shadow-sm"
            >
              <option value="DEFAULT">Featured / Recommended</option>
              <option value="LOW_HIGH">Price: Low to High</option>
              <option value="HIGH_LOW">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </main>
  );
}
