import React, { useState } from 'react';
import { Play, X, Star } from 'lucide-react';

const TestimonialCard = ({ testimonial, onClick }) => {
  return (
    <div className="group relative bg-white rounded-[32px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(16,145,198,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full cursor-pointer" onClick={() => onClick(testimonial)}>
      
      {/* Video Thumbnail Area */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img 
          src={testimonial.thumbnail} 
          alt={testimonial.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg group-hover:bg-[#1091C6] group-hover:border-[#1091C6] group-hover:scale-110 transition-all duration-500 relative">
             <div className="absolute inset-0 rounded-full border border-white/50 animate-ping opacity-0 group-hover:opacity-100 duration-1000" />
             <Play className="w-6 h-6 text-white ml-1 group-hover:text-white transition-colors" fill="currentColor" />
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-6 right-6 z-10">
          <h3 className="text-white text-xl sm:text-2xl font-semibold leading-tight drop-shadow-md">
            {testimonial.title}
          </h3>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white relative z-20">
        
        {/* Quote */}
        <div className="mb-8 relative">
           <svg className="absolute -top-3 -left-2 w-8 h-8 text-[#1091C6]/10 transform -scale-x-100" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
           </svg>
           <p className="text-[16px] sm:text-[17px] leading-relaxed text-gray-700 italic relative z-10 font-medium pt-2 group-hover:text-gray-900 transition-colors duration-300">
             {testimonial.quote}
           </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
           <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1091C6]/10 to-cyan-500/10 flex items-center justify-center text-[#1091C6] font-bold text-lg border border-[#1091C6]/20 shrink-0">
             {testimonial.name.charAt(1)}
           </div>
           <div>
             <div className="font-semibold text-gray-900 text-[15px] sm:text-[16px]">
               {testimonial.name}
             </div>
             <div className="text-gray-500 text-[13px] sm:text-[14px] leading-snug font-medium mt-0.5">
               {testimonial.designation}
             </div>
             <div className="text-[#1091C6] text-[12px] sm:text-[13px] font-semibold mt-1 uppercase tracking-wide">
               {testimonial.location}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  const testimonials = [
    {
      title: "Meticulous Installation",
      quote: "“ADIG’s meticulous installation made our knowledge studio flawless from day one”",
      name: "–Prof. Dwijendra Thakuria",
      designation: "Dean, CPMSAS",
      location: "Umiam, Meghalaya",
      thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1280&auto=format&fit=crop"
    },
    {
      title: "Amazing Support",
      quote: "“Amazing support—any issue is resolved quickly and efficiently”",
      name: "–Nasim Niar Majumder",
      designation: "CEO, Ontogenesy Automation",
      location: "Guwahati, Assam",
      thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1280&auto=format&fit=crop"
    },
    {
      title: "Real 24/7 Support",
      quote: "“Real 24/7 support—their team is always there when we need help”",
      name: "–Ramananda Laishram",
      designation: "Math Coach & YouTuber, Mathematics Clinic",
      location: "Imphal, Manipur",
      thumbnail: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1280&auto=format&fit=crop"
    }
  ];

  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces&auto=format",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces&auto=format",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&auto=format"
  ];

  return (
    <section className="py-20 sm:py-32 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-[#1091C6]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#1091C6]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
          
          {/* Top Decorative Label */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-1.5 pr-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 mb-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <img key={i} src={src} alt="Customer" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#1091C6] to-[#0A6389] flex items-center justify-center text-white shadow-sm z-10">
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
            <span className="text-[14px] font-semibold text-gray-800 tracking-wide">Loved by Educators</span>
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
            Happy Customers <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1091C6] to-cyan-500">And Counting: Their Stories of Transformation</span>
          </h2>
          
          <p className="text-[17px] sm:text-[19px] leading-relaxed text-gray-600 max-w-2xl mx-auto font-medium">
            Hear how we're building future-ready learning environments, directly from the educators we serve.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard 
              key={idx} 
              testimonial={testimonial} 
              onClick={setActiveVideo} 
            />
          ))}
        </div>
      </div>

      {/* Video Modal Lightbox */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setActiveVideo(null)} />
          <div className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10 scale-in-center">
            
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#1091C6] transition-colors duration-300 border border-white/20 backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* 16:9 Aspect Ratio Container for Video */}
            <div className="relative pt-[56.25%] w-full">
               <img 
                 src={activeVideo.thumbnail} 
                 alt={activeVideo.title}
                 className="absolute inset-0 w-full h-full object-cover opacity-50"
               />
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                 <Play className="w-16 h-16 text-white mb-4 opacity-50" fill="currentColor" />
                 <p className="text-white text-xl md:text-2xl font-medium max-w-xl text-center leading-relaxed drop-shadow-md">
                    {activeVideo.quote}
                 </p>
                 <p className="text-[#1091C6] font-semibold mt-4 text-lg">
                    {activeVideo.name}
                 </p>
                 <p className="text-gray-400 text-sm mt-1 uppercase tracking-widest">
                    Video Integration Ready
                 </p>
               </div>
            </div>
            
            <div className="p-6 bg-gray-900 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-white/10">
              <div>
                <h4 className="text-white text-lg font-bold">{activeVideo.title}</h4>
                <p className="text-gray-400 text-sm mt-1">{activeVideo.designation}, {activeVideo.location}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
