import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";
export const Footer: React.FC = () => {
  return (
    <>
    <footer className="flex w-full flex-col items-stretch text-white pt-20 px-4 md:px-0.5 max-md:max-w-full bg-gradient-to-b from-[#64462C] to-[#885521]">
      <div className="self-center flex gap-10 gap-x-40 flex-wrap max-md:max-w-full">
        <Reveal variant="fade-up">
          <div className="flex min-w-60 flex-col items-stretch text-sm font-normal leading-relaxed justify-center w-[16.75rem]">
            <Image
              width={130}
              height={1.83}
              src="/images/logow.png"
              className="aspect-[1.83] object-contain w-32 max-w-full"
              alt="Dharmik Clothing Logo"
            />
            <p className="mt-7">
              Your trusted partner in fashion manufacturing and brand development.
            </p>
          </div>
        </Reveal>

        <div className="flex min-w-60 gap-10 gap-x-14 flex-wrap max-md:max-w-full">
          <Reveal variant="fade-up" delay={0.05}>
            <div className="flex flex-col items-stretch  rounded-none">
              <h3 className="text-lg font-bold">Services</h3>
              <div className="text-sm font-normal mt-10 space-y-3">
                <a
                  href="#"
                  className="block hover:text-orange-300 transition-colors duration-200"
                >
                  Brand Development
                </a>
                <a
                  href="#"
                  className="block hover:text-orange-300 transition-colors duration-200"
                >
                  Manufacturing
                </a>
                <a
                  href="#"
                  className="block hover:text-orange-300 transition-colors duration-200"
                >
                  Fabric Solutions
                </a>
                <a
                  href="#"
                  className="block hover:text-orange-300 transition-colors duration-200"
                >
                  Design Services
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={0.1}>
            <div className="flex flex-col items-stretch  rounded-none">
              <h3 className="text-lg font-bold">About</h3>
              <div className="text-sm font-normal mt-10 space-y-3">
                <a
                  href="#"
                  className="block hover:text-orange-300 transition-colors duration-200"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block hover:text-orange-300 transition-colors duration-200"
                >
                  Our Process
                </a>
                <a
                  href="#"
                  className="block hover:text-orange-300 transition-colors duration-200"
                >
                  Why choose Us?
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={0.15}>
            <div className="flex min-w-60 flex-col text-base font-normal w-[32rem] max-md:max-w-full">
              <h3 className="text-lg font-bold">Contact</h3>

              <div className="flex gap-4 mt-10">
                <Image
                  src="/images/phonew.svg"
                  width={24}
                  height={24}
                  className="w-6 h-6 shrink-0"
                  alt="Phone icon"
                />
                <div>+91 76808 29790</div>
              </div>

              <div className="flex gap-4 whitespace-nowrap mt-8">
                <Image
                  src="/images/mailw.svg"
                  width={24}
                  height={24}
                  className="w-6 h-6 shrink-0"
                  alt="Email icon"
                />
                <div>dharmikclothing@gmail.com</div>
              </div>

              <div className="self-stretch flex items-stretch gap-4 leading-6 flex-wrap mt-8">
                <Image
                  src="/images/locationw.svg"
                  width={24}
                  height={24}
                  className="w-6 h-6 shrink-0 mt-0.5"
                  alt="Location icon"
                />
                <div className=" text-sm grow shrink w-[29rem] basis-auto max-md:max-w-full">
                  MRR COMPLEX, ICICI Bank Building, Plot No.21, NH9 Highway, EP
                  Lecturers ColonyHayathnager, Telangana 501505
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

    </footer>

    <div className="bg-[#794717] flex flex-col items-center text-base font-normal justify-center px-16 py-4 max-md:max-w-full max-md:px-5">
      <div>2025 @ Dharmik Clothing.All Rights Reserved.</div>
    </div>
    </>
  );
};
