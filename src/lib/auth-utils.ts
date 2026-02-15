import { auth } from './auth';
import { redirect } from 'next/navigation';

/**
 * Server-side function to require authentication
 * Call this in server components or API routes to protect them
 * Redirects to login if not authenticated
 */
export async function requireAuth() {
  const session = await auth();

  if (!session || !session.user) {
    redirect('/admin/login');
  }

  return session;
}

/**
 * Server-side function to get the current session
 * Returns null if not authenticated (doesn't redirect)
 */
export async function getServerSession() {
  const session = await auth();
  return session;
}

/**
 * Check if user has specific role
 */
export async function requireRole(role: 'SUPER_ADMIN' | 'ADMIN' | 'STAFF') {
  const session = await requireAuth();

  if (session.user.role !== role && session.user.role !== 'SUPER_ADMIN') {
    redirect('/admin');
  }

  return session;
}
