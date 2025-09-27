"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Clock,
  Award,
  CheckCircle,
  Star,
  Users,
  Banknote,
  FileText,
  Phone,
  MapPin,
} from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function AuthorizedSBIApprover() {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Bank-Grade Security",
      description:
        "SBI authorized processes ensure maximum security and transparency in all transactions",
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "15 Min Processing",
      description:
        "Quick evaluation and instant approval with minimal documentation required",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "40+ Years Legacy",
      description:
        "Trusted expertise since 1985 with thousands of satisfied customers across Delhi",
    },
    {
      icon: <Banknote className="h-8 w-8 text-emerald-600" />,
      title: "Instant Payment",
      description: "Immediate cash, UPI, or direct bank transfer upon approval",
    },
  ];

  const features = [
    "Government compliant KYC process",
    "Real-time gold purity testing",
    "Market-linked competitive rates",
    "Zero hidden charges or deductions",
    "Private evaluation room facility",
    "Same-day documentation",
    "Multi-language support available",
    "Doorstep service in South Delhi",
  ];

  const steps = [
    {
      step: "01",
      title: "Initial Assessment",
      description:
        "Bring your gold jewelry, coins, or ornaments to our Lajpat Nagar location",
    },
    {
      step: "02",
      title: "XRF Testing",
      description:
        "Advanced purity testing conducted in your presence with certified equipment",
    },
    {
      step: "03",
      title: "SBI Approval",
      description:
        "Quick verification and approval through our authorized SBI partnership",
    },
    {
      step: "04",
      title: "Instant Payment",
      description:
        "Receive payment immediately via cash, UPI, or bank transfer",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-amber-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 sm:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-sm font-medium">
              🏦 SBI Authorized Partner
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Authorized <span className="text-yellow-400">SBI Approver</span>
              <br />
              Gold Buying Service
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience bank-grade security and transparency with our SBI
              authorized gold buying process. Get instant approval, competitive
              rates, and immediate payment in just 15 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Get Instant Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                onClick={() => scrollToSection("process")}
              >
                Learn Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our SBI Authorized Service?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the reliability of bank-backed gold buying with
              competitive rates and instant processing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From assessment to payment in just 15 minutes with our streamlined
              SBI authorized process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Complete Service Features
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need for a secure and profitable gold selling
                experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 to-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trusted by Thousands in Delhi NCR
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">
                40+
              </div>
              <div className="text-lg font-medium text-blue-100">
                Years Experience
              </div>
              <div className="text-sm text-blue-200 mt-1">
                Serving Delhi since 1985
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">
                15
              </div>
              <div className="text-lg font-medium text-blue-100">
                Minutes Processing
              </div>
              <div className="text-sm text-blue-200 mt-1">
                Quick approval & payment
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">
                5000+
              </div>
              <div className="text-lg font-medium text-blue-100">
                Happy Customers
              </div>
              <div className="text-sm text-blue-200 mt-1">
                Across South Delhi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Sell Your Gold?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the security and convenience of our SBI authorized gold
              buying service. Get the best rates with instant payment today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +91-9810100561
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Visit Our Store
              </Button>
            </div>

            <div className="text-sm text-gray-500">
              <p>
                📍 C-159, Roxy Chowk, Veer Savarkar Marg, Lajpat Nagar II, New
                Delhi - 110024
              </p>
              <p className="mt-1">
                ⏰ Open: Mon-Sat 10:00 AM - 8:00 PM | Sun: 11:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
