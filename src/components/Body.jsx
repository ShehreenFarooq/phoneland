import React from 'react'
import { Link } from 'react-router-dom'
const Body = () => {
  return (
    <>
    <div className="h-[35vh] md:h-[46vh] flex items-center justify-center flex-col gap-3.5 font-display">
    <p className="font-display text-[#0F766E] tracking-widest text-sm">
      DIAGNOSTIC  ·  REPAIR  ·  RESTORE
    </p>
    <div className="text-[#1A1D22] font-bold text-3xl sm:font-bold w-full flex flex-col gap-2 text-center sm:text-5xl">
  We repair everything

<div className="w-full border-b border-[#0F766E]"></div>
</div>
<div className='text-[#6B7280] px-4.5 text-center'>  Fast, accurate diagnostics and professional repairs. Shop new and refurbished devices.</div>
<Link to="/repair-request"  className='text-white mt-2 h-12 shadow-lg/80 shadow-[#494a4d] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg/90 hover:shadow-[#494a4d] cursor-pointer w-44 bg-[#0F766E] rounded-lg flex items-center justify-center'>Request a repair</Link>
    </div>
    </>
  )
}

export default Body