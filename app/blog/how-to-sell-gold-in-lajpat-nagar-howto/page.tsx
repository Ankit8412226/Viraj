import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Sell Gold in Lajpat Nagar (Step-by-Step)",
  description:
    "A practical, step-by-step HowTo guide to sell gold in Lajpat Nagar for the best price.",
  alternates: { canonical: "https://virajjewellers.com/blog/how-to-sell-gold-in-lajpat-nagar-howto" },
};

export default function HowToSellGoldLajpatNagar() {
  const howtoLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Sell Gold in Lajpat Nagar",
    description:
      "A practical, step-by-step guide to sell gold in Lajpat Nagar for best price.",
    step: [
      {
        "@type": "HowToStep",
        name: "Gather Documents",
        text: "Carry ID proof for KYC, any purchase bill if available.",
      },
      {
        "@type": "HowToStep",
        name: "Visit Viraj Jewellers",
        text: "Reach our Central Market, Lajpat Nagar-II store for evaluation.",
      },
      {
        "@type": "HowToStep",
        name: "XRF Purity Testing",
        text: "Get on-spot purity testing done in your presence.",
      },
      {
        "@type": "HowToStep",
        name: "Get Best Price",
        text: "Receive a market-linked quote with a detailed breakdown.",
      },
      {
        "@type": "HowToStep",
        name: "Instant Payment",
        text: "Get paid instantly via Cash, UPI, or Bank Transfer.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">How to Sell Gold in Lajpat Nagar (Step-by-Step)</h1>
        <p className="mt-4 text-gray-700">
          Follow these steps to sell your gold for the best price in Lajpat Nagar
          with transparency and instant payout.
        </p>
        <ol className="mt-6 list-decimal space-y-2 pl-6 text-gray-700">
          <li>Carry ID proof for KYC; purchase bill if available.</li>
          <li>Visit Viraj Jewellers, Central Market, Lajpat Nagar-II.</li>
          <li>Get XRF purity testing done in your presence.</li>
          <li>Review the detailed evaluation and final quote.</li>
          <li>Receive instant payment via Cash, UPI, or Bank.</li>
        </ol>
        <div className="mt-8 flex gap-3">
          <Link className="rounded bg-yellow-600 px-5 py-3 text-white" href="/contact">Get Instant Cash Today</Link>
          <Link className="rounded border px-5 py-3" href="/services/cash-for-gold">Cash for Gold</Link>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoLd) }} />
      </article>
    </main>
  );
}


