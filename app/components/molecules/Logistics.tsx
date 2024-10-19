import React from 'react'

const Logistics = () => {
  return (
    <section className='w-[90%] mx-auto my-14'>
      <div className='w-[60%] mx-auto text-center p-4 '>
        <p>plan your trip now</p>
        <h2 className='text-3xl' >Quick and Easy Car rental</h2>
      </div>
        <div className='grid md:grid-cols-3 gap-2 text-center' >
            <div><img className='mx-auto' src="/assets/svg/taxi.svg"  alt='operator'/><h3 className='py-2' >Select Car</h3><p className='py-2 w-[70%] mx-auto'>we offer a wide range of vehicles for all your driving needs. we have the perfect car to meet your needs</p></div>
            <div><img className='mx-auto' src="/assets/svg/gui-operator.svg" alt='vehicle' /><h3 className='py-2' >Contact Operator</h3><p className='py-2 w-[70%] mx-auto'>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p></div>
            <div>
            <img className='mx-auto' src="/assets/svg/suv-vehicle.svg" alt="vehicle" /><h3 className='py-2'>Let&apos;s Drive</h3><p className='py-2 w-[70%] mx-auto'>Whether you are hitting the open road we&apos;ve got you covered with our wide range of cars</p></div>
        </div>
    </section>  
  )
}

export default Logistics