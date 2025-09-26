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
    "Cash For Gold Lajpat Nagar Delhi - Instant Gold Buyer | Highest Gold Rates 2025 | Viraj Jewellers",
  description:
    "Best cash for gold dealer in Lajpat Nagar Delhi NCR. Instant cash payment for old gold jewelry, coins & ornaments. Highest gold rates per gram today. Doorstep gold buying service in South Delhi. Free gold evaluation at Viraj Jewellers since 1985.",
  icons: [
    {
      url: "/favicon.ico",
      type: "image/x-icon",
      sizes: "any",
    },
  ],
  keywords: [
    // Primary cash for gold keywords
    "cash for gold lajpat nagar",
    "cash for gold delhi",
    "cash for gold south delhi",
    "cash for gold near me",
    "gold buyer lajpat nagar",
    "gold buyer delhi",
    "sell gold lajpat nagar",
    "sell gold delhi ncr",
    "instant cash for gold delhi",
    "old gold buyer delhi",

    // Specific location targeting
    "cash for gold lajpat nagar market",
    "gold buyer central market lajpat nagar",
    "cash for gold cr park",
    "cash for gold green park",
    "cash for gold nehru place",
    "cash for gold kalkaji",
    "cash for gold govindpuri",
    "cash for gold greater kailash",
    "cash for gold saket",
    "cash for gold defence colony",
    "cash for gold malviya nagar",
    "cash for gold hauz khas",

    // Service-specific keywords
    "doorstep gold buying service delhi",
    "home gold buying service lajpat nagar",
    "instant gold valuation delhi",
    "highest gold rates today delhi",
    "gold price per gram delhi",
    "old jewelry buyer delhi",
    "broken gold buyer lajpat nagar",
    "gold coin buyer delhi",
    "gold ornament buyer south delhi",

    // Long-tail keywords
    "best place to sell gold in lajpat nagar",
    "trusted gold buyer in delhi ncr",
    "immediate cash for gold jewelry delhi",
    "sell old gold jewelry for cash delhi",
    "gold buying shop lajpat nagar",
    "cash against gold jewelry delhi",

    // Competitive keywords
    "viraj jewellers gold buyer",
    "viraj jewellers cash for gold",
    "professional gold dealer lajpat nagar",
    "certified gold buyer delhi",
  ].join(", "),

  authors: [{ name: "Viraj Jewellers - Premium Gold Buyer Delhi" }],
  creator: "Viraj Jewellers",
  publisher: "Viraj Jewellers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title:
      "Cash For Gold Lajpat Nagar Delhi - Instant Gold Buyer | Highest Rates 2025",
    description:
      "Sell your old gold for instant cash in Lajpat Nagar Delhi. Highest gold rates per gram, doorstep service, free evaluation. Trusted gold buyer since 1985. Get quote now!",
    type: "website",
    locale: "en_IN",
    url: "https://virajjewellers.com",
    siteName: "Viraj Jewellers - Cash for Gold Delhi NCR",
    images: [
      {
        url: "https://virajjewellers.com/images/cash-for-gold-lajpat-nagar-delhi.jpg",
        width: 1200,
        height: 630,
        alt: "Cash for Gold Lajpat Nagar Delhi - Instant Gold Buyer with Highest Rates",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cash For Gold Delhi - Instant Gold Buyer | Viraj Jewellers",
    description:
      "Sell old gold jewelry for instant cash in Delhi NCR. Highest rates per gram, doorstep service in Lajpat Nagar. Free gold evaluation. Get quote now!",
    images: ["https://virajjewellers.com/images/cash-for-gold-delhi-twitter.jpg"],
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
    canonical: "https://virajjewellers.com/cash-for-gold-delhi",
    languages: {
      "en-IN": "https://virajjewellers.com/cash-for-gold-delhi",
      "hi-IN": "https://virajjewellers.com/hi/sone-ke-liye-cash",
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
        alternateName: ["Viraj Jewellers Delhi", "Cash for Gold Delhi", "Gold Buyer Lajpat Nagar"],
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
            areaServed: "IN",
            availableLanguage: ["en", "hi"],
            serviceUrl: "https://virajjewellers.com/cash-for-gold-delhi"
          },
          {
            "@type": "ContactPoint",
            telephone: "+91-9876543211",
            contactType: "gold buying",
            areaServed: ["Delhi", "Delhi NCR"],
            availableLanguage: ["en", "hi"]
          }
        ],
        sameAs: [
          "https://www.facebook.com/virajjewellers",
          "https://www.instagram.com/virajjewellers",
          "https://twitter.com/virajjewellers",
          "https://www.linkedin.com/company/virajjewellers",
          "https://www.youtube.com/virajjewellers"
        ],
        founder: {
          "@type": "Person",
          name: "Viraj Shah",
        },
        foundingDate: "1985",
        legalName: "Viraj Jewellers Private Limited",
        taxID: "07XXXXX0000X1Z1",
        awards: ["Best Gold Buyer Delhi 2024", "Trusted Jeweller Award 2023"],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://virajjewellers.com/#localbusiness",
        name: "Viraj Jewellers - Cash for Gold Lajpat Nagar Delhi",
        image: [
          "https://virajjewellers.com/images/viraj-jewellers-lajpat-nagar.jpg",
          "https://virajjewellers.com/images/cash-for-gold-delhi-shop.jpg",
          "https://virajjewellers.com/images/gold-buyer-lajpat-nagar.jpg"
        ],
        description:
          "Delhi NCR's most trusted cash for gold buyer in Lajpat Nagar offering highest gold rates per gram. Instant cash payment for old gold jewelry, coins, ornaments with doorstep service across South Delhi since 1985.",
        url: "https://virajjewellers.com/cash-for-gold-delhi",
        telephone: "+91-9876543210",
        priceRange: "₹₹₹₹",
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
        openingHours: [
          "Mo-Sa 10:00-19:00",
          "Su 11:00-17:00"
        ],
        paymentAccepted: [
          "Cash",
          "Bank Transfer",
          "UPI",
          "RTGS",
          "NEFT"
        ],
        currenciesAccepted: "INR",
        areaServed: [
          "Lajpat Nagar",
          "Central Market Lajpat Nagar",
          "South Delhi",
          "Delhi NCR",
          "CR Park",
          "Green Park",
          "Nehru Place",
          "Kalkaji",
          "Govindpuri",
          "Greater Kailash",
          "Saket",
          "Defence Colony",
          "Malviya Nagar",
          "Hauz Khas",
          "Khan Market",
          "Connaught Place",
          "Karol Bagh",
          "Noida",
          "Gurgaon",
          "Faridabad",
          "Ghaziabad"
        ],
        hasMap: "https://maps.google.com/?q=Viraj+Jewellers+Lajpat+Nagar+Delhi",
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
              name: "Priya Sharma"
            },
            reviewBody: "Best cash for gold rates in Lajpat Nagar. Got instant payment for my old jewelry. Highly recommended!"
          }
        ]
      },
      {
        "@type": "Store",
        "@id": "https://virajjewellers.com/#store",
        name: "Viraj Jewellers Gold Buying Center",
        description: "Premium gold buying store in Lajpat Nagar Delhi offering highest cash rates for gold jewelry, coins and ornaments",
        branchCode: "VJ-LN-001",
        currenciesAccepted: "INR",
        paymentAccepted: ["Cash", "Bank Transfer", "UPI"],
        priceRange: "₹₹₹₹"
      },
      {
        "@type": "WebSite",
        "@id": "https://virajjewellers.com/#website",
        url: "https://virajjewellers.com",
        name: "Viraj Jewellers - Cash for Gold Delhi NCR",
        description:
          "Delhi NCR's most trusted cash for gold buyer since 1985. Instant cash for old gold jewelry with highest rates per gram and doorstep service in Lajpat Nagar.",
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
            name: "Cash for Gold",
            item: "https://virajjewellers.com/cash-for-gold-delhi",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Lajpat Nagar Delhi",
            item: "https://virajjewellers.com/cash-for-gold-lajpat-nagar",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://virajjewellers.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the current gold rate for cash in Lajpat Nagar Delhi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer the highest cash rates for gold in Lajpat Nagar Delhi, currently paying ₹5,800-₹6,200 per gram for 22k gold and ₹6,300-₹6,700 per gram for 24k gold. Rates are updated daily based on international gold prices.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide doorstep cash for gold service in Delhi NCR?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide free doorstep gold buying service across Delhi NCR including Lajpat Nagar, South Delhi, and nearby areas. Our certified gold evaluators visit your home for safe and convenient gold selling.",
            },
          },
          {
            "@type": "Question",
            name: "What types of gold do you buy for cash in Delhi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We buy all types of gold for instant cash including old jewelry, broken ornaments, gold coins, gold bars, dental gold, and antique pieces. We accept 18k, 22k, and 24k gold with immediate payment.",
            },
          },
          {
            "@type": "Question",
            name: "How do I get the best cash price for my gold in Lajpat Nagar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Visit our Lajpat Nagar store or call for doorstep service. We provide free gold testing, instant evaluation, and pay the highest market rates. No documentation required for amounts below ₹2 lakhs.",
            },
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://virajjewellers.com/#goldbuying",
        name: "Cash for Gold Service Delhi",
        description: "Premium gold buying service offering highest cash rates for old gold jewelry, coins and ornaments",
        provider: {
          "@id": "https://virajjewellers.com/#organization",
        },
        serviceType: "Gold Buying",
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
          name: "Gold Buying Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Instant Cash for Gold",
                description: "Get instant cash for your old gold jewelry with highest market rates"
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "INR",
                price: "6200",
                unitText: "per gram for 22k gold"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Doorstep Gold Buying",
                description: "Free home visit gold buying service across Delhi NCR"
              }
            }
          ]
        }
      }
    ],
  };

  // Additional structured data for better indexing
  const goldBuyingService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cash for Gold Lajpat Nagar Delhi",
    description: "Best cash for gold dealer in Lajpat Nagar Delhi offering highest rates per gram for old gold jewelry, coins and ornaments with instant payment",
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
        addressCountry: "IN"
      }
    },
    areaServed: [
      {
        "@type": "City",
        name: "Delhi",
        containedInPlace: {
          "@type": "State", 
          name: "Delhi"
        }
      }
    ],
    serviceType: "Gold Buying Service",
    serviceOutput: "Instant Cash Payment"
  };

  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Enhanced Primary SEO Meta Tags */}
        <meta
          name="title"
          content="Cash For Gold Lajpat Nagar Delhi - Instant Gold Buyer | Highest Gold Rates 2025 | Viraj Jewellers"
        />
        <meta
          name="description"
          content="Best cash for gold dealer in Lajpat Nagar Delhi NCR. Instant cash payment for old gold jewelry, coins & ornaments. Highest gold rates per gram today. Doorstep gold buying service in South Delhi. Free gold evaluation at Viraj Jewellers since 1985."
        />
        
        {/* Hyper-targeted keywords for cash for gold */}
        <meta
          name="keywords"
          content="cash for gold lajpat nagar, cash for gold delhi, gold buyer lajpat nagar, sell gold delhi, instant cash for gold delhi, old gold buyer delhi, cash for gold near me, gold buyer central market lajpat nagar, doorstep gold buying delhi, highest gold rates delhi"
        />

        {/* Geographic SEO Enhancement */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Lajpat Nagar, Delhi" />
        <meta name="geo.position" content="28.5665;77.2431" />
        <meta name="ICBM" content="28.5665, 77.2431" />

        {/* Business-specific meta */}
        <meta name="contact" content="support@virajjewellers.com" />
        <meta name="copyright" content="© 2025 Viraj Jewellers - Cash for Gold Delhi. All rights reserved." />
        <meta name="author" content="Viraj Jewellers - Premium Gold Buyer" />
        <meta name="reply-to" content="goldbuying@virajjewellers.com" />
        <meta name="owner" content="Viraj Jewellers" />

        {/* Service-specific meta tags */}
        <meta name="service" content="Cash for Gold, Gold Buying, Instant Gold Payment" />
        <meta name="coverage" content="Delhi NCR, Lajpat Nagar, South Delhi" />
        <meta name="distribution" content="Local" />
        <meta name="rating" content="General" />

        {/* Enhanced OpenGraph for better social sharing */}
        <meta property="og:title" content="Cash For Gold Lajpat Nagar Delhi - Instant Gold Buyer | Highest Rates 2025" />
        <meta property="og:description" content="Sell your old gold for instant cash in Lajpat Nagar Delhi. Highest gold rates per gram, doorstep service, free evaluation. Trusted gold buyer since 1985. Get quote now!" />
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="https://virajjewellers.com/cash-for-gold-delhi" />
        <meta property="og:image" content="https://virajjewellers.com/images/cash-for-gold-lajpat-nagar-delhi.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Cash for Gold Lajpat Nagar Delhi - Instant Gold Buyer with Highest Rates" />
        <meta property="og:site_name" content="Viraj Jewellers - Cash for Gold Delhi NCR" />
        <meta property="og:locale" content="en_IN" />

        {/* Business-specific OpenGraph */}
        <meta property="business:contact_data:street_address" content="Shop No. 45, Central Market, Lajpat Nagar-II" />
        <meta property="business:contact_data:locality" content="Lajpat Nagar" />
        <meta property="business:contact_data:region" content="Delhi" />
        <meta property="business:contact_data:postal_code" content="110024" />
        <meta property="business:contact_data:country_name" content="India" />

        {/* Twitter Cards Enhancement */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cash For Gold Delhi - Instant Gold Buyer | Viraj Jewellers" />
        <meta name="twitter:description" content="Sell old gold jewelry for instant cash in Delhi NCR. Highest rates per gram, doorstep service in Lajpat Nagar. Free gold evaluation. Get quote now!" />
        <meta name="twitter:image" content="https://virajjewellers.com/images/cash-for-gold-delhi-twitter.jpg" />
        <meta name="twitter:creator" content="@virajjewellers" />
        <meta name="twitter:site" content="@virajjewellers" />

        {/* Enhanced Canonical and Alternate URLs */}
        <link rel="canonical" href="https://virajjewellers.com/cash-for-gold-delhi" />
        <link rel="alternate" href="https://virajjewellers.com/cash-for-gold-delhi" hrefLang="en-in" />
        <link rel="alternate" href="https://virajjewellers.com/hi/sone-ke-liye-cash" hrefLang="hi-in" />
        
        {/* Mobile-specific URLs */}
        <link rel="alternate" media="handheld" href="https://virajjewellers.com/m/cash-for-gold-delhi" />

        {/* Enhanced Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f59e0b" />

        {/* Performance and Technical SEO */}
        <meta name="theme-color" content="#f59e0b" />
        <meta name="msapplication-TileColor" content="#f59e0b" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Main Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Additional Service-specific Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(goldBuyingService),
          }}
        />

        {/* Rich Snippets for Reviews and Ratings */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              itemReviewed: {
                "@type": "LocalBusiness",
                name: "Viraj Jewellers Cash for Gold",
                image: "https://virajjewellers.com/images/viraj-jewellers-lajpat-nagar.jpg",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Shop No. 45, Central Market, Lajpat Nagar-II",
                  addressLocality: "Lajpat Nagar",
                  addressRegion: "Delhi",
                  postalCode: "110024",
                  addressCountry: "IN"
                }
              },
              ratingValue: "4.9",
              reviewCount: "312",
              bestRating: "5",
              worstRating: "1",
            }),
          }}
        />

        {/* Product/Service Markup for Gold Buying */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Cash for Gold Service",
              description: "Instant cash for old gold jewelry, coins and ornaments",
              brand: {
                "@type": "Brand",
                name: "Viraj Jewellers"
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                price: "6200",
                unitText: "per gram",
                availability: "https://schema.org/InStock",
                validFrom: "2025-01-01",
                validThrough: "2025-12-31"
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "312"
              }
            }),
          }}
        />

        {/* Local SEO Event Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Gold Buying Service Available Daily",
              description: "Daily gold buying service with instant cash payment in Lajpat Nagar Delhi",
              location: {
                "@type": "Place",
                name: "Viraj Jewellers",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Shop No. 45, Central Market, Lajpat Nagar-II",
                  addressLocality: "Lajpat Nagar",
                  addressRegion: "Delhi",
                  postalCode: "110024",
                  addressCountry: "IN"
                }
              },
              startDate: "2025-01-01",
              endDate: "2025-12-31",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled"
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
                page_title: 'Cash for Gold Lajpat Nagar Delhi - Viraj Jewellers',
                custom_map: {
                  'dimension1': 'cash_for_gold_page',
                  'dimension2': 'lajpat_nagar_delhi',
                  'dimension3': 'gold_buyer_service'
                }
              });
            `,
          }}
        />

        {/* Additional tracking for conversion */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('config', 'AW-CONVERSION_ID');
              gtag('event', 'page_view', {
                'send_to': 'AW-CONVERSION_ID',
                'custom_parameter': 'cash_for_gold_delhi'
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

        {/* Enhanced Breadcrumb Navigation with Schema */}
        <nav aria-label="Breadcrumb" className="bg-amber-100 px-4 py-2">
          <ol 
            itemScope 
            itemType="https://schema.org/BreadcrumbList"
            className="flex items-center space-x-2 text-sm text-gray-700"
          >
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <a 
                itemProp="item" 
                href="https://virajjewellers.com"
                className="text-amber-700 hover:text-amber-900"
              >
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-gray-500">/</li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <a 
                itemProp="item" 
                href="https://virajjewellers.com/services"
                className="text-amber-700 hover:text-amber-900"
              >
                <span itemProp="name">Services</span>
              </a>
              <meta itemProp="position" content="2" />
            </li>
            <li className="text-gray-500">/</li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <span itemProp="name" className="text-gray-900 font-medium">Cash for Gold Delhi</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* Local Business Header with Contact Info */}
        <header className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-2 px-4">
          <div className="container mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>📞 Call: +91-9876543210</span>
              <span>📍 Lajpat Nagar, Delhi</span>
              <span>⏰ Open: Mon-Sat 10AM-7PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-green-500 px-2 py-1 rounded text-xs">Highest Rates</span>
              <span className="bg-red-500 px-2 py-1 rounded text-xs">Instant Cash</span>
            </div>
          </div>
        </header>

        {/* Main Content with Enhanced SEO Structure */}
        <main id="main-content" className="min-h-screen">
          
          {/* Hero Section with Local Keywords */}
          <section className="bg-gradient-to-br from-yellow-100 to-amber-100 py-12">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cash For Gold <span className="text-amber-600">Lajpat Nagar Delhi</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
                  Instant Gold Buyer | Highest Rates Per Gram | Doorstep Service | Since 1985
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-3xl font-bold text-green-600">₹6,200+</div>
                    <div className="text-sm text-gray-600">Per Gram for 22K Gold</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-3xl font-bold text-blue-600">15 Min</div>
                    <div className="text-sm text-gray-600">Instant Evaluation</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-3xl font-bold text-purple-600">39+ Years</div>
                    <div className="text-sm text-gray-600">Trusted Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Location-specific Service Areas */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-2xl font-bold text-center mb-8">Cash for Gold Service Areas in Delhi NCR</h3>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                {[
                  'Lajpat Nagar', 'Central Market', 'CR Park', 'Green Park', 
                  'Nehru Place', 'Kalkaji', 'Govindpuri', 'Greater Kailash',
                  'Saket', 'Defence Colony', 'Malviya Nagar', 'Hauz Khas'
                ].map((area) => (
                  <div key={area} className="bg-amber-50 p-4 rounded border">
                    <span className="text-amber-700 font-semibold">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Main Content Area */}
          {children}

        </main>

        {/* Footer with Local Business Schema */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-amber-400">Viraj Jewellers</h4>
                <p className="text-gray-300 mb-4">
                  Delhi NCR's most trusted cash for gold buyer since 1985. 
                  Highest rates, instant payment, doorstep service.
                </p>
                <div className="text-sm text-gray-400">
                  <div>📍 Shop 45, Central Market, Lajpat Nagar-II</div>
                  <div>📞 +91-9876543210</div>
                  <div>✉️ goldbuying@virajjewellers.com</div>
                </div>
              </div>
              
              <div>
                <h5 className="font-bold mb-4 text-amber-400">Cash for Gold Services</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Old Gold Jewelry Buying</li>
                  <li>• Gold Coin Purchase</li>
                  <li>• Broken Gold Buying</li>
                  <li>• Doorstep Gold Evaluation</li>
                  <li>• Instant Cash Payment</li>
                  <li>• Free Gold Testing</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold mb-4 text-amber-400">Service Locations</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Lajpat Nagar Delhi</li>
                  <li>• South Delhi Areas</li>
                  <li>• Central Delhi</li>
                  <li>• Noida & Ghaziabad</li>
                  <li>• Gurgaon & Faridabad</li>
                  <li>• Entire Delhi NCR</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold mb-4 text-amber-400">Quick Links</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="/gold-rates-today" className="hover:text-amber-400">Gold Rates Today</a></li>
                  <li><a href="/gold-calculator" className="hover:text-amber-400">Gold Value Calculator</a></li>
                  <li><a href="/doorstep-service" className="hover:text-amber-400">Doorstep Service</a></li>
                  <li><a href="/about-us" className="hover:text-amber-400">About Us</a></li>
                  <li><a href="/contact" className="hover:text-amber-400">Contact Us</a></li>
                  <li><a href="/reviews" className="hover:text-amber-400">Customer Reviews</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2025 Viraj Jewellers - Cash for Gold Delhi NCR. All rights reserved.</p>
              <p className="mt-2">
                Licensed Gold Buyer | RBI Guidelines Compliant | Secure Gold Transactions | Since 1985
              </p>
            </div>
          </div>
        </footer>

        {/* Performance and Tracking Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Service Worker Registration
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js');
              }

              // Critical performance monitoring
              window.addEventListener('load', function() {
                // Track page load time
                const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                gtag('event', 'page_load_time', {
                  'event_category': 'Performance',
                  'event_label': 'Cash for Gold Delhi',
                  'value': Math.round(loadTime / 1000)
                });

                // Track user engagement
                let scrollDepth = 0;
                window.addEventListener('scroll', function() {
                  const currentScroll = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
                  if (currentScroll > scrollDepth && currentScroll % 25 === 0) {
                    scrollDepth = currentScroll;
                    gtag('event', 'scroll_depth', {
                      'event_category': 'Engagement',
                      'event_label': 'Cash for Gold Page',
                      'value': scrollDepth
                    });
                  }
                });

                // Track phone number clicks
                document.querySelectorAll('a[href^="tel:"]').forEach(function(tel) {
                  tel.addEventListener('click', function() {
                    gtag('event', 'phone_click', {
                      'event_category': 'Contact',
                      'event_label': 'Cash for Gold Inquiry'
                    });
                  });
                });
              });

              // Local business rich snippets tracking
              function trackLocalInteraction(action) {
                gtag('event', 'local_business_interaction', {
                  'event_category': 'Local SEO',
                  'event_label': action,
                  'custom_parameter': 'lajpat_nagar_delhi'
                });
              }
            `,
          }}
        />

        {/* Structured Data for Real-time Gold Rates */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PriceSpecification",
              "price": "6200",
              "priceCurrency": "INR",
              "unitText": "per gram",
              "valueAddedTaxIncluded": false,
              "validFrom": new Date().toISOString().split('T')[0],
              "validThrough": new Date(Date.now() + 24*60*60*1000).toISOString().split('T')[0],
              "availability": "https://schema.org/InStock"
            }),
          }}
        />

        {/* Live Chat Integration Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPageElement",
              "cssSelector": "#live-chat",
              "name": "Live Gold Rate Chat",
              "description": "Get instant gold rate quotes via live chat"
            }),
          }}
        />

      </body>
    </html>
  );
}
