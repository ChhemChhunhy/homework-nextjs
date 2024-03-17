import React from 'react';
import { IconName } from "react-icons/fa6";

import { FaClock } from "react-icons/fa6";

const CardCourseComponent = () => {
  return (
    <div className=" bg-base-100 shadow flex gap-x-7 pb-5">
        <figure className='mt-9'><img className='' src="https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png" alt="Movie"/></figure>
     <div className="">
     <h2 className="card-title mt-6">New movie is released!</h2>
     <p className='line-clamp-2	pt-5 '>Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base.</p>
   <div className='w-52 mt-3'>
   <p className='bg-red-500 px-3 py-2 text-white rounded-lg'>20% Scholarship</p>
   </div>
   <div className='mt-2'>
    <span className='flex gap-2 items-center text-lg'><FaClock/>80 Hours</span>
    <span className='flex gap-2 items-center text-lg mt-3'><FaClock/>Medium Level</span>
    
   </div>
   

      </div>
</div>
  );
}

export default CardCourseComponent;
