
import QuizForm from "@/components/QuizForm";

export default function DevisPage() {
  return (
    <div className="bg-hm-gray py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-hm-blue tracking-tight mb-4">
            Estimez votre projet et vos aides
          </h1>
          <p className="text-lg text-gray-600">
            Répondez à quelques questions pour recevoir une simulation personnalisée et gratuite de votre projet de rénovation énergétique.
          </p>
        </div>
        
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden text-hm-blue max-w-3xl mx-auto">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <span className="font-bold text-lg">Simulateur d'aides 2026</span>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">Gratuit & Sans Engagement</span>
            </div>
            <div className="p-4 md:p-8">
                <QuizForm />
            </div>
        </div>
      </div>
    </div>
  );
}
