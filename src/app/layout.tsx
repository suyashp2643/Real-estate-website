import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jaybhadra Builders | Premium Construction in Sangamner, Maharashtra',
  description: 'Jaybhadra Builders — Trusted builders in Sangamner since 2010. Premium residential & commercial construction. 27+ projects, 500+ happy families. Call now for free consultation.',
  keywords: 'builders in Sangamner, construction company Sangamner, residential projects Sangamner, commercial buildings Sangamner, Jaybhadra Builders, Maharashtra builders, 2BHK 3BHK Sangamner, bungalows Sangamner',
  openGraph: {
    title: 'Jaybhadra Builders | Building Dreams, Delivering Trust',
    description: 'Premium construction in Sangamner since 2010. Residential, commercial & industrial projects.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: 'index, follow',
  authors: [{ name: 'Jaybhadra Builders' }],
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f0f0f" />
        <link rel="icon" href="/favicon.ico" />
        {/* Structured data for local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Jaybhadra Builders",
              "description": "Premium construction company in Sangamner since 2010",
              "url": "https://jayabhadrabuilders.com",
              "telephone": "+919876543210",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Bus Stand",
                "addressLocality": "Sangamner",
                "addressRegion": "Maharashtra",
                "postalCode": "422605",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.57335,
                "longitude": 74.16831
              },
              "openingHours": "Mo-Sa 09:00-19:00",
              "sameAs": []
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
