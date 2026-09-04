'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Check, Headphones, ShieldCheck, Truck } from 'lucide-react';
import ProductCard from './components/ProductCard';

const categories = [
  { name: 'Beds & Night stands', copy: 'Furniture which will accompany you forever. Design your bedroom with elegance.', image: '/images/bed1.png', href: '/bedroom' },
  { name: 'Sofas', copy: 'Unique designs making every piece of furniture worth a buy.', image: '/images/Sofa1.png', href: '/living-room' },
  { name: 'High Chairs', copy: 'Decorate your home with the best-looking furniture.', image: '/images/Chair1.png', href: '/chairs' },
  { name: 'TV Stands', copy: 'A house becomes a home by having the best furniture.', image: '/images/Table1.png', href: '/tv-stand' },
  { name: 'Dining Sets', copy: 'Gather around sturdy tables and comfortable chairs with everyone you love.', image: '/images/Dinning table 1.png', href: '/dining-room' },
  { name: 'Wardrobe', copy: 'A bold statement of luxury, order, and enduring quality.', image: '/images/bed2.png', href: '/bedroom' },
  { name: 'Coffee Table', copy: 'A refined centerpiece where elegant form meets everyday function.', image: '/images/Table2.png', href: '/tv-stand' },
  { name: 'Tables', copy: 'When you desire the best furniture, we deliver.', image: '/images/Dinning table 2.png', href: '/dining-room' },
  { name: 'Kitchen Cabinet', copy: 'A grand yet functional kitchen designed for timeless living and intelligent storage.', image: '/images/Table2.png', href: '/contact' },
];

const featuredProducts = [
  { id: 'engida', name: 'ENGIDA', price: 217000, img: '/images/Sofa2.png', badge: 'FEATURED', category: 'Sofas' },
  { id: 'atse', name: 'ATSE', price: 160500, img: '/images/bed2.png', badge: 'FEATURED', category: 'Bedroom' },
  { id: 'elfegn', name: 'ELFEGN', price: 'Price on request', img: '/images/Dinning table 2.png', badge: 'FEATURED', category: 'Dining Sets' },
];

const latestProducts = [
  { id: 'weynshet', name: 'WEYNSHET', price: 29500, img: '/images/Chair2.png', badge: 'NEW ARRIVAL', category: 'Chairs' },
  { id: 'duraba', name: 'DURABA', price: 62000, img: '/images/Sofa3.png', badge: 'NEW ARRIVAL', category: 'Sofas' },
  { id: 'misrak', name: 'MISRAK', price: 62000, img: '/images/Table1.png', badge: 'NEW ARRIVAL', category: 'Tables' },
  { id: 'neus', name: 'NEUS', price: 117000, img: '/images/bed3.png', badge: 'NEW ARRIVAL', category: 'Bedroom' },
  { id: 'engida-latest', name: 'ENGIDA', price: 217000, img: '/images/Sofa2.png', badge: 'NEW ARRIVAL', category: 'Sofas' },
  { id: 'etege', name: 'ETEGE', price: 240000, img: '/images/Dinning table 3.png', badge: 'NEW ARRIVAL', category: 'Dining Sets' },
];

const trustItems = [
  { title: 'Delivery Included', copy: 'We provide in house delivery', icon: Truck },
  { title: '730 Days Warranty', copy: 'Use your products carefree', icon: ShieldCheck },
  { title: '2,000+ Happy Customers', copy: 'A furniture store people trust', icon: Check },
];

const heroSlides = [
  { image: '/images/about_header.jpg', alt: 'Gorgeous Furniture collection' },
  { image: '/images/king_bedroom.png', alt: 'Elegant bedroom furniture' },
  { image: '/images/marble_dining.png', alt: 'Luxury dining furniture' },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-slate-900">
      <section className="relative isolate overflow-hidden text-white">
        <div className="absolute inset-0 -z-10">
          {heroSlides.map((slide, index) => (
            <Image
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className={`object-cover object-center transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="luxury-container flex min-h-[470px] items-end py-14 sm:min-h-[540px] sm:py-16">
          <div className="max-w-2xl animate-fade-up">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#e8d5a3]">Gorgeous Furniture Ethiopia</p>
            <h1 className="max-w-xl font-serif text-5xl leading-[0.92] sm:text-7xl">Let us turn your house into a palace.</h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/80 sm:text-base">Don&apos;t settle for less. Discover furniture designed with utmost care and love for the way you live.</p>
            <Link href="#categories" className="gold-metallic-btn mt-6 inline-flex items-center gap-3 rounded-full px-7 py-4 text-xs font-bold uppercase tracking-[0.18em]">
              Discover more <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-5 flex items-center gap-3" aria-label="Hero image controls">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={index === activeSlide}
                  className={`h-1.5 transition-all ${index === activeSlide ? 'w-10 bg-[#d4af37]' : 'w-5 bg-white/45 hover:bg-[#e8d5a3]'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#eadfcb] bg-white">
        <div className="luxury-container grid grid-cols-1 divide-y divide-[#eadfcb] py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {trustItems.map(({ title, copy, icon: Icon }) => (
            <div key={title} className="flex items-center gap-4 px-5 py-5 sm:justify-center">
              <Icon className="h-6 w-6 shrink-0 text-[#c9a227]" />
              <div><h2 className="text-sm font-bold">{title}</h2><p className="mt-1 text-xs text-slate-500">{copy}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="categories" className="py-14 sm:py-20">
        <div className="luxury-container">
          <div className="mb-8 max-w-2xl"><p className="section-kicker mb-2">Explore the collection</p><h2 className="font-serif text-4xl sm:text-5xl">Most popular product categories</h2><p className="mt-3 text-sm leading-7 text-slate-500">Design of furniture which will surely make you fall in love with them.</p></div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.name} href={category.href} className="group block transition duration-500 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#eee5d8]"><Image src={category.image} alt={category.name} fill className="object-cover transition duration-700 group-hover:scale-105" /></div>
                <div className="pt-5"><h3 className="font-serif text-2xl">{category.name}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">{category.copy}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8c6d2a]">View product <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="luxury-container"><div className="mb-12 flex items-end justify-between gap-6"><div><p className="section-kicker mb-3">Our Picks</p><h2 className="font-serif text-4xl sm:text-5xl">Featured Products</h2></div><Link href="/search" className="hidden items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8c6d2a] sm:flex">Shop all <ArrowRight className="h-4 w-4" /></Link></div><div className="grid grid-cols-1 gap-8 sm:grid-cols-3">{featuredProducts.map((product) => <ProductCard key={product.id} product={product} variant="editorial" />)}</div></div>
      </section>

      <section className="bg-[#16150f] py-14 text-white sm:py-20">
        <div className="luxury-container grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="section-kicker mb-3 text-[#e8d5a3]">Who we are</p><h2 className="font-serif text-4xl sm:text-5xl">Trusted furniture store</h2><p className="mt-5 max-w-md text-sm leading-7 text-white/65">You buy a house, we make it a home. From our showroom to the workshop and to your house, you receive the greatest service from people who work with enthusiasm.</p><Link href="/about" className="gold-metallic-btn mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest">Learn more <ArrowRight className="h-4 w-4" /></Link></div><div className="grid gap-4 sm:grid-cols-3"><div className="border-l border-[#c9a227] p-5"><ShieldCheck className="mb-5 h-7 w-7 text-[#c9a227]" /><h3 className="font-serif text-xl">Professional Services</h3><p className="mt-3 text-xs leading-6 text-white/60">Thoughtful support from first consultation to final delivery.</p></div><div className="border-l border-[#c9a227] p-5"><Truck className="mb-5 h-7 w-7 text-[#c9a227]" /><h3 className="font-serif text-xl">100% Safe Delivery</h3><p className="mt-3 text-xs leading-6 text-white/60">We deliver the best furniture with care and attention.</p></div><div className="border-l border-[#c9a227] p-5"><Headphones className="mb-5 h-7 w-7 text-[#c9a227]" /><h3 className="font-serif text-xl">Friendly Advice</h3><p className="mt-3 text-xs leading-6 text-white/60">Get professional consultations from our sales designers.</p></div></div></div>
      </section>

      <section className="py-20 sm:py-28"><div className="luxury-container"><div className="mb-12 flex items-end justify-between gap-6"><div><p className="section-kicker mb-3">Discover</p><h2 className="font-serif text-4xl sm:text-5xl">Latest Product</h2></div><span className="text-xs font-bold uppercase tracking-widest text-[#8c6d2a]">New Arrival</span></div><div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">{latestProducts.map((product) => <ProductCard key={product.id} product={product} variant="editorial" />)}</div></div></section>

      <section className="bg-white py-20 sm:py-24"><div className="luxury-container grid gap-8 lg:grid-cols-[1fr_1.6fr]"><div><p className="section-kicker mb-3">Contact Us</p><h2 className="font-serif text-4xl sm:text-5xl">We are here to help.</h2><p className="mt-4 max-w-md text-sm leading-7 text-slate-600">Your desire of owning the best quality furniture will not be unfulfilled. Get your interior and furniture advice from our team.</p><Link href="/contact" className="gold-metallic-btn mt-8 inline-flex items-center gap-3 rounded-full px-7 py-4 text-xs font-bold uppercase tracking-widest">Consultations Now <ArrowRight className="h-4 w-4" /></Link></div><div className="grid gap-8 sm:grid-cols-3"><Link href="/about" className="group border-t border-[#c9a227] bg-white pt-5 transition-colors hover:bg-[#d4af37] hover:px-5 hover:pb-5"><BookOpen className="h-6 w-6 text-[#c9a227] transition-colors group-hover:text-[#16150f]" /><h3 className="mt-6 font-serif text-2xl transition-colors group-hover:text-[#16150f]">Knowledge Base</h3><p className="mt-2 text-sm text-slate-500 transition-colors group-hover:text-[#16150f]/75">Want to learn more about our services?</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8c6d2a] transition-colors group-hover:text-[#16150f]">Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1" /></span></Link><a href="https://wa.me/251940510000" target="_blank" rel="noopener noreferrer" className="group border-t border-[#c9a227] bg-white pt-5 transition-colors hover:bg-[#d4af37] hover:px-5 hover:pb-5"><Headphones className="h-6 w-6 text-[#c9a227] transition-colors group-hover:text-[#16150f]" /><h3 className="mt-6 font-serif text-2xl transition-colors group-hover:text-[#16150f]">Sales Support</h3><p className="mt-2 text-sm text-slate-500 transition-colors group-hover:text-[#16150f]/75">Get your professional consultations from our sales designers.</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8c6d2a] transition-colors group-hover:text-[#16150f]">Contact sales <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1" /></span></a><Link href="/contact" className="group border-t border-[#c9a227] bg-white pt-5 transition-colors hover:bg-[#d4af37] hover:px-5 hover:pb-5"><Check className="h-6 w-6 text-[#c9a227] transition-colors group-hover:text-[#16150f]" /><h3 className="mt-6 font-serif text-2xl transition-colors group-hover:text-[#16150f]">Community</h3><p className="mt-2 text-sm text-slate-500 transition-colors group-hover:text-[#16150f]/75">Join the group of satisfied customers.</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8c6d2a] transition-colors group-hover:text-[#16150f]">Join community <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1" /></span></Link></div></div></section>
    </main>
  );
}