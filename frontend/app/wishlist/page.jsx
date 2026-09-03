'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useShop } from '../components/ShopContext';
import { ALL_PRODUCTS } from '../utils/products';
import { Heart, ShoppingBag, Trash2, ArrowRight, PackageOpen, Flame } from 'lucide-react';


export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  const wishedProducts = ALL_PRODUCTS.filter((p) => wishlist.includes(p.id));

  const totalValue = wishedProducts.reduce((sum, p) => sum + p.price, 0);

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-slate-900 font-sans pb-24">

      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-[#0B0F17] min-h-[62vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/80 to-[#0B0F17]/60" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 text-[#E8D5A3] border border-[#D4AF37]/60 text-[11px] font-black uppercase tracking-[0.35em] backdrop-blur-md shadow-2xl mb-3">
            <Flame className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            <span>W I S H L I S T</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-none my-2">
            YOUR SAVED
            <span className="block mt-2 font-serif text-3xl sm:text-5xl italic font-light text-amber-100 drop-shadow-md capitalize">
              Favourite Pieces
            </span>
          </h1>
          <p className="text-white text-xs sm:text-base mt-3 max-w-xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            {wishedProducts.length > 0
              ? `You have ${wishedProducts.length} item${wishedProducts.length > 1 ? 's' : ''} saved — total value ETB ${totalValue.toLocaleString()}.`
              : 'Your wishlist is empty. Browse our collections and tap the heart icon to save items.'}
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-8 sm:py-12">
        <div className="luxury-container px-4 sm:px-6">

          {wishedProducts.length === 0 ? (
            /* Empty State */
            <div className="bg-white/80 backdrop-blur-md border border-[#e4d8bf] rounded-2xl p-12 sm:p-20 shadow-[0_10px_30px_rgba(26,24,20,0.04)] flex flex-col items-center justify-center text-center gap-6">
              <div className="bg-rose-50 border border-rose-200 rounded-full p-6">
                <PackageOpen className="w-14 h-14 text-rose-300" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">Your Wishlist Is Empty</h2>
                <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                  Browse our collections and click the{' '}
                  <Heart className="inline w-4 h-4 text-rose-500 fill-rose-500" /> heart icon on any product to save it here.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                {[
                  { label: 'Sofa Sets', href: '/living-room' },
                  { label: 'Bedroom', href: '/bedroom' },
                  { label: 'Dining', href: '/dining-room' },
                  { label: 'TV Stands', href: '/tv-stand' },
                  { label: 'Chairs', href: '/chairs' },
                ].map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="px-5 py-2.5 rounded-full border border-[#D4AF37]/60 text-[#8c6d2a] hover:bg-[#D4AF37] hover:text-white text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white/80 backdrop-blur-md border border-[#e4d8bf] rounded-2xl p-5 sm:p-8 md:p-10 shadow-[0_10px_30px_rgba(26,24,20,0.04)]">

              {/* Wishlist Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-amber-200/60 mb-8">
                <div>
                  <h2 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                    Saved Items
                    <span className="text-sm font-normal text-slate-500 ml-1">({wishedProducts.length})</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">Total Wishlist Value: <strong className="text-[#8c6d2a]">ETB {totalValue.toLocaleString()}</strong></p>
                </div>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-xs font-bold text-[#8c6d2a] hover:text-[#D4AF37] transition-colors uppercase tracking-wider"
                >
                  Continue Shopping <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {wishedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#eadfcb] shadow-[0_4px_15px_rgba(26,24,20,0.06)] hover:shadow-[0_10px_30px_rgba(26,24,20,0.12)] transition-all duration-400"
                  >
                    {/* Product Image */}
                    <Link href={product.href} className="relative aspect-[4/5] bg-[#f3eadc] overflow-hidden block">
                      <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {product.badge && (
                        <div className="absolute top-3 left-3 bg-[#0B0F17]/90 border border-[#D4AF37]/50 text-[#D4AF37] text-[9px] font-bold capitalize tracking-wider px-3 py-1 rounded-full shadow-lg">
                          {product.badge}
                        </div>
                      )}
                      {/* Remove from Wishlist */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-3 right-3 p-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white shadow-md transition-all hover:scale-110 active:scale-95"
                        title="Remove from Wishlist"
                      >
                        <Heart className="w-4 h-4 fill-white" />
                      </button>
                    </Link>

                    {/* Product Info */}
                    <div className="p-4 flex flex-col flex-1 justify-between">
                      <div>
                        <span className="text-[10px] font-semibold text-[#8c6d2a] uppercase tracking-[0.18em] block mb-1">
                          {product.category}
                        </span>
                        <Link href={product.href}>
                          <h3 className="text-sm font-serif font-semibold text-slate-900 line-clamp-2 hover:text-[#8c6d2a] transition-colors leading-snug">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-base font-bold text-slate-900 mt-2">
                          ETB {product.price.toLocaleString()}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={() => addToCart(product)}
                          className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#AA771C] text-[#0B0F17] text-xs font-black uppercase tracking-wide py-2.5 px-3 rounded-xl hover:brightness-110 transition shadow-md active:scale-95"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Bag
                        </button>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="p-2.5 rounded-xl border border-rose-200 text-rose-500 hover:bg-rose-50 transition-all"
                          title="Remove"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 pt-8 border-t border-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  💡 Prices and availability may vary. Contact us on WhatsApp to confirm stock.
                </p>
                <a
                  href="https://wa.me/251940510000?text=Hi%20Gorgeous%20Furniture!%20I'd%20like%20to%20inquire%20about%20my%20wishlist%20items."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-lg"
                >
                  Enquire via WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
