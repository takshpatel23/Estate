import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'
const Testimonils = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x:100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    whileInView={{opacity:1 , x:0}}
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonils'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 duration-1 under font-light'>Testimonials</span></h1>
      <p className='text-center text-gray-600 mb-12 max-w-80 mx-auto'>Real Stories from those who found home with Us</p>
      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='max-w-[300px] border shadow-lg rounded text-center px-8 py-12 '>
            <img className='w-20 h-20 rounded-full mb-4 mx-auto' src={testimonial.image} alt={testimonial.name} />
            <h3 className='text-xl font-medium text-gray-700 text-center'>{testimonial.name}</h3>
            <p className='text-gray-600 mb-4 text-center'>{testimonial.title}</p>
            <div>
                {Array.from({length: testimonial.rating},(item,index)=>(
                    <img key={index} src={assets.star_icon} alt="Star" className='w-5 h-5 inline-block'/>
                ))}
            </div>
            <p className='text-gray-700 mt-4 text-center'>" {testimonial.text} "</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonils
