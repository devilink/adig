import React from 'react';

const Brand1 = () => (
  <div className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
    <svg className="w-8 h-8 text-[#1091C6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    <span className="text-2xl font-black tracking-tighter uppercase">Nexus</span>
  </div>
);

const Brand2 = () => (
  <div className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
    <span className="text-2xl font-bold tracking-tight">Visionary</span>
  </div>
);

const Brand3 = () => (
  <div className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
    <svg className="w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
    <span className="text-2xl font-bold tracking-widest uppercase">TechCorp</span>
  </div>
);

const Brand4 = () => (
  <div className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
    <svg className="w-8 h-8 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
    <span className="text-2xl font-extrabold tracking-tight">AudioPro</span>
  </div>
);

const Brand5 = () => (
  <div className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
    <svg className="w-8 h-8 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    <span className="text-2xl font-bold tracking-tight">DisplayTech</span>
  </div>
);

const Brand6 = () => (
  <div className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
    <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
    <span className="text-2xl font-bold italic tracking-wider">SmartBoard</span>
  </div>
);

export default function BrandsSection() {
  const brands = [<Brand1 />, <Brand2 />, <Brand3 />, <Brand4 />, <Brand5 />, <Brand6 />];
  
  return (
    <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Our Brands</h3>
        <p className="text-[15px] sm:text-[16px] text-gray-500 max-w-2xl mx-auto">
          We partner with the world's most innovative technology brands to bring you the best solutions.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex bg-gray-50">
        
        {/* Left and Right Fade Gradients */}
        <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Content */}
        <div className="flex w-max animate-marquee-brands hover:[animation-play-state:paused]">
          {/* First set of brands */}
          <div className="flex flex-shrink-0 items-center gap-20 sm:gap-32 pr-20 sm:pr-32 pl-4">
            {brands.map((Brand, index) => (
              <div key={`brand-1-${index}`} className="flex-shrink-0 opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer">
                {Brand}
              </div>
            ))}
          </div>
          
          {/* Duplicated set of brands for seamless loop */}
          <div className="flex flex-shrink-0 items-center gap-20 sm:gap-32 pr-20 sm:pr-32 pl-4">
            {brands.map((Brand, index) => (
              <div key={`brand-2-${index}`} className="flex-shrink-0 opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer">
                {Brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-brands {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-brands {
          /* slightly slower/different duration than the TrustedBy one for visual variety */
          animation: marquee-brands 40s linear infinite; 
        }
      `}</style>
    </section>
  );
}
