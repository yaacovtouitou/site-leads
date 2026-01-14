
import { installations } from "@/lib/installationsData";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Zap, Cpu, ArrowLeft, CheckCircle2 } from "lucide-react";
import NextLink from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  return installations.map((install) => ({
    slug: install.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const install = installations.find((i) => i.slug === slug);
  
  if (!install) return { title: "Installation non trouvée" };

  return {
    title: `Installation Solaire à ${install.location} | Réalisations YTenergie`,
    description: `Découvrez notre installation de ${install.power} à ${install.location}. ${install.description}`,
    openGraph: {
      images: [install.imageUrl],
    },
  };
}

export default async function InstallationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const install = installations.find((i) => i.slug === slug);

  if (!install) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-hm-blue mb-4">Installation non trouvée</h1>
          <NextLink href="/nos-installations" className="text-hm-yellow font-bold hover:underline">
            Retour aux installations
          </NextLink>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[
          { label: "Nos Installations", href: "/nos-installations" },
          { label: install.title, href: `/nos-installations/${install.slug}` }
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
          {/* Colonne Gauche : Infos */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-hm-blue mb-6">{install.title}</h1>
            
            <div className="flex items-center gap-2 text-gray-500 mb-8">
              <MapPin className="w-5 h-5 text-hm-yellow" />
              <span className="font-medium">{install.location}</span>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-100">
              <h3 className="text-lg font-bold text-hm-blue mb-6 border-b border-gray-200 pb-2">Caractéristiques Techniques</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm text-hm-yellow">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wide">Puissance</span>
                    <span className="font-bold text-hm-blue">{install.power}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm text-hm-yellow">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wide">Panneaux</span>
                    <span className="font-bold text-hm-blue">{install.panels}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm text-hm-yellow">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wide">Onduleur</span>
                    <span className="font-bold text-hm-blue">{install.inverter}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="prose prose-blue text-gray-600">
              <h3 className="text-xl font-bold text-hm-blue mb-4">À propos de ce projet</h3>
              <p>{install.description}</p>
            </div>

            <div className="mt-10">
              <a href="/form/devis-simulation" className="inline-block w-full text-center bg-hm-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-hm-yellow hover:text-hm-blue transition-all shadow-lg">
                J'aimerais une installation similaire
              </a>
            </div>
          </div>

          {/* Colonne Droite : Galerie */}
          <div className="space-y-6">
            {install.gallery.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-xl h-80 relative group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${img}')` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
