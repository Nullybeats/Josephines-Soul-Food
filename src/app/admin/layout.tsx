import { requireAuth } from '@/lib/auth-utils';
import AdminNav from '@/components/admin/layout/AdminNav';
import AdminHeader from '@/components/admin/layout/AdminHeader';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Protect this entire layout - redirect to login if not authenticated
  // Note: /admin/login has its own layout.tsx that bypasses this
  const session = await requireAuth();

  // If we get here, user is authenticated
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <AdminNav user={session.user} />

      {/* Main Content Area */}
      <div className="lg:pl-64">
        {/* Top Header */}
        <AdminHeader user={session.user} />

        {/* Page Content */}
        <main className="py-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
