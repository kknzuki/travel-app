import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import Image from 'next/image';
import Features from '@/components/Features';

export default function Home() {
  return (
    <main>
      <Hero />
      <Grid />
      <Features/>
    </main>
  );
}
