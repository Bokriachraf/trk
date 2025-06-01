'use client'

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-70 text-white py-6 mt-10 relative z-10">
  <div className="text-center text-sm">
    &copy; {new Date().getFullYear()} TRK Transit. Tous droits réservés.
  </div>
</footer>
  )
}