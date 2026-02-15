'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import {
  LayoutDashboard,
  UtensilsCrossed,
  ShoppingBag,
  PartyPopper,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react';

interface AdminNavProps {
  user: {
    name?: string | null;
    email?: string | null;
    role?: string;
  };
}

const navItems = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    name: 'Orders',
    href: '/admin/orders',
    icon: ShoppingBag,
  },
  {
    name: 'Menu',
    href: '/admin/menu',
    icon: UtensilsCrossed,
  },
  {
    name: 'Catering',
    href: '/admin/catering',
    icon: PartyPopper,
  },
  {
    name: 'Customers',
    href: '/admin/customers',
    icon: Users,
  },
  {
    name: 'Analytics',
    href: '/admin/analytics',
    icon: BarChart3,
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  },
];

export default function AdminNav({ user }: AdminNavProps) {
  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          {/* Logo */}
          <div className="flex h-16 shrink-0 items-center">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/branding/josephine-portrait.png"
                  alt="Josephine's"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="font-display text-lg text-gray-900">
                  Josephine's
                </h2>
                <p className="text-xs text-gray-500">Admin Dashboard</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`
                            group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors
                            ${
                              isActive
                                ? 'bg-[#816B3B] text-white'
                                : 'text-gray-700 hover:text-[#816B3B] hover:bg-gray-50'
                            }
                          `}
                        >
                          <Icon
                            className={`h-6 w-6 shrink-0 ${
                              isActive ? 'text-white' : 'text-gray-400 group-hover:text-[#816B3B]'
                            }`}
                          />
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>

              {/* User Info & Logout */}
              <li className="mt-auto">
                <div className="border-t border-gray-200 pt-4">
                  {/* User Info */}
                  <div className="px-2 mb-3">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#816B3B]/10 text-[#816B3B] mt-2">
                      {user.role}
                    </span>
                  </div>

                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="group flex w-full gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-red-600" />
                    Logout
                  </button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
