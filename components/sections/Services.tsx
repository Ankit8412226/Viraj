'use client';

import { Coins, Gem, Award, Clock, Shield, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Services() {
  const services = [
    {
      icon: <Coins className="h-12 w-12 text-blue-600" />,
      title: "Gold Loans",
      description: "Get instant cash against your gold jewelry and ornaments with competitive interest rates and flexible repayment options.",
      features: ["Up to 85% of gold value", "Lowest interest rates", "No hidden charges"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <div className="h-12 w-12 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center">
        <Coins className="h-8 w-8 text-white" />
      </div>,
      title: "Silver Loans",
      description: "Quick cash loans against your silver jewelry, coins, and artifacts with transparent pricing and fast approval.",
      features: ["Quick 15-min approval", "Fair market rates", "Safe storage"],
      color: "from-slate-500 to-slate-700"
    },
    {
      icon: <Gem className="h-12 w-12 text-indigo-600" />,
      title: "Diamond Loans",
      description: "Premium loans against certified diamonds and diamond jewelry with expert valuation and secure handling.",
      features: ["Expert valuation", "Premium rates", "Certified process"],
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const additionalServices = [
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Doorstep Service",
      description: "We come to your home for jewelry evaluation and loan processing for your convenience and security."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Quick Processing",
      description: "Get your loan approved and cash in hand within 15 minutes of jewelry verification."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Secure Storage",
      description: "Your precious jewelry is stored in our high-security vaults with full insurance coverage."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your precious jewelry into instant cash with our trusted loan services. 
            We offer the most competitive rates in the market with complete transparency.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-2 border-blue-100 hover:border-blue-300 overflow-hidden"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose <span className="text-blue-700">Viraj Jewellers?</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={service.title}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-blue-800 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}