'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProductCard from '../components/ProductCard';
import { useShop } from '../components/ShopContext';
import { Flame, ArrowUpDown } from 'lucide-react';

const livingProducts = [
  { id: 'enfriador-lounge-suite', name: 'Enfriador 3-Piece Lounge Suite with Bar Fridge', price: 115000, img: '/hero_recliner.png', badge: 'BESTSELLER', category: 'Lounge Suites', description: 'Includes built-in bar fridge, cup holders, reclining seats, and USB charging.' },
  { id: 'z600-massage-chair', name: 'Z600 Britanica Zero Gravity Massage Chair', price: 145000, img: '/massage_chair.png', badge: 'FLAGSHIP', category: 'Massage Chairs', description: 'Zero-gravity positioning with Bluetooth sound system & heating.' },
  { id: 'smart-power-recliner', name: 'Smart Power Motion Recliner 3-Seater Sofa', price: 95000, img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800', badge: 'NEW', category: 'Recliners', description: 'Electronic push-button recline with adjustable lumbar support.' },
  { id: 'modular-l-shape-sofa', name: 'Modular Corner Velvet L-Shape Sectional', price: 88000, img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800', badge: 'TRENDING', category: 'Sectionals', description: 'Ultra-deep seating with reversible chaise and feather-down cushions.' },
];

export default function LivingRoomPage() {
  const [sortOrder, setSortOrder] = useState('DEFAULT');
  const { searchQuery } = useShop();

  const filteredProducts = livingProducts.filter((p) =>
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
            src="/hero_recliner.png"
            alt="Living Room Lounge Suites"
            fill
            priority
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/70 via-[#0B0F17]/55 to-[#0B0F17]/75" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/60 text-xs font-black uppercase tracking-widest mb-5 backdrop-blur-sm shadow">
            <Flame className="w-4 h-4 text-[#D4AF37]" />
            <span>Living Room & Smart Recliners</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-lg">
            Smart Recliners
            <span className="block mt-1 gold-gradient-text italic font-serif text-3xl sm:text-4xl font-normal">& Luxury Lounge Suites</span>
          </h1>
          <p className="text-amber-100/90 text-sm mt-4 max-w-xl mx-auto font-light leading-relaxed drop-shadow">
            Experience ultimate home comfort — bar-fridge lounges, zero-gravity massage technology, and modular velvet sectionals for your Addis Ababa home.
          </p>
        </div>
      </section>

      {/* FILTER & PRODUCT GRID */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center pb-8 border-b border-amber-200/60 gap-4 mb-8">
          <p className="text-xs font-black text-slate-700 uppercase tracking-widest">
            Showing <strong className="text-[#D4AF37] font-black">{sortedProducts.length}</strong> Living Room Pieces
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