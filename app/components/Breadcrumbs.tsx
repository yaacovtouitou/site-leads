import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import JSONLD from './JSONLD';

type BreadcrumbItem = {
  label: string;
  href: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 2, // +2 car Home est 1
      "name": item.label,
      "item": `${process.env.NEXT_PUBLIC_URL || 'https://www.ytenergie.fr'}${item.href}`
    }))
  };

  // Ajout de la Home au début du JSON-LD
  jsonLdData.itemListElement.unshift({
    "@type": "ListItem",
    "position": 1,
    "name": "Accueil",
    "item": process.env.NEXT_PUBLIC_URL || 'https://www.ytenergie.fr'
  });

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <JSONLD type="BreadcrumbList" data={jsonLdData} />
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <Link href="/" className="hover:text-hm-blue flex items-center">
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
            {index === items.length - 1 ? (
              <span className="font-medium text-hm-blue truncate max-w-[200px] md:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-hm-blue transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
