import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcrypt';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@josephinessoulfood.com' },
    update: {},
    create: {
      email: 'admin@josephinessoulfood.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'SUPER_ADMIN',
    },
  });

  console.log('✅ Created admin user:', admin.email);
  console.log('   Password: admin123 (change this after first login!)');

  // Create default restaurant settings
  const settings = await prisma.restaurantSettings.upsert({
    where: { id: 'singleton' },
    update: {},
    create: {
      id: 'singleton',
      restaurantName: "Josephine's Soul Food",
      phone: '(419) 242-6666',
      email: 'info@josephinessoulfood.com',
      address: '902 Lagrange St, Toledo, OH 43604',
      businessHours: {
        monday: { open: '11:00', close: '20:00' },
        tuesday: { open: '11:00', close: '20:00' },
        wednesday: { open: '11:00', close: '20:00' },
        thursday: { open: '11:00', close: '20:00' },
        friday: { open: '11:00', close: '21:00' },
        saturday: { open: '11:00', close: '21:00' },
        sunday: { open: '12:00', close: '19:00' },
      },
      deliveryZones: [
        'Downtown Toledo',
        'Old West End',
        'West Toledo',
        'East Toledo',
      ],
      onlineOrderingEnabled: true,
      pickupEnabled: true,
      deliveryEnabled: true,
      taxRate: 0.0725, // 7.25% Ohio
      deliveryFee: 5.00,
      freeDeliveryMinimum: 30.00,
      minimumOrderAmount: 0,
    },
  });

  console.log('✅ Created restaurant settings');

  // Seed menu items from existing data
  const menuItems = [
    // Entrees
    {
      name: 'Rib Dinner',
      slug: 'rib-dinner',
      description: 'Fall-off-the-bone tender ribs, slow-smoked for 6 hours and glazed with our tangy-sweet BBQ sauce. So juicy, you\'ll lick your fingers clean. Served with two soul-warming sides and fresh cornbread.',
      price: 19.00,
      category: 'ENTREES',
      image: '/images/menu/rib-dinner.jpg',
      available: true,
      featured: true,
      tags: ['best-seller'],
      allergens: [],
    },
    {
      name: 'Oxtails Dinner',
      slug: 'oxtails-dinner',
      description: 'Buttery-tender oxtails slow-braised for 8 hours in our grandmother\'s rich, peppery gravy. The meat melts right off the bone. A true soul food delicacy that sells out daily—served with two sides.',
      price: 30.00,
      category: 'ENTREES',
      image: '/images/menu/oxtails-dinner-new.jpg',
      imagePosition: '50% 100%',
      available: true,
      featured: true,
      tags: ['best-seller'],
      allergens: [],
    },
    {
      name: 'Smothered Pork Chops',
      slug: 'smothered-pork-chops',
      description: 'Thick-cut pork chops smothered in velvety brown gravy with sweet caramelized onions. Pan-seared, then slow-simmered until fork-tender. The gravy alone is worth the trip. Served with two sides.',
      price: 17.00,
      category: 'ENTREES',
      image: '/images/menu/smothered-pork-chops.jpg',
      available: true,
      featured: true,
      tags: ['best-seller'],
      allergens: [],
    },
    {
      name: 'Baked Chicken',
      slug: 'baked-chicken',
      description: 'Seasoned and baked to golden perfection with our special blend of spices. Tender, juicy, and full of flavor. Served with two sides.',
      price: 16.00,
      category: 'ENTREES',
      image: '/images/menu/baked-chicken.jpg',
      available: true,
      tags: [],
      allergens: [],
    },
    // Seafood
    {
      name: 'Catfish Dinner',
      slug: 'catfish-dinner',
      description: 'Crispy golden catfish with a crunchy cornmeal crust and tender, flaky white meat inside. Seasoned with our secret spice blend and fried until perfectly golden. Served with hot sauce, two sides & cornbread.',
      price: 18.00,
      category: 'SEAFOOD',
      image: '/images/menu/catfish-dinner.jpg',
      available: true,
      featured: true,
      tags: ['best-seller'],
      allergens: ['fish'],
    },
    // Sides
    {
      name: 'Mac & Cheese',
      slug: 'mac-cheese',
      description: 'Extra creamy, extra cheesy, absolutely irresistible. Made with three cheeses and baked until golden and bubbly on top. The side everyone fights over.',
      price: 4.50,
      category: 'SIDES',
      available: true,
      tags: ['best-seller'],
      allergens: ['dairy'],
    },
    {
      name: 'Collard Greens',
      slug: 'greens',
      description: 'Tender collard greens slow-simmered for hours with smoked turkey. Seasoned just right—savory, slightly smoky, and soul-satisfying.',
      price: 4.50,
      category: 'SIDES',
      available: true,
      tags: [],
      allergens: [],
    },
    {
      name: 'Candied Yams',
      slug: 'yams',
      description: 'Sweet, candied yams glazed with brown sugar and spices.',
      price: 4.50,
      category: 'SIDES',
      available: true,
      tags: [],
      allergens: [],
    },
    // Desserts
    {
      name: 'Peach Cobbler',
      slug: 'peach-cobbler',
      description: 'Warm, bubbling peach cobbler with a golden buttery crust. Sweet cinnamon-spiced peaches that melt in your mouth. Best served warm with vanilla ice cream.',
      price: 4.50,
      category: 'DESSERTS',
      available: true,
      tags: ['best-seller'],
      allergens: ['dairy', 'gluten'],
    },
  ];

  let createdCount = 0;
  for (const item of menuItems) {
    await prisma.menuItem.upsert({
      where: { slug: item.slug },
      update: {},
      create: item as any,
    });
    createdCount++;
  }

  console.log(`✅ Created ${createdCount} menu items`);

  console.log('\n✨ Seed completed successfully!');
  console.log('\n📝 Admin Login:');
  console.log('   Email: admin@josephinessoulfood.com');
  console.log('   Password: admin123');
  console.log('   ⚠️  CHANGE PASSWORD AFTER FIRST LOGIN!\n');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
