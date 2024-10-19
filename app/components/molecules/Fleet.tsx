import { cars } from '@/public/constants'
import React from 'react'
// import Button from '../atoms/Button'
import Link from 'next/link'

const Fleet = () => {

  return (
    <section className='w-[90%] mx-auto my-14 grid grid-cols-1  md:grid-cols-3 gap-5'>
      <div className='flex items-center'>
        <div>
        <p className=''> Vehicle Models</p>
        <h2 className='text-3xl my-2'>Our rental fleet</h2>
        <span>choose from a variety of our amazing vehicles to rent fot your neext adventure or business trip</span>
        </div>
      </div>
      <div className="carousel carousel-center bg-inherit rounded-box max-w-md space-x-4 p-4">
        
        {
          cars.map((car, index) => {
          return (
                  <div key={index} className="carousel-item ">
                    <img  alt={car.model}
                    src={car.imgtag}
                    className="rounded-box w-full max-w-96" />
                    <p className='text-orange-500 relative right-72 pt-2' >{car.model}</p>
                  </div>
          )            
          })
        }
      </div>
      <div className='flex items-center justify-center'>
        <Link href={"/vehicles"} className='btn bg-orange-500' >Order Now</Link>
      </div>
    </section>
  )
}

export default Fleet