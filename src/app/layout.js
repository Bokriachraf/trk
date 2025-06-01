import '../styles/globals.css'
import Providers from './Providers'

export const metadata = {
  title: {
    default: 'TRK | Plateforme de Suivi Douanier',
    template: '%s | TRK',
  },
  description: 'Plateforme de suivi douanier intelligente et digitalisée.',
  keywords: 'TRK, douane, transit, blockchain, suivi, expédition, conformité',
  robots: 'index, follow',
  authors: [{ name: 'Votre Nom ou Entreprise' }],
  openGraph: {
    title: 'TRK - Suivi Douanier Digital',
    siteName: 'TRK',
    description: 'Suivi intelligent et conformité des expéditions douanières.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://trk-app.vercel.app',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}