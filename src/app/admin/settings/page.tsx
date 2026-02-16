import { requireAuth } from '@/lib/auth-utils';
import { prisma } from '@/lib/prisma';
import { Building2, Clock, ShoppingCart, DollarSign, MapPin, Bell } from 'lucide-react';

// Revalidate every 60 seconds
export const revalidate = 60;

const defaultBusinessHours = {
  monday: { open: '11:00', close: '20:00', isClosed: false },
  tuesday: { open: '11:00', close: '20:00', isClosed: false },
  wednesday: { open: '11:00', close: '20:00', isClosed: false },
  thursday: { open: '11:00', close: '20:00', isClosed: false },
  friday: { open: '11:00', close: '21:00', isClosed: false },
  saturday: { open: '11:00', close: '21:00', isClosed: false },
  sunday: { open: '12:00', close: '19:00', isClosed: false },
};

const defaultDeliveryZones = ['Downtown Toledo', 'Old West End', 'Ottawa Hills', 'Sylvania'];

export default async function SettingsPage() {
  await requireAuth();

  // Fetch or create settings
  let settings = await prisma.restaurantSettings.findUnique({
    where: { id: 'singleton' },
  });

  // If no settings exist, create default settings
  if (!settings) {
    settings = await prisma.restaurantSettings.create({
      data: {
        id: 'singleton',
        restaurantName: "Josephine's Soul Food",
        phone: '(419) 242-6666',
        email: 'info@josephinessoulfood.com',
        address: '902 Lagrange St, Toledo, OH 43604',
        businessHours: defaultBusinessHours,
        deliveryZones: defaultDeliveryZones,
      },
    });
  }

  const businessHours = settings.businessHours as typeof defaultBusinessHours;
  const deliveryZones = settings.deliveryZones as string[];

  // Convert tax rate from decimal to percentage for display
  const taxRatePercent = settings.taxRate.toNumber() * 100;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900">
            Settings
          </h1>
          <p className="mt-2 text-gray-600">
            Configure restaurant settings and preferences
          </p>
        </div>
        <p className="text-sm text-gray-500">
          Last updated: {new Date(settings.updatedAt).toLocaleDateString()}
        </p>
      </div>

      {/* Business Information */}
      <div className="bg-white shadow rounded-lg border border-gray-200">
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-center">
            <Building2 className="h-5 w-5 text-gray-400 mr-2" />
            <h2 className="text-lg font-medium text-gray-900">Business Information</h2>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Restaurant Name</label>
              <p className="mt-1 text-sm text-gray-900">{settings.restaurantName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <p className="mt-1 text-sm text-gray-900">{settings.phone}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-sm text-gray-900">{settings.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <p className="mt-1 text-sm text-gray-900">{settings.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-white shadow rounded-lg border border-gray-200">
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-gray-400 mr-2" />
            <h2 className="text-lg font-medium text-gray-900">Business Hours</h2>
          </div>
        </div>
        <div className="px-6 py-5">
          <div className="space-y-3">
            {Object.entries(businessHours).map(([day, hours]) => (
              <div key={day} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm font-medium text-gray-900 capitalize w-24">
                  {day}
                </span>
                {hours.isClosed ? (
                  <span className="text-sm text-gray-500">Closed</span>
                ) : (
                  <span className="text-sm text-gray-700">
                    {hours.open} - {hours.close}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ordering Options */}
      <div className="bg-white shadow rounded-lg border border-gray-200">
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-center">
            <ShoppingCart className="h-5 w-5 text-gray-400 mr-2" />
            <h2 className="text-lg font-medium text-gray-900">Ordering Options</h2>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Online Ordering</p>
              <p className="text-sm text-gray-500">Accept orders through website</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              settings.onlineOrderingEnabled
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {settings.onlineOrderingEnabled ? 'Enabled' : 'Disabled'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Pickup</p>
              <p className="text-sm text-gray-500">Allow customers to pick up orders</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              settings.pickupEnabled
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {settings.pickupEnabled ? 'Enabled' : 'Disabled'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Delivery</p>
              <p className="text-sm text-gray-500">Offer delivery service</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              settings.deliveryEnabled
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {settings.deliveryEnabled ? 'Enabled' : 'Disabled'}
            </span>
          </div>
        </div>
      </div>

      {/* Pricing & Fees */}
      <div className="bg-white shadow rounded-lg border border-gray-200">
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
            <h2 className="text-lg font-medium text-gray-900">Pricing & Fees</h2>
          </div>
        </div>
        <div className="px-6 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Tax Rate</label>
              <p className="mt-1 text-sm text-gray-900">{taxRatePercent.toFixed(2)}%</p>
              <p className="text-xs text-gray-500">Ohio state tax rate</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Delivery Fee</label>
              <p className="mt-1 text-sm text-gray-900">${settings.deliveryFee.toNumber().toFixed(2)}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Free Delivery Minimum</label>
              <p className="mt-1 text-sm text-gray-900">${settings.freeDeliveryMinimum.toNumber().toFixed(2)}</p>
              <p className="text-xs text-gray-500">Orders above this get free delivery</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Minimum Order Amount</label>
              <p className="mt-1 text-sm text-gray-900">${settings.minimumOrderAmount.toNumber().toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Zones */}
      <div className="bg-white shadow rounded-lg border border-gray-200">
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-gray-400 mr-2" />
            <h2 className="text-lg font-medium text-gray-900">Delivery Zones</h2>
          </div>
        </div>
        <div className="px-6 py-5">
          <div className="flex flex-wrap gap-2">
            {deliveryZones.map((zone, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200"
              >
                {zone}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white shadow rounded-lg border border-gray-200">
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-center">
            <Bell className="h-5 w-5 text-gray-400 mr-2" />
            <h2 className="text-lg font-medium text-gray-900">Notification Settings</h2>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Notification Email</label>
            <p className="mt-1 text-sm text-gray-900">
              {settings.notificationEmail || 'Not set'}
            </p>
            <p className="text-xs text-gray-500">Receive order notifications here</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Notification Phone</label>
            <p className="mt-1 text-sm text-gray-900">
              {settings.notificationPhone || 'Not set'}
            </p>
            <p className="text-xs text-gray-500">SMS notifications for urgent orders</p>
          </div>
        </div>
      </div>

      {/* Edit Button (for future functionality) */}
      <div className="flex justify-end">
        <button
          className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#816B3B] hover:bg-[#6B5830] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#816B3B]"
          disabled
        >
          Edit Settings (Coming Soon)
        </button>
      </div>
    </div>
  );
}
