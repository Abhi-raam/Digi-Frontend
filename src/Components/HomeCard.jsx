import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebook,FaInstagram,FaGlobe,FaLinkedin,FaMapMarkerAlt} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function HomeCard({data}) {
  return (
    <div className='bg-gray-100 p-4 px-3 flex space-x-7 rounded-md w-[30rem] hover:-translate-y-2 transition cursor-pointer shadow-md'>
        <div className='p-3'>
            <img className='w-[6rem] rounded-full' src={logo} alt="" />
        </div>
        <div className='space-y-4'>
            <div>
                <h1 className='text-xl font-semibold text-gray-800'>{data.CompanyName}</h1>
            </div>
            {/* <div className='font-semibold text-gray-800'>
                <p>The react-router-dom package contains bindings for using React Router in web applications.</p>
            </div> */}
            <div className='grid grid-cols-5 gap-8'>
                <a href="">
                    <FaFacebook className='text-3xl text-blue-700 '/>
                </a>
                <a href="">
                    <FaInstagram className='text-3xl text-pink-600'/>
                </a>
                <a href="">
                    <FaGlobe className='text-3xl text-green-700'/>
                </a>
                <a href="">
                    <FaSquareXTwitter className='text-3xl text-gray-700'/>
                </a>
                <a href="">
                    <FaLinkedin className='text-3xl text-blue-700'/>
                </a>
            </div>
            <div className='mt-5 justify-center flex items-center space-x-3   rounded-full w-[8rem]'>
                <FaMapMarkerAlt/>
                <h1>{data.Location}</h1>
            </div>
        </div>
    </div>
  )
}

export default HomeCard