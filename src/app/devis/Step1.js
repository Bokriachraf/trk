'use client'

import { useDispatch, useSelector } from 'react-redux'
import { setDevisData } from '../../redux/actions/devisActions'

export default function Step1({ onNext }) {
  const dispatch = useDispatch()
  const devisData = useSelector((state) => state.devis ||  {})

  const handleChange = (e) => {
    dispatch(setDevisData({ [e.target.name]: e.target.value }))
  }

  return (
    <div className="p-0">
      <h2 className="text-sm font-bold mb-4">Étape 1 : Départ et arrivée</h2>

      <div>
        <label className="text-xs block mb-1 font-medium">Pays de départ *</label>
        <select
          name="paysDepart"
          value={devisData.paysDepart || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full border rounded"
        >
          <option value="">-- Choisir un pays --</option>
          <option value="Tunisie">Tunisie</option>
          <option value="France">France</option>
          <option value="Allemagne">Allemagne</option>
          <option value="Italie">Italie</option>
           <option value="Turquie">Turquie</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="text-xs block mb-1 font-medium">Adresse de départ</label>
        <input
          type="text"
          name="adresseDepart"
          value={devisData.adresseDepart || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full border rounded"
        />
      </div>

      <div>
        <label className="text-xs block mb-1 font-medium">Pays d’arrivée *</label>
        <select
          name="paysArrivee"
          value={devisData.paysArrivee || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full border rounded"
        >
          <option value="">-- Choisir un pays --</option>
          <option value="Tunisie">Tunisie</option>
          <option value="France">France</option>
          <option value="Allemagne">Allemagne</option>
          <option value="Italie">Italie</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="text-xs block mb-1 font-medium">Adresse d’arrivée</label>
        <input
          type="text"
          name="adresseArrivee"
          value={devisData.adresseArrivee || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="text-xs block mb-1 font-medium">Incoterm d’achat</label>
        <select
          name="incoterm"
          value={devisData.incoterm || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full border rounded"
        >
          <option value="">Je ne sais pas encore</option>
          <option value="EXW">EXW</option>
          <option value="CFR">CFR</option>
          <option value="FCA">FCA</option>
          <option value="CIF">CIF</option>
          <option value="DAP">DAP</option>
        </select>
        <small className="text-gray-500">Définit où notre prise en charge commence.</small>
      </div>

      <div className="mb-4">
        <label className="text-xs block mb-1 font-medium">Date d’expédition</label>
        <input
          type="date"
          name="dateExpedition"
          value={devisData.dateExpedition || ''}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full  border rounded"
        />
        <small className="text-gray-500">Format : yyyy-mm-dd</small>
      </div>

      <div className="flex justify-end mt-6">
        <button onClick={onNext} className="bg-green-600 text-white px-4 py-2 rounded">
          Suivant
        </button>
      </div>
    </div>
  )
}

// import { useDispatch, useSelector } from 'react-redux';
// import { setDevisData } from '../../redux/actions/devisActions';

// export default function Step1({ onNext }) {
//   const dispatch = useDispatch();
//   const devisData = useSelector((state) => state.devis);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(setDevisData({ [name]: value }));
//   };

//   return (
//     <div className="p-4 pt-20 pb-24">
//       <h2 className="text-xl font-bold mb-4">Informations personnelles</h2>
//       <input
//         type="text"
//         name="nom"
//         value={devisData.nom}
//         onChange={handleChange}
//         placeholder="Votre nom"
//         className="border p-2 w-full mb-4"
//       />
//       <input
//         type="email"
//         name="email"
//         value={devisData.email}
//         onChange={handleChange}
//         placeholder="Votre email"
//         className="border p-2 w-full mb-4"
//       />
//       <button onClick={onNext} className="bg-blue-500 text-white px-4 py-2 rounded">
//         Suivant
//       </button>
//     </div>
//   );
// }

// 'use client'

// export default function Step1({ data, handleChange, handleNext }) {
//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Étape 1 : Départ et arrivée</h2>

//       <div className="mb-4">
//         <label className="block mb-1 font-medium">Pays de départ *</label>
//         <select
//           name="paysDepart"
//           value={data.paysDepart || ''}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         >
//           <option value="">-- Choisir un pays --</option>
//           <option value="Tunisie">Tunisie</option>
//           <option value="France">France</option>
//           <option value="Allemagne">Allemagne</option>
//           <option value="Italie">Italie</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1 font-medium">Adresse de départ</label>
//         <input
//           type="text"
//           name="adresseDepart"
//           value={data.adresseDepart || ''}
//           onChange={handleChange}
//           placeholder="Adresse, ville ou terminal"
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1 font-medium">Pays d’arrivée *</label>
//         <select
//           name="paysArrivee"
//           value={data.paysArrivee || ''}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         >
//           <option value="">-- Choisir un pays --</option>
//           <option value="Tunisie">Tunisie</option>
//           <option value="France">France</option>
//           <option value="Allemagne">Allemagne</option>
//           <option value="Italie">Italie</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1 font-medium">Adresse d’arrivée</label>
//         <input
//           type="text"
//           name="adresseArrivee"
//           value={data.adresseArrivee || ''}
//           onChange={handleChange}
//           placeholder="Adresse, ville ou terminal"
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1 font-medium">Incoterm d’achat</label>
//         <select
//           name="incoterm"
//           value={data.incoterm || ''}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Je ne sais pas encore</option>
//           <option value="EXW">EXW</option>
//           <option value="FCA">FCA</option>
//           <option value="CIF">CIF</option>
//           <option value="DAP">DAP</option>
//         </select>
//         <small className="text-gray-500">Cet incoterm définit où notre prise en charge commence.</small>
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1 font-medium">Date d’expédition</label>
//         <input
//           type="date"
//           name="dateExpedition"
//           value={data.dateExpedition || ''}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//         <small className="text-gray-500">Format : dd MMM yyyy</small>
//       </div>

//       <div className="flex justify-end mt-6">
//         <button onClick={handleNext} className="bg-green-600 text-white px-4 py-2 rounded">
//           Suivant
//         </button>
//       </div>
//     </div>
//   )
// }
