import React from 'react';
import Image from 'next/image';

export const Collaborates: React.FC = () => {
  const partners = [
    '/images/c1.png',
    '/images/c2.png'
  ];

  return (
    <section className="bg-[rgba(255,251,250,1)] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[rgba(22,28,45,1)] font-serif leading-none tracking-tighter mb-4">
            Our Collaborates
          </h2>
          <p className="text-lg md:text-xl text-[rgba(55,55,55,1)] font-sans max-w-2xl mx-auto">
            Industry-leading expertise and trusting us
          </p>
        </div>

        {/* Partners Grid */}
        <div className="flex justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                width={160}
                height={120}
                src={partner}
                className="w-32 h-24 md:w-40 md:h-32 lg:w-48 lg:h-36 object-contain"
                alt={`Partner ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
