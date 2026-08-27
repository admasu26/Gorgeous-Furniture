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
    <header className="sticky top-0 z-50 bg-[#f7f3ec]/90 backdrop-blur-xl border-b border-[#e4d8bf] shadow-[0_8px_30px_rgba(26,24,20,0.06)] transition-all duration-300">
      
      {/* 1. TOP ANNOUNCEMENT BAR WITH 4 SHOWROOM HUBS */}
      <div className="bg-[#0B0F17] text-amber-50/80 text-[11px] py-2.5 px-4 md:px-12">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="gold-gradient-bg text-[#0B0F17] px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest">
              Showroom Hubs
            </span>
            <span className="text-amber-100/70 font-light truncate max-w-xl">
              CMC (Tsehay Ground Floor) • Semit 72 • Gerji • Betel | Free Addis Ababa Delivery over ETB 50k
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
      <div className="container mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-800 hover:text-[#D4AF37] focus:outline-none transition"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* LOGO SECTION WITH PUBLIC FOLDER IMAGE AND TITLE CASE BRAND */}
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
            <span className="text-xl md:text-[22px] font-semibold tracking-tight text-slate-950 font-serif leading-none group-hover:text-[#8c6d2a] transition-colors">
              Gorgeous Furniture
            </span>
            <span className="text-[9px] font-semibold tracking-[0.22em] gold-gradient-text uppercase mt-1">
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
            className="w-full bg-amber-50/40 border border-amber-200/80 rounded-full py-2.5 pl-10 pr-4 text-xs text-slate-800 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 focus:bg-white transition shadow-sm"
          />
          <Search className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3" />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-[#D4AF37]"
            >
              Clear
            </button>
          )}
        </div>

        {/* RIGHT ACTION ICONS */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Wishlist Icon */}
          <Link
            href="/chairs"
            className="relative p-2 text-slate-700 hover:text-[#D4AF37] transition group"
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
        <div className="container mx-auto px-8 flex items-center justify-center space-x-7">
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
        <div className="lg:hidden fixed inset-x-0 top-[110px] bg-white text-slate-900 border-b border-amber-200 shadow-2xl p-6 z-50 space-y-6 animate-in slide-in-from-top">
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
                className={`text-xs font-bold tracking-widest py-2 border-b border-amber-100/60 flex items-center justify-between ${
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
    </header>
  );
}