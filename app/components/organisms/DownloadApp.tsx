import React from 'react'
import Image from 'next/image'
import appsvg from "@/public/assets/svg/appstore.12a157e4.svg"
import googlesvg from "@/public/assets/svg/google-play-badge.f5341433.svg"
const DownloadApp = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-40 w-[90%] mx-auto my-8'>
        <div>
            <h2 className='text-3xl font-bold w-full md:w-[80%]'>Download our app to get the most out of it</h2>
            <p>
            Download our app to book, manage, and unlock exclusive deals on car rentals. Experience seamless travel planning with:
            </p>
            <ul>
                <li> 
                    Easy booking and cancellation
                </li>
                <li> 
                    Real-time vehicle availability
                </li>
                <li>
                    Personalized offers and discounts
                </li>
                <li> 
                    Secure payment options
                </li>
            </ul>
            <div className='flex text-white gap-3 mt-4'>
                <Image src={appsvg} alt='apple store'/>
                <Image src={googlesvg} alt="google store"/>
                {/* <div className='bg-black flex gap-1 p-2 rounded-sm'>
                <img src="assets/svg/google-play-icon.svg" alt="google" />
                <div className='flex flex-col'>
                <small>Get it on</small>
                <span>Google Play</span>
                </div>
                </div>
                <div className='bg-black flex gap-1 p-2 rounded-sm'>
                <img src="assets/svg/apple.svg" alt="apple" />
                <div className='flex flex-col'>
                <small>Download on the</small>
                <span>AppStore</span>
                </div>
                </div> */}
            </div>
        </div>
        <div className='flex justify-center'>
            <img src="assets/images/download.jpeg" alt="" />
        </div>
    </section>
  )
}

export default DownloadApp