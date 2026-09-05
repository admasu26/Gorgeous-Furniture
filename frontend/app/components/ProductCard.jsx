'use client';

import React from 'react';
import Image from 'next/image';
import { useShop } from './ShopContext';
import { Eye, Heart, ShoppingBag, Star } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function ProductCard({ product, variant = 'card' }) {
  const { addToCart, toggleWishlist, wishlist, setQuickViewProduct } = useShop();

  const {
    id = product.name?.toLowerCase().replace(/\s+/g, '-'),
    name,
    price,
    img,
    badge,
    category,
  } = product;

  const isWishlisted = wishlist.includes(id);

  const formattedPrice = typeof price === 'number'
    ? `ETB ${price.toLocaleString()}`
    : price || 'ETB 325,000.00';

  const generateWhatsAppLink = () => {
    const msg = `Hi Gorgeous Furniture Ethiopia! I'd like to check stock and pricing in Addis Ababa for the ${name} (${formattedPrice}).`;
    return `https://wa.me/251940510000?text=${encodeURIComponent(msg)}`;
  };

  const isEditorial = variant === 'editorial';

  return (
    <div className={`${isEditorial ? 'group flex flex-col' : 'group flex flex-col bg-white rounded-[22px] overflow-hidden border border-[#eadfcb] shadow-[0_10px_30px_rgba(26,24,20,0.05)] gold-card-hover'} transition-all duration-500`}>
      {/* Image Container */}
      <div className={`relative aspect-[4/5] bg-[#f3eadc] overflow-hidden ${isEditorial ? 'border-b-2 border-[#c9a227]' : ''}`}>
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3 bg-[#0B0F17]/90 border border-[#D4AF37]/50 backdrop-blur-md text-[#D4AF37] text-[9px] font-bold capitalize tracking-wider px-3 py-1 rounded-full shadow-lg">
            {badge}
          </div>
        )}

        {/* Top Right Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(id);
            }}
            className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-md ${
              isWishlisted
                ? 'bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-rose-200'
                : 'bg-white/90 hover:bg-white text-slate-700 hover:text-[#D4AF37] border border-amber-100'
            }`}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Hover Overlay Action Bar */}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#0B0F17]/95 hover:bg-[#0B0F17] border border-[#D4AF37]/50 text-[#D4AF37] hover:text-white py-2.5 px-3 rounded-xl text-[11px] font-bold capitalize tracking-wide backdrop-blur-md transition shadow-lg"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>

          <button
            onClick={() => addToCart(product)}
            className="p-2.5 bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#AA771C] text-[#0B0F17] rounded-xl transition shadow-lg hover:brightness-110 active:scale-95"
            title="Add to Bag"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>
      </div>

      {/* Info Container */}
      <div className={`${isEditorial ? 'pt-5' : 'p-5 bg-white'} flex flex-col flex-1 justify-between text-left`}>
        <div>
          {category && (
            <span className="text-[10px] font-semibold text-[#8c6d2a] uppercase tracking-[0.18em] block mb-1.5">
              {category}
            </span>
          )}
          <h3 className="text-base font-serif font-semibold text-slate-900 tracking-tight line-clamp-2 group-hover:text-[#8c6d2a] transition-colors">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-[#D4AF37] my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-amber-100/60 flex items-center justify-between">
          <span className="text-base sm:text-lg font-black text-slate-950 tracking-tight group-hover:text-[#D4AF37] transition-colors">
            {formattedPrice}
          </span>

          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-300 px-3 py-1.5 rounded-lg transition shadow-xs"
            title="Inquire via WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" />
            <span>WhatsApp Quote</span>
          </a>
        </div>
      </div>
    </div>
  );
}
