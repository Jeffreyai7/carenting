import React from 'react'
import Button from '../atoms/Button'
import heroimg from "@/public/assets/images/womandrive.webp"
import Image from "next/image";


const Hero = () => {
  return (
    <section className=' lg:h-screen bg-hero bg-cover bg-center mb-3 py-16'>
        <div className='w-[90%] mx-auto grid md:grid-cols-2 '>
        <div>
        <div className='w-10/12 flex flex-col gap-4 ' >
            <p>Plan your trip now</p>
            <h1 className='text-5xl'>Save big with our car rental</h1>
            <span>
                Rent the car of your dreams. Unbeatable prices. Unlimited rules.
                flexible pick-up options and much  more
            </span>
            <div className='flex gap-2 w-[80%]'>
                <Button className='bg-orange-500 p-5 flex-1'>Book Ride</Button>
                <Button className='bg-black p-5 flex-1'>Learn More</Button>
            </div>
        </div>
        </div>
        <div>
            <Image className=' w-full rounded-box mt-4' width={375} height={288} src={heroimg} alt="hero"/>
        </div>
        </div>

    </section>
  )
}

export default Hero