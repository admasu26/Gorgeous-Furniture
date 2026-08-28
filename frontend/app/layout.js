import "./globals.css";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import CartDrawer from "./components/CartDrawer";
import ProductQuickViewModal from "./components/ProductQuickViewModal";
import { ShopProvider } from "./components/ShopContext";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Gorgeous Furniture Ethiopia | Luxury Recliner Couches, Dining Suites & Massage Chairs Addis Ababa",
  description: "Discover Ethiopia’s premier luxury furniture store in Addis Ababa. Premium smart recliner couches, lounge suites, zero gravity massage chairs, and dining room suites. Visit our Bole Road showroom or order online.",
  keywords: "Gorgeous Furniture Ethiopia, Recliner Couches Addis Ababa, Massage Chairs Bole, Dining Suites Ethiopia, Smart Couches Addis Ababa, Luxury Furniture Ethiopia",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${display.variable} ${sans.variable}`}
    >
      <body className="min-h-full flex flex-col bg-[#f7f3ec] text-slate-900 font-sans selection:bg-[#D4AF37] selection:text-slate-950">
        <ShopProvider>
          <Navbar />
          <div className="flex-1 pb-16 lg:pb-0">
            {children}
          </div>
          <Footer />
          <FloatingWhatsApp />
          <CartDrawer />
          <ProductQuickViewModal />
        </ShopProvider>
      </body>
    </html>
  );
}
