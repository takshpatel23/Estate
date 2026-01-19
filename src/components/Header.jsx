import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' id='Header' style={{backgroundImage: "url('/header_img.png')"}}>
    
      <div className='container text-center mx-auto py-4 px-4 md:px-20 lg:px-32 text-white'>
        <h1 className='text-5xl sm:text-6xl font-bold md:text-[82px] inline-block max-w-3xl pt-20'>Welcome to Rael Estates</h1>
        <div className='space-x-6 mt-16'>
          <a href ="#Projects" className='border border-white px-8 py-3 rounded hover:text-black'>Projects</a>
          <a href ="#Contact" className='mr-10 bg-blue-600 p-2 text-white rounded-2xl px-4 hover:text-black '>Contact Us</a>
        </div>
      </div>
    </div>

  )
}

export default Header
