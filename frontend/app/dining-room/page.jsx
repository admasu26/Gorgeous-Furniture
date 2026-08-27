'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProductCard from '../components/ProductCard';
import { useShop } from '../components/ShopContext';
import { Sparkles, ArrowUpDown } from 'lucide-react';

const diningProducts = [
  { id: 'marble-dining-set-6', name: 'Calacatta Marble 6-Seater Dining Table Set', price: 115000, img: '/marble_dining.png', badge: 'FLAGSHIP', category: 'Dining Tables', description: 'Genuine white Calacatta marble top supported by gold stainless steel geometric pedestal base.' },
  { id: 'orissa-dining-suite', name: 'Orissa Velvet 8-Piece Luxury Dining Suite', price: 135000, img: '/marble_dining.png', badge: 'BESTSELLER', category: 'Dining Suites', description: 'Includes expandable luxury dining table and 8 velvet upholstered Orissa dining armchairs.' },
  { id: 'italian-ceramic-table', name: 'Modern Italian Sintered Stone Dining Table', price: 85000, img: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800', badge: 'NEW', category: 'Dining Tables', description: 'Heat and scratch-resistant sintered ceramic tabletop with matte black steel spider legs.' },
  { id: 'oak-wood-dining-table', name: 'Solid Natural Oak Wood 6-Seater Table', price: 75000, img: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&q=80&w=800', badge: 'CLASSIC', category: 'Wood Dining', description: 'Sustainably harvested solid oak wood with hand-rubbed organic oil finish.' },
];

export default function DiningRoomPage() {
  const [sortOrder, setSortOrder] = useState('DEFAULT');
  const { searchQuery } = useShop();

  const filteredProducts = diningProducts.filter((p) =>
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
      <section className="relative py-32 text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/marble_dining.png"
            alt="Dining Room Tables & Suites Header"
            fill
            priority
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/70 via-[#0B0F17]/55 to-[#0B0F17]/75" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/60 text-xs font-black uppercase tracking-widest mb-5 backdrop-blur-sm shadow">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Grand Dining Collections</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-lg">
            Luxury Dining Tables
            <span className="block mt-1 gold-gradient-text italic font-serif text-3xl sm:text-4xl font-normal">& Marble Suites</span>
          </h1>
          <p className="text-amber-100/90 text-sm mt-4 max-w-xl mx-auto font-light leading-relaxed drop-shadow">
            Transform your dining space with sintered stone marble tables, velvet seating, and solid oak craftsman suites — delivered across Addis Ababa.
          </p>
        </div>
      </section>

      {/* FILTER & PRODUCT GRID */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center pb-8 border-b border-amber-200/60 gap-4 mb-8">
          <p className="text-xs font-black text-slate-700 uppercase tracking-widest">
            Showing <strong className="text-[#D4AF37] font-black">{sortedProducts.length}</strong> Dining Room Pieces
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