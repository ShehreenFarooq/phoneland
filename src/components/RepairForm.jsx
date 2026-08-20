import { useForm } from "react-hook-form"
import { useState } from 'react'

const RepairForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm()
  const [submitStatus, setSubmitStatus] = useState(null)

  const onSubmit = async (data) => {
    try {
      setSubmitStatus(null)
      const res = await fetch(`${import.meta.env.VITE_API_URL}/repair`, {
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
  
    <div className="min-h-screen flex items-center justify-center px-4 md:px-0">
      <div className="repairform w-full md:w-[75%]">
        <div className="t1 flex flex-col items-center justify-center text-center">
          <div className="t1 text-[#0F766E] font-display text-sm md:text-md">Request a repair</div>
          <div className="t1 text-2xl md:text-3xl">Tell us what's wrong</div>
          <div className="t1 text-sm md:text-md text-[#5B5C5F]">We'll call you back to confirm details and pricing.</div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lala bg-white border shadow-[#0F766E] border-[#E5E7EB] rounded-xl flex flex-col items-center w-full shadow-sm/50 transition-shadow duration-300 hover:shadow-xl/20"
        >
          <label className="text-sm font-medium text-[#444854] w-[85%]">Full name</label>
          <input
            type="text"
            placeholder="Enter name"
            {...register('name', { required: 'Name is required' })}
            className="tt w-[85%]  bg-[#0F766E]/10 border border-[#0F766E]/20 rounded-md text-sm text-[#1A1D22] h-8 shadow-md/30 shadow-[#494a4d] transition-all duration-200 outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/25 hover:border-[#9CA3AF]"
          />
          {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}

          <label className="text-sm font-medium text-[#444854] w-[85%]">Phone number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^\+?[0-9\s\-()]{8,20}$/,
                message: "Please enter a valid phone number"
              }
            })}
            className="tt w-[85%]  bg-[#0F766E]/10 border border-[#0F766E]/20 rounded-md text-sm text-[#1A1D22] h-8 transition-all shadow-md/30 shadow-[#494a4d] duration-200 outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/25 hover:border-[#9CA3AF]"
          />
          {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}

          <label className="text-sm font-medium text-[#444854] w-[85%]">Phone model</label>
          <input
            type="text"
            placeholder="e.g. Samsung Galaxy A54"
            {...register('modelNumber', { required: 'Phone model is required' })}
            className="tt w-[85%] shadow-md/30 shadow-[#494a4d]  bg-[#0F766E]/10 border border-[#0F766E]/20 rounded-md text-sm text-[#1A1D22] h-8 transition-all duration-200 outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/25 hover:border-[#9CA3AF]"
          />
          {errors.modelNumber && <p className="text-xs text-red-600">{errors.modelNumber.message}</p>}

          <label className="text-sm font-medium text-[#444854] w-[85%]">What's the problem?</label>
          <textarea
            placeholder="Describe the issue"
            {...register('problem', { required: 'Please describe the problem' })}
            className="tt w-[85%] shadow-md/30 shadow-[#494a4d]  bg-[#0F766E]/10 border border-[#0F766E]/20 rounded-md text-sm text-[#1A1D22] h-24 transition-all duration-200 outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/25 hover:border-[#9CA3AF]"
          />
          {errors.problem && <p className="text-xs text-red-600">{errors.problem.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="button w-[85%] md:w-48 h-10 shadow-md/10 md:shadow-lg/30 shadow-[#494a4d] cursor-pointer bg-[#0F766E] text-white rounded-md font-medium text-sm disabled:opacity-60 transition-all duration-200 hover:bg-[#0d5f58] hover:-translate-y-0.5 active:translate-y-0"
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

export default RepairForm