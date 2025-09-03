import React from 'react';
import Image from 'next/image';
export const MissionVision: React.FC = () => {
  return (
    <section className="flex flex-col relative min-h-[804px] w-full items-stretch gap-[40px_76px] flex-wrap py-[77px] max-md:max-w-full">
      <Image
        width={1440}
        height={804}
        src="/images/bg.png"
        className="absolute h-full w-full object-cover inset-0"
        alt="Mission and vision background"
      />
      <div className="relative flex flex-col items-stretch grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <div className="self-center flex w-[899px] max-w-full flex-col items-stretch text-white font-normal ml-[67px]">
          <h2 className="text-[54px] leading-none tracking-[-1.8px] text-center max-md:max-w-full max-md:text-[40px]">
            Our Mission and Vision
          </h2>
          <p className="text-xl leading-[58px] self-center max-md:max-w-full">
            To Be the Global Partner for Aspiring Fashion Brands.
          </p>
        </div>
        
        <div className="flex w-full items-stretch gap-[40px_67px] flex-wrap mt-[55px] max-md:max-w-full max-md:mt-10">
          <Image
            width={65}
            height={0.63}
            src="/images/bg.png"
            className="aspect-[0.63] object-contain w-[65px] shrink-0 mt-[82px] max-md:mt-10"
            alt="Decorative element"
          />
          
          <div className="flex h-[477px] items-center gap-[30px] justify-center flex-wrap grow shrink basis-auto">
            <div className="self-stretch min-w-60 w-[552px] my-auto rounded-[10px] max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-6/12 max-md:w-full max-md:ml-0">
                    <Image
                      width={113}
                      height={1.13}
                      src="/images/your1.png"
                      className="aspect-[1.13] object-contain w-full grow rounded-[10px] max-md:mt-[18px]"
                      alt="Mission image 1"
                    />
                  </div>
                  <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <Image
                      width={113}
                      height={1.13}
                      src="/images/your2.png"
                      className="aspect-[1.13] object-contain w-full grow rounded-[10px] max-md:mt-[18px]"
                      alt="Mission image 2"
                    />
                  </div>
                </div>
              </div>
              <Image
                width={233}
                height={2.33}
                src="/images/your3.png"
                className="aspect-[2.33] object-contain w-full mt-[18px] rounded-[10px] max-md:max-w-full"
                alt="Mission image 3"
              />
            </div>
            
            <div className="self-stretch min-w-60 font-normal w-[590px] my-auto max-md:max-w-full">
              <article className="w-full max-md:max-w-full">
                <h3 className="text-white text-[32px] leading-[58px] max-md:max-w-full">
                  Mission
                </h3>
                <p className="text-[rgba(224,224,224,1)] text-xl leading-[38px] mt-6 max-md:max-w-full">
                  To empower fashion entrepreneurs and established brands with world-class manufacturing services, innovative design solutions, and unwavering support throughout their journey from concept to market success.
                </p>
              </article>
              
              <article className="w-full mt-[21px] max-md:max-w-full">
                <h3 className="text-white text-[32px] leading-[58px] max-md:max-w-full">
                  Vision
                </h3>
                <p className="text-[rgba(224,224,224,1)] text-xl leading-[38px] mt-6 max-md:max-w-full">
                  To be the global leader in fashion manufacturing, known for our commitment to quality, sustainability, and client success. We envision a future where every great fashion idea has the support it needs to flourish.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
      
      <Image
        width={14}
        height={0.54}
        src="/images/bg.png"
        className="aspect-[0.54] object-contain w-14 shrink-0 mt-[388px] max-md:mt-10"
        alt="Decorative element"
      />
    </section>
  );
};
