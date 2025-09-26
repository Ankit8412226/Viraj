import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Calendar, Star, ArrowLeft, Phone, Trophy } from 'lucide-react';

export default function FortyYearsExperience() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cash For Gold Lajpat Nagar",
    "description": "40+ years of experience in cash for gold business in Lajpat Nagar Delhi. Trusted gold buyer since 1985 with expertise in jewelry evaluation and precious metal trading.",
    "foundingDate": "1985",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Central Market, Lajpat Nagar",
      "addressLocality": "Lajpat Nagar",
      "addressRegion": "Delhi",
      "postalCode": "110024",
      "addressCountry": "IN"
    }
  };

  const milestones = [
    {
      year: "1985",
      title: "Business Foundation",
      description: "Started as a small jewelry shop in Lajpat Nagar Central Market"
    },
    {
      year: "1995",
      title: "Gold Trading License",
      description: "Obtained official gold trading license and expanded services"
    },
    {
      year: "2005",
      title: "SBI Authorization",
      description: "Became authorized SBI approver for gold transactions"
    },
    {
      year: "2015",
      title: "Digital Upgrade",
      description: "Introduced modern testing equipment and digital payment systems"
    },
    {
      year: "2025",
      title: "Market Leader",
      description: "Recognized as the most trusted gold buyer in Lajpat Nagar"
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="h-8 w-8 text-gold-600" />,
      title: "50,000+ Happy Customers",
      description: "Successfully served over 50,000 customers across Delhi NCR"
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: "4.9/5 Customer Rating",
      description: "Consistently highest rated gold buyer in Lajpat Nagar area"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Multiple Certifications",
      description: "BIS Hallmark, ISO certification, and government approvals"
    },
    {
      icon: <Calendar className="h-8 w-8 text-green-600" />,
      title: "Zero Complaints",
      description: "No unresolved customer complaints in our 40-year history"
    }
  ];

  return (
    <>
      <Helmet>
        <title>40+ Years Experience in Cash For Gold | Lajpat Nagar Delhi | Since 1985</title>
        <meta name="description" content="40+ years of trusted experience in cash for gold business in Lajpat Nagar Delhi. Established since 1985, serving 50,000+ satisfied customers. Expert gold evaluation & best rates." />
        <meta name="keywords" content="40 years experience cash for gold lajpat nagar, oldest gold buyer delhi, trusted gold dealer since 1985, experienced gold buyer lajpat nagar, legacy gold business delhi" />
        <link rel="canonical" href="https://cashforgoldlajpatnagar.com/40-years-experience" />
        
        <meta property="og:title" content="40+ Years Experience | Cash For Gold Lajpat Nagar" />
        <meta property="og:description" content="Trusted since 1985. 40+ years of experience in gold buying with 50,000+ satisfied customers." />
        <meta property="og:url" content="https://cashforgoldlajpatnagar.com/40-years-experience" />
        
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              40+ Years of Excellence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four Decades of Trust, Experience, and Unmatched Service in Lajpat Nagar Delhi
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                <Calendar className="h-4 w-4 mr-2" />
                Established 1985
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-gold-100 text-gold-800 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 mr-2" />
                50,000+ Customers Served
              </span>
            </div>
          </div>

          {/* Timeline */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Our Journey Through the Decades</CardTitle>
              <p className="text-center text-gray-600">From a small shop to Lajpat Nagar's most trusted gold buyer</p>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 to-yellow-600"></div>
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <div className="bg-white p-6 rounded-lg shadow-lg border border-amber-200">
                          <div className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="w-2/12 flex justify-center">
                        <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg"></div>
                      </div>
                      <div className="w-5/12"></div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Trophy className="h-6 w-6 mr-3 text-gold-600" />
                    Why Experience Matters in Gold Business
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <p>
                    With <strong>over 40 years of experience in cash for gold business in Lajpat Nagar</strong>, 
                    we have witnessed every market cycle, economic change, and trend in the precious metals industry. 
                    This extensive experience allows us to provide you with insights and services that newer 
                    establishments simply cannot match.
                  </p>
                  <p>
                    Since <strong>1985</strong>, we have been serving the Lajpat Nagar community, building 
                    relationships that span generations. Many of our customers are families who have trusted 
                    us for decades, returning to us whenever they need reliable gold buying services.
                  </p>
                  <p>
                    Our four decades in the business mean we understand the real value of gold, the nuances 
                    of jewelry craftsmanship, and most importantly, how to treat our customers with the 
                    respect and transparency they deserve.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">What Four Decades Have Taught Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-amber-400">
                      <h3 className="font-semibold text-gray-900 mb-2">Market Expertise</h3>
                      <p className="text-gray-700">
                        We've seen gold prices fluctuate from ₹500 per 10 grams in 1985 to today's rates. 
                        This experience helps us provide accurate valuations and fair pricing.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-400">
                      <h3 className="font-semibold text-gray-900 mb-2">Customer Trust</h3>
                      <p className="text-gray-700">
                        Trust takes years to build but seconds to destroy. Our 40-year reputation is built 
                        on transparency, honesty, and treating every customer like family.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-400">
                      <h3 className="font-semibold text-gray-900 mb-2">Technical Evolution</h3>
                      <p className="text-gray-700">
                        From traditional acid tests to modern electronic gold testers, we've evolved with 
                        technology while maintaining the personal touch of traditional service.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-400">
                      <h3 className="font-semibold text-gray-900 mb-2">Regulatory Knowledge</h3>
                      <p className="text-gray-700">
                        Having operated through multiple regulatory changes, we ensure full compliance 
                        with all current laws and banking regulations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Our Proud Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                        <div className="flex items-center mb-4">
                          {achievement.icon}
                          <h3 className="text-lg font-semibold text-gray-900 ml-3">{achievement.title}</h3>
                        </div>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-800">Legacy Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Call: +91-9876543210
                    </Button>
                    <div className="text-sm text-gray-600">
                      <p><strong>Original Location Since 1985:</strong></p>
                      <p>Central Market, Lajpat Nagar</p>
                      <p>New Delhi - 110024</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p><strong>Three Generation Service:</strong></p>
                      <p>Grandfather - Father - Son</p>
                      <p>All serving the same location</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Customer Testimonials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <blockquote className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                      <p className="text-gray-700 italic">"My family has been selling gold here for 25 years. Same honest service, same fair prices."</p>
                      <cite className="text-gray-600 block mt-2">- Mrs. Sharma, Regular Customer</cite>
                    </blockquote>
                    <blockquote className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                      <p className="text-gray-700 italic">"Three generations of trust. My grandmother, mother, and now I all come here."</p>
                      <cite className="text-gray-600 block mt-2">- Rajesh Kumar, Long-time Customer</cite>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
            <CardContent className="text-center py-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Experience the Difference 40 Years Makes
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                When you choose us, you're not just selling gold - you're joining a legacy of trust, 
                expertise, and unmatched service that has been serving Lajpat Nagar for four decades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700">
                    <Award className="h-4 w-4 mr-2" />
                    Experience Our Service
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-amber-500 text-amber-700 hover:bg-amber-50">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Our Legacy Number
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