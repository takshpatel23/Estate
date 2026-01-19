import React from 'react'
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
const Contact = () => {
     const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();

  
    if (!name || !email) {
      toast.error("Please fill in Name and Email");
      return;
    }

   
    toast.success("Message Sent Successfully");
    e.target.reset();
  };
  return (
    <motion.div 
    initial={{ opacity: 0, x:-100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    whileInView={{opacity:1 , x:0}}
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 duration-1 under font-light'>With Us</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to make a Move? Let's Build Your Future Together</p>
      <form onSubmit={handleSubmit} className='max-w-2xl mx-auto text-gray-700 pt-5'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 test-left'>
                Your Name* :
                <input type="text" className='border border-gray-300 rounded px-4 py-3 w-full mt-2'name='name' placeholder='Your Name' />
            </div>
            <div className='w-full md:w-1/2 test-left md:pl-4'>
                Your Email* :
                <input type="email" className='border border-gray-300 rounded px-4 py-3 w-full mt-2' name='email' placeholder='Your Email' />
            </div>
        </div>
        <div className='my-6 text-left'>
            Message :
            <textarea className='border border-gray-300 rounded px-4 py-3 w-full mt-2 h-48 resize-none' name="message" placeholder='Your Message' ></textarea>
        </div>
        <button type='submit' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:text-black'>Send Message</button>
      </form>
    </motion.div>
  )
}

export default Contact
