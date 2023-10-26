import Image from 'next/image';
import React from 'react';

export default function Award() {
  return (
    <div>
      <section className='flex flex-col md:flex-row justify-evenly gap-2 items-center align-center border-t-4 p-5 mx-auto my-4'>
        <article className='p-3 text-center '>
          <h1 className='text-2xl md:text-4xl font-bold p-2 uppercase'>Travelers Choice Best of the Best</h1>
          <p className='text-center text-wrap'>Our top 5% of places, stays, eats, and experiences—decided by you.</p>
          <button className='bg-green-600 text-white rounded-xl p-2 text-center my-4'>See the Best</button>
        </article>
       <Image src='/pic (1).png' height={400} width={400} alt='pic' className='p-2 rounded-[65%] rotate-120 text-center'/>
      </section>
    </div>
  );
}
