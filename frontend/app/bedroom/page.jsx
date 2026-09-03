'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProductCard from '../components/ProductCard';
import { useShop } from '../components/ShopContext';
import { BEDROOM_PRODUCTS as bedroomProducts } from '../utils/products';
import { Sparkles, BedDouble, ShieldCheck, Truck, Palette } from 'lucide-react';



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
      
      {/* HEADER BANNER (BOLD WHITE DISPLAY) */}
      <section className="relative overflow-hidden bg-[#0B0F17] py-16 sm:py-24 md:py-28 text-center text-white">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/images/bed1.png"
            alt="Bedroom Packages Header"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-80 scale-100 transition-all duration-700 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/60 to-[#0B0F17]/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 text-[#E8D5A3] border border-[#D4AF37]/60 text-[11px] font-black uppercase tracking-[0.35em] backdrop-blur-md shadow-2xl mb-3">
            <BedDouble className="w-4 h-4 text-[#D4AF37]" />
            <span>B E D R O O M   S U I T E S</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-none my-2">
            ROYAL SLEEP
            <span className="block mt-2 font-serif text-3xl sm:text-5xl md:text-6xl italic font-light text-amber-100 drop-shadow-md capitalize">
              Luxury Beds &amp; Bespoke Packages
            </span>
          </h1>

          <p className="text-white text-xs sm:text-base md:text-lg mt-3 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Imported and crafted high-end king bedframes, fitted wardrobes, and matching vanity dressers. Custom sizes and 50+ fabric colors across our 4 Addis Ababa showrooms.
          </p>
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
