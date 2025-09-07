"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative flex items-center justify-between w-full px-20 py-6 max-md:px-5">
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          width={82}
          height={57}
          className="aspect-[1.44] object-contain w-20"
          alt="Dharmik Clothing Logo"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-lg font-medium font-sans">
        <a href="#home" className="text-[rgba(136,85,33,1)] font-bold hover:opacity-80 transition-opacity">
          Home
        </a>
        <a href="#about" className="text-black hover:text-[rgba(136,85,33,1)] transition-colors">
          About
        </a>
        <a href="#services" className="text-black hover:text-[rgba(136,85,33,1)] transition-colors">
          Services
        </a>
        <a href="#process" className="text-black hover:text-[rgba(136,85,33,1)] transition-colors">
          Process
        </a>
        <a href="#why-us" className="text-black hover:text-[rgba(136,85,33,1)] transition-colors">
          Why Us?
        </a>
      </nav>

      {/* Desktop Contact Button */}
      <button className="hidden md:block px-6 py-2 bg-[#64462c] text-white font-bold text-sm rounded-md hover:opacity-90 transition-all duration-200 font-sans">
        CONTACT US
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        aria-label="Toggle mobile menu"
      >
        <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button
            onClick={closeMobileMenu}
            className="absolute top-6 right-6 text-2xl text-black"
            aria-label="Close mobile menu"
          >
            ✕
          </button>

          <nav className="flex flex-col items-center space-y-6 text-xl font-medium">
            <a href="#home" className="text-[rgba(136,85,33,1)] font-bold hover:opacity-80 transition-opacity" onClick={closeMobileMenu}>
              Home
            </a>
            <a href="#about" className="text-black hover:text-[rgba(136,85,33,1)] transition-colors" onClick={closeMobileMenu}>
              About
            </a>
            <a href="#services" className="text-black hover:text-[rgba(136,85,33,1)] transition-colors" onClick={closeMobileMenu}>
              Services
            </a>
            <a href="#process" className="text-black hover:text-[rgba(136,85,33,1)] transition-colors" onClick={closeMobileMenu}>
              Process
            </a>
            <a href="#why-us" className="text-black hover:text-[rgba(136,85,33,1)] transition-colors" onClick={closeMobileMenu}>
              Why Us?
            </a>
          </nav>

          <button className="mt-8 px-8 py-3 bg-[#64462c] text-white font-bold text-lg rounded-md hover:opacity-90 transition-all duration-200 font-sans" onClick={closeMobileMenu}>
            CONTACT US
          </button>
        </div>
      </div>
    </header>
  );
};
