import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Menu - Soul Food Restaurant Toledo Ohio",
  description: "View Josephine's Soul Food menu. Fried chicken, oxtails, catfish, mac & cheese, collard greens & more. Toledo's best soul food since 1987. Order online for pickup or delivery.",
  keywords: [
    "soul food menu Toledo",
    "fried chicken Toledo Ohio",
    "oxtails near me Toledo",
    "catfish dinner Toledo",
    "mac and cheese restaurant Toledo",
    "collard greens Toledo OH",
    "southern food menu Ohio",
    "best soul food prices Toledo",
    "order soul food online Toledo",
  ],
  openGraph: {
    title: "Menu | Josephine's Soul Food - Toledo, Ohio",
    description: "Authentic soul food menu. Fried chicken, oxtails, catfish, ribs & more. Family recipes since 1987.",
    images: ['/images/menu/oxtails-dinner-new.jpg'],
  },
  alternates: {
    canonical: 'https://josephinessoulfood.com/menu',
  },
};

// Menu Schema for Google Rich Results
const menuSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': 'https://josephinessoulfood.com/#restaurant',
  name: "Josephine's Soul Food",
  image: 'https://josephinessoulfood.com/images/menu/oxtails-dinner-new.jpg',
  url: 'https://josephinessoulfood.com',
  telephone: '+1-419-242-6666',
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
  servesCuisine: ['Soul Food', 'Southern', 'American'],
  priceRange: '$$',
  hasMenu: {
    '@type': 'Menu',
    '@id': 'https://josephinessoulfood.com/menu#menu',
    name: "Josephine's Soul Food Menu",
    description: "Authentic soul food made fresh daily in Toledo, Ohio since 1987",
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Entrees',
        description: 'Soul food classics made with love',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Oxtails Dinner',
            description: 'Tender, succulent oxtails braised for hours in rich, savory gravy until they melt off the bone. A true soul food delicacy served with two sides.',
            offers: { '@type': 'Offer', price: '30.00', priceCurrency: 'USD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Rib Dinner',
            description: 'Fall-off-the-bone tender ribs glazed with our signature BBQ sauce. Slow-cooked to perfection and served with your choice of two sides and cornbread.',
            offers: { '@type': 'Offer', price: '19.00', priceCurrency: 'USD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Smothered Pork Chops',
            description: 'Tender pork chops smothered in rich, savory gravy with caramelized onions. Slow-cooked until they melt in your mouth.',
            offers: { '@type': 'Offer', price: '17.00', priceCurrency: 'USD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Baked Chicken',
            description: 'Seasoned and baked to golden perfection with our special blend of spices. Tender, juicy, and full of flavor.',
            offers: { '@type': 'Offer', price: '16.00', priceCurrency: 'USD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Meat Loaf',
            description: 'Homestyle meatloaf made with our family recipe, topped with savory brown gravy. Comfort food at its finest.',
            offers: { '@type': 'Offer', price: '18.00', priceCurrency: 'USD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Whole Wings',
            description: 'Crispy fried whole chicken wings seasoned and cooked to golden perfection. Juicy on the inside, crunchy on the outside.',
            offers: { '@type': 'Offer', price: '17.00', priceCurrency: 'USD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Chitterlings',
            description: 'Traditional southern chitterlings cleaned and prepared the old-fashioned way. A soul food classic.',
            offers: { '@type': 'Offer', price: '55.00', priceCurrency: 'USD' },
          },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Seafood',
        description: 'Fresh fried fish and more',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Catfish Dinner',
            description: 'Golden-fried catfish fillets seasoned with our signature blend and fried to crispy perfection. Fresh, flaky, and full of flavor.',
            offers: { '@type': 'Offer', price: '18.00', priceCurrency: 'USD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Tilapia Dinner',
            description: 'Lightly seasoned tilapia fillets fried to golden perfection. A milder fish option with all the soul food flavor.',
            offers: { '@type': 'Offer', price: '17.00', priceCurrency: 'USD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Whiting Fish',
            description: 'Classic southern-style fried whiting fish with a crispy golden coating. Light, flaky, and delicious.',
            offers: { '@type': 'Offer', price: '17.00', priceCurrency: 'USD' },
          },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Sides',
        description: 'The perfect soul food accompaniments',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Mac & Cheese',
            description: 'Creamy, cheesy, and absolutely irresistible. Our classic mac and cheese baked to perfection.',
            offers: { '@type': 'Offer', price: '4.50', priceCurrency: 'USD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Collard Greens',
            description: 'Slow-cooked collard greens simmered with smoked meat for hours of flavor.',
            offers: { '@type': 'Offer', price: '4.50', priceCurrency: 'USD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Candied Yams',
            description: 'Sweet, candied yams glazed with brown sugar and spices.',
            offers: { '@type': 'Offer', price: '4.50', priceCurrency: 'USD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Potato Salad',
            description: 'Creamy homestyle potato salad made fresh daily.',
            offers: { '@type': 'Offer', price: '4.50', priceCurrency: 'USD' },
          },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Desserts',
        description: 'Sweet endings to your soul food meal',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Peach Cobbler',
            description: 'Warm, homemade peach cobbler with a buttery crust. Sweet perfection.',
            offers: { '@type': 'Offer', price: '4.50', priceCurrency: 'USD' },
          },
          {
            '@type': 'MenuItem',
            name: 'Banana Pudding',
            description: 'Creamy layers of vanilla wafers, fresh bananas, and rich pudding.',
            offers: { '@type': 'Offer', price: '4.50', priceCurrency: 'USD' },
          },
        ],
      },
    ],
  },
};

// FAQ Schema for rich snippets
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the most popular dishes at Josephine\'s Soul Food?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our best sellers are the Oxtails Dinner ($30), Rib Dinner ($19), Catfish Dinner ($18), and Smothered Pork Chops ($17). All dinners come with your choice of two sides and cornbread.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does pickup take at Josephine\'s Soul Food?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most orders are ready for pickup in 15-20 minutes. During peak hours (12-2pm and 5-7pm), orders may take up to 30 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Josephine\'s Soul Food deliver in Toledo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We deliver to Downtown Toledo, Old West End, West Toledo, and East Toledo. Delivery is free on orders over $30. Order online or call (419) 242-6666.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sides does Josephine\'s Soul Food offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our daily sides include Mac & Cheese, Collard Greens, Green Beans, Candied Yams, Potato Salad, Spaghetti, Cabbage, Fries, and Fried Okra. Sunday specials include Rice, Mashed Potatoes, Dressing, and Black Eyed Peas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Josephine\'s Soul Food cater events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! We cater weddings, corporate events, family reunions, and parties of all sizes. Contact us at (419) 242-6666 for a free quote on catering packages starting at $18 per person.',
      },
    },
  ],
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
