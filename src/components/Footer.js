import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div className='w-full mx-auto bg-black md:flex-row  md:justify-around
     text-white py-5 flex flex-col justify-center items-center space-y-4'>
          <div className='text-white flex space-x-5 md:mt-4 '>
            <Link className='hover:text-yellow-500' to="/">
                Home
            </Link>
            <Link className='hover:text-yellow-500' to="/about-me">
                about me
            </Link>
            <Link className='hover:text-yellow-500' to="/my-project">
               my project
            </Link>
            <Link className='hover:text-yellow-500' to="/services">
               services
            </Link>
        </div>
        <div>
            <p className='font-bold text-2xl'>
                Ali Sheikhali
            </p>
        </div>
        <div>
            <p className='flex'>
            .تمامی حقوق برای این سایت محفوظ است
          <span className='mt-1 ml-2'> <FaRegCopyright/></span>
          
            </p>
        </div>
    </div>
  )
}

export default Footer