import React from 'react'
import Maintemplate from '../components/Templates/Maintemplate'
import { cars } from '@/public/constants';
import Image from 'next/image';
import Link from 'next/link';

const Vehicles = () => {
  return (
    <Maintemplate>
      <h1 className='text-3xl text-center pt-2'>Book A Ride from our Fleet</h1>
      <div className='grid md:grid-cols-2 w-[90%] gap-4 my-5 mx-auto bg-background ' >
        {
          cars.map((car, index) => {
            return (
              <div key={index} className='flex gap-4'>
              <div className=''>
                    <Image width={320} height={288} src={car.imgtag} alt="car" />
              </div>
              <ul className='flex flex-col justify-between w-[30%]'>
                <li className='flex justify-between cursor-pointer'><span>Price:</span><span>{car.price}</span></li>
                <li className='flex justify-between cursor-pointe'><span>Model:</span><span>{car.model}</span></li>
                <li className='flex justify-between cursor-pointer'><span>Make:</span><span>{car.make}</span></li>
                <li className='flex justify-between cursor-pointer'><span>AC:</span><span>{car.AC}</span></li>
                <li className='flex justify-between cursor-pointer'><span>Drive:</span><span>{car.Transmission}</span></li>
                <li className='flex justify-between cursor-pointer'><span>Purpose:</span><span>{car.Purpose}</span></li>
                <li><Link className='btn hover:bg-orange-400 transition duration-200 ease-in-out'  href={`/vehicles/${car.id}`}>Book Now</Link></li>
              </ul>
              </div>
            )
          })
        }
      </div>
    </Maintemplate>
  )
}

export default Vehicles;