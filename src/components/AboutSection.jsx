import React from 'react';
import AnimatedButton from './AnimatedButton';
import mapImage from '../../assets/map.jpg';

export default function AboutSection() {
  return (
    <section className="bg-[#F8FAFC] pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          
          {/* Card 1: Title & Badge (Large Left) */}
          <div className="md:col-span-12 lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-12 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[380px]">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-7 h-7 rounded-full bg-[#1091C6] text-white text-[12px] font-semibold flex items-center justify-center shadow-lg shadow-[#1091C6]/30">
                1
              </div>
              <div className="text-[13px] font-medium border border-gray-200 bg-gray-50 rounded-full px-4 py-1.5 text-gray-900">
                Why ADIG Solutions
              </div>
            </div>

            <div>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.02em] text-gray-900 mb-8 max-w-2xl">
                Future-ready technology, delivering results in education.
              </h2>
              <AnimatedButton text="Explore our story" variant="orange" />
            </div>
          </div>

          {/* Card 2: Top Right Image */}
          <div className="md:col-span-12 lg:col-span-5 rounded-[32px] overflow-hidden min-h-[320px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative group">
            <img 
              src="assets/map.jpg" 
              alt="Classroom collaborative work" 
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
            />
            {/* Liquid glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1091C6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Card 3: Mission Text (Dark Mode) */}
          <div className="md:col-span-6 lg:col-span-4 bg-[#0f172a] rounded-[32px] p-8 sm:p-10 shadow-xl flex flex-col justify-center relative overflow-hidden group min-h-[340px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1091C6] rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
            <p className="text-[15px] sm:text-[16px] leading-[1.7] font-medium text-gray-300 relative z-10">
              <span className="text-white font-semibold block mb-3 text-[18px]">Transforming learning spaces.</span>
              At ADIG, we bring together smart classroom technology, digital learning infrastructure, and lifelong support to create practical, easy-to-use, and future-ready environments that empower educators and engage students across Northeast India.
            </p>
          </div>

          {/* Card 4: Center Image */}
          <div className="md:col-span-6 lg:col-span-4 rounded-[32px] overflow-hidden min-h-[340px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative group">
            <img 
              src="assets/smart.jpg" 
              alt="Digital interface showcase" 
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
               <p className="text-white text-[15px] font-medium tracking-wide">Interactive displays for modern campuses</p>
            </div>
          </div>

          {/* Card 5: Presence Text (Blue Accent) */}
          <div className="md:col-span-12 lg:col-span-4 bg-white border border-gray-100 rounded-[32px] p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col relative overflow-hidden min-h-[340px] group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1091C6] opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-[17px] sm:text-[19px] font-semibold text-gray-900 mb-5 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#1091C6]">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Our Presence
              </h3>
              <p className="text-[14px] sm:text-[15px] leading-[1.7] font-medium text-gray-600">
                We serve all seven states of North East India—Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, and Tripura—with local experience centres in Guwahati, Imphal, Aizawl, Itanagar, Agartala and Shillong, enabling institutions to explore our smart classroom solutions firsthand.
              </p>
            </div>

            {/* Map Image background decoration */}
            <div className="absolute -bottom-6 -right-6 w-[85%] h-[85%] opacity-[0.08] group-hover:opacity-15 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-700 pointer-events-none z-0">
              <img 
                src={mapImage} 
                alt="North East India Map" 
                className="w-full h-full object-contain object-bottom-right drop-shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
