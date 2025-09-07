"use client";
import React, { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

export const Services: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Brand Development",
      image: "/images/your1.png",
      bgColor: "bg-[#F78B5D]",
      descriptions: [
        "Logo design and brand identity",
        "Brand guidelines and visual standards",
        "Marketing material design",
        "Brand positioning strategy",
      ],
    },
    {
      title: "Manufacturing Services",
      image: "/images/your2.png",
      bgColor: "bg-[#4A8FE0]",
      descriptions: [
        "Custom clothing manufacturing",
        "Pattern making and grading",
        "Sample development and prototyping",
        "Bulk production with quality control",
        "Low MOQ orders for startups",
      ],
    },
    {
      title: "Fabric Sourcing",
      image: "/images/your3.png",
      bgColor: "bg-[#50B850]",
      descriptions: [
        "Wide range of fabric options",
        "Sustainable and eco-friendly materials",
        "Custom fabric development",
        "Quality testing and certification",
      ],
    },
    {
      title: "Design Services",
      image: "/images/your4.png",
      bgColor: "bg-[#8A60C7]",
      descriptions: [
        "Tech pack development",
        "3D garment visualization",
        "Trend research and analysis",
        "Custom design solutions",
      ],
    },
    {
      title: "Packaging Solutions",
      image: "/images/your5.png",
      bgColor: "bg-[#F7D04B]",
      descriptions: [
        "Brand-specific packaging design",
        "Eco-friendly packaging options",
        "Custom labels and tags",
        "Retail-ready packaging",
      ],
    },
    {
      title: "Store Setup",
      image: "/images/your6.png",
      bgColor: "bg-[#9ACD32]",
      descriptions: [
        "Store design and layout planning",
        "Visual merchandising guidance",
        "Inventory management systems",
        "Marketing and launch support",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="flex flex-col relative min-h-screen items-center justify-center p-20 max-md:max-w-full max-md:px-5"
    >
      <Image
        width={1162}
        height={1242}
        src="/images/bg.png"
        className="absolute h-full w-full object-cover inset-0"
        alt="Services background"
      />
      <div className="relative flex w-full max-w-[72.625rem] flex-col items-stretch max-md:max-w-full">
        {/* Header Section */}
        <div className="self-center w-[52.125rem] max-w-full font-normal text-center">
          <Reveal
            as="h2"
            className="text-[rgba(22,28,45,1)] leading-tight text-5xl tracking-tight max-md:max-w-full max-md:text-4xl font-serif"
            variant="fade-up"
          >
            Your Brand Journey, All in One Place.
          </Reveal>
          <Reveal variant="fade-up" delay={0.05}>
            <p className="text-neutral-600 text-xl leading-relaxed mt-2 max-md:max-w-full font-sans">
              From fabrics to your final store launch — we help you build,
              scale, and shine in the fashion world.
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="mt-20 max-md:max-w-full max-md:mt-10 flex justify-center">
          <div className="grid grid-cols-3 gap-8 gap-y-12 max-md:grid-cols-1 place-items-center">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                variant="fade-up"
                delay={index * 0.06}
              >
                <div className="flex flex-col">
                  <div
                    className={`${service.bgColor} rounded-xl shadow-lg overflow-hidden w-[18rem] flex flex-col items-center justify-center p-2 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="p-3">
                      <div className="relative">
                        <Image
                          width={200}
                          height={500}
                          src={service.image}
                          className={`w-64 h-[18rem] object-cover rounded-lg transition-all duration-300 ${
                            hoveredCard === index ? "opacity-30" : "opacity-100"
                          }`}
                          alt={service.title}
                        />

                        {/* Hover Overlay - Only over the image */}
                        {hoveredCard === index && (
                          <div
                            className={`absolute inset-0 ${service.bgColor} bg-opacity-90 rounded-lg flex items-center justify-center p-4 transition-all duration-300`}
                          >
                            <div className="text-white text-sm space-y-3">
                              {service.descriptions.map((desc, descIndex) => (
                                <div
                                  key={descIndex}
                                  className={`${
                                    descIndex < service.descriptions.length - 1
                                      ? "pb-2 border-b border-white border-opacity-30"
                                      : ""
                                  }`}
                                >
                                  <div className="flex items-center">
                                   
                                    <span>{desc}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="text-white text-lg font-medium text-center mt-5">
                        {service.title}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
