'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDevisData } from '../../redux/actions/devisActions';
import countries from '../../utils/countries';

export default function Step1({ onNext }) {
  const dispatch = useDispatch();
  const devisData = useSelector((state) => state?.devis?.devisData) || {};

  const [form, setForm] = useState({
    paysDepart: devisData.paysDepart || '',
    adresseDepart: devisData.adresseDepart || '',
    paysArrivee: devisData.paysArrivee || '',
    adresseArrivee: devisData.adresseArrivee || '',
    incoterm: devisData.incoterm || '',
    dateExpedition: devisData.dateExpedition || ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // Efface l'erreur si utilisateur remplit le champ
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.paysDepart) newErrors.paysDepart = 'Le pays de départ est requis';
    if (!form.paysArrivee) newErrors.paysArrivee = 'Le pays d’arrivée est requis';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      dispatch(setDevisData(form));
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Pays de départ */}
      <div>
        <label className="text-xs block mb-1 font-medium">
          Pays de départ <span className="text-red-500">*</span>
        </label>
        <select
          name="paysDepart"
          value={form.paysDepart}
          onChange={handleChange}
          className={`text-xs h-10 sm:h-8 md:h-7 px-2 w-full border rounded${errors.paysDepart ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">-- Choisir un pays --</option>
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
        {errors.paysDepart && (
          <p className="text-red-500 text-xs mt-1">{errors.paysDepart}</p>
        )}
      </div>

      {/* Adresse départ */}
      <div>
        <label className="text-xs block mb-1 font-medium">Adresse de départ</label>
        <input
          type="text"
          name="adresseDepart"
          value={form.adresseDepart}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full border rounded"
        />
      </div>

      {/* Pays d’arrivée */}
      <div>
        <label className="text-xs block mb-1 font-medium">
          Pays d’arrivée <span className="text-red-500">*</span>
        </label>
        <select
          name="paysArrivee"
          value={form.paysArrivee}
          onChange={handleChange}
          className={`p-1 h-7 text-xs w-full border rounded ${errors.paysArrivee ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">-- Choisir un pays --</option>
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
        {errors.paysArrivee && (
          <p className="text-red-500 text-xs mt-1">{errors.paysArrivee}</p>
        )}
      </div>

      {/* Adresse arrivée */}
      <div>
        <label className="text-xs block mb-1 font-medium">Adresse d’arrivée</label>
        <input
          type="text"
          name="adresseArrivee"
          value={form.adresseArrivee}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full border rounded"
        />
      </div>

      {/* Incoterm */}
      <div>
        <label className="text-xs block mb-1 font-medium">Incoterm d’achat</label>
        <select
          name="incoterm"
          value={form.incoterm}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full border rounded"
        >
          <option value="">Je ne sais pas encore</option>
          <option value="CFR">CFR</option>
          <option value="CIF">CIF</option>
          <option value="CIP">CIP</option>
          <option value="CPT">CPT</option>
          <option value="DAP">DAP</option>
          <option value="DDP">DDP</option>
          <option value="DAP">DAP</option>
          <option value="EXW">EXW</option>
          <option value="FAS">FAS</option>
          <option value="FCA">FCA</option>
          <option value="FOB">FOB</option>

        </select>
        <small className="text-gray-500">Définit où notre prise en charge commence.</small>
      </div>

      {/* Date d’expédition */}
      <div>
        <label className="text-xs block mb-1 font-medium">Date d’expédition</label>
        <input
          type="date"
          name="dateExpedition"
          value={form.dateExpedition}
          onChange={handleChange}
          className="p-1 h-7 text-xs w-full border rounded"
        />
        <small className="text-gray-500">Format : yyyy-mm-dd</small>
      </div>

      {/* Bouton Suivant */}
      <div className="flex justify-end mt-6">
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Suivant
        </button>
      </div>
    </form>
  );
}


// 'use client'
// import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { setDevisData } from '../../redux/actions/devisActions'

// export default function Step1({ onNext }) {
//   const dispatch = useDispatch()
// const devisData = useSelector(state => state?.devis?.devisData) || {}
//   const [form, setForm] = useState({
//     paysDepart: devisData.paysDepart || '',
//     adresseDepart: devisData.adresseDepart || '',
//     paysArrivee: devisData.paysArrivee || '',
//     adresseArrivee: devisData.adresseArrivee || '',
//     incoterm: devisData.incoterm || '',
//     dateExpedition: devisData.dateExpedition || ''
//   })

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     dispatch(setDevisData(form))
//     onNext()
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//            <div>
//          <label className="text-xs block mb-1 font-medium">Pays de départ *</label>
//          <select
//            name="paysDepart"
//            value={form.paysDepart || ''}
//            onChange={handleChange}
//            className="p-1 h-7 text-xs w-full border rounded"
//          >
//            <option value="">-- Choisir un pays --</option>
//            <option value="Tunisie">Tunisie</option>
//            <option value="France">France</option>
//            <option value="Allemagne">Allemagne</option>
//            <option value="Italie">Italie</option>
//             <option value="Turquie">Turquie</option>
//          </select>
//        </div>
//        <div className="mb-4">
//          <label className="text-xs block mb-1 font-medium">Adresse de départ</label>
//          <input
//            type="text"
//            name="adresseDepart"
//            value={form.adresseDepart || ''}
//            onChange={handleChange}
//            className="p-1 h-7 text-xs w-full border rounded"
//          />
//        </div>

//        <div>
//          <label className="text-xs block mb-1 font-medium">Pays d’arrivée *</label>
//          <select
//            name="paysArrivee"
//            value={form.paysArrivee || ''}
//            onChange={handleChange}
//            className="p-1 h-7 text-xs w-full border rounded"
//          >
//            <option value="">-- Choisir un pays --</option>
//            <option value="Tunisie">Tunisie</option>
//            <option value="France">France</option>
//            <option value="Allemagne">Allemagne</option>
//            <option value="Italie">Italie</option>
//          </select>
//        </div>

//        <div className="mb-4">
//          <label className="text-xs block mb-1 font-medium">Adresse d’arrivée</label>
//          <input
//            type="text"
//            name="adresseArrivee"
//            value={form.adresseArrivee || ''}
//            onChange={handleChange}
//            className="p-1 h-7 text-xs w-full border rounded"
//          />
//        </div>

//        <div className="mb-4">
//          <label className="text-xs block mb-1 font-medium">Incoterm d’achat</label>
//          <select
//            name="incoterm"
//            value={form.incoterm || ''}
//            onChange={handleChange}
//            className="p-1 h-7 text-xs w-full border rounded"
//          >
//            <option value="">Je ne sais pas encore</option>
//            <option value="EXW">EXW</option>
//            <option value="CFR">CFR</option>
//            <option value="FCA">FCA</option>
//            <option value="CIF">CIF</option>
//            <option value="DAP">DAP</option>
//          </select>
//          <small className="text-gray-500">Définit où notre prise en charge commence.</small>
//        </div>

//        <div className="mb-4">
//          <label className="text-xs block mb-1 font-medium">Date d’expédition</label>
//          <input
//            type="date"
//            name="dateExpedition"
//            value={form.dateExpedition || ''}
//            onChange={handleChange}
//            className="p-1 h-7 text-xs w-full  border rounded"
//          />
//         <small className="text-gray-500">Format : yyyy-mm-dd</small>
//       </div>
//          <div className="flex justify-end mt-6">
//          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
//            Suivant
//          </button>
//        </div>
//     </form>
//   )
// }
