import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className='flex justify-between items-center p-5 border border-b-gray-400'>
      <h1 className='uppercase font-bold p-4 text-2xl'>
        <Link href='/'>kenki travels</Link>
      </h1>
 
      <div>
        <ul className='flex gap-2 capitalize'>
          <Link href='home' className='underline'>Home</Link>
          <Link href='services'>services</Link>
          <Link href='pricing'>pricing</Link>
          <Link href='contact'>contact us</Link>
          <Link href='login'><button type='button' title='Login' variant='' icon=''></button></Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
