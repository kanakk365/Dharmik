import React from 'react';
import Image from 'next/image';

export const Collaborates: React.FC = () => {
  const partners = [
    'https://api.builder.io/api/v1/image/assets/TEMP/61bc7f6370f0ce5b35f9223d2b5093bb3b5f1072?placeholderIfAbsent=true',
    'https://api.builder.io/api/v1/image/assets/TEMP/640224212d7644f60f53de05ee84fde536fe235a?placeholderIfAbsent=true',
    'https://api.builder.io/api/v1/image/assets/TEMP/61bc7f6370f0ce5b35f9223d2b5093bb3b5f1072?placeholderIfAbsent=true',
    'https://api.builder.io/api/v1/image/assets/TEMP/640224212d7644f60f53de05ee84fde536fe235a?placeholderIfAbsent=true',
    'https://api.builder.io/api/v1/image/assets/TEMP/61bc7f6370f0ce5b35f9223d2b5093bb3b5f1072?placeholderIfAbsent=true'
  ];

  return (
    <section className="bg-[rgba(255,251,250,1)] flex min-h-[534px] flex-col items-center justify-center px-[98px] py-[85px] max-md:max-w-full max-md:px-5">
      <div className="flex w-[1211px] max-w-full flex-col items-stretch">
        <div className="self-center flex w-[826px] max-w-full flex-col items-center font-normal">
          <h2 className="text-[rgba(22,28,45,1)] text-[54px] leading-none tracking-[-1.8px] text-center max-md:max-w-full max-md:text-[40px]">
            Our Collaborates
          </h2>
          <p className="text-[rgba(55,55,55,1)] text-xl leading-[58px] mt-2">
            Industry-leading expertise and trusting us
          </p>
        </div>
        
        <div className="w-full mt-[70px] max-md:max-w-full max-md:mt-10">
          <div className="flex w-full items-center gap-[23px] flex-wrap max-md:max-w-full">
            {partners.map((partner, index) => (
              <Image
                width={211}
                height={201}
                key={index}
                src={partner}
                className={`${index % 2 === 0 ? 'aspect-[1.26] w-[211px]' : 'aspect-[1.45] w-[201px] min-w-60 shrink grow'} object-contain self-stretch shrink-0 my-auto`}
                alt={`Partner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
