import React from 'react'
import Image from 'next/image'
import Button from '../atoms/Button'
import keytake from "@/public/assets/images/pickchoose.jpg"

const Chooseus = () => {
  return (
    <section className='w-[90%] mx-auto'>
        <p className=''>Why choose us</p>
        <Image className='rounded-2xl mx-auto' src={keytake} alt={"alt"}/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-9 my-8'>
            <div>
                <h1 className='text-3xl w-full md:w-[70%] my-2'>Best valued deals you will ever find</h1>
                <p className='w-full md:w-[70%] text-justify ' >Discover the best deals you will ever find with our unbeatable offers. We are dedicated to providing tou with the best value for your money so you can enjoy top quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so you don&apos;t miss out on your chance to save big</p>
                <Button className='bg-orange-500 py-2 my-2' >Find Details</Button>
            </div>
            <div>
                <div className='flex items-center gap-4 my-4'>
                    <img src="assets/svg/suv-vehicle.svg" alt="" />
                    <div className='w-[70%]'>
                        <h5 className='font-bold'>Cross Country Drive</h5>
                        <p>Take your driving exprience to the next level with our top-notch vehicles for your cross country adventures</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <img src="assets/svg/usd-coin-cryptocurrency.svg" alt="" />
                    <div className='w-[70%]'>
                    <h5 className='font-bold'>All inclusive Pricing</h5>
                    <p>Get everything you need in one  convenient transparent price with our all-inclusive pricing policy</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 my-4'>
                    <img src="assets/svg/hand-holding-us-dollar.svg" alt="" />
                    <div className='w-[70%]'>
                    <h5 className='font-bold'>No hidden Charges</h5>
                    <p>Enjoy peace of mind with our no hidden charges policy.we believe in transparent and honest pricing</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Chooseus