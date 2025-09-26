import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Viraj Jewellers | Trusted Gold Buyer Lajpat Nagar",
  description:
    "Trusted cash for gold buyer in Lajpat Nagar since 1985. Transparent testing, instant payment, best market rates across South Delhi.",
  alternates: { canonical: "https://virajjewellers.com/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">
          About Viraj Jewellers — Cash for Gold Lajpat Nagar
        </h1>
        <p className="mt-4 text-gray-700">
          Since 1985, Viraj Jewellers has been a trusted name for
          <strong> Cash for Gold in Lajpat Nagar</strong> and across Delhi NCR.
          We follow a 100% transparent testing process using calibrated XRF
          machines and pay instantly via Cash, UPI or Bank Transfer.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-6 text-gray-700">
          <li>Instant payment after on-spot purity testing</li>
          <li>Best market rates updated to live gold price</li>
          <li>Government-compliant KYC and billing</li>
          <li>Private, secure evaluation area</li>
        </ul>
        <div className="mt-8">
          <a
            href="/contact"
            className="rounded bg-yellow-600 px-5 py-3 font-medium text-white hover:bg-yellow-700"
          >
            Visit Our Office in Lajpat Nagar
          </a>
        </div>
      </section>
    </main>
  );
}


