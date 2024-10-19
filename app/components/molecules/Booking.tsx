import React from 'react'
import Button from '../atoms/Button'

const Booking = () => {
  return (
        <form className='grid grid-cols-1 py-5 gap-3 w-[90%] mx-auto' action="">
            <div className='flex flex-col'>
            <label htmlFor="pickup">Pick up</label>
            <select className='menu dropdown-content bg-base-100 rounded-box z-[1] w-full p-2 p shadow' title='pickup' name="pickup" id="">
                <option value="">Select your Pick up Location</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Benin">Benin</option>
                <option value="Portharcourt">Portharcourt</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Enugu">Enugu</option>
            </select>
            </div>      
            <div className='flex flex-col'>
            <label htmlFor="dropOff">Drop off</label>
            <select className='menu dropdown-content bg-base-100 rounded-box z-[1] w-full p-2 shadow' title='dropOff' name="dropOff" id="">
                <option value="">Select your Pick up Location</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Benin">Benin</option>
                <option value="Portharcourt">Portharcourt</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Enugu">Enugu</option>
            </select>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="pickUp-time">Pick up time</label>
                <input className='menu dropdown-content bg-base-100 rounded-box z-[1] w-full p-2 shadow' name='pickUp time' title='pickUp-time' type="date" />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="dropOff-time">Drop off time</label>
                <input className='menu dropdown-content bg-base-100 rounded-box z-[1] w-full p-2 shadow' name='dropOff-time' title='dropOff-time' type="date" />
            </div>
            <Button className='bg-orange-500 py-3 '>Book Now</Button>
        </form>
  )
}

export default Booking