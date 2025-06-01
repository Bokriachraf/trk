'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-60 text-white py-4 px-8 fixed top-0 left-0 right-0 z-20 shadow-md backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">TRK Transit</h1>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-yellow-400 transition">Accueil</Link>
          </li>
          <li>
            <Link href="#tableau" className="hover:text-yellow-400 transition">Tableau de bord</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-yellow-400 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}