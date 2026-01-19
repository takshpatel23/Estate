import React, { use } from 'react'
import { assets , projectsData } from '../assets/assets'
import { motion } from 'framer-motion'
const Project = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const[cardsToShow, setCardsToShow] = React.useState(1);
    // useEffect(() => {
    //     const updateCardsToShow = () => {
    //         if (window.innerWidth >= 1024) {
    //             setCardsToShow(projectsData.length);
    //         } else {
    //             setCardsToShow(1);
    //         }
    //     };
    //     updateCardsToShow();
    //     window.addEventListener('resize', updateCardsToShow);
    //     return () => window.removeEventListener('resize', updateCardsToShow);
    // }, []);
    const nextProjects = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }
    const prevProjects = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
    }
    
  return (
    <motion.div 
    initial={{ opacity: 0, x:-100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    whileInView={{opacity:1 , x:0}}
    className='my-20'>
        <div className='mt-30 justify-center items-center container mx-auto text-center overflow-hidden' id="Project">
            <h2 className='text-3xl'><span className='text-5xl font-bold'>Projects</span> <u>Completed</u></h2>
            <h2 className='text-gray-500 max-w-80 text-center mt-4 mx-auto'>Crafting Spaces, Building Legacies—Explore Our Portfolio</h2>
        </div>
        <div className="flex justify-end items-center mb-8 container mx-auto">
        <button onClick={prevProjects} className="p-3 bg-gray-200 rounded mr-2" aria-label='Previous Project'>
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextProjects} className="p-3 bg-gray-200 rounded mr-2" aria-label='Next Project'>
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
        <div>
            <div className='overflow-hidden mt-10 mb-20 mx-15'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out' 
            style={{transform : `translateX(-${currentIndex * (100 / cardsToShow)}%)`}}>
                {projectsData.map((project, index) => (
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4  md:w-1/4 lg:w-1/4'>
                        <img src={project.image} alt={project.title} className='w-full h-auto md-14 object-cover rounded-lg' />
                        <div className='absolute bottom-5 left-0 right-0 flex justify-center '>
                            <div className='inline-block bg-white w-[85%] px-4 py-2 shadow-md rounded-xl text-left'>
                                <h3 className='text-xl font-semibold text-gray-800'>{project.title}</h3>
                                <p className='text-md text-gray-600'>{project.location}</p>
                                <p className='text-lg font-semibold mt-2'>{project.price}</p>
                            </div>
                            
                        </div>
                    </div>
                ))}         
            </div>
        </div>
        </div>
    </motion.div>
  )
}

export default Project