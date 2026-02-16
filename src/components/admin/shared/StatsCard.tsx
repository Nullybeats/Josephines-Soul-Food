import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: string; // Tailwind color class like 'bg-blue-500'
  href?: string;
  trend?: {
    value: number;
    direction: 'up' | 'down';
  };
}

export default function StatsCard({ label, value, icon: Icon, color, href, trend }: StatsCardProps) {
  const content = (
    <>
      <dt>
        <div className={`absolute rounded-md p-3 ${color}`}>
          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <p className="ml-16 truncate text-sm font-medium text-gray-500">
          {label}
        </p>
      </dt>
      <dd className="ml-16 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">
          {value}
        </p>
        {trend && (
          <p className={`ml-2 flex items-baseline text-sm font-semibold ${
            trend.direction === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend.direction === 'up' ? '↑' : '↓'} {trend.value}%
          </p>
        )}
      </dd>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow hover:shadow-lg transition-shadow border border-gray-200"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow border border-gray-200">
      {content}
    </div>
  );
}
