import React from 'react'
import devices from '/src/assets/devices.svg'
import repairs from '/src/assets/repairs.svg'
import contact from '/src/assets/contact.svg'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
     <>
        <div className="nav w-full h-auto px-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:h-14 sm:py-0 sm:px-0 sm:flex-nowrap sm:justify-between md:h-14 font-display sticky top-0 z-50 bg-[#F7F8F6]">
          <div className="left ">
    <Link to='/' className="text-3xl md:text-2xl sm:text-xl font-display font-medium text-[#1A1D22]">PHONELAND</Link>
          </div>
          <div className="right flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-15">
            <div className="d flex gap-0.5 items-center cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:underline decoration-[#6B7280] ">
            <img src={devices} alt="" className='h-5 w-4 ' />
            {/* <div className="t2 text-[#5b5c5f] font-mono">Devices</div> */}
              <NavLink 
    to="/devices-request" 
    className={({ isActive }) => 
      `t2 transition-all duration-300${
        isActive ? 'text-[#5b5c5f] decoration-2 underline decoration-[#0F766E] font-bold' : 'text-[#5b5c5f] '
      }`
    }
  >
    Devices
  </NavLink>
            </div>
            <div className="d flex gap-0.5 items-center cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:underline decoration-[#6B7280]">
            <img src={contact} alt="" className='h-5 w-4' />
            {/* <div className="t2 text-[#5b5c5f] font-mono">Repairs</div> */}
              <NavLink 
    to="/repair2-request" 
    className={({ isActive }) => 
      `t2 font-mono transition-all duration-300${
        isActive ? 'text-[#5b5c5f] decoration-2 underline decoration-[#0F766E] font-bold' : 'text-[#5b5c5f] '
      }`
    }
  >
    Repairs
  </NavLink>
            </div>
            <div className="d flex gap-0.5 items-center cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:underline decoration-[#6B7280]">
            <img src={repairs} alt="" className='h-5 w-4' />
            {/* <NavLink to="/contact-request" className="t2 text-[#5b5c5f] ">Contact</NavLink> */}
            <NavLink 
    to="/contact-request" 
    className={({ isActive }) => 
      `t2 font-mono transition-all duration-300${
        isActive ? 'text-[#5b5c5f] decoration-2 underline decoration-[#0F766E] font-bold' : 'text-[#5b5c5f] '
      }`
    }
  >
    Contact
  </NavLink>
            </div>
          </div>
         </div>
         
        </>
  )
}

export default Navbar