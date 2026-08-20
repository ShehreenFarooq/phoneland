import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import Navbar from './Navbar'
import phone from '../assets/phone.svg'
import address from '../assets/address.svg'
import hours from '../assets/hours.svg'
const ContactForm = () => {
    const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors,isSubmitting },
  } = useForm()
 const [submitStatus, setSubmitStatus] = useState(null)

  const onSubmit = async (data) => {
    try {
      setSubmitStatus(null)
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error('Failed to submit')
      reset()
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
    }
  }
 return (
    <>
    <Navbar/>
     <div className="min-h-screen flex items-center justify-center font-display px-4 py-10 sm:px-6 md:px-0 md:py-6">
      <div className="repairform w-full sm:w-[80%] md:w-[50%]">
        <div className="t1 flex flex-col items-center justify-center text-center">
          <div className="t1 text-[#0F766E] font-display text-sm md:text-md">Contact us</div>
          <div className="t1 text-2xl sm:text-[28px] md:text-3xl">We'd like to help</div>
          <div className="t1 text-sm md:text-md text-[#5B5C5F]"> Have questions about our products or services? Drop us a line.</div>
        </div>
     <div className='w-[85%] sm:w-[80%] flex flex-col sm:flex-row justify-center gap-3 mx-auto'>
  <div className='w-full sm:w-1/3 sm:h-[110px] h-[80px] flex sm:flex-col items-center justify-center p-3 bg-white border shadow-sm/20 md:shadow-md/20 shadow-[#0F766E] border-[#E5E7EB] rounded-xl transition-all hover:-translate-y-0.5 duration-300 hover:shadow-md/30 gap-3 sm:gap-3.5'>
    <img className='h-5 w-5 sm:h-3 sm:w-3' src={phone} alt="" />
    <div className='sm:text-xs sm:font-normal text-lg font-bold text-center'>+353 61 415 096</div>
  </div>
  <div className='w-full sm:w-1/3 sm:h-[110px]  h-[80px] flex sm:flex-col items-center justify-center p-1.5 bg-white border shadow-sm/20 md:shadow-md/20 shadow-[#0F766E] border-[#E5E7EB] rounded-xl transition-all hover:-translate-y-0.5 duration-300 hover:shadow-md/30 text-center gap-1'>
    <img className='h-6 w-6 sm:w-4 sm:h-4' src={address} alt="" />
    <div className='sm:text-xs sm:font-normal text-sm font-bold text-center line-clamp-3'>50 Upper William St, Prior's-Land, Limerick, V94 EW61, Ireland</div>
  </div>
  <div className='w-full sm:w-1/3 sm:h-[110px] h-[80px] flex sm:flex-col items-center justify-center p-3 bg-white border shadow-sm/20 md:shadow-md/20 shadow-[#0F766E] border-[#E5E7EB] rounded-xl transition-all hover:-translate-y-0.5 duration-300 hover:shadow-md/30 gap-1.5'>
    <img className='h-5 w-5' src={hours} alt="" />
    <div>
    <div className='sm:text-xs text-sm sm:font-normal font-bold text-center'>Mon-Sat, 9am-6pm</div>
    <div className='sm:text-xs text-sm sm:font-normal font-bold text-center'>Sun, 11am-5pm</div>
    <div className='sm:text-xs text-sm sm:font-normal font-bold text-center'>Bank-holidays, 11am-5pm</div>
</div>
  </div>
  </div>
         <form
          onSubmit={handleSubmit(onSubmit)}
          className="lala bg-white border shadow-sm/10 shadow-[#0F766E] border-[#E5E7EB] rounded-xl flex flex-col items-center w-full transition-shadow duration-300 hover:shadow-xl"
        >
             <label className="text-sm font-medium text-[#444854] w-[85%] sm:w-[80%]">Type of enquiry</label>
         <select
      {...register("typeOfEnquiry", { required: "Please select enquiry type" })}
      className="tt w-[85%] sm:w-[80%] sm:shadow-md/30 shadow-[#494a4d] rounded-md text-sm text-[#1A1D22] bg-[#0F766E]/10 border border-[#0F766E]/20 h-8 transition-all duration-200 outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/25 hover:border-[#9CA3AF]">
    <option className='bg-white' value="">Select an option</option>
    <option className='bg-white'  value="General Question">General Question</option>
    <option className='bg-white'  value="Product Support">Product Support</option>
      <option className='bg-white'  value="Warranty Claim">Warranty Claim</option>
      <option className='bg-white'  value="Feedback">Feedback</option>
      <option className='bg-white'  value="Complaint">Complaint</option>
    </select>
      {errors.typeOfEnquiry && <p className="text-red-500 text-sm mt-1">{errors.typeOfEnquiry.message}</p>}
          <label className="text-sm font-medium text-[#444854] w-[85%] sm:w-[80%]">Full name</label>
          <input
            type="text"
            placeholder="Enter name"
            {...register('name', { required: 'Name is required' })}
            className="tt w-[85%] sm:shadow-md/30 shadow-[#494a4d] sm:w-[80%] bg-[#0F766E]/10 border border-[#0F766E]/20 rounded-md text-sm text-[#1A1D22] h-8 transition-all duration-200 outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/25 hover:border-[#9CA3AF]"
          />
          {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
          <label className="text-sm font-medium text-[#444854] w-[85%] sm:w-[80%]">Your email address</label>
          <input
            type="email"
            placeholder="Enter email"
            {...register('email', { required: 'Email is required' })}
            className="tt w-[85%] sm:shadow-md/30 shadow-[#494a4d] sm:w-[80%] rounded-md text-sm text-[#1A1D22]  bg-[#0F766E]/10 border border-[#0F766E]/20 h-8 transition-all duration-200 outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/25 hover:border-[#9CA3AF]"
          />
          {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
          <label className="text-sm font-medium text-[#444854] w-[85%] sm:w-[80%]">Subject</label>
          <input
            type="text"
            placeholder="Enter Subject"
            {...register('subject', { required: 'subject is required' })}
            className="tt w-[85%] sm:w-[80%] sm:shadow-md/30 shadow-[#494a4d] bg-[#0F766E]/10 border border-[#0F766E]/20 rounded-md text-sm text-[#1A1D22] h-8 transition-all duration-200 outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/25 hover:border-[#9CA3AF]"
          />
          {errors.subject && <p className="text-xs text-red-600">{errors.subject.message}</p>}

          <label className="text-sm font-medium text-[#444854] w-[85%] sm:w-[80%]">Description</label>
          <textarea
            placeholder="Enter description"
            {...register('description', { required: 'Description is required',minLength:{value:30,message:'Minimum length is 30'} })}
            className="tt w-[85%] sm:shadow-md/30 shadow-[#494a4d] sm:w-[80%]  bg-[#0F766E]/10 border border-[#0F766E]/20 rounded-md text-sm text-[#1A1D22] h-24 transition-all duration-200 outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/25 hover:border-[#9CA3AF]"
          />
          {errors.description && <p className="text-xs text-red-600">{errors.description.message}</p>}

        <button
            type="submit"
            disabled={isSubmitting}
            className="button w-[85%] sm:w-[80%] md:w-48 h-10 cursor-pointer bg-[#0F766E] text-white rounded-md font-medium text-sm disabled:opacity-60 transition-all duration-200 hover:bg-[#0d5f58] hover:-translate-y-0.5 shadow-lg/30 shadow-[#494a4d] active:translate-y-0"
          >
            {isSubmitting ? 'Submitting...' : 'Submit request'}
          </button>

          {submitStatus === 'success' && (
            <p className="text-sm text-[#0F766E]">Request submitted! We'll get back to you.</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
          )}
        </form>
        </div>
        </div>
    </>
  )
}

export default ContactForm