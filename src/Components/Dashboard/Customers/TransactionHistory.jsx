import React, { useState } from 'react';
import { Download, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

function TransactionHistory({ customerId }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample transaction data
  const transactionsData = [
    {
      id: '345678978',
      type: 'Funding',
      amount: 'USD $10.00',
      status: 'Paid',
      timestamp: '12:00pm\n15th July, 2025'
    },
    {
      id: '345678978',
      type: 'Withdrawal',
      amount: 'USD $10.00',
      status: 'Paid',
      timestamp: '12:00pm\n15th July, 2025'
    },
    {
      id: '345678978',
      type: 'Conversion',
      amount: 'USD $10.00',
      status: 'Paid',
      timestamp: '12:00pm\n15th July, 2025'
    },
    {
      id: '345678978',
      type: 'DCA Execution',
      amount: 'USD $10.00',
      status: 'Paid',
      timestamp: '12:00pm\n15th July, 2025'
    },
    {
      id: '345678978',
      type: 'Fee',
      amount: 'USD $10.00',
      status: 'Paid',
      timestamp: '12:00pm\n15th July, 2025'
    },
    {
      id: '345678978',
      type: 'DCA Execution',
      amount: 'USD $10.00',
      status: 'Paid',
      timestamp: '12:00pm\n15th July, 2025'
    },
    {
      id: '345678978',
      type: 'DCA Execution',
      amount: 'USD $10.00',
      status: 'Paid',
      timestamp: '12:00pm\n15th July, 2025'
    }
  ];

  const getTransactionTypeColor = (type) => {
    switch (type) {
      case 'Funding':
        return 'bg-blue-100 text-blue-800';
      case 'Withdrawal':
        return 'bg-purple-100 text-purple-800';
      case 'Conversion':
        return 'bg-orange-100 text-orange-800';
      case 'DCA Execution':
        return 'bg-green-100 text-green-800';
      case 'Fee':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const itemsPerPage = 10;
  const totalPages = Math.ceil(transactionsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = transactionsData.slice(startIndex, endIndex);

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Transaction History</h3>
        <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          <Download className="w-4 h-4" />
          Download all
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction Ref
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction Type
                <ChevronDown className="inline w-3 h-3 ml-1" />
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time Stamp
                <ChevronDown className="inline w-3 h-3 ml-1" />
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentItems.map((transaction, index) => (
              <tr key={`${transaction.id}-${index}`} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-sm font-medium text-gray-900">
                  # {transaction.id}
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTransactionTypeColor(transaction.type)}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></div>
                    {transaction.type}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900">
                  {transaction.amount}
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></div>
                    {transaction.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  <div className="whitespace-pre-line">
                    {transaction.timestamp}
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

export default TransactionHistory;