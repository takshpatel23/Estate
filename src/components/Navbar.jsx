import React, { use } from 'react'
import { assets } from '../assets/assets'


const Navbar = () => {
  const [showMobileMenu , setshowMobileMenu] = React.useState(false);
  React.useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {  
      document.body.style.overflow = 'auto';
    }  return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);
  return (
    <div>
        <nav className='absolute top-0 left-0 w-full bg-transparent p-4'>
          <div className='max-w-7xl mx-auto py-2 flex justify-between items-center'>
            <h1 className='ml-10 text-4xl text-white font-bold not-first-of-type:'>Estate</h1>
            <ul className='hidden md:flex gap-9 text-lg text-white'>
              <li className='hover:bg-gray-300 cursor-pointer p-1 px-3 rounded-2xl'><a href="#Home">Home</a></li>
              <li className='hover:bg-gray-300 cursor-pointer p-1 px-3 rounded-2xl'><a href="#About">About</a></li>
              <li className='hover:bg-gray-300 cursor-pointer p-1 px-3 rounded-2xl'><a href="#Project">Project</a></li>
              <li className='hover:bg-gray-300 cursor-pointer p-1 px-3 rounded-2xl'><a href="#Testimonils">Testimonials</a></li>
            </ul>
           
            <button className='mr-10 bg-blue-600 p-2 text-white rounded-2xl px-4 hover:text-black'>Sign In</button>
            <img onClick={()=> setshowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="Menu"/>
          </div>
          <div className={`md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex justify-end p-6 cursor-pointer'>
              <img onClick={()=> setshowMobileMenu(false)} src={assets.cross_icon} className='w-7 m-4' alt="Close Menu"/>
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>

              <a onClick={()=> setshowMobileMenu(false)} href='#Home' className='px-4 py-2 rounded-full inline-block'>Home</a>
              <a onClick={()=> setshowMobileMenu(false)} href='#About' className='px-4 py-2 rounded-full inline-block'>About</a>
              <a onClick={()=> setshowMobileMenu(false)} href='#Project' className='px-4 py-2 rounded-full inline-block'>Project</a>
              <a onClick={()=> setshowMobileMenu(false)} href='#Testimonils' className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
