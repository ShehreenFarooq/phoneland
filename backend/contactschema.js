import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  typeOfEnquiry: {
    type: String,
    required: [true, "Type of enquiry is required"],
    enum: ["Repair", "Parts", "Warranty", "General Question", "Other"]
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: 2
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
  },
  subject: {
    type: String,
    required: [true, "Subject is required"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: 10
  }
}, { timestamps: true }); // createdAt, updatedAt auto ajayenge
export const Contact = mongoose.model('Contact',contactSchema )