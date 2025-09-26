import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cash for Gold Lajpat Nagar | Instant Payment, Best Rates",
  description:
    "Get instant cash for gold in Lajpat Nagar with transparent XRF testing and best market rates. Trusted gold buyers in South Delhi.",
  alternates: { canonical: "https://virajjewellers.com/services/cash-for-gold" },
};

export default function CashForGoldPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Cash for Gold in Lajpat Nagar</h1>
        <p className="mt-4 text-gray-700">
          Sell old gold for instant cash in Lajpat Nagar. We are trusted
          <strong> Gold Buyers Near Me</strong> offering same-day payout,
          transparent testing and best market rates in Delhi NCR.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/contact" className="rounded bg-yellow-600 px-5 py-3 text-white">Call or Visit</a>
          <a href="/services/sell-gold-lajpat-nagar" className="rounded border px-5 py-3">Sell Gold Lajpat Nagar</a>
          <a href="/best-gold-buyer-lajpat-nagar" className="rounded border px-5 py-3">Best Gold Buyer in Lajpat Nagar</a>
        </div>
      </section>
    </main>
  );
}


