import Image from 'next/image';
import Link from 'next/link';


const date = new Date().getFullYear();

function Footer() {
  return (
    <div className='flex flex-col items-center'>
      <section className='flex md:flex-row sm:flex-col gap-6 mx- justify-between p-4'>
        <h1 className='font-bold uppercase text-3xl'>Kenki Travels</h1>
        {/* learn more */}
        <article className='flex flex-col gap-2'>
          <h1 className='font-bold uppercase'>Learn more</h1>
          <Link href='/about'>About</Link>
          <Link href='/press'>press release</Link>

          <Link href='/privacy'>Privacy Policy</Link>
          <Link href='/contact'>Contact us</Link>
        </article>
        <article>
          <h1 className='font-bold uppercase'>our community</h1>
        </article>
        {/* contct us details */}
        <article className='flex flex-col gap-2'>
          <h1 className='font-bold uppercase'>contact us</h1>
          <Link href='/'>Admin:123-456-7890</Link>
          <Link href='/'>Email:kenkitravels@123.com</Link>
        </article>
        {/* socials */}
        <article className='flex flex-col gap-2'>
          <h1 className='font-bold uppercase'>socials</h1>
          <div className='flex gap-1'>
          <Link href='/'><Image height={20} width={20} alt='' src='/facebook.svg'/></Link>
          <Link href='/'><Image height={20} width={20} alt='' src='/twitter.svg'/></Link>
          <Link href='/'><Image height={20} width={20} alt='' src='/instagram.svg'/></Link>
          </div>
         

        </article>
      </section>
      {/* copyright */}
      <section className='text-center p-4'>
        <p>Kenki &copy;{date}</p>
        <p>All rights reserved</p>
      </section>
    </div>
  );
}

export default Footer;
