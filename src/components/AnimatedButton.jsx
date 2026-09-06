import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AnimatedButton({ 
  text = "Book a strategy call", 
  className = "", 
  variant = "dark" // "dark" or "orange"
}) {
  const isOrange = variant === "orange";
  
  const baseClasses = "group flex items-center gap-3 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]";
  
  const variantClasses = isOrange 
    ? "bg-[#1091C6] hover:bg-[#0d78a3] text-white pl-5 sm:pl-6 pr-2 py-2 text-[13px] sm:text-[14px]" 
    : "bg-gray-900 text-white text-[13px] font-medium pl-5 pr-2 py-2";

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`}>
      <div className="relative overflow-hidden h-[18px]">
        <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="h-[18px] flex items-center leading-none">{text}</span>
          <span className="h-[18px] flex items-center leading-none">{text}</span>
        </div>
      </div>
      
      <div className={`flex items-center justify-center rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 ${isOrange ? 'w-7 h-7 sm:w-8 sm:h-8 text-[#1091C6]' : 'w-6 h-6 text-gray-900'}`}>
        <ArrowRight size={14} className="stroke-[2.5px]" />
      </div>
    </button>
  );
}
