'use client';

import About from '@/components/sections/About';
import Banner from '@/components/sections/Banner';
import Contact from '@/components/sections/Contact';
import DoorStepService from '@/components/sections/DoorStepService';
import FloatingActions from '@/components/sections/FloatingActions';
import Footer from '@/components/sections/Footer';
import GoldCheck from '@/components/sections/GoldCheck';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import LoanCalculatorPage from '@/components/sections/Loan';
import SellGoldPage from '@/components/sections/SellGold';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import { Toaster } from '@/components/ui/sonner';
import { scrollToSection } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Make scrollToSection available globally
  useEffect(() => {
    (window as any).scrollToSection = scrollToSection;
    
    // Set loaded state after a short delay
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-1000">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-2xl animate-pulse">
              <span className="text-white font-bold text-4xl font-playfair">V</span>
            </div>
            <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin"></div>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent font-playfair">
              Viraj Jewellers
            </h1>
            <p className="text-amber-700 font-medium tracking-wide">Trusted Since 1985</p>
          </div>
          <div className="w-64 h-2 bg-amber-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full animate-[loadingbar_2s_ease_infinite]"></div>
          </div>
          <p className="text-amber-600 font-medium animate-pulse">Loading your gold trading platform...</p>
        </div>
        <style jsx>{`
          @keyframes loadingbar {
            0% { transform: translateX(-100%); width: 0%; }
            50% { transform: translateX(0%); width: 100%; }
            100% { transform: translateX(100%); width: 0%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      <Hero scrollY={scrollY} />
      <Banner />
      <div id="gold-check">
        <GoldCheck />
      </div>
      <div id="doorstep-service">
        <DoorStepService />
      </div>
      <div id="loan-calculator">
        <LoanCalculatorPage/>
      </div>
      <div id="sell-gold">
        <SellGoldPage/>
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <FloatingActions />
      <Toaster />
    </main>
  );
}