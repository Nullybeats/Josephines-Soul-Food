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
  title: "Josephine's Kitchen | Family Recipes, Served With Soul",
  description:
    "Where family recipes meet soul. Josephine's Kitchen serves authentic home-style cooking passed down through generations. Experience the warmth of Ohio's beloved heritage restaurant. Order online for pickup or delivery.",
  keywords: [
    'soul food',
    'Ohio restaurant',
    'southern cooking',
    'home cooking',
    'fried chicken',
    'mac and cheese',
    'collard greens',
    'family recipes',
    'catering',
    'online ordering',
  ],
  openGraph: {
    title: "Josephine's Kitchen | Family Recipes, Served With Soul",
    description:
      'Where family recipes meet soul. Experience the warmth of home cooking passed down through generations.',
    type: 'website',
    locale: 'en_US',
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
