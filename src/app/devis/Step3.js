'use client'

import { useDispatch, useSelector } from 'react-redux'
import { setDevisData, resetDevisData } from '../../redux/actions/devisActions'
import { useState } from 'react'

export default function Step3({ onBack }) {
  const dispatch = useDispatch()
  const devisData = useSelector((state) => state.devis || {})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const finalValue = type === 'checkbox' ? checked : value
    dispatch(setDevisData({ [name]: finalValue }))
  }

  const handleSubmit = async () => {
    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000'
      const response = await fetch(`${apiBaseUrl}/api/devis`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(devisData),
      })

      if (response.ok) {
        setSubmitted(true)
        dispatch(resetDevisData())
      } else {
        alert("Erreur lors de l'envoi")
      }
    } catch (error) {
      console.error(error)
      alert('Erreur serveur')
    }
  }

  return (
    <div className="p-4">
      {submitted ? (
        <div className="text-green-600 font-bold">Votre devis a été envoyé avec succès !</div>
      ) : (
        <>
          <h2 className="text-sm font-bold mb-4">Étape 3 : Coordonnées</h2>

          <div>
            <label className="text-xs block mb-1 font-medium">Prénom</label>
            <input
              type="text"
              name="prenom"
              value={devisData.prenom || ''}
              onChange={handleChange}
              className="p-1 h-7 text-xs w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="text-xs block mb-1 font-medium">Nom</label>
            <input
              type="text"
              name="nom"
              value={devisData.nom || ''}
              onChange={handleChange}
              className="p-1 h-7 text-xs w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="text-xs block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={devisData.email || ''}
              onChange={handleChange}
              className="p-1 h-7 text-xs w-full p-2 border rounded"
            />
          </div>
          <div>
          <label className="text-xs block mb-1 font-medium">Nom d'entreprise</label>
           <input 
              type="text"
              name="nomEntreprise"
              value={devisData.nomEntreprise || ''}
              onChange={handleChange}
              className="p-1 h-7 text-xs w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="text-xs block mb-1 font-medium">Code d'entreprise</label>
            <input
              type="text"
              name="CodeEntreprise"
              value={devisData.CodeEntreprise || ''}
              onChange={handleChange}
              className="p-1 h-7 text-xs w-full p-2 border rounded"
            />
          </div>
   <div>
            <label className="text-xs block mb-1 font-medium">Adresse de l'entreprise</label>
            <input
              type="text"
              name="adresseEntreprise"
              value={devisData.adresseEntreprise || ''}
              onChange={handleChange}
              className="p-1 h-7 text-xs w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="text-xs block mb-1 font-medium">Téléphone (+216)</label>
            <input
              type="tel"
              name="telephone"
              placeholder="+216 ..."
              value={devisData.telephone || ''}
              onChange={handleChange}
              className="p-1 h-7 text-xs w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="text-xs block mb-1 font-medium">Secteur d'activité</label>
            <select
              name="secteurActivite"
              value={devisData.secteurActivite || ''}
              onChange={handleChange}
              className="p-1 h-7 text-xs w-full p-2 border rounded"
            >
              <option value="">-- Sélectionnez --</option>
              <option value="Import/Export">Import/Export</option>
              <option value="Commerce">Commerce</option>
              <option value="Industrie">Industrie</option>
              <option value="Logistique">Logistique</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1">Comment nous avez-vous connu ?</label>
            <div className="flex gap-4 flex-wrap">
              {['Google', 'Facebook', 'Youtube', 'LinkedIn', 'Newsletter', 'Recommandation'].map((source) => (
                <label key={source} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="sourceDecouverte"
                    value={source}
                    checked={devisData.sourceDecouverte === source}
                    onChange={handleChange}
                  />
                  <span>{source}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="newsletterConsent"
                checked={devisData.newsletterConsent || false}
                onChange={handleChange}
              />
              <span>Je souhaite recevoir la newsletter</span>
            </label>
          </div>

          <div className="flex justify-between mt-6">
            <button onClick={onBack} className="bg-gray-500 text-white px-4 py-2 rounded">
              Retour
            </button>
            <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
              Envoyer
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// 'use client'

// import { useDispatch, useSelector } from 'react-redux'
// import { setDevisData, resetDevisData } from '../../redux/actions/devisActions'
// import { useState } from 'react'

// export default function Step3({ onBack }) {
//   const dispatch = useDispatch()
//   const devisData = useSelector((state) => state.devis)
//   const [submitted, setSubmitted] = useState(false)

//   const handleChange = (e) => {
//     dispatch(setDevisData({ [e.target.name]: e.target.value }))
//   }

//   const handleSubmit = async () => {
//     try {
//       const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000'
//       const response = await fetch(`${apiBaseUrl}/api/devis`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(devisData),
//       })

//       if (response.ok) {
//         setSubmitted(true)
//         dispatch(resetDevisData())
//       } else {
//         alert("Erreur lors de l'envoi")
//       }
//     } catch (error) {
//       console.error(error)
//       alert('Erreur serveur')
//     }
//   }

//   return (
//     <div className="p-4">
//       {submitted ? (
//         <div className="text-green-600 font-bold">Votre devis a été envoyé avec succès !</div>
//       ) : (
//         <>
//           <h2 className="text-xl font-bold mb-4">Étape 3 : Coordonnées</h2>
//           <div className="mb-4">
//             <label className="block mb-1">Nom complet</label>
//             <input
//               type="text"
//               name="nom"
//               value={devisData.nom || ''}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={devisData.email || ''}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1">Téléphone</label>
//             <input
//               type="tel"
//               name="telephone"
//               value={devisData.telephone || ''}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div className="flex justify-between mt-6">
//             <button onClick={onBack} className="bg-gray-500 text-white px-4 py-2 rounded">
//               Retour
//             </button>
//             <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
//               Envoyer
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   )
// }