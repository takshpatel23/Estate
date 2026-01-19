import React from 'react'
import Navbar  from './Navbar'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div>
        {/* <Navbar/> */}
        <div className='min-h-screen mb-4 overflow-hidden bg-cover bg-center flex items-center w-full' style={{backgroundImage:"url('/header_img.png')"}}>
          <Navbar/>
          <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once:true}}
          className='container text-center mx-auto py-4 px-6 md:px-20'>
          <h2 
          
          
          className='text-7xl text-white  pt-10 inline-block max-w-3xl font-semibold'>Explore homes that fit your dreams</h2>
          <div 
          
          className='space-x-4 mt-10'>
            <button className='border border-white px-6 py-2 rounded text-white'><a href="#Project">Projects</a></button>
            <button className='border border-blue-600 px-4 py-2 rounded text-white bg-blue-600'><a href="#Contact">Contact Us</a></button>
          </div>
        </motion.div>
        </div>
    </div>
  )
}

export default Hero