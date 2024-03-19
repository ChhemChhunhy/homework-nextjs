import React from 'react';
import CardCourseComponent from '../Card/CardCourseComponent';
import CarouselComponent from '../Carousel/CarouselComponent';
import CardContentComponent from '../Card/CardContentComponent';

const MainHome = () => {
  return (
    <>
    <CarouselComponent/>
    <h1 className='ml-32 text-2xl font-bold my-5'>Courses</h1>
    <section className='max-w-screen-xl mx-auto grid grid-cols-2   gap-12'>
      
      <CardCourseComponent/>
      <CardCourseComponent/>
      <CardCourseComponent/>
      <CardCourseComponent/>
      <CardCourseComponent/>
      <CardCourseComponent/>
      <CardCourseComponent/>
      <CardCourseComponent/>
    </section>
    <h1 className='ml-32 text-2xl font-bold my-5'>Useful Content</h1>
    <section className='max-w-screen-xl grid grid-cols-4 mx-auto mt-5 mb-9'>
      <CardContentComponent/>
      <CardContentComponent/>
      <CardContentComponent/>
      <CardContentComponent/>
    </section>
    
    
    </>
    
  );
}

export default MainHome;
