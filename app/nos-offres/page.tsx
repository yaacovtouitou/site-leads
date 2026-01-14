
import { ArrowRight, Zap, Thermometer, Home } from "lucide-react";
import Header from "../components/Header";

export default function OffersPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <header className="bg-hm-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Offres</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Des solutions complètes pour votre indépendance énergétique.
          </p>
        </div>
      </header>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Offre Solaire */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-hm-yellow/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-hm-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-hm-blue mb-4">Solaire Photovoltaïque</h3>
              <p className="text-gray-600 mb-6">
                Produisez votre propre électricité verte et réduisez vos factures jusqu'à 70%. Nous proposons des installations sur toiture, au sol ou en carport.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-hm-yellow rounded-full mr-2"></span>
                  Panneaux Premium (DualSun, Trina)
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-hm-yellow rounded-full mr-2"></span>
                  Micro-onduleurs Enphase
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-hm-yellow rounded-full mr-2"></span>
                  Garantie 25 ans
                </li>
              </ul>
              <a href="/form/devis-simulation" className="block w-full bg-hm-blue text-white text-center py-3 rounded-lg font-bold hover:bg-hm-yellow hover:text-hm-blue transition-colors">
                Simuler mes économies
              </a>
            </div>

            {/* Offre Chauffage */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Thermometer className="w-8 h-8 text-hm-blue" />
              </div>
              <h3 className="text-2xl font-bold text-hm-blue mb-4">Pompe à Chaleur</h3>
              <p className="text-gray-600 mb-6">
                Remplacez votre ancienne chaudière par une pompe à chaleur Air/Eau ou Air/Air performante et économique.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-hm-blue rounded-full mr-2"></span>
                  Jusqu'à 10 000€ d'aides
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-hm-blue rounded-full mr-2"></span>
                  Chauffage & Eau Chaude
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-hm-blue rounded-full mr-2"></span>
                  Marques leaders (Daikin, Atlantic)
                </li>
              </ul>
              <a href="/form/devis-simulation" className="block w-full bg-hm-blue text-white text-center py-3 rounded-lg font-bold hover:bg-hm-yellow hover:text-hm-blue transition-colors">
                Vérifier mon éligibilité
              </a>
            </div>

            {/* Offre Isolation */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-hm-blue mb-4">Isolation (ITE)</h3>
              <p className="text-gray-600 mb-6">
                L'isolation thermique par l'extérieur est la solution la plus efficace pour supprimer les ponts thermiques et embellir votre façade.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Gain énergétique immédiat
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Valorisation du patrimoine
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Finitions personnalisables
                </li>
              </ul>
              <a href="/form/devis-simulation" className="block w-full bg-hm-blue text-white text-center py-3 rounded-lg font-bold hover:bg-hm-yellow hover:text-hm-blue transition-colors">
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
