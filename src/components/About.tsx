import React from "react";

export const About: React.FC = () => {
  const stats = [
    { number: "10+", label: "Brands Launched" },
    { number: "1 Lakh+", label: "Garments Produced" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section
      id="about"
      className="flex w-full flex-col items-center text-white justify-center p-20 max-md:max-w-full max-md:px-5 bg-gradient-to-r from-[#64462c] to-[#885521]"
    >
      <div className="flex w-full max-w-[1202px] flex-col items-center max-md:max-w-full">
        <h2 className="text-6xl font-normal leading-none tracking-tighter max-md:max-w-full max-md:text-4xl font-serif">
          About Dharmik Clothing
        </h2>
        <p className="bg-blend-normal text-base text-neutral-300 leading-relaxed tracking-tight text-center self-stretch mt-7 max-md:max-w-full font-sans">
          With over 2+ years of experience in the fashion industry, Dharmik
          Clothing has established itself as a trusted partner for brands
          worldwide. We specialize in providing comprehensive manufacturing
          solutions that transform creative visions into successful fashion
          businesses.
        </p>
        <div className="flex items-center gap-8 justify-center flex-wrap mt-16 max-md:max-w-full max-md:mt-10">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <div className="self-stretch w-[11.375rem] my-auto text-center">
                <div className="text-5xl leading-none tracking-tighter font-sans">
                  {stat.number}
                </div>
                <div className="text-xl font-normal leading-relaxed font-sans">
                  {stat.label}
                </div>
              </div>
              {index < stats.length - 1 && (
                <div className="border self-stretch w-0 shrink-0 h-24 my-auto border-[rgba(255,255,255,0.31)] border-solid max-md:hidden" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
