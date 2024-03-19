import React from 'react';
import CardContentComponent from '@/components/Card/CardContentComponent';
const page = () => {
  return (
    <>
    <h1 className='text-3xl font-bold  ml-32 mt-5'>Useful Contents</h1>
    <section className='max-w-screen-xl grid grid-cols-4 gap-8 mb-7 mx-auto mt-5'>
    <CardContentComponent/>
    <CardContentComponent/>
    <CardContentComponent/>
    <CardContentComponent/>
    <CardContentComponent/>
    <CardContentComponent/>
    <CardContentComponent/>
    <CardContentComponent/>
  </section>
    </>
    
  );
}

export default page;
