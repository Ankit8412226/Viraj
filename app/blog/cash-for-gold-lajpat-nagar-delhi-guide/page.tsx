import type { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Cash for Gold Lajpat Nagar Delhi: Complete Guide (2025)",
  description:
    "Ultimate guide to getting the best cash for gold in Lajpat Nagar Delhi. Learn about current rates, trusted buyers, and how to get maximum value for your gold jewelry.",
  alternates: { canonical: "https://virajjewellers.com/blog/cash-for-gold-lajpat-nagar-delhi-guide" },
};

export default function CashForGoldLajpatNagarGuide() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cash for Gold in Lajpat Nagar Delhi: Complete Guide (2025)",
    "description": "Ultimate guide to getting the best cash for gold in Lajpat Nagar Delhi. Learn about current rates, trusted buyers, and how to get maximum value.",
    "image": "https://virajjewellers.com/images/cash-for-gold-lajpat-nagar.jpg",
    "datePublished": "2025-01-15T08:00:00+05:30",
    "dateModified": "2025-06-10T10:30:00+05:30",
    "author": {
      "@type": "Organization",
      "name": "Viraj Jewellers",
      "url": "https://virajjewellers.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Viraj Jewellers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://virajjewellers.com/images/virajLogo.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://virajjewellers.com/blog/cash-for-gold-lajpat-nagar-delhi-guide"
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <meta
          name="keywords"
          content="cash for gold lajpat nagar delhi, gold selling guide delhi, best gold rates lajpat nagar, sell gold jewelry delhi, gold buyers near me, gold exchange delhi"
        />
      </Head>

      <Script id="article-jsonld" type="application/ld+json">
        {JSON.stringify(articleLd)}
      </Script>

      <article className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">
          Cash for Gold in Lajpat Nagar Delhi: Complete Guide (2025)
        </h1>

        <div className="mt-4 flex items-center text-sm text-gray-500">
          <span>Published: January 15, 2025</span>
          <span className="mx-2">•</span>
          <span>Last Updated: June 10, 2025</span>
        </div>

        <Image
          src="/images/gold.jpeg"
          alt="Cash for Gold in Lajpat Nagar Delhi"
          width={1200}
          height={600}
          className="mt-6 rounded-lg object-cover"
        />

        <div className="mt-8 prose lg:prose-lg">
          <p className="lead text-lg">
            Looking to sell your gold for the best price in Lajpat Nagar, Delhi? This comprehensive guide covers everything you need to know about getting cash for gold in Lajpat Nagar Delhi, including current rates, trusted buyers, and tips to maximize your returns.
          </p>

          {/* ... rest of the content stays the same ... */}

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded bg-yellow-600 px-6 py-3 text-white font-medium hover:bg-yellow-700">
              Get a Free Gold Evaluation
            </Link>
            <Link href="/services/cash-for-gold" className="rounded border border-yellow-600 px-6 py-3 font-medium hover:bg-yellow-50">
              Learn About Our Cash for Gold Service
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
