import React from 'react';
import Image from 'next/image';

export const Collaborates: React.FC = () => {
  const partners = [
    '/images/c1.png',
    '/images/c2.png',
    '/images/c1.png',
    '/images/c2.png',
    '/images/c1.png'
  ];

  return (
    <section className="bg-[rgba(255,251,250,1)] flex min-h-[33.375rem] flex-col items-center justify-center px-24 py-20 max-md:max-w-full max-md:px-5">
      <div className="flex w-[75.6875rem] max-w-full flex-col items-stretch">
        <div className="self-center flex w-[51.625rem] max-w-full flex-col items-center font-normal">
          <h2 className="text-[rgba(22,28,45,1)] text-6xl leading-none tracking-tighter text-center max-md:max-w-full max-md:text-4xl font-serif">
            Our Collaborates
          </h2>
          <p className="text-[rgba(55,55,55,1)] text-xl leading-relaxed mt-2 font-sans">
            Industry-leading expertise and trusting us
          </p>
        </div>
        
        <div className="w-full mt-16 max-md:max-w-full max-md:mt-10">
          <div className="flex w-full items-center gap-6 flex-wrap max-md:max-w-full">
            {partners.map((partner, index) => (
              <Image
                width={211}
                height={201}
                key={index}
                src={partner}
                className={`${index % 2 === 0 ? 'aspect-[1.26] w-[13.1875rem]' : 'aspect-[1.45] w-[12.5625rem] min-w-60 shrink grow'} object-contain self-stretch shrink-0 my-auto`}
                alt={`Partner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
