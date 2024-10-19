"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../atoms/Logo'
import { links } from '@/public/constants';
import { usePathname } from 'next/navigation';


const NavBar = () => {
const [isopened, setIsopened] = useState(false)

const pathname = usePathname()

console.log(pathname)
const handleclick = () => {
  setIsopened(!isopened)
  console.log("I got clicked")
}



const handleScroll = (sectionId: string) =>{
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({behavior:'smooth'})
}


  return (
    <>
    <nav className=' bg-white sticky top-0 left-0 w-full z-10'>
    <div className='flex justify-between h-20 py-2 w-[90%] mx-auto'>
      <div><Logo/></div>
      <ul className='hidden md:flex items-center justify-between w-2/4' >
      {
        links.map((path) =>{
          return (
            <li key={path.id} className={`hover:text-orange-400 transition-all ease-linear ${pathname === path.link ? "activeline":""}`}><Link href={path.link}>{path.name}</Link></li>
          )
        })
      }
        <li onClick={() =>handleScroll("contact")} className='hover:text-orange-400 transition-all ease-linear cursor-pointer'> Contact</li>
      </ul>
      <div className='hidden md:flex w-[25%] items-center justify-center gap-4'>
        <Link className='btn btn-ghost' href={"/signin"}>Sign in</Link>
        <Link className='btn bg-orange-500' href={"/register"}>Register</Link>
      </div>
      <div className='flex justify-center items-center md:hidden'>
        <div onClick={() => handleclick() } className='bg-orange-400 rounded-full p-1'>
        <img src="assets/svg/menbtn.svg" alt="menu" />
        </div>
      </div>

      <div className={`md:hidden absolute top-0 left-0 right-0 w-full text-white  bg-black ${isopened ? "fadein" : "hidden"}`}>
        <div onClick={() => handleclick() } className={`flex justify-end mt-1 mr-1 fadein`}>
        <img className='bg-orange-400 rounded-full p-1' src="assets/svg/closebtn.svg" alt="close" />
        </div>
      <ul className='flex flex-col items-center' >
        <li className='hover:text-orange-400 transition-all ease-in'><Link href={"/"}>Home</Link></li>
        <li className='hover:text-orange-400 transition-all ease-in'><Link href={"/about"}>About Us</Link></li>
        <li className='hover:text-orange-400 transition-all ease-in'><Link href={"/vehicles"}>Vehicles</Link></li>
        <li className='hover:text-orange-400 transition-all ease-in'> <Link href={"#contact"} scroll={true} >Contact</Link></li>
      </ul>
      <div className='flex flex-col items-center justify-center gap-2 py-2'>
        <Link className='btn btn-ghost' href={"/signin"}>Sign in</Link>
        <Link className='btn bg-orange-500' href={"/register"}>Register</Link>
      </div>
      </div>
    </div>
    </nav>
    </>
  )
}

export default NavBar