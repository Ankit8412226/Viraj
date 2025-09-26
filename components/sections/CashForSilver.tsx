import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Phone, TrendingUp } from 'lucide-react';

export default function CashForSilver() {
  return (
    <>
      <Helmet>
        <title>Cash For Silver in Lajpat Nagar Delhi | Best Silver Rates | Instant Payment</title>
        <meta name="description" content="Get instant cash for silver in Lajpat Nagar Delhi. Best rates for silver jewelry, coins, bars, utensils. Professional evaluation, immediate payment." />
        <meta name="keywords" content="cash for silver lajpat nagar, silver buyer delhi, sell silver lajpat nagar, silver coins buyer delhi" />
        <link rel="canonical" href="https://cashforgoldlajpatnagar.com/cash-for-silver" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8">
            <Link to="/" className="text-amber-600 hover:text-amber-700 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </nav>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mb-6">
              <span className="text-white text-2xl">⚪</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cash For Silver
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Best Silver Rates in Lajpat Nagar Delhi - Instant Cash for Your Silver Items
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <TrendingUp className="h-6 w-6 mr-3 text-gray-600" />
                    Premium Silver Buying Service
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <p>
                    Looking to sell your silver items in <strong>Lajpat Nagar Delhi</strong>? We offer the 
                    <strong>best cash for silver rates</strong> with immediate payment and professional evaluation. 
                    Whether you have silver jewelry, coins, bars, or utensils, we provide top market rates.
                  </p>
                  <p>
                    Our <strong>silver buying service in Lajpat Nagar</strong> includes comprehensive testing, 
                    accurate weighing, and transparent pricing. Get instant cash for all types of silver items 
                    with our trusted and secure process.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Current Silver Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-lg border">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-700 mb-2">₹107/gram</div>
                      <div className="text-green-600 font-medium">Today's Rate (85% of market value)</div>
                      <div className="text-sm text-gray-500 mt-2">Market Rate: ₹126/gram</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Silver Service Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-gray-500 to-slate-600 hover:from-gray-600 hover:to-slate-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Call: +91-9876543210
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}