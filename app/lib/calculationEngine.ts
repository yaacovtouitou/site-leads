
import {
  revenusPlafonds,
  renovationAmpleur,
  aidesGestesIsoles,
  ceePrimes,
  reglesMetier,
  type IncomeThreshold,
} from './aides-2026-data';

export type UserProfile = 'bleu' | 'jaune' | 'violet' | 'rose';

export interface UserInputs {
  householdSize: number;
  income: number;
  isIDF: boolean;
  projectType: 'ampleur' | 'geste';
  dpeJump?: number;
  gesteType?: keyof typeof aidesGestesIsoles;
  projectCost?: number;
  logementAge: number;
}

export interface CalculationResult {
  profile: UserProfile;
  aideMaPrimeRenov: number;
  primeCEE: number;
  totalAide: number;
  plafondDepenses: number;
  warnings: string[];
}

function getPlafondPourMenage(householdSize: number, plafonds: IncomeThreshold): number {
    if (householdSize <= 1) return plafonds.bleu; // This is a simplification
    // The logic should be based on the number of people, but the provided table is per person
    // This function needs to be improved if more detailed table is provided.
    // For now, let's use a simplified linear scaling for personnes supplementaires
    // A proper implementation would have a full table for 1, 2, 3, 4, 5+ people.
    const base = plafonds.bleu; // This is not correct, needs full table
    const supp = revenusPlafonds.parPersonneSupp.bleu; // Also needs to vary by color
    return base + (householdSize - 1) * supp;
}


export function determineUserProfile(
  income: number,
  householdSize: number,
  isIDF: boolean
): UserProfile {
  const plafonds = isIDF ? revenusPlafonds.idf : revenusPlafonds.province;
  const parPersonneSupp = revenusPlafonds.parPersonneSupp;

  const getSeuil = (profil: keyof IncomeThreshold) => {
    return plafonds[profil] + Math.max(0, householdSize - 1) * parPersonneSupp[profil];
  };

  if (income <= getSeuil('bleu')) return 'bleu';
  if (income <= getSeuil('jaune')) return 'jaune';
  if (income <= getSeuil('violet')) return 'violet';
  return 'rose';
}

export function calculateAide(inputs: UserInputs): CalculationResult {
  const { householdSize, income, isIDF, projectType, dpeJump, gesteType, projectCost = 0, logementAge } = inputs;

  const profile = determineUserProfile(income, householdSize, isIDF);
  let aideMaPrimeRenov = 0;
  let primeCEE = 0;
  let plafondDepenses = 0;
  const warnings: string[] = [];

  // Règle d'ancienneté du logement
  if (logementAge < reglesMetier.ancienneteLogement && projectType !== 'geste') {
    warnings.push(`Votre logement doit avoir plus de ${reglesMetier.ancienneteLogement} ans pour la plupart des aides.`);
  }

  if (projectType === 'ampleur') {
    if (reglesMetier.accompagnateurRenovObligatoire) {
        warnings.push("Un Accompagnateur Rénov' (MAR) est obligatoire pour ce parcours.");
    }
    if (reglesMetier.auditEnergetiqueObligatoire) {
        warnings.push("Un audit énergétique préalable est nécessaire pour débloquer ces aides.");
    }
    if (dpeJump && dpeJump >= 2) {
      plafondDepenses = dpeJump >= 3 ? renovationAmpleur.plafondDépenses.saut3classesPlus : renovationAmpleur.plafondDépenses.saut2classes;
      const taux = renovationAmpleur.tauxPriseEnCharge[profile];
      aideMaPrimeRenov = Math.min(projectCost, plafondDepenses) * taux;
      // Pour la rénovation d'ampleur, les CEE sont souvent intégrés.
      primeCEE = 0; 
      warnings.push("Pour la Rénovation d'Ampleur, les CEE sont généralement inclus dans le forfait MaPrimeRénov'.");
    } else {
        warnings.push("La rénovation d'ampleur requiert un saut d'au moins 2 classes DPE.");
    }
  } 
  else if (projectType === 'geste' && gesteType) {
    const aideGeste = aidesGestesIsoles[gesteType];
    if (aideGeste) {
      aideMaPrimeRenov = aideGeste[profile];
    }

    if (gesteType === 'pacAirEau') {
      primeCEE = (profile === 'bleu' || profile === 'jaune') ? ceePrimes.pacAirEau.modestes : ceePrimes.pacAirEau.classiques;
    }
    // Logique pour d'autres CEE gestes si nécessaire
  }
  
  if(profile === 'rose' && projectType === 'geste') {
    warnings.push("Les ménages aux revenus supérieurs (profil Rose) ne sont généralement pas éligibles aux aides par gestes.");
  }


  return {
    profile,
    aideMaPrimeRenov,
    primeCEE,
    totalAide: aideMaPrimeRenov + primeCEE,
    plafondDepenses,
    warnings,
  };
}
