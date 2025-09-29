import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Award, CheckCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Cash for Gold Lajpat Nagar Delhi | #1 Gold Buyer | Highest Rates 2025",
  description:
    "Get highest cash for gold in Lajpat Nagar Delhi with transparent XRF testing and best market rates. Trusted gold buyers in South Delhi since 1995. Same-day payment guaranteed.",
  alternates: { canonical: "https://virajjewellers.com/services/cash-for-gold" },
  keywords: "cash for gold lajpat nagar delhi, gold buyer lajpat nagar, sell gold delhi, best gold rate lajpat nagar, gold exchange delhi, instant cash for gold delhi, gold selling price lajpat nagar",
};

export default function CashForGoldPage() {
  const benefits = [
    "Highest gold rates in Lajpat Nagar Delhi - guaranteed",
    "Instant cash payment - same day, no delays",
    "100% transparent XRF testing in your presence",
    "Free gold evaluation with no hidden charges",
    "Secure and private transactions with proper documentation",
    "Trusted by 10,000+ customers across Delhi NCR"
  ];

  const faqs = [
    {
      question: "How much cash will I get for gold in Lajpat Nagar Delhi?",
      answer: "At Viraj Jewellers, we offer the highest cash for gold rates in Lajpat Nagar Delhi, typically 5-10% higher than market average. Your gold's value depends on purity (18K, 22K, 24K), weight, and current market rates. Visit us for a free, no-obligation evaluation and get instant cash today."
    },
    {
      question: "Which documents do I need to sell gold in Lajpat Nagar?",
      answer: "To sell gold in Lajpat Nagar Delhi, bring a valid government ID (Aadhar, PAN, Driving License) for KYC compliance. Original purchase bills are helpful but not mandatory. We ensure a hassle-free process with minimal documentation."
    },
    {
      question: "Why choose Viraj Jewellers for cash for gold in Lajpat Nagar Delhi?",
      answer: "Viraj Jewellers offers the highest cash for gold rates in Lajpat Nagar Delhi with transparent XRF testing, instant payment, and 25+ years of trusted service. We're authorized gold buyers with proper GST registration and government compliance."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900">Cash for Gold in Lajpat Nagar Delhi</h1>
        <p className="mt-4 text-xl text-gray-700">
          <strong>#1 Trusted Gold Buyers in Lajpat Nagar Delhi</strong> offering highest rates, 
          transparent testing, and instant cash payment since 1995.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/contact" className="rounded bg-yellow-600 px-5 py-3 text-white font-medium hover:bg-yellow-700">Get Instant Cash Quote</a>
          <a href="tel:+919810100561" className="rounded border border-yellow-600 px-5 py-3 font-medium hover:bg-yellow-50">Call: 9810100561</a>
          <a href="/services/sell-gold-lajpat-nagar" className="rounded border px-5 py-3 hover:bg-gray-50">Sell Gold Lajpat Nagar</a>
          <a href="/best-gold-buyer-lajpat-nagar" className="rounded border px-5 py-3 hover:bg-gray-50">Best Gold Buyer in Lajpat Nagar</a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us for Cash for Gold in Lajpat Nagar Delhi</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Get Cash for Gold in Lajpat Nagar Delhi</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <div className="bg-yellow-600 text-white w-10 h-10 rounded-full flex items-center justify-center mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Visit Our Store</h3>
              <p className="text-gray-700">Bring your gold items to our Lajpat Nagar store for a free evaluation with no obligation.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <div className="bg-yellow-600 text-white w-10 h-10 rounded-full flex items-center justify-center mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Transparent Testing</h3>
              <p className="text-gray-700">Watch as we test your gold using advanced XRF technology to determine exact purity.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <div className="bg-yellow-600 text-white w-10 h-10 rounded-full flex items-center justify-center mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Get Instant Cash</h3>
              <p className="text-gray-700">Receive immediate payment via cash, UPI, or bank transfer - your choice!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Cash for Gold FAQs - Lajpat Nagar Delhi</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Us for Cash for Gold in Lajpat Nagar Delhi</h2>
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Our Location</h3>
                    <p className="text-gray-700">SHOP: O-14, LAJPAT NAGAR - II, NEAR GOLDEN DRAGON RESTAURANT, NEW DELHI - 110024</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-700">Monday to Saturday: 10:00 AM - 7:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Contact Us</h3>
                    <p className="text-gray-700">Phone: +91-9810100561<br />Email: cashforgolddelhi@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-64 md:h-auto">
                <iframe
                  src="https://www.google.com/maps?q=Viraj+Jewellers+Lajpat+Nagar&output=embed"
                  width="100%"
                  height="100%"
                  className="rounded border border-gray-200"
                  loading="lazy"
                  style={{ border: 0 }}
                  aria-label="Map of Viraj Jewellers Lajpat Nagar Delhi"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="/contact" className="inline-block rounded bg-yellow-600 px-8 py-4 text-lg font-medium text-white hover:bg-yellow-700">
              Get Cash for Gold Today in Lajpat Nagar Delhi
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


