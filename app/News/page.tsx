import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest News & Updates | Viraj Jewellers Cash for Gold Lajpat Nagar",
  description:
    "Stay updated with Viraj Jewellers news — market gold price updates, cash for gold trends in Lajpat Nagar, and customer announcements from South Delhi.",
  alternates: { canonical: "https://www.virajjeweller.com/news" },
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">
          Viraj Jewellers News — Cash for Gold Updates
        </h1>
        <p className="mt-4 text-gray-700">
          Welcome to the official news and updates section of{" "}
          <strong>Viraj Jewellers</strong>. Here, we share the latest{" "}
          <strong>Cash for Gold</strong> trends, gold price updates, and
          important announcements for our valued customers in{" "}
          <strong>Lajpat Nagar</strong> and across South Delhi.
        </p>

        <div className="mt-10 space-y-8">
          {/* Example News Item */}
          <article className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Gold Prices Rise in Delhi — Best Time for Cash for Gold
            </h2>
            <p className="mt-2 text-gray-700">
              With international gold prices on the rise, Viraj Jewellers offers
              customers the most competitive <strong>cash for gold</strong>{" "}
              rates in Lajpat Nagar. Visit us for instant evaluation and
              same-day payment.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Published: Sept 20, 2025
            </p>
          </article>

          <article className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Viraj Jewellers Expands Instant Cash for Gold Services
            </h2>
            <p className="mt-2 text-gray-700">
              To serve our customers better, Viraj Jewellers has introduced{" "}
              <strong>UPI and Bank Transfer options</strong> for instant{" "}
              <strong>cash against gold</strong> payments. Your convenience and
              trust are our top priorities.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Published: Sept 10, 2025
            </p>
          </article>

          <article className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Customer Awareness — Avoid Fake Cash for Gold Buyers
            </h2>
            <p className="mt-2 text-gray-700">
              Many unauthorized dealers operate in Delhi. Always choose a
              government-compliant and trusted brand like{" "}
              <strong>Viraj Jewellers</strong> for safe and transparent{" "}
              <strong>cash for gold transactions</strong>.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Published: Aug 28, 2025
            </p>
          </article>
        </div>

        <div className="mt-10">
          <a
            href="/contact"
            className="rounded bg-yellow-600 px-5 py-3 font-medium text-white hover:bg-yellow-700"
          >
            Contact Us for Cash for Gold in Lajpat Nagar
          </a>
        </div>
      </section>
    </main>
  );
}
