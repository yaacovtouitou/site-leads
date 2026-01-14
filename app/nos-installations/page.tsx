
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Link from "next/link";
import { installations } from "../lib/installationsData";

export default function InstallationsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      <header className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-hm-blue mb-4">Nos Installations</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets emblématiques qui transforment le paysage énergétique de nos clients.
          </p>
        </div>
      </header>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installations.map((item, index) => (
              <Link href={`/nos-installations/${item.slug}`} key={index} className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group cursor-pointer block">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${item.imageUrl}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-hm-blue mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <span className="text-hm-yellow font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Voir le projet <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
