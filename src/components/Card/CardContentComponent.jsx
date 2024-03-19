
'use client';

import { Card } from 'flowbite-react';
import { FaPencil } from "react-icons/fa6";


export default function CardContentComponent() {
  return (
    <Card
      className="w-72"
      renderImage={() => <img className='rounded' width={500} height={500} src="https://api.istad.co/media/image/eec0362f-380e-40f5-8799-56ca9b8cafb9.png" alt="image 1" />}
    >
    <div className='flex justify-between'>
      <span className='flex text-sm items-center gap-2'><FaPencil />Job Anounments</span>
      <p className='text-sm'>12 April 2023</p>
    </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here Job Anounments
      </p>
    </Card>
  );
}
