import { Phone } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <Link href="/" className="font-bold text-2xl tracking-tight text-hm-blue hover:opacity-90 transition-opacity">YT<span className="text-hm-yellow">energie</span></Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
           <Link href="/a-propos" className="text-sm font-medium hover:text-hm-yellow transition-colors">À propos</Link>
           <Link href="/nos-installations" className="text-sm font-medium hover:text-hm-yellow transition-colors">Nos installations</Link>
           <Link href="/nos-offres" className="text-sm font-medium hover:text-hm-yellow transition-colors">Nos offres</Link>
           <Link href="/blog" className="text-sm font-medium hover:text-hm-yellow transition-colors">Blog</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:0662102640" className="hidden lg:flex items-center gap-2 text-sm font-bold text-hm-blue hover:text-hm-yellow transition-colors">
              <Phone className="w-4 h-4" />
              06 62 10 26 40
          </a>
          <Link href="/form/devis-simulation" className="bg-hm-blue text-white px-6 py-3 rounded-md font-bold text-sm hover:bg-hm-yellow hover:text-hm-blue transition-all shadow-lg transform hover:-translate-y-0.5">
              Prendre RDV
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <MobileMenu />
      </div>
    </header>
  );
}
