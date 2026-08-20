import express from 'express'
import {Product} from '../productschema.js'
import { protect} from '../middleware/auth.js'
const router=express.Router()
router.post('/',protect, async (req, res) => {
    try {
        const product = new Product(req.body) 
        const createdProduct = await product.save()
        res.status(201).json(createdProduct) 
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
router.get('/', async (req, res) => {
    try {
        const product =  await Product.find()
        res.status(200).json(product) 
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
router.put('/:id',protect, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
router.delete('/:id',protect,async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id)
         if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }
            await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'Product deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    
    }
})
export default router