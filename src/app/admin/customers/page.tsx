import { requireAuth } from '@/lib/auth-utils';
import { prisma } from '@/lib/prisma';
import { Users, UserCheck, Star, Mail } from 'lucide-react';
import StatsCard from '@/components/admin/shared/StatsCard';

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function CustomersPage() {
  await requireAuth();

  // Get date for "active this month" calculation
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  // Get date for "inactive" calculation (90 days ago)
  const ninetyDaysAgo = new Date();
  ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

  // Fetch customer statistics
  const [
    totalCustomers,
    activeThisMonth,
    vipCustomers,
    emailSubscribers,
    customers
  ] = await Promise.all([
    prisma.customer.count(),
    prisma.customer.count({
      where: {
        lastOrderAt: { gte: startOfMonth },
      },
    }),
    prisma.customer.count({
      where: {
        totalSpent: { gte: 500 },
      },
    }),
    prisma.customer.count({
      where: {
        emailOptIn: true,
      },
    }),
    prisma.customer.findMany({
      take: 50,
      orderBy: { totalSpent: 'desc' },
      include: {
        orders: {
          select: {
            id: true,
            total: true,
            createdAt: true,
            status: true,
          },
          orderBy: { createdAt: 'desc' },
          take: 5,
        },
      },
    }),
  ]);

  const stats = [
    {
      label: 'Total Customers',
      value: totalCustomers,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      label: 'Active This Month',
      value: activeThisMonth,
      icon: UserCheck,
      color: 'bg-green-500',
    },
    {
      label: 'VIP Customers',
      value: vipCustomers,
      icon: Star,
      color: 'bg-yellow-500',
    },
    {
      label: 'Email Subscribers',
      value: emailSubscribers,
      icon: Mail,
      color: 'bg-purple-500',
    },
  ];

  // Helper function to determine customer status
  const getCustomerStatus = (customer: typeof customers[0]) => {
    if (customer.totalSpent.toNumber() >= 500) return 'VIP';
    if (customer.lastOrderAt && customer.lastOrderAt < ninetyDaysAgo) return 'Inactive';
    if (customer.totalOrders > 1) return 'Regular';
    return 'New';
  };

  // Helper function to get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'VIP':
        return 'bg-yellow-100 text-yellow-800';
      case 'Regular':
        return 'bg-blue-100 text-blue-800';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800';
      case 'New':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Helper function to format relative time
  const getRelativeTime = (date: Date | null) => {
    if (!date) return 'Never';
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
    return `${Math.floor(diffInDays / 365)} years ago`;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900">
            Customers
          </h1>
          <p className="mt-2 text-gray-600">
            View and manage customer database
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#816B3B]">
          Export CSV
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      {/* Customers Table */}
      <div className="bg-white shadow rounded-lg border border-gray-200">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Customer Database
          </h3>
        </div>
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Marketing
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-sm text-gray-500"
                  >
                    No customers yet. Customer data will appear here once orders are placed.
                  </td>
                </tr>
              ) : (
                customers.map((customer) => {
                  const status = getCustomerStatus(customer);
                  const statusColor = getStatusColor(status);

                  return (
                    <tr
                      key={customer.id}
                      className="hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <div className="text-sm font-medium text-gray-900">
                            {customer.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {customer.email}
                          </div>
                          <div className="text-sm text-gray-500">
                            {customer.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {customer.totalOrders}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ${customer.totalSpent.toNumber().toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {getRelativeTime(customer.lastOrderAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}
                        >
                          {status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {customer.emailOptIn && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                              <Mail className="h-3 w-3 mr-1" />
                              Email
                            </span>
                          )}
                          {customer.smsOptIn && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                              SMS
                            </span>
                          )}
                          {!customer.emailOptIn && !customer.smsOptIn && (
                            <span className="text-xs text-gray-400">None</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Segments (Quick Filters Info) */}
      <div className="bg-white shadow rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Segments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">VIP</p>
                <p className="text-2xl font-semibold text-gray-900">{vipCustomers}</p>
              </div>
              <Star className="h-8 w-8 text-yellow-500" />
            </div>
            <p className="mt-2 text-xs text-gray-500">Spent over $500</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Regular</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {customers.filter(c => c.totalOrders > 1 && c.totalSpent.toNumber() < 500).length}
                </p>
              </div>
              <UserCheck className="h-8 w-8 text-blue-500" />
            </div>
            <p className="mt-2 text-xs text-gray-500">Multiple orders</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Inactive</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {customers.filter(c => c.lastOrderAt && c.lastOrderAt < ninetyDaysAgo).length}
                </p>
              </div>
              <Users className="h-8 w-8 text-gray-400" />
            </div>
            <p className="mt-2 text-xs text-gray-500">No orders in 90+ days</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">New</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {customers.filter(c => c.totalOrders === 1).length}
                </p>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
            <p className="mt-2 text-xs text-gray-500">First order only</p>
          </div>
        </div>
      </div>
    </div>
  );
}
