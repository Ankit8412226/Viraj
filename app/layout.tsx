import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title:
    "Cash For Gold Delhi NCR - Instant Cash Against Gold Jewelry | Lowest Interest Rates 2025 | Viraj Jewellers Lajpat Nagar",
  description:
    "Get instant cash for gold in Delhi NCR with lowest interest rates starting 9.5% p.a. Doorstep service in Lajpat Nagar, South Delhi. Gold loan calculator, quick approval in 15 minutes. Best gold loan rates per gram today at Viraj Jewellers.",
  icons: [
    {
      url: "/favicon.ico",
      type: "image/x-icon",
      sizes: "any",
    },
  ],
  keywords: [
    // Primary keywords
    "gold loan delhi",
    "gold loan ncr",
    "gold loan lajpat nagar",
    "gold loan south delhi",
    "gold loan interest rate delhi",
    "instant gold loan delhi",
    "gold loan calculator delhi",
    "gold loan per gram delhi",
    "lowest gold loan interest rate delhi",

    // Location-based keywords
    "gold loan near me delhi",
    "gold loan lajpat nagar doorstep",
    "gold loan cr park",
    "gold loan green park",
    "gold loan nehru place",
    "gold loan kalkaji",
    "gold loan govindpuri",
    "gold loan greater kailash",
    "gold loan saket",
    "gold loan defence colony",
    "gold loan new delhi",
    "gold loan noida",
    "gold loan gurgaon",
    "gold loan faridabad",
    "gold loan ghaziabad",

    // Long-tail keywords
    "gold loan against jewelry delhi",
    "instant cash against gold delhi",
    "gold loan quick approval delhi",
    "gold loan no documents delhi",
    "best gold loan rates delhi ncr",
    "gold loan same day approval delhi",
    "gold loan doorstep service lajpat nagar",

    // Service-related keywords
    "doorstep gold loan service delhi",
    "home gold loan service south delhi",
    "gold loan valuation delhi",
    "secure gold storage delhi",
    "gold loan repayment options delhi",

    // Competitive keywords
    "viraj jewellers gold loan delhi",
    "trusted gold loan provider delhi",
    "professional gold loan service lajpat nagar",
  ].join(", "),

  authors: [{ name: "Viraj Jewellers" }],
  creator: "Viraj Jewellers",
  publisher: "Viraj Jewellers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title:
      "Gold Loan Delhi NCR - Instant Cash Against Gold | Lowest Rates 2025",
    description:
      "Get instant gold loan with lowest interest rates in Delhi NCR. Doorstep service in Lajpat Nagar, South Delhi. Quick 15-min approval, up to 85% gold value. Professional gold loan calculator available.",
    type: "website",
    locale: "en_IN",
    url: "https://virajjewellers.com",
    siteName: "Viraj Jewellers - Gold Loan Delhi NCR",
    images: [
      {
        url: "https://virajjewellers.com/images/gold-loan-delhi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gold Loan Delhi NCR - Instant Cash Against Gold Jewelry in Lajpat Nagar",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gold Loan Delhi NCR - Instant Cash Against Gold | Lowest Rates",
    description:
      "Get instant gold loan with doorstep service in Delhi NCR, Lajpat Nagar. Quick approval, best rates, professional valuation. Calculate your gold loan amount now.",
    images: ["https://virajjewellers.com/images/gold-loan-delhi-twitter.jpg"],
    creator: "@virajjewellers",
    site: "@virajjewellers",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://virajjewellers.com",
    languages: {
      "en-IN": "https://virajjewellers.com",
      "hi-IN": "https://virajjewellers.com/hi",
      "mr-IN": "https://virajjewellers.com/mr",
    },
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification-code",
    },
  },

  category: "financial services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://virajjewellers.com/#organization",
        name: "Viraj Jewellers",
        alternateName: "Viraj Jewellers Delhi NCR",
        url: "https://virajjewellers.com",
        logo: {
          "@type": "ImageObject",
          url: "https://virajjewellers.com/images/viraj-jewellers-logo.png",
          width: 512,
          height: 512,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9876543210",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "hi"],
        },
        sameAs: [
          "https://www.facebook.com/virajjewellers",
          "https://www.instagram.com/virajjewellers",
          "https://twitter.com/virajjewellers",
          "https://www.linkedin.com/company/virajjewellers",
        ],
        founder: {
          "@type": "Person",
          name: "Viraj Shah",
        },
        foundingDate: "1985",
        legalName: "Viraj Jewellers Private Limited",
        taxID: "07XXXXX0000X1Z1",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://virajjewellers.com/#localbusiness",
        name: "Viraj Jewellers - Gold Loan Delhi NCR",
        image:
          "https://virajjewellers.com/images/viraj-jewellers-lajpat-nagar.jpg",
        description:
          "Leading gold loan provider in Delhi NCR offering instant cash against gold jewelry with lowest interest rates, doorstep service in Lajpat Nagar, and quick 15-minute approval process.",
        url: "https://virajjewellers.com",
        telephone: "+91-9876543210",
        priceRange: "₹₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Shop No. 45, Central Market, Lajpat Nagar-II",
          addressLocality: "Lajpat Nagar",
          addressRegion: "Delhi",
          postalCode: "110024",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.5665,
          longitude: 77.2431,
        },
        openingHours: ["Mo-Sa 10:00-19:00"],
        paymentAccepted: [
          "Cash",
          "Credit Card",
          "Debit Card",
          "Bank Transfer",
          "UPI",
        ],
        currenciesAccepted: "INR",
        areaServed: [
          "Delhi",
          "Delhi NCR",
          "Lajpat Nagar",
          "South Delhi",
          "CR Park",
          "Green Park",
          "Nehru Place",
          "Kalkaji",
          "Govindpuri",
          "Greater Kailash",
          "Saket",
          "Defence Colony",
          "New Delhi",
          "Noida",
          "Gurgaon",
          "Faridabad",
          "Ghaziabad",
        ],
      },
      {
        "@type": "FinancialService",
        "@id": "https://virajjewellers.com/#financialservice",
        name: "Gold Loan Service",
        description:
          "Professional gold loan services with instant cash disbursement against gold jewelry and ornaments",
        provider: {
          "@id": "https://virajjewellers.com/#organization",
        },
        serviceType: "Gold Loan",
        areaServed: {
          "@type": "State",
          name: "Delhi",
          containedInPlace: {
            "@type": "Country",
            name: "India",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Gold Loan Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Instant Gold Loan",
                description:
                  "Get instant cash against gold jewelry with quick 15-minute approval",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "INR",
                price: "9.5",
                unitText: "percent per annum",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Doorstep Gold Loan",
                description:
                  "Home visit gold loan service for evaluation and processing",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gold Loan Calculator",
                description:
                  "Free online gold loan calculator to estimate loan amount",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://virajjewellers.com/#website",
        url: "https://virajjewellers.com",
        name: "Viraj Jewellers - Gold Loan Delhi NCR",
        description:
          "Delhi NCR's trusted gold loan provider since 1985. Instant cash against gold with lowest interest rates and doorstep service in Lajpat Nagar.",
        inLanguage: "en-IN",
        isPartOf: {
          "@id": "https://virajjewellers.com/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://virajjewellers.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://virajjewellers.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://virajjewellers.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gold Loan",
            item: "https://virajjewellers.com/gold-loan",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://virajjewellers.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the interest rate for gold loan at Viraj Jewellers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer gold loan interest rates starting from 9.5% per annum, which are among the lowest in Mumbai. Rates may vary based on loan amount and tenure.",
            },
          },
          {
            "@type": "Question",
            name: "How much gold loan can I get per gram?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can get up to 85% of the current market value of your gold. Use our gold loan calculator to get an instant estimate based on current gold rates.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide doorstep gold loan service in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide free doorstep gold loan service across Mumbai and nearby areas. Our experts visit your home for gold evaluation and loan processing.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Primary SEO Meta Tags */}
        <meta
          name="title"
          content="Gold Loan Delhi NCR - Instant Cash Against Gold | Lowest Interest Rates 2025"
        />
        <meta
          name="description"
          content="Get instant gold loan in Delhi NCR with lowest interest rates starting 9.5% p.a. Doorstep service in Lajpat Nagar, South Delhi. Gold loan calculator, quick 15-min approval. Best gold loan rates per gram at Viraj Jewellers."
        />
        <meta
          name="keywords"
          content="gold loan delhi, gold loan ncr, gold loan lajpat nagar, instant gold loan delhi, doorstep gold loan service delhi, gold loan south delhi"
        />

        {/* Geographic SEO */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta name="geo.position" content="28.5665;77.2431" />
        <meta name="ICBM" content="28.5665, 77.2431" />

        {/* Business Information */}
        <meta name="contact" content="support@virajjewellers.com" />
        <meta
          name="copyright"
          content="© 2025 Viraj Jewellers. All rights reserved."
        />
        <meta name="author" content="Viraj Jewellers" />
        <meta name="reply-to" content="support@virajjewellers.com" />
        <meta name="owner" content="Viraj Jewellers" />
        <meta name="url" content="https://virajjewellers.com" />
        <meta name="identifier-URL" content="https://virajjewellers.com" />

        {/* Enhanced OpenGraph */}
        <meta
          property="og:title"
          content="Gold Loan Delhi NCR - Instant Cash Against Gold | Lowest Interest Rates 2025"
        />
        <meta
          property="og:description"
          content="Get instant gold loan with lowest interest rates in Delhi NCR. Doorstep service in Lajpat Nagar, South Delhi. Quick 15-min approval, up to 85% gold value. Professional gold loan calculator available."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virajjewellers.com" />
        <meta
          property="og:image"
          content="https://virajjewellers.com/images/gold-loan-delhi-og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Gold Loan Delhi NCR - Instant Cash Against Gold Jewelry in Lajpat Nagar"
        />
        <meta property="og:site_name" content="Viraj Jewellers" />
        <meta property="og:locale" content="en_IN" />

        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gold Loan Delhi NCR - Instant Cash Against Gold | Lowest Rates"
        />
        <meta
          name="twitter:description"
          content="Get instant gold loan with doorstep service in Delhi NCR, Lajpat Nagar. Quick approval, best rates, professional valuation. Calculate your gold loan amount now."
        />
        <meta
          name="twitter:image"
          content="https://virajjewellers.com/images/gold-loan-delhi-twitter.jpg"
        />
        <meta name="twitter:creator" content="@virajjewellers" />
        <meta name="twitter:site" content="@virajjewellers" />

        {/* Canonical and Alternate URLs */}
        <link rel="canonical" href="https://virajjewellers.com" />
        <link
          rel="alternate"
          href="https://virajjewellers.com"
          hrefLang="en-in"
        />
        <link
          rel="alternate"
          href="https://virajjewellers.com/hi"
          hrefLang="hi-in"
        />
        <link
          rel="alternate"
          href="https://virajjewellers.com/mr"
          hrefLang="mr-in"
        />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f59e0b" />

        {/* Performance and Technical SEO */}
        <meta name="theme-color" content="#f59e0b" />
        <meta name="msapplication-TileColor" content="#f59e0b" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Additional Structured Data for Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Gold Loan Mumbai",
              description:
                "Instant cash loans against gold jewelry with lowest interest rates and doorstep service in Mumbai",
              provider: {
                "@type": "Organization",
                name: "Viraj Jewellers",
                url: "https://virajjewellers.com",
              },
              areaServed: {
                "@type": "City",
                name: "Delhi",
                containedInPlace: {
                  "@type": "State",
                  name: "Delhi",
                  containedInPlace: {
                    "@type": "Country",
                    name: "India",
                  },
                },
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Gold Loan Packages",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Instant Gold Loan",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "INR",
                      price: "9.5",
                      unitText: "percent per annum",
                    },
                  },
                ],
              },
              serviceType: "Financial Service",
              serviceOutput: "Instant Cash Loan",
            }),
          }}
        />

        {/* Rich Snippets for Reviews */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              itemReviewed: {
                "@type": "LocalBusiness",
                name: "Viraj Jewellers Gold Loan",
              },
              ratingValue: "4.8",
              reviewCount: "247",
              bestRating: "5",
              worstRating: "1",
            }),
          }}
        />

        {/* Performance Monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'Gold Loan Mumbai - Viraj Jewellers',
                custom_map: {'dimension1': 'gold_loan_page'}
              });
            `,
          }}
        />
      </head>

      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gradient-to-br from-amber-50 to-yellow-50`}
      >
        {/* Skip Navigation for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow-600 text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="hidden">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <a itemProp="item" href="https://virajjewellers.com">
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <span itemProp="name">Gold Loan Delhi NCR</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <main id="main-content">{children}</main>

        {/* Performance Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js');
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
