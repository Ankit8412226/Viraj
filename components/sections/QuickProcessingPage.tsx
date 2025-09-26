"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FloatingActions from "@/components/sections/FloatingActions";
import { Clock, Zap, CheckCircle, Timer, Smartphone, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function QuickProcessingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <Timer className="w-10 h-10 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">15 Minutes</span> Processing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fastest gold loan processing! Get your loan application approved in just 15 minutes and receive money instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Processing Steps */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to get a loan in 15 minutes?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="border-2 border-blue-200 shadow-lg relative">
              <div className="absolute -top-4 left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <CardHeader className="pt-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Instant Application</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  0-2 min
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Submit your application instantly via our mobile app or WhatsApp. Only basic details are required.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-2 border-blue-200 shadow-lg relative">
              <div className="absolute -top-4 left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <CardHeader className="pt-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>AI Verification</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  2-8 min
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our AI system instantly calculates the value of your gold from photos and verifies documents.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-2 border-blue-200 shadow-lg relative">
              <div className="absolute -top-4 left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <CardHeader className="pt-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Instant Approval</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  8-15 min
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Once approved, the money is transferred to your account instantly. No waiting!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Speed Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How is it so fast?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Advanced AI Technology</h3>
                    <p className="text-gray-600">Gold recognition and valuation in seconds using advanced AI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Digital Documentation</h3>
                    <p className="text-gray-600">Fully digital process, no paperwork required</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Pre-approved Limits</h3>
                    <p className="text-gray-600">Pre-set limits for instant approval</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Smartphone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Mobile-First Approach</h3>
                    <p className="text-gray-600">Complete every step via mobile app</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <div className="text-center">
                <Clock className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Speed Records
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">5</div>
                    <div className="text-sm text-gray-600">Min Fastest</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">15</div>
                    <div className="text-sm text-gray-600">Min Average</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">99%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-gray-600">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What is required for 15-minute processing?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Valid ID</h3>
                <p className="text-sm text-gray-600">Aadhaar Card or PAN Card</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Mobile Number</h3>
                <p className="text-sm text-gray-600">For OTP verification</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                </div>
                <h3 className="font-semibold mb-2">Gold Jewelry</h3>
                <p className="text-sm text-gray-600">18K or above</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Good Photos</h3>
                <p className="text-sm text-gray-600">Clear photos of the gold</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need a loan in 15 minutes?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start now and see how fast you can get the money!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+919876543210">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Timer className="w-5 h-5 mr-2" />
                Start Now
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Go to Home Page
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
