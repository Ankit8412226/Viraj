import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Release Pledged Gold in Delhi | Hassle-Free Process",
  description:
    "Release pledged gold from banks/NBFCs with our assistance. Quick settlement and instant cash options.",
  alternates: { canonical: "https://virajjewellers.com/services/release-pledged-gold" },
};

export default function ReleasePledgedGoldPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Release Pledged Gold</h1>
        <p className="mt-4 text-gray-700">
          We help you close gold loans and release pledged gold quickly with
          transparent settlement and documentation.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/contact" className="rounded bg-yellow-600 px-5 py-3 text-white">Talk to an Expert</a>
          <a href="/services/cash-for-gold" className="rounded border px-5 py-3">Cash for Gold</a>
        </div>
      </section>
    </main>
  );
}


