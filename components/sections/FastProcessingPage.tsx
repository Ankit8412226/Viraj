"use client";

import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FloatingActions from "@/components/sections/FloatingActions";
import { Clock, Zap, CheckCircle2, Timer, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function FastProcessingPage() {
  return (
    <>
      <Helmet>
        <title>15 Minute Gold Processing - Instant Cash for Gold Lajpat Nagar | Viraj Jewellers</title>
        <meta name="description" content="Get cash for gold in just 15 minutes in Lajpat Nagar. Fastest gold processing service in Delhi. Instant evaluation, immediate payment. Call now!" />
        <meta name="keywords" content="15 minute gold processing, fast cash for gold, instant gold evaluation Lajpat Nagar, quick gold selling Delhi, immediate cash for gold, fast gold buyer" />
        <link rel="canonical" href="https://virajjewellers.com/15-minute-processing" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="15 Minute Gold Processing - Instant Cash for Gold Lajpat Nagar" />
        <meta property="og:description" content="Fastest gold processing in Delhi. Get cash for your gold in just 15 minutes with professional evaluation and instant payment." />
        <meta property="og:url" content="https://virajjewellers.com/15-minute-processing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://virajjewellers.com/images/15-minute-processing.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="15 Minute Gold Processing - Instant Cash for Gold" />
        <meta name="twitter:description" content="Get cash for gold in just 15 minutes in Lajpat Nagar Delhi" />
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "15 Minute Gold Processing Service",
            "description": "Fastest gold evaluation and cash payment service in Lajpat Nagar Delhi",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Viraj Jewellers",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lajpat Nagar",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110024",
                "addressCountry": "IN"
              }
            },
            "areaServed": {
              "@type": "Place",
              "name": "Delhi NCR"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Gold Processing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "15 Minute Gold Evaluation"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-full">
                  <Timer className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-green-600">15 Minute</span> Gold Processing in Lajpat Nagar
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Delhi's fastest cash for gold service! Get your gold evaluated and receive instant payment 
                in just 15 minutes. No waiting, no delays - immediate cash for your precious gold.
              </p>
              
              <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-8 max-w-md mx-auto">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-6 h-6 text-green-600" />
                  <span className="text-lg font-bold text-green-800">⏱️ Just 15 Minutes Process</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Start 15-Min Process
                </Button>
                <Button size="lg" variant="outline">
                  Call +91-9810066661
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our 15-Minute Gold Processing Steps
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center relative">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-300">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Instant Testing</h3>
                <p className="text-sm text-gray-600">Professional XRF machine testing</p>
                <p className="text-xs text-green-600 font-semibold mt-1">⏱️ 3 minutes</p>
                <ArrowRight className="hidden md:block absolute -right-8 top-8 w-6 h-6 text-gray-400" />
              </div>
              
              <div className="text-center relative">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-300">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Rate Calculation</h3>
                <p className="text-sm text-gray-600">Live market rate application</p>
                <p className="text-xs text-green-600 font-semibold mt-1">⏱️ 2 minutes</p>
                <ArrowRight className="hidden md:block absolute -right-8 top-8 w-6 h-6 text-gray-400" />
              </div>
              
              <div className="text-center relative">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-300">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Documentation</h3>
                <p className="text-sm text-gray-600">Quick paperwork & verification</p>
                <p className="text-xs text-green-600 font-semibold mt-1">⏱️ 5 minutes</p>
                <ArrowRight className="hidden md:block absolute -right-8 top-8 w-6 h-6 text-gray-400" />
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-300">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Instant Payment</h3>
                <p className="text-sm text-gray-600">Cash or NEFT transfer</p>
                <p className="text-xs text-green-600 font-semibold mt-1">⏱️ 5 minutes</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-lg inline-block">
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <h3 className="text-2xl font-bold mb-2">Total Time: Just 15 Minutes!</h3>
                <p className="text-green-100">From evaluation to payment in your hands</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Fast Processing */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-green-50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Our 15-Minute Processing?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  In today's fast-paced world, time is precious. Our streamlined gold evaluation process 
                  ensures you get maximum value for your gold without wasting your valuable time.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">No Appointment Needed</h3>
                      <p className="text-gray-600">Walk-in service available throughout business hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Advanced Technology</h3>
                      <p className="text-gray-600">Latest XRF machines for instant and accurate gold testing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Transparent Process</h3>
                      <p className="text-gray-600">Every step explained clearly with live rate updates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Multiple Payment Options</h3>
                      <p className="text-gray-600">Cash, NEFT, RTGS, or UPI - choose your preferred method</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center">
                  <Clock className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Time Guarantee</h3>
                  <p className="text-gray-600 mb-6">
                    We guarantee to complete your gold evaluation and payment process within 15 minutes, 
                    or we'll give you an additional ₹100 per gram bonus!
                  </p>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
                    <p className="font-semibold text-green-800">⚡ Speed Promise</p>
                    <p className="text-sm text-green-700">15 minutes or extra payment guaranteed</p>
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Start Your 15-Min Process
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Our Customers Say About Our Fast Service
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-green-200">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">5.0</span>
                  </div>
                  <CardTitle>Priya Sharma</CardTitle>
                  <CardDescription>Lajpat Nagar Resident</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Absolutely amazing! I was in a hurry and they completed everything in exactly 12 minutes. 
                    Professional service with best rates in Lajpat Nagar!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">5.0</span>
                  </div>
                  <CardTitle>Rajesh Kumar</CardTitle>
                  <CardDescription>Business Owner</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "I needed quick cash for an emergency. Their 15-minute process saved my day. 
                    Honest evaluation and instant payment. Highly recommended!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">5.0</span>
                  </div>
                  <CardTitle>Meera Gupta</CardTitle>
                  <CardDescription>Homemaker</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Super fast and transparent process. They explained every step and I got my money 
                    within 15 minutes. Best gold buyer in Lajpat Nagar!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for 15-Minute Gold Processing?</h2>
            <p className="text-xl text-green-100 mb-8">
              Visit our Lajpat Nagar store or call for home service. Get instant cash for your gold today!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Store Visit</h3>
                <p className="text-green-100 mb-4">Walk into our Lajpat Nagar store</p>
                <Button className="w-full bg-white text-green-600 hover:bg-gray-100">
                  Get Directions
                </Button>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Home Service</h3>
                <p className="text-green-100 mb-4">We come to you within Lajpat Nagar</p>
                <Button className="w-full bg-white text-green-600 hover:bg-gray-100">
                  Book Home Visit
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-300 mb-2">📞 +91-9810066661</p>
              <p className="text-green-100">Available Mon-Sat: 10:00 AM - 8:00 PM</p>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingActions />
      </main>
    </>
  );
}