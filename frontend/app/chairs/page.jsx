'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProductCard from '../components/ProductCard';
import { useShop } from '../components/ShopContext';
import { SlidersHorizontal, Armchair, ArrowUpDown } from 'lucide-react';

const initialProducts = [
  { id: 'orissa-chair', name: 'Orissa Velvet Dining Chair (Set of 2)', price: 18500, img: '/images/Chair1.png', badge: 'POPULAR', category: 'Dining Chairs', description: 'Curved velvet backrest with stainless steel legs.' },
  { id: 'velvet-bar-stool', name: 'Velvet Counter Bar Stool - Gold Legs', price: 12500, img: '/images/Chair2.png', badge: 'BESTSELLER', category: 'Bar Stools', description: 'Ergonomic high-back bar stool with polished gold chrome frame.' },
  { id: 'shell-occasional-chair', name: 'Shell Velvet Occasional Armchair', price: 24500, img: '/images/Chair1.png', badge: 'NEW', category: 'Occasional Chairs', description: 'Scalloped backshell design in deep emerald or plush grey.' },
  { id: 'woven-patio-chair-set', name: 'Woven Outdoor Patio Chair Set', price: 28500, img: '/images/Chair2.png', badge: 'PATIO', category: 'Outdoor Seating', description: 'Weather-resistant synthetic rattan dining chairs with memory foam cushions.' },
  { id: 'nordic-armchair', name: 'Modern Nordic Oak Armchair', price: 19500, img: '/images/Chair1.png', badge: 'HOT', category: 'Lounge Chairs', description: 'Minimalist solid oak wood frame with woven beige upholstery.' },
  { id: 'swivel-vanity-chair', name: 'Luxury Swivel Velvet Vanity Chair', price: 16500, img: '/images/Chair2.png', badge: 'TRENDING', category: 'Vanity Seating', description: '360-degree smooth swivel mechanism with gold base.' },
  { id: 'industrial-counter-stool', name: 'Industrial Leather Counter Stool', price: 11500, img: '/images/Chair1.png', badge: 'CLASSIC', category: 'Bar Stools', description: 'Rustic dark leather padded seat on matte black steel legs.' },
  { id: 'boucle-lounge-chair', name: 'Bouclé Cozy Accent Lounge Chair', price: 32500, img: '/images/Chair2.png', badge: 'LUXURY', category: 'Lounge Chairs', description: 'Plush cream bouclé textured cloud chair.' },
];

export default function ChairsPage() {
  const [sortOrder, setSortOrder] = useState('DEFAULT');
  const { searchQuery } = useShop();

  const filteredProducts = initialProducts.filter((p) =>
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
      <section className="pt-6 sm:pt-10 px-3 sm:px-6">
        <div className="luxury-container">
          <div className="relative py-16 sm:py-24 rounded-[28px] sm:rounded-[36px] text-white text-center overflow-hidden border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(11,15,23,0.35)] bg-[#0B0F17]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/chairs_header.jpg"
                alt="Designer Chairs & Bar Stools Header"
                fill
                priority
                className="object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/80 via-[#0B0F17]/65 to-[#0B0F17]/85" />
            </div>

            <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8D5A3] border border-[#D4AF37]/50 text-xs font-black uppercase tracking-widest mb-4 backdrop-blur-md shadow">
                <Armchair className="w-4 h-4 text-[#D4AF37]" />
                <span>Luxury Seating Selections</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-lg">
                Designer Chairs
                <span className="block mt-1 gold-gradient-text italic font-serif text-2xl sm:text-3xl md:text-4xl font-normal">& Premium Bar Stools</span>
              </h1>
              <p className="text-amber-100/90 text-xs sm:text-sm mt-4 max-w-xl mx-auto font-light leading-relaxed drop-shadow">
                From plush velvet bar stools and vanity seating to ergonomically crafted outdoor patio armchairs — curated for Addis Ababa's finest interiors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & PRODUCT GRID (CONTAINER PANEL) */}
      <section className="py-8 sm:py-12">
        <div className="luxury-container">
          <div className="container-panel p-6 sm:p-10 md:p-12">
            <div className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-amber-200/60 gap-4 mb-8">
              <p className="text-xs font-black text-slate-700 uppercase tracking-widest">
                Showing <strong className="text-[#8c6d2a] font-black">{sortedProducts.length}</strong> Designer Chairs
              </p>

              <div className="flex items-center gap-3">
                <ArrowUpDown className="w-4 h-4 text-[#D4AF37]" />
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="bg-[#f7f3ec] border border-amber-200/90 rounded-full px-5 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] shadow-xs"
                >
                  <option value="DEFAULT">Sort by: Featured</option>
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