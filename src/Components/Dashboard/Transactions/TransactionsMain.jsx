import React, { useState } from 'react';
import { Search, Filter, Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function TransactionsMain() {
  const [activeTab, setActiveTab] = useState('individuals');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  const handleTransactionClick = (transactionId) => {
    navigate(`/dashboard/transactions/${transactionId}`);
  };

  // Sample transaction data for different user types
  const transactionsData = {
    individuals: [
      {
        id: '23456786',
        customerName: 'Williams',
        transactionType: 'Funding',
        amount: 'USD 100.00',
        timestamp: '12:00pm\n15th July, 2025',
        initiator: 'Individual'
      },
      {
        id: '23456786',
        customerName: 'Williams',
        transactionType: 'Withdrawal',
        amount: 'USD 100.00',
        timestamp: '12:00pm\n15th July, 2025',
        initiator: 'Admin'
      },
      {
        id: '23456786',
        customerName: 'Williams',
        transactionType: 'Conversion',
        amount: 'NGN 1,000,000,000',
        timestamp: '12:00pm\n15th July, 2025',
        initiator: 'Operator'
      },
      {
        id: '23456786',
        customerName: 'Williams',
        transactionType: 'DCA Execution',
        amount: 'NGN 1,000,000,000',
        timestamp: '12:00pm\n15th July, 2025',
        initiator: 'Automated DCA'
      },
      {
        id: '23456786',
        customerName: 'Williams',
        transactionType: 'Fee',
        amount: 'NGN 1,000,000,000',
        timestamp: '12:00pm\n15th July, 2025',
        initiator: 'Omora'
      },
      {
        id: '23456786',
        customerName: 'Williams',
        transactionType: 'DCA Execution',
        amount: 'NGN 1,000,000,000',
        timestamp: '12:00pm\n15th July, 2025',
        initiator: 'Individual'
      },
      {
        id: '23456786',
        customerName: 'Williams',
        transactionType: 'DCA Execution',
        amount: 'NGN 1,000,000,000',
        timestamp: '12:00pm\n15th July, 2025',
        initiator: 'Admin'
      },
      {
        id: '23456786',
        customerName: 'Williams',
        transactionType: 'DCA Execution',
        amount: 'NGN 1,000,000,000',
        timestamp: '12:00pm\n15th July, 2025',
        initiator: 'Individual'
      }
    ],
    businesses: [
      {
        id: '34567890',
        customerName: 'Tech Solutions Ltd',
        transactionType: 'Funding',
        amount: 'USD 5000.00',
        timestamp: '11:30am\n14th July, 2025',
        initiator: 'Business'
      },
      {
        id: '34567890',
        customerName: 'Tech Solutions Ltd',
        transactionType: 'Withdrawal',
        amount: 'USD 2500.00',
        timestamp: '10:15am\n14th July, 2025',
        initiator: 'Admin'
      },
      {
        id: '34567891',
        customerName: 'Global Traders Inc',
        transactionType: 'Conversion',
        amount: 'NGN 2,500,000,000',
        timestamp: '09:45am\n14th July, 2025',
        initiator: 'Business'
      },
      {
        id: '34567891',
        customerName: 'Global Traders Inc',
        transactionType: 'Fee',
        amount: 'NGN 500,000,000',
        timestamp: '09:30am\n14th July, 2025',
        initiator: 'Omora'
      }
    ],
    audit: [
      {
        id: 'AUD001',
        customerName: 'System',
        transactionType: 'Audit Log',
        amount: 'N/A',
        timestamp: '12:00pm\n15th July, 2025',
        initiator: 'System'
      },
      {
        id: 'AUD002',
        customerName: 'Admin User',
        transactionType: 'Status Update',
        amount: 'N/A',
        timestamp: '11:45am\n15th July, 2025',
        initiator: 'Admin'
      }
    ]
  };

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
      case 'Audit Log':
        return 'bg-red-100 text-red-800';
      case 'Status Update':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getInitiatorColor = (initiator) => {
    switch (initiator) {
      case 'Individual':
        return 'bg-blue-100 text-blue-800';
      case 'Business':
        return 'bg-purple-100 text-purple-800';
      case 'Admin':
        return 'bg-red-100 text-red-800';
      case 'Operator':
        return 'bg-green-100 text-green-800';
      case 'Automated DCA':
        return 'bg-orange-100 text-orange-800';
      case 'Omora':
        return 'bg-cyan-100 text-cyan-800';
      case 'System':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const currentData = transactionsData[activeTab];
  const filteredData = currentData.filter(transaction =>
    transaction.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.id.includes(searchTerm) ||
    transaction.transactionType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  const tabs = [
    { id: 'individuals', label: 'Individuals' },
    { id: 'businesses', label: 'Businesses' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          Export data
        </button>
      </div>

      {/* Tab Navigation - Card Style */}
      <div className="mb-6 w-1/3">
        <nav className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 flex-1 ${
                activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Section Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {activeTab === 'individuals' ? 'Individuals' : 'Businesses'}
          </h2>
          
          {/* Search and Filters */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500"
              />
              <span className="absolute right-3 top-3 text-xs text-gray-400">⌘K</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">Jan 10, 2025 – Jan 16, 2025</span>
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Custom Filters
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reference
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer Name
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction Type
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time Stamp
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Initiator
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentItems.map((transaction, index) => (
                <tr 
                  key={`${transaction.id}-${index}`} 
                  onClick={() => handleTransactionClick(transaction.id)}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    # {transaction.id}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">
                    {transaction.customerName}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTransactionTypeColor(transaction.transactionType)}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></div>
                      {transaction.transactionType}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    {transaction.amount}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    <div className="whitespace-pre-line">
                      {transaction.timestamp}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getInitiatorColor(transaction.initiator)}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></div>
                      {transaction.initiator}
                    </span>
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
    </div>
  );
}

export default TransactionsMain;