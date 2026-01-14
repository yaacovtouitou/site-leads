'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-hm-blue hover:bg-gray-100 rounded-md transition-colors"
        aria-label="Ouvrir le menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg z-50 animate-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col p-4 space-y-4">
            <Link 
              href="/a-propos" 
              className="text-lg font-medium text-hm-blue hover:text-hm-yellow py-2 border-b border-gray-50"
              onClick={toggleMenu}
            >
              À propos
            </Link>
            <Link 
              href="/nos-installations" 
              className="text-lg font-medium text-hm-blue hover:text-hm-yellow py-2 border-b border-gray-50"
              onClick={toggleMenu}
            >
              Nos installations
            </Link>
            <Link 
              href="/nos-offres" 
              className="text-lg font-medium text-hm-blue hover:text-hm-yellow py-2 border-b border-gray-50"
              onClick={toggleMenu}
            >
              Nos offres
            </Link>
            <Link 
              href="/blog" 
              className="text-lg font-medium text-hm-blue hover:text-hm-yellow py-2 border-b border-gray-50"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            
            <div className="pt-4 flex flex-col gap-3">
              <a 
                href="tel:0662102640" 
                className="flex items-center justify-center gap-2 text-hm-blue font-bold py-3 border border-hm-blue rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                06 62 10 26 40
              </a>
              <Link 
                href="/form/devis-simulation" 
                className="bg-hm-blue text-white text-center py-3 rounded-lg font-bold hover:bg-hm-yellow hover:text-hm-blue transition-colors"
                onClick={toggleMenu}
              >
                Prendre RDV
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
