import React from 'react';
import WomanImg from '../img/contact/woman.png';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Contact = () => {
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
            initial={{opacity:0 }}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:'100%'}}
            transition={transition1}
            className='hidden lg:flex bg-[#eef7f9] 
            absolute bottom-0 left-0 right-0 top-72
            -z-10'>
            </motion.div>

            
            <motion.div 
              initial={{opacity:0, y:'100%' }}
              animate={{opacity:1, y:0}}
              exit={{opacity:0, y:'100%'}}
              transition={transition1}
              className='lg:flex-1 lg:pt-10 pt-10 '>
                <h1 className='h1 hover:scale-110  transition-all 
                duration-500  transition'>Contact me</h1>
                <p className='mb-12 font-bold hover:scale-110 
                font-primary text-purple-900 lg:text-[20px]
                text-[20px]  
                  transition-all duration-500  transition'>
                    <marquee width="100%" direction="left">
                       We would love to get suggestions and orders from you !!
                    </marquee>
                  
                  
                </p>
                
                <form className='flex flex-col mx-auto gap-y-4'>

                    <div className=' gap-x-10 outline-none 
                              text-black  bg-transparent w-full pl-3'>
                        <p >
                        <b>Mobile Number : </b> 8485033779
                       </p>
                        
                    </div>
                      <p className='lg:pb-[30px] pb-10'>
                        <b>Address :</b> Ch. Sambhaji Nagar, Maharashtra.<br></br>
                      </p>
                      
                      <button className='btn mb-[30px] mx-auto
                       
                        hover:scale-110 transition-all duration-500'>
                          <a href='https://forms.gle/mXw7pfCoERrpeksx8' target='_blank'>
                          Book your Date
                        </a>

                         
                       </button>
                      
                </form>
                
            
            </motion.div>
           
            <div className='lg:flex-1'>
               <img src={WomanImg} alt=''/>
            </div>
          </div>
        </div>
    </motion.section>
 );
};

export default Contact;
