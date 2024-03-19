import React from 'react';
import CardContentComponent from '@/components/Card/CardContentComponent';
const page = () => {
  return (
   <>
     <h1 className='ml-32 text-2xl font-bold my-5'>Useful Content</h1>
    <section className='max-w-screen-xl grid grid-cols-4 mx-auto mt-5 mb-9 gap-8'>
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
