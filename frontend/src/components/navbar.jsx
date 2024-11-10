"use client"
import React, { useState } from 'react';
import { VT323 } from 'next/font/google';

// Configure the VT323 font
const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 bg-dark-gray text-white p-4 shadow-lg ${vt323.className} text-xl`}>
      <div className="flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-900/30 p-4 md:rounded-xl backdrop-blur-lg">
        {/* Brand Name with the requested style */}
        <a href="#"><img src="/images/logo.png" alt="logo" className="w-[60px] h-[auto]" /></a>
        <div className="hover:text-gray-300 text-glow text-center flex" style={{ fontStyle: 'italic' }}>
          "Knowledge is the key to security, and AnonAlyze is the tool to unlock it."
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
          </button>
        </div>

        {/* Navbar Links */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex space-x-6">
            <li><a href="#hero" className="hover:text-gray-300 text-glow">Service</a></li>
            <li><a href="#about" className="hover:text-gray-300 text-glow">About</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
