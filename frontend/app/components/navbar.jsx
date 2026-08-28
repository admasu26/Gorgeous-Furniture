'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useShop } from './ShopContext';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Phone,
  MapPin,
  Sparkles,
  ChevronDown,
  Clock,
  ShieldCheck,
  Armchair,
} from 'lucide-react';
import { WhatsAppIcon } from './Icons';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Sofa Sets & Living', href: '/living-room' },
  { name: 'Bedroom Packages', href: '/bedroom' },
  { name: 'Dining Tables', href: '/dining-room' },
  { name: 'TV Stands & Tables', href: '/tv-stand' },
  { name: 'Chairs & Stools', href: '/chairs' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact & Hubs', href: '/contact' },
  { name: 'Wholesale', href: '/wholesale-application' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, wishlist, setIsCartOpen, searchQuery, setSearchQuery } = useShop();

  const isCurrent = (path) => pathname === path;

  return (
    <header className="relative sticky top-0 z-50 bg-[#f7f3ec]/90 backdrop-blur-xl border-b border-[#e4d8bf] shadow-[0_8px_30px_rgba(26,24,20,0.06)] transition-all duration-300">
      
      {/* 1. TOP ANNOUNCEMENT BAR WITH 4 SHOWROOM HUBS */}
      <div className="bg-[#0B0F17] text-amber-50/80 text-[10px] sm:text-[11px] py-2 sm:py-2.5 px-3 sm:px-4 md:px-6">
        <div className="luxury-container flex flex-col sm:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="gold-gradient-bg text-[#0B0F17] px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest">
              Showroom Hubs
            </span>
            <span className="text-amber-100/70 font-light truncate max-w-[220px] sm:max-w-xl">
              CMC • Semit 72 • Gerji • Betel | Free Delivery over ETB 50k
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-amber-100/70">
            <a href="tel:0940510000" className="flex items-center gap-1.5 hover:text-[#D4AF37] transition group">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span>0940510000 / 0940520000</span>
            </a>
            <div className="h-3 w-[1px] bg-white/15" />
            <Link href="/contact" className="flex items-center gap-1.5 hover:text-[#D4AF37] transition group">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span>Addis Ababa Showroom Hubs</span>
            </Link>
            <div className="h-3 w-[1px] bg-white/15" />
            <a 
              href="https://www.tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#E8D5A3] font-semibold hover:text-[#D4AF37] flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              TikTok Video Catalog
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER BAR */}
      <div className="luxury-container py-2.5 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-slate-800 hover:text-[#D4AF37] focus:outline-none transition"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.5)] group-hover:scale-108 transition-all duration-300">
            <Image
              src="/images/logo.png"
              alt="Gorgeous Furniture Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl md:text-[22px] font-semibold tracking-tight text-slate-950 font-serif leading-none group-hover:text-[#8c6d2a] transition-colors">
              Gorgeous Furniture
            </span>
            <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.18em] sm:tracking-[0.22em] gold-gradient-text uppercase mt-0.5 sm:mt-1 hidden xs:block">
              Luxury Contemporary Furnishings
            </span>
          </div>
        </Link>

        {/* SEARCH BAR (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
          <input
            type="text"
            placeholder="Search couches, dining tables, massage chairs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f7f3ec] border border-[#d9ccb2] rounded-full py-2 pl-4 pr-10 text-xs font-medium text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition shadow-inner"
          />
          <Search className="absolute right-3.5 top-2.5 w-4 h-4 text-slate-400" />
        </div>

        {/* ICONS & ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* WhatsApp Support Direct Button */}
          <a
            href="https://wa.me/251940510000?text=Hi%20Gorgeous%20Furniture!%20I'd%20like%20to%20inquire%20about%20your%20luxury%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 text-[10px] sm:text-xs font-bold hover:bg-[#25D366] hover:text-white transition group shadow-xs"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-[#128C7E] group-hover:fill-white transition-colors" />
            <span className="hidden md:inline">0940510000</span>
          </a>

          {/* Wishlist Icon */}
          <Link
            href="/chairs"
            className="relative p-2 text-slate-700 hover:text-[#D4AF37] transition group hidden sm:flex"
            title="Wishlist"
          >
            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-[#0B0F17] rounded-full text-[9px] font-black flex items-center justify-center shadow-md">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-slate-700 hover:text-[#D4AF37] transition flex items-center gap-2 group"
            aria-label="View Shopping Cart"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#AA771C] text-[#0B0F17] rounded-full text-[9px] font-black flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden xl:inline text-xs font-extrabold uppercase tracking-wider text-slate-900 group-hover:text-[#D4AF37] transition-colors">
              Bag
            </span>
          </button>

          {/* User Account Icon */}
          <Link
            href="/wholesale-application"
            className="hidden sm:flex items-center gap-1.5 p-2 text-slate-700 hover:text-[#D4AF37] transition text-xs font-bold uppercase group"
            title="Account / Wholesale"
          >
            <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 3. CATEGORY LINKS ROW (Desktop) */}
      <nav className="hidden lg:block bg-[#f7f3ec]/80 border-t border-[#e4d8bf]">
        <div className="luxury-container flex items-center justify-center space-x-7">
          {navLinks.map((link) => {
            const active = isCurrent(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-3.5 text-[11px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 ${
                  active
                    ? 'text-[#8c6d2a] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#D4AF37]'
                    : 'text-slate-500 hover:text-[#8c6d2a]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* 4. MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-white text-slate-900 border-b border-amber-200 shadow-2xl p-4 sm:p-6 z-50 space-y-4 sm:space-y-6 max-h-[calc(100vh-7rem)] overflow-y-auto">
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search furniture collection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-amber-50/50 border border-amber-200 rounded-xl py-3 pl-10 pr-4 text-xs text-slate-900 focus:outline-none focus:border-[#D4AF37]"
            />
            <Search className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3.5" />
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-3 border-b border-amber-100 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs font-bold tracking-widest py-3 border-b border-amber-100/60 flex items-center justify-between ${
                  isCurrent(link.href) ? 'text-[#D4AF37] font-extrabold' : 'text-slate-700 hover:text-[#D4AF37]'
                }`}
              >
                <span>{link.name}</span>
                <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-[#D4AF37]" />
              </Link>
            ))}
          </div>

          {/* Contact Details Teaser */}
          <div className="space-y-2 text-xs text-slate-600 pt-2">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>0940510000 / 0940520000</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Mon - Fri: 8:30 - 18:00 | Sat: 9:00 - 17:00</span>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE ACTION BAR */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-[60] bg-[#fffdf8]/95 backdrop-blur-xl border-t border-[#e4d8bf] shadow-[0_-8px_30px_rgba(26,24,20,0.12)] pb-[env(safe-area-inset-bottom)]" aria-label="Mobile navigation">
        <div className="grid grid-cols-4 h-16 max-w-md mx-auto">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex flex-col items-center justify-center gap-1 text-slate-700 hover:text-[#8c6d2a] transition"
            aria-label="Search furniture"
            title="Search"
          >
            <Search className="w-5 h-5" />
            <span className="text-[9px] font-semibold uppercase tracking-wider">Search</span>
          </button>

          <Link
            href="/chairs"
            className="relative flex flex-col items-center justify-center gap-1 text-slate-700 hover:text-[#8c6d2a] transition"
            aria-label="View wishlist"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute top-2 left-1/2 ml-2 w-4 h-4 bg-[#D4AF37] text-[#0B0F17] rounded-full text-[9px] font-black flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
            <span className="text-[9px] font-semibold uppercase tracking-wider">Saved</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative flex flex-col items-center justify-center gap-1 text-slate-700 hover:text-[#8c6d2a] transition"
            aria-label="View shopping cart"
            title="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-2 left-1/2 ml-2 w-4 h-4 bg-[#D4AF37] text-[#0B0F17] rounded-full text-[9px] font-black flex items-center justify-center">
                {cartCount}
              </span>
            )}
            <span className="text-[9px] font-semibold uppercase tracking-wider">Cart</span>
          </button>

          <Link
            href="/wholesale-application"
            className="flex flex-col items-center justify-center gap-1 text-slate-700 hover:text-[#8c6d2a] transition"
            aria-label="View profile"
            title="Profile"
          >
            <User className="w-5 h-5" />
            <span className="text-[9px] font-semibold uppercase tracking-wider">Profile</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}