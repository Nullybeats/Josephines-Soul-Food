import { requireAuth } from '@/lib/auth-utils';
import { prisma } from '@/lib/prisma';
import {
  ShoppingBag,
  DollarSign,
  Clock,
  TrendingUp,
  Plus,
} from 'lucide-react';
import Link from 'next/link';
import StatsCard from '@/components/admin/shared/StatsCard';
import StatusBadge from '@/components/admin/shared/StatusBadge';

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function OrdersPage() {
  await requireAuth();

  // Fetch dashboard statistics
  const [
    totalOrders,
    pendingOrders,
    todayOrders,
    todayRevenue,
    orders
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
    prisma.order.aggregate({
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
    }),
    prisma.order.findMany({
      take: 50,
      orderBy: { createdAt: 'desc' },
      include: {
        items: {
          include: {
            menuItem: true,
          },
        },
      },
    }),
  ]);

  // Calculate average order value
  const avgOrderValue = totalOrders > 0
    ? (todayRevenue._sum.total?.toNumber() || 0) / todayOrders
    : 0;

  const stats = [
    {
      label: "Today's Orders",
      value: todayOrders,
      icon: ShoppingBag,
      color: 'bg-blue-500',
      href: '/admin/orders?filter=today',
    },
    {
      label: 'Pending Orders',
      value: pendingOrders,
      icon: Clock,
      color: 'bg-yellow-500',
      href: '/admin/orders?status=pending',
    },
    {
      label: "Today's Revenue",
      value: `$${todayRevenue._sum.total?.toNumber().toFixed(2) || '0.00'}`,
      icon: DollarSign,
      color: 'bg-green-500',
    },
    {
      label: 'Avg Order Value',
      value: `$${avgOrderValue.toFixed(2)}`,
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900">
            Orders
          </h1>
          <p className="mt-2 text-gray-600">
            Manage and track all customer orders
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#816B3B] hover:bg-[#6B5830] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#816B3B]">
          <Plus className="h-5 w-5 mr-2" />
          New Order
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
            href={stat.href}
          />
        ))}
      </div>

      {/* Orders Table */}
      <div className="bg-white shadow rounded-lg border border-gray-200">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Recent Orders
          </h3>
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
                  Items
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
              {orders.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-8 text-center text-sm text-gray-500"
                  >
                    No orders yet. Orders will appear here once customers start
                    ordering.
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <Link
                        href={`/admin/orders/${order.id}`}
                        className="hover:text-[#816B3B]"
                      >
                        {order.orderNumber}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{order.customerName}</div>
                      <div className="text-sm text-gray-500">{order.customerPhone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="capitalize">{order.type.toLowerCase()}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.items.length} items
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      ${order.total.toNumber().toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={order.status} />
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
    </div>
  );
}
