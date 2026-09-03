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
      
      {/* HERO BANNER SECTION (BOLD WHITE DISPLAY) */}
      <section className="relative overflow-hidden bg-[#0B0F17] py-16 sm:py-24 md:py-28 text-center text-white">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/images/Sofa1.png"
            alt="Luxury Living Room Lounge Furniture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-80 scale-100 transition-all duration-700 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/60 to-[#0B0F17]/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 text-[#E8D5A3] border border-[#D4AF37]/60 text-[11px] font-black uppercase tracking-[0.35em] backdrop-blur-md shadow-2xl mb-3">
            <Flame className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            <span>L I V I N G   R O O M</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-none my-2">
            YOUR DREAM
            <span className="block mt-2 font-serif text-3xl sm:text-5xl md:text-6xl italic font-light text-amber-100 drop-shadow-md capitalize">
              Smart Recliners &amp; Lounge Suites
            </span>
          </h1>

          <p className="text-white text-xs sm:text-base md:text-lg mt-3 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Experience ultimate home comfort — bar-fridge lounges, zero-gravity massage technology, and modular velvet sectionals designed for elegant Addis Ababa residences.
          </p>
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