import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Viraj Jewellers - Premium Gold, Silver & Diamond Loans | Instant Cash',
  description: 'Get instant cash loans against your gold, silver, and diamond jewelry at Viraj Jewellers. Professional doorstep service available. Best rates, quick processing, and secure transactions with loan calculator.',
  keywords: 'gold loan, silver loan, diamond loan, jewelry loan, instant cash, Viraj Jewellers, doorstep service, gold against cash',
  openGraph: {
    title: 'Viraj Jewellers - Premium Jewelry Loans & Cash Services',
    description: 'Trusted jewelry loans with doorstep service. Get instant cash against gold, silver, and diamonds.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viraj Jewellers - Premium Jewelry Loans',
    description: 'Get instant cash loans against your precious jewelry. Doorstep service available.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://virajjewellers.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JewelryStore",
              "name": "Viraj Jewellers",
              "description": "Premium jewelry loans and cash services",
              "url": "https://virajjewellers.com",
              "telephone": "+91-9876543210",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Jewelry Street, Gold Market",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400001",
                "addressCountry": "IN"
              },
              "openingHours": "Mo-Sa 10:00-19:00",
              "priceRange": "$$",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Jewelry Loan Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Gold Loan",
                      "description": "Instant cash loans against gold jewelry"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Silver Loan",
                      "description": "Quick cash loans against silver jewelry"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Diamond Loan",
                      "description": "Premium loans against diamond jewelry"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}