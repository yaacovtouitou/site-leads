// Banque d'images Unsplash simplifiée et éprouvée
const solarImages = [
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1000"
];


// Données des régions et villes
const regionsData: Record<string, string[]> = {
  "Hauts-de-France": ["Lille", "Roubaix", "Dunkerque", "Arras", "Amiens", "Saint-Quentin", "Beauvais", "Calais"],
  "Île-de-France": ["Meaux", "Évry-Courcouronnes", "Versailles", "Boulogne-Billancourt", "Argenteuil", "Chelles", "Melun", "Cergy"],
  "Occitanie": ["Toulouse", "Montpellier", "Perpignan", "Nîmes", "Béziers", "Montauban", "Albi", "Narbonne"],
  "Auvergne-Rhône-Alpes": ["Lyon", "Grenoble", "Valence", "Saint-Étienne", "Annecy", "Clermont-Ferrand", "Villeurbanne", "Chambéry"],
  "Provence-Alpes-Côte d'Azur": ["Marseille", "Nice", "Toulon", "Aix-en-Provence", "Avignon", "Hyères", "Fréjus", "Cannes"],
  "Nouvelle-Aquitaine": ["Bordeaux", "Limoges", "Poitiers", "Pau", "La Rochelle", "Pessac", "Mérignac", "Bayonne"],
  "Grand Est": ["Strasbourg", "Reims", "Metz", "Nancy", "Mulhouse", "Colmar", "Troyes"],
  "Pays de la Loire": ["Nantes", "Angers", "Le Mans", "Saint-Nazaire", "La Roche-sur-Yon"],
  "Bretagne": ["Rennes", "Brest", "Lorient", "Quimper", "Vannes"],
  "Normandie": ["Rouen", "Caen", "Le Havre", "Cherbourg"],
  "Bourgogne-Franche-Comté": ["Dijon", "Besançon", "Belfort", "Chalon-sur-Saône"],
  "Centre-Val de Loire": ["Orléans", "Tours", "Bourges", "Chartres"]
};

// Installations manuelles existantes
const manualInstallations = [
  {
    slug: "origny-sainte-benoite",
    title: "6 kWc à ORIGNY SAINTE BENOITE",
    location: "Origny-Sainte-Benoite (02)",
    region: "Hauts-de-France",
    power: "6 kWc",
    panels: "16 panneaux DualSun Flash",
    inverter: "Micro-onduleurs Enphase IQ8",
    description: "Une installation optimisée pour l'autoconsommation avec vente du surplus. Ce client a choisi de couvrir 70% de ses besoins électriques annuels grâce à cette centrale solaire performante.",
    imageUrl: solarImages[0],
    gallery: [solarImages[0], solarImages[1]]
  },
  {
    slug: "lavaqueresse",
    title: "9 kWc à LAVAQUERESSE",
    location: "Lavaqueresse (02)",
    region: "Hauts-de-France",
    power: "9 kWc",
    panels: "24 panneaux Trina Solar Vertex S",
    inverter: "Onduleur central Huawei SUN2000",
    description: "Installation de grande puissance sur une toiture exposée plein sud. L'objectif est de maximiser la production pour alimenter une pompe à chaleur et un véhicule électrique.",
    imageUrl: solarImages[1],
    gallery: [solarImages[1]]
  },
  {
    slug: "saulchery",
    title: "9 kWc à SAULCHERY",
    location: "Saulchery (02)",
    region: "Hauts-de-France",
    power: "9 kWc",
    panels: "24 panneaux DualSun",
    inverter: "Enphase IQ8+",
    description: "Rénovation énergétique complète avec intégration solaire esthétique. Les panneaux noirs s'intègrent parfaitement à la toiture en ardoise.",
    imageUrl: solarImages[2],
    gallery: [solarImages[2]]
  },
  {
    slug: "laon",
    title: "3 kWc à LAON",
    location: "Laon (02)",
    region: "Hauts-de-France",
    power: "3 kWc",
    panels: "8 panneaux SunPower Maxeon",
    inverter: "Enphase IQ7A",
    description: "Petite installation résidentielle idéale pour gommer le talon de consommation et réduire la facture d'électricité de 30 à 40%.",
    imageUrl: solarImages[3],
    gallery: [solarImages[3]]
  },
  {
    slug: "hirson",
    title: "4.5 kWc à HIRSON",
    location: "Hirson (02)",
    region: "Hauts-de-France",
    power: "4.5 kWc",
    panels: "12 panneaux DualSun",
    inverter: "Huawei SUN2000",
    description: "Installation sur toiture tuile avec système de surimposition K2 Systems. Une production fiable pour une famille de 4 personnes.",
    imageUrl: solarImages[4],
    gallery: [solarImages[4]]
  },
  {
    slug: "mont-saint-pere",
    title: "6 kWc à MONT-SAINT-PERE",
    location: "Mont-Saint-Père (02)",
    region: "Hauts-de-France",
    power: "6 kWc",
    panels: "16 panneaux Trina Solar",
    inverter: "Enphase IQ8M",
    description: "Projet clé en main incluant la gestion administrative et le raccordement Enedis. Le client bénéficie de la prime à l'autoconsommation.",
    imageUrl: solarImages[0],
    gallery: [solarImages[0]]
  }
];

// Génération automatique des installations par région
const generatedInstallations: any[] = [];

let globalImageIndex = 0;

Object.entries(regionsData).forEach(([region, cities]) => {
  cities.forEach((city, index) => {
    const configs = [
      { power: "3 kWc", panels: "8 panneaux DualSun", inverter: "Enphase IQ8" },
      { power: "6 kWc", panels: "16 panneaux SunPower", inverter: "Enphase IQ8M" },
      { power: "9 kWc", panels: "24 panneaux Trina Solar", inverter: "Huawei SUN2000" },
      { power: "4.5 kWc", panels: "12 panneaux DualSun", inverter: "Enphase IQ8+" },
    ];
    
    const config = configs[index % configs.length];
    const image = solarImages[globalImageIndex % solarImages.length];
    globalImageIndex++;
    
    generatedInstallations.push({
      slug: city.toLowerCase().replace(/ /g, '-').replace(/[éèê]/g, 'e'),
      title: `${config.power} à ${city.toUpperCase()}`,
      location: `${city} (${region})`,
      region: region,
      power: config.power,
      panels: config.panels,
      inverter: config.inverter,
      description: `Installation photovoltaïque réalisée par YTenergie à ${city}. Ce projet en ${region} permet à nos clients de réduire significativement leur facture d'électricité grâce à l'autoconsommation.`,
      imageUrl: image,
      gallery: [image]
    });
  });
});

export const installations = [...manualInstallations, ...generatedInstallations];
