'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    // Ici, vous pourriez déclencher le chargement de Google Analytics
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl p-4 md:p-6 z-50 animate-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 md:max-w-2xl">
          <p>
            Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. En cliquant sur « Accepter », vous consentez à notre utilisation des cookies. 
            Pour en savoir plus, consultez notre <Link href="/legal/politique-de-confidentialite" className="text-hm-blue underline hover:text-hm-yellow">Politique de confidentialité</Link>.
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={declineCookies}
            className="flex-1 md:flex-none px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Refuser
          </button>
          <button 
            onClick={acceptCookies}
            className="flex-1 md:flex-none px-6 py-2 bg-hm-blue text-white rounded-lg text-sm font-bold hover:bg-hm-yellow hover:text-hm-blue transition-colors shadow-md"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
