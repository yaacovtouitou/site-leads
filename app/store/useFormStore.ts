import { create } from 'zustand';

export type ProjectType = 'PAC' | 'SOLAR' | null;
export type HousingType = 'HOUSE' | 'APARTMENT' | null;
export type OwnerStatus = 'OWNER' | 'TENANT' | null;
export type HeatingType = 'ELECTRICITY' | 'GAS' | 'OIL' | 'WOOD' | 'OTHER' | null;

interface FormState {
  step: number;
  projectType: ProjectType;
  housingType: HousingType;
  ownerStatus: OwnerStatus;
  heatingType: HeatingType;
  postalCode: string;
  email: string;
  phone: string;
  fullName: string;
  
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setProjectType: (type: ProjectType) => void;
  setHousingType: (type: HousingType) => void;
  setOwnerStatus: (status: OwnerStatus) => void;
  setHeatingType: (type: HeatingType) => void;
  setPostalCode: (code: string) => void;
  setContactInfo: (info: { email: string; phone: string; fullName: string }) => void;
  reset: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  step: 1,
  projectType: null,
  housingType: null,
  ownerStatus: null,
  heatingType: null,
  postalCode: '',
  email: '',
  phone: '',
  fullName: '',

  setStep: (step) => set({ step }),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: Math.max(1, state.step - 1) })),
  setProjectType: (projectType) => set({ projectType }),
  setHousingType: (housingType) => set({ housingType }),
  setOwnerStatus: (ownerStatus) => set({ ownerStatus }),
  setHeatingType: (heatingType) => set({ heatingType }),
  setPostalCode: (postalCode) => set({ postalCode }),
  setContactInfo: ({ email, phone, fullName }) => set({ email, phone, fullName }),
  reset: () => set({
    step: 1,
    projectType: null,
    housingType: null,
    ownerStatus: null,
    heatingType: null,
    postalCode: '',
    email: '',
    phone: '',
    fullName: ''
  }),
}));
