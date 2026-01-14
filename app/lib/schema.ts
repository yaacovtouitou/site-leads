
import { z } from 'zod';

export const quizSchema = z.object({
  // Champs existants
  zipCode: z.string().regex(/^[0-9]{5}$/, 'Code postal invalide'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Numéro de téléphone invalide'),
  
  // Nouveaux champs pour le calcul
  householdSize: z.number().min(1, "Le ménage doit contenir au moins 1 personne."),
  income: z.number().min(0, "Le revenu ne peut pas être négatif."),
  isIDF: z.boolean(),
  logementAge: z.number().min(0, "L'âge du logement ne peut pas être négatif."),
  
  projectType: z.enum(['ampleur', 'geste']),
  
  // Champs conditionnels
  dpeJump: z.number().min(0).max(7).optional(),
  gesteType: z.enum(['pacAirEau', 'systemeSolaireCombine', 'chauffeEauSolaire', 'poeleGranules']).optional(),
  projectCost: z.number().min(0).optional(),
});
