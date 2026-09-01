'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import ProductCard from '../components/ProductCard';
import { useShop } from '../components/ShopContext';
import { ArrowUpDown, Flame, SlidersHorizontal } from 'lucide-react';

const DINING_PRODUCTS = [
  {
    id: 'royal-oval-table',
    name: 'Royal Oval Dining Table',
    price: 168000,
    img: '/images/Table1.png',
    badge: 'BESTSELLER',
    category: 'Dining Sets',
    description: 'Statement oval centerpiece finished in warm walnut with luxe seating comfort.',
  },
  {
    id: 'harbor-extension-table',
    name: 'Harbor 8-Seater Dining Table',
    price: 197000,
    img: '/images/Table2.png',
    badge: 'PREMIUM',
    category: 'Dining Tables',
    description: 'Extended family-ready dining experience with premium solid wood detailing.',
  },
  {
    id: 'elegance-dining-suite',
    name: 'Elegance Dining Suite',
    price: 139000,
    img: '/images/Dinning%20table%201.png',
    badge: 'NEW',
    category: 'Dining Suites',
    description: 'Sophisticated mix of soft curves and modern comfort for upscale homes.',
  },
  {
    id: 'heritage-wood-chair-set',
    name: 'Heritage Wood Chair Set',
    price: 84000,
    img: '/images/Dinning%20table%202.png',
    badge: 'TRENDING',
    category: 'Dining Chairs',
    description: 'Hand-finished hardwood chairs crafted for elegant daily dining.',
  },
];

export default function DiningRoomPage() {
  const [sortOrder, setSortOrder] = useState('DEFAULT');
  const { searchQuery } = useShop();

  const sortedProducts = useMemo(() => {
    const query = searchQuery ? searchQuery.toLowerCase().trim() : '';

    const filtered = DINING_PRODUCTS.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    return [...filtered].sort((a, b) => {
      if (sortOrder === 'LOW_HIGH') return a.price - b.price;
      if (sortOrder === 'HIGH_LOW') return b.price - a.price;
      return 0;
    });
  }, [searchQuery, sortOrder]);

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-slate-900 font-sans pb-24">
      <section className="relative overflow-hidden bg-slate-950 min-h-[90vh]">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/images/Table1.png"
            alt="Luxury dining room furniture"
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover object-center opacity-100 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/0 to-[#0B0F17]/5" />
        </div>

        <div className="relative z-10 flex min-h-[90vh] items-center justify-center px-4 sm:px-6">
          <div className="max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/60 bg-slate-900/60 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#E8D5A3] backdrop-blur-md shadow-lg">
              <Flame className="h-4 w-4 text-[#D4AF37] animate-pulse" />
              <span>Dining Room & Signature Tables</span>
            </div>

            <h1 className="text-4xl font-serif font-bold tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl">
              Fine Dining
              <span className="mt-2 block gold-gradient-text italic font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal">
                Reimagined in Luxury
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-amber-50/90 sm:text-base md:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.75)]">
              Experience beautifully crafted dining tables, elegant seating, and premium statement pieces designed for modern Addis Ababa homes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="luxury-container px-4 sm:px-6">
          <div className="rounded-2xl border border-[#e4d8bf] bg-white/80 p-5 shadow-[0_10px_30px_rgba(26,24,20,0.04)] backdrop-blur-md sm:p-8 md:p-10">
            <div className="mb-8 flex flex-col gap-4 border-b border-[#e4d8bf]/60 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-[#8c6d2a]" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-700">
                  Showing <span className="text-[#8c6d2a]">{sortedProducts.length}</span> Dining Room Pieces
                </p>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <label htmlFor="sort-order-select" className="sr-only">
                  Sort Products
                </label>
                <div className="relative flex items-center w-full sm:w-auto">
                  <ArrowUpDown className="pointer-events-none absolute left-3.5 h-3.5 w-3.5 text-[#8c6d2a]" />
                  <select
                    id="sort-order-select"
                    value={sortOrder}
                    onChange={(event) => setSortOrder(event.target.value)}
                    className="w-full appearance-none rounded-full border border-[#d9ccb2] bg-[#f7f3ec] py-2.5 pl-9 pr-8 text-xs font-bold text-slate-900 shadow-xs transition focus:border-[#c9a227] focus:outline-none focus:ring-2 focus:ring-[#c9a227]/20 sm:w-auto"
                  >
                    <option value="DEFAULT">Sort by: Featured</option>
                    <option value="LOW_HIGH">Price: Low to High</option>
                    <option value="HIGH_LOW">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="text-base font-serif text-slate-700">No dining room products match your search query.</p>
                <p className="mt-1 text-xs text-slate-500">Try resetting your search query in the header search bar.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}