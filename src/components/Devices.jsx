import React from 'react'
import Navbar from './Navbar'

const BRANDS = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Motorola', 'Nokia', 'Huawei', 'Sony']

const Devices = () => {
  return (
    <>
        <Navbar/>
    <div className="w-full flex flex-col items-center px-4 py-10 font-display bg-[#FAFAF9]">
      <p className="text-[#0F766E] text-2xl font-bold mb-1">Devices</p>
      <p className="text-2xl md:text-3xl text-center text-[#1A1D22] mb-8">We sell all major phone brands</p>

      <div className="w-full sm:w-[85%] md:w-[65%] bg-white border border-[#E5E7EB] rounded-xl shadow-md shadow-[#0F766E]/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md/30 hover:shadow-[#0F766E] p-10 text-center">

        <p className="text-sm text-[#5B5C5F] mb-2">
          New and refurbished phones from every major brand, checked and ready to go.
        </p>
        <p className="text-sm text-[#5B5C5F] mb-8">
          Every device is tested before it's listed, so you know exactly what you're getting — no surprises.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="text-sm text-[#0F766E] bg-[#0F766E]/10 border border-[#0F766E]/20 px-3 py-1 rounded-full"
            >
              {brand}
            </span>
          ))}
        </div>

        <div className="border-t border-[#E5E7EB] pt-6">
          <p className="text-sm text-[#444854]">
            Looking for something specific? Get in touch and we'll help you find the right device.
          </p>
        </div>

      </div>
    </div>
    </>
  )
}

export default Devices