import type { Metadata } from "next";
import { MapPin, Star, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Cash for Gold in Lajpat Nagar Delhi | #1 Trusted Gold Buyer 2025",
  description:
    "Get highest cash for gold in Lajpat Nagar Delhi. Trusted gold buyers offering best market rates, transparent testing, and instant payment. Visit today!",
  alternates: { canonical: "https://virajjewellers.com/locations/lajpat-nagar" },
  keywords: "cash for gold lajpat nagar delhi, gold buyer lajpat nagar, sell gold delhi, best gold rate lajpat nagar, gold exchange delhi, instant cash for gold delhi",
};

export default function LajpatNagarLocationPage() {
  const areasCovered = [
    "Lajpat Nagar Central Market",
    "Lajpat Nagar I, II, III, and IV",
    "Nehru Place",
    "CR Park",
    "Greater Kailash I & II",
    "Defence Colony",
    "Kalkaji",
    "Govindpuri",
    "Amar Colony",
    "Jangpura"
  ];

  const highlights = [
    "Highest gold rates in Lajpat Nagar Delhi",
    "Instant cash payment - same day",
    "XRF testing in your presence",
    "Free evaluation with no obligation",
    "25+ years of trusted service"
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
          <a href="/services/cash-for-gold" className="rounded border px-5 py-3 hover:bg-gray-50">Cash for Gold Services</a>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Lajpat Nagar Delhi Location</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <Star className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Areas We Serve in South Delhi</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areasCovered.map((area, index) => (
              <div key={index} className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-center">
                <p className="font-medium text-gray-800">{area}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700">
            We provide <strong>cash for gold services across Lajpat Nagar Delhi</strong> and surrounding areas. 
            Our central location makes us easily accessible from all parts of South Delhi.
          </p>
        </div>
      </section>

      {/* Location Information */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Lajpat Nagar Delhi Store</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
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


