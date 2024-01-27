import React from 'react'
import { useNavigate } from 'react-router-dom'
import companyLogo from '../assets/companyLogo.png'
function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between px-5 p-2  items-center'>
      <div>
        <img className='w-[4rem] rounded-full' src={companyLogo} alt="" />
      </div>
      <div>
        <h2 onClick={()=>navigate('/')} className='p-2 rounded-md bg-red-500 text-white font-semibold cursor-pointer '>Logout</h2>
      </div>
    </div>
  )
}

export default Navbar