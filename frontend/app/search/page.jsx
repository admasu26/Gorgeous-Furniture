'use client';

import React, { useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ALL_PRODUCTS } from '../utils/products';
import { useShop } from '../components/ShopContext';
import ProductCard from '../components/ProductCard';
import { Search, PackageOpen, ArrowRight } from 'lucide-react';

const CATEGORY_LINKS = [
  { label: 'All Sofas & Living', href: '/living-room' },
  { label: 'Bedroom Packages', href: '/bedroom' },
  { label: 'Dining Tables', href: '/dining-room' },
  { label: 'TV Stands', href: '/tv-stand' },
  { label: 'Chairs & Stools', href: '/chairs' },
];

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#f7f3ec] flex items-center justify-center">
        <div className="text-center">
          <Search className="w-10 h-10 text-[#D4AF37] mx-auto mb-3 animate-pulse" />
          <p className="text-slate-500 text-sm">Searching...</p>
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}

function SearchResults() {
  const params = useSearchParams();
  const query = params.get('q') || '';

  const results = useMemo(() => {
    if (!query.trim()) return ALL_PRODUCTS;
    const q = query.toLowerCase().trim();
    return ALL_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.badge && p.badge.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-slate-900 font-sans pb-24">

      {/* HERO / SEARCH BANNER */}
      <section className="relative overflow-hidden bg-[#0B0F17] min-h-[62vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/80 to-[#0B0F17]/60" />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 text-[#E8D5A3] border border-[#D4AF37]/60 text-[11px] font-black uppercase tracking-[0.35em] backdrop-blur-md shadow-2xl mb-3">
            <Search className="w-4 h-4 text-[#D4AF37]" />
            <span>S E A R C H   R E S U L T S</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-none my-2">
            {query ? (
              <>
                Results for
                <span className="block font-serif text-2xl sm:text-4xl italic font-light text-amber-100 mt-2 capitalize">
                  &ldquo;{query}&rdquo;
                </span>
              </>
            ) : (
              'All Products'
            )}
          </h1>
          <p className="text-white/70 text-xs sm:text-sm mt-3 font-medium">
            {results.length > 0
              ? `${results.length} product${results.length !== 1 ? 's' : ''} found across all categories`
              : 'No products matched your search'}
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="luxury-container px-4 sm:px-6">

          {/* Category Quick Links */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORY_LINKS.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="px-4 py-1.5 rounded-full border border-[#D4AF37]/50 text-[#8c6d2a] hover:bg-[#D4AF37] hover:text-white text-[11px] font-bold uppercase tracking-widest transition-all bg-white/60 backdrop-blur-sm"
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {results.length === 0 ? (
            /* Empty state */
            <div className="bg-white/80 backdrop-blur-md border border-[#e4d8bf] rounded-2xl p-12 sm:p-20 shadow-sm flex flex-col items-center gap-6 text-center">
              <div className="bg-amber-50 border border-amber-200 rounded-full p-6">
                <PackageOpen className="w-14 h-14 text-amber-300" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">No Results Found</h2>
                <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                  We couldn&apos;t find &ldquo;<strong>{query}</strong>&rdquo; in our catalog. Try a different search
                  or browse a category below.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {CATEGORY_LINKS.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="px-5 py-2.5 rounded-full border border-[#D4AF37]/60 text-[#8c6d2a] hover:bg-[#D4AF37] hover:text-white text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    {cat.label} <ArrowRight className="inline w-3 h-3 ml-1" />
                  </Link>
                ))}
              </div>
              <a
                href="https://wa.me/251940510000?text=Hi!%20I%20was%20searching%20for%20a%20product%20on%20your%20website%20and%20couldn%27t%20find%20it.%20Can%20you%20help?"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#128C7E] underline underline-offset-2 font-medium"
              >
                Can&apos;t find it? Ask us on WhatsApp →
              </a>
            </div>
          ) : (
            <div className="bg-white/70 backdrop-blur-md border border-[#e4d8bf] rounded-2xl p-5 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-amber-200/60">
                <h2 className="text-base font-serif font-semibold text-slate-800">
                  {query ? `Showing results for "${query}"` : 'All Products'}{' '}
                  <span className="text-slate-400 font-normal text-sm">({results.length})</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
