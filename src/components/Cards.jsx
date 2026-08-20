import React from 'react'
import hardware from '/src/assets/hardware.svg'
import software from '/src/assets/software.svg'
import diagnostics from '/src/assets/diagnostics.svg'
import sale from '/src/assets/sale.svg'
const Cards = () => {
  return (
    <>
    <div className="cards mt-4 text-[#1A1D22] flex flex-wrap gap-4 w-full justify-center items-center px-4 sm:gap-3 sm:px-6 font-display md:gap-6 md:px-6">
        <div className="card1 cursor-pointer border border-[#E5E7EB] shadow-sm shadow-[#0F766E] bg-[rgba(255,255,255,0.03)] h-[15vh] w-[85vw] py-6 gap-2 flex md:flex-col items-center justify-center rounded-xl transition-all duration-300 ease-out hover:-translate-z-2 hover:-translate-y-1 sm:w-[80%] md:h-[35vh] md:w-[20vw] px-4 md:py-0">
            <img src={hardware} alt="" className='h-10 w-10'/>
            <div>
            <div className='font-bold text-xl text-center' >Hardware repair</div>
            <div className='padding text-xs text-center'>Screen, battery, charging-port, camera and more</div>
        </div>
        </div>
        <div className="card1 border cursor-pointer border-[#E5E7EB] shadow-sm shadow-[#0F766E] bg-[rgba(255,255,255,0.03)] h-[15vh] w-[85vw] py-6 gap-8 flex md:flex-col items-center justify-center rounded-xl transition-all duration-300 ease-out hover:-translate-z-2 hover:-translate-y-1 sm:w-[80%] md:h-[35vh] md:w-[20vw] md:py-0 px-4">
            <img src={software} alt="" className='h-10 w-10'/>
            <div>
            <div className='font-bold text-xl text-center' >Software & Unlocking</div>
            <div className='padding text-xs text-center'>iCloud, password, pattern ,system repair</div>
        </div>
        </div>
        <div className="card1 border cursor-pointer border-[#E5E7EB] shadow-sm shadow-[#0F766E] bg-[rgba(255,255,255,0.03)] gap-5 h-[15vh] w-[85vw] py-6 flex md:flex-col items-center justify-center rounded-xl transition-all duration-300 ease-out hover:-translate-z-2 hover:-translate-y-1 sm:w-[80%] md:h-[35vh] md:w-[20vw] md:py-0 px-4">
            <img src={diagnostics} alt="" className='h-10 w-10'/>
            <div>
            <div className='font-bold text-xl text-center' >Diagnostics & Data</div>
            <div className='padding text-xs text-center'>Fast diagnosis, data recovery, water damage</div>
        </div>
        </div>
        <div className="gap-5 cursor-pointer card1 border border-[#E5E7EB] shadow-sm shadow-[#0F766E] bg-[rgba(255,255,255,0.03)] h-[15vh] w-[85vw] py-6 flex md:flex-col items-center justify-center rounded-xl transition-all duration-300 ease-out hover:-translate-z-2 hover:-translate-y-1 sm:w-[80%] md:h-[35vh] md:w-[20vw] md:py-0 px-4">
            <img src={sale} alt="" className='h-10 w-10'/>
            <div>
            <div className='font-bold text-xl text-center' >Devices for Sale</div>
            <div className='padding text-xs text-center'>New and refurbished phones + accessories</div>
        </div>
        </div>
    </div>
    <div className="footer">
        <div className='textt text-[#6B7280] text-center text-sm px-4'>PHONELAND · repairs and devices</div>
    </div>
    </>
  )
}

export default Cards 