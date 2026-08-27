'use client';

import React from 'react';
import Image from 'next/image';
import { useShop } from './ShopContext';
import { ShoppingBag, X, Trash2, Plus, Minus, ShieldCheck, Truck, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, cartSubtotal, cartCount } = useShop();

  if (!isCartOpen) return null;

  const freeDeliveryThreshold = 50000;
  const progressPercent = Math.min(100, (cartSubtotal / freeDeliveryThreshold) * 100);
  const remainingForFreeDelivery = freeDeliveryThreshold - cartSubtotal;

  const formatETB = (amount) => {
    return `ETB ${Number(amount).toLocaleString()}`;
  };

  const generateWhatsAppOrderMsg = () => {
    const itemDetails = cart.map(i => `${i.name} (x${i.quantity}) - ${formatETB(i.price * i.quantity)}`).join('%0A');
    const msg = `Hi Gorgeous Furniture Ethiopia! I'd like to place an order for the following items in my bag:%0A%0A${itemDetails}%0A%0ATotal: ${formatETB(cartSubtotal)}%0A%0APlease assist me with delivery and payment options.`;
    return `https://wa.me/251940510000?text=${msg}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide Drawer */}
      <div className="relative z-10 w-full max-w-md bg-white h-full flex flex-col shadow-2xl transition-transform duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-amber-200 bg-gradient-to-r from-amber-50 via-white to-amber-50 text-slate-900">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-base font-extrabold tracking-widest uppercase font-serif text-slate-950">Shopping Bag ({cartCount})</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-slate-500 hover:text-[#D4AF37] rounded-full hover:bg-amber-100/60 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Bar */}
        <div className="bg-amber-50/50 p-4 border-b border-amber-200/50">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-800 mb-2">
            <Truck className="w-4 h-4 text-[#D4AF37]" />
            {remainingForFreeDelivery > 0 ? (
              <span>Add <strong className="text-[#0B0F17]">{formatETB(remainingForFreeDelivery)}</strong> more for <strong className="text-[#D4AF37]">FREE Addis Ababa Delivery</strong></span>
            ) : (
              <span className="text-emerald-700 font-bold">🎉 Congratulations! You qualify for FREE Addis Ababa Delivery!</span>
            )}
          </div>
          <div className="w-full h-2 bg-amber-100 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#AA771C] transition-all duration-500 rounded-full shadow-sm" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-slate-500 py-12">
              <ShoppingBag className="w-16 h-16 text-[#D4AF37]/60 stroke-[1.2] mb-4 animate-float" />
              <p className="text-lg font-bold text-slate-900">Your shopping bag is empty</p>
              <p className="text-xs text-slate-500 mt-1 max-w-xs">Explore our luxury recliner couches, dining sets, and massage chairs.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-6 px-6 py-3 gold-metallic-btn text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg"
              >
                Browse Collections
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 pb-6 border-b border-amber-100/60 last:border-[0]">
                {/* Image */}
                <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-amber-50/50 shrink-0 border border-amber-200/50">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-2 uppercase tracking-wide">
                        {item.name}
                      </h4>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 transition"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    {item.variant && (
                      <span className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">{item.variant}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-amber-200 rounded-lg bg-amber-50/40">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1.5 text-slate-600 hover:text-[#D4AF37] hover:bg-amber-100/50 rounded-l-lg transition"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-extrabold text-slate-900">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1.5 text-slate-600 hover:text-[#D4AF37] hover:bg-amber-100/50 rounded-r-lg transition"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="text-sm font-black text-slate-950">
                      {formatETB(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-amber-200/50 bg-amber-50/30 space-y-4">
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-slate-900">{formatETB(cartSubtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery (Addis Ababa)</span>
                <span className="font-bold text-emerald-700">
                  {cartSubtotal >= freeDeliveryThreshold ? 'FREE' : 'Calculated at checkout'}
                </span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-slate-950 pt-2 border-t border-amber-200/60">
                <span>Total</span>
                <span className="text-lg font-black gold-gradient-text-soft">{formatETB(cartSubtotal)}</span>
              </div>
            </div>

            {/* Quick Order Buttons */}
            <div className="space-y-2 pt-2">
              <a
                href={generateWhatsAppOrderMsg()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:brightness-110 transition shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Quick Order via WhatsApp</span>
              </a>

              <button
                onClick={() => alert('Proceeding to Secure Checkout. Connecting to Gorgeous Furniture Ethiopia Payment Gateway...')}
                className="w-full flex items-center justify-center gap-2 gold-metallic-btn py-3.5 px-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>100% Authentic Quality & Bole Showroom Guarantee</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
