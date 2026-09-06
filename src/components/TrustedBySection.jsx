import React from 'react';

const Logo1 = () => (
  <div className="flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors">
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
    <span className="text-xl font-bold font-serif tracking-tight">EduVision College</span>
  </div>
);

const Logo2 = () => (
  <div className="flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors">
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
    <span className="text-xl font-bold tracking-tight">Global Tech University</span>
  </div>
);

const Logo3 = () => (
  <div className="flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors">
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m4 6 8-4 8 4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M18 5v17"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/></svg>
    <span className="text-xl font-bold font-serif tracking-tight">Institute of Excellence</span>
  </div>
);

const Logo4 = () => (
  <div className="flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors">
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
    <span className="text-xl font-bold tracking-tight">Future Learning Academy</span>
  </div>
);

const Logo5 = () => (
  <div className="flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors">
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    <span className="text-xl font-bold font-serif tracking-tight">National Science Hub</span>
  </div>
);

const Logo6 = () => (
  <div className="flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors">
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    <span className="text-xl font-bold tracking-tight">Pinnacle High</span>
  </div>
);

export default function TrustedBySection() {
  const logos = [<Logo1 />, <Logo2 />, <Logo3 />, <Logo4 />, <Logo5 />, <Logo6 />];
  
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
        <p className="text-sm sm:text-[15px] font-semibold text-gray-400 uppercase tracking-[0.15em]">
          Trusted by 500+ leading educational institutions
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex bg-white">
        
        {/* Left and Right Fade Gradients */}
        <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Content */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* First set of logos */}
          <div className="flex flex-shrink-0 items-center gap-16 sm:gap-24 pr-16 sm:pr-24 pl-4">
            {logos.map((Logo, index) => (
              <div key={`logo-1-${index}`} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                {Logo}
              </div>
            ))}
          </div>
          
          {/* Duplicated set of logos for seamless loop */}
          <div className="flex flex-shrink-0 items-center gap-16 sm:gap-24 pr-16 sm:pr-24 pl-4">
            {logos.map((Logo, index) => (
              <div key={`logo-2-${index}`} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                {Logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
