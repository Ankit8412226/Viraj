import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamond Buyers in Delhi | Fair Valuation, Instant Payment",
  description:
    "Sell diamonds in Delhi with confidence. Professional valuation and instant payment at Viraj Jewellers.",
  alternates: { canonical: "https://virajjewellers.com/services/diamond-buyers" },
};

export default function DiamondBuyersPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Diamond Buyers Delhi</h1>
        <p className="mt-4 text-gray-700">Sell certified and non-certified diamonds. Transparent, secure process.</p>
        <div className="mt-6 flex gap-3">
          <a href="/contact" className="rounded bg-yellow-600 px-5 py-3 text-white">Visit Our Office</a>
          <a href="/blog/how-to-choose-gold-buyer-in-delhi" className="rounded border px-5 py-3">Buyer Checklist</a>
        </div>
      </section>
    </main>
  );
}


