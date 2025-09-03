'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Gem, Scale } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface GoldCheckResult {
  transactionId: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  goldType: string;
  weight: number;
  purity: number;
  currentPrice: number;
  goldValue: number;
  marketValue: number;
  timestamp: string;
  status: string;
}

export default function GoldCheck() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    goldType: '',
    weight: '',
    purity: '',
    currentPrice: ''
  });
  const [result, setResult] = useState<GoldCheckResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentGoldPrice, setCurrentGoldPrice] = useState(65000); // Default price per gram

  const goldTypes = [
    { value: '24k', label: '24 Karat (Pure Gold)', purity: 99.9 },
    { value: '22k', label: '22 Karat', purity: 91.7 },
    { value: '18k', label: '18 Karat', purity: 75.0 },
    { value: '14k', label: '14 Karat', purity: 58.3 },
    { value: '10k', label: '10 Karat', purity: 41.7 }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Auto-fill purity based on gold type
    if (field === 'goldType') {
      const selectedType = goldTypes.find(type => type.value === value);
      if (selectedType) {
        setFormData(prev => ({ ...prev, purity: selectedType.purity.toString() }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/gold-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          weight: parseFloat(formData.weight),
          purity: parseFloat(formData.purity),
          currentPrice: parseFloat(formData.currentPrice)
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.data);
        toast.success('Gold check completed successfully!');
      } else {
        toast.error(data.error || 'Failed to process gold check');
      }
    } catch (error: any) {
      const message = error?.message || 'Network error. Please try again.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      goldType: '',
      weight: '',
      purity: '',
      currentPrice: ''
    });
    setResult(null);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Gold Purity Testing & Valuation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your gold tested for purity and receive an accurate market valuation.
            Our certified experts use advanced testing methods to ensure precise results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-6 w-6 text-amber-600" />
                Gold Check Form
              </CardTitle>
              <CardDescription>
                Enter your details and gold information for accurate testing and valuation
              </CardDescription>
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
                      type="text"
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

                  <div className="space-y-2">
                    <Label htmlFor="goldType">Gold Type</Label>
                    <Select value={formData.goldType} onValueChange={(value) => handleInputChange('goldType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gold type" />
                      </SelectTrigger>
                      <SelectContent>
                        {goldTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (grams)</Label>
                    <Input
                      id="weight"
                      type="number"
                      step="0.01"
                      placeholder="Enter weight in grams"
                      value={formData.weight}
                      onChange={(e) => handleInputChange('weight', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="purity">Purity (%)</Label>
                    <Input
                      id="purity"
                      type="number"
                      step="0.1"
                      placeholder="Enter purity percentage"
                      value={formData.purity}
                      onChange={(e) => handleInputChange('purity', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentPrice">Current Gold Price (₹/gram)</Label>
                    <Input
                      id="currentPrice"
                      type="number"
                      placeholder="Enter current gold price"
                      value={formData.currentPrice}
                      onChange={(e) => handleInputChange('currentPrice', e.target.value)}
                      required
                    />
                    <p className="text-sm text-gray-500">
                      Current market price: ₹{currentGoldPrice.toLocaleString()}/gram
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white" disabled={loading}>
                    {loading ? 'Processing...' : 'Check Gold Value'}
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
            {result && (
              <Card className="shadow-lg border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <CheckCircle className="h-6 w-6" />
                    Gold Check Results
                  </CardTitle>
                  <CardDescription className="text-green-700">
                    Transaction ID: {result.transactionId}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-600">Gold Value</p>
                      <p className="text-xl font-bold text-green-800">
                        ₹{result.goldValue.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-600">Market Value</p>
                      <p className="text-xl font-bold text-blue-800">
                        ₹{result.marketValue.toLocaleString()}
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
                      <span className="text-gray-600">Gold Type:</span>
                      <Badge variant="secondary">{result.goldType}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weight:</span>
                      <span className="font-medium">{result.weight}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Purity:</span>
                      <span className="font-medium">{result.purity}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Price:</span>
                      <span className="font-medium">₹{result.currentPrice}/gram</span>
                    </div>
                  </div>

                  <Alert>
                    <Gem className="h-4 w-4" />
                    <AlertDescription>
                      Your gold has been successfully evaluated and saved to our database. The market value represents the estimated selling price.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            )}

            {/* Features */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Why Choose Our Gold Testing?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Certified Testing</h4>
                    <p className="text-sm text-gray-600">ISO certified testing methods for accurate results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Instant Results</h4>
                    <p className="text-sm text-gray-600">Get your gold value calculated in real-time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Market Rates</h4>
                    <p className="text-sm text-gray-600">Updated with current market gold prices</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
