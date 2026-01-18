// Complete menu data from Josephine's Soul Food Toledo
// Source: In-store menu photos (Full Menu.jpg, Menu 2.jpg)
// 902 Lagrange St, Toledo, OH 43604

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tag?: string;
  popular?: boolean;
}

export interface SideItem {
  id: number;
  name: string;
  smallPrice: number;
  largePrice: number;
  category: 'daily' | 'sunday';
}

export interface DessertItem {
  id: number;
  name: string;
  price: number;
}

// ==================== MAIN DISHES ====================
export const mainDishes: MenuItem[] = [
  {
    id: 1,
    name: 'Rib Dinner',
    description: 'Fall-off-the-bone tender ribs glazed with our signature BBQ sauce. Slow-cooked to perfection and served with your choice of two sides and cornbread.',
    price: 19.00,
    image: '/images/menu/rib-dinner.jpg',
    category: 'entrees',
    tag: 'Best Seller',
    popular: true,
  },
  {
    id: 2,
    name: 'Pork Chops',
    description: 'Juicy, golden-fried pork chops seasoned with our special blend. Crispy on the outside, tender on the inside. Served with two sides.',
    price: 17.00,
    image: '/images/menu/pork-chops.jpg',
    category: 'entrees',
  },
  {
    id: 3,
    name: 'Chitterlings',
    description: 'Traditional southern chitterlings cleaned and prepared the old-fashioned way. A soul food classic for those who know. Served with two sides.',
    price: 55.00,
    image: '/images/menu/chitterlings.jpg',
    category: 'entrees',
    tag: 'Specialty',
  },
  {
    id: 4,
    name: 'Smothered Pork Chops',
    description: 'Tender pork chops smothered in rich, savory gravy with caramelized onions. Slow-cooked until they melt in your mouth. Served with two sides.',
    price: 17.00,
    image: '/images/menu/smothered-pork-chops.jpg',
    category: 'entrees',
    tag: 'Fan Favorite',
    popular: true,
  },
  {
    id: 5,
    name: 'Meat Loaf',
    description: 'Homestyle meatloaf made with our family recipe, topped with savory brown gravy. Comfort food at its finest, served with two sides and cornbread.',
    price: 18.00,
    image: '/images/menu/meatloaf.jpg',
    category: 'entrees',
    tag: 'Homestyle',
  },
  {
    id: 6,
    name: 'Roast Beef',
    description: 'Slow-roasted beef cooked until tender, sliced and served with rich gravy. A hearty meal served with your choice of two sides.',
    price: 18.00,
    image: '/images/menu/roast-beef.jpg',
    category: 'entrees',
  },
  {
    id: 7,
    name: 'Cube Steak',
    description: 'Tenderized cube steak pan-fried to perfection and smothered in savory gravy. Served with two soul food sides.',
    price: 17.00,
    image: '/images/menu/cube-steak.jpg',
    category: 'entrees',
  },
  {
    id: 8,
    name: 'Corned Beef',
    description: 'Tender, flavorful corned beef prepared with our special seasonings. A satisfying meal served with two sides.',
    price: 19.00,
    image: '/images/menu/corned-beef.jpg',
    category: 'entrees',
  },
  {
    id: 9,
    name: 'Baked Chicken',
    description: 'Seasoned and baked to golden perfection with our special blend of spices. Tender, juicy, and full of flavor. Served with two sides.',
    price: 16.00,
    image: '/images/menu/baked-chicken.jpg',
    category: 'entrees',
    popular: true,
  },
  {
    id: 10,
    name: 'Whole Wings',
    description: 'Crispy fried whole chicken wings seasoned and cooked to golden perfection. Juicy on the inside, crunchy on the outside. Served with two sides.',
    price: 17.00,
    image: '/images/menu/whole-wings.jpg',
    category: 'entrees',
  },
  {
    id: 11,
    name: 'Turkey Meal',
    description: 'Tender sliced turkey served with rich gravy. A lighter option that doesn\'t skimp on flavor. Served with two sides.',
    price: 17.00,
    image: '/images/menu/turkey-meal.jpg',
    category: 'entrees',
  },
  {
    id: 12,
    name: 'Oxtails Dinner',
    description: 'Tender, succulent oxtails braised for hours in rich, savory gravy until they melt off the bone. A true soul food delicacy served with two sides.',
    price: 30.00,
    image: '/images/menu/oxtails-dinner.jpg',
    category: 'entrees',
    tag: 'Premium',
    popular: true,
  },
  {
    id: 13,
    name: 'Catfish Dinner',
    description: 'Golden-fried catfish fillets seasoned with our signature blend and fried to crispy perfection. Fresh, flaky, and full of flavor. Served with two sides.',
    price: 18.00,
    image: '/images/menu/catfish-dinner.jpg',
    category: 'seafood',
    tag: 'Signature',
    popular: true,
  },
  {
    id: 14,
    name: 'Tilapia Dinner',
    description: 'Lightly seasoned tilapia fillets fried to golden perfection. A milder fish option with all the soul food flavor. Served with two sides.',
    price: 17.00,
    image: '/images/menu/tilapia-dinner.jpg',
    category: 'seafood',
  },
  {
    id: 15,
    name: 'Whiting Fish',
    description: 'Classic southern-style fried whiting fish with a crispy golden coating. Light, flaky, and delicious. Served with two sides.',
    price: 17.00,
    image: '/images/menu/whiting-fish.jpg',
    category: 'seafood',
  },
  {
    id: 16,
    name: 'Lasagna',
    description: 'Layers of pasta, seasoned meat, and melted cheese baked to bubbly perfection. Soul food with an Italian twist. Served with two sides.',
    price: 17.00,
    image: '/images/menu/lasagna.jpg',
    category: 'entrees',
  },
];

// ==================== DAILY SIDES ====================
// Available everyday - Small $4.50 | Large $7.50
export const dailySides: SideItem[] = [
  { id: 1, name: 'Mac & Cheese', smallPrice: 4.50, largePrice: 7.50, category: 'daily' },
  { id: 2, name: 'Greens', smallPrice: 4.50, largePrice: 7.50, category: 'daily' },
  { id: 3, name: 'Green Beans', smallPrice: 4.00, largePrice: 7.00, category: 'daily' },
  { id: 4, name: 'Yams', smallPrice: 4.50, largePrice: 7.50, category: 'daily' },
  { id: 5, name: 'Potato Salad', smallPrice: 4.50, largePrice: 7.50, category: 'daily' },
  { id: 6, name: 'Spaghetti', smallPrice: 4.50, largePrice: 7.50, category: 'daily' },
  { id: 7, name: 'Cabbage', smallPrice: 4.00, largePrice: 7.00, category: 'daily' },
  { id: 8, name: 'Fries', smallPrice: 4.00, largePrice: 7.00, category: 'daily' },
  { id: 9, name: 'Okra', smallPrice: 4.50, largePrice: 7.50, category: 'daily' },
];

// ==================== SUNDAY SIDES ====================
// Available Sundays only
export const sundaySides: SideItem[] = [
  { id: 10, name: 'Rice', smallPrice: 4.00, largePrice: 7.00, category: 'sunday' },
  { id: 11, name: 'Mashed Potatoes', smallPrice: 4.00, largePrice: 7.00, category: 'sunday' },
  { id: 12, name: 'Dressing', smallPrice: 4.50, largePrice: 7.50, category: 'sunday' },
  { id: 13, name: 'Corn', smallPrice: 4.00, largePrice: 7.00, category: 'sunday' },
  { id: 14, name: 'Coleslaw', smallPrice: 4.00, largePrice: 7.00, category: 'sunday' },
  { id: 15, name: 'Black Eyed Peas', smallPrice: 4.50, largePrice: 7.50, category: 'sunday' },
];

// ==================== DESSERTS ====================
export const desserts: DessertItem[] = [
  { id: 1, name: 'Peach Cobbler', price: 4.50 },
  { id: 2, name: 'Banana Pudding', price: 4.50 },
  { id: 3, name: 'Lemon Cake', price: 5.00 },
  { id: 4, name: 'Chocolate Cake', price: 5.00 },
];

// ==================== ALL SIDES COMBINED ====================
export const allSides = [...dailySides, ...sundaySides];

// ==================== MENU CATEGORIES ====================
export const menuCategories = [
  { id: 'entrees', name: 'Entrees', description: 'Soul food classics made with love' },
  { id: 'seafood', name: 'Seafood', description: 'Fresh fried fish and more' },
  { id: 'sides', name: 'Sides', description: 'The perfect accompaniment' },
  { id: 'desserts', name: 'Desserts', description: 'Sweet endings' },
];

// ==================== POPULAR ITEMS ====================
export const popularItems = mainDishes.filter(dish => dish.popular);

// ==================== HELPER FUNCTIONS ====================
export function getDishesByCategory(category: string): MenuItem[] {
  return mainDishes.filter(dish => dish.category === category);
}

export function getDishById(id: number): MenuItem | undefined {
  return mainDishes.find(dish => dish.id === id);
}
