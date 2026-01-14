
import { ArrowRight, Calendar, User } from "lucide-react";
import Header from "../components/Header";
import Link from "next/link";
import { blogPosts } from "../lib/blogData";

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Header Blog */}
      <header className="bg-white border-b border-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-hm-yellow font-bold tracking-wider uppercase text-sm mb-2 block">Actualités & Conseils</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-hm-blue mb-6">Le Blog de la Rénovation Énergétique</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Retrouvez toutes les dernières informations sur le solaire, les pompes à chaleur et les aides de l'État pour réussir votre projet.
          </p>
        </div>
      </header>

      {/* Liste des articles */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((article, index) => (
              <Link href={`/blog/${article.slug}`} key={index} className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group flex flex-col h-full border border-gray-100 cursor-pointer">
                {/* Image */}
                <div className="h-60 bg-gray-200 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ backgroundImage: `url('${article.imageUrl}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <span className="absolute top-4 left-4 bg-hm-yellow text-hm-blue text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {article.category}
                  </span>
                </div>

                {/* Contenu */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {article.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-hm-blue mb-3 leading-snug group-hover:text-hm-yellow transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <span className="text-hm-blue font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Lire la suite <ArrowRight className="w-4 h-4 text-hm-yellow" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
