import React from 'react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="bg-gradient-to-r from-[#64462c] to-[#885521] py-20 px-8 max-md:px-4">
      <div className="mx-auto max-w-5xl">
        <div className="relative mx-auto h-[680px] w-full max-w-[260px]">
          <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-l-2 border-dashed border-white/70"></div>

          <div
            className="absolute inset-0 grid"
            style={{ gridTemplateRows: 'repeat(11, 1fr)' }}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={`circle-${index}`}
                className="relative z-10 flex items-center justify-center"
                style={{ gridRow: index * 2 + 1 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-semibold text-[#885521] shadow-md ring-2 ring-white/70">
                  {index + 1}
                </div>
              </div>
            ))}

            {Array.from({ length: 5 }).map((_, index) => {
              const sideClass = index % 2 === 0 ? '-translate-x-1/2' : 'translate-x-1/2';
              return (
                <div
                  key={`dash-${index}`}
                  className="flex items-center justify-center"
                  style={{ gridRow: index * 2 + 2 }}
                >
                  <div className={`w-52 border-t-2 border-dashed border-white/70 ${sideClass}`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
