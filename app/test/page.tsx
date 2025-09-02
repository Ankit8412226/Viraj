'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function TestPage() {
  const [results, setResults] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState<string | null>(null);

  const testGoldCheck = async () => {
    setLoading('gold-check');
    try {
      const response = await fetch('/api/gold-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          goldType: '22k',
          weight: 10.5,
          purity: 91.7,
          currentPrice: 65000
        })
      });
      const data = await response.json();
      setResults(prev => ({ ...prev, goldCheck: data }));
    } catch (error) {
      setResults(prev => ({ ...prev, goldCheck: { error: 'Failed to test API' } }));
    } finally {
      setLoading(null);
    }
  };

  const testGoldSell = async () => {
    setLoading('gold-sell');
    try {
      const response = await fetch('/api/gold-sell', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: 'Test Customer',
          customerPhone: '+91-9876543210',
          goldType: '18k',
          weight: 8.2,
          purity: 75.0,
          currentPrice: 65000,
          sellingPrice: 85000
        })
      });
      const data = await response.json();
      setResults(prev => ({ ...prev, goldSell: data }));
    } catch (error) {
      setResults(prev => ({ ...prev, goldSell: { error: 'Failed to test API' } }));
    } finally {
      setLoading(null);
    }
  };

  const testLoanCalculator = async () => {
    setLoading('loan');
    try {
      const response = await fetch('/api/loan-calculator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          goldWeight: 15.0,
          goldPurity: 91.7,
          currentGoldPrice: 65000,
          loanAmount: 50000,
          interestRate: 12.5,
          tenureMonths: 12
        })
      });
      const data = await response.json();
      setResults(prev => ({ ...prev, loan: data }));
    } catch (error) {
      setResults(prev => ({ ...prev, loan: { error: 'Failed to test API' } }));
    } finally {
      setLoading(null);
    }
  };

  const testContact = async () => {
    setLoading('contact');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          phone: '+91-9876543210',
          subject: 'Test Message',
          message: 'This is a test message to verify the contact API'
        })
      });
      const data = await response.json();
      setResults(prev => ({ ...prev, contact: data }));
    } catch (error) {
      setResults(prev => ({ ...prev, contact: { error: 'Failed to test API' } }));
    } finally {
      setLoading(null);
    }
  };

  const testDoorStepService = async () => {
    setLoading('doorstep');
    try {
      const response = await fetch('/api/doorstep-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: 'Test Customer',
          customerPhone: '+91-9876543210',
          customerEmail: 'test@example.com',
          serviceType: 'gold-check',
          address: '123 Test Street, Test City',
          preferredDate: '2024-01-20',
          preferredTime: '10:00 AM',
          additionalNotes: 'Test door-step service request'
        })
      });
      const data = await response.json();
      setResults(prev => ({ ...prev, doorstep: data }));
    } catch (error) {
      setResults(prev => ({ ...prev, doorstep: { error: 'Failed to test API' } }));
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">API Testing Page</h1>
          <p className="text-xl text-gray-600">Test all the API endpoints to ensure they're working correctly</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Gold Check Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Gold Check API
              </CardTitle>
              <CardDescription>Test the gold checking and valuation API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={testGoldCheck}
                disabled={loading === 'gold-check'}
                className="w-full"
              >
                {loading === 'gold-check' ? 'Testing...' : 'Test Gold Check API'}
              </Button>

              {results.goldCheck && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Response:</h4>
                  <pre className="text-xs overflow-auto">
                    {JSON.stringify(results.goldCheck, null, 2)}
                  </pre>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Gold Sell Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                Gold Sell API
              </CardTitle>
              <CardDescription>Test the gold selling submission API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={testGoldSell}
                disabled={loading === 'gold-sell'}
                className="w-full"
              >
                {loading === 'gold-sell' ? 'Testing...' : 'Test Gold Sell API'}
              </Button>

              {results.goldSell && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Response:</h4>
                  <pre className="text-xs overflow-auto">
                    {JSON.stringify(results.goldSell, null, 2)}
                  </pre>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Loan Calculator Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                Loan Calculator API
              </CardTitle>
              <CardDescription>Test the loan calculation API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={testLoanCalculator}
                disabled={loading === 'loan'}
                className="w-full"
              >
                {loading === 'loan' ? 'Testing...' : 'Test Loan Calculator API'}
              </Button>

              {results.loan && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Response:</h4>
                  <pre className="text-xs overflow-auto">
                    {JSON.stringify(results.loan, null, 2)}
                  </pre>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-600" />
                Contact API
              </CardTitle>
              <CardDescription>Test the contact form submission API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={testContact}
                disabled={loading === 'contact'}
                className="w-full"
              >
                {loading === 'contact' ? 'Testing...' : 'Test Contact API'}
              </Button>

              {results.contact && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Response:</h4>
                  <pre className="text-xs overflow-auto">
                    {JSON.stringify(results.contact, null, 2)}
                  </pre>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Door-Step Service Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Door-Step Service API
              </CardTitle>
              <CardDescription>Test the door-step service scheduling API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={testDoorStepService}
                disabled={loading === 'doorstep'}
                className="w-full"
              >
                {loading === 'doorstep' ? 'Testing...' : 'Test Door-Step Service API'}
              </Button>

              {results.doorstep && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Response:</h4>
                  <pre className="text-xs overflow-auto">
                    {JSON.stringify(results.doorstep, null, 2)}
                  </pre>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Status Summary */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>API Status Summary</CardTitle>
            <CardDescription>Overview of all API endpoint statuses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-medium text-green-800">Gold Check</h3>
                <Badge variant="secondary" className="mt-2">
                  {results.goldCheck ? 'Tested' : 'Not Tested'}
                </Badge>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-medium text-blue-800">Gold Sell</h3>
                <Badge variant="secondary" className="mt-2">
                  {results.goldSell ? 'Tested' : 'Not Tested'}
                </Badge>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-medium text-purple-800">Loan Calculator</h3>
                <Badge variant="secondary" className="mt-2">
                  {results.loan ? 'Tested' : 'Not Tested'}
                </Badge>
              </div>

              <div className="text-center p-4 bg-indigo-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <h3 className="font-medium text-indigo-800">Contact</h3>
                <Badge variant="secondary" className="mt-2">
                  {results.contact ? 'Tested' : 'Not Tested'}
                </Badge>
              </div>

              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <h3 className="font-medium text-emerald-800">Door-Step Service</h3>
                <Badge variant="secondary" className="mt-2">
                  {results.doorstep ? 'Tested' : 'Not Tested'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
