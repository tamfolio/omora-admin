import React, { useState } from 'react';
import { Search, Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function PauseRequest() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleRequestClick = (requestId) => {
    navigate(`/dashboard/pause-requests/${requestId}`);
  };

  // Sample pause request data
  const pauseRequestsData = [
    {
      id: '23456786',
      pausedReason: 'Market fluctuation',
      timestamp: '12:00pm\n15th July, 2025',
      customerCounts: 600,
      status: 'Market fluctuation',
      actionType: 'pause',
      actions: ['Reject', 'Pause']
    },
    {
      id: '23456786',
      pausedReason: 'Bitcoin Inaccuracy',
      timestamp: '12:00pm\n15th July, 2025',
      customerCounts: 500,
      status: 'Bitcoin Inaccuracy',
      actionType: 'unpause',
      actions: ['Unpause']
    },
    {
      id: '23456786',
      pausedReason: 'Bitcoin Inaccuracy',
      timestamp: '12:00pm\n15th July, 2025',
      customerCounts: 800,
      status: 'Bitcoin Inaccuracy',
      actionType: 'activate',
      actions: ['Deactivate', 'Activate']
    },
    {
      id: '23456786',
      pausedReason: 'Bitcoin Inaccuracy',
      timestamp: '12:00pm\n15th July, 2025',
      customerCounts: 800,
      status: 'Bitcoin Inaccuracy',
      actionType: 'activate',
      actions: ['Deactivate', 'Activate']
    },
    {
      id: '23456786',
      pausedReason: 'Bitcoin Inaccuracy',
      timestamp: '12:00pm\n15th July, 2025',
      customerCounts: 800,
      status: 'Bitcoin Inaccuracy',
      actionType: 'activate',
      actions: ['Deactivate', 'Activate']
    },
    {
      id: '23456786',
      pausedReason: 'Bitcoin Inaccuracy',
      timestamp: '12:00pm\n15th July, 2025',
      customerCounts: 800,
      status: 'Bitcoin Inaccuracy',
      actionType: 'activate',
      actions: ['Deactivate', 'Activate']
    },
    {
      id: '23456786',
      pausedReason: 'Bitcoin Inaccuracy',
      timestamp: '12:00pm\n15th July, 2025',
      customerCounts: 800,
      status: 'Bitcoin Inaccuracy',
      actionType: 'activate',
      actions: ['Deactivate', 'Activate']
    },
    {
      id: '23456786',
      pausedReason: 'Bitcoin Inaccuracy',
      timestamp: '12:00pm\n15th July, 2025',
      customerCounts: 800,
      status: 'Bitcoin Inaccuracy',
      actionType: 'activate',
      actions: ['Deactivate', 'Activate']
    }
  ];

  const handleAction = (action, requestId, event) => {
    event.stopPropagation(); // Prevent row click when clicking action buttons
    console.log(`${action} action clicked for request ${requestId}`);
    // Implement your action logic here
  };

  const filteredData = pauseRequestsData.filter(request =>
    request.id.includes(searchTerm) ||
    request.pausedReason.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Pause Requests</h1>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          Export data
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Section Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Auto-Pause</h2>
          
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
            
            <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">Jan 10, 2025 – Jan 16, 2025</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Auto-pause ID
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Paused Reason
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time Stamp
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer Counts
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentItems.map((request, index) => (
                <tr 
                  key={`${request.id}-${index}`} 
                  onClick={() => handleRequestClick(request.id)}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    # {request.id}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">
                    {request.pausedReason}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    <div className="whitespace-pre-line">
                      {request.timestamp}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    {request.customerCounts}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">
                    {request.status}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      {request.actions.map((action, actionIndex) => (
                        <button
                          key={actionIndex}
                          onClick={(e) => handleAction(action, request.id, e)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            action === 'Pause' || action === 'Activate' || action === 'Unpause'
                              ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {action}
                        </button>
                      ))}
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
    </div>
  );
}

export default PauseRequest;