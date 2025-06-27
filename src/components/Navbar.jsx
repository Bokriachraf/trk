'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../redux/actions/userActions'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showServiceDropdown, setShowServiceDropdown] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const dispatch = useDispatch()

  const userSignin = useSelector((state) => state.userSignin || {})
  const { userInfo } = userSignin

  const signoutHandler = () => {
    dispatch(signout())
    setMenuOpen(false)
  }

  // Gestion du sticky dynamique
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${
        isSticky ? 'shadow-xl bg-black/80 backdrop-blur-md' : 'bg-black/60'
      } text-white py-4 px-6 fixed top-0 left-0 right-0 z-20 transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo et nom utilisateur */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">DouaNet Transit</h1>
          {userInfo && (
            <span className="text-sm md:hidden bg-green-700 text-white px-2 py-1 rounded">
              {userInfo.name}
            </span>
          )}
         {userInfo?.isAdmin && (
  <Link href="/admin" className="text-sm font-medium text-white hover:underline">
    🔐 Admin
  </Link>
)}
        </div>

        {/* Bouton hamburger pour mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6 items-center relative">
          <li><Link href="/" className="hover:text-yellow-400">Accueil</Link></li>
          <li><Link href="#tableau" className="hover:text-yellow-400">Expéditions</Link></li>
          <li><Link href="/about" className="hover:text-yellow-400">À propos</Link></li>

          {/* Dropdown Services & Activités */}
          <li
            className="relative"
            onMouseEnter={() => setShowServiceDropdown(true)}
            onMouseLeave={() => setShowServiceDropdown(false)}
          >
            <span className="hover:text-yellow-400 cursor-pointer">Services & Activités</span>
            {showServiceDropdown && (
              <ul className="absolute top-full left-0 bg-black bg-opacity-80 shadow-lg py-2 rounded z-30">
                <li><Link href="/services" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Nos Services</Link></li>
                <li><Link href="/activities" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Nos Activités</Link></li>
              </ul>
            )}
          </li>


          {/* Bouton contact stylisé */}
          <li>
            <Link
              href="/devis/suivi"
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-full font-semibold transition-all duration-300"
            >
              ✉️ Suivi des dossiers
            </Link>
          </li>

          {/* Auth */}
          {userInfo ? (
            <li>
              <span className="hover:text-yellow-400 cursor-default">{userInfo.name}</span>
              <button onClick={signoutHandler} className="ml-2 text-sm text-red-500 hover:underline">Se déconnecter</button>
            </li>
          ) : (
            <li><Link href="/signin" className="hover:text-yellow-400">Se connecter</Link></li>
          )}
        </ul>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Accueil</Link>
          <Link href="#tableau" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Tableau de bord</Link>
          <Link href="/devis/suivi" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Suivi des dossiers</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Nos Services</Link>
          <Link href="/activities" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Nos Activités</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">À propos</Link>

          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block bg-yellow-400 text-black px-4 py-2 rounded-full text-center font-semibold"
          >
            ✉️ Contact
          </Link>

          {userInfo ? (
            <button onClick={signoutHandler} className="block text-left text-red-500 hover:underline w-full">Se déconnecter</button>
          ) : (
            <Link href="/signin" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Se connecter</Link>
          )}
        </div>
      )}
    </nav>
  )
}

