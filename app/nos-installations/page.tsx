
import { ArrowRight, MapPin } from "lucide-react";
import Header from "../components/Header";
import Link from "next/link";
import { installations } from "../lib/installationsData";

// Group installations by region
const installationsByRegion = installations.reduce((acc, install) => {
  const region = install.region || "Autres";
  if (!acc[region]) {
    acc[region] = [];
  }
  acc[region].push(install);
  return acc;
}, {} as Record<string, typeof installations>);

export default function InstallationsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      <header className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-hm-blue mb-4">Nos Installations par Région</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos réalisations partout en France. YTenergie vous accompagne au plus près de chez vous.
          </p>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {Object.entries(installationsByRegion).map(([region, regionInstallations]) => (
            <section key={region}>
              <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
                <MapPin className="w-6 h-6 text-hm-yellow" />
                <h2 className="text-2xl font-bold text-hm-blue">{region}</h2>
                <span className="bg-blue-100 text-hm-blue text-xs font-bold px-2 py-1 rounded-full">
                  {regionInstallations.length} projets
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regionInstallations.map((item, index) => (
                  <Link href={`/nos-installations/${item.slug}`} key={index} className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group cursor-pointer block h-full flex flex-col">
                    <div className="h-56 bg-gray-200 relative overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url('${item.imageUrl}')` }}
                      ></div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                        {item.location}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-hm-blue mb-2 group-hover:text-hm-yellow transition-colors">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{item.description}</p>
                      <span className="text-hm-blue font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                        Voir le projet <ArrowRight className="w-4 h-4 text-hm-yellow" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
