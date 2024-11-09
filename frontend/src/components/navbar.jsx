"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-dark-gray text-white p-4 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-900/30 p-4 md:rounded-xl backdrop-blur-lg">
        {/* Brand Name with the requested style */}
        <div className="text-white font-semibold text-lg uppercase">
          <a href="/">AnonAlyze</a>
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
            <li><a href="#hero" className="hover:text-gray-300">Services</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
