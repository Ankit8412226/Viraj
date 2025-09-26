import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instant Cash for Silver in Delhi | Sell Silver Today",
  description:
    "Sell silver for instant cash in Delhi. Transparent testing and best market rates at Viraj Jewellers.",
  alternates: { canonical: "https://virajjewellers.com/services/instant-cash-silver" },
};

export default function InstantCashSilverPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Instant Cash for Silver</h1>
        <p className="mt-4 text-gray-700">We buy silver coins, utensils and jewelry. Same-day payout.</p>
        <div className="mt-6 flex gap-3">
          <a href="/contact" className="rounded bg-yellow-600 px-5 py-3 text-white">Call Now</a>
          <a href="/services/cash-for-gold" className="rounded border px-5 py-3">Cash for Gold</a>
        </div>
      </section>
    </main>
  );
}


