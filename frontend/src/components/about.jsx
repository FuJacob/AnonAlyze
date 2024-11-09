import React from 'react'
import { VT323 } from 'next/font/google';

const vt323 = VT323({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  });

const about = () => {
  return (
    <section className="px-6 py-10" id="about">
      <div className={`text-center text-neutral- ${vt323.className} text-3xl`}>
        <div>
            About
        </div>
      </div>
    </section>
  );
};

export default about