import React from 'react';
import CardCourseComponent from '@/components/Card/CardCourseComponent';
const page = () => {
  return (
   <>
   <h1 className='ml-32 text-2xl font-bold my-5'>Courses</h1>
    <section className='max-w-screen-xl mx-auto grid grid-cols-2 mb-9  gap-12'>
      
      <CardCourseComponent/>
      <CardCourseComponent/>
      <CardCourseComponent/>
      <CardCourseComponent/>
      <CardCourseComponent/>
      <CardCourseComponent/>
      <CardCourseComponent/>
      <CardCourseComponent/>
    </section>
   </>

  );
}

export default page;
