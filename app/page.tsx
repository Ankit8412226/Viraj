"use client";

import About from "@/components/sections/About";
import Banner from "@/components/sections/Banner";
import Contact from "@/components/sections/Contact";
import DoorStepService from "@/components/sections/DoorStepService";
import Footer from "@/components/sections/Footer";
import GoldCheck from "@/components/sections/GoldCheck";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import LoanCalculatorPage from "@/components/sections/Loan";
import SellGoldPage from "@/components/sections/SellGold";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import { Toaster } from "@/components/ui/sonner";
import { scrollToSection } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    (window as any).scrollToSection = scrollToSection;
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      <Hero scrollY={scrollY} />
      <Banner />
      {/* Long-form content for better topical relevance */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900">Why Choose Viraj Jewellers in Lajpat Nagar</h2>
        <p className="mt-3 text-gray-700">
          We provide transparent XRF testing in your presence, instant cash/UPI/bank transfer payment,
          and best market-linked rates. Serving Lajpat Nagar, Nehru Place, CR Park, GK, Defence Colony, and South Delhi.
        </p>
        <ul className="mt-4 list-disc pl-6 text-gray-700 space-y-1">
          <li>Same-day payout with government-compliant KYC</li>
          <li>Private evaluation area and secure process</li>
          <li>Trusted since 1985 with thousands of satisfied customers</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/best-gold-buyer-lajpat-nagar" className="rounded border px-4 py-2">Best Gold Buyer in Lajpat Nagar</a>
          <a href="/gold-rates-today" className="rounded border px-4 py-2">Gold Rates Today</a>
          <a href="/services/cash-for-gold" className="rounded border px-4 py-2">Cash for Gold</a>
        </div>
      </section>
      <div id="gold-check">
        <GoldCheck />
      </div>
      <div id="doorstep-service">
        <DoorStepService />
      </div>
      <div id="loan-calculator">
        <LoanCalculatorPage />
      </div>
      <div id="sell-gold">
        <SellGoldPage />
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
      {/* Map Embed on Homepage */}
      <section className="mt-10 px-4">
        <div className="mx-auto max-w-5xl h-80 w-full overflow-hidden rounded border">
          <iframe
            src="https://www.google.com/maps?q=Viraj+Jewellers+Lajpat+Nagar&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            aria-label="Map of Viraj Jewellers Lajpat Nagar"
          />
        </div>
      </section>
      <Footer />
      <Toaster />
    </main>
  );
}
