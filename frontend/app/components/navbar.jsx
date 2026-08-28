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
  Home,
  GripVertical,
  Compass,
} from 'lucide-react';
import { WhatsAppIcon } from './Icons';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Sofa Sets & Living', href: '/living-room' },
  { name: 'Bedroom Packages', href: '/bedroom' },
  { name: 'Dining Tables', href: '/dining-room' },
  { name: 'TV Stands & Tables', href: '/tv-stand' },
  { name: 'Chairs & Stools', href: '/chairs' },
];

const secondaryLinks = [
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
    <>
      <header className="relative sticky top-0 z-50 bg-[#f7f3ec]/90 backdrop-blur-xl border-b border-[#e4d8bf] shadow-[0_8px_30px_rgba(26,24,20,0.06)] transition-all duration-300">
        
        {/* 1. TOP ANNOUNCEMENT BAR */}
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
            </div>
          </div>
        </div>

        {/* 2. MAIN HEADER BAR */}
        <div className="luxury-container py-2.5 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800 hover:text-[#D4AF37] focus:outline-none transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.5)] group-hover:scale-108 transition-all duration-300">
              <Image src="/images/logo.png" alt="Gorgeous Furniture Logo" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl md:text-[22px] font-semibold tracking-tight text-slate-950 font-serif leading-none">
                Gorgeous Furniture
              </span>
              <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.2em] gold-gradient-text uppercase mt-0.5 hidden xs:block">
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
              className="w-full bg-[#f7f3ec] border border-[#d9ccb2] rounded-full py-2 pl-4 pr-10 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#c9a227]"
            />
            <Search className="absolute right-3.5 top-2.5 w-4 h-4 text-slate-400" />
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/251940510000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 text-xs font-bold hover:bg-[#25D366] hover:text-white transition"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              <span className="hidden md:inline">0940510000</span>
            </a>

            <button onClick={() => setIsCartOpen(true)} className="relative p-2 text-slate-700 hover:text-[#D4AF37]">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] text-[#0B0F17] rounded-full text-[9px] font-black flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* 3. DESKTOP NAV LINKS */}
        <nav className="hidden lg:block bg-[#f7f3ec]/80 border-t border-[#e4d8bf]">
          <div className="luxury-container flex items-center justify-center space-x-7">
            {[...navLinks, ...secondaryLinks].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`py-3.5 text-[11px] font-semibold tracking-[0.18em] uppercase transition-all ${
                  isCurrent(link.href) ? 'text-[#8c6d2a] border-b-2 border-[#D4AF37]' : 'text-slate-500 hover:text-[#8c6d2a]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* 4. APP-STYLE MOBILE MENU DRAWER (Matching Reference Image) */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[105px] bottom-16 bg-[#F2F2F7] z-40 overflow-y-auto">
            <div className="p-3">
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Search furniture..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg py-2 pl-9 pr-4 text-xs"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Visible Categories Section */}
            <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Visible tabs
            </div>
            <div className="bg-white border-y border-slate-200 divide-y divide-slate-100">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 text-sm text-slate-800 active:bg-slate-50"
                >
                  <span className={isCurrent(link.href) ? 'font-bold text-[#8c6d2a]' : ''}>{link.name}</span>
                  <GripVertical className="w-4 h-4 text-slate-400" />
                </Link>
              ))}
            </div>

            {/* Secondary Pages Section */}
            <div className="px-4 pt-6 pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Hidden tabs
            </div>
            <div className="bg-white border-y border-slate-200 divide-y divide-slate-100 mb-6">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 text-sm text-slate-800 active:bg-slate-50"
                >
                  <span className={isCurrent(link.href) ? 'font-bold text-[#8c6d2a]' : ''}>{link.name}</span>
                  <GripVertical className="w-4 h-4 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 5. MOBILE BOTTOM TAB NAVIGATION BAR (Matching Reference Image Bottom Bar) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#2563EB] text-white z-50 flex items-center justify-around border-t border-blue-600 shadow-lg">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isCurrent('/') ? 'text-white font-bold' : 'text-blue-100/70'
          }`}
        >
          <Home className="w-5 h-5 mb-1" />
          <span className="text-[10px]">Home</span>
        </Link>

        <Link
          href="/living-room"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isCurrent('/living-room') ? 'text-white font-bold' : 'text-blue-100/70'
          }`}
        >
          <Compass className="w-5 h-5 mb-1" />
          <span className="text-[10px]">Explore</span>
        </Link>

        <Link
          href="/chairs"
          className={`flex flex-col items-center justify-center w-full h-full relative ${
            isCurrent('/chairs') ? 'text-white font-bold' : 'text-blue-100/70'
          }`}
        >
          <Heart className="w-5 h-5 mb-1" />
          <span className="text-[10px]">Wishlist</span>
          {wishlist.length > 0 && (
            <span className="absolute top-2 right-6 w-2 h-2 bg-amber-300 rounded-full" />
          )}
        </Link>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center justify-center w-full h-full text-blue-100/70 relative"
        >
          <ShoppingBag className="w-5 h-5 mb-1" />
          <span className="text-[10px]">Cart</span>
          {cartCount > 0 && (
            <span className="absolute top-1.5 right-6 w-4 h-4 bg-amber-400 text-slate-950 rounded-full text-[9px] font-bold flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`flex flex-col items-center justify-center w-full h-full ${
            mobileMenuOpen ? 'text-white font-bold' : 'text-blue-100/70'
          }`}
        >
          <Menu className="w-5 h-5 mb-1" />
          <span className="text-[10px]">Menu</span>
        </button>
      </nav>
    </>
  );
}