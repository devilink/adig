import React, { useEffect, useRef, useState } from 'react';
import { ClipboardCheck, Headphones, Lightbulb, CreditCard, Award, Leaf } from 'lucide-react';

// A custom hook for counting up
const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      const currentCount = Math.floor(start + (end - start) * easeOut);
      setCount(currentCount);
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, start, isVisible]);

  return { count, ref };
};

const StatItem = ({ end, label, suffix = "+", duration = 2000 }) => {
  const { count, ref } = useCountUp(end, duration);
  
  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-8 bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1091C6] to-[#0A6389] mb-3 font-mono tracking-tight">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm sm:text-base font-semibold text-gray-600 text-center uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export default function WhyAdigSection() {
  const features = [
    {
      title: "Free Digital Audit & Solution Design",
      icon: <ClipboardCheck className="w-8 h-8" />,
      color: "from-amber-400/20 to-amber-100/10",
      iconColor: "text-amber-500",
      borderColor: "group-hover:border-amber-200"
    },
    {
      title: "Lifetime Training & Support",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-rose-400/20 to-rose-100/10",
      iconColor: "text-rose-500",
      borderColor: "group-hover:border-rose-200"
    },
    {
      title: "NEP 2020 Aligned",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-blue-400/20 to-blue-100/10",
      iconColor: "text-blue-500",
      borderColor: "group-hover:border-blue-200"
    },
    {
      title: "Flexible EMI Plans",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-emerald-400/20 to-emerald-100/10",
      iconColor: "text-emerald-500",
      borderColor: "group-hover:border-emerald-200"
    },
    {
      title: "100% GeM Support",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-400/20 to-purple-100/10",
      iconColor: "text-purple-500",
      borderColor: "group-hover:border-purple-200"
    },
    {
      title: "Sustainability in Action",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-400/20 to-green-100/10",
      iconColor: "text-green-500",
      borderColor: "group-hover:border-green-200"
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1091C6]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 sm:mb-28">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-gray-900 leading-[1.1]">
            Why only <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1091C6] to-cyan-500">ADIG?</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24 sm:mb-32 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`group relative bg-white rounded-[32px] p-8 sm:p-10 border border-gray-100 ${feature.borderColor} shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(16,145,198,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
            >
              {/* Subtle gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 flex flex-col items-center text-center gap-6">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-[24px] bg-gray-50/80 shadow-sm border border-gray-100 flex items-center justify-center ${feature.iconColor} group-hover:bg-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]`}>
                  {feature.icon}
                </div>
                <h3 className="text-[19px] sm:text-[22px] font-semibold text-gray-800 leading-tight group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <StatItem end={4} label="Years of Proven Excellence" />
          <StatItem end={500} label="Educational Institutions Served" />
          <StatItem end={70000} label="Students Impacted" />
        </div>

      </div>
    </section>
  );
}
