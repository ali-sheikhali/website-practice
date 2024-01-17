import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className='w-8/12 md:w-6/12 mx-auto my-10'>
        <div className='flex justify-around'>
            <Link to="https://www.linkedin.com/in/ali-sheikhali/" target='-blank'>
                <FaLinkedinIn className='text-2xl ' />
            </Link>
            <Link to="https://github.com/ali-sheikhali" target='-blank'>
                <FaGithub className='text-2xl ' />
            </Link>
            <Link to="" target='-blank'>
                <SiGmail className='text-2xl ' />
            </Link>
            <Link to="https://t.me/ali_sam110" target='-blank'>
                <FaTelegramPlane className='text-2xl ' />
            </Link>
            <Link>   
                <FaInstagram className='text-2xl' />
            </Link>
        </div>
    </div>
  )
}

export default SocialMedia