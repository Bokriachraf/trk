import express from 'express'
import Devis from '../models/devisModel.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const newDevis = new Devis(req.body)
    await newDevis.save()
    res.status(201).json({ message: 'Devis enregistré' })
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l’enregistrement' })
  }
})

export default router