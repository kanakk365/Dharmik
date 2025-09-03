import React from "react";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-between w-full max-w-7xl mx-auto px-20 py-20 max-md:px-5 max-md:flex-col max-md:text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="flex-1 max-w-lg">
        <div className="text-[rgba(121,79,38,1)] text-sm font-bold tracking-[2px] uppercase mb-6 font-sans">
          LET&apos;S SHIFT YOUR BUSINESS
        </div>
        <h1 className="text-[rgba(22,28,45,1)] text-5xl font-normal tracking-[-1px] mb-6 max-md:text-4xl font-serif">
          Your Brand Journey
          <br />
          Starts Here
        </h1>
        <p className="text-neutral-600 text-lg leading-relaxed mb-10 max-md:mb-8 font-sans">
          Your one-stop destination for everything: from creating your logo… to
          setting up your dream store.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-[#64462c] to-[#885521] text-white font-bold text-sm rounded-lg hover:opacity-90 transition-all duration-200 font-sans">
          START YOUR JOURNEY
        </button>
      </div>

      <div className="flex-1 flex justify-end max-md:mt-10 max-md:justify-center">
        <div className="relative   ">
          <Image
            src="/images/hero.png"
            width={384}
            height={384}
            className=" object-cover "
            alt="Fashion design workspace"
          />
         
        </div>
      </div>
    </section>
  );
};
