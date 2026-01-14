'use client';

import { useState } from 'react';
import { useFormStore } from '../store/useFormStore';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Home, Building2, User, Users, Zap, Flame, Droplets, Thermometer, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Progress } from './ui/Progress';

// Schemas de validation
const postalCodeSchema = z.object({
  postalCode: z.string().regex(/^[0-9]{5}$/, "Code postal invalide"),
});

const contactSchema = z.object({
  fullName: z.string().min(2, "Nom & Prénom trop courts"),
  email: z.string().email("Email invalide"),
  phone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, "Numéro de téléphone invalide"),
});

export default function QuizForm() {
  const store = useFormStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { register: registerPostal, handleSubmit: handlePostalSubmit, formState: { errors: postalErrors } } = useForm({
    resolver: zodResolver(postalCodeSchema),
    defaultValues: { postalCode: store.postalCode }
  });

  const { register: registerContact, handleSubmit: handleContactSubmit, formState: { errors: contactErrors } } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { fullName: store.fullName, email: store.email, phone: store.phone }
  });

  const totalSteps = 6;
  const progress = (store.step / totalSteps) * 100;

  const handleOptionSelect = (action: () => void) => {
    action();
    store.nextStep();
  };

  const onPostalSubmit = (data: { postalCode: string }) => {
    store.setPostalCode(data.postalCode);
    store.nextStep();
  };

  const onContactSubmit = async (data: { fullName: string; email: string; phone: string }) => {
    store.setContactInfo(data);
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...store,
          ...data,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        store.nextStep();
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur de connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white p-8 rounded-2xl text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-20 h-20 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Félicitations !</h2>
        <p className="text-lg text-gray-600 mb-6">
          Votre demande a bien été prise en compte. Un conseiller expert va analyser votre dossier et vous recontactera sous 24h pour vous confirmer votre éligibilité aux aides 2026.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg text-left">
          <h3 className="font-semibold text-hm-blue mb-2">Prochaines étapes :</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Analyse de votre profil (Revenus & Logement)</li>
            <li>Vérification des plafonds MaPrimeRénov' & CEE</li>
            <li>Appel de validation de votre projet</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
          <span>Étape {store.step} sur {totalSteps}</span>
          <span>{Math.round(progress)}% complété</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="p-2">
        {/* Step 1: Project Type */}
        {store.step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-hm-blue text-center">Quel est votre projet ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => handleOptionSelect(() => store.setProjectType('PAC'))}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-green-50 transition-all flex flex-col items-center gap-4 group"
              >
                <Thermometer className="w-10 h-10 text-gray-400 group-hover:text-primary" />
                <span className="font-semibold text-md">Pompe à Chaleur</span>
              </button>
              <button
                onClick={() => handleOptionSelect(() => store.setProjectType('SOLAR'))}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-green-50 transition-all flex flex-col items-center gap-4 group"
              >
                <Zap className="w-10 h-10 text-gray-400 group-hover:text-primary" />
                <span className="font-semibold text-md">Panneaux Solaires</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Housing Type */}
        {store.step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-hm-blue text-center">Votre type de logement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => handleOptionSelect(() => store.setHousingType('HOUSE'))}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-green-50 transition-all flex flex-col items-center gap-4 group"
              >
                <Home className="w-10 h-10 text-gray-400 group-hover:text-primary" />
                <span className="font-semibold text-md">Maison Individuelle</span>
              </button>
              <button
                onClick={() => handleOptionSelect(() => store.setHousingType('APARTMENT'))}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-green-50 transition-all flex flex-col items-center gap-4 group"
              >
                <Building2 className="w-10 h-10 text-gray-400 group-hover:text-primary" />
                <span className="font-semibold text-md">Appartement</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Owner Status */}
        {store.step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-hm-blue text-center">Êtes-vous propriétaire ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => handleOptionSelect(() => store.setOwnerStatus('OWNER'))}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-green-50 transition-all flex flex-col items-center gap-4 group"
              >
                <User className="w-10 h-10 text-gray-400 group-hover:text-primary" />
                <span className="font-semibold text-md">Propriétaire Occupant</span>
              </button>
              <button
                onClick={() => handleOptionSelect(() => store.setOwnerStatus('TENANT'))}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-green-50 transition-all flex flex-col items-center gap-4 group"
              >
                <Users className="w-10 h-10 text-gray-400 group-hover:text-primary" />
                <span className="font-semibold text-md">Locataire</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Heating Type */}
        {store.step === 4 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-hm-blue text-center">Chauffage actuel</h2>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => handleOptionSelect(() => store.setHeatingType('ELECTRICITY'))} className="p-4 border rounded-xl hover:border-primary hover:bg-green-50 flex flex-col items-center gap-2">
                <Zap className="w-8 h-8 text-gray-400" />
                <span>Électricité</span>
              </button>
              <button onClick={() => handleOptionSelect(() => store.setHeatingType('GAS'))} className="p-4 border rounded-xl hover:border-primary hover:bg-green-50 flex flex-col items-center gap-2">
                <Flame className="w-8 h-8 text-gray-400" />
                <span>Gaz</span>
              </button>
              <button onClick={() => handleOptionSelect(() => store.setHeatingType('OIL'))} className="p-4 border rounded-xl hover:border-primary hover:bg-green-50 flex flex-col items-center gap-2">
                <Droplets className="w-8 h-8 text-gray-400" />
                <span>Fioul</span>
              </button>
              <button onClick={() => handleOptionSelect(() => store.setHeatingType('WOOD'))} className="p-4 border rounded-xl hover:border-primary hover:bg-green-50 flex flex-col items-center gap-2">
                <Thermometer className="w-8 h-8 text-gray-400" />
                <span>Bois</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Postal Code */}
        {store.step === 5 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-hm-blue text-center">Où se situe le logement ?</h2>
            <form onSubmit={handlePostalSubmit(onPostalSubmit)} className="space-y-4">
              <div>
                <input
                  {...registerPostal('postalCode')}
                  type="text"
                  placeholder="Code Postal (ex: 75001)"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-lg text-center"
                  maxLength={5}
                />
                {postalErrors.postalCode && (
                  <p className="text-red-500 text-sm mt-2 text-center">{postalErrors.postalCode.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 min-h-touch"
              >
                Continuer <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}

        {/* Step 6: Contact Info */}
        {store.step === 6 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-hm-blue text-center">Dernière étape pour voir vos aides</h2>
            <p className="text-center text-gray-600 text-sm">Recevez votre simulation personnalisée par email.</p>
            <form onSubmit={handleContactSubmit(onContactSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom & Prénom</label>
                <input
                  {...registerContact('fullName')}
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Jean Dupont"
                />
                {contactErrors.fullName && <p className="text-red-500 text-sm mt-1">{contactErrors.fullName.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  {...registerContact('email')}
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  placeholder="jean.dupont@exemple.com"
                />
                {contactErrors.email && <p className="text-red-500 text-sm mt-1">{contactErrors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone mobile</label>
                <input
                  {...registerContact('phone')}
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  placeholder="06 12 34 56 78"
                />
                {contactErrors.phone && <p className="text-red-500 text-sm mt-1">{contactErrors.phone.message}</p>}
              </div>

              <div className="text-xs text-gray-500">
                <p>En cliquant sur "Voir mes aides", vous acceptez nos <a href="/legal/cgu" target="_blank" className="underline hover:text-hm-blue">Conditions d'Utilisation</a> et notre <a href="/legal/politique-de-confidentialite" target="_blank" className="underline hover:text-hm-blue">Politique de Confidentialité</a>.</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 min-h-touch disabled:opacity-70"
              >
                {isSubmitting ? 'Traitement...' : 'Voir le montant de mes aides'}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </div>
        )}

        {/* Back Button */}
        {store.step > 1 && !submitSuccess && (
          <button
            onClick={store.prevStep}
            className="mt-6 flex items-center text-gray-500 hover:text-gray-700 mx-auto text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Retour
          </button>
        )}
      </div>
    </div>
  );
}
