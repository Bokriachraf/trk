'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../redux/actions/userActions';

export default function Navbar() {
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const userSignin = useSelector((state) => state.userSignin || {});
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <nav className="bg-black bg-opacity-60 text-white py-4 px-8 fixed top-0 left-0 right-0 z-20 shadow-md backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">DouaNet Transit</h1>
        
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

          {/* Services & Activités Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setShowServiceDropdown(true)}
            onMouseLeave={() => setShowServiceDropdown(false)}
          >
            <span className="hover:text-yellow-400 transition cursor-pointer">Services & Activités</span>
            {showServiceDropdown && (
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

          {/* User Dropdown */}
          {userInfo ? (
            <li
              className="relative"
              onMouseEnter={() => setShowUserDropdown(true)}
              onMouseLeave={() => setShowUserDropdown(false)}
            >
              <span className="hover:text-yellow-400 transition cursor-pointer">
                {userInfo.name} <i className="fa fa-caret-down"></i>
              </span>
              {showUserDropdown && (
                <ul className="absolute top-full left-0 bg-black bg-opacity-80 shadow-lg py-2 rounded z-30">
                  <li>
                    <button
                      onClick={signoutHandler}
                      className="block px-4 py-2 hover:bg-yellow-400 hover:text-black w-full text-left"
                    >
                      Se déconnecter
                    </button>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li>
              <Link href="/signin" className="hover:text-yellow-400 transition">
                Se connecter
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}