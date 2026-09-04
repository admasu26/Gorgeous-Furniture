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
    <div className="fixed inset-0 z-[100] flex justify-end" role="dialog" aria-modal="true" aria-labelledby="cart-drawer-title">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide Drawer */}
      <div className="relative z-10 flex h-full w-full max-w-lg flex-col bg-[#fbfaf7] shadow-2xl transition-transform duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e7dfd0] bg-white px-6 py-5 text-slate-900">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5eddd] text-[#9a7b4f]"><ShoppingBag className="h-5 w-5" /></div>
            <div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9a7b4f]">Your selection</p><h2 id="cart-drawer-title" className="font-serif text-2xl text-slate-950">Shopping Bag <span className="text-base text-slate-400">({cartCount})</span></h2></div>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="rounded-full p-2 text-slate-500 transition hover:bg-[#f5eddd] hover:text-[#8c6d2a]"
            aria-label="Close shopping bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Bar */}
        <div className="border-b border-[#e7dfd0] bg-[#f5eddd]/55 px-6 py-4">
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-800">
            <Truck className="w-4 h-4 text-[#D4AF37]" />
            {remainingForFreeDelivery > 0 ? (
              <span>Add <strong className="text-[#0B0F17]">{formatETB(remainingForFreeDelivery)}</strong> more for <strong className="text-[#D4AF37]">FREE Addis Ababa Delivery</strong></span>
            ) : (
              <span className="font-bold text-emerald-700">You qualify for free Addis Ababa delivery.</span>
            )}
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white shadow-inner">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#AA771C] shadow-sm transition-all duration-500" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-slate-500 py-12">
              <ShoppingBag className="mb-4 h-14 w-14 stroke-[1.2] text-[#D4AF37]/60" />
              <p className="font-serif text-2xl text-slate-900">Your bag is empty</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">Explore our collection and add something beautiful to your home.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="gold-metallic-btn mt-6 rounded-full px-6 py-3 text-xs font-black uppercase tracking-widest shadow-lg transition"
              >
                Browse Collections
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-[#e7dfd0] pb-5 last:border-0">
                {/* Image */}
                <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-lg border border-[#e7dfd0] bg-[#f5eddd]">
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
                      <h4 className="line-clamp-2 text-sm font-bold uppercase tracking-wide text-slate-900">
                        {item.name}
                      </h4>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="rounded-full p-1 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                        title="Remove item"
                        aria-label={`Remove ${item.name}`}
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
                        className="rounded-l-lg p-1.5 text-slate-600 transition hover:bg-[#f5eddd] hover:text-[#8c6d2a]"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-extrabold text-slate-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="rounded-r-lg p-1.5 text-slate-600 transition hover:bg-[#f5eddd] hover:text-[#8c6d2a]"
                        aria-label={`Increase quantity of ${item.name}`}
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
          <div className="space-y-4 border-t border-[#e7dfd0] bg-white px-6 py-5">
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
              <div className="flex justify-between border-t border-[#e7dfd0] pt-3 text-sm font-extrabold text-slate-950">
                <span>Total</span>
                <span className="text-lg font-black gold-gradient-text-soft">{formatETB(cartSubtotal)}</span>
              </div>
            </div>

            {/* Quick Order Buttons */}
            <div className="space-y-2 pt-1">
              <a
                href={generateWhatsAppOrderMsg()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:brightness-110"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Quick Order via WhatsApp</span>
              </a>

              <button
                onClick={() => alert('Proceeding to Secure Checkout. Connecting to Gorgeous Furniture Ethiopia Payment Gateway...')}
                className="gold-metallic-btn flex w-full items-center justify-center gap-2 rounded-full px-4 py-3.5 text-xs font-black uppercase tracking-widest shadow-lg"
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
