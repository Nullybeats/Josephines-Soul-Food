import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Catering Services",
  description: "Let Josephine's Soul Food cater your next event in Toledo, Ohio. From weddings to corporate events, we bring authentic soul food to your celebration. Get a free quote today.",
  keywords: ["soul food catering Toledo", "event catering Ohio", "wedding catering Toledo", "corporate catering", "Black-owned catering"],
  openGraph: {
    title: "Catering Services | Josephine's Soul Food",
    description: "Let Josephine's Soul Food cater your next event. From weddings to corporate events, we bring authentic soul food to your celebration.",
  },
};

export default function CateringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
