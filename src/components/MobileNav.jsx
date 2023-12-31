import React from 'react';
import { useState } from 'react';

import {IoMdClose} from 'react-icons/io';
import {CgMenuRight} from 'react-icons/cg';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import {ImFacebook,ImTwitter, ImInstagram} from 'react-icons/im';

const menuVariants ={
    hidden : {
      x:'100%',
    },
    show:{
      x:0,
      transition: {
        ease:[0.6, 0.01, -0.05, 0.9],
      },
    },
};
const MobileNav = () => {

  const [openMenu, setOpenMenu] = useState(false);
  return (
  
     <nav className='text-primary lg:hidden '>

       <div onClick={()=> setOpenMenu(true)} className='text-3xl cursor-pointer'>
           <CgMenuRight/>
       </div>

       <motion.div 
          variants={menuVariants} 
          initial='hidden'
          animate={openMenu ? 'show' : ''}
          className='bg-white shadow-2xl w-full absolute 
            top-0 right-0 max-w-xs h-screen z-20'>

           <div onClick={()=> setOpenMenu(false)} className='text-4xl absolute z-30 left-4 top-14
             text-primary cursor-pointer hover:scale-110 transition-all duration-500 transition'>
              <IoMdClose/>
           </div>

           <ul onClick={()=> setOpenMenu(false)} className='h-full  flex flex-col justify-center
           items-center gap-y-8 text-primary font-primary font-bold text-3xl'>
              
              <li className='hover:scale-110 hover:text-purple-900 transition-all duration-500 transition'>
                 <Link to={'/'}> Home</Link>
              </li>
              <li className='hover:scale-110 hover:text-purple-900 transition-all duration-500 transition'>
                 <Link to={'/about'}  > About</Link>
              </li>
              <li className='hover:scale-110 hover:text-purple-900 transition-all duration-500 transition'>
                 <Link to={'/portfolio'} > Portfolio</Link>
              </li>
              <li className='hover:scale-110 hover:text-purple-900 transition-all duration-500 transition'>
                 <Link to={'/contact'}> Contact</Link>
              </li>
              <li className='hover:scale-110 hover:text-purple-900 transition-all duration-500 transition'>
                <a href='https://instagram.com/sp_creative_07?igshid=MzNlNGNkZWQ4Mg==' target='_blank'>
                 <ImInstagram/>
                </a>
              </li>
           </ul>
        </motion.div> 
        
     </nav>
  );
};

export default MobileNav;
