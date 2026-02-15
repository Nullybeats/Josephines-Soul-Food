import { requireAuth } from '@/lib/auth-utils';
import { TrendingUp } from 'lucide-react';

export default async function AnalyticsPage() {
  await requireAuth();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-gray-900">
          Analytics
        </h1>
        <p className="mt-2 text-gray-600">
          Sales reports and business insights
        </p>
      </div>

      {/* Coming Soon Card */}
      <div className="bg-white shadow rounded-lg border border-gray-200 p-12">
        <div className="text-center">
          <TrendingUp className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            Analytics Dashboard
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Analytics and reporting interface coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
