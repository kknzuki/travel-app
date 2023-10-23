import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import Image from 'next/image';
import Features from '@/components/Features';
import Award from '@/components/Award';

export default function Home() {
  return (
    <main>
      <Hero />
      <Grid />
      <Features />
      <Award />
    </main>
  );
}
