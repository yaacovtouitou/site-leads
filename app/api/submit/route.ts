import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const submissionSchema = z.object({
  projectType: z.enum(['PAC', 'SOLAR']),
  housingType: z.enum(['HOUSE', 'APARTMENT']),
  ownerStatus: z.enum(['OWNER', 'TENANT']),
  heatingType: z.enum(['ELECTRICITY', 'GAS', 'OIL', 'WOOD', 'OTHER']),
  postalCode: z.string().regex(/^[0-9]{5}$/),
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
});

// Dictionnaires de traduction
const translations: Record<string, string> = {
  PAC: 'Pompe à Chaleur',
  SOLAR: 'Panneaux Solaires',
  HOUSE: 'Maison Individuelle',
  APARTMENT: 'Appartement',
  OWNER: 'Propriétaire',
  TENANT: 'Locataire',
  ELECTRICITY: 'Électricité',
  GAS: 'Gaz',
  OIL: 'Fioul',
  WOOD: 'Bois',
  OTHER: 'Autre'
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawData = submissionSchema.parse(body);

    // Traduction des données pour l'humain
    const data = {
      ...rawData,
      projectType: translations[rawData.projectType] || rawData.projectType,
      housingType: translations[rawData.housingType] || rawData.housingType,
      ownerStatus: translations[rawData.ownerStatus] || rawData.ownerStatus,
      heatingType: translations[rawData.heatingType] || rawData.heatingType,
    };

    // 1. Envoi vers Google Sheets
    const googleSheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    
    if (googleSheetUrl) {
      try {
        await fetch(googleSheetUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } catch (sheetError) {
        console.error("Erreur Google Sheet:", sheetError);
      }
    }

    // 2. Envoi de l'email de confirmation (Resend)
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'YTenergie <contact@ytenergie.fr>',
        to: [data.email],
        subject: 'Confirmation de votre demande d\'étude - YTenergie',
        html: `
          <div style="font-family: sans-serif; color: #333;">
            <h1>Bonjour ${data.fullName},</h1>
            <p>Nous avons bien reçu votre demande de simulation pour votre projet <strong>${data.projectType}</strong>.</p>
            <p>Un expert va analyser votre dossier (Code postal: ${data.postalCode}) et vérifier votre éligibilité aux aides 2026.</p>
            <p>Vous serez recontacté sous 24h au <strong>${data.phone}</strong>.</p>
            <br/>
            <p>Cordialement,</p>
            <p>L'équipe YTenergie</p>
          </div>
        `,
      });
      
      // Notification interne
      await resend.emails.send({
        from: 'YTenergie Leads <contact@ytenergie.fr>',
        to: ['julesparnass@gmail.com'],
        subject: `Nouveau Lead : ${data.fullName} (${data.postalCode})`,
        html: `
          <h1>Nouveau prospect !</h1>
          <ul>
            <li><strong>Nom :</strong> ${data.fullName}</li>
            <li><strong>Tel :</strong> ${data.phone}</li>
            <li><strong>Email :</strong> ${data.email}</li>
            <li><strong>Projet :</strong> ${data.projectType}</li>
            <li><strong>Logement :</strong> ${data.housingType}</li>
            <li><strong>Statut :</strong> ${data.ownerStatus}</li>
            <li><strong>Chauffage :</strong> ${data.heatingType}</li>
            <li><strong>Code Postal :</strong> ${data.postalCode}</li>
          </ul>
        `
      });
    }

    return NextResponse.json({ success: true, message: "Dossier reçu avec succès" });

  } catch (error) {
    console.error("Erreur lors de la soumission:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Erreur interne du serveur" }, { status: 500 });
  }
}
