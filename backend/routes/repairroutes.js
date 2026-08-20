import express from 'express'
import { RepairRequest } from '../repairschema.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()
router.post('/', async (req, res) => {
    try {
        const { name, phone, modelNumber, problem } = req.body
        const request = await RepairRequest.create({ name, phone, modelNumber, problem })
        res.status(201).json(request)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
router.get('/', protect, async (req, res) => {
    try {
        const requests = await RepairRequest.find().sort({ createdAt: -1 })
        res.status(200).json(requests)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
router.delete('/:id', protect, async (req, res) => {
  try {
    const deleted = await RepairRequest.findByIdAndDelete(req.params.id)
    if (!deleted) {
      return res.status(404).json({ message: 'Repair request not found' })
    }
    res.status(200).json({ message: 'Repair request deleted' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }})


export default router