'use client';

import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import LoanCalculatorPage from '@/components/sections/Loan';
import SellGoldPage from '@/components/sections/SellGold';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      <Hero scrollY={scrollY} />
      <LoanCalculatorPage/>
      <SellGoldPage/>
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
