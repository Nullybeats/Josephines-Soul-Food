import { OrderStatus, RequestStatus } from '@prisma/client';

type Status = OrderStatus | RequestStatus;

interface StatusBadgeProps {
  status: Status;
  editable?: boolean;
  onChange?: (newStatus: Status) => void;
}

const getStatusColor = (status: Status): string => {
  switch (status) {
    // Order statuses
    case 'PENDING':
      return 'bg-yellow-100 text-yellow-800';
    case 'CONFIRMED':
      return 'bg-blue-100 text-blue-800';
    case 'PREPARING':
      return 'bg-purple-100 text-purple-800';
    case 'READY':
      return 'bg-green-100 text-green-800';
    case 'OUT_FOR_DELIVERY':
      return 'bg-indigo-100 text-indigo-800';
    case 'DELIVERED':
      return 'bg-teal-100 text-teal-800';
    case 'COMPLETED':
      return 'bg-gray-100 text-gray-800';
    case 'CANCELLED':
      return 'bg-red-100 text-red-800';

    // Catering request statuses
    case 'NEW':
      return 'bg-green-100 text-green-800';
    case 'CONTACTED':
      return 'bg-blue-100 text-blue-800';
    case 'QUOTED':
      return 'bg-purple-100 text-purple-800';
    // CONFIRMED, COMPLETED, CANCELLED already covered above

    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const formatStatus = (status: Status): string => {
  return status
    .split('_')
    .map(word => word.charAt(0) + word.slice(1).toLowerCase())
    .join(' ');
};

export default function StatusBadge({ status, editable = false, onChange }: StatusBadgeProps) {
  const colorClasses = getStatusColor(status);
  const displayText = formatStatus(status);

  if (!editable || !onChange) {
    return (
      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClasses}`}>
        {displayText}
      </span>
    );
  }

  // Editable dropdown version (for future enhancement)
  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClasses}`}>
      {displayText}
    </span>
  );
}
