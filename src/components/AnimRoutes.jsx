import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

import { Routes,Route, useLocation } from 'react-router-dom';
import Gallery from '../pages/Gallery';
import { AnimatePresence } from 'framer-motion';
import AboutYash from '../pages/AboutYash';


const AnimRoutes = () => {

   const location = useLocation();
  return (
   <AnimatePresence initial={true} mode='wait'> 
         <Routes key={location.pathname} Location={location}>
            <Route path='/' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='portfolio' element={<Portfolio/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='gallery' element={<Gallery/>} />
            <Route path='yash' element={<AboutYash/>} />
         </Routes>
   </AnimatePresence>
     
  );
};

export default AnimRoutes;
