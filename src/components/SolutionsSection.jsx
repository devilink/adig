import React from 'react';

export default function SolutionsSection() {
  const solutions = [
    {
      title: "Smart Classroom Solutions",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1280&auto=format&fit=crop",
      className: "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[400px]"
    },
    {
      title: "Audio Visual & Display Solutions",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1280&auto=format&fit=crop",
      className: "md:col-span-2 min-h-[220px]"
    },
    {
      title: "Digital Learning Enablement",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-1 min-h-[220px]"
    },
    {
      title: "Podcast & Recording Studio Setup",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-1 min-h-[220px]"
    },
    {
      title: "Video Conferencing & Collaboration Systems",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-2 min-h-[300px] md:min-h-[400px]"
    },
    {
      title: "Power Backup for Critical Systems",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1280&auto=format&fit=crop",
      className: "md:col-span-2 min-h-[220px]"
    },
    {
      title: "Comprehensive AMC & Support Services",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-1 min-h-[220px]"
    },
    {
      title: "Lifelong Educator Training",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1280&auto=format&fit=crop",
      className: "md:col-span-3 min-h-[220px]"
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1091C6] to-[#0A6389]">Solutions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Solutions designed around your vision and needs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-5 auto-rows-fr">
          {solutions.map((solution, idx) => (
            <div 
              key={idx}
              className={`group relative rounded-[28px] overflow-hidden cursor-pointer ${solution.className}`}
            >
              {/* Background Image with Zoom on Hover */}
              <img 
                src={solution.image} 
                alt={solution.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-500 group-hover:opacity-90 z-10" />
              
              {/* Hover Accent Border / Glow overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-[28px] z-20 transition-colors duration-500 pointer-events-none" />

              {/* Content Box */}
              <div className="absolute inset-0 z-30 p-6 sm:p-8 flex flex-col justify-end">
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                  {solution.title}
                </h3>
                
                {/* Decorative underline that expands on hover */}
                <div className="w-8 h-1 bg-[#1091C6] mt-4 rounded-full opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
