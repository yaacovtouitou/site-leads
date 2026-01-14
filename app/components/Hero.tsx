
import React from 'react';
import { Star } from 'lucide-react';

export function Hero() {
  const title = "Calculez vos aides à la rénovation énergétique pour 2026";

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-off-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl">
            {title}
          </h1>
           <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez en 2 minutes le montant exact de vos aides pour votre projet de rénovation.
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-lg font-medium text-gray-700">
              Déjà 15 000 foyers accompagnés
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
