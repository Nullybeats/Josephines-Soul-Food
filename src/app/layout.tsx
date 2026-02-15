import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';
import './globals.css';

// JSON-LD Structured Data for Local SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: "Josephine's Soul Food",
  image: 'https://josephinessoulfood.com/images/hero-main.png',
  '@id': 'https://josephinessoulfood.com',
  url: 'https://josephinessoulfood.com',
  telephone: '+1-419-242-6666',
  priceRange: '$$',
  menu: 'https://josephinessoulfood.com/menu',
  servesCuisine: ['Soul Food', 'Southern', 'American'],
  acceptsReservations: 'Yes',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '902 Lagrange St',
    addressLocality: 'Toledo',
    addressRegion: 'OH',
    postalCode: '43604',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.6528,
    longitude: -83.5379,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '11:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '11:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '12:00',
      closes: '19:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
  },
  sameAs: [
    'https://www.facebook.com/JosephinesKitchen',
    'https://www.instagram.com/josephinessoulfood/',
  ],
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://josephinessoulfood.com'),
  title: {
    default: "Josephine's Soul Food | Best Soul Food Restaurant in Toledo, Ohio",
    template: "%s | Josephine's Soul Food - Toledo, OH",
  },
  description:
    "Toledo's #1 Black-owned soul food restaurant since 1987. Family recipes made fresh daily. Fried chicken, mac & cheese, collard greens, oxtails & more. Order online for pickup or delivery in Toledo, OH.",
  keywords: [
    'soul food Toledo Ohio',
    'best soul food Toledo',
    'Black-owned restaurant Toledo',
    'southern cooking Toledo OH',
    'fried chicken Toledo',
    'mac and cheese Toledo',
    'collard greens near me',
    'oxtails Toledo',
    'soul food delivery Toledo',
    'catering Toledo Ohio',
    'family restaurant Toledo',
    'Lagrange Street restaurant',
    'Toledo restaurant delivery',
    'soul food near me',
    'best restaurant Toledo OH',
  ],
  authors: [{ name: "Josephine's Soul Food" }],
  creator: "Josephine's Soul Food",
  publisher: "Josephine's Soul Food",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Josephine's Soul Food | Best Soul Food in Toledo, Ohio",
    description:
      "Toledo's favorite Black-owned soul food restaurant since 1987. Family recipes, made with love. Order online for pickup or delivery.",
    type: 'website',
    locale: 'en_US',
    url: 'https://josephinessoulfood.com',
    siteName: "Josephine's Soul Food",
    images: [
      {
        url: '/images/hero-main.png',
        width: 1200,
        height: 630,
        alt: "Josephine's Soul Food - Authentic Soul Food in Toledo, Ohio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Josephine's Soul Food | Best Soul Food in Toledo, OH",
    description: "Toledo's #1 soul food restaurant. Family recipes since 1987. Order online now!",
    images: ['/images/hero-main.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/branding/josephine-portrait.png',
    apple: '/images/branding/josephine-portrait.png',
  },
  verification: {
    // Add these when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://josephinessoulfood.com',
  },
  other: {
    'geo.region': 'US-OH',
    'geo.placename': 'Toledo',
    'geo.position': '41.6528;-83.5379',
    'ICBM': '41.6528, -83.5379',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* JSON-LD Structured Data for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
