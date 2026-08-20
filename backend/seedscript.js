import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import { User } from './userschema.js'  

dotenv.config({ path: './backend/.env' })

async function seed() {
  await mongoose.connect(process.env.Mongourl)
  const hashed = await bcrypt.hash('phoneland@768', 10)
  await User.create({
    name: 'Admin',
    email: 'admin@phoneland123.com',
    password: hashed,
    isAdmin: true
  })
  console.log('✅ Admin created')
  process.exit()
}
seed()