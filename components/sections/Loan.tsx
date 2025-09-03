'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Calculator, CheckCircle, Info, RefreshCw, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface LoanResult {
  transactionId: string;
  customerName: string;
  customerPhone: string;
  goldWeight: number;
  goldPurity: number;
  loanAmount: number;
  emi: number;
  totalAmount: number;
  ltvRatio: number;
  status: string;
}

export default function LoanCalculatorPage() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    goldWeight: '',
    goldPurity: '22',
    currentGoldPrice: '6500',
    loanAmount: '',
    interestRate: '12',
    tenureMonths: '12'
  });
  const [result, setResult] = useState<LoanResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [goldValue, setGoldValue] = useState(0);
  const [maxLoanAmount, setMaxLoanAmount] = useState(0);

  // Gold rates
  const goldRates = {
    '24': 6500,
    '22': 6200,
    '18': 4650
  };

  const calculateValues = () => {
    if (formData.goldWeight && formData.goldPurity && formData.currentGoldPrice) {
      const weight = parseFloat(formData.goldWeight);
      const purity = parseFloat(formData.goldPurity);
      const price = parseFloat(formData.currentGoldPrice);
      
      const totalGoldValue = weight * (purity / 100) * price;
      const maxLoan = totalGoldValue * 0.85; // 85% of gold value
      
      setGoldValue(Math.round(totalGoldValue));
      setMaxLoanAmount(Math.round(maxLoan));
      
      if (!formData.loanAmount) {
        setFormData(prev => ({ ...prev, loanAmount: Math.round(maxLoan).toString() }));
      }
    }
  };

  useEffect(() => {
    calculateValues();
  }, [formData.goldWeight, formData.goldPurity, formData.currentGoldPrice]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/loan-calculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          goldWeight: parseFloat(formData.goldWeight),
          goldPurity: parseFloat(formData.goldPurity),
          currentGoldPrice: parseFloat(formData.currentGoldPrice),
          loanAmount: parseFloat(formData.loanAmount),
          interestRate: parseFloat(formData.interestRate),
          tenureMonths: parseInt(formData.tenureMonths)
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.data);
        toast.success('Loan calculation completed successfully!');
      } else {
        toast.error(data.error || 'Failed to calculate loan');
      }
    } catch (error: any) {
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      goldWeight: '',
      goldPurity: '22',
      currentGoldPrice: '6500',
      loanAmount: '',
      interestRate: '12',
      tenureMonths: '12'
    });
    setResult(null);
    setGoldValue(0);
    setMaxLoanAmount(0);
  };

  return (
    <div id='loan-calculator' className="py-16 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Calculator className="h-16 w-16 mx-auto mb-6 text-yellow-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gold Loan Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your loan amount, EMI, and get instant approval for gold loans
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-amber-600" />
                Loan Calculator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Customer Details */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Customer Information</h4>
                  
                  <div className="space-y-2">
                    <Label htmlFor="customerName">Full Name *</Label>
                    <Input
                      id="customerName"
                      placeholder="Enter your full name"
                      value={formData.customerName}
                      onChange={(e) => handleInputChange('customerName', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customerPhone">Phone Number *</Label>
                    <Input
                      id="customerPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.customerPhone}
                      onChange={(e) => handleInputChange('customerPhone', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customerEmail">Email (Optional)</Label>
                    <Input
                      id="customerEmail"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.customerEmail}
                      onChange={(e) => handleInputChange('customerEmail', e.target.value)}
                    />
                  </div>
                </div>

                {/* Gold Details */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Gold Information</h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="goldWeight">Weight (grams) *</Label>
                      <Input
                        id="goldWeight"
                        type="number"
                        step="0.01"
                        placeholder="Enter weight"
                        value={formData.goldWeight}
                        onChange={(e) => handleInputChange('goldWeight', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="goldPurity">Purity (%) *</Label>
                      <Select value={formData.goldPurity} onValueChange={(value) => handleInputChange('goldPurity', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select purity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="75">18K Gold (75%)</SelectItem>
                          <SelectItem value="91.7">22K Gold (91.7%)</SelectItem>
                          <SelectItem value="99.9">24K Gold (99.9%)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentGoldPrice">Current Gold Price (₹/gram) *</Label>
                    <Input
                      id="currentGoldPrice"
                      type="number"
                      placeholder="Enter current gold price"
                      value={formData.currentGoldPrice}
                      onChange={(e) => handleInputChange('currentGoldPrice', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="loanAmount">Loan Amount (₹) *</Label>
                      <Input
                        id="loanAmount"
                        type="number"
                        placeholder="Enter loan amount"
                        value={formData.loanAmount}
                        onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                        required
                      />
                      {maxLoanAmount > 0 && (
                        <p className="text-sm text-gray-500">
                          Max: ₹{maxLoanAmount.toLocaleString()}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tenureMonths">Tenure (Months) *</Label>
                      <Select value={formData.tenureMonths} onValueChange={(value) => handleInputChange('tenureMonths', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select tenure" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">6 Months</SelectItem>
                          <SelectItem value="12">12 Months</SelectItem>
                          <SelectItem value="18">18 Months</SelectItem>
                          <SelectItem value="24">24 Months</SelectItem>
                          <SelectItem value="36">36 Months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white" 
                    disabled={loading}
                  >
                    {loading ? 'Calculating...' : 'Calculate Loan'}
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Reset
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Gold Value Display */}
            {goldValue > 0 && (
              <Card className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">Total Gold Value</h3>
                  <p className="text-3xl font-bold">₹{goldValue.toLocaleString('en-IN')}</p>
                  <p className="text-yellow-100 text-sm mt-2">
                    Max Loan: ₹{maxLoanAmount.toLocaleString('en-IN')} (85% of gold value)
                  </p>
                </CardContent>
              </Card>
            )}

            {result && (
              <Card className="shadow-lg border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <CheckCircle className="h-6 w-6" />
                    Loan Calculation Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-600">Monthly EMI</p>
                      <p className="text-xl font-bold text-blue-800">
                        ₹{result.emi.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-600">Total Amount</p>
                      <p className="text-xl font-bold text-green-800">
                        ₹{result.totalAmount.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Customer:</span>
                      <span className="font-medium">{result.customerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-medium">{result.customerPhone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gold Weight:</span>
                      <span className="font-medium">{result.goldWeight}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">LTV Ratio:</span>
                      <span className="font-medium">{result.ltvRatio}%</span>
                    </div>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      Your loan application has been processed and saved. Our team will contact you within 24 hours.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            )}

            {/* Information Cards */}
            <div className="space-y-4">
              <Card className="bg-white shadow-lg border border-yellow-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-amber-700">Best Rates</h3>
                  <p className="text-gray-600">We offer the most competitive interest rates starting from 12% per annum.</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-yellow-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-amber-700">Flexible Tenure</h3>
                  <p className="text-gray-600">Choose from 6 to 36 months loan tenure as per your convenience.</p>
                </CardContent>
              </Card>
            </div>
          </div>
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