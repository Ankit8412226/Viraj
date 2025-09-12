'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Shield, Clock, Award } from 'lucide-react';

const banners = [
  {
    title: 'Best Gold Rates Guaranteed',
    subtitle: 'Up to 85% of gold value • Instant Cash Disbursement',
    icon: <TrendingUp className="h-8 w-8" />,
    color: 'from-yellow-500 to-amber-600'
  },
  {
    title: 'Free Door-Step Gold Services',
    subtitle: 'Home visit for testing, selling and cash for gold processing',
    icon: <Shield className="h-8 w-8" />,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'Quick 15-Minute Approval',
    subtitle: 'Fast processing • Secure • RBI Registered',
    icon: <Clock className="h-8 w-8" />,
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Trusted Since 1985',
    subtitle: '40+ Years Legacy • 50K+ Happy Customers',
    icon: <Award className="h-8 w-8" />,
    color: 'from-purple-500 to-pink-600'
  },
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentBanner = banners[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-amber-400 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-12 h-12 bg-orange-400 rounded-full animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div 
          key={currentIndex} 
          className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000"
        >
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${currentBanner.color} text-white shadow-2xl transform hover:scale-110 transition-all duration-300`}>
            {currentBanner.icon}
          </div>

          {/* Title */}
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 font-playfair">
            {currentBanner.title}
          </h3>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {currentBanner.subtitle}
          </p>

          {/* Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-600 scale-125' 
                    : 'bg-amber-300 hover:bg-amber-400'
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button 
              onClick={() => {
                const element = document.getElementById('gold-check');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold px-8 py-4 rounded-full transform transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Get Started Now
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}