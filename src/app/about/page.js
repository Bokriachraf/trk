'use client'

import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="pt-20 pb-24 px-6 bg-gray-50 text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">À propos de <span className="text-yellow-500">TRK</span></h1>
          <p className="text-lg text-gray-600">
            Une solution moderne et intelligente pour la gestion douanière et le transit.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-3">🌍 Notre mission</h2>
            <p className="text-gray-700 leading-relaxed">
              TRK est né de la volonté de transformer le suivi douanier traditionnel grâce à la digitalisation.
              Nous aidons les entreprises à suivre leurs expéditions en temps réel, garantir la conformité réglementaire
              et améliorer leur performance logistique.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/IndustrialLogistics.jpg"
              alt="Suivi douanier digitalisé"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">🚀 Nos objectifs</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Réduire les délais logistiques par la digitalisation des procédures.</li>
            <li>Assurer la traçabilité et la conformité des dossiers douaniers.</li>
            <li>Fournir un tableau de bord clair et interactif.</li>
            <li>Accompagner les entreprises avec un support réactif et humain.</li>
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold mb-3">📬 Nous contacter</h2>
          <p className="text-gray-700">
            Vous souhaitez en savoir plus ou collaborer avec nous ? Contactez notre équipe via la page dédiée ou envoyez-nous un email à <a href="mailto:contact@trk-app.vercel.app" className="text-blue-600 underline">contact@trk-app.vercel.app</a>.
          </p>
        </section>
      </div>
    </main>
  )
}