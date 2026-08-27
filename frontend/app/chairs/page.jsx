'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProductCard from '../components/ProductCard';
import { useShop } from '../components/ShopContext';
import { SlidersHorizontal, Armchair, ArrowUpDown } from 'lucide-react';

const initialProducts = [
  { id: 'orissa-chair', name: 'Orissa Velvet Dining Chair (Set of 2)', price: 18500, img: '/marble_dining.png', badge: 'POPULAR', category: 'Dining Chairs', description: 'Curved velvet backrest with stainless steel legs.' },
  { id: 'velvet-bar-stool', name: 'Velvet Counter Bar Stool - Gold Legs', price: 12500, img: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800', badge: 'BESTSELLER', category: 'Bar Stools', description: 'Ergonomic high-back bar stool with polished gold chrome frame.' },
  { id: 'shell-occasional-chair', name: 'Shell Velvet Occasional Armchair', price: 24500, img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800', badge: 'NEW', category: 'Occasional Chairs', description: 'Scalloped backshell design in deep emerald or plush grey.' },
  { id: 'woven-patio-chair-set', name: 'Woven Outdoor Patio Chair Set', price: 28500, img: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=800', badge: 'PATIO', category: 'Outdoor Seating', description: 'Weather-resistant synthetic rattan dining chairs with memory foam cushions.' },
  { id: 'nordic-armchair', name: 'Modern Nordic Oak Armchair', price: 19500, img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800', badge: 'HOT', category: 'Lounge Chairs', description: 'Minimalist solid oak wood frame with woven beige upholstery.' },
  { id: 'swivel-vanity-chair', name: 'Luxury Swivel Velvet Vanity Chair', price: 16500, img: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80&w=800', badge: 'TRENDING', category: 'Vanity Seating', description: '360-degree smooth swivel mechanism with gold base.' },
  { id: 'industrial-counter-stool', name: 'Industrial Leather Counter Stool', price: 11500, img: 'https://images.unsplash.com/photo-1538688549343-4f999966144e?auto=format&fit=crop&q=80&w=800', badge: 'CLASSIC', category: 'Bar Stools', description: 'Rustic dark leather padded seat on matte black steel legs.' },
  { id: 'boucle-lounge-chair', name: 'Bouclé Cozy Accent Lounge Chair', price: 32500, img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800', badge: 'LUXURY', category: 'Lounge Chairs', description: 'Plush cream bouclé textured cloud chair.' },
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
    <main className="min-h-screen bg-[#f7f3ec] text-slate-900">
      
      {/* HEADER */}
      <section className="relative py-20 sm:py-32 text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/chairs_header.jpg"
            alt="Designer Chairs & Bar Stools Header"
            fill
            priority
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/70 via-[#0B0F17]/55 to-[#0B0F17]/75" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/60 text-xs font-black uppercase tracking-widest mb-5 backdrop-blur-sm shadow">
            <Armchair className="w-4 h-4 text-[#D4AF37]" />
            <span>Luxury Seating Selections</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-lg">
            Designer Chairs
            <span className="block mt-1 gold-gradient-text italic font-serif text-2xl sm:text-3xl md:text-4xl font-normal">& Premium Bar Stools</span>
          </h1>
          <p className="text-amber-100/90 text-sm mt-4 max-w-xl mx-auto font-light leading-relaxed drop-shadow">
            From plush velvet bar stools and vanity seating to ergonomically crafted outdoor patio armchairs — curated for Addis Ababa's finest interiors.
          </p>
        </div>
      </section>

      {/* FILTER & PRODUCT GRID */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center pb-8 border-b border-amber-200/60 gap-4 mb-8">
          <p className="text-xs font-black text-slate-700 uppercase tracking-widest">
            Showing <strong className="text-[#D4AF37] font-black">{sortedProducts.length}</strong> Designer Chairs
          </p>

          <div className="flex items-center gap-3">
            <ArrowUpDown className="w-4 h-4 text-[#D4AF37]" />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-white border border-amber-200/80 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] shadow-xs"
            >
              <option value="DEFAULT">Sort by: Featured</option>
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