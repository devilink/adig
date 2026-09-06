import React, { useState, useEffect } from 'react';
import { Menu, X, Clock } from 'lucide-react';
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react';
import AnimatedButton from './AnimatedButton';

const PartnerBadgeSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#1091C6]">
    <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z"/>
  </svg>
);

export default function HeroSection() {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // London time formatting
      const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      setTime(formatter.format(now));
    };
    
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full flex flex-col bg-[#EFEFEF] overflow-hidden">
      {/* SHADER BACKGROUND */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Shader>
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow baseColor="#ffffff" downColor="#1091C6" leftColor="#1091C6" rightColor="#1091C6" upColor="#1091C6" momentum={13} radius={3.5} />
          <FlutedGlass aberration={0.61} angle={31} frequency={8} highlight={0.12} highlightSoftness={0} lightAngle={-90} refraction={4} shape="rounded" softness={1} speed={0.15} />
          <FilmGrain strength={0.05} />
        </Shader>
      </div>

      {/* NAVIGATION */}
      <nav className="relative z-20 w-full max-w-[1440px] mx-auto p-2 sm:p-3 mt-4 px-4 sm:px-6">
        <div className="bg-white rounded-full p-[5px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] sm:text-[11px] font-bold tracking-tight">ADIG</span>
            </div>
            <div className="hidden md:flex items-center gap-6 pl-2">
              <a href="#" className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300">Solutions</a>
              <a href="#" className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300">Products</a>
              <a href="#" className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300">Industries</a>
              <a href="#" className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300">Connect</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 pr-2">
            <span className="text-[13px] text-gray-600 hidden lg:block">Equipping classrooms for 2026</span>
            <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
              <Clock size={14} className="text-gray-400" />
              <span className="text-[13px] text-gray-600 font-medium tracking-wide">{time} in London</span>
            </div>
            <AnimatedButton text="Book a Demo" variant="dark" />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white mr-1"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex-1 flex flex-col justify-end w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20 pointer-events-auto">
        <p className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide mb-5 sm:mb-8 font-medium">ADIG Solutions</p>
        
        <h1 className="text-gray-900 font-medium leading-[1.08] tracking-[-0.03em] text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] max-w-4xl">
          North East India’s Most Trusted <span className="sm:hidden"> </span><br className="hidden sm:block" />
          Smart Classroom Solution Provider.
        </h1>
        
        <p className="mt-5 sm:mt-6 text-[15px] sm:text-[17px] text-gray-800 leading-[1.6] max-w-2xl font-medium">
          We deliver future-ready, easy to manage smart classroom, training lab, and campus-wide solutions for schools, colleges, universities, and coaching centers. Your vision powered by our reliable solutions.
        </p>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <AnimatedButton text="Explore Solutions" variant="orange" />
          
          <div className="bg-white rounded-[4px] px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
            <PartnerBadgeSVG />
            <div className="flex items-center gap-2">
              <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">Certified Partner</span>
              <span className="bg-gray-900 text-white text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded font-medium tracking-wide uppercase">Featured</span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-500 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
        
        <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-2xl mx-3 mb-3 p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${menuOpen ? 'translate-y-0' : 'translate-y-[120%]'}`}>
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full">
              <Clock size={14} className="text-gray-500" />
              <span className="text-[13px] text-gray-600 font-medium">{time} in London</span>
            </div>
            <button onClick={() => setMenuOpen(false)} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <X size={18} className="text-gray-900" />
            </button>
          </div>
          
          <div className="flex flex-col gap-4 mb-8">
            <a href="#" className="text-[28px] leading-[32px] font-medium text-gray-900">Solutions</a>
            <a href="#" className="text-[28px] leading-[32px] font-medium text-gray-900">Products</a>
            <a href="#" className="text-[28px] leading-[32px] font-medium text-gray-900">Industries</a>
            <a href="#" className="text-[28px] leading-[32px] font-medium text-gray-900">Connect</a>
          </div>
          
          <AnimatedButton text="Explore Solutions" variant="orange" className="w-full justify-between" />
        </div>
      </div>
    </section>
  );
}
