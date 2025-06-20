'use client'

import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useRouter } from 'next/navigation'
import { getDevisDetails } from '../../../redux/actions/devisActions'
import html2pdf from 'html2pdf.js'

export default function DevisDetailPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const router = useRouter()
  const { loading, devis, error } = useSelector((state) => state.devisDetails || {})
  const contentRef = useRef()

  useEffect(() => {
    if (id) {
      dispatch(getDevisDetails(id))
    }
  }, [dispatch, id])

  const handleRetour = () => {
    router.back()
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadPDF = () => {
    const element = contentRef.current
    html2pdf()
      .set({ margin: 0.5, filename: `devis-${devis._id}.pdf`, html2canvas: { scale: 2 }, jsPDF: { format: 'a4' } })
      .from(element)
      .save()
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-24 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8" ref={contentRef}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Détail du devis
          </h1>
          <div className="space-x-2">
            <button
              onClick={handleRetour}
              className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1.5 rounded-md"
            >
              🔙 Retour
            </button>
            <button
              onClick={handlePrint}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1.5 rounded-md"
            >
              🖨️ Imprimer
            </button>
            <button
              onClick={handleDownloadPDF}
              className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1.5 rounded-md"
            >
              📄 Télécharger en PDF
            </button>
          </div>
        </div>

        {loading && (
          <p className="text-center text-gray-600 italic">Chargement en cours...</p>
        )}

        {error && (
          <p className="text-center text-red-600 font-semibold">{error}</p>
        )}

        {!loading && devis && (
          <div className="space-y-4 text-gray-800 text-base leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              <p><span className="font-semibold text-gray-700">ID :</span> {devis._id}</p>
              <p><span className="font-semibold text-gray-700">Statut :</span> {devis.status}</p>
              <p><span className="font-semibold text-gray-700">Type de marchandise :</span> {devis.typeMarchandise}</p>
              <p><span className="font-semibold text-gray-700">Date souhaitée :</span> {devis.dateSouhaitee?.substring(0, 10)}</p>
              <p><span className="font-semibold text-gray-700">HS Code :</span> {devis.hsCode}</p>
              <p><span className="font-semibold text-gray-700">Poids net :</span> {devis.poidsNet} kg</p>
              <p><span className="font-semibold text-gray-700">Poids brut :</span> {devis.poidsTotal} kg</p>
              <p><span className="font-semibold text-gray-700">Volume :</span> {devis.volume} m³</p>
              <p><span className="font-semibold text-gray-700">Emballage :</span> {devis.emballageActuel}</p>
              <p><span className="font-semibold text-gray-700">Mode de transport :</span> {devis.modeTransport?.join(', ')}</p>
              <p><span className="font-semibold text-gray-700">Services souhaités :</span> {devis.servicesSouhaites?.join(', ')}</p>
            </div>

            {devis.detailsSupplementaires && (
              <div className="mt-6 p-4 bg-gray-100 rounded-md border border-gray-200">
                <h2 className="font-semibold mb-2 text-gray-800">Détails supplémentaires :</h2>
                <p className="whitespace-pre-line">{devis.detailsSupplementaires}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
// 'use client'

// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'next/navigation'
// import { getDevisDetails } from '../../../redux/actions/devisActions'

// export default function DevisDetailPage() {
//   const { id } = useParams()
//   const dispatch = useDispatch()
//   const { loading, devis, error } = useSelector((state) => state.devisDetails)

//   useEffect(() => {
//     if (id) {
//       dispatch(getDevisDetails(id))
//     }
//   }, [dispatch, id])

//   return (
//     <div className="min-h-screen bg-gray-50 p-6 pt-24 flex justify-center">
//       <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
//         <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-900">
//           Détail du devis
//         </h1>

//         {loading && (
//           <p className="text-center text-gray-600 italic">Chargement en cours...</p>
//         )}

//         {error && (
//           <p className="text-center text-red-600 font-semibold">{error}</p>
//         )}

//         {!loading && devis && (
//           <div className="space-y-4 text-gray-800 text-base leading-relaxed">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
//               <p><span className="font-semibold text-gray-700">ID :</span> {devis._id}</p>
//               <p><span className="font-semibold text-gray-700">Statut :</span> {devis.status}</p>
//               <p><span className="font-semibold text-gray-700">Type de marchandise :</span> {devis.typeMarchandise}</p>
//               <p><span className="font-semibold text-gray-700">Date souhaitée :</span> {devis.dateSouhaitee?.substring(0, 10)}</p>
//               <p><span className="font-semibold text-gray-700">HS Code :</span> {devis.hsCode}</p>
//               <p><span className="font-semibold text-gray-700">Poids net :</span> {devis.poidsNet} kg</p>
//               <p><span className="font-semibold text-gray-700">Poids brut :</span> {devis.poidsTotal} kg</p>
//               <p><span className="font-semibold text-gray-700">Volume :</span> {devis.volume} m³</p>
//               <p><span className="font-semibold text-gray-700">Emballage :</span> {devis.emballageActuel}</p>
//               <p><span className="font-semibold text-gray-700">Mode de transport :</span> {devis.modeTransport?.join(', ')}</p>
//               <p><span className="font-semibold text-gray-700">Services souhaités :</span> {devis.servicesSouhaites?.join(', ')}</p>
//             </div>

//             {devis.detailsSupplementaires && (
//               <div className="mt-6 p-4 bg-gray-100 rounded-md border border-gray-200">
//                 <h2 className="font-semibold mb-2 text-gray-800">Détails supplémentaires :</h2>
//                 <p className="whitespace-pre-line">{devis.detailsSupplementaires}</p>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// 'use client'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'next/navigation'
// import { getDevisDetails } from '../../../redux/actions/devisActions'

// export default function DevisDetailPage() {
//   const { id } = useParams()
//   const dispatch = useDispatch()
//   const { loading, devis, error } = useSelector((state) => state.devisDetails)

//   useEffect(() => {
//     if (id) {
//       dispatch(getDevisDetails(id))
//     }
//   }, [dispatch, id])

//   return (
//     <div className="p-6 pt-24 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Détail du devis</h1>

//       {loading && <p>Chargement...</p>}
//       {error && <p className="text-red-600">{error}</p>}

//       {!loading && devis && (
//         <div className="space-y-2 text-sm text-gray-800">
//           <p><strong>ID :</strong> {devis._id}</p>
//           <p><strong>Type de marchandise :</strong> {devis.typeMarchandise}</p>
//           <p><strong>HS Code :</strong> {devis.hsCode}</p>
//           <p><strong>Poids net :</strong> {devis.poidsNet} kg</p>
//           <p><strong>Poids brut :</strong> {devis.poidsTotal} kg</p>
//           <p><strong>Volume :</strong> {devis.volume} m³</p>
//           <p><strong>Emballage :</strong> {devis.emballageActuel}</p>
//           <p><strong>Mode de transport :</strong> {devis.modeTransport?.join(', ')}</p>
//           <p><strong>Services souhaités :</strong> {devis.servicesSouhaites?.join(', ')}</p>
//           <p><strong>Date souhaitée :</strong> {devis.dateSouhaitee?.substring(0, 10)}</p>
//           <p><strong>Statut :</strong> {devis.status}</p>
//           <p><strong>Détails :</strong> {devis.detailsSupplementaires}</p>
//         </div>
//       )}
//     </div>
//   )
// }