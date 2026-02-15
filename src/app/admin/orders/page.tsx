import { requireAuth } from '@/lib/auth-utils';
import { Package, Plus } from 'lucide-react';

export default async function OrdersPage() {
  await requireAuth();

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

      {/* Coming Soon Card */}
      <div className="bg-white shadow rounded-lg border border-gray-200 p-12">
        <div className="text-center">
          <Package className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            Orders Management
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Order management interface coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
