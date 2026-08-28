'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import ProductCard from '../components/ProductCard';
import { useShop } from '../components/ShopContext';
import { Flame, ArrowUpDown, SlidersHorizontal } from 'lucide-react';

const LIVING_PRODUCTS = [
  {
    id: 'enfriador-lounge-suite',
    name: 'Enfriador 3-Piece Lounge Suite with Bar Fridge',
    price: 115000,
    img: '/hero_recliner.png',
    badge: 'BESTSELLER',
    category: 'Lounge Suites',
    description: 'Includes built-in bar fridge, cup holders, reclining seats, and USB charging.',
  },
  {
    id: 'z600-massage-chair',
    name: 'Z600 Britanica Zero Gravity Massage Chair',
    price: 145000,
    img: '/massage_chair.png',
    badge: 'FLAGSHIP',
    category: 'Massage Chairs',
    description: 'Zero-gravity positioning with Bluetooth sound system & heating.',
  },
  {
    id: 'smart-power-recliner',
    name: 'Smart Power Motion Recliner 3-Seater Sofa',
    price: 95000,
    img: '/images/Sofa3.png',
    badge: 'NEW',
    category: 'Recliners',
    description: 'Electronic push-button recline with adjustable lumbar support.',
  },
  {
    id: 'modular-l-shape-sofa',
    name: 'Modular Corner Velvet L-Shape Sectional',
    price: 88000,
    img: '/images/Sofa4.png',
    badge: 'TRENDING',
    category: 'Sectionals',
    description: 'Ultra-deep seating with reversible chaise and feather-down cushions.',
  },
];

export default function LivingRoomPage() {
  const [sortOrder, setSortOrder] = useState('DEFAULT');
  const { searchQuery } = useShop();

  // Memoize search filtering and sorting logic
  const sortedProducts = useMemo(() => {
    const query = searchQuery ? searchQuery.toLowerCase().trim() : '';

    const filtered = LIVING_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );

    return [...filtered].sort((a, b) => {
      if (sortOrder === 'LOW_HIGH') return a.price - b.price;
      if (sortOrder === 'HIGH_LOW') return b.price - a.price;
      return 0;
    });
  }, [searchQuery, sortOrder]);

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-slate-900 font-sans pb-24">
      
      {/* HERO BANNER SECTION (BRIGHT & CLEAR FURNITURE DISPLAY) */}
      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 md:py-28">
        
        {/* Background Image & Lightened Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/images/Sofa1.png"
            alt="Luxury Living Room Lounge Furniture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85 scale-100 transition-all duration-700"
          />
          {/* Subtle vignette and bottom gradient to keep text readable while showing furniture clearly */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/30 to-[#0B0F17]/15" />
        </div>

        {/* Hero Text Box */}
        <div className="relative z-10 luxury-container px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 text-[#E8D5A3] border border-[#D4AF37]/60 text-[11px] font-extrabold uppercase tracking-widest backdrop-blur-md shadow-lg mb-4">
              <Flame className="w-4 h-4 text-[#D4AF37] animate-pulse" />
              <span>Living Room & Smart Recliners</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-md leading-tight">
              Smart Recliners
              <span className="block mt-1 gold-gradient-text italic font-serif text-2xl sm:text-4xl md:text-5xl font-normal">
                & Luxury Lounge Suites
              </span>
            </h1>

            {/* Description */}
            <p className="text-amber-50 text-xs sm:text-base mt-4 max-w-xl mx-auto font-normal leading-relaxed tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Experience ultimate home comfort — bar-fridge lounges, zero-gravity massage technology, and modular velvet sectionals designed for elegant Addis Ababa residences.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER & PRODUCT GRID SECTION */}
      <section className="py-8 sm:py-12">
        <div className="luxury-container px-4 sm:px-6">
          
          {/* Container Panel */}
          <div className="bg-white/80 backdrop-blur-md border border-[#e4d8bf] rounded-2xl p-5 sm:p-8 md:p-10 shadow-[0_10px_30px_rgba(26,24,20,0.04)]">
            
            {/* Filter and Count Row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-[#e4d8bf]/60 gap-4 mb-8">
              
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#8c6d2a]" />
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Showing <span className="text-[#8c6d2a] font-black">{sortedProducts.length}</span> Living Room Pieces
                </p>
              </div>

              {/* Sort Selector */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <label htmlFor="sort-order-select" className="sr-only">
                  Sort Products
                </label>
                <div className="relative flex items-center w-full sm:w-auto">
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#8c6d2a] absolute left-3.5 pointer-events-none" />
                  <select
                    id="sort-order-select"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full sm:w-auto bg-[#f7f3ec] border border-[#d9ccb2] rounded-full pl-9 pr-8 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition shadow-xs cursor-pointer appearance-none"
                  >
                    <option value="DEFAULT">Sort by: Featured</option>
                    <option value="LOW_HIGH">Price: Low to High</option>
                    <option value="HIGH_LOW">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Cards Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* Search Empty State */
              <div className="py-16 text-center">
                <p className="text-base font-serif text-slate-700">No living room products match your search query.</p>
                <p className="text-xs text-slate-500 mt-1">Try resetting your search query in the header search bar.</p>
              </div>
            )}

          </div>
        </div>
      </section>

    </main>
  );
}