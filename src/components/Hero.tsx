import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center  w-full max-w-7xl mx-auto px-20 py-32 max-md:px-5 max-md:flex-col max-md:text-center max-md:py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="flex items-center justify-between w-full max-w-6xl gap-8 max-md:flex-col max-md:gap-0">
        <div className="flex-1 max-w-lg">
          <Reveal variant="fade-down">
            <div className="text-[rgba(121,79,38,1)] text-sm font-bold tracking-wider uppercase mb-6 font-sans">
              LET&apos;S SHIFT YOUR BUSINESS
            </div>
          </Reveal>
          <Reveal as="h1" className="text-[rgba(22,28,45,1)] text-5xl font-normal tracking-tight mb-6 max-md:text-4xl font-serif" variant="fade-up">
            Your Brand Journey
            <br />
            Starts Here
          </Reveal>
          <Reveal variant="fade-up" delay={0.05}>
            <p className="text-neutral-600 text-lg leading-relaxed mb-10 max-md:mb-8 font-sans">
              Your one-stop destination for everything: from creating your logo… to
              setting up your dream store.
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={0.1}>
            <button className="px-8 py-4 bg-gradient-to-r from-[#64462c] to-[#885521] text-white font-bold text-sm rounded-lg hover:opacity-90 transition-all duration-200 font-sans">
              START YOUR JOURNEY
            </button>
          </Reveal>
        </div>

        <div className="flex-1 flex justify-center items-center max-md:mt-10">
          <Reveal variant="scale">
            <div className="relative">
              <Image
                src="/images/hero.png"
                width={384}
                height={384}
                className="w-object-cover"
                alt="Fashion design workspace"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
