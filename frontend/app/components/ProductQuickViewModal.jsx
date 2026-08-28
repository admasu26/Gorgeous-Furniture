'use client';

import React from 'react';
import Image from 'next/image';
import { useShop } from './ShopContext';
import { X, Star, CheckCircle2, ShoppingBag, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function ProductQuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useShop();

  if (!quickViewProduct) return null;

  const { name, price, img, description, category, specs } = quickViewProduct;

  const formattedPrice = typeof price === 'number'
    ? `ETB ${price.toLocaleString()}`
    : price || 'ETB 24,999.00';

  const generateWhatsAppInquiry = () => {
    const msg = `Hi Gorgeous Furniture Ethiopia! I'm interested in the ${name} (${formattedPrice}). Could you please share more details and availability at your Addis Ababa showrooms?`;
    return `https://wa.me/251940510000?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-md transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button 
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-[#D4AF37] text-slate-700 hover:text-slate-950 rounded-full transition shadow-lg border border-amber-200"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Section */}
        <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[480px] bg-amber-50/40">
          <Image 
            src={img || '/hero_recliner.png'} 
            alt={name} 
            fill 
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-white/95 border border-amber-300 text-[#9A7B4F] text-[10px] capitalize font-extrabold tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" style={{ animationDuration: '4s' }} />
            <span>Luxury Collection</span>
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-gradient-to-b from-white to-amber-50/20">
          <div>
            <span className="text-[11px] font-extrabold text-[#D4AF37] capitalize tracking-wider">
              {category || 'Gorgeous Furniture Collection'}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-950 mt-1 capitalize tracking-tight">
              {name}
            </h2>

            {/* Rating & Stock */}
            <div className="flex items-center gap-4 mt-3 pb-4 border-b border-amber-200/50">
              <div className="flex items-center text-[#D4AF37] gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-1.5">5.0 (48 reviews)</span>
              </div>
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                In Stock (Addis Showrooms)
              </span>
            </div>

            {/* Price */}
            <div className="my-5">
              <span className="text-2xl sm:text-3xl font-black gold-gradient-text-soft tracking-tight">
                {formattedPrice}
              </span>
              <p className="text-[11px] text-slate-500 mt-0.5">Includes VAT. Fast Addis Ababa Delivery & Assembly Available.</p>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {description || 
                'Crafted with premium materials, ergonomic support, and timeless aesthetic elegance. Perfect for enhancing the modern Ethiopian home.'}
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2 p-3 bg-amber-50/60 border border-amber-200/50 rounded-xl text-xs font-bold text-slate-800">
                <Truck className="w-4 h-4 text-[#D4AF37]" />
                <span>Fast Addis Delivery</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-amber-50/60 border border-amber-200/50 rounded-xl text-xs font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>2-Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-4 border-t border-amber-200/50">
            <button 
              onClick={() => {
                addToCart(quickViewProduct);
                setQuickViewProduct(null);
              }}
              className="w-full flex items-center justify-center gap-2 gold-metallic-btn py-4 rounded-xl font-black text-xs uppercase tracking-wider shadow-xl"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Shopping Bag
            </button>

            <a
              href={generateWhatsAppInquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
