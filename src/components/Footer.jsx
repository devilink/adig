import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8 border-t border-[rgba(255,255,255,0.05)]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#0f172a] text-[10px] font-bold tracking-tight">ADIG</span>
              </div>
              <span className="font-medium text-[16px]">ADIG Solutions</span>
            </div>
            <p className="text-[#94a3b8] text-[14px] leading-relaxed max-w-xs">
              Empowering the future of education with smart, interactive, and reliable technology solutions.
            </p>
          </div>
          
          {/* Links Column 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] font-semibold text-white uppercase tracking-wider mb-2">Solutions</h4>
            <a href="#" className="text-[14px] text-[#94a3b8] hover:text-white transition-colors w-fit">Smart Classrooms</a>
            <a href="#" className="text-[14px] text-[#94a3b8] hover:text-white transition-colors w-fit">Interactive Displays</a>
            <a href="#" className="text-[14px] text-[#94a3b8] hover:text-white transition-colors w-fit">Hybrid Learning</a>
            <a href="#" className="text-[14px] text-[#94a3b8] hover:text-white transition-colors w-fit">EdTech Consulting</a>
          </div>
          
          {/* Links Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] font-semibold text-white uppercase tracking-wider mb-2">Company</h4>
            <a href="#" className="text-[14px] text-[#94a3b8] hover:text-white transition-colors w-fit">About Us</a>
            <a href="#" className="text-[14px] text-[#94a3b8] hover:text-white transition-colors w-fit">Careers</a>
            <a href="#" className="text-[14px] text-[#94a3b8] hover:text-white transition-colors w-fit">Partners</a>
            <a href="#" className="text-[14px] text-[#94a3b8] hover:text-white transition-colors w-fit">Contact</a>
          </div>
          
          {/* Socials & Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] font-semibold text-white uppercase tracking-wider mb-2">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-white hover:text-[#0f172a] transition-all">
                In
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-white hover:text-[#0f172a] transition-all">
                Tw
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-white hover:text-[#0f172a] transition-all">
                Fb
              </a>
            </div>
            <p className="text-[13px] text-[#94a3b8]">hello@adigsolutions.com</p>
            <p className="text-[13px] text-[#94a3b8]">+91 98765 43210</p>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-[#64748b]">
            &copy; 2026 ADIG Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[13px] text-[#64748b] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[13px] text-[#64748b] hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
