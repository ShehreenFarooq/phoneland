import express from 'express'
import {User} from '../userschema.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { protect} from '../middleware/auth.js'
const router = express.Router()
router.post('/login',async(req,res)=>{
    try{
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
    return res.status(400).json('User does not exist')
    }
const ismatched=await bcrypt.compare(password,user.password)
if(!ismatched){
    return res.status(400).json('Invalid email or password')
}
 const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )
         res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token
        })}
        catch(error){
            res.status(400).json({ message: error.message })
        }
})
export default router
