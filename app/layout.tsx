import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JSONLD from "./components/JSONLD";
import CookieBanner from "./components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_URL || "https://www.ytenergie.fr";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "YTenergie | Expert Rénovation Énergétique & Solaire (RGE) - Devis Gratuit",
    template: "%s | YTenergie - Expert RGE",
  },
  description: "Réduisez vos factures d'énergie jusqu'à 70% avec YTenergie. Installation de Pompes à Chaleur, Panneaux Solaires et Isolation. Artisan certifié RGE QualiPV & QualiPAC. Testez votre éligibilité aux aides de l'État 2026.",
  keywords: [
    "Pompe à chaleur", 
    "Panneaux solaires photovoltaïques", 
    "Installation RGE", 
    "MaPrimeRénov 2026", 
    "Isolation thermique extérieure", 
    "YTenergie", 
    "Charenton-le-Pont",
    "Rénovation globale",
    "Autoconsommation solaire"
  ],
  authors: [{ name: "YTenergie", url: baseUrl }],
  creator: "YTenergie",
  publisher: "YTenergie",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: baseUrl,
    siteName: "YTenergie",
    title: "YTenergie | Rénovation Énergétique & Solaire",
    description: "Passez à l'énergie verte avec YTenergie. Solutions clés en main : Solaire, Chauffage, Isolation. Devis gratuit et accompagnement aides de l'État.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YTenergie Rénovation Énergétique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YTenergie | Expert RGE Solaire & Chauffage",
    description: "Installation de panneaux solaires et pompes à chaleur. Profitez des aides 2026.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "YTenergie",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "image": `${baseUrl}/og-image.jpg`,
    "description": "Expert en rénovation énergétique : installation de panneaux solaires, pompes à chaleur et isolation thermique. Certifié RGE.",
    "telephone": "06 62 10 26 40",
    "email": "julesparnass@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "52 quai des carrières",
      "addressLocality": "Charenton-le-Pont",
      "postalCode": "94220",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8217,
      "longitude": 2.4136
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "priceRange": "€€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.facebook.com/ytenergie",
      "https://www.instagram.com/ytenergie",
      "https://www.linkedin.com/company/ytenergie"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-hm-gray text-hm-blue`}
      >
        <JSONLD type="Organization" data={organizationSchema} />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
