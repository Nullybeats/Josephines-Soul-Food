import { requireAuth } from '@/lib/auth-utils';
import { prisma } from '@/lib/prisma';
import {
  PartyPopper,
  Calendar,
  CheckCircle,
  TrendingUp,
  Users,
  DollarSign,
  MapPin,
  Plus,
} from 'lucide-react';
import StatsCard from '@/components/admin/shared/StatsCard';
import StatusBadge from '@/components/admin/shared/StatusBadge';

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function CateringPage() {
  await requireAuth();

  // Get date ranges for stats
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);

  // Fetch catering request statistics
  const [
    totalRequests,
    newRequests,
    weekEvents,
    upcomingEvents,
    confirmedRequests,
    requests
  ] = await Promise.all([
    prisma.cateringRequest.count(),
    prisma.cateringRequest.count({
      where: { status: 'NEW' },
    }),
    prisma.cateringRequest.count({
      where: {
        eventDate: {
          gte: startOfWeek,
          lte: endOfWeek,
        },
      },
    }),
    prisma.cateringRequest.count({
      where: {
        eventDate: { gte: today },
        status: { in: ['CONFIRMED', 'QUOTED'] },
      },
    }),
    prisma.cateringRequest.count({
      where: { status: 'CONFIRMED' },
    }),
    prisma.cateringRequest.findMany({
      take: 50,
      orderBy: [{ eventDate: 'asc' }, { createdAt: 'desc' }],
    }),
  ]);

  // Calculate conversion rate (confirmed / total)
  const conversionRate = totalRequests > 0
    ? ((confirmedRequests / totalRequests) * 100).toFixed(1)
    : '0.0';

  const stats = [
    {
      label: 'New Requests',
      value: newRequests,
      icon: PartyPopper,
      color: 'bg-green-500',
    },
    {
      label: "This Week's Events",
      value: weekEvents,
      icon: Calendar,
      color: 'bg-blue-500',
    },
    {
      label: 'Upcoming Events',
      value: upcomingEvents,
      icon: CheckCircle,
      color: 'bg-purple-500',
    },
    {
      label: 'Conversion Rate',
      value: `${conversionRate}%`,
      icon: TrendingUp,
      color: 'bg-yellow-500',
    },
  ];

  // Helper function to format event type
  const formatEventType = (type: string) => {
    return type
      .split('_')
      .map(word => word.charAt(0) + word.slice(1).toLowerCase())
      .join(' ');
  };

  // Helper function to format date
  const formatEventDate = (date: Date) => {
    const now = new Date();
    const eventDate = new Date(date);
    const diffInMs = eventDate.getTime() - now.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    const formattedDate = eventDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    if (diffInDays < 0) return `${formattedDate} (Past)`;
    if (diffInDays === 0) return `${formattedDate} (Today)`;
    if (diffInDays === 1) return `${formattedDate} (Tomorrow)`;
    if (diffInDays < 7) return `${formattedDate} (${diffInDays} days)`;
    return formattedDate;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900">
            Catering Requests
          </h1>
          <p className="mt-2 text-gray-600">
            Manage catering inquiries and events
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#816B3B] hover:bg-[#6B5830] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#816B3B]">
          <Plus className="h-5 w-5 mr-2" />
          New Request
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

      {/* Catering Requests Table */}
      <div className="bg-white shadow rounded-lg border border-gray-200">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            All Catering Requests
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
                  Event Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guests
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Venue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requests.length === 0 ? (
                <tr>
                  <td
                    colSpan={8}
                    className="px-6 py-8 text-center text-sm text-gray-500"
                  >
                    No catering requests yet. Requests will appear here once customers submit inquiries.
                  </td>
                </tr>
              ) : (
                requests.map((request) => (
                  <tr
                    key={request.id}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <div className="text-sm font-medium text-gray-900">
                          {request.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {request.email}
                        </div>
                        <div className="text-sm text-gray-500">
                          {request.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <PartyPopper className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">
                          {formatEventType(request.eventType)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">
                          {formatEventDate(request.eventDate)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">
                          {request.guestCount}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">
                          {request.budget ? `$${request.budget.toNumber().toFixed(2)}` : 'Not specified'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {request.venue ? (
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-900 truncate max-w-[150px]" title={request.venue}>
                            {request.venue}
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">Not specified</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={request.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(request.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Stats by Status */}
      <div className="bg-white shadow rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Request Pipeline</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['NEW', 'CONTACTED', 'QUOTED', 'CONFIRMED', 'COMPLETED', 'CANCELLED'].map((status) => {
            const count = requests.filter(r => r.status === status).length;
            return (
              <div key={status} className="text-center p-4 border border-gray-200 rounded-lg">
                <p className="text-2xl font-semibold text-gray-900">{count}</p>
                <p className="text-xs text-gray-500 mt-1">{formatEventType(status)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
