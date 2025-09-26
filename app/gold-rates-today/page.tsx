import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold Rates Today Lajpat Nagar | Per Gram Price Delhi",
  description:
    "Live gold rate per gram in Lajpat Nagar, Delhi. Get today’s 24K/22K gold price and sell at best rates.",
  alternates: { canonical: "https://virajjewellers.com/gold-rates-today" },
};

export default function GoldRatesTodayPage() {
  const today = new Date().toISOString().split("T")[0];
  const rates = [
    { purity: "24K", price: "₹10,609" },
    { purity: "22K", price: "₹9,725" },
    { purity: "18K", price: "₹7,957" },
  ];

  const ld = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Gold Rates Today - Lajpat Nagar",
    description: "Live gold rate per gram for 24K/22K in Lajpat Nagar, Delhi",
    dateModified: new Date().toISOString(),
    creator: { "@type": "Organization", name: "Viraj Jewellers" },
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Gold Rates Today — Lajpat Nagar</h1>
        <p className="mt-2 text-gray-600">Updated: {today}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {rates.map((r) => (
            <div key={r.purity} className="rounded border p-4">
              <p className="text-gray-900 font-semibold">{r.purity} Gold</p>
              <p className="text-amber-700 text-xl font-bold">{r.price} / gram</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex gap-3">
          <a href="/services/cash-for-gold" className="rounded border px-5 py-3">Sell at Best Rates</a>
          <a href="/contact" className="rounded bg-yellow-600 px-5 py-3 text-white">Get Instant Cash Today</a>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </section>
    </main>
  );
}


