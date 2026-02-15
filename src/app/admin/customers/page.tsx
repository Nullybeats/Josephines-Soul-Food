import { requireAuth } from '@/lib/auth-utils';
import { Users } from 'lucide-react';

export default async function CustomersPage() {
  await requireAuth();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-gray-900">
          Customers
        </h1>
        <p className="mt-2 text-gray-600">
          View customer information and order history
        </p>
      </div>

      {/* Coming Soon Card */}
      <div className="bg-white shadow rounded-lg border border-gray-200 p-12">
        <div className="text-center">
          <Users className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            Customer Database
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Customer management interface coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
