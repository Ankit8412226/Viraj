import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Viraj Jewellers | Cash for Gold Lajpat Nagar",
  description:
    "Call +91-9876543210 or visit our Lajpat Nagar office. Instant cash for gold with transparent XRF testing and best market rates.",
  alternates: { canonical: "https://virajjewellers.com/contact" },
};

export default function ContactPage() {
  const phone = "+91-9876543210";
  const address = "Shop No. 45, Central Market, Lajpat Nagar-II, Delhi 110024";
  const mapsEmbed = "https://www.google.com/maps?q=Viraj+Jewellers+Lajpat+Nagar&output=embed";

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-gray-700">
          Visit us for <strong>Cash for Gold in Lajpat Nagar</strong>. Instant
          payout, transparent testing and best market rates.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <div className="rounded border p-4">
              <h2 className="text-xl font-semibold">Viraj Jewellers</h2>
              <p className="mt-2 text-gray-700">{address}</p>
              <a
                href={`tel:${phone}?utm_source=gbp&utm_medium=call_button&utm_campaign=local_seo`}
                className="mt-4 inline-block rounded bg-yellow-600 px-5 py-3 font-medium text-white hover:bg-yellow-700"
              >
                Call Now: {phone}
              </a>
            </div>
          </div>
          <div className="h-80 w-full overflow-hidden rounded">
            <iframe
              src={mapsEmbed}
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              aria-label="Map of Viraj Jewellers Lajpat Nagar"
            />
          </div>
        </div>
      </section>
    </main>
  );
}


