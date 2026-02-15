import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Soul Food Catering Toledo Ohio",
  description: "Best soul food catering in Toledo, Ohio. Josephine's caters weddings, corporate events, reunions & parties. Black-owned, family recipes since 1987. Free quotes for events 25+.",
  keywords: [
    "soul food catering Toledo Ohio",
    "wedding catering Toledo",
    "corporate catering Toledo OH",
    "Black-owned catering Ohio",
    "event catering northwest Ohio",
    "party catering Toledo",
    "family reunion catering",
    "graduation party catering Toledo",
    "southern food catering Ohio",
  ],
  openGraph: {
    title: "Soul Food Catering in Toledo, Ohio | Josephine's",
    description: "Toledo's best soul food caterer since 1987. Weddings, corporate events, reunions & more. Get a free quote!",
    images: ['/images/menu/family-photo.png'],
  },
  alternates: {
    canonical: 'https://josephinessoulfood.com/catering',
  },
};

export default function CateringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
