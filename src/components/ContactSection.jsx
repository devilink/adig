import React from 'react';
import AnimatedButton from './AnimatedButton';

export default function ContactSection() {
  return (
    <section id="connect" className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
                3
              </div>
              <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
                Get in touch
              </div>
            </div>
            
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-6 lg:mb-10 max-w-xl">
              Ready to transform your institution?
            </h2>
            
            <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-600 max-w-md mb-8 lg:mb-12">
              Let's build the classroom of tomorrow, together. Fill out the form and our team will get back to you within 24 hours to schedule a consultation.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[12px] text-gray-400 font-semibold tracking-wider uppercase mb-1">Email us</p>
                <a href="mailto:hello@adigsolutions.com" className="text-[16px] font-medium text-gray-900 hover:text-[#1091C6] transition-colors">hello@adigsolutions.com</a>
              </div>
              <div>
                <p className="text-[12px] text-gray-400 font-semibold tracking-wider uppercase mb-1">Call us</p>
                <p className="text-[16px] font-medium text-gray-900">+91 98765 43210</p>
              </div>
              <div>
                <p className="text-[12px] text-gray-400 font-semibold tracking-wider uppercase mb-1">Visit us</p>
                <p className="text-[16px] font-medium text-gray-900">Guwahati, Assam<br/>North East India</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-[#F9F9F9] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-[13px] font-medium text-gray-700">First Name</label>
                  <input type="text" id="firstName" placeholder="Jane" className="bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-gray-400 transition-colors text-[14px]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-[13px] font-medium text-gray-700">Last Name</label>
                  <input type="text" id="lastName" placeholder="Doe" className="bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-gray-400 transition-colors text-[14px]" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[13px] font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" placeholder="jane@institution.edu" className="bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-gray-400 transition-colors text-[14px]" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="institution" className="text-[13px] font-medium text-gray-700">Institution / Organization</label>
                <input type="text" id="institution" placeholder="University Name" className="bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-gray-400 transition-colors text-[14px]" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[13px] font-medium text-gray-700">How can we help?</label>
                <textarea id="message" rows="4" placeholder="Tell us about your requirements..." className="bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-gray-400 transition-colors text-[14px] resize-none"></textarea>
              </div>

              <div className="pt-2">
                <AnimatedButton text="Send Message" variant="dark" className="w-full justify-between" />
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
