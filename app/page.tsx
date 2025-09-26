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
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/utils";

// Extra standalone pages
import AuthorizedApproverPage from "@/components/sections/AuthorizedApprover";
import LegacyExperiencePage from "@/components/sections/LegacyExperiencePage";
import QuickProcessingPage from "@/components/sections/QuickProcessingPage";
import MapIconPage from "@/components/sections/MapiconPage";

export default function Home() {
  const pathname = usePathname(); // ✅ Correct way to get current route
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />

      {/* Show standalone page if route matches */}
      {pathname === "/authorized-approver" ? (
        <AuthorizedApproverPage />
      ) : pathname === "/quick-processing" ? (
        <QuickProcessingPage />
      ) : pathname === "/legacy-experience" ? (
        <LegacyExperiencePage />
      ) : (
        <>
          {/* Normal Homepage */}
          <Hero scrollY={scrollY} />
          <Banner />
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
        </>
      )}

      <MapIconPage />
      <Footer />
      <Toaster />
    </main>
  );
}
