'use client';

import { Calculator, Shield, Clock, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const [goldWeight, setGoldWeight] = useState('');
  const [goldPurity, setGoldPurity] = useState('22');
  const [loanAmount, setLoanAmount] = useState(0);

  // Current gold rate per gram (22K)
  const goldRatePerGram = 5800;
  const loanPercentage = 0.75; // 75% of gold value

  const calculateLoan = () => {
    if (goldWeight) {
      const weight = parseFloat(goldWeight);
      const purityMultiplier = goldPurity === '24' ? 1 : goldPurity === '22' ? 0.916 : 0.75;
      const goldValue = weight * goldRatePerGram * purityMultiplier;
      const maxLoan = goldValue * loanPercentage;
      setLoanAmount(Math.round(maxLoan));
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="block text-blue-100">Instant Cash</span>
                <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Against Your
                </span>
                <span className="block text-yellow-400 font-extrabold">
                  Precious Jewelry
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                Get immediate cash loans against your gold, silver, and diamond jewelry. 
                Trusted by 50,000+ customers with doorstep service available.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">RBI Registered</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">15 Min Approval</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Since 1985</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Get Instant Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Call: +91-9876543210
              </Button>
            </div>

            {/* Service Types */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <img src="https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop" alt="Gold" className="w-8 h-8 rounded object-cover" />
                </div>
                <p className="text-sm font-medium text-blue-200">Gold Loans</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg flex items-center justify-center">
                  <img src="https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop" alt="Silver" className="w-8 h-8 rounded object-cover" />
                </div>
                <p className="text-sm font-medium text-blue-200">Silver Loans</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <img src="https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop" alt="Diamond" className="w-8 h-8 rounded object-cover" />
                </div>
                <p className="text-sm font-medium text-blue-200">Diamond Loans</p>
              </div>
            </div>
          </div>

          {/* Right Content - Loan Calculator */}
          <div className="lg:pl-8">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Calculator className="h-6 w-6 mr-3" />
                  Gold Loan Calculator
                </CardTitle>
                <p className="text-blue-100">Calculate your loan amount instantly</p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Gold Weight (in grams)
                  </label>
                  <Input
                    type="number"
                    placeholder="Enter weight in grams"
                    value={goldWeight}
                    onChange={(e) => {
                      setGoldWeight(e.target.value);
                      if (e.target.value) {
                        const weight = parseFloat(e.target.value);
                        const purityMultiplier = goldPurity === '24' ? 1 : goldPurity === '22' ? 0.916 : 0.75;
                        const goldValue = weight * goldRatePerGram * purityMultiplier;
                        const maxLoan = goldValue * loanPercentage;
                        setLoanAmount(Math.round(maxLoan));
                      } else {
                        setLoanAmount(0);
                      }
                    }}
                    className="text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Gold Purity
                  </label>
                  <select 
                    value={goldPurity}
                    onChange={(e) => {
                      setGoldPurity(e.target.value);
                      if (goldWeight) {
                        const weight = parseFloat(goldWeight);
                        const purityMultiplier = e.target.value === '24' ? 1 : e.target.value === '22' ? 0.916 : 0.75;
                        const goldValue = weight * goldRatePerGram * purityMultiplier;
                        const maxLoan = goldValue * loanPercentage;
                        setLoanAmount(Math.round(maxLoan));
                      }
                    }}
                    className="w-full p-3 text-lg border-2 border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white"
                  >
                    <option value="18">18K Gold</option>
                    <option value="22">22K Gold</option>
                    <option value="24">24K Gold</option>
                  </select>
                </div>

                {/* Current Rates */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Today's Rates</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">22K Gold:</span>
                      <span className="font-bold text-blue-600 ml-2">₹5,800/g</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Loan Rate:</span>
                      <span className="font-bold text-green-600 ml-2">75%</span>
                    </div>
                  </div>
                </div>

                {/* Loan Amount Display */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 text-center text-white">
                  <p className="text-sm font-medium mb-2">Maximum Loan Amount</p>
                  <p className="text-3xl font-bold">
                    ₹{loanAmount.toLocaleString('en-IN')}
                  </p>
                  {goldWeight && (
                    <p className="text-green-100 text-sm mt-2">
                      Based on {goldWeight}g of {goldPurity}K gold
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-lg transform transition-all duration-300 hover:scale-105"
                  >
                    Apply for This Loan
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 rounded-lg transition-all duration-300"
                  >
                    Schedule Doorstep Service
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-600">
                  <p>✓ No hidden charges • ✓ Instant approval • ✓ Secure process</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Banner */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-500 rounded-lg flex items-center justify-center">
              <img src="https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop" alt="Gold" className="w-6 h-6 rounded object-cover" />
            </div>
            <h3 className="font-bold mb-2">Gold Loans</h3>
            <p className="text-sm text-blue-200">Up to 75% of gold value</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 bg-gray-500 rounded-lg flex items-center justify-center">
              <img src="https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop" alt="Silver" className="w-6 h-6 rounded object-cover" />
            </div>
            <h3 className="font-bold mb-2">Silver Loans</h3>
            <p className="text-sm text-blue-200">Quick processing</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 bg-indigo-500 rounded-lg flex items-center justify-center">
              <img src="https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop" alt="Diamond" className="w-6 h-6 rounded object-cover" />
            </div>
            <h3 className="font-bold mb-2">Diamond Loans</h3>
            <p className="text-sm text-blue-200">Premium rates</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 bg-green-500 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">Doorstep Service</h3>
            <p className="text-sm text-blue-200">At your convenience</p>
          </div>
        </div>
      </div>
    </section>
  );
}