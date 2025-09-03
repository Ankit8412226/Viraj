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
import { scrollToSection } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Make scrollToSection available globally
  useEffect(() => {
    (window as any).scrollToSection = scrollToSection;
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      <Hero scrollY={scrollY} />
      <div id="gold-check">
        <GoldCheck />
      </div>
      <Banner />
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
    </main>
  );
}
