import { requireAuth } from '@/lib/auth-utils';
import { prisma } from '@/lib/prisma';
import {
  TrendingUp,
  DollarSign,
  ShoppingBag,
  TrendingDown,
  Package,
  Eye,
} from 'lucide-react';
import StatsCard from '@/components/admin/shared/StatsCard';

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function AnalyticsPage() {
  await requireAuth();

  // Get date range (last 30 days)
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 30);

  // Fetch analytics data
  const [totalOrders, totalRevenue, avgOrderValue, ordersByType, pageViews] =
    await Promise.all([
      prisma.order.count({
        where: {
          createdAt: { gte: startDate, lte: endDate },
        },
      }),
      prisma.order.aggregate({
        where: {
          createdAt: { gte: startDate, lte: endDate },
          status: { notIn: ['CANCELLED'] },
        },
        _sum: { total: true },
      }),
      prisma.order.aggregate({
        where: {
          createdAt: { gte: startDate, lte: endDate },
          status: { notIn: ['CANCELLED'] },
        },
        _avg: { total: true },
      }),
      prisma.order.groupBy({
        by: ['type'],
        where: {
          createdAt: { gte: startDate, lte: endDate },
        },
        _count: { id: true },
      }),
      prisma.pageView.count({
        where: {
          createdAt: { gte: startDate, lte: endDate },
        },
      }),
    ]);

  const revenue = totalRevenue._sum.total?.toNumber() || 0;
  const avgValue = avgOrderValue._avg.total?.toNumber() || 0;

  const stats = [
    {
      label: 'Total Revenue (30 days)',
      value: `$${revenue.toFixed(2)}`,
      icon: DollarSign,
      color: 'bg-green-500',
    },
    {
      label: 'Total Orders (30 days)',
      value: totalOrders,
      icon: ShoppingBag,
      color: 'bg-blue-500',
    },
    {
      label: 'Average Order Value',
      value: `$${avgValue.toFixed(2)}`,
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
    {
      label: 'Page Views (30 days)',
      value: pageViews,
      icon: Eye,
      color: 'bg-indigo-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900">
            Analytics
          </h1>
          <p className="mt-2 text-gray-600">
            Sales reports and business insights
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Last 30 days
        </div>
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

      {/* Order Type Breakdown */}
      <div className="bg-white shadow rounded-lg border border-gray-200">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Order Type Distribution</h2>
        </div>
        <div className="px-6 py-5">
          {ordersByType.length === 0 ? (
            <div className="text-center py-8">
              <Package className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">
                No order data yet. Analytics will appear once you start receiving orders.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {ordersByType.map((typeData) => {
                const percentage = totalOrders > 0
                  ? ((typeData._count.id / totalOrders) * 100).toFixed(1)
                  : 0;

                return (
                  <div key={typeData.type}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 capitalize">
                          {typeData.type.toLowerCase()}
                        </span>
                        <span className="ml-2 text-sm text-gray-500">
                          {typeData._count.id} orders
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          typeData.type === 'PICKUP'
                            ? 'bg-blue-500'
                            : typeData.type === 'DELIVERY'
                            ? 'bg-green-500'
                            : 'bg-purple-500'
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Quick Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenue Insight */}
        <div className="bg-white shadow rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Revenue Trend</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                ${revenue.toFixed(2)}
              </p>
              <p className="mt-1 text-sm text-gray-500">Last 30 days</p>
            </div>
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        {/* Orders Insight */}
        <div className="bg-white shadow rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Order Volume</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {totalOrders}
              </p>
              <p className="mt-1 text-sm text-gray-500">Last 30 days</p>
            </div>
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
              <ShoppingBag className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Stats */}
      <div className="bg-white shadow rounded-lg border border-gray-200">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Website Traffic</h2>
        </div>
        <div className="px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Page Views</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">{pageViews}</p>
            </div>
            <Eye className="h-8 w-8 text-gray-400" />
          </div>
          {pageViews === 0 && (
            <p className="mt-4 text-sm text-gray-500">
              Page view tracking is active. Data will appear as visitors browse your site.
            </p>
          )}
        </div>
      </div>

      {/* Export Button (for future) */}
      <div className="flex justify-end">
        <button
          className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#816B3B]"
          disabled
        >
          Export CSV (Coming Soon)
        </button>
      </div>
    </div>
  );
}
