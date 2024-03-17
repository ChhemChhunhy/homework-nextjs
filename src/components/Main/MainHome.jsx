import React from 'react';
import CardCourseComponent from '../Card/CardCourseComponent';
import CarouseCardContentComponent from '../CarouselCardContent/CarouseCardContentComponent';

const MainHome = () => {
  return (
    <>
    <section className='max-w-screen-xl mx-auto grid grid-cols-2 gap-8'>
       <CardCourseComponent/>
       <CardCourseComponent/>
       <CardCourseComponent/>
    </section>
    <section className='max-w-screen-xl mx-auto'>
<CarouseCardContentComponent/>
    </section>
    </>
    
  );
}

export default MainHome;
