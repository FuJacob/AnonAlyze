import { VT323 } from 'next/font/google';

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className={`text-center ${vt323.className} text-white animate-pulse`}>
        <h1 className='text-7xl'>
          Hello
        </h1>
      </div>

      <div className={`text-center text-neutral-800 ${vt323.className}`}>
        <p className='text-3xl'>This is a test</p>
      </div>
    </div>
  );
}
