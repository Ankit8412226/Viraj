"use client";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { DollarSign, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    const id = sectionId.startsWith("#") ? sectionId.slice(1) : sectionId;
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Gold Check", href: "gold-check" },
    { name: "Services", href: "services" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-yellow-200"
          : "bg-transparent"
      }`}
    >
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-white text-xs sm:text-sm py-2">
        <div className="container mx-auto px-3 sm:px-4 flex flex-wrap justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-3 text-[11px] sm:text-sm">
            <div className="flex items-center gap-1 sm:gap-2">
              <Phone className="h-4 w-4" />
              <span>+91-9810100561</span>
            </div>
            <div className="hidden md:flex items-center gap-1 sm:gap-2">
              <MapPin className="h-4 w-4" />
              <span>Lajpat Nagar, New Delhi</span>
            </div>
          </div>
          <div className="hidden md:block text-xs sm:text-sm">
            <span className="animate-pulse">
              🔥 Best Gold Prices Today: ₹10,609/gram
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative group w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-700 p-[2px] shadow-lg hover:shadow-gold transition-all duration-500">
              <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden">
                <img
                  src="/images/imageViraj.jpg"
                  alt="Viraj Logo"
                  className="w-full h-full rounded-full object-cover border-2 border-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>

            <div className="hidden sm:block">
              <h1
                className={`text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent ${
                  isScrolled ? "" : "text-white"
                }`}
              >
                Viraj Jewellers
              </h1>
              <p
                className={`text-xs sm:text-sm ${
                  isScrolled ? "text-gray-600" : "text-yellow-100"
                }`}
              >
                Trusted Since 1985
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSectionClick(item.href)}
                className={`transition-colors duration-300 hover:text-yellow-600 cursor-pointer font-medium ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection("sell-gold")}
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-semibold px-4 sm:px-6 py-2 rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer text-sm sm:text-base"
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Sell Gold
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-white rounded-lg shadow-xl border border-yellow-200 p-3 sm:p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSectionClick(item.href)}
                className="block w-full text-left py-2 sm:py-3 text-gray-700 hover:text-yellow-600 transition-colors duration-300 cursor-pointer font-medium text-sm sm:text-base"
              >
                {item.name}
              </button>
            ))}

            <Button
              onClick={() => {
                scrollToSection("sell-gold");
                setIsMenuOpen(false);
              }}
              className="w-full mt-3 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold py-2 sm:py-3 rounded-full cursor-pointer text-sm sm:text-base"
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Sell Gold
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
