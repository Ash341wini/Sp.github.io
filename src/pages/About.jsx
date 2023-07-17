import React from 'react';

import WomanImg from '../img/about/woman.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const About = () => {
  return (
  
    
    <motion.section 
      initial={{opacity:0 }}
      animate={{opacity:1, y:0}}
      exit={{opacity:0, y:'100%'}}
      transition={transition1}
      className='section bg-white px-[30px] lg:px-[200px] 
      z-30  flex '>
        <div className='container mx-auto  '>
          <div className='flex flex-col lg:flex-row items-center h-full justify-start 
           gap-x-8 pt-36 text-center '>
            

           

            
            <motion.div 
              initial={{opacity:0, y:'100%' }}
              animate={{opacity:1, y:0}}
              exit={{opacity:0, y:'100%'}}
              transition={transition1}
              className='lg:flex-1 lg-pt-32 lg:text-left  '>
                <h1 className='h1 hover:scale-110  transition-all duration-500  transition'>About Sp-Photography</h1>
                <p className='mb-10 '>
                     <p className='font-primary lg:pb-[15px] lg:pb-[5px] text-[20px]
                     text-purple-900 lg:text-[20px] hover:scale-110 transition-all duration-500'>
                      <b >Take the Best Quality Service's !!</b></p>
                      <br></br>
                    <i>
                    <ul className=' bg-purple '>
                       <li>1. Wedding & PreWedding Shoot</li>
                       <li>2. Candid Shoot & Cinematic Video</li>
                       <li>3. Outdoor & Indoor Shoot</li>
                       <li>4. Maternity and Baby Shower Shoot</li>
                       <li>5. All kind of Photography</li>
                     </ul>
                    </i> 
                </p>

               <Link to={'/portfolio'}>
                  <button className='btn mb-[30px] mx-auto
                         lg:mx-0  hover:scale-110 transition-all duration-500'>
                      View our work
                  </button>
               </Link> 
                
            
            </motion.div>

            <motion.div 
              initial={{scale:0}}
              animate={{scale:1}}
              exit={{scale:0}}
              transition={transition1}
              className='lg:flex-1'>
                  <motion.img 
                  whileHover={{scale: 1.1}}
                  transition={{transition1}}
                  src={WomanImg} alt='' />
            </motion.div>
           
            
          </div>
        </div>
    </motion.section>
 );
 
};

export default About;
