// Menu & Food Items
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  imagePosition?: string;
  category: MenuCategory;
  tags?: ('best-seller' | 'new' | 'spicy' | 'vegetarian' | 'gluten-free')[];
  available: boolean;
}

export type MenuCategory =
  | 'entrees'
  | 'seafood'
  | 'sides'
  | 'drinks'
  | 'desserts'
  | 'specials'
  | 'sunday';

// Merchandise
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: ProductCategory;
  variants?: ProductVariant[];
  inStock: boolean;
}

export type ProductCategory =
  | 'apparel'
  | 'sauces'
  | 'accessories'
  | 'gift-sets';

export interface ProductVariant {
  id: string;
  name: string;
  value: string;
  priceModifier?: number;
  inStock: boolean;
}

// Cart
export interface CartItem {
  id: string;
  type: 'menu' | 'product';
  item: MenuItem | Product;
  quantity: number;
  variant?: ProductVariant;
  specialInstructions?: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}

// Orders
export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  type: 'pickup' | 'delivery';
  status: OrderStatus;
  customer: CustomerInfo;
  scheduledTime?: Date;
  createdAt: Date;
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'delivered'
  | 'completed';

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address?: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

// Catering
export interface CateringRequest {
  id: string;
  eventType: EventType;
  guestCount: number;
  date: Date;
  time: string;
  package?: CateringPackage;
  budget?: string;
  notes?: string;
  customer: CustomerInfo;
  status: 'pending' | 'contacted' | 'confirmed' | 'completed';
}

export type EventType =
  | 'wedding'
  | 'corporate'
  | 'birthday'
  | 'graduation'
  | 'reunion'
  | 'other';

export interface CateringPackage {
  id: string;
  name: string;
  description: string;
  pricePerPerson: number;
  minGuests: number;
  items: string[];
}

// Trust & Social Proof
export interface Award {
  id: string;
  title: string;
  year: number;
  organization: string;
  icon?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: Date;
  source: 'google' | 'yelp' | 'facebook';
}

// Navigation
export interface NavLink {
  label: string;
  href: string;
  highlight?: boolean;
}
