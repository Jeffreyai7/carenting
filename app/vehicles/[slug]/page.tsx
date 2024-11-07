"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import { cars } from '@/public/constants';
import Booking from '@/app/components/molecules/Booking';

const Vehiclepage = () => {
const params = useParams()
const slugstr = params.slug
const vehiclepagedetail = cars.filter(car => car.id === slugstr)[0]

if(!vehiclepagedetail)
  return (<div>Not found</div>)

    return (
    <section className='md:h-screen'>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 py-5 w-[90%] mx-auto '>
        <div className='flex justify-center'>
        <div className="card bg-base-100 w-80 shadow-xl">
        <figure>
          <img
            src={vehiclepagedetail.imgtag}
            alt="Shoes" />
        </figure>
          <div className="card-body">
            <h2 className="card-title">{vehiclepagedetail.model}</h2>
            <p>{vehiclepagedetail.Purpose}</p>
            <div className="card-actions justify-end">
            <span className='btn bg-orange-400' >{vehiclepagedetail.price}</span>
            </div>
          </div>
        </div>
        </div>
        <Booking/>
      </div>
    </section>
)
}

export default Vehiclepage;