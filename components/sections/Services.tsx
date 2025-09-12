'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { scrollToSection } from '@/lib/utils';
import { Calculator, Clock, Coins, DollarSign, Gem, Home, Shield, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Coins className="h-12 w-12 text-yellow-600" />,
      title: "Cash For Gold",
      description: "Get instant cash against your gold jewelry and ornaments with competitive interest rates and flexible repayment options.",
      features: ["Up to 85% of gold value", "Lowest interest rates", "No hidden charges"],
      color: "from-yellow-500 to-amber-600",
      action: () => scrollToSection("loan-calculator")
    },
    {
      icon: <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-400 to-slate-500 flex items-center justify-center">
        <Coins className="h-8 w-8 text-white" />
      </div>,
      title: "Cash For Silver",
      description: "Quick cash against your silver jewelry, coins, and artifacts with transparent pricing and fast approval.",
      features: ["Quick 15-min approval", "Fair market rates", "Safe storage"],
      color: "from-gray-400 to-slate-600",
      action: () => scrollToSection("contact")
    },
    {
      icon: <Gem className="h-12 w-12 text-amber-600" />,
      title: "Cash For Diamond",
      description: "Premium cash for diamond against certified diamonds and diamond jewelry with expert valuation and secure handling.",
      features: ["Expert valuation", "Premium rates", "Certified process"],
      color: "from-amber-500 to-yellow-600",
      action: () => scrollToSection("contact")
    }
  ];

  const additionalServices = [
    {
      icon: <Home className="h-8 w-8 text-amber-600" />,
      title: "Doorstep Service",
      description: "We come to your home for jewelry evaluation and cash fro gold processing for your convenience and security.",
      action: () => scrollToSection("doorstep-service")
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-600" />,
      title: "Quick Processing",
      description: "Get your cash for gold approved and cash in hand within 15 minutes of jewelry verification.",
      action: () => scrollToSection("loan-calculator")
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Secure Storage",
      description: "Your precious jewelry is stored in our high-security vaults with full insurance coverage.",
      action: () => scrollToSection("about")
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <DollarSign className="h-16 w-16 mx-auto mb-6 text-yellow-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your precious jewelry into instant cash with our trusted cash for gold services.
            We offer the most competitive rates in the market with complete transparency.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-2 border-yellow-200 hover:border-yellow-400 overflow-hidden cursor-pointer"
              onClick={service.action}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transform transition-all duration-300 hover:scale-105 text-white font-semibold rounded-full`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-yellow-200">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose <span className="text-amber-700">Viraj Jewellers?</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={service.title}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={service.action}
              >
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-yellow-200">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-amber-800 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Rates Highlight */}
        <div className="mt-12 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-white rounded-2xl p-8 text-center">
          <TrendingUp className="h-12 w-12 mx-auto mb-4 text-yellow-100" />
          <h3 className="text-2xl font-bold mb-4">
            Live Gold & Silver Rates
          </h3>
          <p className="text-yellow-100 mb-6 text-lg">
            Get real-time market rates updated every 5 minutes for accurate cash for gold valuations
          </p>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="inline-block w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-yellow-100">Live • Just updated</span>
          </div>
          <Button
            size="lg"
            onClick={() => scrollToSection('loan-calculator')}
            className="bg-white text-amber-700 hover:bg-yellow-50 font-bold py-3 px-8 rounded-full transform transition-all duration-300 hover:scale-105"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Calculate Cash For Gold Amount
          </Button>
        </div>
      </div>
    </section>
  );
}