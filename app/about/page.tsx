import React from 'react'
import Maintemplate from '../components/Templates/Maintemplate'
import Chooseus from '../components/molecules/Chooseus'
import { profiles } from '@/public/constants'

const AboutUs = () => {
  return (
    <Maintemplate>
    <div className='bg-artwork bg-repeat bg-contain bg-top bg-orange-400 p-2 mb-7'>
    <h1 className='text-center text-3xl'>Meet the team</h1>
    <div className='grid grid-cols-3 my-6 gap-y-3 w-[90%] mx-auto'>
      {
        profiles.map((profile, index) => {
          return (
      <div key={index}>
      <div className="card bg-base-100 w-80 shadow-xl">
      <figure>
        <img
          src={profile.imageurl}
          alt="Shoes" />
      </figure>
        <div className="card-body">
          <h2 className="card-title">{profile.name}</h2>
          <p>{profile.position}</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
      </div>

          )
        })
      }
    </div>
    </div>
      <Chooseus/>
    </Maintemplate>
  )
}

export default AboutUs