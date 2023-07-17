import React from 'react';

import Logo from '../img/header/logo.jpg';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import Socials from './Socials';


const Header = () => {
  return (
     <header className=' bg-white fixed w-full px-[30px] lg:px[100px] 
     z-30 h-[100px] lg:h-[80px] flex items-center border-b border-b-gray'>
         
         <div className='flex flex-col lg:flex-row 
            lg:items-center w-full justify-between'>
              
              <Link to={'/yash'} className="max-w-[175px]">
                  <img src={Logo} alt='logo'/>
               </Link>

               <nav className='hidden lg:flex gap-x-12 font-semibold'>
                      <Link to={'/'} className="text-[696c6d] lg:text-[20px]
                        hover:scale-110 hover:text-purple-900 transition-all duration-500  transition"> 
                        Home 
                      </Link>
                      <Link to={'/about'} className="text-[696c6d] lg:text-[20px]
                       hover:scale-110 hover:text-purple-900 transition-all duration-500 transition"> 
                        About
                      </Link>
                      <Link to={'/portfolio'} className="text-[696c6d] lg:text-[20px]
                        hover:scale-110 hover:text-purple-900 transition-all duration-500 transition"> 
                        Portfolio
                      </Link>
                      <Link to={'/contact'} className="text-[696c6d] lg:text-[20px]
                        hover:scale-110 hover:text-purple-900 transition-all duration-500 transition "  > 
                        Contact
                      </Link>
               </nav>
               

         </div>
         <Socials/>
         <MobileNav/>
     
     </header>
  );
};

export default Header;
