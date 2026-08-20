import express from 'express'
import { Contact } from '../contactschema.js'
import { protect } from '../middleware/auth.js'
const router = express.Router();
router.post('/', async (req, res) => {
  try {
    const { typeOfEnquiry, name, email, subject, description } = req.body;

    if (!name || !email || !subject) {
      return res.status(400).json({ message: "Name, Email and Subject are required" });
    }

    const newContact = await Contact.create({ 
      typeOfEnquiry, 
      name, 
      email, 
      subject, 
      description
    });

    res.status(201).json({ message: "Enquiry submitted successfully", contact: newContact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete('/:id', protect, async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id)
    if (!deleted) {
      return res.status(404).json({ message: 'Contact request not found' })
    }
    res.status(200).json({ message: 'Contact request deleted' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }})
export default router