import { requireAuth } from '@/lib/auth-utils';
import { prisma } from '@/lib/prisma';
import {
  ShoppingBag,
  DollarSign,
  UtensilsCrossed,
  PartyPopper,
  TrendingUp,
  Clock,
} from 'lucide-react';
import Link from 'next/link';

// Revalidate every 60 seconds to keep dashboard fresh
export const revalidate = 60;

export default async function AdminDashboard() {
  const session = await requireAuth();

  // Fetch dashboard statistics
  const [
    totalOrders,
    pendingOrders,
    todayOrders,
    menuItemsCount,
    pendingCateringRequests,
  ] = await Promise.all([
    prisma.order.count(),
    prisma.order.count({ where: { status: 'PENDING' } }),
    prisma.order.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setHours(0, 0, 0, 0)),
        },
      },
    }),
    prisma.menuItem.count({ where: { available: true } }),
    prisma.cateringRequest.count({ where: { status: 'NEW' } }),
  ]);

  // Fetch recent orders
  const recentOrders = await prisma.order.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: {
      items: {
        include: {
          menuItem: true,
        },
      },
    },
  });

  // Calculate today's revenue
  const todayRevenue = await prisma.order.aggregate({
    where: {
      createdAt: {
        gte: new Date(new Date().setHours(0, 0, 0, 0)),
      },
      status: {
        notIn: ['CANCELLED'],
      },
    },
    _sum: {
      total: true,
    },
  });

  const stats = [
    {
      name: "Today's Orders",
      value: todayOrders,
      icon: ShoppingBag,
      color: 'bg-blue-500',
      href: '/admin/orders',
    },
    {
      name: "Today's Revenue",
      value: `$${todayRevenue._sum.total?.toNumber().toFixed(2) || '0.00'}`,
      icon: DollarSign,
      color: 'bg-green-500',
      href: '/admin/analytics',
    },
    {
      name: 'Pending Orders',
      value: pendingOrders,
      icon: Clock,
      color: 'bg-yellow-500',
      href: '/admin/orders?status=pending',
    },
    {
      name: 'Active Menu Items',
      value: menuItemsCount,
      icon: UtensilsCrossed,
      color: 'bg-purple-500',
      href: '/admin/menu',
    },
    {
      name: 'Catering Requests',
      value: pendingCateringRequests,
      icon: PartyPopper,
      color: 'bg-pink-500',
      href: '/admin/catering',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'CONFIRMED':
        return 'bg-blue-100 text-blue-800';
      case 'PREPARING':
        return 'bg-purple-100 text-purple-800';
      case 'READY':
        return 'bg-green-100 text-green-800';
      case 'COMPLETED':
        return 'bg-gray-100 text-gray-800';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-display font-bold text-gray-900">
          Dashboard
        </h1>
        <p className="mt-2 text-gray-600">
          Welcome back, {session.user.name}! Here's what's happening today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.name}
              href={stat.href}
              className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow hover:shadow-lg transition-shadow border border-gray-200"
            >
              <dt>
                <div className={`absolute rounded-md p-3 ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">
                  {stat.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </dd>
            </Link>
          );
        })}
      </div>

      {/* Recent Orders */}
      <div className="bg-white shadow rounded-lg border border-gray-200">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Recent Orders
            </h3>
            <Link
              href="/admin/orders"
              className="text-sm font-medium text-[#816B3B] hover:text-[#6B5830]"
            >
              View all
            </Link>
          </div>
        </div>
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-sm text-gray-500"
                  >
                    No orders yet. Orders will appear here once customers start
                    ordering.
                  </td>
                </tr>
              ) : (
                recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <Link
                        href={`/admin/orders/${order.id}`}
                        className="hover:text-[#816B3B]"
                      >
                        {order.orderNumber}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.customerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="capitalize">{order.type.toLowerCase()}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      ${order.total.toNumber().toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleTimeString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Link
          href="/admin/orders"
          className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-[#816B3B] hover:shadow-md transition-all"
        >
          <h3 className="text-lg font-medium text-gray-900">New Order</h3>
          <p className="mt-2 text-sm text-gray-500">
            Create a new order manually
          </p>
        </Link>

        <Link
          href="/admin/menu"
          className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-[#816B3B] hover:shadow-md transition-all"
        >
          <h3 className="text-lg font-medium text-gray-900">Manage Menu</h3>
          <p className="mt-2 text-sm text-gray-500">
            Update menu items and prices
          </p>
        </Link>

        <Link
          href="/admin/catering"
          className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-[#816B3B] hover:shadow-md transition-all"
        >
          <h3 className="text-lg font-medium text-gray-900">Catering</h3>
          <p className="mt-2 text-sm text-gray-500">
            Review catering requests
          </p>
        </Link>

        <Link
          href="/admin/settings"
          className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-[#816B3B] hover:shadow-md transition-all"
        >
          <h3 className="text-lg font-medium text-gray-900">Settings</h3>
          <p className="mt-2 text-sm text-gray-500">
            Configure restaurant settings
          </p>
        </Link>
      </div>
    </div>
  );
}
