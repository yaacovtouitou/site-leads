
import { Building, Users, Zap, Award, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Header */}
      <header className="bg-hm-blue text-white py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2072')" }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            À Propos de <span className="text-hm-yellow">YTenergie</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light">
            L'expert de la rénovation énergétique globale depuis plus de 12 ans.
          </p>
        </div>
      </header>

      <main>
        {/* Section Notre Histoire */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-hm-blue px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Building className="w-4 h-4" />
                  <span>Notre Histoire</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-hm-blue mb-6 leading-tight">
                  Une vision : rendre l'habitat <span className="text-hm-yellow">durable</span> et <span className="text-hm-yellow">économique</span>.
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Fondé en 2013, YTenergie s'est imposé comme un acteur incontournable de la transition énergétique en France. Notre mission est simple : accompagner les particuliers dans la rénovation globale de leur habitat pour réduire leur empreinte carbone tout en augmentant leur pouvoir d'achat.
                  </p>
                  <p>
                    Fort de nos <strong>50 000 installations réalisées</strong>, nous maîtrisons l'ensemble de la chaîne de valeur : du conseil technique à l'installation, en passant par la gestion des aides administratives.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="border-l-4 border-hm-yellow pl-4">
                    <span className="block text-3xl font-bold text-hm-blue">12</span>
                    <span className="text-sm text-gray-500">Années d'expérience</span>
                  </div>
                  <div className="border-l-4 border-hm-yellow pl-4">
                    <span className="block text-3xl font-bold text-hm-blue">36</span>
                    <span className="text-sm text-gray-500">Équipes techniques</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-hm-yellow/20 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000"
                  alt="Techniciens YTenergie" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Valeurs */}
        <section className="py-20 bg-hm-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-hm-blue mb-4">Nos Piliers d'Excellence</h2>
              <p className="text-gray-600">Ce qui fait la différence YTenergie au quotidien.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all group">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-hm-blue transition-colors">
                  <Award className="w-8 h-8 text-hm-blue group-hover:text-hm-yellow transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-hm-blue mb-3">Certifications RGE</h3>
                <p className="text-gray-600">
                  Toutes nos équipes possèdent les qualifications Qualibat RGE, QualiPV et QualiPAC, indispensables pour l'obtention de vos aides d'État.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all group">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-hm-blue transition-colors">
                  <Users className="w-8 h-8 text-hm-blue group-hover:text-hm-yellow transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-hm-blue mb-3">Proximité Client</h3>
                <p className="text-gray-600">
                  Un interlocuteur unique suit votre dossier de A à Z. Nous gérons 100% des démarches administratives (Mairie, Enedis, MaPrimeRénov').
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all group">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-hm-blue transition-colors">
                  <CheckCircle2 className="w-8 h-8 text-hm-blue group-hover:text-hm-yellow transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-hm-blue mb-3">Qualité Premium</h3>
                <p className="text-gray-600">
                  Nous travaillons exclusivement avec les leaders mondiaux (DualSun, Enphase, Daikin) pour garantir la longévité de vos installations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
