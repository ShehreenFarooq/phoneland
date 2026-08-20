import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userroutes from './routes/userroutes.js'
import repairroutes from './routes/repairroutes.js'
import contactroutes from './routes/contactroutes.js'
dotenv.config({path: './backend/.env'})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/admin',userroutes)
app.use('/api/repair',repairroutes)
app.use('/api/contact',contactroutes)
const PORT = process.env.Port

mongoose.connect(process.env.Mongourl)
.then(() => console.log("MongoDB Connected"))

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
