'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, ShieldCheck, Truck } from 'lucide-react';

const collectionLinks = [
  ['Sofa Sets & Recliners', '/living-room'],
  ['King Bedroom Packages', '/bedroom'],
  ['Dining Sets', '/dining-room'],
  ['TV Units & Coffee Tables', '/tv-stand'],
  ['Designer Chairs & Bar Stools', '/chairs'],
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#0B0F17] px-6 pb-8 pt-14 text-amber-50">
      <div className="luxury-container">
        <div className="grid gap-8 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-4"><Truck className="h-6 w-6 text-[#D4AF37]" /><div><h2 className="text-sm font-semibold">Delivery Included</h2><p className="mt-1 text-xs text-amber-100/55">Free delivery over ETB 50,000</p></div></div>
          <div className="flex items-center gap-4"><ShieldCheck className="h-6 w-6 text-[#D4AF37]" /><div><h2 className="text-sm font-semibold">730 Days Warranty</h2><p className="mt-1 text-xs text-amber-100/55">Quality you can trust</p></div></div>
          <div className="flex items-center gap-4"><Phone className="h-6 w-6 text-[#D4AF37]" /><div><h2 className="text-sm font-semibold">Sales Support</h2><a href="tel:0940510000" className="mt-1 block text-xs text-amber-100/55 hover:text-[#D4AF37]">0940510000</a></div></div>
          <div className="flex items-center gap-4"><MapPin className="h-6 w-6 text-[#D4AF37]" /><div><h2 className="text-sm font-semibold">Addis Showrooms</h2><Link href="/contact" className="mt-1 block text-xs text-amber-100/55 hover:text-[#D4AF37]">CMC, Semit 72, Gerji & Betel</Link></div></div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3"><Image src="/images/logo.png" alt="Gorgeous Furniture Logo" width={44} height={44} className="rounded-full border-2 border-[#D4AF37]" /><span className="font-serif text-xl">Gorgeous Furniture</span></Link>
            <p className="mt-5 text-sm leading-7 text-amber-100/60">Luxury contemporary furnishings for beautiful homes across Addis Ababa.</p>
            {subscribed ? <p className="mt-6 flex items-center gap-2 text-xs text-emerald-300"><CheckCircle2 className="h-4 w-4" />You are subscribed.</p> : <form onSubmit={handleSubscribe} className="mt-6 flex gap-2"><input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" className="min-w-0 flex-1 border-b border-white/20 bg-transparent px-1 py-2 text-xs text-white outline-none placeholder:text-amber-100/40 focus:border-[#D4AF37]" /><button type="submit" aria-label="Subscribe" className="gold-metallic-btn flex h-9 w-9 shrink-0 items-center justify-center rounded-full"><ArrowRight className="h-4 w-4" /></button></form>}
          </div>
          <div><h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8D5A3]">Collections</h2><nav className="mt-5 space-y-3">{collectionLinks.map(([label, href]) => <Link key={href} href={href} className="block text-sm text-amber-100/60 transition hover:text-[#D4AF37]">{label}</Link>)}</nav></div>
          <div><h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8D5A3]">Visit Us</h2><p className="mt-5 text-sm leading-7 text-amber-100/60">Tsehay Real Estate Ground Floor, opposite AICC, CMC, Addis Ababa.</p><Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Directions <ArrowRight className="h-3.5 w-3.5" /></Link></div>
          <div><h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8D5A3]">Contact</h2><a href="mailto:info@gorgeousfurniture.et" className="mt-5 flex items-center gap-2 text-sm text-amber-100/60 hover:text-[#D4AF37]"><Mail className="h-4 w-4" />info@gorgeousfurniture.et</a><a href="tel:0940510000" className="mt-4 flex items-center gap-2 text-sm text-amber-100/60 hover:text-[#D4AF37]"><Phone className="h-4 w-4" />0940510000</a></div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-amber-100/40">Copyright {new Date().getFullYear()} Gorgeous Furniture Ethiopia. All rights reserved.</div>
      </div>
    </footer>
  );
}
