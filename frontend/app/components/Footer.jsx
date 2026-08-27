'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Truck,
  ShieldCheck,
  Award,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  Armchair,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { WhatsAppIcon } from './Icons';

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-[#0B0F17] text-amber-50 pt-20 pb-8 border-t border-[#D4AF37]/25">
      {/* Decorative ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-amber-200/5 rounded-full blur-[120px]"></div>
      </div>
      
      {/* 1. TRUST BADGES STRIP */}
      <div className="relative z-10 container mx-auto px-6 pb-12 mb-12 border-b border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300">
          <div className="p-3.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl border border-[#D4AF37]/30 group-hover:scale-110 transition-transform">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-amber-50 group-hover:text-[#D4AF37] transition-colors">Addis Ababa Fast Delivery</h5>
            <p className="text-[11px] text-amber-100/55 font-light">Free delivery over ETB 50,000</p>
          </div>
        </div>

        <div className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300">
          <div className="p-3.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl border border-[#D4AF37]/30 group-hover:scale-110 transition-transform">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-amber-50 group-hover:text-[#D4AF37] transition-colors">2-Year Structural Warranty</h5>
            <p className="text-[11px] text-amber-100/55 font-light">Guaranteed quality & durability</p>
          </div>
        </div>

        <div className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300">
          <div className="p-3.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl border border-[#D4AF37]/30 group-hover:scale-110 transition-transform">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-amber-50 group-hover:text-[#D4AF37] transition-colors">10+ Years Sector Expertise</h5>
            <p className="text-[11px] text-amber-100/55 font-light">Trusted furniture craftsmanship</p>
          </div>
        </div>

        <div className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300">
          <div className="p-3.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl border border-[#D4AF37]/30 group-hover:scale-110 transition-transform">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-amber-50 group-hover:text-[#D4AF37] transition-colors">4 Showroom Hubs</h5>
            <p className="text-[11px] text-amber-100/55 font-light">CMC, Semit 72, Gerji & Betel</p>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* BRAND & NEWSLETTER */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-sm group-hover:scale-105 transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt="Gorgeous Furniture Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight text-amber-50 font-serif leading-none group-hover:text-[#D4AF37] transition-colors">
                Gorgeous Furniture
              </span>
              <span className="text-[9px] font-bold tracking-wider gold-gradient-text uppercase mt-1">
                Luxury Contemporary Furnishings
              </span>
            </div>
          </Link>

          <p className="text-xs text-amber-100/65 leading-relaxed font-light">
            Addis Ababa’s premier destination for smart recliner couches, luxury king bedroom packages, marble dining suites, and zero-gravity massage chairs.
          </p>

          {/* Newsletter Form */}
          <div className="space-y-3 pt-2">
            <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E8D5A3]">
              Subscribe for VIP Catalogues & Promotions
            </h5>
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-800 text-xs p-3 bg-emerald-50 rounded-xl border border-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you! You are subscribed to updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border border-white/15 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 text-amber-50 placeholder:text-amber-100/40 flex-1 hover:border-[#D4AF37] transition-all"
                />
                <button
                  type="submit"
                  className="gold-metallic-btn px-4 py-3 rounded-xl transition flex items-center justify-center shadow-md shrink-0"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4 text-[#0B0F17]" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* QUICK NAVIGATION */}
        <div className="space-y-6">
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E8D5A3] relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#D4AF37] after:rounded">
            Furniture Collections
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <Link href="/living-room" className="text-amber-100/70 hover:text-[#D4AF37] transition flex items-center gap-2 group font-medium">
                <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                <span>Sofa Sets & Recliners</span>
              </Link>
            </li>
            <li>
              <Link href="/bedroom" className="text-amber-100/70 hover:text-[#D4AF37] transition flex items-center gap-2 group font-medium">
                <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                <span>King Bedroom Packages</span>
              </Link>
            </li>
            <li>
              <Link href="/dining-room" className="text-amber-100/70 hover:text-[#D4AF37] transition flex items-center gap-2 group font-medium">
                <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                <span>Marble & Ceramic Dining Sets</span>
              </Link>
            </li>
            <li>
              <Link href="/tv-stand" className="text-amber-100/70 hover:text-[#D4AF37] transition flex items-center gap-2 group font-medium">
                <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                <span>TV Units & Coffee Tables</span>
              </Link>
            </li>
            <li>
              <Link href="/chairs" className="text-amber-100/70 hover:text-[#D4AF37] transition flex items-center gap-2 group font-medium">
                <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                <span>Designer Chairs & Bar Stools</span>
              </Link>
            </li>
            <li>
              <Link href="/wholesale-application" className="text-[#E8D5A3] hover:text-[#D4AF37] transition flex items-center gap-2 font-semibold group">
                <Armchair className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>B2B Wholesale Portal</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* SHOWROOM HUBS */}
        <div className="space-y-6">
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E8D5A3] relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#D4AF37] after:rounded">
            Addis Showroom Network
          </h4>
          <div className="space-y-2.5 text-[11px]">
            <Link href="/contact" className="block p-3 rounded-xl border border-white/10 bg-white/5 hover:border-[#D4AF37]/50 transition-all group">
              <div className="flex justify-between items-center">
                <strong className="text-amber-50 font-semibold group-hover:text-[#D4AF37] transition">CMC Hub (Flagship)</strong>
                <span className="text-[9px] font-bold text-[#E8D5A3] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/30">Opposite AICC</span>
              </div>
              <span className="text-amber-100/50 text-[10px] block mt-0.5">Tsehay Real Estate Ground Floor</span>
              <p className="font-mono text-[#D4AF37] font-bold text-xs mt-1">0940510000</p>
            </Link>

            <Link href="/contact" className="block p-3 rounded-xl border border-white/10 bg-white/5 hover:border-[#D4AF37]/50 transition-all group">
              <strong className="text-amber-50 font-semibold block group-hover:text-[#D4AF37] transition">Semit 72 Hub</strong>
              <span className="text-amber-100/50 text-[10px] block mt-0.5">Main Commercial Strip, Bole Kebele 50</span>
              <p className="font-mono text-[#D4AF37] font-bold text-xs mt-1">0940520000 / 0925314444</p>
            </Link>

            <Link href="/contact" className="block p-3 rounded-xl border border-white/10 bg-white/5 hover:border-[#D4AF37]/50 transition-all group">
              <strong className="text-amber-50 font-semibold block group-hover:text-[#D4AF37] transition">Gerji & Betel Hubs</strong>
              <span className="text-amber-100/50 text-[10px] block mt-0.5">Gerji Ring Road & Betel Shopping Center</span>
              <p className="font-mono text-[#D4AF37] font-bold text-xs mt-1">0940510000 / 0925154444</p>
            </Link>
          </div>
        </div>

        {/* CONTACT & CONNECT */}
        <div className="space-y-6">
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E8D5A3] relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#D4AF37] after:rounded">
            Contact & Support
          </h4>
          <div className="space-y-4 text-xs">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-amber-50 font-mono font-bold text-xs">0940510000 / 0940520000</p>
                <p className="text-amber-100/50 font-mono text-[10px]">0925314444 / 0925154444</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a href="mailto:info@gorgeousfurniture.et" className="text-amber-100/70 hover:text-[#D4AF37] transition underline font-medium">
                info@gorgeousfurniture.et
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <p className="text-[10px] uppercase font-semibold text-amber-100/40 mb-3 tracking-wider">Connect & Previews</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/251940510000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all shadow-xs"
                  title="WhatsApp Hotline"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black text-[#00f2fe] border border-[#ff0050] flex items-center justify-center hover:scale-110 hover:shadow-md transition-all shadow-xs text-xs font-bold"
                  title="TikTok Video Catalog"
                >
                  🎵
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all shadow-xs"
                  title="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce67] via-[#e1306c] to-[#833ab4] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all shadow-xs"
                  title="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. COPYRIGHT & BOTTOM LINKS */}
      <div className="relative z-10 container mx-auto px-6 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-widest text-[#E8D5A3] mb-1">Addis Ababa Showroom Hubs</h5>
            <p className="text-xs font-medium text-amber-50">CMC (Tsehay Opposite AICC) • Semit 72 • Gerji • Betel</p>
          </div>
          
          <div className="text-center">
            <p className="text-xs text-amber-100/45 font-light">© 2024 - 2026 Gorgeous Furniture Ethiopia. All Rights Reserved.</p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link href="/contact" className="text-amber-100/70 hover:text-[#D4AF37] transition font-medium">
              Showrooms & Maps
            </Link>
            <span className="text-[#D4AF37]/50">•</span>
            <Link href="/wholesale-application" className="text-amber-100/70 hover:text-[#D4AF37] transition font-medium">
              Wholesale & B2B
            </Link>
          </div>
        </div>
        
        <div className="text-center text-[10px] text-amber-100/35 font-light mt-6 pt-4 border-t border-white/10">
          <p>Designed with luxury • Crafted with excellence • Made for Ethiopian homes</p>
        </div>
      </div>
    </footer>
  );
}
