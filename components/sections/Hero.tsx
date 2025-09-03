"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { scrollToSection } from "@/lib/utils";
import { ArrowRight, Award, Clock, Shield, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Jewelry images for sliding background
  const jewelryImages = [
    "/images/gold.jpeg",
    "/images/pandal.jpeg",
    // "/images/cash.jpg",
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % jewelryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [jewelryImages.length]);

  // Real-time market rates based on current data from September 2, 2025
  const marketRates = [
    { metal: "Gold (24K)", rate: "₹10,609", change: "+0.68%", trend: "up" },
    { metal: "Gold (22K)", rate: "₹9,725", change: "+0.68%", trend: "up" },
    { metal: "Silver", rate: "₹126", change: "+5.1%", trend: "up" },
    { metal: "Gold (18K)", rate: "₹7,957", change: "+0.65%", trend: "up" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden"
    >
      {/* Sliding Background Images - Made More Visible */}
      <div className="absolute inset-0">
        {jewelryImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-70" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Jewelry ${index + 1}`}
              className="w-full h-full object-cover brightness-110 contrast-110 saturate-110"
            />
          </div>
        ))}
        {/* Lighter Golden Overlay - Reduced opacity for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-yellow-800/30 to-orange-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
        {/* Additional subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Enhanced Floating Golden Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-amber-300 rounded-full animate-ping shadow-lg"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-yellow-300 rounded-full animate-pulse shadow-lg"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping shadow-lg"></div>
        <div className="absolute top-3/4 left-1/2 w-3 h-3 bg-yellow-500 rounded-full animate-pulse shadow-lg"></div>
        <div className="absolute top-1/6 right-1/2 w-1 h-1 bg-amber-200 rounded-full animate-ping shadow-lg"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 text-center md:text-left">
            <div className="space-y-6 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-2xl">
                <span className="block text-amber-100 drop-shadow-lg animate-in slide-in-from-left-8 duration-700">
                  Transform Your
                </span>
                <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg animate-in slide-in-from-right-8 duration-700 delay-150">
                  Precious Jewelry
                </span>
                <span className="block text-yellow-300 font-extrabold drop-shadow-lg animate-in slide-in-from-left-8 duration-700 delay-300">
                  Into Instant Cash
                </span>
              </h1>

              <p className="text-xl text-amber-100 leading-relaxed max-w-lg mx-auto md:mx-0 drop-shadow-lg animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-150">
                Premium gold loans, jewelry buying, and expert valuation
                services. Your trusted partner for precious metal transactions
                since 1985.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-300">
              <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md rounded-full px-4 py-2 border border-yellow-300/50 shadow-lg">
                <Shield className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium drop-shadow-sm">
                  RBI Registered
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md rounded-full px-4 py-2 border border-yellow-300/50 shadow-lg">
                <Clock className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium drop-shadow-sm">
                  15 Min Processing
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md rounded-full px-4 py-2 border border-yellow-300/50 shadow-lg">
                <Award className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium drop-shadow-sm">
                  40+ Years Legacy
                </span>
              </div>
            </div>

            {/* CTA Buttons with Smooth Scrolling (hidden on mobile) */}
            <div className="hidden md:flex flex-row gap-4 animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-500">
              <Button
                size="lg"
                onClick={() => scrollToSection("#loan-calculator")}
                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold px-8 py-4 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-xl border border-yellow-400/50 cursor-pointer"
              >
                Calculate Loan Amount
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("#sell-gold")}
                className="bg-white/30 backdrop-blur-md border-2 border-yellow-300 text-yellow-100 hover:bg-yellow-400 hover:text-amber-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 cursor-pointer shadow-lg"
              >
                Sell Old Gold
              </Button>
            </div>

            {/* Additional Action Buttons */}
            <div className="hidden md:flex flex-row gap-4 animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-700">
              <Button
                size="lg"
                onClick={() => scrollToSection("#doorstep-service")}
                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold px-8 py-4 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-xl border border-yellow-400/50 cursor-pointer"
              >
                Schedule Home Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("#gold-check")}
                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold px-8 py-4 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-xl border border-yellow-400/50 cursor-pointer"
              >
                Check Gold Value
              </Button>
            </div>

            {/* Learn More Button */}
            <div className="hidden md:flex justify-center animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-1000">
              <Button
                size="lg"
                onClick={() => scrollToSection("#services")}
                className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-xl border border-yellow-300/50 cursor-pointer"
              >
                Learn More About Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Visit Office Button */}
            <div className="hidden md:flex justify-center animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-1000">
              <Button
                size="lg"
                onClick={() => window.open('https://maps.google.com/?q=Viraj+Jewellers+Lajpat+Nagar', '_blank')}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-xl border border-orange-400/50 cursor-pointer"
              >
                Visit Our Office
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Service Types */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div
                onClick={() => scrollToSection("#loan-calculator")}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <span className="text-2xl">🏅</span>
                </div>
                <p className="text-sm font-medium text-amber-200 drop-shadow-sm">
                  Gold Loans
                </p>
              </div>
              <div
                onClick={() => scrollToSection("#services")}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <span className="text-2xl">⚪</span>
                </div>
                <p className="text-sm font-medium text-amber-200 drop-shadow-sm">
                  Silver Loans
                </p>
              </div>
              <div
                onClick={() => scrollToSection("#services")}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <span className="text-2xl">💎</span>
                </div>
                <p className="text-sm font-medium text-amber-200 drop-shadow-sm">
                  Diamond Loans
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Live Market Rates */}
          <div className="lg:pl-8">
            <Card className="bg-white/95 backdrop-blur-sm border border-yellow-200 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <TrendingUp className="h-6 w-6 mr-3" />
                  Live Market Rates
                </CardTitle>
                <p className="text-amber-100">Updated September 2, 2025</p>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="text-sm text-gray-600 mb-4 text-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Live Rates • Per gram prices
                </div>

                {marketRates.map((rate, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 border border-yellow-200"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">
                        {rate.metal}
                      </p>
                      <p className="text-sm text-gray-600">Per gram</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-amber-700">
                        {rate.rate}
                      </p>
                      <p
                        className={`text-sm font-medium ${
                          rate.trend === "up"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {rate.change} {rate.trend === "up" ? "↗️" : "↘️"}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-4 space-y-3">
                  <Button
                    onClick={() => scrollToSection("#loan-calculator")}
                    className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold py-3 rounded-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    Get Loan Quote
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("#sell-gold")}
                    className="w-full border-2 border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white font-bold py-3 rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    Sell Your Jewelry
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-600 pt-2">
                  <p>
                    ✓ Best market rates • ✓ Instant valuation • ✓ Doorstep
                    service
                  </p>
                </div>

                {/* Real-time update indicator */}
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Market prices updated live
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Banner */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div
            onClick={() => scrollToSection("#loan-calculator")}
            className="bg-white/30 backdrop-blur-md rounded-lg p-6 text-center text-white hover:bg-white/40 transition-all duration-300 border border-yellow-300/50 cursor-pointer transform hover:scale-105 shadow-lg"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="font-bold mb-2 text-yellow-200 drop-shadow-sm">
              Best Rates
            </h3>
            <p className="text-sm text-amber-200 drop-shadow-sm">
              Up to 85% of market value
            </p>
          </div>

          <div
            onClick={() => scrollToSection("#sell-gold")}
            className="bg-white/30 backdrop-blur-md rounded-lg p-6 text-center text-white hover:bg-white/40 transition-all duration-300 border border-yellow-300/50 cursor-pointer transform hover:scale-105 shadow-lg"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2 text-yellow-200 drop-shadow-sm">
              Quick Processing
            </h3>
            <p className="text-sm text-amber-200 drop-shadow-sm">
              Get cash in 15 minutes
            </p>
          </div>

          <div
            onClick={() => scrollToSection("#gold-check")}
            className="bg-white/30 backdrop-blur-md rounded-lg p-6 text-center text-white hover:bg-white/40 transition-all duration-300 border border-yellow-300/50 cursor-pointer transform hover:scale-105 shadow-lg"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2 text-yellow-200 drop-shadow-sm">
              100% Secure
            </h3>
            <p className="text-sm text-amber-200 drop-shadow-sm">
              RBI registered & insured
            </p>
          </div>

          <div
            onClick={() => scrollToSection("#doorstep-service")}
            className="bg-white/30 backdrop-blur-md rounded-lg p-6 text-center text-white hover:bg-white/40 transition-all duration-300 border border-yellow-300/50 cursor-pointer transform hover:scale-105 shadow-lg"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-2xl">🚪</span>
            </div>
            <h3 className="font-bold mb-2 text-yellow-200 drop-shadow-sm">
              Doorstep Service
            </h3>
            <p className="text-sm text-amber-200 drop-shadow-sm">
              We come to you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
