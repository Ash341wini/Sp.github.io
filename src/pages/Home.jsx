import React from 'react';
import WomanImg from '../img/home/woman.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';



const Home = () => {
  return (

     <motion.section 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={transition1}
        className='section w-full px-[30px] lg:px-[100px] 
        z-30 h-[100px] lg:h-[140px] flex items-center text-center'>

            <div className='container mx-auto h-full relative'>

                <div className='flex flex-col justify-center'>

                    <motion.div 
                       initial={{opacity:0 , y:'-50%'}}
                       animate={{opacity:1, y:0}}
                       exit={{opacity:0,y:'-50%'}}
                       transition={transition1}
                      className='w-full pt-36 pb-14 lg:pt-[300px] lg:pb-[290px] lg:pl-[150px]
                      lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start' >
                            <h2 className='h1 hover:scale-110 hover:text-purple-900 transition-all duration-500  transition'>
                                Photographer<br/>& film maker
                            </h2>
                            <p className='text-[25px] lg:text-[30px] font-primary mb-4 lg:mb-0 text-red-900'>
                                <marquee width="100%" direction="left" height="100px">
                                    Yash Popalghat, India
                                </marquee>
                                
                            </p>
                            <Link to={'/contact'} className="btn mb-[25px] hover:scale-110 transition-all duration-500">
                              Contact me
                            </Link>
                    </motion.div>

                    <div className='flex justify-end  lg:max-h-max'>
                        <motion.div 
                           initial={{scale:0}}
                           animate={{scale:1}}
                           exit={{scale:0}}
                           transition={transition1}
                          className='relative lg:-right-40 overflow-hidden lg:h-[800px]'>
                            <motion.img 
                            whileHover={{scale: 1.1}}
                            transition={{transition1}}
                            src={WomanImg} alt=''/> 
                        </motion.div>
                    </div>

                </div>

            </div>

     </motion.section>
  );
};

export default Home;
