'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquareText, X, Send, Bot, Sparkles, ChevronRight } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────
//  GORGEOUS FURNITURE — CHATBOT BRAIN (Knowledge Base + Matcher)
// ─────────────────────────────────────────────────────────────────

const KB = [
  // ── GREETINGS ──────────────────────────────────────────────────
  {
    patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'selam', 'salam', 'greetings', 'start'],
    reply: `👋 Welcome to **Gorgeous Furniture Ethiopia!**\n\nI'm your luxury furniture assistant. I can help you with:\n\n🛋️ Products & Prices\n📍 Showroom Locations\n🚚 Delivery & Warranty\n💳 Payment Options\n📞 Contact & WhatsApp\n\nWhat would you like to know?`,
  },

  // ── SHOWROOMS & LOCATIONS ───────────────────────────────────────
  {
    patterns: ['location', 'showroom', 'where', 'address', 'find you', 'branch', 'hub', 'store', 'visit', 'come', 'addis'],
    reply: `📍 **Our 4 Addis Ababa Showrooms:**\n\n🏛️ **CMC Flagship** — Tsehay Real Estate GF, opposite AICC, CMC\n🏛️ **Semit 72 Hub** — Near Semit 72 area\n🏛️ **Gerji Studio** — Gerji neighbourhood\n🏛️ **Betel Hub** — Betel area, Addis Ababa\n\n📞 Call for directions: **0940510000**\nOpen: Mon–Sat 8:30AM–6:00PM`,
  },
  {
    patterns: ['cmc', 'aicc', 'tsehay'],
    reply: `🏛️ **CMC Flagship Showroom**\nLocation: Tsehay Real Estate Ground Floor, directly opposite AICC, CMC, Addis Ababa\n\nThis is our largest showroom with full bedroom suite setups, living room displays, and our complete recliner collection.\n\n📞 **0940510000** for a private walkthrough!`,
  },
  {
    patterns: ['gerji'],
    reply: `🏛️ **Gerji Studio Showroom**\nLocated in the Gerji neighbourhood, Addis Ababa.\n\nFeatures curated lounge setups and dining collections.\n📞 Call **0940510000** for exact directions.`,
  },
  {
    patterns: ['semit', 'semit 72'],
    reply: `🏛️ **Semit 72 Hub**\nLocated near Semit 72 area, Addis Ababa.\n\nFeatures bedroom packages and occasional chairs.\n📞 Call **0940510000** for directions.`,
  },
  {
    patterns: ['betel'],
    reply: `🏛️ **Betel Hub Showroom**\nLocated in the Betel area, Addis Ababa.\n\nShowing TV media units, coffee tables, and chairs.\n📞 Call **0940510000** for directions.`,
  },
  {
    patterns: ['open', 'opening hours', 'working hours', 'when open', 'closing time', 'schedule'],
    reply: `🕐 **Showroom Hours:**\n\n📅 Monday – Friday: 8:30 AM – 6:00 PM\n📅 Saturday: 9:00 AM – 5:00 PM\n📅 Sunday: By appointment only\n\n📞 Call **0940510000** to book a private viewing!`,
  },

  // ── CONTACT & PHONE ─────────────────────────────────────────────
  {
    patterns: ['phone', 'call', 'contact', 'number', 'reach', 'telephone', 'ring'],
    reply: `📞 **Contact Gorgeous Furniture:**\n\n📱 **Sales Line 1:** +251 940 510000\n📱 **Sales Line 2:** +251 940 520000\n\n💬 WhatsApp: wa.me/251940510000\n\nOur team is available Mon–Sat 8:30AM–6PM.`,
  },
  {
    patterns: ['whatsapp', 'whats app', 'wa'],
    reply: `💬 **Chat with us on WhatsApp:**\n\n👉 **+251 940 510000**\n\nSend us your question, a photo of your room, or ask about custom sizing — our team responds fast! Tap the green WhatsApp button at the bottom of your screen.`,
  },
  {
    patterns: ['email', 'mail', 'online'],
    reply: `📧 Currently our fastest channels are:\n\n💬 WhatsApp: **+251 940 510000**\n📞 Phone: **0940510000 / 0940520000**\n\nOr visit any of our 4 Addis Ababa showrooms for a personal consultation!`,
  },

  // ── LIVING ROOM / SOFAS ─────────────────────────────────────────
  {
    patterns: ['sofa', 'couch', 'lounge', 'suite', 'sectional', 'living room', 'seating', 'velvet sofa', 'l shape', 'corner sofa', 'modular'],
    reply: `🛋️ **Sofa Sets & Living Room Collection:**\n\n1. **Enfriador 3-Piece Lounge Suite** — ETB 385,000\n   Built-in bar fridge, cup holders, USB charging, recliners\n\n2. **Smart Power Motion Recliner 3-Seater** — ETB 350,000\n   Electronic push-button recline, lumbar support\n\n3. **Modular Corner Velvet L-Shape Sectional** — ETB 320,000\n   Deep seating, reversible chaise, feather-down cushions\n\n📍 Try them in-store at CMC Flagship or Gerji Studio!`,
  },
  {
    patterns: ['recliner', 'recline', 'push button', 'electric sofa', 'power sofa', 'motion sofa'],
    reply: `🛋️ **Smart Power Recliners at Gorgeous Furniture:**\n\n✅ Electronic push-button reclining\n✅ Adjustable lumbar support\n✅ Available in 50+ fabric & leather colors\n✅ 2-Year motor warranty\n\n**Smart Power Motion Recliner 3-Seater** — ETB 350,000\n**Enfriador Lounge Suite with Bar Fridge** — ETB 385,000\n\nWant to customize colors? Ask us on WhatsApp: **0940510000**`,
  },
  {
    patterns: ['bar fridge', 'enfriador', 'fridge sofa', 'couch fridge', 'cooling'],
    reply: `🍾 **Enfriador 3-Piece Lounge Suite with Built-in Bar Fridge**\n\nPrice: **ETB 385,000**\n\n✅ Built-in bar/mini fridge in armrest\n✅ Cup holders & storage compartments\n✅ Electronic reclining seats\n✅ USB charging ports\n✅ 50+ color options\n\nThis is our most popular smart living room set!\n📞 Order via WhatsApp: **0940510000**`,
  },

  // ── MASSAGE CHAIRS ──────────────────────────────────────────────
  {
    patterns: ['massage', 'massage chair', 'z600', 'zero gravity', 'spa chair', 'back massage'],
    reply: `💆 **Z600 Britanica Zero Gravity Massage Chair**\n\nPrice: **ETB 445,000** | FLAGSHIP product\n\n✅ Zero-gravity recline position\n✅ Full-body massage (back, legs, neck, shoulders)\n✅ Built-in Bluetooth speaker system\n✅ Heating pads for deep muscle relief\n✅ Multiple massage modes: Shiatsu, Roll, Air Compress\n✅ Remote control + App connectivity\n\nTry it at our **CMC Flagship Showroom**!\n📞 Book a demo: **0940510000**`,
  },

  // ── BEDROOM ─────────────────────────────────────────────────────
  {
    patterns: ['bedroom', 'bed', 'king', 'wardrobe', 'dresser', 'nightstand', 'bedroom package', 'bedroom set', 'bedroom suite', 'master bedroom'],
    reply: `🛏️ **King Bedroom Packages:**\n\n1. **Emperor Royal Tufted King Suite** — ETB 485,000\n   Velvet tufted bedframe + 2 nightstands + 6-door wardrobe + vanity\n\n2. **Nordic Velvet King Bed & Wardrobe** — ETB 425,000\n   Wingback bedframe + 4-drawer dresser + soft-close bedside tables\n\n3. **Ambient LED Floating King Bed Suite** — ETB 395,000\n   LED headboard + wireless phone chargers + dual nightstands\n\n4. **Bespoke Leather Executive Bedroom** — ETB 515,000\n   Italian grain leather + solid oak frame + full vanity mirror\n\n🛋️ All packages include free Addis Ababa delivery over ETB 300,000!`,
  },
  {
    patterns: ['led bed', 'floating bed', 'led headboard', 'ambient lighting bed'],
    reply: `💡 **Modern Ambient LED Floating King Bed Suite** — ETB 395,000\n\n✅ Floating platform design (off-floor aesthetic)\n✅ Built-in ambient LED strip lighting in headboard\n✅ Wireless Qi phone charging pads\n✅ Two matching nightstands included\n✅ Available in linen, velvet, or leather upholstery\n\nPerfect for a modern luxury master bedroom!\n📞 Contact: **0940510000**`,
  },
  {
    patterns: ['leather bed', 'leather bedroom', 'executive bedroom', 'bespoke'],
    reply: `🏆 **Bespoke Genuine Leather Executive Bedroom Set** — ETB 515,000\n\n✅ Imported Italian grain leather upholstery\n✅ Solid oak hardwood frame\n✅ Custom mattress support system\n✅ Full-length vanity mirror dresser included\n✅ Customizable size and leather color\n\nThis is our premium flagship bedroom collection.\n📞 Custom orders: **0940510000**`,
  },

  // ── DINING ──────────────────────────────────────────────────────
  {
    patterns: ['dining', 'dinner', 'table', 'dining table', 'dining room', 'dining set', 'dining chair', 'eating'],
    reply: `🍽️ **Dining Room Collection:**\n\n1. **Royal Oval Dining Table** — ETB 438,000 ⭐ BESTSELLER\n   Warm walnut finish, luxe oval centerpiece\n\n2. **Harbor 8-Seater Dining Table** — ETB 497,000\n   Premium solid wood, extended family dining\n\n3. **Elegance Dining Suite** — ETB 379,000\n   Soft curves, modern upscale design\n\n4. **Heritage Wood Chair Set** — ETB 340,000\n   Hand-finished hardwood dining chairs\n\n📍 See them live at our Gerji or Betel showrooms!`,
  },
  {
    patterns: ['marble dining', 'marble table', 'stone table'],
    reply: `🪨 **Marble Dining Options at Gorgeous Furniture:**\n\nWe carry marble-top dining tables and marble-effect sintered stone tables.\n\n📍 Visit our **CMC Flagship Showroom** to see the full marble collection with matching chairs.\n\n💬 For current stock & pricing on marble tops, WhatsApp us: **0940510000**`,
  },

  // ── TV STANDS & COFFEE TABLES ───────────────────────────────────
  {
    patterns: ['tv stand', 'tv unit', 'media unit', 'tv console', 'media center', 'television stand'],
    reply: `📺 **TV Stands & Media Units:**\n\n1. **Calacatta Marble Top Media Console (2.2m)** — ETB 355,000\n   White marble top, soft-close drawers, gold trim\n\n2. **Nordic Fluted Oak TV Stand Console** — ETB 342,000\n   Tambour fluted doors, cable management\n\nBoth available in our **Betel Hub** showroom!\n📞 Enquire: **0940510000**`,
  },
  {
    patterns: ['coffee table', 'nesting table', 'side table', 'center table', 'glass table', 'round table'],
    reply: `☕ **Coffee Tables & Nesting Tables:**\n\n1. **Luxury Gold & Slate Nesting Coffee Tables** — ETB 318,000\n   Set of 2, sintered stone top, champagne gold base ⭐ BESTSELLER\n\n2. **Tempered Glass & Brass Coffee Table** — ETB 312,000\n   Heavy-duty glass shelf, geometric brass frame\n\n📞 Order or enquire: **0940510000**`,
  },

  // ── CHAIRS ──────────────────────────────────────────────────────
  {
    patterns: ['chair', 'stool', 'bar stool', 'dining chair', 'accent chair', 'armchair', 'velvet chair', 'lounge chair'],
    reply: `🪑 **Chairs & Seating Collection:**\n\n1. **Orissa Velvet Dining Chair (Set of 2)** — ETB 318,500\n2. **Velvet Counter Bar Stool – Gold Legs** — ETB 312,500 ⭐\n3. **Shell Velvet Occasional Armchair** — ETB 324,500\n4. **Modern Nordic Oak Armchair** — ETB 319,500\n5. **Bouclé Cozy Accent Lounge Chair** — ETB 332,500\n6. **Luxury Swivel Velvet Vanity Chair** — ETB 316,500\n7. **Industrial Leather Counter Stool** — ETB 311,500\n\n📞 Mix & match for your space: **0940510000**`,
  },
  {
    patterns: ['bar stool', 'barstool', 'counter stool', 'high stool', 'kitchen stool'],
    reply: `🍸 **Bar & Counter Stools at Gorgeous Furniture:**\n\n✅ **Velvet Counter Bar Stool – Gold Legs** — ETB 312,500\n   Ergonomic high-back, polished gold chrome frame ⭐ BESTSELLER\n\n✅ **Industrial Leather Counter Stool** — ETB 311,500\n   Rustic dark leather, matte black steel legs\n\nAvailable in multiple colors! 📞 **0940510000**`,
  },

  // ── PRICES & AFFORDABILITY ──────────────────────────────────────
  {
    patterns: ['price', 'cost', 'how much', 'afford', 'budget', 'expensive', 'cheap', 'discount', 'offer', 'promo', 'sale', 'etb', 'birr', 'rate'],
    reply: `💰 **Gorgeous Furniture Price Range:**\n\n🪑 Chairs & Stools: ETB 311,500 – 332,500\n📺 TV Stands & Tables: ETB 312,000 – 355,000\n🛋️ Sofas & Recliners: ETB 320,000 – 385,000\n💆 Massage Chairs: ETB 445,000\n🍽️ Dining Tables: ETB 340,000 – 497,000\n🛏️ Bedroom Packages: ETB 395,000 – 515,000\n\n📞 For current promotions & special pricing, call: **0940510000**`,
  },
  {
    patterns: ['installment', 'payment plan', 'credit', 'loan', 'pay monthly', 'lay-by', 'layaway', 'finance'],
    reply: `💳 **Payment & Financing Options:**\n\nWe offer flexible payment arrangements for qualified customers.\n\n📞 Contact our sales team to discuss:\n- Down payment + installment plans\n- Corporate bulk purchase terms\n- Wholesale pricing\n\nCall us: **0940510000** or WhatsApp to get started!`,
  },

  // ── DELIVERY ────────────────────────────────────────────────────
  {
    patterns: ['delivery', 'shipping', 'transport', 'deliver', 'bring home', 'home delivery', 'installation'],
    reply: `🚚 **Delivery & Installation:**\n\n✅ **Free delivery in Addis Ababa** on orders above ETB 300,000\n✅ Professional installation included\n✅ Delivery team handles assembly & placement\n✅ Provincial Ethiopia delivery available (fees apply)\n\n⏱️ Typical delivery: 2–5 business days after order confirmation\n\n📞 Schedule delivery: **0940510000**`,
  },
  {
    patterns: ['provincial', 'outside addis', 'outside the city', 'hawassa', 'bahirdar', 'mekelle', 'dire dawa', 'jimma', 'adama', 'ethiopia'],
    reply: `🇪🇹 **Delivery Outside Addis Ababa:**\n\nYes! We deliver to all major Ethiopian cities including Hawassa, Bahir Dar, Adama, Dire Dawa, and Jimma.\n\n📦 Shipping fees depend on distance and order size.\n\n📞 Contact us to get a delivery quote: **0940510000** or WhatsApp us!`,
  },

  // ── WARRANTY ────────────────────────────────────────────────────
  {
    patterns: ['warranty', 'guarantee', 'broken', 'repair', 'defect', 'quality', 'after sale', 'return', 'refund', 'exchange'],
    reply: `🛡️ **Quality Warranty & After-Sales:**\n\n✅ **2-Year Warranty** on all electronic motors (recliners & massage chairs)\n✅ **2-Year Warranty** on sofa/bed frame structure\n✅ Warranty covers manufacturing defects\n✅ Free repair or replacement within warranty period\n\n⚠️ Warranty does not cover fabric wear or accidental damage.\n\n📞 After-sales support: **0940510000**`,
  },

  // ── CUSTOMIZATION ───────────────────────────────────────────────
  {
    patterns: ['custom', 'customize', 'customization', 'color', 'colour', 'fabric', 'leather', 'size', 'dimension', 'bespoke', 'made to order', 'order'],
    reply: `🎨 **Custom Orders & Customization:**\n\nYes! We offer full customization:\n\n✅ 50+ fabric and leather color options\n✅ Custom sizing available for sofas and beds\n✅ Mix materials (velvet + leather combinations)\n✅ Custom leg finishes (gold, black, silver, wood)\n\n📞 Contact our design team: **0940510000**\n💬 WhatsApp photos of your room for personalized recommendations!`,
  },

  // ── WHOLESALE ───────────────────────────────────────────────────
  {
    patterns: ['wholesale', 'bulk', 'business', 'hotel', 'office', 'corporate', 'reseller', 'contractor', 'quantity', 'large order'],
    reply: `🏢 **Wholesale & Corporate Orders:**\n\nWe supply hotels, offices, apartments, and resellers across Ethiopia.\n\n📋 **To apply for wholesale pricing:**\nVisit our Wholesale Application page on the website.\n\nBenefits:\n✅ Discounted unit pricing\n✅ Priority delivery\n✅ Dedicated account manager\n✅ Bulk customization options\n\n📞 Wholesale enquiries: **0940510000**`,
  },

  // ── PRODUCTS GENERAL ────────────────────────────────────────────
  {
    patterns: ['product', 'collection', 'catalog', 'categories', 'what do you sell', 'what you have', 'show me'],
    reply: `🏠 **Gorgeous Furniture Collections:**\n\n🛋️ **Living Room** — Smart Sofas, Recliners, Lounge Suites\n🛏️ **Bedroom** — King Bed Packages, Wardrobes, Vanities\n🍽️ **Dining Room** — Marble & Wood Dining Tables\n📺 **TV Stands** — Media Consoles, Coffee Tables\n🪑 **Chairs** — Bar Stools, Armchairs, Vanity Chairs\n💆 **Massage Chairs** — Zero Gravity, Heated\n\nBrowse our website or visit a showroom!`,
  },
  {
    patterns: ['new', 'latest', 'new arrival', 'trending', 'popular', 'bestseller', 'best seller', 'top selling'],
    reply: `🔥 **Trending & Bestsellers Right Now:**\n\n⭐ **Enfriador Lounge Suite with Bar Fridge** — ETB 385,000\n⭐ **Royal Oval Dining Table** — ETB 438,000\n⭐ **Velvet Counter Bar Stool – Gold Legs** — ETB 312,500\n⭐ **Z600 Massage Chair** — ETB 445,000\n⭐ **Emperor Royal Tufted Bedroom Suite** — ETB 485,000\n\n📍 All on display at our CMC Flagship Showroom!`,
  },

  // ── ABOUT THE BRAND ─────────────────────────────────────────────
  {
    patterns: ['about', 'who are you', 'company', 'brand', 'gorgeous', 'gorgeous furniture', 'story', 'history', 'established'],
    reply: `✨ **About Gorgeous Furniture Ethiopia:**\n\nGorgeous Furniture is Addis Ababa's premier luxury contemporary furniture brand, offering world-class smart furniture for Ethiopian homes.\n\n🏛️ 4 Showrooms across Addis Ababa\n🌍 Importing premium pieces from Italy, Turkey & Asia\n🎨 Full custom order capability\n🚚 Delivery across Ethiopia\n\n📞 Get in touch: **0940510000**`,
  },

  // ── COMPARISON / HELP CHOOSING ──────────────────────────────────
  {
    patterns: ['recommend', 'suggest', 'help me choose', 'best', 'advice', 'which one', 'better', 'difference', 'compare'],
    reply: `🤝 **Need help choosing the right furniture?**\n\nHere's a quick guide:\n\n🛋️ **For a smart living room:** Enfriador Lounge Suite (ETB 385,000) — best all-in-one value\n💆 **For relaxation:** Z600 Massage Chair (ETB 445,000) — our flagship experience\n🛏️ **For a luxury bedroom:** Emperor Tufted Suite (ETB 485,000) — most complete package\n\n💬 **Send us a photo of your room on WhatsApp** (+251940510000) and our design team will give you personalized advice!`,
  },

  // ── SOCIAL MEDIA ────────────────────────────────────────────────
  {
    patterns: ['instagram', 'tiktok', 'facebook', 'social media', 'follow', 'page', 'video'],
    reply: `📱 **Follow Gorgeous Furniture:**\n\n📸 Instagram: @GorgeousFurnitureEthiopia\n🎵 TikTok: @GorgeousFurniture\n📘 Facebook: Gorgeous Furniture Ethiopia\n\nSee our products in real homes, customer setups, and behind-the-scenes videos! 🎬`,
  },

  // ── THANK YOU / GOODBYE ─────────────────────────────────────────
  {
    patterns: ['thank', 'thanks', 'thank you', 'okay', 'ok', 'great', 'perfect', 'bye', 'goodbye', 'see you', 'later', 'done'],
    reply: `😊 **You're welcome!** \n\nIf you have any more questions, we're always here.\n\n📞 **0940510000** — Call anytime Mon–Sat\n💬 WhatsApp us for fastest response!\n\n✨ Happy furnishing your dream home! 🏠`,
  },
];

/** Find the best matching reply from the knowledge base */
function getBotReply(input) {
  const lower = input.toLowerCase().trim();
  // Score each KB entry by how many patterns match
  let bestScore = 0;
  let bestReply = null;

  for (const entry of KB) {
    let score = 0;
    for (const pattern of entry.patterns) {
      if (lower.includes(pattern)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      bestReply = entry.reply;
    }
  }

  if (bestReply) return bestReply;

  // Fallback — smart generic response
  return `🤔 Great question! I didn't fully understand "**${input}**".\n\nI can help with:\n📍 Showroom locations\n🛋️ Products & prices\n🚚 Delivery & warranty\n💳 Payment options\n📞 Contact details\n\nOr tap one of the quick topics below, or **WhatsApp us at 0940510000** for instant human support!`;
}

// ─────────────────────────────────────────────────────────────────
//  QUICK TOPIC CHIPS
// ─────────────────────────────────────────────────────────────────
const QUICK_TOPICS = [
  { label: '📍 Showrooms', query: 'Showroom Locations' },
  { label: '🛋️ Sofa Prices', query: 'Sofa prices' },
  { label: '🛏️ Bedroom Packages', query: 'Bedroom packages' },
  { label: '🍽️ Dining Tables', query: 'Dining tables' },
  { label: '💆 Massage Chair', query: 'Massage chair Z600' },
  { label: '🚚 Delivery', query: 'Delivery information' },
  { label: '🛡️ Warranty', query: 'Warranty' },
  { label: '🎨 Customize', query: 'Custom orders' },
  { label: '💳 Payment Plans', query: 'Installment payment' },
  { label: '📞 Contact Us', query: 'Phone numbers' },
];

// ─────────────────────────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────────────────────────

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: '👋 Welcome to **Gorgeous Furniture Ethiopia!**\n\nI\'m your AI furniture assistant — trained to answer questions about our products, prices, showrooms, delivery, warranty, and more.\n\nHow can I help you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const toggleChat = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    if (typeof window !== 'undefined' && window.Tawk_API) {
      try {
        if (typeof window.Tawk_API.maximize === 'function' && nextState) {
          window.Tawk_API.maximize();
        } else if (typeof window.Tawk_API.toggle === 'function') {
          window.Tawk_API.toggle();
        }
      } catch (err) {
        console.error('Tawk_API error:', err);
      }
    }
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputMessage.trim();
    if (!query) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');

    // Show typing indicator then respond
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botReply = getBotReply(query);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 sm:bottom-24 right-4 sm:right-6 z-50 w-[93vw] sm:w-[390px] h-[540px] max-h-[82vh] bg-[#0B0F17] text-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] border border-[#D4AF37]/50 flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-[#0B0F17] border-b border-[#D4AF37]/30 px-5 py-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative bg-[#D4AF37]/20 p-2 rounded-full border border-[#D4AF37]/60">
                <Bot className="w-5 h-5 text-[#D4AF37]" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-900 rounded-full" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5 font-serif">
                  Gorgeous AI Assistant
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                </h3>
                <p className="text-[10px] text-emerald-400/90 font-medium">● Online • Addis Ababa</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0B0F17]/95 text-xs scrollbar-thin scrollbar-thumb-slate-700">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] px-4 py-2.5 rounded-2xl whitespace-pre-line leading-relaxed shadow-md text-[12px] ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-br from-[#D4AF37] to-[#AA771C] text-slate-950 font-semibold rounded-br-none'
                      : 'bg-slate-800/90 text-amber-50/95 border border-slate-700/60 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-slate-600 mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-start">
                <div className="bg-slate-800/90 border border-slate-700/60 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            {/* Quick Topics */}
            <div className="pt-3 flex flex-col gap-2">
              <p className="text-[9px] uppercase font-bold text-amber-200/50 tracking-widest">Quick Topics</p>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_TOPICS.map((chip) => (
                  <button
                    key={chip.label}
                    onClick={() => handleSendMessage(chip.query)}
                    className="text-[10px] bg-slate-900 hover:bg-[#D4AF37] text-amber-100 hover:text-slate-950 border border-[#D4AF37]/30 hover:border-[#D4AF37] px-2.5 py-1.5 rounded-full transition-all flex items-center gap-1 cursor-pointer"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            className="p-3 bg-slate-900/90 border-t border-[#D4AF37]/20 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about products, prices, delivery..."
              className="flex-1 bg-slate-950 text-white placeholder-slate-500 text-[12px] px-4 py-2.5 rounded-full border border-slate-800 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#D4AF37] to-[#AA771C] hover:brightness-110 text-slate-950 p-2.5 rounded-full transition-all font-bold flex items-center justify-center cursor-pointer shadow-lg active:scale-95"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <div className="fixed bottom-36 sm:bottom-24 right-4 sm:right-6 z-50 group flex items-center gap-3 transition-all duration-300">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 bg-slate-950 text-[#E8D5A3] text-xs font-bold px-4 py-2 rounded-full shadow-2xl border border-[#D4AF37]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span>Live Furniture Chatbot</span>
          </div>
        )}

        <button
          onClick={toggleChat}
          type="button"
          className={`relative p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer ${
            isOpen
              ? 'bg-[#D4AF37] text-slate-950 border-2 border-[#0B0F17]'
              : 'bg-[#0B0F17] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0B0F17] border-2 border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]'
          }`}
          aria-label="Toggle Live Chatbot"
        >
          {isOpen ? (
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          ) : (
            <MessageSquareText className="w-6 h-6 sm:w-7 sm:h-7" />
          )}
          {!isOpen && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#D4AF37] border-2 border-[#0B0F17] rounded-full animate-pulse" />
          )}
        </button>
      </div>
    </>
  );
}
