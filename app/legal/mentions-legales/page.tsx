
import Header from "../../components/Header";

export default function MentionsLegalesPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-hm-blue mb-8">Mentions Légales</h1>
          <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
            <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
            
            <h3 className="text-xl font-semibold text-hm-blue mt-8 mb-4">Édition du site</h3>
            <p>Le présent site, accessible à l’URL www.ytenergie.fr (le « Site »), est édité par :</p>
            <p>
              <strong>YTenergie</strong>, société par actions simplifiée (SAS) au capital de 100 000 euros, inscrite au R.C.S. de MEAUX sous le numéro 867 800 580, dont le siège social est situé au 52 quai des carrières, 94220 Charenton-le-Pont, France.
            </p>
            <p>Numéro de TVA intracommunautaire : FR89867800580</p>
            
            <h3 className="text-xl font-semibold text-hm-blue mt-8 mb-4">Directeur de publication</h3>
            <p>Le Directeur de la publication du Site est le représentant légal de la société YTenergie.</p>
            
            <h3 className="text-xl font-semibold text-hm-blue mt-8 mb-4">Nous contacter</h3>
            <ul className="list-none p-0 space-y-2">
              <li><strong>Par téléphone :</strong> <a href="tel:0662102640" className="text-hm-blue hover:underline">06 62 10 26 40</a></li>
              <li><strong>Par email :</strong> <a href="mailto:julesparnass@gmail.com" className="text-hm-blue hover:underline">julesparnass@gmail.com</a></li>
              <li><strong>Par courrier :</strong> 52 quai des carrières, 94220 Charenton-le-Pont, France</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
