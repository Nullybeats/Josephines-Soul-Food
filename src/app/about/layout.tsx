import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Story",
  description: "For over 37 years, Josephine's Soul Food has been serving authentic soul food with love in Toledo, Ohio. Learn about our family legacy and commitment to community.",
  keywords: ["soul food Toledo", "Black-owned restaurant Ohio", "Josephine's history", "family restaurant Toledo", "authentic soul food"],
  openGraph: {
    title: "Our Story | Josephine's Soul Food",
    description: "For over 37 years, Josephine's has been serving authentic soul food with love, creating a gathering place for our Ohio community.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
