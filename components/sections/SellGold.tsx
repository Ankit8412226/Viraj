'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Award, Calculator, Camera, CheckCircle, Clock, DollarSign, Shield, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface SellGoldResult {
  transactionId: string;
  customerName: string;
  customerPhone: string;
  goldType: string;
  weight: number;
  sellingPrice: number;
  goldValue: number;
  status: string;
}

export default function SellGoldPage() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    customerAddress: '',
    goldType: '',
    weight: '',
    purity: '',
    currentPrice: '6500',
    sellingPrice: '',
    idProof: '',
    idNumber: ''
  });
  const [result, setResult] = useState<SellGoldResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [estimatedValue, setEstimatedValue] = useState(0);

  // Current market rates
  const goldRates = {
    '24k': { rate: 6500, purity: 99.9 },
    '22k': { rate: 6200, purity: 91.7 },
    '18k': { rate: 4650, purity: 75.0 },
    '14k': { rate: 3600, purity: 58.3 },
    '10k': { rate: 2580, purity: 41.7 }
  };

  const calculateValue = () => {
    if (formData.weight && formData.goldType && formData.currentPrice) {
      const weight = parseFloat(formData.weight);
      const price = parseFloat(formData.currentPrice);
      const goldInfo = goldRates[formData.goldType as keyof typeof goldRates];
      
      if (goldInfo) {
        const grossValue = weight * price;
        const deductions = grossValue * 0.20; // 20% total deductions
        const netValue = grossValue - deductions;
        
        setEstimatedValue(Math.round(netValue));
        setFormData(prev => ({ 
          ...prev, 
          purity: goldInfo.purity.toString(),
          sellingPrice: Math.round(netValue).toString()
        }));
      }
    }
  };

  useEffect(() => {
    calculateValue();
  }, [formData.weight, formData.goldType, formData.currentPrice]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/gold-sell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          weight: parseFloat(formData.weight),
          purity: parseFloat(formData.purity),
          currentPrice: parseFloat(formData.currentPrice),
          sellingPrice: parseFloat(formData.sellingPrice)
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.data);
        toast.success('Gold selling request submitted successfully!');
      } else {
        toast.error(data.error || 'Failed to submit gold selling request');
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
      customerAddress: '',
      goldType: '',
      weight: '',
      purity: '',
      currentPrice: '6500',
      sellingPrice: '',
      idProof: '',
      idNumber: ''
    });
    setResult(null);
    setEstimatedValue(0);
  };

  const currentRates = [
    { karat: '24K', rate: goldRates['24k'].rate, change: '+2.3%', color: 'text-green-600' },
    { karat: '22K', rate: goldRates['22k'].rate, change: '+2.1%', color: 'text-green-600' },
    { karat: '18K', rate: goldRates['18k'].rate, change: '+1.8%', color: 'text-green-600' },
    { karat: '14K', rate: goldRates['14k'].rate, change: '+1.5%', color: 'text-green-600' },
    { karat: '10K', rate: goldRates['10k'].rate, change: '+1.2%', color: 'text-green-600' },
  ];

  return (
    <div id='sell-gold' className="py-16 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <DollarSign className="h-16 w-16 mx-auto mb-6 text-yellow-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sell Your Old Gold
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the best market prices for your old gold jewelry with instant cash payment
          </p>
        </div>

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

          {/* Form and Results */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sell Gold Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-amber-600" />
                  Sell Gold Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Customer Details */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Customer Information</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
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

                    <div className="space-y-2">
                      <Label htmlFor="customerAddress">Address</Label>
                      <Textarea
                        id="customerAddress"
                        placeholder="Enter your address"
                        value={formData.customerAddress}
                        onChange={(e) => handleInputChange('customerAddress', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Gold Details */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Gold Information</h4>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="goldType">Gold Type *</Label>
                        <Select value={formData.goldType} onValueChange={(value) => handleInputChange('goldType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gold type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="24k">24K Gold (99.9%)</SelectItem>
                            <SelectItem value="22k">22K Gold (91.7%)</SelectItem>
                            <SelectItem value="18k">18K Gold (75.0%)</SelectItem>
                            <SelectItem value="14k">14K Gold (58.3%)</SelectItem>
                            <SelectItem value="10k">10K Gold (41.7%)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="weight">Weight (grams) *</Label>
                        <Input
                          id="weight"
                          type="number"
                          step="0.01"
                          placeholder="Enter weight"
                          value={formData.weight}
                          onChange={(e) => handleInputChange('weight', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentPrice">Current Gold Price (₹/gram) *</Label>
                      <Input
                        id="currentPrice"
                        type="number"
                        placeholder="Enter current gold price"
                        value={formData.currentPrice}
                        onChange={(e) => handleInputChange('currentPrice', e.target.value)}
                        required
                      />
                    </div>

                    {estimatedValue > 0 && (
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2">Estimated Value:</h4>
                        <p className="text-2xl font-bold text-green-700">₹{estimatedValue.toLocaleString()}</p>
                        <p className="text-sm text-green-600 mt-1">After deductions (making charges & wastage)</p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white" 
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : 'Submit for Selling'}
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Reset
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Results */}
            {result && (
              <Card className="shadow-lg border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <CheckCircle className="h-6 w-6" />
                    Gold Selling Request Submitted
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transaction ID:</span>
                      <span className="font-medium">{result.transactionId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Customer:</span>
                      <span className="font-medium">{result.customerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gold Type:</span>
                      <span className="font-medium">{result.goldType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weight:</span>
                      <span className="font-medium">{result.weight}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Selling Price:</span>
                      <span className="font-medium text-green-600">₹{result.sellingPrice.toLocaleString()}</span>
                    </div>
                  </div>

                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Your gold selling request has been submitted successfully. Our team will contact you within 24 hours to schedule the evaluation.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            )}

            {/* Why Choose Us */}
            <div className="grid md:grid-cols-2 gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}