'use client';

import { MapPin, Phone, Mail, Clock, Car, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-amber-600" />,
      title: "Phone",
      details: ["+91-9876543210", "+91-9876543211"],
      action: "Call Now"
    },
    {
      icon: <Mail className="h-6 w-6 text-amber-600" />,
      title: "Email",
      details: ["info@virajjewellers.com", "loans@virajjewellers.com"],
      action: "Send Email"
    },
    {
      icon: <MapPin className="h-6 w-6 text-amber-600" />,
      title: "Office Address",
      details: ["123 Jewelry Street, Gold Market", "Zaveri Bazaar, Mumbai - 400001"],
      action: "Get Directions"
    }
  ];

  const services = [
    {
      icon: <Building className="h-8 w-8 text-amber-600" />,
      title: "Visit Our Office",
      description: "Come to our secure office location for jewelry evaluation and loan processing.",
      timing: "Mon-Sat: 10:00 AM - 7:00 PM"
    },
    {
      icon: <Car className="h-8 w-8 text-amber-600" />,
      title: "Doorstep Service",
      description: "We come to your location for convenient and secure jewelry evaluation.",
      timing: "Mon-Sat: 11:00 AM - 6:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-800 mb-4">
            Get In <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to get instant cash for your jewelry? Contact us today for a free evaluation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white border-2 border-amber-200 hover:border-amber-300 transition-colors duration-300 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white">
              <CardTitle className="text-2xl font-bold">Get Free Quote</CardTitle>
              <p className="text-amber-100">Fill out the form and we'll contact you within 30 minutes</p>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <Input placeholder="Enter your full name" className="border-amber-200 focus:border-amber-500 focus:ring-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input placeholder="Enter your phone number" className="border-amber-200 focus:border-amber-500 focus:ring-amber-500" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <Input type="email" placeholder="Enter your email address" className="border-amber-200 focus:border-amber-500 focus:ring-amber-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Jewelry Type</label>
                <select className="w-full p-3 border border-amber-200 rounded-md focus:border-amber-500 focus:ring-amber-500 bg-white">
                  <option>Select jewelry type</option>
                  <option>Gold Jewelry</option>
                  <option>Silver Jewelry</option>
                  <option>Diamond Jewelry</option>
                  <option>Mixed Jewelry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Approximate Weight/Value</label>
                <Input placeholder="e.g., 50 grams gold or ₹2,00,000" className="border-amber-200 focus:border-amber-500 focus:ring-amber-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <Textarea 
                  placeholder="Any specific requirements or questions..."
                  className="border-amber-200 focus:border-amber-500 focus:ring-amber-500 min-h-[100px]"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold py-3 rounded-full transform transition-all duration-300 hover:scale-105">
                  Request Doorstep Service
                </Button>
                <Button variant="outline" className="flex-1 border-2 border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white font-bold py-3 rounded-full transition-all duration-300">
                  Call for Instant Quote
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="bg-white border border-amber-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 rounded-full p-3">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-lg mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                        ))}
                        <Button variant="link" className="text-amber-600 hover:text-amber-700 p-0 h-auto font-semibold">
                          {info.action} →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Options */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Service</h3>
              {services.map((service, index) => (
                <Card key={service.title} className="bg-gradient-to-r from-white to-amber-50 border border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 group-hover:bg-amber-200 rounded-full p-3 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-lg mb-2">{service.title}</h4>
                        <p className="text-gray-600 mb-2">{service.description}</p>
                        <div className="flex items-center space-x-2 text-amber-700">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-medium">{service.timing}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white border-none">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-xl mb-2">Emergency Loan Service</h4>
                <p className="text-red-100 mb-4">Need urgent cash? We're available 24/7 for emergency loans</p>
                <Button className="bg-white text-red-600 hover:bg-red-50 font-bold rounded-full">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}