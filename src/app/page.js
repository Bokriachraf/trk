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
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Animations ligne par ligne
  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, duration: 0.6 },
    }),
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Ken Burns */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {sliderImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === current ? 1 : 0,
              scale: index === current ? 1.1 : 1,
            }}
            transition={{ duration: 5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={img}
              alt="Background slide"
              fill
              priority={index === current}
              quality={100}
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
              sizes="100vw"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Contenu visible */}
      <main className="relative z-10 flex flex-col md:flex-row min-h-screen items-center justify-between p-6 md:p-10 gap-12 pt-24">
        {/* Bloc gauche */}
        <motion.div
          id="tableau"
          initial={{ x: -80, opacity: 20 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-center md:text-left max-w-xl"
        >
          <motion.h2
            custom={0}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-5xl font-bold mb-2 tracking-tight"
          >
            DouaNet, Votre Transitaire & Sourcing en Tunisie
          </motion.h2>

          <motion.h1
            custom={1}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-2xl font-medium mb-6 leading-relaxed"
          >
            Le partenaire qu’il vous faut pour le sourcing, le contrôle qualité,
            le transport et le dédouanement. Livraison fiable partout en Tunisie.
          </motion.h1>

          <Link href="/devis">
          <motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
>
 Devis gratuit
</motion.button>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 text-black px-6 py-3 rounded-xl shadow-md"
            >
              Devis gratuit
            </motion.button> */}
          </Link>
        </motion.div>

        {/* Bloc droit */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-16 pb-24 text-white text-center md:text-left max-w-xl"
        >
          <motion.h2
            custom={2}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="pt-7 text-3xl md:text-4xl font-bold mb-6"
          >
            Digitalisez votre transit & douane
          </motion.h2>
          <motion.p
            custom={3}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="  text-lg md:text-xl"
          >
            Suivi intelligent, conformité réglementaire, gain de temps.  
            <motion.span
    custom={2}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 2.6, delay: 1.8 } },
    }}
    className="block"
  >
Traçabilité complète de vos dossiers en temps réel.<br />  
  </motion.span>
         <motion.span
    custom={2}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 2.6, delay: 2.8 } },
    }}
    className="block"
  >
Centralisation sécurisée de tous vos documents.<br />
  </motion.span>
            <motion.span
    custom={2}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 2.6, delay: 3.8 } },
    }}
    className="block"
  >
Anticipez les délais, évitez les pénalités douanières.<br />
    <motion.span
    custom={2}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 2.6, delay: 4.8 } },
    }}
    className="block"
  >
    Réduction des risques de blocage ou de retard en douane.
  </motion.span>
  </motion.span>
          </motion.p>

          <Link href="/shipments">
          <motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="mt-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
>
  Consulter mon dossier
</motion.button>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-5 bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 text-black font-semibold px-6 py-3 rounded-xl shadow-lg"
            >
              Consulter mon dossier
            </motion.button> */}
          </Link>
        </motion.div>
      </main>
    </div>
  )
}




// 'use client'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { useState, useEffect } from 'react'

// const sliderImages = [
//   '/hero-transit1.webp',
//   '/hero-transit2.webp',
//   '/hero-transit3.webp',
//   '/logistics.jpg',
//   '/Logistics_Supply_Chain.jpg',
//   '/hero-transit5.webp',
// ]

// export default function Home() {
//   const [current, setCurrent] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % sliderImages.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Image de fond animée net */}
//       <div className="fixed inset-0 -z-10">
//         {sliderImages.map((img, index) => (
//           <Image
//             key={index}
//             src={img}
//             alt="Background slide"
//             fill
//             quality={100}
//             priority={index === current}
//             style={{
//               objectFit: 'cover',
//               objectPosition: 'center top',
//               transition: 'opacity 1s ease-in-out',
//               opacity: index === current ? 1 : 0,
//               zIndex: index === current ? 0 : -1,
//               position: 'absolute',
//             }}
//             sizes="100vw"
//           />
//         ))}
//         <div className="absolute inset-0 bg-black bg-opacity-50" />
//       </div>

//       {/* Contenu en overlay */}
//       <main className="relative z-10 flex flex-col md:flex-row min-h-screen items-center justify-between p-6 md:p-10 gap-12 pt-24">
//         {/* Bloc gauche */}
//         <motion.div
//           id="tableau"
//           initial={{ x: -80, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-white text-center md:text-left max-w-xl"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
//             DouaNet, Votre Transitaire & Sourcing en Tunisie
//           </h2>
//           <h1 className="text-lg md:text-2xl font-medium mb-6 leading-relaxed">
//             Le partenaire idéal pour le sourcing, le contrôle qualité,
//             le transport et le dédouanement. Livraison fiable partout en Tunisie.
//           </h1>
//           <Link href="/devis">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="mt-6 bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 text-black px-6 py-3 rounded-xl shadow-md"
//             >
//               Devis gratuit
//             </motion.button>
//           </Link>
//         </motion.div>

//         {/* Bloc droit */}
//         <motion.div
//           initial={{ y: 80, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="pb-24 text-white text-center md:text-left max-w-xl"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Digitalisez votre transit & douane
//           </h2>
//           <p className="mb-6 text-lg md:text-xl">
//             Suivi intelligent, conformité réglementaire, gain de temps.
//           </p>
//           <Link href="/shipments">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 text-black font-semibold px-6 py-3 rounded-xl shadow-lg"
//             >
//               Consulter mon dossier
//             </motion.button>
//           </Link>
//         </motion.div>
//       </main>
//     </div>
//   )
// }

// 'use client'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { useState, useEffect } from 'react'

// const sliderImages = [
//   '/hero-transit1.webp',
//   '/hero-transit2.webp',
//   '/hero-transit3.webp',
//   '/logistics.jpg',
//   '/Logistics_Supply_Chain.jpg',
//   '/hero-transit5.webp',
// ]

// export default function Home() {
//   const [current, setCurrent] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % sliderImages.length)
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="relative min-h-screen">
//       <div className="absolute inset-0 z-0">
  
//         <div className="fixed inset-0 -z-10">
//   <Image
//     src={sliderImages[current]}
//     alt="Slide background"
//     fill
//     priority
//     quality={100}
//     style={{
//       objectFit: 'cover',
//       objectPosition: 'center top',
//     }}
//     sizes="(max-width: 768px) 100vw, 100vw"
//     className="transition-opacity duration-1000"
//   />
//   <div className="absolute inset-0 bg-black bg-opacity-50" />
// </div>
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//       </div>

//       {/* Content overlay */}
//       <main className="relative z-10 flex flex-col md:flex-row min-h-screen items-center justify-between p-10 gap-10 pt-24">
//         {/* Tableau de bord */}
//         <motion.div
//           id="tableau"
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         //   className="bg-white bg-opacity-90 rounded-xl p-6 w-full md:w-1/3 shadow-xl"
//         // >
//          className="text-white text-center md:text-left max-w-md"
//         >
//          <h2 className="text-2xl font-bold mb-4 md:text-4xl">DouaNet Votre Transitaire et Agent de Sourcing en Tunisie</h2>
//          <h1 className="text-xl md:text-2xl font-bold text-center mb-4">
// DouaNet est le meilleur partenaire dont vous aurez besoin pour toute votre chaîne d'approvisionnement : sourcing, contrôle qualité, transport et dédouanement, assurant des livraisons fiables en tunisie </h1>
//           <Link href="/devis">
//         <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl">
//           Devis gratuit
//         </button>
//       </Link>
//           {/* <ShipmentForm />
//           <ShipmentList /> */}
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="pb-24 text-white text-center md:text-left max-w-md"
//         >
//           <h2 className="text-4xl font-bold mb-4">Digitalisez votre transit & douane</h2>
//           <p className="mb-6 text-lg">Suivi intelligent, conformité réglementaire, gain de temps.</p>
//           <Link href="/shipments">
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl shadow-lg">
//           Consulter mon dossier
//           </button>
//        </Link>
//         </motion.div>
//       </main>
//     </div>
//   )
// }



