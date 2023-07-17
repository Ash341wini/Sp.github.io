import React from 'react'
// import WomanImg from '../img/home/woman.png';
import Image25 from '../img/portfolio/25.jpg';
import Image26 from '../img/portfolio/26.jpg';
import Image9 from '../img/portfolio/9.jpg';
import Image10 from '../img/portfolio/10.jpg';
import Image11 from '../img/portfolio/11.jpg';
import Image12 from '../img/portfolio/12.jpg';
import Image13 from '../img/portfolio/13.jpg';
import Image14 from '../img/portfolio/14.jpg';
import Image15 from '../img/portfolio/15.jpg';
import Image16 from '../img/portfolio/16.jpg';
import Image17 from '../img/portfolio/17.jpg';
import Image18 from '../img/portfolio/18.jpg';
import Image19 from '../img/portfolio/19.jpg';
import Image20 from '../img/portfolio/20.jpg';
import Image21 from '../img/portfolio/21.jpg';
import Image22 from '../img/portfolio/22.jpg';
import Image23 from '../img/portfolio/23.jpg';
import Image24 from '../img/portfolio/24.jpg';

import Image27 from '../img/portfolio/27.jpg';

import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { Link } from 'react-router-dom';


// import { Link } from 'react-router-dom';

const Gallery = () => {
  return (

 
 <motion.section 
      initial={{opacity:0 }}
      animate={{opacity:1, y:1}}
      exit={{opacity:0}}
      transition={transition1}
      className='section bg-white px-[30px] 
      flex  '>

      <div className='container mx-auto  relative'>
            <motion.div 
               initial={{opacity:0 }}
               animate={{opacity:1, y:1}}
               exit={{opacity:0}}
               transition={transition1}
               className=' font-primary font-bold text-[35px] lg:text-[30px] justify-start 
               lg:pt-[110px] lg:pb-[1px] pt-36 text-center '>
                 <p className=' text-purple-900 hover:scale-110 transition-all duration-500  transition'>
                 "Only photographs what you love"
                 </p>
             </motion.div>
          <div className='flex flex-col lg:flex-row h-full items-center
           justify-start  text-center lg:text-left pt-20 lg:pt-0 pb-8 lg:ml-36 '> 
             
             <motion.div 
               initial={{scale:0}}
               animate={{scale:1}}
               exit={{scale:0}}
               transition={transition1}
               className='grid grid-cols-2 lg:gap-6 sm:gap-5 xs:gap-3 lg:mr-36'>

                   <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px] 
                        hover:scale-110 transition-all duration-500 rounded border ' 
                        src={Image25} alt='' />
                    </div>
                    <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image26} alt='' />
                   </div>
                   <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image24} alt='' />
                   </div>
                   <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image23} alt='' />
                   </div>

                   
              </motion.div>
              <br/>
              <motion.div 
               initial={{scale:0}}
               animate={{scale:1}}
               exit={{scale:0}}
               transition={transition1}
               className='grid grid-cols-2 lg:gap-6 sm:gap-5 xs:gap-3 lg:mr-36'>

                   <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image22} alt='' />
                    </div>
                    <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image21} alt='' />
                   </div>
                   <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image20} alt='' />
                   </div>
                   <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image19} alt='' />
                   </div>

                   
              </motion.div>
              
          </div>
          <div className='flex flex-col lg:flex-row items-center
           justify-start  text-center lg:text-left pt-5 lg:pt-30 pb-8 lg:ml-36 '> 
             
             <motion.div 
               initial={{scale:0}}
               animate={{scale:1}}
               exit={{scale:0}}
               transition={transition1}
               className='grid grid-cols-2 lg:gap-6 sm:gap-5 xs:gap-3 lg:mr-36'>

                   <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image18} alt='' />
                    </div>
                    <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image17} alt='' />
                   </div>
                   <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image16} alt='' />
                   </div>
                   <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image15} alt='' />
                   </div>

                   
              </motion.div>
              <br/>
              <motion.div 
               initial={{scale:0}}
               animate={{scale:1}}
               exit={{scale:0}}
               transition={transition1}
               className='grid grid-cols-2 lg:gap-6 sm:gap-5 xs:gap-3 lg:mr-36'>

                   <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image14} alt='' />
                    </div>
                    <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image13} alt='' />
                   </div>
                   <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image12} alt='' />
                   </div>
                   <div className='max-w-[300px] lg:mx-w-[300px] h-[100px]
                     lg:h-[170px]  overflow-hidden lg:items-center'>
                       <img className='object-cover h-full lg:h-[170px]
                        hover:scale-110 transition-all duration-500 rounded border' 
                        src={Image11} alt='' />
                   </div>

                   
              </motion.div>
              
          </div>
      </div>

      
      
    </motion.section>
  );
  }   

export default Gallery;