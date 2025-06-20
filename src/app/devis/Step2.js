'use client'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDevisData } from '../../redux/actions/devisActions'

export default function Step2({ onNext, onBack }) {
  const dispatch = useDispatch()
  const { devisData } = useSelector(state => state.devis)

  const [form, setForm] = useState({
    typeMarchandise: devisData.typeMarchandise || '',
    hsCode: devisData.hsCode || '',
    poidsTotal: devisData.poidsTotal || '',
    poidsNet: devisData.poidsNet || '',
    volume: devisData.volume || '',
    emballageActuel: devisData.emballageActuel || '',
    marchandise: devisData.marchandise || '',
    poids: devisData.poids || '',
    dateSouhaitee: devisData.dateSouhaitee || '',
    modeTransport: devisData.modeTransport || [],
    servicesSouhaites: devisData.servicesSouhaites || []
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      const list = [...form[name]]
      if (checked) {
        list.push(value)
      } else {
        const index = list.indexOf(value)
        if (index > -1) list.splice(index, 1)
      }
      setForm({ ...form, [name]: list })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

   const handleCheckboxChange = (e, group) => {
     const { name, checked } = e.target
     const current = devisData[group] || []
     const updated = checked
       ? [...current, name]
       : current.filter((item) => item !== name)
     dispatch(setDevisData({ [group]: updated }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setDevisData(form))
    onNext()
  }
   const handleFileChange = (e) => {
     dispatch(setDevisData({ fichiers: Array.from(e.target.files) }))
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
     <div>
        <label className="block mb-1">Type de marchandise *</label>
        <input
          type="text"
          name="typeMarchandise"
          value={form.typeMarchandise || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Code SH / Code NDP</label>
        <input
          type="text"
          name="hsCode"
          value={form.hsCode || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Poids net (kg) *</label>
        <input
          type="number"
          name="poidsNet"
          value={form.poidsNet || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full p-2 border rounded"
        />
      </div>

            <div>
        <label className="block mb-1">Poids brut (kg) *</label>
        <input
          type="number"
          name="poidsTotal"
          value={form.poidsTotal || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Volume (m³)</label>
        <input
          type="number"
          name="volume"
          value={form.volume || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Emballage actuel</label>
        <select
          name="emballageActuel"
          value={form.emballageActuel || ''}
          onChange={handleChange}
          className="p-1 h-8 text-xs w-full p-2 border rounded"
        >
          <option value="">-- Sélectionnez --</option>
          <option value="Caisse">Caisse</option>
          <option value="Palette">Palette</option>
          <option value="Carton">Carton</option>
          <option value="Aucun">Aucun</option>

        </select>
      </div>

      <div className="mb-4">
  <label className="block mb-1">Mode de transport</label>
  <div className="flex gap-4 flex-wrap">
    {['Maritime', 'Aérien', 'Ferroviaire', 'Routier'].map((mode) => (
      <label key={mode} className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="modeTransport"
          value={mode}
          checked={form.modeTransport?.includes(mode)}
          onChange={handleChange}
        />
        <span>{mode}</span>
      </label>
    ))}
  </div>
</div>

      <div className="mb-4">
        <label className="block mb-1">Services souhaités</label>
        <div className="flex gap-4 flex-wrap">
          {['Porte à porte', 'Service d’emballage', 'Service de stockage', 'Dédouanement'].map((service) => (
            <label key={service} className="flex items-center space-x-2">
             <input
  type="checkbox"
  name="servicesSouhaites"
  value={service}
  checked={form.servicesSouhaites?.includes(service)}
  onChange={handleChange}
/>
              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Envoyer vos fichiers</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="p-1 h-7 text-xs w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Détails supplémentaires</label>
        <textarea
          name="detailsSupplementaires"
          value={form.detailsSupplementaires || ''}
          onChange={handleChange}
          className="p-1 text-xs w-full p-2 border rounded"
          rows={4}
        />
      </div>
      {/* <input name="typeMarchandise" placeholder="Type de marchandise" value={form.typeMarchandise} onChange={handleChange} />
      <input name="hsCode" placeholder="HS Code" value={form.hsCode} onChange={handleChange} />
      <input name="poidsTotal" type="number" placeholder="Poids total (kg)" value={form.poidsTotal} onChange={handleChange} />
      <input name="poidsNet" type="number" placeholder="Poids net (kg)" value={form.poidsNet} onChange={handleChange} />
      <input name="volume" type="number" placeholder="Volume (m3)" value={form.volume} onChange={handleChange} />
      <input name="emballageActuel" placeholder="Emballage actuel" value={form.emballageActuel} onChange={handleChange} />
      <input name="marchandise" placeholder="Marchandise (description libre)" value={form.marchandise} onChange={handleChange} />
      <input name="poids" placeholder="Poids (texte libre)" value={form.poids} onChange={handleChange} />
      <input name="dateSouhaitee" type="date" value={form.dateSouhaitee} onChange={handleChange} />

      <div>
        <label>
          <input type="checkbox" name="modeTransport" value="Fret maritime" onChange={handleChange} checked={form.modeTransport.includes("Fret maritime")} />
          Fret maritime
        </label>
        <label>
          <input type="checkbox" name="modeTransport" value="Fret aérien" onChange={handleChange} checked={form.modeTransport.includes("Fret aérien")} />
          Fret aérien
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" name="servicesSouhaites" value="Porte à porte" onChange={handleChange} checked={form.servicesSouhaites.includes("Porte à porte")} />
          Porte à porte
        </label>
        <label>
          <input type="checkbox" name="servicesSouhaites" value="Service d’emballage" onChange={handleChange} checked={form.servicesSouhaites.includes("Service d’emballage")} />
          Service d’emballage
        </label>
      </div> */}

      <div className="flex justify-between mt-6">
        <button type="button" onClick={onBack} className="bg-gray-500 text-white px-4 py-2 rounded">Retour</button>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Suivant</button>
      </div>
    </form>
  )
}
// 'use client'

// import { useDispatch, useSelector } from 'react-redux'
// import { setDevisData } from '../../redux/actions/devisActions'

// export default function Step2({ onNext, onBack }) {
//   const dispatch = useDispatch()
//   const devisData = useSelector((state) => state.devis || {})

//   const handleChange = (e) => {
//     dispatch(setDevisData({ [e.target.name]: e.target.value }))
//   }

//   const handleCheckboxChange = (e, group) => {
//     const { name, checked } = e.target
//     const current = devisData[group] || []
//     const updated = checked
//       ? [...current, name]
//       : current.filter((item) => item !== name)
//     dispatch(setDevisData({ [group]: updated }))
//   }

//   const handleFileChange = (e) => {
//     dispatch(setDevisData({ fichiers: Array.from(e.target.files) }))
//   }

//   return (
//     <div className="p-0">
//       <h2 className="text-sm font-bold mb-4">Étape 2 : Détails du projet</h2>

//       <div>
//         <label className="block mb-1">Type de marchandise *</label>
//         <input
//           type="text"
//           name="typeMarchandise"
//           value={devisData.typeMarchandise || ''}
//           onChange={handleChange}
//           className="p-1 h-7 text-xs w-full p-2 border rounded"
//         />
//       </div>

//       <div>
//         <label className="block mb-1">Code SH / Code NDP</label>
//         <input
//           type="text"
//           name="hsCode"
//           value={devisData.hsCode || ''}
//           onChange={handleChange}
//           className="p-1 h-7 text-xs w-full p-2 border rounded"
//         />
//       </div>

//       <div>
//         <label className="block mb-1">Poids net (kg) *</label>
//         <input
//           type="number"
//           name="poidsNet"
//           value={devisData.poidsNet || ''}
//           onChange={handleChange}
//           className="p-1 h-7 text-xs w-full p-2 border rounded"
//         />
//       </div>

//             <div>
//         <label className="block mb-1">Poids brut (kg) *</label>
//         <input
//           type="number"
//           name="poidsTotal"
//           value={devisData.poidsTotal || ''}
//           onChange={handleChange}
//           className="p-1 h-7 text-xs w-full p-2 border rounded"
//         />
//       </div>

//       <div>
//         <label className="block mb-1">Volume (m³)</label>
//         <input
//           type="number"
//           name="volume"
//           value={devisData.volume || ''}
//           onChange={handleChange}
//           className="p-1 h-7 text-xs w-full p-2 border rounded"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1">Emballage actuel</label>
//         <select
//           name="emballageActuel"
//           value={devisData.emballageActuel || ''}
//           onChange={handleChange}
//           className="p-1 h-8 text-xs w-full p-2 border rounded"
//         >
//           <option value="">-- Sélectionnez --</option>
//           <option value="Caisse">Caisse</option>
//           <option value="Palette">Palette</option>
//           <option value="Carton">Carton</option>
//           <option value="Aucun">Aucun</option>

//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1">Mode de transport</label>
//         <div className="flex gap-4 flex-wrap">
//           {['Maritime', 'Aérien', 'Ferroviaire', 'Routier'].map((mode) => (
//             <label key={mode} className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 name={mode}
//                 checked={devisData.modeTransport?.includes(mode) || false}
//                 onChange={(e) => handleCheckboxChange(e, 'modeTransport')}
//               />
//               <span>{mode}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1">Services souhaités</label>
//         <div className="flex gap-4 flex-wrap">
//           {['Porte à porte', 'Service d’emballage', 'Service de stockage', 'Dédouanement'].map((service) => (
//             <label key={service} className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 name={service}
//                 checked={devisData.servicesSouhaites?.includes(service) || false}
//                 onChange={(e) => handleCheckboxChange(e, 'servicesSouhaites')}
//               />
//               <span>{service}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1">Envoyer vos fichiers</label>
//         <input
//           type="file"
//           multiple
//           onChange={handleFileChange}
//           className="p-1 h-7 text-xs w-full p-2 border rounded"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1">Détails supplémentaires</label>
//         <textarea
//           name="detailsSupplementaires"
//           value={devisData.detailsSupplementaires || ''}
//           onChange={handleChange}
//           className="p-1 text-xs w-full p-2 border rounded"
//           rows={4}
//         />
//       </div>

//       <div className="flex justify-between mt-6">
//         <button onClick={onBack} className="bg-gray-500 text-white px-4 py-2 rounded">Retour</button>
//         <button onClick={onNext} className="bg-blue-600 text-white px-4 py-2 rounded">Suivant</button>
//       </div>
//     </div>
//   )
// }
// "use client"

// import { useDispatch, useSelector } from 'react-redux'
// import { setDevisData } from '../../redux/actions/devisActions'

// export default function Step2({ onNext, onBack }) {
//   const dispatch = useDispatch()
//   const devisData = useSelector((state) => state.devis)

//   const handleChange = (e) => {
//     dispatch(setDevisData({ [e.target.name]: e.target.value }))
//   }

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Étape 2 : Informations sur la marchandise</h2>
//       <div className="mb-4">
//         <label className="block mb-1">Type de marchandise</label>
//         <input
//           type="text"
//           name="typeMarchandise"
//           value={devisData.typeMarchandise || ''}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block mb-1">Poids estimé (kg)</label>
//         <input
//           type="number"
//           name="poids"
//           value={devisData.poids || ''}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div className="flex justify-between mt-6">
//         <button onClick={onBack} className="bg-gray-500 text-white px-4 py-2 rounded">Retour</button>
//         <button onClick={onNext} className="bg-blue-600 text-white px-4 py-2 rounded">Suivant</button>
//       </div>
//     </div>
//   )
// }
