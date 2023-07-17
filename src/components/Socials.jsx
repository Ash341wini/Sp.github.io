import React from 'react';
import {ImFacebook,ImTwitter, ImInstagram} from 'react-icons/im';

const Socials = () => {
  return <div className='hidden xl:flex ml-24 '>
      <ul className='flex gap-x-4 '>
         {/* <li className='hover:scale-110 hover:text-purple-900 transition-all duration-500 transition'>
           <a href='http://www.facebook.com' target='_blank'>
             <ImFacebook/>
           </a>
         </li>
         <li className='hover:scale-110 hover:text-purple-900 transition-all duration-500 transition' >
           <a href='http://www.twitter.com' target='_blank'>
             <ImTwitter/>
           </a>
         </li> */}
         <li className='hover:scale-110 hover:text-purple-900 transition-all duration-500 transition'>
           <a href='https://instagram.com/sp_creative_07?igshid=MzNlNGNkZWQ4Mg==' target='_blank'>
             <ImInstagram/>
           </a>
         </li>
      </ul>
  </div>;
};

export default Socials;
