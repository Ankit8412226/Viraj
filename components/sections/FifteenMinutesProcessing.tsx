import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Zap, CheckCircle, ArrowLeft, Phone, ArrowRight } from 'lucide-react';

export default function FifteenMinuteProcessing() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "15-Minute Cash For Gold Processing in Lajpat Nagar",
    "description": "Get instant cash for gold in just 15 minutes in Lajpat Nagar Delhi. Fast, efficient, and secure gold evaluation and payment process.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cash For Gold Lajpat Nagar"
    },
    "serviceType": "Gold Buying Service",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Quick Gold Processing",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "15-Minute Gold Evaluation"
          }
        }
      ]
    }
  };

  const processSteps = [
    {
      step: "1",
      title: "Gold Assessment",
      time: "3 minutes",
      description: "Expert evaluation of your gold items using advanced testing equipment"
    },
    {
      step: "2",
      title: "Purity Testing",
      time: "4 minutes",
      description: "Accurate karat testing using electronic gold testers and acid tests"
    },
    {
      step: "3",
      title: "Weight Verification",
      time: "2 minutes", 
      description: "Precise weighing using certified digital scales"
    },
    {
      step: "4",
      title: "Price Calculation",
      time: "3 minutes",
      description: "Real-time market rate calculation and offer preparation"
    },
    {
      step: "5",
      title: "Payment Processing",
      time: "3 minutes",
      description: "Instant cash payment or bank transfer completion"
    }
  ];

  return (
    <>
      <Helmet>
        <title>15-Minute Fast Cash For Gold Processing | Lajpat Nagar Delhi | Instant Payment</title>
        <meta name="description" content="Get cash for gold in just 15 minutes in Lajpat Nagar Delhi! Fast processing, instant evaluation, immediate payment. No waiting, no delays. Call now for quick service!" />
        <meta name="keywords" content="15 minute cash for gold lajpat nagar, fast gold buyer delhi, instant cash for gold, quick gold selling lajpat nagar, same day gold payment delhi" />
        <link rel="canonical" href="https://cashforgoldlajpatnagar.com/15-minute-processing" />
        
        <meta property="og:title" content="15-Minute Fast Cash For Gold | Lajpat Nagar Delhi" />
        <meta property="og:description" content="Fastest cash for gold service in Lajpat Nagar. Get instant cash in just 15 minutes!" />
        <meta property="og:url" content="https://cashforgoldlajpatnagar.com/15-minute-processing" />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/" className="text-amber-600 hover:text-amber-700 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              15-Minute Fast Processing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Fastest Cash for Gold Service in Lajpat Nagar Delhi - Get Instant Cash in Just 15 Minutes!
            </p>
            <div className="mt-6">
              <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                Average Processing Time: 12-15 Minutes
              </span>
            </div>
          </div>

          {/* Process Timeline */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Our Lightning-Fast 5-Step Process</CardTitle>
              <p className="text-center text-gray-600">From evaluation to cash in hand - all in 15 minutes!</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center relative">
                    {index < processSteps.length - 1 && (
                      <ArrowRight className="hidden md:block absolute top-8 -right-3 h-6 w-6 text-amber-400 z-10" />
                    )}
                    <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-green-600 font-medium mb-2">{step.time}</p>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Zap className="h-6 w-6 mr-3 text-green-600" />
                    Why Choose Our Fast Processing Service?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <p>
                    At <strong>Cash For Gold Lajpat Nagar</strong>, we understand that your time is valuable. 
                    That's why we\'ve revolutionized the gold selling process to deliver <strong>the fastest 
                    cash for gold service in Delhi</strong>. Our streamlined 15-minute processing system 
                    combines cutting-edge technology with expert evaluation to ensure you get instant cash 
                    without any delays.
                  </p>
                  <p>
                    Unlike traditional gold buyers who may take hours or even days to complete transactions, 
                    our <strong>quick cash for gold service in Lajpat Nagar</strong> guarantees same-minute 
                    payment. Whether you need emergency cash or simply want to avoid lengthy waiting periods, 
                    we're here to serve you efficiently.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Advanced Technology for Speed & Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: <CheckCircle className="h-6 w-6 text-green-600" />,
                        title: "Electronic Gold Testers",
                        desc: "Instant purity testing without acid damage to your jewelry"
                      },
                      {
                        icon: <CheckCircle className="h-6 w-6 text-green-600" />,
                        title: "Certified Digital Scales",
                        desc: "Precision weighing systems for accurate measurements"
                      },
                      {
                        icon: <CheckCircle className="h-6 w-6 text-green-600" />,
                        title: "Real-Time Price Feed",
                        desc: "Live market rates updated every minute for best prices"
                      },
                      {
                        icon: <CheckCircle className="h-6 w-6 text-green-600" />,
                        title: "Digital Payment System",
                        desc: "Instant cash or immediate bank transfers"
                      },
                      {
                        icon: <CheckCircle className="h-6 w-6 text-green-600" />,
                        title: "Quick Documentation",
                        desc: "Digital receipts and paperwork in minutes"
                      },
                      {
                        icon: <CheckCircle className="h-6 w-6 text-green-600" />,
                        title: "Expert Evaluators",
                        desc: "Experienced team for immediate gold assessment"
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        {feature.icon}
                        <div>
                          <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                          <p className="text-gray-600 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">What Makes Us the Fastest in Lajpat Nagar?</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <p>
                    Our <strong>15-minute cash for gold processing in Lajpat Nagar</strong> is possible because of:
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-400">
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Pre-arranged Setup:</strong> All equipment ready and calibrated for instant testing</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Expert Team:</strong> Trained professionals who can evaluate gold within minutes</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Streamlined Process:</strong> No unnecessary steps or paperwork delays</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Immediate Payment:</strong> Cash on spot or instant bank transfer facility</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>No Appointment Needed:</strong> Walk-in service available throughout business hours</span>
                      </li>
                    </ul>
                  </div>
                  <p>
                    As the <strong>leading fast gold buyer in Lajpat Nagar</strong>, we guarantee that you'll 
                    never have to wait longer than 15 minutes to get cash for your precious gold items.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-green-800">Quick Service Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now: +91-9876543210
                    </Button>
                    <div className="text-sm text-gray-600">
                      <p><strong>Express Service Hours:</strong></p>
                      <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                      <p>Sunday: 11:00 AM - 6:00 PM</p>
                      <p className="text-green-600 font-medium mt-2">
                        🕒 15-minute guarantee during all business hours!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Time Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                      <p className="font-medium text-red-800">Traditional Dealers:</p>
                      <p className="text-red-600">2-4 hours or next day</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                      <p className="font-medium text-yellow-800">Average Market:</p>
                      <p className="text-yellow-600">30-60 minutes</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="font-medium text-green-800">Our Service:</p>
                      <p className="text-green-600 font-bold">Just 15 minutes!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
            <CardContent className="text-center py-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Need Cash Urgently? We've Got You Covered!
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Don't wait hours for your money. Visit our Lajpat Nagar location and get 
                instant cash for your gold in just 15 minutes. No appointment necessary!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                    <Clock className="h-4 w-4 mr-2" />
                    Get Instant Cash Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-green-500 text-green-700 hover:bg-green-50">
                  <Phone className="h-4 w-4 mr-2" />
                  Call for Express Service
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}