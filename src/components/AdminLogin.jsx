import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const [loginError, setLoginError] = useState(null)
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      setLoginError(null)
      const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error('Invalid credentials')
      const result = await res.json()
      localStorage.setItem('adminToken', result.token)
      navigate('/admin/dashboard')
    } catch (error) {
      setLoginError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center font-display px-4 py-10 sm:px-6 md:px-0 md:py-6">
      <div className="w-full md:w-[50%]">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-[#0F766E] font-display text-sm md:text-md">Admin panel</div>
          <div className="text-2xl sm:text-[28px] md:text-3xl">Welcome back</div>
          <div className="text-sm md:text-md text-[#5B5C5F]">Log in to manage contact and repair requests.</div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white border shadow-lg/20 shadow-[#0F766E] border-[#E5E7EB] rounded-xl flex flex-col items-center w-full transition-shadow duration-300 hover:shadow-lg/30 mt-6 py-6"
        >
          <label className="text-sm font-medium text-[#444854] w-[85%] sm:w-[80%]">Email</label>
          <input
            type="email"
            placeholder="admin@shop.com"
            {...register('email', { required: 'Email is required' })}
            className="tt w-[85%]  bg-[#0F766E]/10 border border-[#0F766E]/20 sm:w-[80%] rounded-md text-sm text-[#1A1D22] h-8 transition-all duration-200 outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/25 hover:border-[#9CA3AF]"
          />
          {errors.email && <p className="text-xs text-red-600 w-[85%] sm:w-[80%]">{errors.email.message}</p>}

          <label className="text-sm font-medium text-[#444854] w-[85%] sm:w-[80%]">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            {...register('password', { required: 'Password is required' })}
            className="tt w-[85%] sm:w-[80%] rounded-md text-sm text-[#1A1D22] bg-[#0F766E]/10 border border-[#0F766E]/20 h-8 transition-all duration-200 outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/25 hover:border-[#9CA3AF]"
          />
          {errors.password && <p className="text-xs text-red-600 w-[85%] sm:w-[80%]">{errors.password.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-[85%] sm:w-[80%] md:w-48 h-10 cursor-pointer bg-[#0F766E] text-white rounded-md font-medium text-sm disabled:opacity-60 transition-all duration-200 hover:bg-[#0d5f58] hover:-translate-y-0.5 active:translate-y-0 mt-2"
          >
            {isSubmitting ? 'Logging in...' : 'Log in'}
          </button>

          {loginError && (
            <p className="text-sm text-red-600 mt-2">{loginError}</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default AdminLogin