"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FloatingActions from "@/components/sections/FloatingActions";
import { Crown, Star, Award, Users, TrendingUp, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LegacyExperiencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                <Crown className="w-10 h-10 text-purple-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-purple-600">40+ Years</span> Legacy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Over four decades of experience and thousands of happy customers.
              This is the true mark of trust and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Success Story
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-purple-200 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-600">
                  1980s
                </CardTitle>
                <CardDescription>Beginning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Started as a small gold business, serving customers with
                  traditional methods.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-600">
                  1990s
                </CardTitle>
                <CardDescription>Expansion</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Opened multiple branches and specialized in gold loan
                  services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-600">
                  2000s
                </CardTitle>
                <CardDescription>Digitalization</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Adopted technology, launched online services, and improved
                  processing speed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-600">
                  2020s
                </CardTitle>
                <CardDescription>Leadership</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Became market leaders, embracing AI and modern technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                40+ Years of Experience
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      50,000+ Happy Customers
                    </h3>
                    <p className="text-gray-600">
                      Over four decades, served more than 50,000 satisfied
                      customers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Multiple Awards
                    </h3>
                    <p className="text-gray-600">
                      Received numerous awards for excellent service.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Consistent Growth
                    </h3>
                    <p className="text-gray-600">
                      Steady growth every year, reaching new milestones.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Trust & Reliability
                    </h3>
                    <p className="text-gray-600">
                      Top-notch trust and reliability, no complaints.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
              <div className="text-center">
                <Crown className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Legacy Statistics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">
                      40+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">
                      50K+
                    </div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">
                      ₹500Cr+
                    </div>
                    <div className="text-sm text-gray-600">Loans Disbursed</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-600">
                      25+
                    </div>
                    <div className="text-sm text-gray-600">Cities Covered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Customer Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-purple-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">RS</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Rajesh Sharma</CardTitle>
                    <CardDescription>Customer for 25 years</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600">
                  "I have been taking loans here for 25 years. Never had an
                  issue. Truly trustworthy service!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">PK</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Preeti Kumari</CardTitle>
                    <CardDescription>Customer for 15 years</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600">
                  "My mother also took loans here. This company is our family’s
                  trusted choice."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">AK</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Amit Kumar</CardTitle>
                    <CardDescription>Customer for 30 years</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600">
                  "A 30-year relationship. The service has kept improving over
                  time."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Trust Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Established Legacy</h3>
              <p className="text-gray-600">
                40+ years of established business, no frauds.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Multi-Generation Trust
              </h3>
              <p className="text-gray-600">
                Trusted across generations, from grandparents to grandchildren.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Industry Recognition
              </h3>
              <p className="text-gray-600">
                Recognized and respected in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Benefit from 40 Years of Experience
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Take your gold loan with trust and reliability
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+919876543210">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50"
              >
                <Crown className="w-5 h-5 mr-2" />
                Leverage Our Experience
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
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
