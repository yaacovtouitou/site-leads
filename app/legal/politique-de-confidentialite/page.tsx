
import Header from "../../components/Header";

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-hm-blue mb-8">Politique de Confidentialité</h1>
          <div className="prose prose-blue max-w-none text-gray-600">
            <p>La présente politique de confidentialité définit et vous informe de la manière dont YTenergie utilise et protège les informations que vous nous transmettez, le cas échéant, lorsque vous utilisez le présent site accessible à partir de l’URL suivante : www.ytenergie.fr (ci-après le « Site »).</p>
            
            <h3>Données personnelles collectées</h3>
            <p>D’une manière générale, il vous est possible de visiter le Site de YTenergie sans communiquer aucune information personnelle vous concernant. En toute hypothèse, vous êtes en aucune manière obligé de transmettre ces informations à YTenergie.</p>
            <p>Néanmoins, en cas de refus, il se peut que vous ne puissiez pas bénéficier de certaines informations ou services que vous avez demandé. A ce titre en effet, YTenergie peut être amené dans certains cas à vous demander de renseigner vos nom, prénom, adresse mail, numéro de téléphone, entreprise et fonction (ci-après vos « Informations Personnelles »). En fournissant ces informations, vous acceptez expressément qu’elles soient traitées par YTenergie, aux fins indiquées au point 2 ci-dessous ainsi qu’aux fins rappelées à la fin de chaque formulaire.</p>
            
            <h3>Finalités du traitement</h3>
            <p>YTenergie est susceptible de traiter vos Informations Personnelles :</p>
            <ul>
              <li>(a) aux fins de vous fournir les informations ou les services que vous avez demandé (notamment : l’envoi de la Newsletter, offre commerciale, livres blancs ou encore l’évaluation de votre niveau de conformité via un quizz) ; et/ou</li>
              <li>(b) aux fins de recueillir des informations nous permettant d’améliorer notre Site, nos produits et services (notamment par le biais de cookies) ; et/ou</li>
              <li>(c) aux fins de pouvoir vous contacter à propos de différents évènements relatifs à YTenergie, incluant notamment la mise à jour des produits et le support client.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
