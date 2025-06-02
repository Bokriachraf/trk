'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <nav className="bg-black bg-opacity-60 text-white py-4 px-8 fixed top-0 left-0 right-0 z-20 shadow-md backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">TRK Transit</h1>
        <ul className="flex gap-6 items-center relative">
          <li>
            <Link href="/" className="hover:text-yellow-400 transition">Accueil</Link>
          </li>
          <li>
            <Link href="#tableau" className="hover:text-yellow-400 transition">Tableau de bord</Link>
          </li>
          <li>
            <Link href="/shipments" className="hover:text-yellow-400 transition">Expéditions</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="hover:text-yellow-400 transition cursor-pointer">Services & Activités</span>
            {showDropdown && (
              <ul className="absolute top-full left-0 bg-black bg-opacity-80 shadow-lg py-2 rounded z-30">
                <li>
                  <Link href="/services" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Nos Services</Link>
                </li>
                <li>
                  <Link href="/activities" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Nos Activités</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-400 transition">À propos</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-yellow-400 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}