import mongoose from 'mongoose'

const repairSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    modelNumber: { type: String, required: true },
    problem: { type: String, required: true }
}, { timestamps: true })

export const RepairRequest = mongoose.model('RepairRequest', repairSchema)