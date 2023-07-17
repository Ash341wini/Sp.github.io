import React from 'react';
import Image25 from '../img/portfolio/25.jpg';
import Image26 from '../img/portfolio/26.jpg';
import Image27 from '../img/portfolio/27.jpg';
import Image10 from '../img/portfolio/10.jpg';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (

    <motion.section 
      initial={{opacity:0 }}
      animate={{opacity:1, y:1}}
      exit={{opacity:0}}
      transition={transition1}
      className='section bg-white px-[30px] 
      flex  '>

      <div className='container mx-auto  relative'>
          <div className='flex flex-col lg:flex-row h-full items-center
           justify-start gap-x-24 text-center lg:text-left pt-36 lg:pt-36 pb-8 lg:ml-36 '> 
             
              <motion.div 
                initial={{opacity:0 , y:'-80%'}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:'-80%'}}
                transition={transition1}
                className='flex flex-col lg:items-start ' >
                  <h1 className='h1 hover:scale-110 transition-all duration-500  transition'>portfolio</h1>
                  <p className='mb-12 max-w-sm'>
                            <p className='font-primary font-bold text-purple-900 text-[20px]
                            hover:scale-110 transition-all duration-500 lg:text-[20px]'>
                            Capturing Your Memories Forever !!!</p><br/>
                            <i>
                             "A great photograph is one that fully expresses what one feels, 
                             in deepest sense, about what is being photographed."
                            </i>
                    </p> 
                    <Link to={'/gallery'} className='btn mb-[30px] mx-auto
                         lg:mx-0 hover:scale-110 transition-all duration-500'>View More</Link>
              </motion.div>

              <motion.div 
               initial={{scale:0}}
               animate={{scale:1}}
               exit={{scale:0}}
               transition={transition1}
               className='grid grid-cols-2 lg:gap-6 sm:gap-5 xs:gap-3 lg:mr-36'>

                   <div className='max-w-[200px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px] bg-accent overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image25} alt='' />
                    </div>
                    <div className='max-w-[200px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px] bg-accent overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image26} alt='' />
                   </div>
                   <div className='max-w-[200px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px] bg-accent overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image27} alt='' />
                   </div>
                   <div className='max-w-[200px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px] bg-accent overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image10} alt='' />
                   </div>

                   
              </motion.div>
          </div>
      </div>
      
    </motion.section>
 );
};

export default Portfolio;
