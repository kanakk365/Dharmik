import React from 'react';
import Image from 'next/image';
export const Footer: React.FC = () => {
  return (
    <footer className="flex w-full flex-col items-stretch text-white pt-20 px-px max-md:max-w-full bg-[rgba(22,28,45,1)]">
      <div className="self-center flex gap-[40px_161px] flex-wrap max-md:max-w-full">
        <div className="flex min-w-60 flex-col items-stretch text-sm font-normal leading-[21px] justify-center w-[267px]">
          <Image
            width={130}
            height={1.83}
            src="/images/logo.png"
            className="aspect-[1.83] object-contain w-[130px] max-w-full"
            alt="Dharmik Clothing Logo"
          />
          <p className="mt-[27px]">
            Your trusted partner in fashion manufacturing and brand development.
          </p>
        </div>
        
        <div className="flex min-w-60 gap-[40px_52px] flex-wrap max-md:max-w-full">
          <div className="flex flex-col items-stretch w-[123px] rounded-[0px_0px_0px_0px]">
            <h3 className="text-lg font-bold">Services</h3>
            <div className="text-sm font-normal mt-10">
              Brand Development<br />
              Manufacturing<br />
              Fabric Solutions<br />
              Design Services
            </div>
          </div>
          
          <div className="flex flex-col items-stretch w-[100px] rounded-[0px_0px_0px_0px]">
            <h3 className="text-lg font-bold">Services</h3>
            <div className="text-sm font-normal mt-10">
              About Us<br />
              Our Process<br />
              Why choose Us?
            </div>
          </div>
          
          <div className="flex min-w-60 flex-col text-base font-normal w-[508px] max-md:max-w-full">
            <h3 className="text-lg font-bold">Contact</h3>
            
            <div className="flex gap-4 mt-10">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/96b2765e86808e074d99bd8b3c5b5e8d409cf412?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 shrink-0"
                alt="Phone icon"
              />
              <div>+91 76808 29790</div>
            </div>
            
            <div className="flex gap-4 whitespace-nowrap mt-8">
              <Image
                width={6}
                height={6}
                src="/images/logo.png"
                className="aspect-[1] object-contain w-6 shrink-0"
                alt="Email icon"
              />
              <div>dharmikclothing@gmail.com</div>
            </div>
                
            <div className="self-stretch flex items-stretch gap-4 leading-6 flex-wrap mt-8">
              <Image
                width={6}
                height={6}
                src="https://api.builder.io/api/v1/image/assets/TEMP/4b2fd1688e233835ef6977d3a0f9cc12605273e3?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 shrink-0"
                alt="Location icon"
              />
              <div className="grow shrink w-[463px] basis-auto max-md:max-w-full">
                MRR COMPLEX, ICICI Bank Building, Plot No.21, NH9 Highway, EP Lecturers ColonyHayathnager, Telangana 501505
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[rgba(121,71,23,1)] flex flex-col items-center text-base font-normal justify-center mt-[37px] px-[70px] py-[18px] max-md:max-w-full max-md:px-5">
        <div>2025 @ Dharmik Clothing.All Rights Reserved.</div>
      </div>
    </footer>
  );
};
