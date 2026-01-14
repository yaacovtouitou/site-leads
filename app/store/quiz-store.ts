
import { create } from 'zustand';
import { z } from 'zod';
import { quizSchema } from '@/lib/schema';
import { type CalculationResult } from '@/lib/calculationEngine';

// Utiliser z.infer pour déduire le type des données du schéma
type QuizData = z.infer<typeof quizSchema>;

type State = {
  step: number;
  data: QuizData;
  results: CalculationResult | null;
};

type Actions = {
  nextStep: () => void;
  prevStep: () => void;
  setData: (data: Partial<QuizData>) => void;
  setResults: (results: CalculationResult) => void;
  reset: () => void;
};

const initialState: State = {
  step: 1,
  data: {
    // Initialiser les champs avec des valeurs par défaut valides
    zipCode: '',
    email: '',
    phone: '',
    householdSize: 1,
    income: 20000,
    isIDF: false,
    logementAge: 20,
    projectType: 'geste', // ou 'ampleur'
  },
  results: null,
};

export const useQuizStore = create<State & Actions>((set) => ({
  ...initialState,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  setData: (newData) =>
    set((state) => ({ data: { ...state.data, ...newData } })),
  setResults: (results) => set({ results }),
  reset: () => set({...initialState}),
}));
