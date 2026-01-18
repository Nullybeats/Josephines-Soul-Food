import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a price from dollars to a currency string
 * @param price - Price in dollars (e.g., 19.99)
 * @returns Formatted price string (e.g., "$19.99")
 */
export function formatPriceFromDollars(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

/**
 * Format a price from cents to a currency string
 * @param cents - Price in cents (e.g., 1999)
 * @returns Formatted price string (e.g., "$19.99")
 */
export function formatPrice(cents: number): string {
  return formatPriceFromDollars(cents / 100);
}
