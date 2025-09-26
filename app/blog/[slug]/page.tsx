import type { Metadata } from "next";
import Link from "next/link";

const POSTS: Record<string, { title: string; description: string; body: string }>= {
  "how-to-get-best-price-for-gold-in-delhi": {
    title: "How to Get Best Price for Gold in Delhi",
    description: "Actionable tips to maximize your gold selling price in Delhi.",
    body: "Use multiple quotes, visit reputed buyers in Lajpat Nagar, and verify purity with XRF testing for transparent pricing.",
  },
  "why-choose-lajpat-nagar-for-gold-selling": {
    title: "Why Choose Lajpat Nagar for Gold Selling",
    description: "Lajpat Nagar is a prime hub with competitive buyers and instant payouts.",
    body: "Central Market offers reputed buyers, competitive rates, and quick service for instant cash for gold.",
  },
  "gold-rate-per-gram-delhi-guide": {
    title: "Gold Rate per Gram: Delhi Guide",
    description: "Understand live gold rates per gram and how quotes are calculated.",
    body: "Quotes depend on purity, weight, and live market rates; always ask for transparent breakdowns.",
  },
  "cash-for-gold-near-me-tips": {
    title: "Cash for Gold Near Me: Tips",
    description: "How to pick a reliable nearby buyer and avoid low-ball offers.",
    body: "Check reviews, certifications, and insist on on-spot testing in your presence.",
  },
  "how-to-sell-old-gold-in-delhi": {
    title: "How to Sell Old Gold in Delhi",
    description: "A step-by-step guide from evaluation to instant payment.",
    body: "Carry ID for KYC, review the evaluation slip, and choose instant payout via cash/UPI/bank.",
  },
  "instant-cash-for-silver-delhi": {
    title: "Instant Cash for Silver in Delhi",
    description: "Best ways to sell silver items with confidence.",
    body: "Weigh items accurately and compare silver rates across reputable buyers.",
  },
  "diamond-buyers-delhi-checklist": {
    title: "Diamond Buyers in Delhi: Checklist",
    description: "What to verify before selling diamonds in Delhi.",
    body: "Verify 4Cs, ask for valuation documents, and ensure a secure transaction area.",
  },
  "release-pledged-gold-process": {
    title: "Release Pledged Gold: Step-by-Step",
    description: "Clear a gold loan and sell your gold seamlessly.",
    body: "Obtain a closure quote, coordinate with buyer for settlement, and collect ornaments.",
  },
  "avoid-common-mistakes-when-selling-gold": {
    title: "Avoid Common Mistakes When Selling Gold",
    description: "Common pitfalls and how to avoid underpricing.",
    body: "Avoid selling without testing, accept no verbal quotes; insist on written offers.",
  },
  "how-to-choose-gold-buyer-in-delhi": {
    title: "How to Choose a Gold Buyer in Delhi",
    description: "Key checks for reliability and fair pricing.",
    body: "Look for experience, transparent testing, and instant payments with proper KYC.",
  },
};

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = POSTS[params.slug];
  if (!post) return { title: "Blog" };
  return {
    title: `${post.title} | Cash for Gold Lajpat Nagar`,
    description: post.description,
    alternates: { canonical: `https://virajjewellers.com/blog/${params.slug}` },
  };
}

export default function BlogPostPage({ params }: Params) {
  const post = POSTS[params.slug];
  if (!post) return <main className="min-h-screen" />;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: "Viraj Jewellers" },
    publisher: { "@type": "Organization", name: "Viraj Jewellers" },
    mainEntityOfPage: `https://virajjewellers.com/blog/${params.slug}`,
  };
  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
        <p className="mt-4 text-gray-700">{post.body}</p>
        <div className="mt-8 flex gap-3">
          <Link className="rounded bg-yellow-600 px-5 py-3 text-white" href="/contact">Get Instant Cash Today</Link>
          <Link className="rounded border px-5 py-3" href="/services/cash-for-gold">Cash for Gold</Link>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      </article>
    </main>
  );
}


