import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://www.ytenergie.fr';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
