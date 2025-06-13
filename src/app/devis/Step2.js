'use client'

import { useDispatch, useSelector } from 'react-redux'
import { setDevisData } from '../../redux/actions/devisActions'

export default function Step2({ onNext, onBack }) {
  const dispatch = useDispatch()
  const devisData = useSelector((state) => state.devis || {})

  const handleChange = (e) => {
    dispatch(setDevisData({ [e.target.name]: e.target.value }))
  }

  const handleCheckboxChange = (e, group) => {
    const { name, checked } = e.target
    const current = devisData[group] || []
    const updated = checked
      ? [...current, name]
      : current.filter((item) => item !== name)
    dispatch(setDevisData({ [group]: updated }))
  }

  const handleFileChange = (e) => {
    dispatch(setDevisData({ fichiers: Array.from(e.target.files) }))
  }

  return (
    <div className="p-0">
      <h2 className="text-sm font-bold mb-4">Étape 2 : Détails du projet</h2>

      <div>
        <label className="block mb-1">Type de marchandise *</label>
        <input
          type="text"
          name="typeMarchandise"
          value={devisData.typeMarchandise || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Code SH / Code NDP</label>
        <input
          type="text"
          name="hsCode"
          value={devisData.hsCode || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Poids net (kg) *</label>
        <input
          type="number"
          name="poidsNet"
          value={devisData.poidsNet || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full p-2 border rounded"
        />
      </div>

            <div>
        <label className="block mb-1">Poids brut (kg) *</label>
        <input
          type="number"
          name="poidsTotal"
          value={devisData.poidsTotal || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Volume (m³)</label>
        <input
          type="number"
          name="volume"
          value={devisData.volume || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Emballage actuel</label>
        <select
          name="emballageActuel"
          value={devisData.emballageActuel || ''}
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
                name={mode}
                checked={devisData.modeTransport?.includes(mode) || false}
                onChange={(e) => handleCheckboxChange(e, 'modeTransport')}
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
                name={service}
                checked={devisData.servicesSouhaites?.includes(service) || false}
                onChange={(e) => handleCheckboxChange(e, 'servicesSouhaites')}
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
          value={devisData.detailsSupplementaires || ''}
          onChange={handleChange}
          className="p-1 text-xs w-full p-2 border rounded"
          rows={4}
        />
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={onBack} className="bg-gray-500 text-white px-4 py-2 rounded">Retour</button>
        <button onClick={onNext} className="bg-blue-600 text-white px-4 py-2 rounded">Suivant</button>
      </div>
    </div>
  )
}
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
