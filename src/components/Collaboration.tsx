import React from 'react';
import Image from 'next/image';
import Reveal from './Reveal';

export const Collaborates: React.FC = () => {
  const partners = [
    '/images/c1.png',
    '/images/c2.png'
  ];

  return (
    <section className="bg-[rgba(255,251,250,1)] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        

        {/* Partners Grid */}
        <div className="flex justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <Reveal key={partner} variant="fade-up" delay={index * 0.06}>
              <div className="flex-shrink-0">
                <Image
                  width={160}
                  height={120}
                  src={partner}
                  className="w-32 h-24 md:w-40 md:h-32 lg:w-48 lg:h-36 object-contain"
                  alt={`Partner ${index + 1}`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
