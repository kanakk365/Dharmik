import React from 'react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="bg-gradient-to-r from-[#64462c] to-[#885521] py-20 px-8 max-md:px-4">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            How Your Brand Comes to Life
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-sans">
            6-step process ensures your clothing brand is built with quality, creativity, and expertise at every stage.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative mx-auto h-[42.5rem] w-full max-w-[48rem]">
          <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-l-2 border-dashed border-white/70"></div>

          <div
            className="absolute inset-0 grid"
            style={{ gridTemplateRows: 'repeat(13, 1fr)', gridTemplateColumns: '1fr auto 1fr' }}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <React.Fragment key={`step-${index}`}>
                {/* Left side text - show for odd steps (1, 3, 5) */}
                {(index + 1) % 2 === 1 && (
                  <div
                    className="flex items-center justify-end pr-2 text-right text-white"
                    style={{ gridRow: index * 2 + 1, gridColumn: 1 }}
                  >
                    <div className="max-w-40 min-h-16 flex items-center justify-center bg-[#8b6a49] p-2 rounded-lg">
                      <h3 className="text-base text-center font-semibold font-serif">
                        {index === 0 && "Consultation & Planning"}
                        {index === 2 && "Material Sourcing"}
                        {index === 4 && "Packaging & Delivery"}
                      </h3>

                    </div>
                  </div>
                )}

                {/* Numbered circle */}
                <div
                  className="relative z-10 flex items-center justify-center"
                  style={{ gridRow: index * 2 + 1, gridColumn: 2 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-semibold font-sans text-[#885521] shadow-md ring-2 ring-white/70">
                    {index + 1}
                  </div>
                </div>

                {/* Right side text - show for even steps (2, 4, 6) */}
                {(index + 1) % 2 === 0 && (
                  <div
                    className="flex items-center justify-start pl-2 text-left text-white"
                    style={{ gridRow: index * 2 + 1, gridColumn: 3 }}
                  >
                    <div className="max-w-40 bg-[#8b6a49] p-2 rounded-lg">
                      <h3 className="text-base text-center font-semibold font-serif">
                        {index === 1 && "Design & Development"}
                        {index === 3 && "Production & Quality Control"}
                        {index === 5 && "Packaging & Delivery"}
                      </h3>

                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}

            {Array.from({ length: 6 }).map((_, index) => {
              const sideClass = index % 2 === 0 ? '-translate-x-1/2' : 'translate-x-1/2';
              return (
                <div
                  key={`dash-${index}`}
                  className="flex items-center justify-center"
                  style={{ gridRow: index * 2 + 2, gridColumn: 2 }}
                >
                  <div className={`w-32 border-t-2 border-dashed border-white/70 ${sideClass}`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {Array.from({ length: 6 }).map((_, index) => {
            const stepTexts = [
              "Consultation & Planning",
              "Design & Development",
              "Material Sourcing",
              "Production & Quality Control",
              "Packaging & Delivery",
              "Packaging & Delivery"
            ];

            return (
              <div key={`mobile-step-${index}`} className="flex items-center space-x-4">
                {/* Numbered circle */}
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-semibold font-sans text-[#885521] shadow-md ring-2 ring-white/70">
                    {index + 1}
                  </div>
                </div>

                {/* Vertical line between circle and text box */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-0.5 h-16 bg-white/70"></div>
                </div>

                {/* Text content */}
                <div className="flex-1">
                  <div className="bg-[#8b6a49] p-3 rounded-lg min-h-16 flex items-center">
                    <h3 className="text-sm font-semibold font-serif text-white text-center">
                      {stepTexts[index]}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
