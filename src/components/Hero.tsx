import Image from 'next/image';
import React from 'react'
import { FcRating } from "react-icons/fc";


function Hero() {
  return (
    <section className='p-5 grid md:grid-cols-2 gap-4 mx-auto text-center bg-gradient-to-r from-indigo-300'>
      {/* left side */}
      <article className='gap-4'>
        <h1 className='text-3xl font-bold uppercase my-4'>Kenki Travels camp area</h1>
        <p>We offer journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
        <p className='flex justify-center text-center my-4'><FcRating size={20} /><FcRating size={20} /><FcRating size={20} /><FcRating size={20} /> <span>194k review rating</span></p>
        <button className='bg-green-700 text-white rounded-xl capitalize p-2 font-bold'>Come with us</button>
      </article>
      {/* right side */}
      <article>
        <Image src='/mtkenyacrop.jpg' width={400} height={400} alt='mt kenya' className='rounded-xl text-center mx-auto'/>
      </article>
    </section>
  )
}

export default Hero