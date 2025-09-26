"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FloatingActions from "@/components/sections/FloatingActions";
import {
  CheckCircle,
  Shield,
  Award,
  Users,
  Clock,
  FileCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AuthorizedApproverPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-amber-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Authorized <span className="text-amber-600">SBI Approver</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are officially authorized SBI approvers, providing you with the
              most reliable and secure gold loan service.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-amber-200 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Official Authorization</CardTitle>
                <CardDescription>Officially authorized by SBI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We hold official authorization from SBI that empowers us to
                  approve gold loans.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Instant Approval</CardTitle>
                <CardDescription>Instant loan approval</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  As authorized approvers, we can process and approve your loan
                  application instantly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Expert Team</CardTitle>
                <CardDescription>Expert Team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our team consists of SBI-trained and certified experts who are
                  always ready to serve you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Authorization Details */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                SBI Authorization Benefits
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Direct Bank Connectivity
                    </h3>
                    <p className="text-gray-600">
                      Direct bank connection ensuring fast processing
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Lower Interest Rates
                    </h3>
                    <p className="text-gray-600">
                      Better interest rates due to authorization
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Enhanced Security
                    </h3>
                    <p className="text-gray-600">
                      Bank-level security and protection guarantee
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Regulatory Compliance
                    </h3>
                    <p className="text-gray-600">
                      Full compliance with all regulatory requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8">
              <div className="text-center">
                <Shield className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Certification Details
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="font-medium">Authorization ID:</span>
                    <span className="text-amber-600 font-semibold">
                      SBI-GL-2024-001
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Valid Until:</span>
                    <span className="text-green-600 font-semibold">
                      Dec 2025
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Approval Level:</span>
                    <span className="text-blue-600 font-semibold">Senior</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Coverage Area:</span>
                    <span className="text-purple-600 font-semibold">
                      Pan India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Take a Loan from Authorized SBI Approver
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Contact us for reliability and fast service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+919876543210">
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-amber-50"
              >
                <Clock className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600"
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
