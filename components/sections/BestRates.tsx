import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, DollarSign, CheckCircle, ArrowLeft, Phone, Calculator } from 'lucide-react';

export default function BestRates() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Best Cash For Gold Rates in Lajpat Nagar Delhi",
    "description": "Get the best cash for gold rates in Lajpat Nagar Delhi. Up to 85% of market value for your gold jewelry, coins, and ornaments. Live price updates and guaranteed best rates.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cash For Gold Lajpat Nagar"
    },
    "priceRange": "₹₹₹₹"
  };

  const rateComparison = [
    {
      purity: "24K Gold",
      marketRate: "₹10,609",
      ourRate: "₹9,017",
      percentage: "85%",
      savings: "₹500+ more than competitors"
    },
    {
      purity: "22K Gold", 
      marketRate: "₹9,725",
      ourRate: "₹8,266",
      percentage: "85%",
      savings: "₹400+ more than competitors"
    },
    {
      purity: "18K Gold",
      marketRate: "₹7,957",
      ourRate: "₹6,763",
      percentage: "85%",
      savings: "₹300+ more than competitors"
    },
    {
      purity: "Silver",
      marketRate: "₹126",
      ourRate: "₹107",
      percentage: "85%",
      savings: "₹10+ more than competitors"
    }
  ];

  const whyBestRates = [
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "Live Market Tracking",
      description: "Real-time price updates every minute from international markets"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-blue-600" />,
      title: "No Hidden Charges",
      description: "What we quote is what you get - transparent pricing policy"
    },
    {
      icon: <Calculator className="h-6 w-6 text-purple-600" />,
      title: "Accurate Testing",
      description: "Advanced purity testing ensures you get paid for exact gold content"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-amber-600" />,
      title: "Price Match Guarantee",
      description: "We'll match any genuine higher offer from authorized dealers"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best Cash For Gold Rates in Lajpat Nagar Delhi | Up to 85% Market Value | Live Prices</title>
        <meta name="description" content="Get the best cash for gold rates in Lajpat Nagar Delhi. Up to 85% of market value for 24K, 22K, 18K gold & silver. Live price updates, no hidden charges. Call for current rates!" />
        <meta name="keywords" content="best cash for gold rates lajpat nagar, highest gold rates delhi, cash for gold best price lajpat nagar, gold buyer best rates delhi, sell gold highest price lajpat nagar" />
        <link rel="canonical" href="https://cashforgoldlajpatnagar.com/best-rates" />
        
        <meta property="og:title" content="Best Cash For Gold Rates | Lajpat Nagar Delhi" />
        <meta property="og:description" content="Get up to 85% of market value for your gold. Best rates guaranteed in Lajpat Nagar area." />
        <meta property="og:url" content="https://cashforgoldlajpatnagar.com/best-rates" />
        
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
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Best Gold Rates Guaranteed
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get Up to 85% of Market Value - The Highest Cash for Gold Rates in Lajpat Nagar Delhi
            </p>
            <div className="mt-6">
              <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                <DollarSign className="h-4 w-4 mr-2" />
                Price Match Guarantee Available
              </span>
            </div>
          </div>

          {/* Live Rates Table */}
          <Card className="mb-12 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white">
              <CardTitle className="text-2xl flex items-center">
                <TrendingUp className="h-6 w-6 mr-3" />
                Today's Live Gold Rates - Lajpat Nagar Delhi
              </CardTitle>
              <p className="text-amber-100">Updated every minute | September 2, 2025</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Gold Purity</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Market Rate</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Our Rate</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Percentage</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Your Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {rateComparison.map((rate, index) => (
                      <tr key={index} className="hover:bg-amber-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{rate.purity}</td>
                        <td className="px-6 py-4 text-gray-700">{rate.marketRate}/gram</td>
                        <td className="px-6 py-4 font-bold text-green-600 text-lg">{rate.ourRate}/gram</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {rate.percentage}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-blue-600 font-medium">{rate.savings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 border-t">
                <p className="text-center text-sm text-green-700">
                  <strong>✓ Guaranteed Best Rates</strong> | <strong>✓ No Hidden Charges</strong> | <strong>✓ Instant Payment</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <DollarSign className="h-6 w-6 mr-3 text-green-600" />
                    Why We Offer the Best Rates in Lajpat Nagar
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <p>
                    As the <strong>leading cash for gold dealer in Lajpat Nagar Delhi</strong>, we pride ourselves 
                    on offering the <strong>highest gold rates in the market</strong>. Our commitment to transparent, 
                    fair pricing has made us the preferred choice for thousands of customers across Delhi NCR.
                  </p>
                  <p>
                    Unlike many gold buyers who offer 60-70% of market value, we consistently provide 
                    <strong>up to 85% of current market rates</strong> for all gold purities. This means 
                    more money in your pocket when you choose our <strong>cash for gold services in Lajpat Nagar</strong>.
                  </p>
                  <p>
                    Our rates are updated in real-time based on international gold prices, London Fix rates, 
                    and current MCX prices. This ensures you always get the best possible value for your precious metals.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">How We Ensure Best Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {whyBestRates.map((reason, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        {reason.icon}
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{reason.title}</h3>
                          <p className="text-gray-600 text-sm">{reason.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Rate Calculation Process</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <p>
                    Our <strong>transparent rate calculation process</strong> ensures you understand exactly 
                    how we arrive at your gold's value:
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-400">
                    <ol className="space-y-3 list-decimal list-inside">
                      <li><strong>Purity Testing:</strong> Accurate karat testing using electronic gold testers</li>
                      <li><strong>Weight Verification:</strong> Precise measurement using certified digital scales</li>
                      <li><strong>Market Rate Check:</strong> Real-time market price verification</li>
                      <li><strong>Rate Calculation:</strong> Application of our 85% rate formula</li>
                      <li><strong>Transparent Quote:</strong> Clear breakdown of final amount payable</li>
                    </ol>
                  </div>
                  <p>
                    This systematic approach ensures that every customer receives the <strong>best possible 
                    rate for their gold in Lajpat Nagar</strong>, making us the most trusted gold buyer in the area.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Competitor Rate Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left">Dealer Type</th>
                          <th className="px-4 py-3 text-left">Typical Rate %</th>
                          <th className="px-4 py-3 text-left">Our Rate %</th>
                          <th className="px-4 py-3 text-left">Your Extra Earning</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3">Local Jewelers</td>
                          <td className="px-4 py-3 text-red-600">60-65%</td>
                          <td className="px-4 py-3 text-green-600 font-bold">85%</td>
                          <td className="px-4 py-3 text-blue-600">20% More</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-4 py-3">Online Buyers</td>
                          <td className="px-4 py-3 text-red-600">65-70%</td>
                          <td className="px-4 py-3 text-green-600 font-bold">85%</td>
                          <td className="px-4 py-3 text-blue-600">15% More</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Unauthorized Dealers</td>
                          <td className="px-4 py-3 text-red-600">50-60%</td>
                          <td className="px-4 py-3 text-green-600 font-bold">85%</td>
                          <td className="px-4 py-3 text-blue-600">25% More</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-green-800">Get Live Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Call: +91-9876543210
                    </Button>
                    <div className="text-sm text-gray-600 text-center">
                      <p><strong>Live Rate Hotline</strong></p>
                      <p>Updated every minute</p>
                      <p>Available 10 AM - 8 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Rate Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>85% of market value guaranteed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>No hidden deductions or charges</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Price match guarantee available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Real-time market rate updates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Transparent calculation process</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Instant payment on acceptance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm bg-amber-50 p-4 rounded-lg">
                    <p className="font-medium text-amber-800">Example Calculation:</p>
                    <p>10 grams of 22K Gold</p>
                    <p>Market Rate: ₹9,725/gram</p>
                    <p>Our Rate (85%): ₹8,266/gram</p>
                    <p className="font-bold text-green-700 text-base">
                      You Get: ₹82,660
                    </p>
                    <p className="text-blue-600 text-xs">
                      ₹15,000+ more than typical dealers!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
            <CardContent className="text-center py-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Get the Best Rates for Your Gold?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Don't settle for lower rates from other dealers. Get up to 85% of market value 
                for your gold at our Lajpat Nagar location. Best rates guaranteed!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Get Current Rates
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-green-500 text-green-700 hover:bg-green-50">
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculate My Gold Value
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