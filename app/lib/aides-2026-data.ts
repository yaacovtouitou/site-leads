export interface IncomeThreshold {
  bleu: number;
  jaune: number;
  violet: number;
  rose: number;
}

export const revenusPlafonds: {
  province: IncomeThreshold;
  idf: IncomeThreshold;
  parPersonneSupp: IncomeThreshold;
} = {
  province: {
    bleu: 17363,
    jaune: 22259,
    violet: 31185,
    rose: 31185, // Le seuil 'rose' est tout ce qui est supérieur à 'violet'
  },
  idf: {
    bleu: 24031,
    jaune: 29253,
    violet: 40851,
    rose: 40851, // Le seuil 'rose' est tout ce qui est supérieur à 'violet'
  },
  parPersonneSupp: {
    bleu: 5151,
    jaune: 6598,
    violet: 9357,
    rose: 9357, // Note: Le document indique le même montant pour Violet et Rose
  },
};

export const renovationAmpleur = {
  plafondDépenses: {
    saut2classes: 30000,
    saut3classesPlus: 40000,
  },
  tauxPriseEnCharge: {
    bleu: 0.80,
    jaune: 0.60,
    violet: 0.45,
    rose: 0.10,
  },
  bonusSortiePassoire: 0.10, // Supprimé en 2026 mais conservé ici pour référence
};

export const aidesGestesIsoles = {
  pacAirEau: { bleu: 5000, jaune: 4000, violet: 3000, rose: 0 },
  systemeSolaireCombine: { bleu: 10000, jaune: 8000, violet: 4000, rose: 0 },
  chauffeEauSolaire: { bleu: 4000, jaune: 3000, violet: 2000, rose: 0 },
  poeleGranules: { bleu: 1250, jaune: 1000, violet: 500, rose: 0 },
};

export const ceePrimes = {
  pacAirEau: {
    modestes: 4200, // Bleu & Jaune
    classiques: 2625, // Violet & Rose
  },
};

export const reglesMetier = {
  ancienneteLogement: 15, // ans
  ancienneteLogementChauffage: 2, // ans
  accompagnateurRenovObligatoire: true,
  auditEnergetiqueObligatoire: true,
  exclusions: ['Chaudière Gaz THPE'],
  solairePhotovoltaique: {
    primeAutoconsommationParKWc: 185, // Exemple pour 3kWc
  },
};

export const bonus = [
  {
    nom: 'Éco-Prêt à Taux Zéro (Éco-PTZ)',
    description: 'Financez le reste à charge sans intérêts, jusqu\'à 50 000 € sur 20 ans.',
  },
  {
    nom: 'TVA à 5,5%',
    description: 'Appliquée directement sur la facture par votre artisan RGE.',
  },
  {
    nom: 'Prêt Avance Mutation',
    description: 'Pour les ménages modestes, une avance remboursable à la vente du bien.',
  },
];
