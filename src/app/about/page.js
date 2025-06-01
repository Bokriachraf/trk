import { Metadata } from 'next'

export const metadata = {
  title: 'À propos de TRK | Suivi Douanier',
  description: 'Découvrez notre mission de digitalisation du transit et du suivi douanier avec TRK.',
  keywords: 'À propos, transit, douane, TRK, digitalisation, conformité',
  robots: 'index, follow',
  openGraph: {
    title: 'À propos de TRK',
    description: 'Notre mission de digitalisation du transit et du suivi douanier.',
    url: 'https://trk-app.vercel.app/about',
    siteName: 'TRK App',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">À propos de TRK</h1>
        <p className="text-lg mb-4">
          TRK est une plateforme innovante dédiée à la digitalisation des opérations douanières et de transit.
        </p>
        <p className="text-lg mb-4">
          Notre objectif est de faciliter la gestion des expéditions, garantir la conformité réglementaire et offrir un
          suivi intelligent, rapide et transparent aux entreprises.
        </p>
        <p className="text-lg">
          Grâce à des outils modernes et une interface intuitive, TRK vous accompagne à chaque étape du processus
          douanier.
        </p>
      </div>
    </main>
  )
}