import React from 'react'
import { Link } from 'react-router-dom'

function NavBarMd() {
  return (
    <div>
        <div className='text-white flex space-x-5'>
            <Link to="/about-me">
                about me
            </Link>
            <Link to="/my-project">
               my project
            </Link>
            <Link to="/services">
               services
            </Link>
        </div>
    </div>
  )
}

export default NavBarMd