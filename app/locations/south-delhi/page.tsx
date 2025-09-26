import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cash for Gold in South Delhi | Lajpat Nagar, GK, CR Park",
  description:
    "Instant cash for gold across South Delhi including Lajpat Nagar, GK, CR Park, Nehru Place, Kalkaji.",
  alternates: { canonical: "https://virajjewellers.com/locations/south-delhi" },
};

export default function SouthDelhiLocationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Cash for Gold — South Delhi</h1>
        <p className="mt-4 text-gray-700">
          We serve Lajpat Nagar, Greater Kailash, CR Park, Nehru Place, Defence
          Colony, Kalkaji, and nearby areas with instant cash payment.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/services/gold-buyer-delhi" className="rounded border px-5 py-3">Gold Buyer in Delhi</a>
          <a href="/contact" className="rounded bg-yellow-600 px-5 py-3 text-white">Call Now</a>
        </div>
      </section>
    </main>
  );
}


