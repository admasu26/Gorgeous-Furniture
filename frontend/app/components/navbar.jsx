'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
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
  ChevronRight,
  Clock,
  Home,
  Grid,
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
  const router = useRouter();
  const { cartCount, wishlist, setIsCartOpen, searchQuery, setSearchQuery } = useShop();

  const isCurrent = (path) => pathname === path;

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/search');
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  // Split links into logical sections for the mobile list view
  const categoryLinks = navLinks.slice(1, 6);
  const infoLinks = [navLinks[0], ...navLinks.slice(6)];

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
            className="lg:hidden p-2 text-slate-800 hover:text-[#8c6d2a] focus:outline-none transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#8c6d2a]" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.5)] group-hover:scale-108 transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt="Gorgeous Furniture Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl md:text-[22px] font-semibold tracking-tight text-slate-950 font-serif leading-none group-hover:text-[#8c6d2a] transition-colors">
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
              onKeyDown={handleSearchKeyDown}
              className="w-full bg-[#f7f3ec] border border-[#d9ccb2] rounded-full py-2 pl-4 pr-10 text-xs font-medium text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition shadow-inner"
            />
            <button
              onClick={handleSearch}
              className="absolute right-3 top-2 p-0.5 hover:text-[#D4AF37] transition"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-slate-400 hover:text-[#D4AF37] transition" />
            </button>
          </div>

          {/* ICONS & ACTIONS (Desktop & Tablet) */}
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
              href="/wishlist"
              className="relative p-2 text-slate-700 hover:text-[#D4AF37] transition group hidden sm:flex"
              title="Wishlist"
            >
              <Heart className={`w-5 h-5 group-hover:scale-110 transition-transform ${wishlist.length > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
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

        {/* 4. MOBILE APP-STYLE NAVIGATION MENU (App Screen Style) */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-0 z-50 bg-[#F2F2F7] flex flex-col h-screen overflow-hidden">
            
            {/* Mobile Header Bar */}
            <div className="bg-[#f7f3ec] border-b border-[#e4d8bf] px-4 py-3 flex items-center justify-between shadow-xs">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-[#8c6d2a] font-medium flex items-center text-sm gap-1 focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-base font-semibold text-slate-900 font-serif">
                Navigation
              </h2>
              <div className="w-6" />
            </div>

            {/* Mobile Search Input */}
            <div className="p-3 bg-white border-b border-slate-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search furniture collection..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setMobileMenuOpen(false);
                      handleSearch();
                    }
                  }}
                  className="w-full bg-[#EFEFF4] border-none rounded-xl py-2.5 pl-9 pr-12 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8c6d2a]/30"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <button
                  onClick={() => { setMobileMenuOpen(false); handleSearch(); }}
                  className="absolute right-3 top-2 p-0.5 text-[#8c6d2a] font-bold text-xs"
                >
                  Go
                </button>
              </div>
            </div>

            {/* Mobile Scrollable List Body */}
            <div className="flex-1 overflow-y-auto pb-24">
              
              {/* Category Group 1: Collections */}
              <div className="mt-4">
                <div className="px-4 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Collections & Catalog
                </div>
                <div className="bg-white border-y border-slate-200 divide-y divide-slate-100">
                  {categoryLinks.map((link) => {
                    const active = isCurrent(link.href);
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-4 py-3.5 active:bg-slate-100 transition"
                      >
                        <span className={`text-sm ${active ? 'text-[#8c6d2a] font-semibold' : 'text-slate-900 font-normal'}`}>
                          {link.name}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Category Group 2: Company & Info */}
              <div className="mt-6">
                <div className="px-4 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Information & Account
                </div>
                <div className="bg-white border-y border-slate-200 divide-y divide-slate-100">
                  {infoLinks.map((link) => {
                    const active = isCurrent(link.href);
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-4 py-3.5 active:bg-slate-100 transition"
                      >
                        <span className={`text-sm ${active ? 'text-[#8c6d2a] font-semibold' : 'text-slate-900 font-normal'}`}>
                          {link.name}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Contact Information Section */}
              <div className="mt-6 px-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <Phone className="w-4 h-4 text-[#8c6d2a]" />
                    <span className="font-medium">0940510000 / 0940520000</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <Clock className="w-4 h-4 text-[#8c6d2a]" />
                    <span>Mon - Fri: 8:30 - 18:00 | Sat: 9:00 - 17:00</span>
                  </div>
                  <a 
                    href="https://www.tiktok.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold text-[#8c6d2a] pt-1"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>TikTok Video Catalog</span>
                  </a>
                </div>
                <p className="text-[11px] text-slate-400 text-center mt-3">
                  After navigation options are selected, related content displays immediately.
                </p>
              </div>

            </div>
          </div>
        )}
      </header>

      {/* 5. BOTTOM MOBILE APP NAVIGATION BAR */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg px-2 py-1.5 flex items-center justify-around">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center w-16 py-1 ${
            isCurrent('/') ? 'text-[#8c6d2a]' : 'text-slate-500'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 font-medium">Home</span>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(true)}
          className={`flex flex-col items-center justify-center w-16 py-1 ${
            mobileMenuOpen ? 'text-[#8c6d2a]' : 'text-slate-500'
          }`}
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 font-medium">Categories</span>
        </button>

        <Link
          href="/wishlist"
          className={`flex flex-col items-center justify-center w-16 py-1 relative ${
            isCurrent('/wishlist') ? 'text-[#8c6d2a]' : 'text-slate-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
          {wishlist.length > 0 && (
            <span className="absolute top-0 right-3 w-3.5 h-3.5 bg-[#8c6d2a] text-white rounded-full text-[8px] font-bold flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
          <span className="text-[10px] mt-0.5 font-medium">Wishlist</span>
        </Link>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center justify-center w-16 py-1 text-slate-500 relative"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-3 w-3.5 h-3.5 bg-[#8c6d2a] text-white rounded-full text-[8px] font-bold flex items-center justify-center">
              {cartCount}
            </span>
          )}
          <span className="text-[10px] mt-0.5 font-medium">Bag</span>
        </button>

        <Link
          href="/wholesale-application"
          className={`flex flex-col items-center justify-center w-16 py-1 ${
            isCurrent('/wholesale-application') ? 'text-[#8c6d2a]' : 'text-slate-500'
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 font-medium">Account</span>
        </Link>
      </nav>
    </>
  );
}