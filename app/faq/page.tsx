import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Cash for Gold Lajpat Nagar",
  description:
    "Frequently asked questions about selling gold in Lajpat Nagar and South Delhi.",
  alternates: { canonical: "https://virajjewellers.com/faq" },
};

const FAQ = [
  {
    q: "Where can I sell gold in Lajpat Nagar?",
    a: "Visit Viraj Jewellers, Central Market, Lajpat Nagar-II, Delhi. We provide on-spot testing and instant payment.",
  },
  {
    q: "How quickly do I get paid?",
    a: "Immediately after evaluation via Cash, UPI or Bank Transfer as per KYC norms.",
  },
  {
    q: "Do you buy damaged or old gold?",
    a: "Yes, valuation is based on purity and weight regardless of condition.",
  },
];

export default function FAQPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
        <ul className="mt-6 space-y-4">
          {FAQ.map((f) => (
            <li key={f.q}>
              <p className="font-semibold text-gray-900">{f.q}</p>
              <p className="text-gray-700">{f.a}</p>
            </li>
          ))}
        </ul>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </section>
    </main>
  );
}


