'use client'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { setDevisData, submitDevis } from '../../redux/actions/devisActions'

export default function Step3({ onPrevious }) {
  const dispatch = useDispatch()
  const router = useRouter()

  const devisData = useSelector((state) => state.devis.devisData) || {}

  const [form, setForm] = useState({
    secteurActivite: devisData.secteurActivite || '',
    sourceDecouverte: devisData.sourceDecouverte || '',
    email: devisData.email || '',
    nom: devisData.nom || '',
    nomEntreprise: devisData.nomEntreprise || '',
    CodeEntreprise: devisData.CodeEntreprise || '',
    adresseEntreprise: devisData.adresseEntreprise || '',
    telephone: devisData.telephone || '',
    newsletterConsent: devisData.newsletterConsent || false,
  })

  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const val = type === 'checkbox' ? checked : value
    setForm({ ...form, [name]: val })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const finalData = {
      ...devisData,
      ...form,
    }

    dispatch(setDevisData(form)) // mise à jour finale dans Redux
    setLoading(true)

    try {
      console.log("Données envoyées :", finalData)
      await dispatch(submitDevis(finalData))
      setMessage('✅ Devis soumis avec succès.')
      router.push('/devis/suivi')
    } catch (err) {
      setMessage('❌ Une erreur est survenue lors de la soumission.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <h2 className="text-lg font-bold">Étape 3 : Compléments</h2>
 <div>
             <label className="text-xs block mb-1 font-medium">Prénom</label>
             <input
               type="text"
               name="prenom"
               value={form.prenom || ''}
               onChange={handleChange}
               className="p-1 h-7 text-xs w-full p-2 border rounded"
             />
           </div>

           <div>
             <label className="text-xs block mb-1 font-medium">Nom</label>
             <input
               type="text"
               name="nom"
               value={form.nom || ''}
               onChange={handleChange}
               className="p-1 h-7 text-xs w-full p-2 border rounded"
             />
           </div>

           <div>
             <label className="text-xs block mb-1 font-medium">Email</label>
             <input
               type="email"
               name="email"
               value={form.email || ''}
               onChange={handleChange}
               className="p-1 h-7 text-xs w-full p-2 border rounded"
             />
           </div>
           <div>
           <label className="text-xs block mb-1 font-medium">Nom d'entreprise</label>
            <input 
               type="text"
               name="nomEntreprise"
               value={form.nomEntreprise || ''}
               onChange={handleChange}
               className="p-1 h-7 text-xs w-full p-2 border rounded"
             />
           </div>
           <div>
             <label className="text-xs block mb-1 font-medium">Code d'entreprise</label>
             <input
               type="text"
               name="CodeEntreprise"
               value={form.CodeEntreprise || ''}
               onChange={handleChange}
               className="p-1 h-7 text-xs w-full p-2 border rounded"
             />
           </div>
    <div>
             <label className="text-xs block mb-1 font-medium">Adresse de l'entreprise</label>
             <input
               type="text"
               name="adresseEntreprise"
               value={form.adresseEntreprise || ''}
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
               value={form.telephone || ''}
               onChange={handleChange}
               className="p-1 h-7 text-xs w-full p-2 border rounded"
             />
           </div>

           <div className="mb-4">
             <label className="text-xs block mb-1 font-medium">Secteur d'activité</label>
             <select
               name="secteurActivite"
               value={form.secteurActivite || ''}
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
                     checked={form.sourceDecouverte === source}
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
                 checked={form.newsletterConsent || false}
                 onChange={handleChange}
               />
               <span>Je souhaite recevoir la newsletter</span>
             </label>
          </div>

      {/* <input
        name="secteurActivite"
        placeholder="Secteur d'activité"
        value={form.secteurActivite}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <select
        name="sourceDecouverte"
        value={form.sourceDecouverte}
        onChange={handleChange}
        className="border p-2 w-full"
      >
        <option value="">Comment nous avez-vous connu ?</option>
        <option value="Google">Google</option>
        <option value="Réseaux sociaux">Réseaux sociaux</option>
        <option value="Bouche à oreille">Bouche à oreille</option>
      </select>

      <label className="block">
        <input
          type="checkbox"
          name="newsletterConsent"
          checked={form.newsletterConsent}
          onChange={handleChange}
        /> Je souhaite recevoir la newsletter
      </label> */}

      <div className="flex justify-between items-center">
        <button type="button" onClick={onPrevious} className="bg-gray-300 px-4 py-2 rounded">
          Précédent
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? 'Envoi...' : 'Soumettre'}
        </button>
      </div>

      {message && <p className="mt-4 text-sm">{message}</p>}
    </form>
  )
}

// 'use client'
// import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { setDevisData, submitDevis } from '../../redux/actions/devisActions'

// export default function Step3({ onBack }) {
//   const dispatch = useDispatch()
//   const { devisData } = useSelector(state => state.devis)

//   const [form, setForm] = useState({
//     prenom: devisData.prenom || '',
//     nom: devisData.nom || '',
//     nomEntreprise: devisData.nomEntreprise || '',
//     email: devisData.email || '',
//     adresseEntreprise: devisData.adresseEntreprise || '',
//     CodeEntreprise: devisData.CodeEntreprise || '',
//     telephone: devisData.telephone || '',
//     secteurActivite: devisData.secteurActivite || '',
//     sourceDecouverte: devisData.sourceDecouverte || '',
//     newsletterConsent: devisData.newsletterConsent || false,
//     detailsSupplementaires: devisData.detailsSupplementaires || '',
//     fichiers: devisData.fichiers || [],
//   })

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const fullData = { ...devisData, ...form }
//     dispatch(submitDevis(fullData))
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input name="prenom" placeholder="Prénom" value={form.prenom} onChange={handleChange} />
//       <input name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} />
//       <input name="nomEntreprise" placeholder="Nom entreprise" value={form.nomEntreprise} onChange={handleChange} />
//       <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
//       <input name="adresseEntreprise" placeholder="Adresse entreprise" value={form.adresseEntreprise} onChange={handleChange} />
//       <input name="CodeEntreprise" placeholder="Code entreprise" value={form.CodeEntreprise} onChange={handleChange} />
//       <input name="telephone" placeholder="Téléphone" value={form.telephone} onChange={handleChange} />
//       <input name="secteurActivite" placeholder="Secteur d’activité" value={form.secteurActivite} onChange={handleChange} />

//       <div>
//         <label>Comment avez-vous connu notre service ?</label>
//         <select name="sourceDecouverte" value={form.sourceDecouverte} onChange={handleChange}>
//           <option value="">-- Choisir --</option>
//           <option value="Internet">Internet</option>
//           <option value="Bouche à oreille">Bouche à oreille</option>
//           <option value="Réseaux sociaux">Réseaux sociaux</option>
//         </select>
//       </div>

//       <label>
//         <input type="checkbox" name="newsletterConsent" checked={form.newsletterConsent} onChange={handleChange} />
//         J’accepte de recevoir la newsletter
//       </label>

//       <textarea name="detailsSupplementaires" placeholder="Détails supplémentaires" value={form.detailsSupplementaires} onChange={handleChange} />

//       <div className="flex justify-between">
//         <button type="button" onClick={onBack}>Retour</button>
//         <button type="submit">Soumettre</button>
//       </div>
//     </form>
//   )
// }
// 'use client'

// import { useDispatch, useSelector } from 'react-redux'
// import { setDevisData, resetDevisData } from '../../redux/actions/devisActions'
// import { useState } from 'react'

// export default function Step3({ onBack }) {
//   const dispatch = useDispatch()
//   const devisData = useSelector((state) => state.devis || {})
//   const [submitted, setSubmitted] = useState(false)

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     const finalValue = type === 'checkbox' ? checked : value
//     dispatch(setDevisData({ [name]: finalValue }))
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
//           <h2 className="text-sm font-bold mb-4">Étape 3 : Coordonnées</h2>

//           <div>
//             <label className="text-xs block mb-1 font-medium">Prénom</label>
//             <input
//               type="text"
//               name="prenom"
//               value={devisData.prenom || ''}
//               onChange={handleChange}
//               className="p-1 h-7 text-xs w-full p-2 border rounded"
//             />
//           </div>

//           <div>
//             <label className="text-xs block mb-1 font-medium">Nom</label>
//             <input
//               type="text"
//               name="nom"
//               value={devisData.nom || ''}
//               onChange={handleChange}
//               className="p-1 h-7 text-xs w-full p-2 border rounded"
//             />
//           </div>

//           <div>
//             <label className="text-xs block mb-1 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={devisData.email || ''}
//               onChange={handleChange}
//               className="p-1 h-7 text-xs w-full p-2 border rounded"
//             />
//           </div>
//           <div>
//           <label className="text-xs block mb-1 font-medium">Nom d'entreprise</label>
//            <input 
//               type="text"
//               name="nomEntreprise"
//               value={devisData.nomEntreprise || ''}
//               onChange={handleChange}
//               className="p-1 h-7 text-xs w-full p-2 border rounded"
//             />
//           </div>
//           <div>
//             <label className="text-xs block mb-1 font-medium">Code d'entreprise</label>
//             <input
//               type="text"
//               name="CodeEntreprise"
//               value={devisData.CodeEntreprise || ''}
//               onChange={handleChange}
//               className="p-1 h-7 text-xs w-full p-2 border rounded"
//             />
//           </div>
//    <div>
//             <label className="text-xs block mb-1 font-medium">Adresse de l'entreprise</label>
//             <input
//               type="text"
//               name="adresseEntreprise"
//               value={devisData.adresseEntreprise || ''}
//               onChange={handleChange}
//               className="p-1 h-7 text-xs w-full p-2 border rounded"
//             />
//           </div>
//           <div>
//             <label className="text-xs block mb-1 font-medium">Téléphone (+216)</label>
//             <input
//               type="tel"
//               name="telephone"
//               placeholder="+216 ..."
//               value={devisData.telephone || ''}
//               onChange={handleChange}
//               className="p-1 h-7 text-xs w-full p-2 border rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="text-xs block mb-1 font-medium">Secteur d'activité</label>
//             <select
//               name="secteurActivite"
//               value={devisData.secteurActivite || ''}
//               onChange={handleChange}
//               className="p-1 h-7 text-xs w-full p-2 border rounded"
//             >
//               <option value="">-- Sélectionnez --</option>
//               <option value="Import/Export">Import/Export</option>
//               <option value="Commerce">Commerce</option>
//               <option value="Industrie">Industrie</option>
//               <option value="Logistique">Logistique</option>
//               <option value="Autre">Autre</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1">Comment nous avez-vous connu ?</label>
//             <div className="flex gap-4 flex-wrap">
//               {['Google', 'Facebook', 'Youtube', 'LinkedIn', 'Newsletter', 'Recommandation'].map((source) => (
//                 <label key={source} className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="sourceDecouverte"
//                     value={source}
//                     checked={devisData.sourceDecouverte === source}
//                     onChange={handleChange}
//                   />
//                   <span>{source}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 name="newsletterConsent"
//                 checked={devisData.newsletterConsent || false}
//                 onChange={handleChange}
//               />
//               <span>Je souhaite recevoir la newsletter</span>
//             </label>
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