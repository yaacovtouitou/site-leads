
import { ShieldCheck, Database, Lock } from 'lucide-react';
import React from 'react';

const reassuranceItems = [
  {
    logo: "LOGO RGE",
    name: "Artisans RGE",
    description: "Partenaires certifiés 'Reconnu Garant de l'Environnement'.",
  },
  {
    logo: "LOGO QualiPV",
    name: "Certification QualiPV",
    description: "La référence qualité pour les installations solaires.",
  },
  {
    logo: "LOGO MaPrimeRénov'",
    name: "MaPrimeRénov'",
    description: "Éligible aux aides gouvernementales majeures.",
  },
];

export function Reassurance() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reassuranceItems.map((item) => (
            <div key={item.name} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 font-bold text-gray-600">
                  {item.logo}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-lg bg-gray-50 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                    <Lock className="h-8 w-8 text-trust-blue" />
                    <div>
                        <h3 className="text-xl font-bold">Confidentialité et Sécurité</h3>
                        <p className="text-gray-600">Vos données sont protégées et ne seront jamais partagées.</p>
                    </div>
                </div>
                <div className="text-sm text-gray-500">
                    <p>Conformité RGPD stricte.</p>
                    <p>Simulation gratuite et sans engagement.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
