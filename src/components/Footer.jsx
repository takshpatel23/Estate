import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row items-start justify-between gap-10 pb-10'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark} alt="" className='w-32 mx-auto'/>
            <p className='text-center text-gray-200 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className='w-full md:w-1/5 mb:5 md:mb-0'>
            <h3 className='text-white text-xl font-bold mb-4'>company</h3>
            <ul className='flex flex-col gap-2 text-gray-200'>
                <a href="#" className='text-gray-200 hover:text-white block mb-2'>Home</a>
                <a href="#About" className='text-gray-200 hover:text-white block mb-2'>About Us</a>
                <a href="#Contact" className='text-gray-200 hover:text-white block mb-2'>Contact Us</a>
                <a href="#Project" className='text-gray-200 hover:text-white block mb-2'>Projects</a>
            </ul>
        </div>
        <div>
            <h3 className='text-white text-xl font-bold mb-4'>contact</h3>
            <p className='text-gray-200'>123 Main Street, Ahmedabad, Gujarat , India.</p>
            <p className='text-gray-200'>Email: takshpatel@estate.com</p>
            <p className='text-gray-200'>Phone: +91 6355212113</p>
        </div>
        <div></div>
      </div>
      <div className=' text-center text-gray-300 mt-10 py-6 border-t border-gray-500'>
        2025 Estate. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
