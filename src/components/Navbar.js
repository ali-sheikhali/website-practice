import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [bar, setBar] = useState(false)
  const barHandleClick = ()=>{
    setBar(!bar)
  }
  return (
    <div className='bg-black text-white flex justify-around py-3'>
      <div>
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
      <div onClick={barHandleClick} className='mt-1 cursor-pointer font-bold text-xl'>
         {bar ? <IoClose/> :  <FaBars />} 
      </div>
    </div>
  )
}

export default Navbar