import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Order Online",
  description: "Order authentic soul food online from Josephine's in Toledo, Ohio. Choose pickup or delivery. Fresh fried chicken, mac & cheese, collard greens, and more.",
  keywords: ["order soul food online Toledo", "soul food delivery Toledo", "pickup Toledo restaurant", "online ordering Ohio"],
  openGraph: {
    title: "Order Online | Josephine's Soul Food",
    description: "Order authentic soul food online from Josephine's in Toledo, Ohio. Choose pickup or delivery.",
  },
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
