import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

function AuditTrail({ customerId }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample audit trail data
  const auditData = [
    {
      id: 1,
      user: 'User A',
      role: 'Operator',
      action: 'deposited NGN 5,000,000 into account',
      timestamp: '12:00pm\n15th July, 2025'
    },
    {
      id: 2,
      user: 'User A',
      role: 'Admin',
      action: 'approves account status',
      timestamp: '12:00pm\n15th July, 2025'
    },
    {
      id: 3,
      user: 'User A',
      role: 'Operator',
      action: 'deposited NGN 5,000,000 into account',
      timestamp: '12:00pm\n15th July, 2025'
    },
    {
      id: 4,
      user: 'User A',
      role: 'Operator',
      action: 'deposited NGN 5,000,000 into account',
      timestamp: '12:00pm\n15th July, 2025'
    },
    {
      id: 5,
      user: 'User A',
      role: 'Operator',
      action: 'deposited NGN 5,000,000 into account',
      timestamp: '12:00pm\n15th July, 2025'
    },
    {
      id: 6,
      user: 'User A',
      role: 'Operator',
      action: 'deposited NGN 5,000,000 into account',
      timestamp: '12:00pm\n15th July, 2025'
    },
    {
      id: 7,
      user: 'User A',
      role: 'Operator',
      action: 'deposited NGN 5,000,000 into account',
      timestamp: '12:00pm\n15th July, 2025'
    },
    {
      id: 8,
      user: 'User B',
      role: 'Admin',
      action: 'updated customer profile information',
      timestamp: '11:30am\n14th July, 2025'
    },
    {
      id: 9,
      user: 'User C',
      role: 'Operator',
      action: 'processed withdrawal request',
      timestamp: '10:15am\n14th July, 2025'
    },
    {
      id: 10,
      user: 'User A',
      role: 'Admin',
      action: 'verified KYC documents',
      timestamp: '09:45am\n14th July, 2025'
    }
  ];

  const getRoleColor = (role) => {
    switch (role) {
      case 'Admin':
        return 'text-purple-700';
      case 'Operator':
        return 'text-blue-700';
      case 'Manager':
        return 'text-green-700';
      case 'Support':
        return 'text-orange-700';
      default:
        return 'text-gray-700';
    }
  };

  const itemsPerPage = 10;
  const totalPages = Math.ceil(auditData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = auditData.slice(startIndex, endIndex);

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Audit Log</h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
                <ChevronDown className="inline w-3 h-3 ml-1" />
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time stamp
                <ChevronDown className="inline w-3 h-3 ml-1" />
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentItems.map((entry) => (
              <tr key={entry.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-sm font-medium text-gray-900">
                  {entry.user}
                </td>
                <td className="py-4 px-6 text-sm font-medium">
                  <span className={getRoleColor(entry.role)}>
                    {entry.role}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  {entry.action}
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  <div className="whitespace-pre-line">
                    {entry.timestamp}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuditTrail;