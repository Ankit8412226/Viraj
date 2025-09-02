'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Calculator, Info, RefreshCw, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LoanCalculatorPage() {
  const [goldWeight, setGoldWeight] = useState('');
  const [goldPurity, setGoldPurity] = useState('22');
  const [loanAmount, setLoanAmount] = useState(0);
  const [goldValue, setGoldValue] = useState(0);
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [loanTenure, setLoanTenure] = useState('12');

  // Current rates
  const goldRates = {
    '24': 6200,
    '22': 5800,
    '18': 4650
  };

  const interestRate = 12; // 12% per annum
  const loanPercentage = 0.85; // 85% of gold value

  const calculateLoan = () => {
    if (goldWeight) {
      const weight = parseFloat(goldWeight);
      const ratePerGram = goldRates[goldPurity as keyof typeof goldRates];
      const totalGoldValue = weight * ratePerGram;
      const maxLoan = totalGoldValue * loanPercentage;

      setGoldValue(Math.round(totalGoldValue));
      setLoanAmount(Math.round(maxLoan));

      // Calculate EMI
      const principal = maxLoan;
      const monthlyRate = interestRate / 100 / 12;
      const tenure = parseInt(loanTenure);
      const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
                  (Math.pow(1 + monthlyRate, tenure) - 1);
      setMonthlyEMI(Math.round(emi));
    }
  };

  useEffect(() => {
    calculateLoan();
  }, [goldWeight, goldPurity, loanTenure]);

  return (
    <div id='loan-calculator' className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Calculator className="h-16 w-16 mx-auto mb-6 text-yellow-100" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gold Loan Calculator
          </h1>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
            Calculate your loan amount, EMI, and get instant approval for gold loans
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Section */}
          <div>
            <Card className="bg-white shadow-xl border border-yellow-200">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Calculator className="h-6 w-6 mr-3" />
                  Calculate Your Loan
                </CardTitle>
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
                    onChange={(e) => setGoldWeight(e.target.value)}
                    className="text-lg border-2 border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Gold Purity
                  </label>
                  <select
                    value={goldPurity}
                    onChange={(e) => setGoldPurity(e.target.value)}
                    className="w-full p-3 text-lg border-2 border-yellow-200 rounded-md focus:border-yellow-500 focus:ring-yellow-500 bg-white"
                  >
                    <option value="18">18K Gold (₹{goldRates['18']}/g)</option>
                    <option value="22">22K Gold (₹{goldRates['22']}/g)</option>
                    <option value="24">24K Gold (₹{goldRates['24']}/g)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Loan Tenure (months)
                  </label>
                  <select
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(e.target.value)}
                    className="w-full p-3 text-lg border-2 border-yellow-200 rounded-md focus:border-yellow-500 focus:ring-yellow-500 bg-white"
                  >
                    <option value="6">6 Months</option>
                    <option value="12">12 Months</option>
                    <option value="18">18 Months</option>
                    <option value="24">24 Months</option>
                    <option value="36">36 Months</option>
                  </select>
                </div>

                <Button
                  onClick={calculateLoan}
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold py-3 rounded-lg transform transition-all duration-300 hover:scale-105"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Recalculate
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Gold Value */}
            <Card className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Total Gold Value</h3>
                <p className="text-3xl font-bold">₹{goldValue.toLocaleString('en-IN')}</p>
                {goldWeight && (
                  <p className="text-yellow-100 text-sm mt-2">
                    {goldWeight}g of {goldPurity}K gold @ ₹{goldRates[goldPurity as keyof typeof goldRates]}/g
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Loan Amount */}
            <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Maximum Loan Amount</h3>
                <p className="text-3xl font-bold">₹{loanAmount.toLocaleString('en-IN')}</p>
                <p className="text-green-100 text-sm mt-2">
                  Up to 85% of gold value
                </p>
              </CardContent>
            </Card>

            {/* EMI Calculation */}
            <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Monthly EMI</h3>
                <p className="text-3xl font-bold">₹{monthlyEMI.toLocaleString('en-IN')}</p>
                <p className="text-blue-100 text-sm mt-2">
                  @ {interestRate}% per annum for {loanTenure} months
                </p>
              </CardContent>
            </Card>

            {/* Loan Details */}
            <Card className="bg-white shadow-xl border border-yellow-200">
              <CardHeader>
                <CardTitle className="text-amber-700 flex items-center">
                  <Info className="h-5 w-5 mr-2" />
                  Loan Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-semibold">1% + GST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Rate</span>
                  <span className="font-semibold">{interestRate}% per annum</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan-to-Value</span>
                  <span className="font-semibold">Up to 85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Approval Time</span>
                  <span className="font-semibold">15 minutes</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Payable</span>
                    <span className="text-amber-700">
                      ₹{(monthlyEMI * parseInt(loanTenure)).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold py-4 rounded-lg transform transition-all duration-300 hover:scale-105 text-lg"
              >
                Apply for This Loan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="w-full border-2 border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white font-bold py-3 rounded-lg transition-all duration-300"
              >
                Schedule Doorstep Service
              </Button>
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-lg border border-yellow-200">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-amber-700">Best Rates</h3>
              <p className="text-gray-600">We offer the most competitive interest rates in the market starting from 12% per annum.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-yellow-200">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-amber-700">Flexible Tenure</h3>
              <p className="text-gray-600">Choose from 6 to 36 months loan tenure as per your convenience and repayment capacity.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-yellow-200">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-amber-700">Quick Process</h3>
              <p className="text-gray-600">Get your loan approved and disbursed within 15 minutes of gold verification.</p>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h4 className="font-bold text-amber-800 mb-3">Important Notes:</h4>
          <ul className="text-sm text-amber-700 space-y-2">
            <li>• Interest rates are subject to change based on market conditions</li>
            <li>• Processing fee of 1% + GST will be deducted from loan amount</li>
            <li>• Gold will be stored in our secure, insured vaults</li>
            <li>• Loan amount depends on gold purity and current market rates</li>
            <li>• Early closure of loan is allowed with minimal charges</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
