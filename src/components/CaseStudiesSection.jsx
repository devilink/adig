import React from 'react';
import { ArrowRight } from 'lucide-react';

const LinkIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Badge Row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            2
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Featured Installations
          </div>
        </div>

        {/* Heading */}
        <div className="px-5 sm:px-8 lg:px-12">
          <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16">
            Our solutions
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
          
          {/* Card 1: Narrativ */}
          <div className="flex flex-col">
            <div className="relative aspect-[329/246] rounded-2xl overflow-hidden bg-[#1a1d2e] group cursor-pointer">
              <video 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
              />
              
              {/* Hover Button */}
              <div className="absolute bottom-4 left-4 h-9 w-9 bg-white rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[148px]">
                <div className="min-w-[36px] h-full flex items-center justify-center">
                  <div className="transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0 text-gray-900">
                    <LinkIconSVG />
                  </div>
                </div>
                <span className="text-[13px] font-medium text-gray-900 whitespace-nowrap opacity-0 transition-opacity duration-200 delay-0 group-hover:opacity-100 group-hover:delay-100">
                  Learn more
                </span>
              </div>
            </div>
            
            <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
              Winner of EdTech Innovation 2025 - an interactive setup driving record student engagement
            </p>
            <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
              Smart Classroom X1
            </h3>
          </div>

          {/* Card 2: Luminar */}
          <div className="flex flex-col">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#6b6b6b] group cursor-pointer">
              <video 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
              />
              
              {/* Hover Button */}
              <div className="absolute bottom-4 left-4 h-9 w-9 bg-gray-900 rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[168px]">
                <div className="min-w-[36px] h-full flex items-center justify-center">
                  <div className="transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0 text-white">
                    <ArrowRight size={14} className="stroke-[2.5px]" />
                  </div>
                </div>
                <span className="text-[13px] font-medium text-white whitespace-nowrap opacity-0 transition-opacity duration-200 delay-0 group-hover:opacity-100 group-hover:delay-100 pr-4">
                  View case study
                </span>
              </div>
            </div>
            
            <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
              Transforming a traditional lecture hall into a hybrid learning experience
            </p>
            <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
              Hybrid Learning Hub
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
