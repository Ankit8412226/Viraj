import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Gold Buyer in Lajpat Nagar | Transparent & Highest Rates",
  description:
    "Compare top gold buyers in Lajpat Nagar. Viraj Jewellers offers transparent XRF testing, best market rates, and instant payment.",
  alternates: { canonical: "https://virajjewellers.com/best-gold-buyer-lajpat-nagar" },
};

export default function BestGoldBuyerPage() {
  const pros = [
    "Transparent XRF purity testing in your presence",
    "Instant payment via Cash / UPI / Bank Transfer",
    "Live market-linked pricing; no hidden cuts",
    "Secure, privacy-first evaluation area",
    "4.8/5 customer rating with 200+ reviews",
  ];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is the best gold buyer in Lajpat Nagar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Viraj Jewellers is a trusted buyer in Lajpat Nagar offering transparent testing, best market rates, and instant payouts.",
        },
      },
      {
        "@type": "Question",
        name: "How do you ensure best price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use calibrated XRF machines, match live market rates, and provide a detailed evaluation slip before payout.",
        },
      },
    ],
  };

  const reviewsLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Viraj Jewellers - Cash for Gold Lajpat Nagar",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "427",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Rajesh Kumar" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Best cash for gold service in Lajpat Nagar. Got instant cash with best rates and transparent testing.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Best Gold Buyer in Lajpat Nagar</h1>
        <p className="mt-4 text-gray-700">
          Looking for the <strong>best gold buyer in Lajpat Nagar</strong>?
          Choose Viraj Jewellers for transparent testing, highest market-linked
          pricing, and same-day payment.
        </p>

        <ul className="mt-6 list-disc space-y-2 pl-6 text-gray-700">
          {pros.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <div className="mt-8 flex gap-3">
          <Link className="rounded bg-yellow-600 px-5 py-3 text-white" href="/contact">Call Now</Link>
          <Link className="rounded border px-5 py-3" href="/services/cash-for-gold">Cash for Gold</Link>
          <Link className="rounded border px-5 py-3" href="/blog/how-to-get-best-price-for-gold-in-delhi">Get Best Price Tips</Link>
        </div>

        {/* On-page FAQ content */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900">FAQs</h2>
          <div className="mt-4 space-y-4">
            <div>
              <p className="font-medium text-gray-900">Who is the best gold buyer in Lajpat Nagar?</p>
              <p className="text-gray-700">Viraj Jewellers is trusted for transparent testing, best market rates and instant payouts.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">How do you ensure best price?</p>
              <p className="text-gray-700">We match live market rates and provide a detailed evaluation slip before payout.</p>
            </div>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsLd) }} />
      </section>
    </main>
  );
}


