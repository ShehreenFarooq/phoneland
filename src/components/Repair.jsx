import React from 'react'
import Navbar from './Navbar'
import hardware from '/src/assets/hardware.svg'
import software from '/src/assets/software.svg'
import diagnostics from '/src/assets/diagnostics.svg'
import { Link } from 'react-router-dom'
const Repair = () => {
  return (
  <>
   <Navbar/>
   <div className="rep1 tt1 flex flex-col items-center gap-1.5 px-4 text-center md:px-0">
      <div className="t1 text-[#0F766E] font-display text-sm md:text-md">OUR SERVICES</div>
          <div className="t1 text-2xl md:text-3xl">Every repair, one shop</div>
          <div className="t1 text-sm md:text-md text-[#5B5C5F] ml-2 mr-2">Browse what we fix, then send us the details and we'll get back to you.</div>
   </div>
   <div className="w-full border-b border-[#0F766E]"></div>
   <div className="tt3 flex flex-col gap-5 px-4 md:px-0">
    <div className='flex flex-col gap-2'>
    <div className='flex gap-2 items-center'>
        <img src={hardware} alt="" className='h-6 w-6'/>
       <div className='text-2xl font-medium'>Hardware repair</div>
    </div>
    <ul className='grid grid-cols-2 gap-y-2 text-[#565759] sm:grid-cols-3 md:grid-cols-5 md:gap-y-0'>
        <li>Screen replacement</li>
        <li>Battery replacement</li>
        <li>Charging port repair</li>
        <li>Camera repair</li>
        <li>Back glass replacement</li>
        <li>Button repair</li>
    </ul></div>
    <div className="w-full border-b border-[#0F766E] "></div>
    <div className='flex flex-col gap-2'>
    <div className='flex gap-2 items-center'>
        
        <img src={software} alt="" className='h-5 w-5'/>
       <div className='text-2xl font-medium'>
Software and unlocking</div>
    </div>
    <ul className='grid grid-cols-2 gap-y-2 text-[#565759] sm:grid-cols-3 md:grid-cols-5 md:gap-y-0'>
        <li>iCloud unlock</li>
        <li>Password or pattern removal</li>
        <li>System restore</li>
        <li>Software troubleshooting</li>
        <li>OS updates</li>
    </ul>
    </div>
    <div className="w-full border-b border-[#0F766E] "></div>
    <div className='flex flex-col gap-2'>
    <div className='flex gap-2 items-center'>
        
        <img src={diagnostics} alt="" className='h-5 w-5'/>
       <div className='text-2xl font-medium'>
Diagnostics and data</div>
    </div>
    <ul className='grid grid-cols-2 gap-y-2 text-[#565759] sm:grid-cols-3 md:grid-cols-5 md:gap-y-0'>
        <li>Free diagnostic check</li>
        <li>Data recovery</li>
        <li>Water damage treatment</li>
        <li>Board-level inspection</li>
    </ul>
    </div>
    <Link to="/repair-request"  className='btn text-white h-12 shadow-lg/30 shadow-[#494a4d] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#494a4d] cursor-pointer w-[85%] sm:w-44 bg-[#0F766E] rounded-lg flex self-center items-center justify-center text-center'>Request a repair</Link>
   </div>
  </>
  )
}

export default Repair