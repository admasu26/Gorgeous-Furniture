'use client';

import React from 'react';
import { WhatsAppIcon } from './Icons';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center gap-3">
      {/* Hover Tooltip Badge */}
      <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-2xl border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Chat with Furniture Specialist</span>
      </div>

      {/* Button with official WhatsApp icon */}
      <a
        href="https://wa.me/251940510000?text=Hi%20Gorgeous%20Furniture%20Ethiopia!%20I'd%20like%20to%20inquire%20about%20your%20luxury%20furniture%20collection%20in%20Addis%20Ababa."
        className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-glow flex items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Gorgeous Furniture Ethiopia on WhatsApp"
        title="WhatsApp Support (0940510000 / 0940520000)"
      >
        <WhatsAppIcon className="w-7 h-7 fill-white" />
        
        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full" />
      </a>
    </div>
  );
}
