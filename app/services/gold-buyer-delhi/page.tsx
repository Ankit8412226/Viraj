import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold Buyer in Delhi | Best Price, Same-Day Payment",
  description:
    "Delhi's trusted gold buyer. Sell gold for best price with same-day payment and transparent testing.",
  alternates: { canonical: "https://virajjewellers.com/services/gold-buyer-delhi" },
};

export default function GoldBuyerDelhiPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Gold Buyer in Delhi</h1>
        <p className="mt-4 text-gray-700">
          We buy gold across <strong>South Delhi</strong> including Lajpat Nagar, CR
          Park, Nehru Place and Defence Colony. Get instant payment.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/services/cash-for-gold" className="rounded border px-5 py-3">Cash for Gold</a>
          <a href="/blog/how-to-get-best-price-for-gold-in-delhi" className="rounded border px-5 py-3">Read: Get Best Price</a>
        </div>
      </section>
    </main>
  );
}


