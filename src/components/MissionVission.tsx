import React from "react";
import Image from "next/image";
export const MissionVision: React.FC = () => {
  return (
    <section className="flex bg-[#734d27] flex-col relative w-full items-stretch py-16 px-6 max-md:max-w-full max-md:py-12">
      <div className="relative flex flex-col items-stretch w-full max-w-7xl mx-auto">
        <div className="self-center flex w-full max-w-4xl flex-col items-center text-white font-normal px-4">
          <h2 className="text-5xl md:text-6xl leading-none tracking-tighter text-center w-full font-serif">
            Our Mission and Vision
          </h2>
          <p className="text-lg md:text-xl mt-4 leading-relaxed text-center w-full font-sans">
            To Be the Global Partner for Aspiring Fashion Brands.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full items-stretch gap-8 md:gap-16 mt-16 max-md:max-w-full max-md:mt-10">
          <div className="flex flex-col w-full md:w-1/2 items-center gap-6">
            <div className="w-full max-w-md">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    width={113}
                    height={113}
                    src="/images/m1.jpg"
                    className="aspect-square object-cover w-full h-full"
                    alt="Mission image 1"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <Image
                    width={113}
                    height={113}
                    src="/images/m2.jpg"
                    className="aspect-square object-cover w-full h-full"
                    alt="Mission image 2"
                  />
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  width={233}
                  height={100}
                  src="/images/m3.jpg"
                  className="aspect-[2.33] object-cover w-full h-24 md:h-32"
                  alt="Mission image 3"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/2 items-center md:items-start gap-8">
            <article className="w-full text-center md:text-left">
              <h3 className="text-white text-2xl md:text-3xl leading-relaxed font-sans">
                Mission
              </h3>
              <p className="text-[rgba(224,224,224,1)] text-base md:text-xl font-thin leading-relaxed mt-4 font-sans">
                To empower fashion entrepreneurs and established brands with
                world-class manufacturing services, innovative design
                solutions, and unwavering support throughout their journey
                from concept to market success.
              </p>
            </article>

            <article className="w-full text-center md:text-left">
              <h3 className="text-white text-2xl md:text-3xl leading-relaxed font-sans">
                Vision
              </h3>
              <p className="text-[rgba(224,224,224,1)] text-base md:text-xl font-thin leading-relaxed mt-4 font-sans">
                To be the global leader in fashion manufacturing, known for
                our commitment to quality, sustainability, and client success.
                We envision a future where every great fashion idea has the
                support it needs to flourish.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
