'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const sliderImages = [
  '/hero-transit1.webp',
  '/hero-transit2.webp',
  '/hero-transit3.webp',
  '/logistics.jpg',
  '/Logistics_Supply_Chain.jpg',
  '/hero-transit5.webp',
]

export default function Home() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Slider Fullscreen */}
      <div className="absolute inset-0 z-0">
        <Image
          src={sliderImages[current]}
          alt="Slide background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
          className="transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content overlay */}
      <main className="relative z-10 flex flex-col md:flex-row min-h-screen items-center justify-between p-10 gap-10 pt-24">
        {/* Tableau de bord */}
        <motion.div
          id="tableau"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        //   className="bg-white bg-opacity-90 rounded-xl p-6 w-full md:w-1/3 shadow-xl"
        // >
         className="text-white text-center md:text-left max-w-md"
        >
         <h2 className="text-4xl font-bold mb-4">DouaNet Votre Transitaire et Agent de Sourcing en Tunisie</h2>
         <h1 className="text-2xl font-bold text-center mb-4">
DouaNet est le meilleur partenaire dont vous aurez besoin pour toute votre chaîne d'approvisionnement : sourcing, contrôle qualité, transport et dédouanement, assurant des livraisons fiables en tunisie </h1>
          <Link href="/devis">
        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl">
          Devis gratuit
        </button>
      </Link>
          {/* <ShipmentForm />
          <ShipmentList /> */}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white text-center md:text-left max-w-md"
        >
          <h2 className="text-4xl font-bold mb-4">Digitalisez votre transit & douane</h2>
          <p className="mb-6 text-lg">Suivi intelligent, conformité réglementaire, gain de temps.</p>
          <Link href="/shipments">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl shadow-lg">
          Consulter mon dossier
          </button>
       </Link>
        </motion.div>
      </main>
    </div>
  )
}



