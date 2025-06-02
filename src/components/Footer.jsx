'use client'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 bg-black bg-opacity-60 text-white py-4 px-8 shadow-inner backdrop-blur-md">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} TRK Transit. Tous droits réservés.</p>
      </div>
    </footer>
  )
}