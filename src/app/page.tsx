import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import Image from 'next/image';
import Features from '@/components/Features';
import Award from '@/components/Award';
import Search from '@/components/Search';

export default function Home() {
  return (
    <main>
      <Search />
      <Hero />
      <Grid />
      <Features />
      <Award />
    </main>
  );
}
