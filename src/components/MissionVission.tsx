import React from "react";
import Image from "next/image";
export const MissionVision: React.FC = () => {
  return (
    <section className="flex bg-[#734d27] flex-col relative min-h-[50rem] w-full items-stretch gap-10 gap-x-20 flex-wrap py-20 max-md:max-w-full ">
      <div className="relative flex flex-col items-stretch grow shrink-0 basis-0 w-fit max-md:max-w-full container mx-auto">
        <div className="self-center flex w-[56rem] max-w-full flex-col items-stretch text-white font-normal ml-16">
          <h2 className="text-6xl leading-none tracking-tighter text-center max-md:max-w-full max-md:text-4xl font-serif">
            Our Mission and Vision
          </h2>
          <p className="text-xl mt-4 leading-relaxed self-center max-md:max-w-full font-sans">
            To Be the Global Partner for Aspiring Fashion Brands.
          </p>
        </div>

        <div className="flex w-full items-stretch gap-10 gap-x-16 flex-wrap mt-20 max-md:max-w-full max-md:mt-10">
          <div className="flex h-[30rem] items-center gap-12 justify-center flex-wrap grow shrink basis-auto">
            <div className="self-stretch min-w-60 w-[34.5rem] my-auto rounded-lg max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-6/12 max-md:w-full max-md:ml-0 rounded-md overflow-hidden">
                    <Image
                      width={113}
                      height={1.13}
                      src="/images/m1.jpg"
                      className="aspect-[1.13] object-cover w-full grow rounded-lg max-md:mt-4 "
                      alt="Mission image 1"
                    />
                  </div>
                  <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <Image
                      width={113}
                      height={1.13}
                      src="/images/m2.jpg"
                      className="aspect-[1.13] object-cover w-full grow rounded-lg max-md:mt-4"
                      alt="Mission image 2"
                    />
                  </div>
                </div>
              </div>
              <Image
                width={233}
                height={2.33}
                src="/images/m3.jpg"
                className="aspect-[2.33] object-cover w-full mt-4 rounded-lg max-md:max-w-full"
                alt="Mission image 3"
              />
            </div>

            <div className="self-stretch min-w-60 font-normal w-[37rem] my-auto max-md:max-w-full">
              <article className="w-full max-md:max-w-full  ">
                <h3 className="text-white text-3xl leading-relaxed max-md:max-w-full font-sans">
                  Mission
                </h3>
                <p className="text-[rgba(224,224,224,1)] text-xl font-thin leading-10 mt-4 max-md:max-w-full font-sans">
                  To empower fashion entrepreneurs and established brands with
                  world-class manufacturing services, innovative design
                  solutions, and unwavering support throughout their journey
                  from concept to market success.
                </p>
              </article>

              <article className="w-full mt-5 max-md:max-w-full">
                <h3 className="text-white text-3xl leading-relaxed max-md:max-w-full font-sans">
                  Vision
                </h3>
                <p className="text-[rgba(224,224,224,1)] text-xl font-thin leading-10  mt-4 max-md:max-w-full font-sans">
                  To be the global leader in fashion manufacturing, known for
                  our commitment to quality, sustainability, and client success.
                  We envision a future where every great fashion idea has the
                  support it needs to flourish.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};
