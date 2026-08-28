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

  // Memoize filtered and sorted list to optimize render cycles
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
    <main className="min-h-screen bg-[#f7f3ec] text-slate-900 font-sans pb-20">
      
      {/* HERO BANNER SECTION (BRIGHT & CLEAR - NO DARK OVERLAY) */}
      <section className="relative overflow-hidden bg-[#f7f3ec] py-16 sm:py-24 md:py-32 border-b border-[#e4d8bf]">
        {/* Full Clarity Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/images/Sofa1.png"
            alt="Luxury Living Room Furniture Showroom"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-100 scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Subtle light gradient to keep text crisp against bright images */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7f3ec] via-[#f7f3ec]/40 to-transparent" />
        </div>

        {/* Banner Content Container */}
        <div className="relative z-10 luxury-container px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-[#8c6d2a] border border-[#D4AF37]/50 text-[11px] font-extrabold uppercase tracking-widest backdrop-blur-md shadow-md mb-6">
              <Flame className="w-4 h-4 text-[#D4AF37] animate-pulse" />
              <span>Living Room & Smart Recliners</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-slate-950 drop-shadow-xs leading-tight">
              Smart Recliners
              <span className="block mt-2 text-[#8c6d2a] italic font-serif text-2xl sm:text-4xl md:text-5xl font-normal">
                & Luxury Lounge Suites
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-800 text-xs sm:text-base mt-5 max-w-xl mx-auto font-medium leading-relaxed tracking-wide drop-shadow-xs">
              Experience ultimate home comfort — bar-fridge lounges, zero-gravity massage technology, and modular velvet sectionals designed for elegant Addis Ababa residences.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER & PRODUCT GRID SECTION */}
      <section className="py-10 sm:py-14">
        <div className="luxury-container px-4 sm:px-6">
          
          {/* Outer Glass Card Wrapper */}
          <div className="bg-white/70 backdrop-blur-md border border-[#e4d8bf] rounded-2xl p-5 sm:p-8 md:p-10 shadow-[0_10px_35px_rgba(26,24,20,0.04)]">
            
            {/* Action Bar / Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-[#e4d8bf]/60 gap-4 mb-8">
              
              {/* Product Counter */}
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#8c6d2a]" />
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Showing <span className="text-[#8c6d2a] font-black">{sortedProducts.length}</span> Living Room Pieces
                </p>
              </div>

              {/* Sorting Selection Dropdown */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <label htmlFor="sort-select" className="sr-only">
                  Sort Products
                </label>
                <div className="relative flex items-center w-full sm:w-auto">
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#8c6d2a] absolute left-3.5 pointer-events-none" />
                  <select
                    id="sort-select"
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

            {/* Product Cards Layout Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* Empty State when search returns no matches */
              <div className="py-16 text-center">
                <p className="text-base font-serif text-slate-700">No living room products match your search query.</p>
                <p className="text-xs text-slate-500 mt-1">Try resetting your search criteria in the navigation bar.</p>
              </div>
            )}

          </div>
        </div>
      </section>

    </main>
  );
}