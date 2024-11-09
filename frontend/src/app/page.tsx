import { VT323 } from 'next/font/google';
import Navbar from "../components/navbar";
import Faq from "../components/faq";import Hero from "../components/hero";
import About from "../components/about";

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10 bg-dark-gray min-h-screen text-white flex items-center justify-center'>
        <Hero />
        <About />
      <Faq />
      </main>
    </>
  );
}
