import { FaQs } from '@/public/constants'
import React from 'react'

const Faq = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto'>
        <div className='w-[90%] m-auto' >
         <img src="/assets/images/fordexplorer.jpg" alt="" />   
        </div>
        <div className='flex flex-col gap-2'>
                <p>FAQ</p>
                <h2 className='text-3xl'>Frequently Asked Questions</h2>
                <p>Frequently Asked Questions about the Car Rental Booking Process on Our Website Answers to common concerns and inquiries</p>

                {
                    FaQs.map((faq, index) => {
                        return (
                            <div className="collapse collapse-plus bg-inherit gap-2" key={index} >
                                 <input title='radio' type="radio" name="my-accordion-3" defaultChecked />
                                <div className="collapse-title text-xl font-medium bg-orange-500 text-white ">{faq.question}</div>
                                <div className='collapse-content border-orange-500  '>
                                <p>{faq.answer}</p>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    </section>
  )
}

export default Faq