import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://virajjewellers.com";

  // Static routes present in the codebase
  const routes = [
    "",
    "about",
    "contact",
    "best-gold-buyer-lajpat-nagar",
    "services/cash-for-gold",
    "services/sell-gold-lajpat-nagar",
    "services/gold-buyer-delhi",
    "services/instant-cash-silver",
    "services/diamond-buyers",
    "services/release-pledged-gold",
    "services/old-gold-exchange",
    "locations/lajpat-nagar",
    "locations/south-delhi",
    "blog",
    "blog/how-to-sell-gold-in-lajpat-nagar-howto",
    // Blog posts (slugs)
    "blog/how-to-get-best-price-for-gold-in-delhi",
    "blog/why-choose-lajpat-nagar-for-gold-selling",
    "blog/gold-rate-per-gram-delhi-guide",
    "blog/cash-for-gold-near-me-tips",
    "blog/how-to-sell-old-gold-in-delhi",
    "blog/instant-cash-for-silver-delhi",
    "blog/diamond-buyers-delhi-checklist",
    "blog/release-pledged-gold-process",
    "blog/avoid-common-mistakes-when-selling-gold",
    "blog/how-to-choose-gold-buyer-in-delhi",
    // FAQ
    "faq",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}/${path}`.replace(/\/+$/, ""),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}


