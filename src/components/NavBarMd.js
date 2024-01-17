import React from 'react'
import { Link } from 'react-router-dom'

function NavBarMd() {
  return (
    <div>
        <div className='text-white flex space-x-5'>
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
    </div>
  )
}

export default NavBarMd