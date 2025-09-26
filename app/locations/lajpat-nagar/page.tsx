import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cash for Gold in Lajpat Nagar | Viraj Jewellers",
  description:
    "Sell gold for instant cash in Lajpat Nagar. Trusted gold buyers offering best market rates and same-day payment.",
  alternates: { canonical: "https://virajjewellers.com/locations/lajpat-nagar" },
};

export default function LajpatNagarLocationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Cash for Gold — Lajpat Nagar</h1>
        <p className="mt-4 text-gray-700">
          Serving Central Market and nearby areas: Nehru Place, CR Park, Greater
          Kailash, Defence Colony, Kalkaji and Govindpuri.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/services/cash-for-gold" className="rounded border px-5 py-3">Cash for Gold</a>
          <a href="/contact" className="rounded bg-yellow-600 px-5 py-3 text-white">Get Instant Cash Today</a>
        </div>
      </section>
    </main>
  );
}


