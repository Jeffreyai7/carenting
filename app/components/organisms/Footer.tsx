import React from 'react'
import Button from '../atoms/Button'

const Footer = () => {
  return (
    <footer id='contact' className='bg-black bg-footerground-image bg-repeat bg-cover text-white'>
      <div className='grid md:grid-cols-4 gap-8 py-3 mx-auto w-[90%]'>
        <div>
            <h5 className='text-2xl font-bold' >Carentile</h5>
            <p>we offer a wide range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
            <p className='flex gap-2 py-4'><img className='bg-white' src="assets/svg/phone.svg" alt="number" /><span>070-311-845-49</span></p>
            <p className='flex gap-2 '><img className='bg-white' src="assets/svg/mail.svg" alt="mail" /><span>jirukeh@gmail.com</span></p>
        </div>
        <div>
            <h5 className='text-2xl font-bold'>Company</h5>
            <ul>
                <li>Lagos</li>
                <li>Abuja</li>
                <li>Benin</li>
                <li>Kaduna</li>
            </ul>
        </div>
        <div>
           <h5 className='text-2xl font-bold'>Working Hours</h5> 
           <p>Mon - Sat: 9.00am - 9.00pm</p>
           <p>Sun: Closed</p>
        </div>
        <div>
           <h5 className='text-2xl font-bold'>Subscription</h5> 
           <p>Subscribe your Email address for latest news and updates</p>
           <form action="">
           <label className="input input-bordered flex items-center gap-2 my-2">
              Email
               <input type="text" className="grow" placeholder="your email" />
            </label>
            <Button className='bg-orange-500 w-full py-2'>Subscribe</Button>
           </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer