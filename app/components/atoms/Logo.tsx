import React from 'react'
import Image from "next/image";
import logo from "@/public/logo.jpg"




const Logo = () => {
  return (
    <div className='h-[80px]'>
        <Image src={logo} alt='logo' width={60}/>
    </div>
  )
}

export default Logo