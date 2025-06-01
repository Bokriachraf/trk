'use client'

import { useSelector, useDispatch } from 'react-redux'
import { addShipment, removeShipment } from '@/redux/slices/shipmentsSlice'
import { useState } from 'react'

export default function ShipmentsPage() {
  const [name, setName] = useState('')
  const shipments = useSelector(state => state.shipments.shipments)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      dispatch(addShipment({ name }))
      setName('')
    }
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📦 Dossiers de transit (TRK)</h1>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Nom du dossier"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Ajouter
        </button>
      </form>

      <ul className="space-y-2">
        {shipments.map((s) => (
          <li key={s.id} className="border p-3 flex justify-between items-center rounded">
            <div>
              <span className="font-medium">{s.name}</span>
              <span className="ml-2 text-sm text-gray-500">({s.status})</span>
            </div>
            <button
              onClick={() => dispatch(removeShipment(s.id))}
              className="text-red-600 hover:underline"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}