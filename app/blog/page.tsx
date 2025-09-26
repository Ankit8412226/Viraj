import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Cash for Gold Lajpat Nagar & Delhi NCR",
  description:
    "Tips to sell gold for best price in Delhi, guides for Lajpat Nagar sellers, and more.",
  alternates: { canonical: "https://virajjewellers.com/blog" },
};

const posts = [
  { slug: "how-to-get-best-price-for-gold-in-delhi", title: "How to Get Best Price for Gold in Delhi" },
  { slug: "why-choose-lajpat-nagar-for-gold-selling", title: "Why Choose Lajpat Nagar for Gold Selling" },
  { slug: "gold-rate-per-gram-delhi-guide", title: "Gold Rate per Gram: Delhi Guide" },
  { slug: "cash-for-gold-near-me-tips", title: "Cash for Gold Near Me: Tips" },
  { slug: "how-to-sell-old-gold-in-delhi", title: "How to Sell Old Gold in Delhi" },
  { slug: "instant-cash-for-silver-delhi", title: "Instant Cash for Silver in Delhi" },
  { slug: "diamond-buyers-delhi-checklist", title: "Diamond Buyers in Delhi: Checklist" },
  { slug: "release-pledged-gold-process", title: "Release Pledged Gold: Step-by-Step" },
  { slug: "avoid-common-mistakes-when-selling-gold", title: "Avoid Common Mistakes When Selling Gold" },
  { slug: "how-to-choose-gold-buyer-in-delhi", title: "How to Choose a Gold Buyer in Delhi" },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
        <ul className="mt-6 space-y-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link className="text-yellow-700 hover:underline" href={`/blog/${p.slug}`}>
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}


