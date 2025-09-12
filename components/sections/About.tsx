"use client";

import { Target, Eye, Users, Award, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const stats = [
    {
      number: "38+",
      label: "Years of Trust",
      icon: <Award className="h-6 w-6" />,
    },
    {
      number: "50K+",
      label: "Happy Customers",
      icon: <Users className="h-6 w-6" />,
    },
    {
      number: "₹100Cr+",
      label: "Cash For Gold Disbursed",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      number: "99.9%",
      label: "Customer Satisfaction",
      icon: <Heart className="h-6 w-6" />,
    },
  ];

  return (
    <section
      id="#about"
      className="py-20 bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-800 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Viraj Jewellers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <strong>
            One of the India’s most prominent and trusted company
            <strong className="text-[#ffaa00]"> is viraj jewellars . We provide various facilities to our clients such as getting back
            their pledged gold, precise evaluation for their jewelry, cash for
            gold and many other client friendly services.</strong>
            
          </strong>
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-amber-50 border border-amber-200"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-3 text-amber-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 font-playfair">
              Our Heritage
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Founded in 1985 by Mr. Viraj Shah, Viraj Jewellers began as a
              small jewelry store with a simple mission: to help people unlock
              the value of their precious jewelry when they need it most.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Over the decades, we've grown into one of the most trusted names
              in cash for gold, serving thousands of families across Mumbai and
              beyond. Our commitment to fair pricing, transparent processes, and
              exceptional customer service has made us the preferred choice for
              cash for gold.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-400 to-yellow-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <div className="relative z-10">
                <Award className="h-16 w-16 mb-4" />
                <h4 className="text-2xl font-bold mb-2">Trusted Excellence</h4>
                <p className="text-amber-100">
                  38 years of building trust, one customer at a time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 mr-4" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-amber-100 leading-relaxed text-lg">
                To provide accessible, transparent, and secure financial
                solutions through jewelry for cash for gold, helping our customers achieve
                their immediate financial goals while preserving the sentimental
                value of their precious possessions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-600 to-amber-700 text-white border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-10 w-10 mr-4" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-yellow-100 leading-relaxed text-lg">
                To become India's most trusted and innovative jewelry cash for gold
                provider, known for our customer-first approach, cutting-edge
                technology, and commitment to financial inclusion and
                empowerment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
