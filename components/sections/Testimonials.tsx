"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Gurugram, Gurgaon",
      rating: 5,
      text: "Viraj Jewellers saved me during a family emergency. Their doorstep service was incredibly convenient, and they offered the best rates in the market. Highly recommended!",
      loan: "Cash For Gold - ₹2,50,000",
    },
    {
      name: "Rajesh Patel",
      location: "Lajpat Nagar, New-Delhi",
      rating: 4,
      text: "Professional service and transparent process. They explained everything clearly and processed my diamond to cash within 15 minutes. Excellent experience!",
      loan: "Cash For Diamond - ₹5,00,000",
    },
    {
      name: "Meera Iyer",
      location: "Noida Sector-62, Noida",
      rating: 4,
      text: "I've been their customer for 5 years now. Their team is trustworthy, rates are competitive, and the jewelry is always returned in perfect condition.",
      loan: "Cash For Silver - ₹1,80,000",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-800 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust us with their
            precious jewelry for Cash for Gold.{" "}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-2 border-amber-100 hover:border-amber-300 relative overflow-hidden"
            >
              {/* Golden accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-500"></div>

              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-amber-500 mb-4 opacity-50" />

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Loan Info */}
                <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-3 mb-4">
                  <p className="text-sm font-semibold text-amber-800">
                    {testimonial.loan}
                  </p>
                </div>

                {/* Customer Info */}
                <div className="border-t border-amber-100 pt-4">
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Your Cash For Gold?
            </h3>
            <p className="text-xl mb-8 text-amber-100">
              Join thousands of satisfied customers. Get instant cash against
              your jewelry today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-700 font-bold px-8 py-3 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105">
                Get Free Evaluation
              </button>
              <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-amber-700 transition-all duration-300">
                Call Now: +91-9810100561
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
