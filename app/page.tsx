import Image from "next/image";
import QuizForm from "./components/QuizForm";
import Header from "./components/Header";
import JSONLD from "./components/JSONLD";
import { CheckCircle2, ShieldCheck, Star, Zap, ArrowRight, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulateur Aides État 2026 - Pompe à Chaleur & Solaire | YTenergie",
  description: "Testez votre éligibilité aux aides MaPrimeRénov' et CEE 2026. Jusqu'à 80% de financement pour votre rénovation énergétique. Simulation gratuite en 2 min.",
  openGraph: {
    title: "Simulateur Aides État 2026 - Pompe à Chaleur & Solaire | YTenergie",
    description: "Testez votre éligibilité aux aides MaPrimeRénov' et CEE 2026. Jusqu'à 80% de financement pour votre rénovation énergétique.",
    type: "website",
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Pourquoi installer des panneaux solaires sur votre toit ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Installer des panneaux solaires sur votre toit vous permet de produire de l'électricité propre, réduisant ainsi votre dépendance au réseau et vos factures énergétiques. Grâce à l'autoconsommation, vous consommez votre propre énergie et vendez le surplus."
        }
      },
      {
        "@type": "Question",
        "name": "Est-ce rentable d'installer des panneaux photovoltaïques en 2026 ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, c'est un investissement très rentable. Avec la hausse des prix de l'énergie, le retour sur investissement est généralement compris entre 8 et 12 ans. De plus, les panneaux augmentent la valeur verte de votre bien immobilier."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles sont les aides financières disponibles pour la rénovation énergétique ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En 2026, vous pouvez bénéficier de MaPrimeRénov' (parcours accompagné ou par geste), des primes CEE (Certificats d'Économies d'Énergie), de la prime à l'autoconsommation pour le solaire, et de la TVA réduite à 5,5%. Le montant dépend de vos revenus et du gain énergétique."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Rénovation Énergétique",
    "provider": {
      "@type": "LocalBusiness",
      "name": "YTenergie"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Rénovation",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Installation Panneaux Solaires Photovoltaïques"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Installation Pompe à Chaleur Air/Eau"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Isolation Thermique par l'Extérieur (ITE)"
          }
        }
      ]
    }
  };

  return (
    <main className="min-h-screen font-sans text-hm-blue">
      <JSONLD type="FAQPage" data={faqSchema} />
      <JSONLD type="Service" data={serviceSchema} />
      
      <Header />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-32 overflow-hidden bg-hm-blue text-white">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2072"
              alt="Installation de panneaux solaires sur toiture résidentielle"
              fill
              className="object-cover opacity-50 grayscale mix-blend-multiply"
              priority
            />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium mb-6 border border-white/20">
                <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-hm-yellow text-hm-yellow" />
                    ))}
                </div>
                <span className="text-white">Excellent 4.9/5 (150+ Avis)</span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 lg:mb-6 leading-tight">
                Pour une <span className="text-hm-yellow">énergie solaire</span> éthique, vertueuse et <span className="text-hm-yellow">responsable</span>
                </h1>
                <p className="text-base lg:text-lg text-gray-200 mb-6 lg:mb-8 max-w-xl leading-relaxed">
                Profitez des nouvelles primes MaPrimeRénov' et CEE augmentées. Testez votre éligibilité en 2 minutes chrono et rejoignez les 50 000 foyers accompagnés par YTenergie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/form/devis-simulation" className="bg-hm-yellow text-hm-blue px-6 py-3 lg:px-8 lg:py-4 rounded-md font-bold text-base lg:text-lg hover:bg-white transition-colors shadow-xl flex items-center justify-center gap-2">
                        J'estime mon projet <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Quiz Form Container - Floating Card */}
            <div className="relative mt-8 lg:mt-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-hm-yellow to-primary rounded-2xl blur opacity-30"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden text-hm-blue">
                    <div className="bg-gray-50 px-4 py-3 lg:px-6 lg:py-4 border-b border-gray-100 flex justify-between items-center">
                        <span className="font-bold text-base lg:text-lg">Simulateur d'aides 2026</span>
                        <span className="bg-green-100 text-green-800 text-[10px] lg:text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">Gratuit</span>
                    </div>
                    <div className="p-2">
                        <QuizForm />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Grid) */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold text-hm-blue mb-4">Nos solutions de rénovation énergétique</h2>
                <p className="text-gray-600 text-sm lg:text-base">Une gamme complète de services pour répondre à vos besoins en énergie renouvelable et économies d'énergie.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1 */}
                <a href="/nos-offres" className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group cursor-pointer block">
                    <div className="h-40 lg:h-48 bg-gray-200 relative overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000"
                          alt="Panneaux photovoltaïques sur toiture"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <div className="p-5 lg:p-6">
                        <h3 className="text-lg lg:text-xl font-bold text-hm-blue mb-2">Panneaux photovoltaïques</h3>
                        <p className="text-gray-600 text-sm mb-4">Produisez votre propre électricité et réduisez vos factures jusqu'à 70% grâce à l'autoconsommation.</p>
                        <span className="text-hm-yellow font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">En savoir plus <ArrowRight className="w-4 h-4" /></span>
                    </div>
                </a>

                {/* Card 2 */}
                <a href="/nos-offres" className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group cursor-pointer block">
                    <div className="h-40 lg:h-48 bg-gray-200 relative overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000"
                          alt="Installation de Pompe à Chaleur Air/Eau"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <div className="p-5 lg:p-6">
                        <h3 className="text-lg lg:text-xl font-bold text-hm-blue mb-2">Pompe à Chaleur Air/Eau</h3>
                        <p className="text-gray-600 text-sm mb-4">Remplacez votre chaudière fioul ou gaz et divisez par 3 votre facture de chauffage avec une PAC haute performance.</p>
                        <span className="text-hm-yellow font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">En savoir plus <ArrowRight className="w-4 h-4" /></span>
                    </div>
                </a>

                {/* Card 3 */}
                <a href="/nos-offres" className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group cursor-pointer block">
                    <div className="h-40 lg:h-48 bg-gray-200 relative overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000"
                          alt="Isolation Thermique par l'Extérieur (ITE)"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <div className="p-5 lg:p-6">
                        <h3 className="text-lg lg:text-xl font-bold text-hm-blue mb-2">Isolation Thermique (ITE)</h3>
                        <p className="text-gray-600 text-sm mb-4">Embellissez votre façade tout en supprimant les ponts thermiques pour un confort optimal été comme hiver.</p>
                        <span className="text-hm-yellow font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">En savoir plus <ArrowRight className="w-4 h-4" /></span>
                    </div>
                </a>
            </div>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 lg:mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-hm-blue mb-4">Pourquoi faire confiance à YTenergie ?</h2>
                <p className="text-gray-600 text-sm lg:text-base">Des certifications reconnues et un accompagnement de A à Z pour votre projet.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                <img src="https://cdn.prod.website-files.com/68c95b7fbff63498f1f64d94/6920a14a5c61690dd108f6b9_Logo-Qualibat-RGE%20(1).png" alt="Qualibat RGE" className="h-12 lg:h-16 object-contain" />
                <img src="https://cdn.prod.website-files.com/68c95b7fbff63498f1f64d94/68c9c0f8071f06a4493c38c3_ENR-Photovolta-ques.avif" alt="QualiPV" className="h-12 lg:h-16 object-contain" />
                <img src="https://cdn.prod.website-files.com/68c95b7fbff63498f1f64d94/68c9c0f8a0f1ce39302ecbdf_ENR-Pompe-Chaleur.avif" alt="QualiPAC" className="h-12 lg:h-16 object-contain" />
                <img src="https://cdn.prod.website-files.com/68c95b7fbff63498f1f64d94/68c9d958477f101d03c4749c_ENPHASE.avif" alt="Enphase" className="h-8 lg:h-12 object-contain" />
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-hm-blue mb-4">Questions Fréquentes</h2>
            <p className="text-gray-600 text-sm lg:text-base">Tout ce que vous devez savoir sur la rénovation énergétique.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-xl shadow-sm p-4 lg:p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-hm-blue">
                <h3 className="text-base lg:text-lg font-bold">Pourquoi installer des panneaux solaires sur votre toit ?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-hm-blue sm:p-3">
                  <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-700 text-sm lg:text-base">
                <p>
                  Installer des panneaux solaires sur votre toit vous permet de produire de l'électricité propre, réduisant ainsi votre dépendance au réseau et vos factures énergétiques. Grâce à une technologie de pointe, les panneaux photovoltaïques captent l'énergie solaire et la transforment en électricité renouvelable. Sur le long terme, cette solution vous permet de profiter d'un retour sur investissement attractif grâce aux économies réalisées et aux dispositifs de soutien financier.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm p-4 lg:p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-hm-blue">
                <h3 className="text-base lg:text-lg font-bold">Est-ce rentable d'installer des panneaux photovoltaïques ?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-hm-blue sm:p-3">
                  <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-700 text-sm lg:text-base">
                <p>
                  Oui, installer des panneaux photovoltaïques est un investissement rentable, notamment grâce à l'autoconsommation et à la revente de l'excédent d'énergie. En fonction de la taille de l'installation et des aides disponibles, vous pouvez espérer un retour sur investissement en 8 à 12 ans. De plus, l'installation augmente la valeur de votre bien immobilier.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm p-4 lg:p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-hm-blue">
                <h3 className="text-base lg:text-lg font-bold">Quelles sont les aides financières disponibles en 2026 ?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-hm-blue sm:p-3">
                  <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-700 text-sm lg:text-base">
                <p>
                  En 2026, plusieurs aides sont disponibles : MaPrimeRénov' (pour la rénovation globale ou par geste), les primes CEE (Certificats d'Économies d'Énergie), la prime à l'autoconsommation pour le solaire, et la TVA réduite à 5,5%. Le montant dépend de vos revenus et du gain énergétique réalisé. Notre simulateur vous permet de connaître le montant exact auquel vous avez droit.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm p-4 lg:p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-hm-blue">
                <h3 className="text-base lg:text-lg font-bold">Quelle est la durée de vie d'un panneau solaire ?</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-hm-blue sm:p-3">
                  <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-700 text-sm lg:text-base">
                <p>
                  Les panneaux photovoltaïques modernes ont une durée de vie supérieure à 30 ans. Les constructeurs garantissent généralement une production à 80% de la puissance initiale après 25 ans. C'est un équipement robuste qui demande très peu d'entretien.
                </p>
              </div>
            </details>
          </div>
          
          <div className="mt-12 text-center">
            <a href="/form/devis-simulation" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-hm-blue rounded-lg hover:bg-hm-yellow hover:text-hm-blue shadow-lg w-full sm:w-auto">
              J'ai d'autres questions, je veux être rappelé
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hm-blue text-white pt-12 lg:pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
                <div className="col-span-1 md:col-span-1">
                    <span className="font-bold text-2xl tracking-tight text-white block mb-6">YT<span className="text-hm-yellow">energie</span></span>
                    <div className="space-y-4 text-gray-300 text-sm">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-hm-yellow mt-0.5" />
                            <p>52 quai des carrières,<br/>94220 Charenton-le-Pont</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-hm-yellow" />
                            <a href="tel:0662102640" className="hover:text-white transition-colors">06 62 10 26 40</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-hm-yellow" />
                            <a href="mailto:julesparnass@gmail.com" className="hover:text-white transition-colors">julesparnass@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-4 lg:mb-6">À propos</h4>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li><a href="/a-propos" className="hover:text-hm-yellow transition-colors">Qui sommes-nous ?</a></li>
                        <li><a href="/nos-installations" className="hover:text-hm-yellow transition-colors">Nos installations</a></li>
                        <li><a href="/blog" className="hover:text-hm-yellow transition-colors">Le Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-4 lg:mb-6">Nos services</h4>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li><a href="/nos-offres" className="hover:text-hm-yellow transition-colors">Panneaux photovoltaïques</a></li>
                        <li><a href="/nos-offres" className="hover:text-hm-yellow transition-colors">Pompe à chaleur</a></li>
                        <li><a href="/nos-offres" className="hover:text-hm-yellow transition-colors">Isolation ITE</a></li>
                        <li><a href="/nos-offres" className="hover:text-hm-yellow transition-colors">Carport solaire</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-4 lg:mb-6">Légal</h4>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li><a href="/legal/mentions-legales" className="hover:text-hm-yellow transition-colors">Mentions légales</a></li>
                        <li><a href="/legal/politique-de-confidentialite" className="hover:text-hm-yellow transition-colors">Politique de confidentialité</a></li>
                        <li><a href="/legal/cgu" className="hover:text-hm-yellow transition-colors">CGU</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm text-center md:text-left">© 2026 YTenergie. Tous droits réservés.</p>
            </div>
        </div>
      </footer>
    </main>
  );
}
