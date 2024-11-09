import { VT323 } from 'next/font/google';
import Navbar from "../components/navbar";

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <>
      <main className='antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10 bg-dark-gray min-h-screen text-white flex items-center justify-center'>
        <Navbar />
      </main>
    </>
  );
}
