
'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';

export default function NavbarComponent() {
  return (
  <section className='xl:max-w-screen-2xl mx-auto xl:px-16 bg-blue-800'>
    <Navbar fluid rounded className='bg-blue-800'>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="https://istad.co/resources/img/CSTAD_120.png" className="mr-3 h-7 sm:h-12" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-white ">CSTAD</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Navbar.Link href="/"  className='text-lg xl:mr-5 text-white'>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/enroll" className='text-lg xl:mr-5 text-white'>
          Enroll
        </Navbar.Link>
        
        <Navbar.Link href="/courses" className='text-lg xl:mr-5 text-white'>Courses</Navbar.Link>
        <Navbar.Link href="/it-new" className='text-lg xl:mr-5 text-white'>IT News</Navbar.Link>
        <Navbar.Link href="/opportunity" className='text-lg xl:mr-5 text-white'>Job Opportunity</Navbar.Link>
        <Navbar.Link href="/about" className='text-lg text-white'>About Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  </section>
  );
}
