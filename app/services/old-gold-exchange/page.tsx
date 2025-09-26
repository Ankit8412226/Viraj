import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Old Gold Exchange Delhi | Upgrade Your Jewelry",
  description:
    "Exchange old gold jewelry at best value in Delhi. Transparent evaluation and instant settlement.",
  alternates: { canonical: "https://virajjewellers.com/services/old-gold-exchange" },
};

export default function OldGoldExchangePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Old Gold Exchange</h1>
        <p className="mt-4 text-gray-700">Upgrade or exchange old gold jewelry at fair market value.</p>
        <div className="mt-6 flex gap-3">
          <a href="/contact" className="rounded bg-yellow-600 px-5 py-3 text-white">Get a Quote</a>
          <a href="/services/cash-for-gold" className="rounded border px-5 py-3">Cash for Gold</a>
        </div>
      </section>
    </main>
  );
}


