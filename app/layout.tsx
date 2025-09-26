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
    // Hyper-focused primary keywords for ranking improvement
    "cash for gold lajpat nagar",
    "cash for gold delhi ncr",
    "instant cash for gold lajpat nagar",
    "gold buyer lajpat nagar",
    "sell gold lajpat nagar",
    "gold loan lajpat nagar",
    "cash against gold lajpat nagar",
    "gold loan delhi",
    "gold loan ncr",
    "gold loan south delhi",
    "gold loan interest rate delhi",
    "instant gold loan delhi",
    "gold loan calculator delhi",
    "gold loan per gram delhi",
    "lowest gold loan interest rate delhi",

    // Enhanced location-based keywords for local SEO dominance
    "cash for gold near me lajpat nagar",
    "gold buyer near lajpat nagar metro",
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

    // Long-tail keywords with high commercial intent
    "gold loan against jewelry lajpat nagar",
    "instant cash against gold delhi",
    "gold loan quick approval delhi",
    "gold loan no documents delhi",
    "best gold loan rates delhi ncr",
    "gold loan same day approval delhi",
    "gold loan doorstep service lajpat nagar",
    "highest gold rate lajpat nagar today",
    "trusted gold buyer lajpat nagar",

    // Service-related keywords with local focus
    "doorstep gold loan service delhi",
    "home gold loan service south delhi",
    "gold loan valuation delhi",
    "secure gold storage delhi",
    "gold loan repayment options delhi",
    "24 hours gold loan lajpat nagar",
    "emergency cash for gold delhi",

    // Competitive keywords with brand focus
    "viraj jewellers gold loan delhi",
    "viraj jewellers lajpat nagar",
    "trusted gold loan provider delhi",
    "professional gold loan service lajpat nagar",
    "established gold buyer delhi since 1985",
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
      "Cash For Gold Lajpat Nagar - Instant Cash Against Gold | Lowest Rates 2025",
    description:
      "Get instant cash for gold with lowest interest rates in Lajpat Nagar, Delhi NCR. Doorstep service, Quick 15-min approval, up to 85% gold value. Professional gold evaluation by Viraj Jewellers since 1985.",
    type: "website",
    locale: "en_IN",
    url: "https://virajjewellers.com",
    siteName: "Viraj Jewellers - Cash For Gold Lajpat Nagar Delhi NCR",
    images: [
      {
        url: "https://virajjewellers.com/images/cash-for-gold-lajpat-nagar-og.jpg",
        width: 1200,
        height: 630,
        alt: "Cash For Gold Lajpat Nagar - Instant Cash Against Gold Jewelry by Viraj Jewellers",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cash For Gold Lajpat Nagar - Instant Cash | Best Rates Delhi NCR",
    description:
      "Get instant cash for gold with doorstep service in Lajpat Nagar, Delhi NCR. Quick approval, best rates, professional valuation. Trusted since 1985.",
    images: ["https://virajjewellers.com/images/cash-for-gold-lajpat-nagar-twitter.jpg"],
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
        alternateName: ["Viraj Jewellers Delhi NCR", "Cash For Gold Lajpat Nagar", "Viraj Jewellers Lajpat Nagar"],
        url: "https://virajjewellers.com",
        logo: {
          "@type": "ImageObject",
          url: "https://virajjewellers.com/images/viraj-jewellers-logo.png",
          width: 512,
          height: 512,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-9876543210",
            contactType: "customer service",
            areaServed: ["Delhi", "Delhi NCR", "Lajpat Nagar", "South Delhi"],
            availableLanguage: ["en", "hi"],
            serviceUrl: "https://virajjewellers.com/contact"
          },
          {
            "@type": "ContactPoint",
            telephone: "+91-9876543210",
            contactType: "sales",
            areaServed: ["Delhi", "Delhi NCR", "Lajpat Nagar"],
            availableLanguage: ["en", "hi"],
            serviceUrl: "https://virajjewellers.com"
          }
        ],
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
        slogan: "Cash For Gold Lajpat Nagar - Trusted Since 1985",
        knowsAbout: ["Gold Loan", "Cash For Gold", "Gold Jewelry Evaluation", "Instant Cash Against Gold"],
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cash For Gold Lajpat Nagar",
            description: "Instant cash for gold jewelry with doorstep service"
          }
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://virajjewellers.com/#localbusiness",
        name: "Viraj Jewellers - Cash For Gold Lajpat Nagar",
        image: [
          "https://virajjewellers.com/images/viraj-jewellers-lajpat-nagar.jpg",
          "https://virajjewellers.com/images/cash-for-gold-lajpat-nagar.jpg",
          "https://virajjewellers.com/images/gold-loan-delhi-ncr.jpg"
        ],
        description:
          "Leading cash for gold and gold loan provider in Lajpat Nagar, Delhi NCR offering instant cash against gold jewelry with lowest interest rates, doorstep service, and quick 15-minute approval process. Trusted since 1985.",
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
        openingHours: ["Mo-Sa 10:00-19:00", "Su 11:00-17:00"],
        paymentAccepted: [
          "Cash",
          "Credit Card",
          "Debit Card",
          "Bank Transfer",
          "UPI",
          "NEFT",
          "RTGS"
        ],
        currenciesAccepted: "INR",
        areaServed: [
          "Lajpat Nagar",
          "Delhi",
          "Delhi NCR",
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
        specialties: [
          "Cash For Gold",
          "Gold Loan",
          "Gold Jewelry Evaluation",
          "Doorstep Gold Service",
          "Instant Cash Against Gold"
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "347",
          bestRating: "5",
          worstRating: "1"
        },
        review: [
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5"
            },
            author: {
              "@type": "Person",
              name: "Rajesh Kumar"
            },
            reviewBody: "Best cash for gold service in Lajpat Nagar. Got instant cash with best rates and doorstep service."
          }
        ]
      },
      {
        "@type": "FinancialService",
        "@id": "https://virajjewellers.com/#financialservice",
        name: "Cash For Gold and Gold Loan Service Lajpat Nagar",
        description:
          "Professional cash for gold and gold loan services with instant cash disbursement against gold jewelry and ornaments in Lajpat Nagar, Delhi NCR",
        provider: {
          "@id": "https://virajjewellers.com/#organization",
        },
        serviceType: ["Gold Loan", "Cash For Gold", "Gold Evaluation"],
        areaServed: [
          {
            "@type": "City",
            name: "Delhi",
            containedInPlace: {
              "@type": "Country",
              name: "India",
            },
          },
          {
            "@type": "Neighborhood",
            name: "Lajpat Nagar",
            containedInPlace: {
              "@type": "City",
              name: "Delhi"
            }
          }
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cash For Gold and Gold Loan Services Lajpat Nagar",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Instant Cash For Gold Lajpat Nagar",
                description:
                  "Get instant cash for gold jewelry with quick evaluation and best market rates in Lajpat Nagar",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "INR",
                description: "Up to 85% of current gold market value",
              },
              availableAtOrFrom: {
                "@type": "Place",
                name: "Lajpat Nagar, Delhi"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gold Loan Lajpat Nagar",
                description:
                  "Gold loan with lowest interest rates starting 9.5% per annum",
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
                name: "Doorstep Cash For Gold Service",
                description:
                  "Home visit cash for gold service for evaluation and processing in Lajpat Nagar area",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gold Loan Calculator",
                description:
                  "Free online gold loan calculator to estimate loan amount based on current gold rates",
              },
            },
          ],
        },
        serviceOutput: ["Instant Cash", "Gold Loan", "Gold Valuation Certificate"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "19:00"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://virajjewellers.com/#website",
        url: "https://virajjewellers.com",
        name: "Viraj Jewellers - Cash For Gold Lajpat Nagar Delhi NCR",
        description:
          "Delhi NCR's trusted cash for gold and gold loan provider since 1985. Instant cash against gold with lowest interest rates and doorstep service in Lajpat Nagar.",
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
        mainEntity: {
          "@id": "https://virajjewellers.com/#localbusiness"
        }
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
            name: "Cash For Gold Lajpat Nagar",
            item: "https://virajjewellers.com/cash-for-gold-lajpat-nagar",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Gold Loan Delhi NCR",
            item: "https://virajjewellers.com/gold-loan-delhi-ncr",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://virajjewellers.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best cash for gold rate in Lajpat Nagar today?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer the best cash for gold rates in Lajpat Nagar, providing up to 85% of current market value. Our rates are updated daily and are among the highest in Delhi NCR. Visit us for instant evaluation and cash payment.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide doorstep cash for gold service in Lajpat Nagar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide free doorstep cash for gold service across Lajpat Nagar and nearby areas in South Delhi. Our certified experts visit your home for gold evaluation and instant cash payment with complete security and transparency.",
            },
          },
          {
            "@type": "Question",
            name: "What is the interest rate for gold loan at Viraj Jewellers Lajpat Nagar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer gold loan interest rates starting from 9.5% per annum, which are among the lowest in Delhi NCR. Rates may vary based on loan amount and tenure. Get instant approval within 15 minutes.",
            },
          },
          {
            "@type": "Question",
            name: "How much gold loan can I get per gram in Lajpat Nagar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can get up to 85% of the current market value of your gold per gram. Use our gold loan calculator to get an instant estimate based on today's gold rates in Lajpat Nagar market.",
            },
          },
          {
            "@type": "Question",
            name: "Is Viraj Jewellers a trusted cash for gold buyer in Lajpat Nagar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Viraj Jewellers has been a trusted cash for gold buyer in Lajpat Nagar since 1985. We are a licensed gold buyer with transparent processes, best rates, and thousands of satisfied customers across Delhi NCR.",
            },
          },
          {
            "@type": "Question",
            name: "What documents are required for cash for gold in Lajpat Nagar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For cash for gold transactions in Lajpat Nagar, you need a valid government ID proof (Aadhaar, PAN, Passport, or Driving License). For amounts above ₹50,000, additional KYC documents may be required as per RBI guidelines.",
            },
          }
        ],
      },
      {
        "@type": "Place",
        "@id": "https://virajjewellers.com/#place",
        name: "Viraj Jewellers Lajpat Nagar",
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
        containedInPlace: {
          "@type": "Neighborhood",
          name: "Lajpat Nagar",
          containedInPlace: {
            "@type": "City",
            name: "Delhi"
          }
        }
      }
    ],
  };

  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Ahrefs Site Verification - Critical for SEO tracking */}
        <meta name="ahrefs-site-verification" content="17ca76f4811ad89dca03d8ea8f6e9c7c75797742922ed85bdffb5b1e9644aaba" />

        {/* Enhanced Primary SEO Meta Tags for "Cash For Gold Lajpat Nagar" */}
        <meta
          name="title"
          content="Cash For Gold Lajpat Nagar - Instant Cash Against Gold Jewelry | Best Rates Delhi NCR 2025 | Viraj Jewellers"
        />
        <meta
          name="description"
          content="★ Cash For Gold Lajpat Nagar ★ Get instant cash for gold jewelry with best rates in Delhi NCR. Doorstep service, 15-min approval, up to 85% value. Trusted since 1985. Call now for free evaluation!"
        />
        <meta
          name="keywords"
          content="cash for gold lajpat nagar, instant cash for gold delhi ncr, gold buyer lajpat nagar, sell gold lajpat nagar, gold loan lajpat nagar, cash against gold delhi, viraj jewellers lajpat nagar"
        />

        {/* Enhanced Geographic SEO for Local Dominance */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Lajpat Nagar, Delhi" />
        <meta name="geo.position" content="28.5665;77.2431" />
        <meta name="ICBM" content="28.5665, 77.2431" />
        <meta name="DC.title" content="Cash For Gold Lajpat Nagar - Viraj Jewellers" />

        {/* Business Information for Local SEO */}
        <meta name="contact" content="support@virajjewellers.com" />
        <meta name="copyright" content="© 2025 Viraj Jewellers. All rights reserved." />
        <meta name="author" content="Viraj Jewellers - Cash For Gold Lajpat Nagar" />
        <meta name="reply-to" content="support@virajjewellers.com" />
        <meta name="owner" content="Viraj Jewellers" />
        <meta name="url" content="https://virajjewellers.com" />
        <meta name="identifier-URL" content="https://virajjewellers.com" />
        <meta name="subject" content="Cash For Gold and Gold Loan Services in Lajpat Nagar, Delhi NCR" />
        <meta name="coverage" content="Lajpat Nagar, Delhi NCR, India" />
        <meta name="distribution" content="Local" />
        <meta name="rating" content="General" />

        {/* Enhanced OpenGraph with Local Focus */}
        <meta
          property="og:title"
          content="Cash For Gold Lajpat Nagar - Instant Cash | Best Rates Delhi NCR 2025"
        />
        <meta
          property="og:description"
          content="★ Get instant cash for gold in Lajpat Nagar with best rates in Delhi NCR. Doorstep service, 15-min approval, up to 85% gold value. Trusted gold buyer since 1985. Free evaluation!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virajjewellers.com" />
        <meta
          property="og:image"
          content="https://virajjewellers.com/images/cash-for-gold-lajpat-nagar-og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Cash For Gold Lajpat Nagar - Instant Cash Against Gold Jewelry by Viraj Jewellers"
        />
        <meta property="og:site_name" content="Viraj Jewellers - Cash For Gold Lajpat Nagar" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:street-address" content="Shop No. 45, Central Market, Lajpat Nagar-II" />
        <meta property="og:locality" content="Lajpat Nagar" />
        <meta property="og:region" content="Delhi" />
        <meta property="og:postal-code" content="110024" />
        <meta property="og:country-name" content="India" />

        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cash For Gold Lajpat Nagar - Instant Cash | Best Rates Delhi NCR"
        />
        <meta
          name="twitter:description"
          content="Get instant cash for gold with doorstep service in Lajpat Nagar, Delhi NCR. Quick approval, best rates, professional evaluation. Trusted since 1985."
        />
        <meta
          name="twitter:image"
          content="https://virajjewellers.com/images/cash-for-gold-lajpat-nagar-twitter.jpg"
        />
        <meta name="twitter:creator" content="@virajjewellers" />
        <meta name="twitter:site" content="@virajjewellers" />

        {/* Enhanced Canonical and Alternate URLs */}
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

        {/* Mobile App Links for Better Mobile SEO */}
        <meta property="al:android:url" content="virajjewellers://home" />
        <meta property="al:android:app_name" content="Viraj Jewellers" />
        <meta property="al:android:package" content="com.virajjewellers.app" />
        <meta property="al:ios:url" content="virajjewellers://home" />
        <meta property="al:ios:app_store_id" content="123456789" />
        <meta property="al:ios:app_name" content="Viraj Jewellers" />

        {/* Enhanced Favicon and Icons */}
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

        {/* Enhanced Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />

        {/* Enhanced Structured Data for Local SEO Dominance */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Additional Service-Specific Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Cash For Gold Lajpat Nagar",
              description:
                "Instant cash for gold jewelry with best rates and doorstep service in Lajpat Nagar, Delhi NCR",
              provider: {
                "@type": "Organization",
                name: "Viraj Jewellers",
                url: "https://virajjewellers.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Shop No. 45, Central Market, Lajpat Nagar-II",
                  addressLocality: "Lajpat Nagar",
                  addressRegion: "Delhi",
                  postalCode: "110024",
                  addressCountry: "IN",
                },
              },
              areaServed: [
                {
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
                {
                  "@type": "Neighborhood",
                  name: "Lajpat Nagar",
                  containedInPlace: {
                    "@type": "City",
                    name: "Delhi"
                  }
                }
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Cash For Gold Services Lajpat Nagar",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Instant Cash For Gold",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "INR",
                      description: "Up to 85% of current market value",
                    },
                    availableAtOrFrom: {
                      "@type": "Place",
                      name: "Lajpat Nagar, Delhi"
                    },
                    seller: {
                      "@type": "Organization",
                      name: "Viraj Jewellers"
                    }
                  },
                ],
              },
              serviceType: "Cash For Gold",
              serviceOutput: "Instant Cash Payment",
              category: "Financial Service",
              additionalType: "http://schema.org/FinancialService"
            }),
          }}
        />

        {/* Enhanced Rich Snippets for Reviews with Local Focus */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              itemReviewed: {
                "@type": "LocalBusiness",
                name: "Viraj Jewellers - Cash For Gold Lajpat Nagar",
                image: "https://virajjewellers.com/images/viraj-jewellers-lajpat-nagar.jpg",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Shop No. 45, Central Market, Lajpat Nagar-II",
                  addressLocality: "Lajpat Nagar",
                  addressRegion: "Delhi",
                  postalCode: "110024",
                  addressCountry: "IN",
                },
                telephone: "+91-9876543210"
              },
              ratingValue: "4.9",
              reviewCount: "427",
              bestRating: "5",
              worstRating: "1",
            }),
          }}
        />

        {/* Event Schema for Gold Rate Updates */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Daily Gold Rate Update - Lajpat Nagar",
              description: "Daily gold rate updates for cash for gold and gold loan services in Lajpat Nagar",
              startDate: new Date().toISOString(),
              endDate: new Date(Date.now() + 24*60*60*1000).toISOString(),
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
              location: {
                "@type": "VirtualLocation",
                url: "https://virajjewellers.com/gold-rates-today"
              },
              organizer: {
                "@type": "Organization",
                name: "Viraj Jewellers",
                url: "https://virajjewellers.com"
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock"
              }
            }),
          }}
        />

        {/* Enhanced Performance Monitoring with Local Business Focus */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'Cash For Gold Lajpat Nagar - Viraj Jewellers',
                custom_map: {
                  'dimension1': 'cash_for_gold_lajpat_nagar',
                  'dimension2': 'local_business',
                  'dimension3': 'delhi_ncr'
                },
                content_group1: 'Cash For Gold',
                content_group2: 'Lajpat Nagar',
                content_group3: 'Financial Services'
              });
              
              // Enhanced tracking for local SEO
              gtag('event', 'page_view', {
                page_title: 'Cash For Gold Lajpat Nagar',
                page_location: window.location.href,
                custom_parameter_1: 'lajpat_nagar_landing',
                business_type: 'cash_for_gold',
                service_area: 'delhi_ncr'
              });
            `,
          }}
        />

        {/* Advanced Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Viraj Jewellers - Cash For Gold Lajpat Nagar",
              alternateName: "Cash For Gold Lajpat Nagar",
              description: "Professional cash for gold and gold loan services in Lajpat Nagar, Delhi NCR with instant evaluation and best market rates since 1985.",
              url: "https://virajjewellers.com",
              logo: "https://virajjewellers.com/images/viraj-jewellers-logo.png",
              image: "https://virajjewellers.com/images/cash-for-gold-lajpat-nagar.jpg",
              telephone: "+91-9876543210",
              email: "support@virajjewellers.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shop No. 45, Central Market, Lajpat Nagar-II",
                addressLocality: "Lajpat Nagar",
                addressRegion: "Delhi",
                postalCode: "110024",
                addressCountry: "IN"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "28.5665",
                longitude: "77.2431"
              },
              openingHours: "Mo-Sa 10:00-19:00",
              priceRange: "₹₹₹",
              paymentAccepted: ["Cash", "Bank Transfer", "UPI", "NEFT", "RTGS"],
              currenciesAccepted: "INR",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "28.5665",
                  longitude: "77.2431"
                },
                geoRadius: "25000"
              },
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                name: "Licensed Gold Dealer",
                credentialCategory: "Business License"
              },
              slogan: "Delhi NCR's Most Trusted Cash For Gold Service Since 1985",
              foundingDate: "1985",
              legalName: "Viraj Jewellers Private Limited",
              knowsAbout: [
                "Gold Evaluation",
                "Cash For Gold",
                "Gold Loan",
                "Gold Jewelry Assessment",
                "Precious Metal Trading"
              ]
            }),
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

        {/* Enhanced Breadcrumb Navigation for SEO */}
        <nav aria-label="Breadcrumb" className="hidden" itemScope itemType="https://schema.org/BreadcrumbList">
          <ol>
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
              <a itemProp="item" href="https://virajjewellers.com/cash-for-gold-lajpat-nagar">
                <span itemProp="name">Cash For Gold Lajpat Nagar</span>
              </a>
              <meta itemProp="position" content="2" />
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <span itemProp="name">Gold Loan Delhi NCR</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* Hidden Location Information for Local SEO */}
        <div className="sr-only" itemScope itemType="https://schema.org/LocalBusiness">
          <span itemProp="name">Viraj Jewellers - Cash For Gold Lajpat Nagar</span>
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="streetAddress">Shop No. 45, Central Market, Lajpat Nagar-II</span>
            <span itemProp="addressLocality">Lajpat Nagar</span>
            <span itemProp="addressRegion">Delhi</span>
            <span itemProp="postalCode">110024</span>
            <span itemProp="addressCountry">India</span>
          </div>
          <span itemProp="telephone">+91-9876543210</span>
          <span itemProp="email">support@virajjewellers.com</span>
          <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
            <meta itemProp="latitude" content="28.5665" />
            <meta itemProp="longitude" content="77.2431" />
          </div>
          <meta itemProp="openingHours" content="Mo-Sa 10:00-19:00" />
          <meta itemProp="priceRange" content="₹₹₹" />
          <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.9" />
            <meta itemProp="reviewCount" content="427" />
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
          </div>
        </div>

        <main id="main-content">{children}</main>

        {/* Enhanced Performance Script with Local SEO Focus */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Service Worker Registration
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js').then(function(registration) {
                  console.log('ServiceWorker registration successful');
                }).catch(function(err) {
                  console.log('ServiceWorker registration failed');
                });
              }

              // Local Business Tracking
              window.localBusiness = {
                name: 'Viraj Jewellers',
                service: 'Cash For Gold',
                location: 'Lajpat Nagar',
                city: 'Delhi',
                coordinates: {lat: 28.5665, lng: 77.2431},
                established: '1985'
              };

              // Enhanced performance monitoring
              if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (entry.entryType === 'largest-contentful-paint') {
                      console.log('LCP:', entry.startTime);
                    }
                    if (entry.entryType === 'first-input') {
                      console.log('FID:', entry.processingStart - entry.startTime);
                    }
                    if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
                      console.log('CLS:', entry.value);
                    }
                  }
                });
                observer.observe({type: 'largest-contentful-paint', buffered: true});
                observer.observe({type: 'first-input', buffered: true});
                observer.observe({type: 'layout-shift', buffered: true});
              }

              // Local SEO Click Tracking
              document.addEventListener('click', function(e) {
                if (e.target.matches('[data-local-action]')) {
                  const action = e.target.getAttribute('data-local-action');
                  gtag('event', 'local_business_interaction', {
                    'event_category': 'Local SEO',
                    'event_label': action,
                    'business_location': 'lajpat_nagar'
                  });
                }
              });
            `,
          }}
        />

        {/* Critical CSS for Above-the-fold Content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for fastest loading */
            .hero-section { 
              background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
              min-height: 60vh;
              display: flex;
              align-items: center;
            }
            .cta-button {
              background: #dc2626;
              color: white;
              padding: 12px 24px;
              border-radius: 8px;
              font-weight: 600;
              transition: all 0.3s ease;
            }
            .cta-button:hover {
              background: #b91c1c;
              transform: translateY(-2px);
            }
            .local-badge {
              background: #059669;
              color: white;
              padding: 4px 12px;
              border-radius: 16px;
              font-size: 0.875rem;
              font-weight: 500;
            }
          `
        }} />
      </body>
    </html>
  );
}
