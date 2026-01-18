import { MetadataRoute } from 'next';
import { blogPosts } from './lib/blogData';
import { installations } from './lib/installationsData';

const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://www.ytenergie.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/a-propos',
    '/nos-offres',
    '/nos-installations',
    '/blog',
    '/form/devis-simulation',
    '/legal/mentions-legales',
    '/legal/cgu',
    '/legal/politique-de-confidentialite',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const installationRoutes = installations.map((install) => ({
    url: `${baseUrl}/nos-installations/${install.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Génération des routes locales pour le SEO (/devis/ville)
  // On extrait les villes uniques des installations pour créer les landing pages locales
  const cities = Array.from(new Set(installations.map(i => i.location.split(' (')[0].toLowerCase().replace(/ /g, '-').replace(/[éèê]/g, 'e'))));
  
  const localRoutes = cities.map((city) => ({
    url: `${baseUrl}/devis/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9, // Haute priorité pour le SEO local
  }));

  return [...staticRoutes, ...blogRoutes, ...installationRoutes, ...localRoutes];
}
