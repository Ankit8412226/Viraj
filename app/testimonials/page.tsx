import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Testimonials | Viraj Jewellers Cash for Gold Lajpat Nagar",
  description:
    "Read real customer testimonials of Viraj Jewellers — trusted cash for gold buyer in Lajpat Nagar. Instant payment, transparent testing, best rates in South Delhi.",
  alternates: { canonical: "https://virajjewellers.com/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">
          Customer Testimonials — Cash for Gold in Lajpat Nagar
        </h1>
        <p className="mt-4 text-gray-700">
          At <strong>Viraj Jewellers</strong>, we take pride in being the most
          trusted <strong>Cash for Gold buyer in Lajpat Nagar</strong> and
          across South Delhi. Our customers value our honesty, instant payments,
          and fair evaluations. Here’s what they have to say:
        </p>

        <div className="mt-8 space-y-8">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p className="italic text-gray-800">
              “I visited Viraj Jewellers to sell my gold and was amazed by their
              transparent testing process. They gave me the best market price
              instantly. Truly the most reliable place for{" "}
              <strong>cash for gold in Delhi NCR</strong>.”
            </p>
            <p className="mt-4 font-semibold text-gray-900">— Ankit Sharma</p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p className="italic text-gray-800">
              “If you are looking for genuine{" "}
              <strong>cash for gold in Lajpat Nagar</strong>, Viraj Jewellers is
              the only name you can trust. They made the whole process smooth
              and paid me instantly via UPI.”
            </p>
            <p className="mt-4 font-semibold text-gray-900">— Priya Malhotra</p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p className="italic text-gray-800">
              “Best experience ever! Viraj Jewellers not only gave me{" "}
              <strong>instant cash for gold</strong> but also explained the
              purity testing process step by step. Highly recommended.”
            </p>
            <p className="mt-4 font-semibold text-gray-900">— Rohit Verma</p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p className="italic text-gray-800">
              “I had some old gold jewellery and wanted to exchange it for cash.
              Viraj Jewellers provided me the best rate compared to other buyers
              in Delhi. Definitely the top place for{" "}
              <strong>cash against gold</strong>.”
            </p>
            <p className="mt-4 font-semibold text-gray-900">— Neha Kapoor</p>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/contact"
            className="rounded bg-yellow-600 px-5 py-3 font-medium text-white hover:bg-yellow-700"
          >
            Sell Your Gold Today — Get Instant Cash
          </a>
        </div>
      </section>
    </main>
  );
}
