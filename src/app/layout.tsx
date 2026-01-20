import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

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
  title: {
    default: "Josephine's Soul Food | Authentic Soul Food in Toledo, Ohio",
    template: "%s | Josephine's Soul Food",
  },
  description:
    "Serving authentic soul food with love for over 37 years in Toledo, Ohio. Family recipes passed down through generations. Fried chicken, mac & cheese, collard greens, and more. Order online for pickup or delivery.",
  keywords: [
    'soul food Toledo',
    'Black-owned restaurant Ohio',
    'southern cooking Toledo',
    'fried chicken Toledo',
    'mac and cheese',
    'collard greens',
    'family restaurant',
    'catering Toledo',
    'online ordering',
    'soul food delivery',
  ],
  authors: [{ name: "Josephine's Soul Food" }],
  creator: "Josephine's Soul Food",
  openGraph: {
    title: "Josephine's Soul Food | Authentic Soul Food in Toledo, Ohio",
    description:
      'Serving authentic soul food with love for over 37 years. Family recipes passed down through generations.',
    type: 'website',
    locale: 'en_US',
    siteName: "Josephine's Soul Food",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Josephine's Soul Food | Toledo, Ohio",
    description: 'Authentic soul food served with love for over 37 years.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
