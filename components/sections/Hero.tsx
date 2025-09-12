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
    "https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg",
    "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg",
    "images/gold.jpeg",
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % jewelryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [jewelryImages.length]);

  // Real-time market rates
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
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {jewelryImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-60" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Jewelry ${index + 1}`}
              className="w-full h-full object-cover brightness-110 contrast-110 saturate-110"
            />
          </div>
        ))}
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-yellow-800/30 to-orange-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Golden Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-amber-300 rounded-full animate-ping shadow-lg"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-yellow-300 rounded-full animate-pulse shadow-lg"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping shadow-lg"></div>
        <div className="absolute top-3/4 left-1/2 w-3 h-3 bg-yellow-500 rounded-full animate-pulse shadow-lg"></div>
        <div className="absolute top-[15%] right-1/2 w-1 h-1 bg-amber-200 rounded-full animate-ping shadow-lg"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-28 lg:pt-36 pb-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 sm:space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight drop-shadow-2xl">
                <span className="block text-amber-100">Transform Your</span>
                <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Precious Jewelry
                </span>
                <span className="block text-yellow-300 font-extrabold">
                  Into Instant Cash
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-amber-100 leading-relaxed max-w-md sm:max-w-lg mx-auto lg:mx-0">
                Premium cash for gold, jewelry buying, and expert valuation
                services. Your trusted partner for precious metal transactions
                since 1985.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-yellow-300/50 shadow-lg">
                <Shield className="h-5 w-5 text-yellow-300" />
                <span className="text-xs sm:text-sm font-medium drop-shadow-sm">
                  Authorize SBI Approval
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-yellow-300/50 shadow-lg">
                <Clock className="h-5 w-5 text-yellow-300" />
                <span className="text-xs sm:text-sm font-medium drop-shadow-sm">
                  15 Min Processing
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-yellow-300/50 shadow-lg">
                <Award className="h-5 w-5 text-yellow-300" />
                <span className="text-xs sm:text-sm font-medium drop-shadow-sm">
                  40+ Years Legacy
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("loan-calculator")}
                className="flex justify-center items-center bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-xl border border-yellow-400/50"
              >
                Calculate Cash For Gold Amount
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("sell-gold")}
                className="flex justify-center items-center bg-white/30 backdrop-blur-md border-2 border-yellow-300 text-yellow-100 hover:bg-yellow-400 hover:text-amber-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-lg"
              >
                Sell Old Gold
              </Button>
            </div>

            {/* Additional Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("doorstep-service")}
                className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Schedule Home Visit
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("gold-check")}
                className="flex justify-center items-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Check Gold Value
              </Button>
            </div>

            {/* Service Types */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { label: "Cash For Gold", icon: "🏅", section: "loan-calculator" },
                { label: "Cash For Silver", icon: "⚪", section: "services" },
                { label: "Cash For Diamond", icon: "💎", section: "services" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => scrollToSection(item.section)}
                  className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 shadow-lg transition-all">
                    <span className="text-lg sm:text-2xl">{item.icon}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-amber-200 drop-shadow-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Live Market Rates */}
          <div className="w-full">
            <Card className="bg-white/95 backdrop-blur-sm border border-yellow-200 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-t-lg">
                <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold flex items-center">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                  Live Market Rates
                </CardTitle>
                <p className="text-xs sm:text-sm text-amber-100">
                  Updated September 2, 2025
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-4">
                <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 text-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Live Rates • Per gram prices
                </div>

                {marketRates.map((rate, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 sm:p-4 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 border border-yellow-200"
                  >
                    <div>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">
                        {rate.metal}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Per gram
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-base sm:text-lg font-bold text-amber-700">
                        {rate.rate}
                      </p>
                      <p
                        className={`text-xs sm:text-sm font-medium ${
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
                    onClick={() => scrollToSection("loan-calculator")}
                    className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold py-2.5 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Get cash for gold Quote
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("sell-gold")}
                    className="w-full border-2 border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white font-bold py-2.5 sm:py-3 rounded-lg transition-all duration-300"
                  >
                    Sell Your Jewelry
                  </Button>
                </div>

                <div className="text-center text-xs sm:text-sm text-gray-600 pt-2">
                  <p>
                    ✓ Best market rates • ✓ Instant valuation • ✓ Doorstep
                    service
                  </p>
                </div>

                {/* Real-time update indicator */}
                <div className="text-center">
                  <div className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] sm:text-xs font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Market prices updated live
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Banner */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: "🏆",
              title: "Best Rates",
              desc: "Up to 85% of market value",
              section: "loan-calculator",
            },
            {
              icon: <Clock className="w-5 sm:w-6 h-5 sm:h-6" />,
              title: "Quick Processing",
              desc: "Get cash in 15 minutes",
              section: "sell-gold",
            },
            {
              icon: <Shield className="w-5 sm:w-6 h-5 sm:h-6" />,
              title: "100% Secure",
              desc: "Authorize SBI Approval & insured",
              section: "gold-check",
            },
            {
              icon: "🚪",
              title: "Doorstep Service",
              desc: "We come to you",
              section: "doorstep-service",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => scrollToSection(item.section)}
              className="bg-white/30 backdrop-blur-md rounded-lg p-5 sm:p-6 text-center text-white hover:bg-white/40 transition-all duration-300 border border-yellow-300/50 cursor-pointer transform hover:scale-105 shadow-lg"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-xl sm:text-2xl">{item.icon}</span>
              </div>
              <h3 className="font-bold mb-1 sm:mb-2 text-yellow-200 drop-shadow-sm text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-amber-200 drop-shadow-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
