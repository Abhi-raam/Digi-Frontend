import React from 'react'
import { FaFacebook,FaInstagram,FaGlobe,FaLinkedin,FaMapMarkerAlt} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function HomeCard({data}) {
  return (
    <div className='bg-gray-100 p-4 px-3 flex space-x-7 rounded-md  lg:w-[30rem] hover:-translate-y-1 transition cursor-pointer shadow-md'>
        <div className='p-3'>
            <img className='w-[6rem] rounded-full' src={`http://192.168.1.37:8000/${data.Image}`} alt="" />
        </div>
        <div className='space-y-4'>
            <div>
                <h1 className='text-xl font-semibold text-gray-800'>{data.CompanyName}</h1>
            </div>
            <div className='grid  grid-cols-5 gap-4 lg:gap-8 pr-3'>
                <a href={data.Facebook} target='_blank'>
                    <FaFacebook className='text-3xl text-blue-700 '/>
                </a>
                <a href={data.Instagram} target='_blank'>
                    <FaInstagram className='text-3xl text-pink-600'/>
                </a>
                <a href={data.Website} target='_blank'>
                    <FaGlobe className='text-3xl text-green-700'/>
                </a>
                <a href={data.X} target='_blank'>
                    <FaSquareXTwitter className='text-3xl text-gray-700'/>
                </a>
                <a href={data.Linkedin} target='_blank'>
                    <FaLinkedin className='text-3xl text-blue-700'/>
                </a>
            </div>
            <div className='mt-5 justify-center flex items-center space-x-3   rounded-full w-[8rem]'>
                <FaMapMarkerAlt/>
                <h2>{data.Location}</h2>
            </div>
        </div>
    </div>
  )
}

export default HomeCard