
import Header from "../../components/Header";

export default function CGUPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-hm-blue mb-8">Conditions Générales d'Utilisation</h1>
          <div className="prose prose-blue max-w-none text-gray-600">
            <p>Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par YTenergie et de définir les conditions d’accès et d’utilisation des services par « l'Utilisateur ».</p>
            <p>Les présentes CGU sont accessibles sur le site à la rubrique «CGU».</p>
            
            <h3>Article 1 : Les mentions légales</h3>
            <p>L'édition du site www.ytenergie.fr est assurée par la Société YTenergie au capital de 100 000 euros, immatriculée au RCS de MEAUX sous le numéro 888 888 888, dont le siège social est situé au 52 quai des carrières, 94220 Charenton-le-Pont.</p>
            <p>Numéro de téléphone : 06 62 10 26 40</p>
            <p>Adresse e-mail : julesparnass@gmail.com</p>
            <p>Le Directeur de la publication est : Monsieur le Directeur Général</p>
            
            <h3>Article 2 : Accès au site</h3>
            <p>Le site www.ytenergie.fr permet à l'Utilisateur un accès gratuit aux services suivants :</p>
            <ul>
              <li>Information sur les services de rénovation énergétique</li>
              <li>Demande de devis et simulation</li>
              <li>Articles de blog</li>
            </ul>
            <p>Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
