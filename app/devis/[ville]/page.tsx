
import type { Metadata } from "next";
import QuizForm from "@/components/QuizForm";
import Header from "@/components/Header";
import { MapPin, CheckCircle2, Star } from "lucide-react";

type Props = {
  params: Promise<{ ville: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville } = await params;
  const formattedCity = ville.charAt(0).toUpperCase() + ville.slice(1);

  return {
    title: `Installateur Pompe à Chaleur & Solaire à ${formattedCity} | Devis Gratuit`,
    description: `Vous habitez à ${formattedCity} ? Profitez des aides locales 2026 pour votre rénovation énergétique. Installation RGE par YTenergie. Testez votre éligibilité.`,
    alternates: {
      canonical: `/devis/${ville}`,
    },
  };
}

export default async function LocalLandingPage({ params }: Props) {
  const { ville } = await params;
  const formattedCity = ville.charAt(0).toUpperCase() + ville.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Local */}
        <section className="relative bg-hm-blue text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <MapPin className="w-4 h-4 text-hm-yellow" />
              <span>Intervention à {formattedCity} et alentours</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Installation Solaire et Chauffage à <span className="text-hm-yellow">{formattedCity}</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              YTenergie accompagne les propriétaires de {formattedCity} dans leur transition énergétique. Profitez des aides de l'État 2026.
            </p>
          </div>
        </section>

        {/* Formulaire & Arguments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Colonne Gauche : Arguments */}
              <div>
                <h2 className="text-3xl font-bold text-hm-blue mb-6">Pourquoi choisir YTenergie à {formattedCity} ?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm h-fit">
                      <CheckCircle2 className="w-6 h-6 text-hm-yellow" />
                    </div>
                    <div>
                      <h3 className="font-bold text-hm-blue text-lg">Expertise Locale</h3>
                      <p className="text-gray-600">Nous connaissons parfaitement les spécificités climatiques et architecturales de {formattedCity}.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm h-fit">
                      <CheckCircle2 className="w-6 h-6 text-hm-yellow" />
                    </div>
                    <div>
                      <h3 className="font-bold text-hm-blue text-lg">Artisan RGE Certifié</h3>
                      <p className="text-gray-600">Nos équipes sont qualifiées QualiPV et QualiPAC, vous garantissant l'accès à toutes les aides (MaPrimeRénov', CEE).</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm h-fit">
                      <CheckCircle2 className="w-6 h-6 text-hm-yellow" />
                    </div>
                    <div>
                      <h3 className="font-bold text-hm-blue text-lg">Accompagnement de A à Z</h3>
                      <p className="text-gray-600">De l'étude technique à la mise en service, en passant par les démarches en mairie de {formattedCity}.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-hm-yellow fill-hm-yellow" />)}
                    </div>
                    <span className="font-bold text-hm-blue">4.9/5</span>
                  </div>
                  <p className="text-sm text-gray-600 italic">"Installation rapide et soignée. L'équipe a été très pro et a laissé le chantier impeccable. Je recommande pour tous les habitants de {formattedCity}."</p>
                  <p className="text-xs text-gray-500 mt-2 font-bold">- Client Vérifié</p>
                </div>
              </div>

              {/* Colonne Droite : Formulaire */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-hm-blue px-6 py-4 text-center">
                  <span className="font-bold text-white text-lg">Simulateur Spécial {formattedCity}</span>
                  <p className="text-blue-200 text-xs mt-1">Gratuit & Sans Engagement</p>
                </div>
                <div className="p-6">
                  <QuizForm />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
