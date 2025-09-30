import React, { useState } from 'react';
import { Download, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

function InvestmentHistory({ customerId }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample investment data
  const investmentsData = [
    {
      id: 1,
      status: 'Paid',
      startDate: '15th Dec, 2025',
      endDate: '25th Dec, 2025',
      tenor: '90 days',
      investmentAmount: 'USDC 10000',
      dailyRecurringAmount: 'USD $10.00',
      totalReturns: 'USD $30.00'
    },
    {
      id: 2,
      status: 'Paid',
      startDate: '10th Nov, 2025',
      endDate: '15th Nov, 2025',
      tenor: '120 days',
      investmentAmount: 'USDC 10000',
      dailyRecurringAmount: 'USD $10.00',
      totalReturns: 'USD $30.00'
    },
    {
      id: 3,
      status: 'Paid',
      startDate: '12th Oct, 2025',
      endDate: '20th Oct, 2025',
      tenor: '150 days',
      investmentAmount: 'USDC 10000',
      dailyRecurringAmount: 'USD $10.00',
      totalReturns: 'USD $30.00'
    },
    {
      id: 4,
      status: 'Paid',
      startDate: '8th Sep, 2025',
      endDate: '15th Sep, 2025',
      tenor: '180 days',
      investmentAmount: 'USDC 10000',
      dailyRecurringAmount: 'USD $10.00',
      totalReturns: 'USD $30.00'
    },
    {
      id: 5,
      status: 'Paid',
      startDate: '25th Aug, 2025',
      endDate: '30th Aug, 2025',
      tenor: '210 days',
      investmentAmount: 'USDC 10000',
      dailyRecurringAmount: 'USD $10.00',
      totalReturns: 'USD $30.00'
    },
    {
      id: 6,
      status: 'Paid',
      startDate: '12 Jul, 2025',
      endDate: '30 Jul, 2025',
      tenor: '240 days',
      investmentAmount: 'USDC 10000',
      dailyRecurringAmount: 'USD $10.00',
      totalReturns: 'USD $30.00'
    },
    {
      id: 7,
      status: 'Paid',
      startDate: '10th Jun, 2025',
      endDate: '25th Jun, 2025',
      tenor: '270 days',
      investmentAmount: 'USDC 10000',
      dailyRecurringAmount: 'USD $10.00',
      totalReturns: 'USD $30.00'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Active':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      case 'Completed':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const itemsPerPage = 10;
  const totalPages = Math.ceil(investmentsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = investmentsData.slice(startIndex, endIndex);

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Investment History</h3>
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
                Status
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Date
                <ChevronDown className="inline w-3 h-3 ml-1" />
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Date
                <ChevronDown className="inline w-3 h-3 ml-1" />
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tenor
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Investment Amount
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Daily Recurring Amount
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Returns
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentItems.map((investment) => (
              <tr key={investment.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(investment.status)}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></div>
                    {investment.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">
                  {investment.startDate}
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">
                  {investment.endDate}
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  {investment.tenor}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900">
                  {investment.investmentAmount}
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">
                  {investment.dailyRecurringAmount}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900">
                  {investment.totalReturns}
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

export default InvestmentHistory;