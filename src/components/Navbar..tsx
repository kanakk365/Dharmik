import React from 'react';
import Image from 'next/image';

export const Header: React.FC = () => {
  return (
    <header className="relative flex items-center justify-between w-full px-20 py-6 max-md:px-5">
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          width={82}
          height={57}
          className="aspect-[1.44] object-contain w-[82px]"
          alt="Dharmik Clothing Logo"
        />
      </div>

      <nav className="flex items-center gap-8 text-lg font-medium font-sans">
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

      <button className="px-6 py-2 bg-[#64462c] text-white font-bold text-sm rounded-md hover:opacity-90 transition-all duration-200 font-sans">
        CONTACT US
      </button>
    </header>
  );
};
