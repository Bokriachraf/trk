'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../redux/actions/userActions'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showServiceDropdown, setShowServiceDropdown] = useState(false)
  const dispatch = useDispatch()

  const userSignin = useSelector((state) => state.userSignin || {})
  const { userInfo } = userSignin

  const signoutHandler = () => {
    dispatch(signout())
    setMenuOpen(false)
  }

  return (
    <nav className="bg-black bg-opacity-60 text-white py-4 px-6 fixed top-0 left-0 right-0 z-20 shadow-md backdrop-blur-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo et nom utilisateur */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">DouaNet Transit</h1>
          {/* Afficher le nom utilisateur sur mobile */}
          {userInfo && (
            <span className="text-sm md:hidden bg-green-700 text-white px-2 py-1 rounded">
              {userInfo.name}
            </span>
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
          <li><Link href="#tableau" className="hover:text-yellow-400">Tableau de bord</Link></li>
          <li><Link href="/shipments" className="hover:text-yellow-400">Expéditions</Link></li>

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

          <li><Link href="/about" className="hover:text-yellow-400">À propos</Link></li>
          <li><Link href="#contact" className="hover:text-yellow-400">Contact</Link></li>

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
          <Link href="/shipments" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Expéditions</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Nos Services</Link>
          <Link href="/activities" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Nos Activités</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">À propos</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Contact</Link>
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
// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { signout } from '../redux/actions/userActions';

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showServiceDropdown, setShowServiceDropdown] = useState(false);
//   const [showUserDropdown, setShowUserDropdown] = useState(false);
//   const userSignin = useSelector((state) => state.userSignin || {});
//   const { userInfo } = userSignin;
//   const dispatch = useDispatch();

//   const signoutHandler = () => {
//     dispatch(signout());
//     setShowUserDropdown(false);
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="bg-black bg-opacity-60 text-white py-4 px-4 md:px-8 fixed top-0 left-0 right-0 z-20 shadow-md backdrop-blur-md">
//       <div className="flex justify-between items-center max-w-7xl mx-auto">
//         <h1 className="text-xl font-bold">DouaNet Transit</h1>

//         {/* Hamburger for mobile */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-white focus:outline-none"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
// </svg>
//             {/* <i className="fas fa-bars text-xl"></i> */}
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6 items-center relative">
//           <li><Link href="/" className="hover:text-yellow-400 transition">Accueil</Link></li>
//           <li><Link href="#tableau" className="hover:text-yellow-400 transition">Tableau de bord</Link></li>
//           <li><Link href="/shipments" className="hover:text-yellow-400 transition">Expéditions</Link></li>
//           <li
//             className="relative"
//             onMouseEnter={() => setShowServiceDropdown(true)}
//             onMouseLeave={() => setShowServiceDropdown(false)}
//           >
//             <span className="hover:text-yellow-400 transition cursor-pointer">
//               Services & Activités
//             </span>
//             {showServiceDropdown && (
//               <ul className="absolute top-full left-0 bg-black bg-opacity-80 shadow-lg py-2 rounded z-30">
//                 <li><Link href="/services" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Nos Services</Link></li>
//                 <li><Link href="/activities" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Nos Activités</Link></li>
//               </ul>
//             )}
//           </li>
//           <li><Link href="/about" className="hover:text-yellow-400 transition">À propos</Link></li>
//           <li><Link href="#contact" className="hover:text-yellow-400 transition">Contact</Link></li>
//           {userInfo ? (
//             <li
//               className="relative"
//               onMouseEnter={() => setShowUserDropdown(true)}
//               onMouseLeave={() => setShowUserDropdown(false)}
//             >
//               <span className="hover:text-yellow-400 transition cursor-pointer">
//                 {userInfo.name} <i className="fa fa-caret-down"></i>
//               </span>
//               {showUserDropdown && (
//                 <ul className="absolute top-full left-0 bg-black bg-opacity-80 shadow-lg py-2 rounded z-30">
//                   <li>
//                     <button
//                       onClick={signoutHandler}
//                       className="block px-4 py-2 hover:bg-yellow-400 hover:text-black w-full text-left"
//                     >
//                       Se déconnecter
//                     </button>
//                   </li>
//                 </ul>
//               )}
//             </li>
//           ) : (
//             <li>
//               <Link href="/signin" className="hover:text-yellow-400 transition">Se connecter</Link>
//             </li>
//           )}
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden mt-4 bg-black bg-opacity-80 backdrop-blur-lg rounded shadow-lg p-4 space-y-4">
//           <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Accueil</Link>
//           <Link href="#tableau" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Tableau de bord</Link>
//           <Link href="/shipments" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Expéditions</Link>

//           {/* Services Dropdown for Mobile */}
//           <details className="text-white">
//             <summary className="cursor-pointer hover:text-yellow-400">Services & Activités</summary>
//             <div className="pl-4 mt-2 space-y-2">
//               <Link href="/services" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Nos Services</Link>
//               <Link href="/activities" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Nos Activités</Link>
//             </div>
//           </details>

//           <Link href="/about" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">À propos</Link>
//           <Link href="#contact" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Contact</Link>

//           {userInfo ? (
//             <div className="text-white">
//               <p className="mb-2">{userInfo.name}</p>
//               <button
//                 onClick={signoutHandler}
//                 className="block w-full text-left hover:text-yellow-400"
//               >
//                 Se déconnecter
//               </button>
//             </div>
//           ) : (
//             <Link href="/signin" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">
//               Se connecter
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { signout } from '../redux/actions/userActions';

// export default function Navbar() {
//   const [showServiceDropdown, setShowServiceDropdown] = useState(false);
//   const [showUserDropdown, setShowUserDropdown] = useState(false);
//   const userSignin = useSelector((state) => state.userSignin || {});
//   const { userInfo } = userSignin;
//   const dispatch = useDispatch();

//   const signoutHandler = () => {
//     dispatch(signout());
//   };

//   return (
//     <nav className="bg-black bg-opacity-60 text-white py-4 px-8 fixed top-0 left-0 right-0 z-20 shadow-md backdrop-blur-md">
//       <div className="flex justify-between items-center max-w-7xl mx-auto">
//         <h1 className="text-xl font-bold">DouaNet Transit</h1>
        
//         <ul className="flex gap-6 items-center relative">
//           <li>
//             <Link href="/" className="hover:text-yellow-400 transition">Accueil</Link>
//           </li>
//           <li>
//             <Link href="#tableau" className="hover:text-yellow-400 transition">Tableau de bord</Link>
//           </li>
//           <li>
//             <Link href="/shipments" className="hover:text-yellow-400 transition">Expéditions</Link>
//           </li>

//           {/* Services & Activités Dropdown */}
//           <li
//             className="relative"
//             onMouseEnter={() => setShowServiceDropdown(true)}
//             onMouseLeave={() => setShowServiceDropdown(false)}
//           >
//             <span className="hover:text-yellow-400 transition cursor-pointer">Services & Activités</span>
//             {showServiceDropdown && (
//               <ul className="absolute top-full left-0 bg-black bg-opacity-80 shadow-lg py-2 rounded z-30">
//                 <li>
//                   <Link href="/services" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Nos Services</Link>
//                 </li>
//                 <li>
//                   <Link href="/activities" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Nos Activités</Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li>
//             <Link href="/about" className="hover:text-yellow-400 transition">À propos</Link>
//           </li>
//           <li>
//             <Link href="#contact" className="hover:text-yellow-400 transition">Contact</Link>
//           </li>

//           {/* User Dropdown */}
//           {userInfo ? (
//             <li
//               className="relative"
//               onMouseEnter={() => setShowUserDropdown(true)}
//               onMouseLeave={() => setShowUserDropdown(false)}
//             >
//               <span className="hover:text-yellow-400 transition cursor-pointer">
//                 {userInfo.name} <i className="fa fa-caret-down"></i>
//               </span>
//               {showUserDropdown && (
//                 <ul className="absolute top-full left-0 bg-black bg-opacity-80 shadow-lg py-2 rounded z-30">
//                   <li>
//                     <button
//                       onClick={signoutHandler}
//                       className="block px-4 py-2 hover:bg-yellow-400 hover:text-black w-full text-left"
//                     >
//                       Se déconnecter
//                     </button>
//                   </li>
//                 </ul>
//               )}
//             </li>
//           ) : (
//             <li>
//               <Link href="/signin" className="hover:text-yellow-400 transition">
//                 Se connecter
//               </Link>
//             </li>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// 'use client'

// import Link from 'next/link'
// import { useState } from 'react'
// import { Menu, X } from 'lucide-react'

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   return (
//     <nav className="bg-black bg-opacity-60 text-white shadow-md fixed top-0 left-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 text-xl font-bold text-green-700">
//             <Link href="/">DouaNet</Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             <Link href="/" className="text-gray-700 hover:text-green-600">Accueil</Link>
//             <Link href="/services" className="text-gray-700 hover:text-green-600">Services</Link>
//             <Link href="/activites" className="text-gray-700 hover:text-green-600">Activités</Link>
//             <Link href="/devis" className="text-gray-700 hover:text-green-600">Devis gratuit</Link>
//             <Link href="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
//             <Link href="/signin" className="text-white bg-green-600 hover:bg-green-700 px-4 py-1 rounded">Connexion</Link>
//           </div>

//           {/* Burger Button Mobile */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow">
//           <Link href="/" className="block text-gray-700 hover:text-green-600" onClick={toggleMenu}>Accueil</Link>
//           <Link href="/services" className="block text-gray-700 hover:text-green-600" onClick={toggleMenu}>Services</Link>
//           <Link href="/activites" className="block text-gray-700 hover:text-green-600" onClick={toggleMenu}>Activités</Link>
//           <Link href="/devis" className="block text-gray-700 hover:text-green-600" onClick={toggleMenu}>Devis gratuit</Link>
//           <Link href="/contact" className="block text-gray-700 hover:text-green-600" onClick={toggleMenu}>Contact</Link>
//           <Link href="/signin" className="block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" onClick={toggleMenu}>Connexion</Link>
//         </div>
//       )}
//     </nav>
//   )
// }
