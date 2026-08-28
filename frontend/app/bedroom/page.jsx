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
    img: '/images/bed2.png',
    badge: 'NEW ARRIVAL',
    category: 'King Bedroom Package',
    description: 'Floating platform king bed with built-in ambient LED headboard lighting, wireless phone chargers, and dual nightstands.',
  },
  {
    id: 'bespoke-leather-bedroom-set',
    name: 'Bespoke Genuine Leather Executive Bedroom Set',
    price: 195000,
    img: '/images/bed3.png',
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
    <main className="min-h-screen bg-[#f7f3ec] text-slate-900 font-sans pb-16">
      
      {/* HEADER BANNER (FRAMED CONTAINER LAYOUT) */}
      <section>
        <div className="w-full">
          <div className="relative min-h-screen flex items-center text-white text-center overflow-hidden bg-[#0B0F17]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/bed1.png"
                alt="Bedroom Packages Header"
                fill
                priority
                className="object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/80 via-[#0B0F17]/65 to-[#0B0F17]/85" />
            </div>

            <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8D5A3] border border-[#D4AF37]/50 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-4 backdrop-blur-md shadow">
                <BedDouble className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]" />
                <span>King-Sized Bedroom Packages</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-lg">
                Luxury Bedroom Suites
                <span className="block mt-1 gold-gradient-text italic font-serif text-2xl sm:text-3xl md:text-4xl font-normal">&amp; Bespoke Packages</span>
              </h1>
              <p className="text-amber-100/90 text-xs sm:text-sm mt-4 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
                Imported and crafted high-end king bedframes, fitted wardrobes, and matching vanity dressers.
                Custom sizes and 50+ fabric colors across our 4 Addis Ababa showrooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BESPOKE CALLOUT STRIP (CONTAINER WRAPPER) */}
      <section className="py-6 px-3 sm:px-6">
        <div className="luxury-container">
          <div className="rounded-2xl bg-amber-50/70 border border-amber-300/60 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs shadow-xs">
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-[#8c6d2a]" />
              <div>
                <span className="font-black text-[#8c6d2a] uppercase tracking-wider block">Bespoke Bed Dimensions & Fabrics</span>
                <span className="text-slate-600 font-medium">Custom fit for your master bedroom floor plan in Addis Ababa.</span>
              </div>
            </div>
            <a
              href="https://wa.me/251911234567?text=Hi%20Gorgeous%20Furniture!%20I'd%20like%20to%20customize%20a%20King-Sized%20Bedroom%20Package."
              target="_blank"
              rel="noopener noreferrer"
              className="gold-metallic-btn px-5 py-2.5 rounded-full font-black text-[11px] uppercase tracking-wider shrink-0 shadow-md"
            >
              Order Custom Dimensions
            </a>
          </div>
        </div>
      </section>

      {/* FILTER & PRODUCT GRID (CONTAINER PANEL) */}
      <section className="py-6 sm:py-10">
        <div className="luxury-container">
          <div className="container-panel p-6 sm:p-10 md:p-12">
            <div className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-amber-200/60 gap-4 mb-8">
              <p className="text-xs font-black text-slate-700 uppercase tracking-widest">
                Showing <strong className="text-[#8c6d2a] font-black">{sortedProducts.length}</strong> Bedroom Suites
              </p>

              <div className="flex items-center gap-3">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Sort By:</label>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="bg-[#f7f3ec] border border-amber-200/90 rounded-full px-5 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#D4AF37] shadow-xs"
                >
                  <option value="DEFAULT">Featured / Recommended</option>
                  <option value="LOW_HIGH">Price: Low to High</option>
                  <option value="HIGH_LOW">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
