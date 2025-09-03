'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Award, Calculator, Camera, Clock, DollarSign, Shield, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function SellGoldPage() {
  const [goldWeight, setGoldWeight] = useState('');
  const [goldPurity, setGoldPurity] = useState('22');
  const [estimatedValue, setEstimatedValue] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  // Current market rates
  const goldRates = {
    '24': 6200,
    '22': 5800,
    '18': 4650,
    '14': 3600,
    '10': 2580
  };

  const makingChargeDeduction = 0.15; // 15% deduction for making charges
  const wastageDeduction = 0.05; // 5% wastage

  const calculateValue = () => {
    if (goldWeight) {
      const weight = parseFloat(goldWeight);
      const ratePerGram = goldRates[goldPurity as keyof typeof goldRates];
      const grossValue = weight * ratePerGram;
      const totalDeduction = grossValue * (makingChargeDeduction + wastageDeduction);
      const netValue = grossValue - totalDeduction;

      setEstimatedValue(Math.round(grossValue));
      setDeductions(Math.round(totalDeduction));
      setFinalAmount(Math.round(netValue));
    }
  };

  useEffect(() => {
    calculateValue();
  }, [goldWeight, goldPurity]);

  const currentRates = [
    { karat: '24K', rate: goldRates['24'], change: '+2.3%', color: 'text-green-600' },
    { karat: '22K', rate: goldRates['22'], change: '+2.1%', color: 'text-green-600' },
    { karat: '18K', rate: goldRates['18'], change: '+1.8%', color: 'text-green-600' },
    { karat: '14K', rate: goldRates['14'], change: '+1.5%', color: 'text-green-600' },
    { karat: '10K', rate: goldRates['10'], change: '+1.2%', color: 'text-green-600' },
  ];

  return (
    <div id='#sell-gold' className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 ">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <DollarSign className="h-16 w-16 mx-auto mb-6 text-yellow-100" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sell Your Old Gold
          </h1>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
            Get the best market prices for your old gold jewelry with instant cash payment
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Gold Rates */}
          <div className="lg:col-span-1">
            <Card className="bg-white shadow-xl border border-yellow-200 sticky top-8">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white">
                <CardTitle className="text-xl font-bold flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Live Gold Rates
                </CardTitle>
                <p className="text-yellow-100 text-sm">Updated every 5 minutes</p>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="text-center mb-4">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-sm text-gray-600">Live • Just updated</span>
                </div>

                {currentRates.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 border border-yellow-200">
                    <div>
                      <p className="font-semibold text-gray-800">{rate.karat} Gold</p>
                      <p className="text-xs text-gray-600">Per gram</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-amber-700">₹{rate.rate}</p>
                      <p className={`text-xs font-medium ${rate.color}`}>
                        {rate.change} ↗️
                      </p>
                    </div>
                  </div>
                ))}

                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-700 text-center font-medium">
                    🔥 Prices are at 6-month high!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calculator and Process */}
          <div className="lg:col-span-2 space-y-8">
            {/* Value Calculator */}
            <Card className="bg-white shadow-xl border border-yellow-200">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Calculator className="h-6 w-6 mr-3" />
                  Estimate Your Gold Value
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Gold Weight (in grams)
                    </label>
                    <Input
                      type="number"
                      placeholder="Enter weight"
                      value={goldWeight}
                      onChange={(e) => setGoldWeight(e.target.value)}
                      className="text-lg border-2 border-yellow-200 focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Gold Purity/Karat
                    </label>
                    <select
                      value={goldPurity}
                      onChange={(e) => setGoldPurity(e.target.value)}
                      className="w-full p-3 text-lg border-2 border-yellow-200 rounded-md focus:border-yellow-500 bg-white"
                    >
                      <option value="10">10K Gold (₹{goldRates['10']}/g)</option>
                      <option value="14">14K Gold (₹{goldRates['14']}/g)</option>
                      <option value="18">18K Gold (₹{goldRates['18']}/g)</option>
                      <option value="22">22K Gold (₹{goldRates['22']}/g)</option>
                      <option value="24">24K Gold (₹{goldRates['24']}/g)</option>
                    </select>
                  </div>
                </div>

                {/* Value Breakdown */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                    <CardContent className="p-4 text-center">
                      <h4 className="text-sm font-medium mb-1">Gross Value</h4>
                      <p className="text-2xl font-bold">₹{estimatedValue.toLocaleString('en-IN')}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-red-500 to-pink-600 text-white">
                    <CardContent className="p-4 text-center">
                      <h4 className="text-sm font-medium mb-1">Deductions</h4>
                      <p className="text-2xl font-bold">₹{deductions.toLocaleString('en-IN')}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                    <CardContent className="p-4 text-center">
                      <h4 className="text-sm font-medium mb-1">Final Amount</h4>
                      <p className="text-2xl font-bold">₹{finalAmount.toLocaleString('en-IN')}</p>
                    </CardContent>
                  </Card>
                </div>

                {goldWeight && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 mb-2">Value Breakdown:</h4>
                    <div className="text-sm text-amber-700 space-y-1">
                      <div className="flex justify-between">
                        <span>{goldWeight}g × ₹{goldRates[goldPurity as keyof typeof goldRates]}/g</span>
                        <span>₹{estimatedValue.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Making charges (15%)</span>
                        <span>- ₹{Math.round(estimatedValue * makingChargeDeduction).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wastage (5%)</span>
                        <span>- ₹{Math.round(estimatedValue * wastageDeduction).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="border-t border-amber-300 pt-2 flex justify-between font-bold">
                        <span>Final Amount</span>
                        <span>₹{finalAmount.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Selling Process */}
            <Card className="bg-white shadow-xl border border-yellow-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-amber-700">
                  How to Sell Your Gold
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-bold text-gray-800">Schedule Appointment</h4>
                        <p className="text-gray-600 text-sm">Book a free home visit or visit our store</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-bold text-gray-800">Gold Testing</h4>
                        <p className="text-gray-600 text-sm">We test purity using advanced equipment</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-bold text-gray-800">Price Quote</h4>
                        <p className="text-gray-600 text-sm">Get best market rate quote instantly</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                      <div>
                        <h4 className="font-bold text-gray-800">Documentation</h4>
                        <p className="text-gray-600 text-sm">Complete simple paperwork</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                      <div>
                        <h4 className="font-bold text-gray-800">Instant Payment</h4>
                        <p className="text-gray-600 text-sm">Receive cash or bank transfer immediately</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">✓</div>
                      <div>
                        <h4 className="font-bold text-green-700">Transaction Complete</h4>
                        <p className="text-gray-600 text-sm">Get receipt and enjoy your cash!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid md:grid-cols-2 gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold py-4 rounded-lg transform transition-all duration-300 hover:scale-105 text-lg"
              >
                <Camera className="mr-2 h-5 w-5" />
                Schedule Home Visit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white font-bold py-4 rounded-lg transition-all duration-300 text-lg"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Visit Our Store
              </Button>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-amber-700 mb-12">
            Why Sell Gold to Viraj Jewellers?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-white shadow-lg border border-yellow-200 text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Best Prices</h3>
                <p className="text-gray-600 text-sm">Market-leading rates updated every 5 minutes</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border border-yellow-200 text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">100% Safe</h3>
                <p className="text-gray-600 text-sm">Secure transactions with proper documentation</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border border-yellow-200 text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Instant Payment</h3>
                <p className="text-gray-600 text-sm">Get cash or bank transfer immediately</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border border-yellow-200 text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Trusted Since 1985</h3>
                <p className="text-gray-600 text-sm">40+ years of experience and trust</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Documents Required */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-8">
          <h3 className="font-bold text-xl text-amber-800 mb-4">Documents Required:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-amber-700 mb-2">For Indian Citizens:</h4>
              <ul className="text-sm text-amber-600 space-y-1">
                <li>• Aadhaar Card (mandatory)</li>
                <li>• PAN Card</li>
                <li>• Bank Account Details</li>
                <li>• Purchase receipts (if available)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-700 mb-2">For NRIs:</h4>
              <ul className="text-sm text-amber-600 space-y-1">
                <li>• Passport</li>
                <li>• Overseas Citizen of India (OCI) card</li>
                <li>• NRE/NRO Bank Account Details</li>
                <li>• Address proof in India</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
