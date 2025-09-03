"use client";
import { useState } from 'react';
import Image from 'next/image';

interface FormData {
  firstName: string;
  email: string;
  phone: string;
  company: string;
  services: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    phone: '',
    company: '',
    services: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className="flex flex-col relative min-h-[653px] w-full items-center justify-center px-[70px] py-[89px] max-md:max-w-full max-md:px-5">
      <Image
        src="https://api.builder.io/api/v1/image/assets/TEMP/43a7ff149b3d053d8e1c3a371e18b2cf97052b78?placeholderIfAbsent=true"
        fill
        className="absolute h-full w-full object-cover inset-0"
        alt="Contact background"
      />
      
      <div className="relative flex items-center gap-[40px_53px] justify-center flex-wrap max-md:max-w-full">
        <div className="self-stretch min-w-60 min-h-[467px] w-[508px] my-auto max-md:max-w-full">
          <div className="flex w-full max-w-[530px] flex-col max-md:max-w-full">
            <h2 className="text-[rgba(22,28,45,1)] text-[54px] font-normal leading-none tracking-[-1.8px] text-center max-md:text-[40px]">
              Get in Touch
            </h2>
            <p className="text-[rgba(136,85,33,1)] text-xl font-normal leading-[34px] self-stretch mt-4 max-md:max-w-full">
              Have a question or a project in mind? I&apos;d love to hear from you. Let&apos;s chat and make something amazing together.
            </p>
            
            <div className="flex gap-4 text-base text-[#1F1F1F] font-normal mt-16 max-md:mt-10">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/ccaf3f892a3e2c0c56fa237cfb2794d448c543ed?placeholderIfAbsent=true"
                width={24}
                height={24}
                className="aspect-[1] object-contain w-6 shrink-0"
                alt="Phone icon"
              />
              <div>+91 76808 29790</div>
            </div>
            
            <div className="flex gap-4 text-base text-[#1F1F1F] font-normal whitespace-nowrap mt-8">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/e0cc79b2f8cdbf127b9720d2f4f35ba893dbd708?placeholderIfAbsent=true"
                width={24}
                height={24}
                className="aspect-[1] object-contain w-6 shrink-0"
                alt="Email icon"
              />
              <div>dharmikclothing@gmail.com</div>
            </div>
            
            <div className="flex items-stretch gap-4 text-base text-[#1F1F1F] font-normal leading-6 flex-wrap mt-8">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/224ab7608d28c905ad3306c0961d3c86540aa588?placeholderIfAbsent=true"
                width={24}
                height={24}
                className="aspect-[1] object-contain w-6 shrink-0"
                alt="Location icon"
              />
              <div className="basis-auto grow shrink max-md:max-w-full">
                MRR COMPLEX, ICICI Bank Building, Plot No.21, NH9 Highway, EP Lecturers ColonyHayathnager, Telangana 501505
              </div>
            </div>
            
            <div className="flex items-center gap-6 justify-center mt-[46px] max-md:mt-10">
              <div className="self-stretch flex min-h-[30px] items-center gap-2.5 justify-center w-[30px] my-auto pl-2 pr-[7px] rounded-[86px]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c7274f377bb8dea2983fdbd6191daa7b352de7f2?placeholderIfAbsent=true"
                  width={15}
                  height={15}
                  className="aspect-[1] object-contain w-[15px] self-stretch my-auto"
                  alt="Social media icon 1"
                />
              </div>
              <div className="self-stretch flex min-h-[30px] items-center gap-2.5 justify-center w-[30px] my-auto px-2 rounded-[86px]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f0992d649ef07458d1767af1da9c2b1df0cb04a5?placeholderIfAbsent=true"
                  width={8}
                  height={15}
                  className="aspect-[0.53] object-contain w-2 self-stretch my-auto"
                  alt="Social media icon 2"
                />
              </div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="self-stretch min-w-60 text-sm text-[rgba(141,141,141,1)] w-[679px] my-auto rounded-[0px_0px_0px_0px] max-md:max-w-full">
          <div className="flex w-full items-stretch gap-[29px] font-normal flex-wrap max-md:max-w-full">
            <div className="bg-[rgba(136,85,33,0.06)] flex items-center gap-2.5 grow shrink basis-auto px-4 py-3.5 rounded-lg">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="self-stretch my-auto bg-transparent outline-none w-full"
              />
            </div>
            <div className="bg-[rgba(136,85,33,0.06)] flex items-center gap-2.5 whitespace-nowrap grow shrink basis-auto px-4 py-3.5 rounded-lg">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="self-stretch my-auto bg-transparent outline-none w-full"
              />
            </div>
          </div>
          
          <div className="flex w-full items-stretch gap-[29px] font-normal flex-wrap mt-6 max-md:max-w-full">
            <div className="bg-[rgba(136,85,33,0.06)] flex items-center gap-2.5 grow shrink basis-auto px-4 py-3.5 rounded-lg">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="self-stretch my-auto bg-transparent outline-none w-full"
              />
            </div>
            <div className="bg-[rgba(136,85,33,0.06)] flex items-center gap-2.5 whitespace-nowrap grow shrink basis-auto px-4 py-3.5 rounded-lg">
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                className="self-stretch my-auto bg-transparent outline-none w-full"
              />
            </div>
          </div>
          
          <div className="bg-[rgba(136,85,33,0.06)] flex items-center gap-2.5 font-normal mt-6 px-4 py-3.5 rounded-lg">
            <input
              type="text"
              name="services"
              placeholder="Services interested in"
              value={formData.services}
              onChange={handleInputChange}
              className="self-stretch my-auto bg-transparent outline-none w-full"
            />
          </div>
          
          <div className="bg-[rgba(136,85,33,0.06)] flex min-h-[168px] gap-2.5 font-normal mt-6 pt-[13px] pb-[134px] px-4 rounded-lg max-md:pb-[100px]">
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-transparent outline-none w-full resize-none"
              rows={6}
            />
          </div>
          
          <div className="mt-8">
            <button type="submit" className="w-[198px] min-h-14 px-6 py-3 text-[15px] leading-[29px] bg-[rgba(136,85,33,1)] text-white font-bold tracking-[-0.54px] rounded-xl hover:opacity-90 transition-all duration-200">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
