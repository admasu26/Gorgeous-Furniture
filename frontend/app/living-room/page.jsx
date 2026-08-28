'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProductCard from '../components/ProductCard';
import { useShop } from '../components/ShopContext';
import { Flame, ArrowUpDown } from 'lucide-react';

const livingProducts = [
  { id: 'enfriador-lounge-suite', name: 'Enfriador 3-Piece Lounge Suite with Bar Fridge', price: 115000, img: '/hero_recliner.png', badge: 'BESTSELLER', category: 'Lounge Suites', description: 'Includes built-in bar fridge, cup holders, reclining seats, and USB charging.' },
  { id: 'z600-massage-chair', name: 'Z600 Britanica Zero Gravity Massage Chair', price: 145000, img: '/massage_chair.png', badge: 'FLAGSHIP', category: 'Massage Chairs', description: 'Zero-gravity positioning with Bluetooth sound system & heating.' },
  { id: 'smart-power-recliner', name: 'Smart Power Motion Recliner 3-Seater Sofa', price: 95000, img: '/images/Sofa1.png', badge: 'NEW', category: 'Recliners', description: 'Electronic push-button recline with adjustable lumbar support.' },
  { id: 'modular-l-shape-sofa', name: 'Modular Corner Velvet L-Shape Sectional', price: 88000, img: '/images/Sofa2.png', badge: 'TRENDING', category: 'Sectionals', description: 'Ultra-deep seating with reversible chaise and feather-down cushions.' },
  { id: 'royal-tufted-sofa-set', name: 'Royal Velvet Tufted 3+2 Luxury Sofa Suite', price: 125000, img: '/images/Sofa3.png', badge: 'POPULAR', category: 'Lounge Suites', description: 'Hand-tufted plush velvet upholstery with stainless champagne gold accents.' },
  { id: 'modern-curved-lounge-couch', name: 'Modern Curved Bouclé Statement Sofa', price: 105000, img: '/images/Sofa4.png', badge: 'DESIGNER', category: 'Sectionals', description: 'Architectural curved silhouette in rich fabric with high-resilience foam.' },
  { id: 'executive-leather-recliner', name: 'Executive Italian Leather Power Recliner Set', price: 135000, img: '/images/Sofa5.png', badge: 'LUXURY', category: 'Recliners', description: 'Top-grain genuine leather with motorized dual footrests and console storage.' },
  { id: 'nordic-minimalist-couch', name: 'Nordic Contemporary Velvet 4-Seater Couch', price: 78000, img: '/images/Sofa6.png', badge: 'MINIMALIST', category: 'Couches', description: 'Clean lines, removable cushion covers, and reinforced solid hardwood frame.' },
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
    <main className="min-h-screen bg-[#f7f3ec] text-slate-900 font-sans pb-16">
      
      {/* HEADER BANNER (FRAMED CONTAINER LAYOUT) */}
      <section className="pt-6 sm:pt-10 px-3 sm:px-6">
        <div className="luxury-container">
          <div className="relative py-16 sm:py-24 rounded-[28px] sm:rounded-[36px] text-white text-center overflow-hidden border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(11,15,23,0.35)] bg-[#0B0F17]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/hero_recliner.png"
                alt="Living Room Lounge Suites"
                fill
                priority
                className="object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/80 via-[#0B0F17]/65 to-[#0B0F17]/85" />
            </div>

            <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8D5A3] border border-[#D4AF37]/50 text-xs font-black uppercase tracking-widest mb-4 backdrop-blur-md shadow">
                <Flame className="w-4 h-4 text-[#D4AF37]" />
                <span>Living Room & Smart Recliners</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-lg">
                Smart Recliners
                <span className="block mt-1 gold-gradient-text italic font-serif text-2xl sm:text-3xl md:text-4xl font-normal">& Luxury Lounge Suites</span>
              </h1>
              <p className="text-amber-100/90 text-xs sm:text-sm mt-4 max-w-xl mx-auto font-light leading-relaxed drop-shadow">
                Experience ultimate home comfort — bar-fridge lounges, zero-gravity massage technology, and modular velvet sectionals for your Addis Ababa home.
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
                Showing <strong className="text-[#8c6d2a] font-black">{sortedProducts.length}</strong> Living Room Pieces
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