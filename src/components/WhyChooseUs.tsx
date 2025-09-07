import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";
export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "2+ Years Experience",
      description:
        "Proven manufacturing expertise across diverse fashion segments",
      hasIcon: true,
      icon: "/images/w4.svg",
    },
    {
      title: "End-to-End Solutions",
      description: "Complete support from concept to store setup",
      hasIcon: true,
      icon: "/images/w5.svg",
    },
    {
      title: "Low MOQ for Startups",
      description: "Flexible minimum orders perfect for emerging brands",
      hasIcon: true,
      icon: "/images/w6.svg",
    },
    {
      title: "On-Time Delivery",
      description: "Guaranteed delivery timelines you can depend on",
      hasIcon: true,
      icon: "/images/w1.svg",
    },
    {
      title: "Quality Assured",
      description: "Rigorous quality control at every production stage",
      hasIcon: true,
      icon: "/images/w2.svg",
    },
    {
      title: "Sustainable Options",
      description: "Eco-friendly materials and sustainable practices",
      hasIcon: true,
      icon: "/images/w3.svg",
    },
  ];

  return (
    <section
      id="why-us"
      className="flex flex-col relative min-h-[59.125rem] items-center justify-center px-20 py-20 max-md:max-w-full max-md:mr-0.5 max-md:px-5"
    >
      <Image
        width={1174}
        height={946}
        src="/images/bg.png"
        className="absolute h-full w-full object-cover inset-0"
        alt="Why choose us background"
      />
      <div className="relative flex w-full max-w-[73.375rem] flex-col items-center max-md:max-w-full">
        <div className="self-center flex w-[45.25rem] max-w-full flex-col items-center font-normal font-urbanist">
          <Reveal as="h2" className="text-[rgba(22,28,45,1)] text-6xl leading-none tracking-tighter text-center max-md:max-w-full max-md:text-4xl font-serif" variant="fade-up">
            Why Choose Dharmik Clothing?
          </Reveal>
          <Reveal variant="fade-up" delay={0.05}>
            <p className="text-[rgba(55,55,55,1)] text-xl leading-relaxed mt-2 max-md:max-w-full font-urbanist">
              Industry-leading expertise and commitment to your success
            </p>
          </Reveal>
        </div>

        <div className=" text-black text-center mt-14 max-md:max-w-full max-md:mt-10 font-urbanist">
          <div className="w-full max-md:max-w-full">
            <div className="flex items-center gap-10 gap-x-24 flex-wrap max-md:max-w-full">
              {features.slice(0, 3).map((feature, index) => (
                <Reveal key={feature.title} variant="fade-up" delay={index * 0.06}>
                  <div
                    className={`self-stretch min-w-60 grow shrink w-[14.8125rem] my-auto ${
                      feature.hasIcon ? "flex flex-col items-center" : ""
                    }`}
                  >
                    {feature.hasIcon && (
                      <Image
                        width={81}
                        height={81}
                        src={feature.icon}
                        className="aspect-[1] object-contain w-20 rounded-full p-4"
                        style={{ backgroundColor: '#744d28' }}
                        alt={`${feature.title} icon`}
                      />
                    )}
                    <h3
                      className={`text-2xl font-medium text-center font-abhaya-libre ${
                        feature.hasIcon ? "mt-4" : ""
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-lg font-normal text-center font-urbanist ${
                        feature.hasIcon ? "self-stretch" : ""
                      } mt-4`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="flex items-center gap-10 gap-x-24 flex-wrap mt-20 max-md:max-w-full max-md:mt-10">
              {features.slice(3, 6).map((feature, index) => (
                <Reveal key={feature.title} variant="fade-up" delay={index * 0.06}>
                  <div
                    className={`self-stretch ${
                      feature.hasIcon
                        ? "flex min-w-60 flex-col items-center"
                        : "min-w-60"
                    } grow shrink w-[14.8125rem] my-auto`}
                  >
                    {feature.hasIcon && (
                      <Image
                        width={81}
                        height={81}
                        src={feature.icon}
                        className="aspect-[1] object-contain w-20 rounded-full p-4"
                        style={{ backgroundColor: '#744d28' }}
                        alt="Sustainable options icon"
                      />
                    )}
                    <h3
                      className={`text-3xl font-medium leading-relaxed text-center font-abhaya-libre ${
                        feature.hasIcon ? "mt-4" : ""
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-xl font-normal leading-relaxed text-center font-urbanist ${
                        feature.hasIcon ? "self-stretch" : ""
                      } mt-4`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
