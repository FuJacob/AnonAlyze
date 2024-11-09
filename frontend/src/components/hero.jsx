import React from 'react';
import { VT323 } from 'next/font/google';

// Configure the VT323 font
const vt323 = VT323({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-dark-gray text-white">
            <div className={`text-center ${vt323.className} text-3xl`}>
                <div>
                    Hero
                </div>
            </div>
        </section>
    );
};

export default Hero;
