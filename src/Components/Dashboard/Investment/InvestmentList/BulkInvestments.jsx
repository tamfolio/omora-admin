import React, { useState } from "react";
import {
  Search,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function BulkInvestments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showActionDropdown, setShowActionDropdown] = useState(false);
  const [showRowDropdown, setShowRowDropdown] = useState(null);
  const navigate = useNavigate();

  const handleInvestmentClick = (investmentId) => {
    navigate(`/dashboard/bulk-investments/${investmentId}`);
  };

  const bulkInvestmentsData = [
    {
      id: "23456786",
      customerName: "Williams James",
      riskProfile: "Conservative",
      amount: "USD $10.00",
      status: "Active",
    },
    {
      id: "23456786",
      customerName: "Williams Company LLC",
      riskProfile: "Balanced",
      amount: "USD $10.00",
      status: "Paused by AI",
    },
    {
      id: "23456786",
      customerName: "Williams Company LLC",
      riskProfile: "Aggressive",
      amount: "USD $10.00",
      status: "Paused by User",
    },
    {
      id: "23456786",
      customerName: "Williams Company LLC",
      riskProfile: "Balanced",
      amount: "USD $10.00",
      status: "Failed",
    },
    {
      id: "23456786",
      customerName: "Williams Company LLC",
      riskProfile: "Aggressive",
      amount: "USD $10.00",
      status: "Stopped",
    },
    {
      id: "23456786",
      customerName: "Williams Company LLC",
      riskProfile: "Conservative",
      amount: "USD $10.00",
      status: "Complete",
    },
    {
      id: "23456786",
      customerName: "Williams Company LLC",
      riskProfile: "Balanced",
      amount: "USD $10.00",
      status: "Complete",
    },
    {
      id: "23456786",
      customerName: "Williams Company LLC",
      riskProfile: "Aggressive",
      amount: "USD $10.00",
      status: "Paused by User",
    },
  ];

  const getRiskProfileColor = (profile) => {
    switch (profile) {
      case "Conservative":
        return "bg-blue-100 text-blue-800";
      case "Balanced":
        return "bg-green-100 text-green-800";
      case "Aggressive":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Paused by AI":
      case "Paused by User":
        return "bg-yellow-100 text-yellow-800";
      case "Failed":
        return "bg-red-100 text-red-800";
      case "Stopped":
        return "bg-gray-100 text-gray-800";
      case "Complete":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredData = bulkInvestmentsData.filter(
    (investment) =>
      investment.id.includes(searchTerm) ||
      investment.customerName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      investment.riskProfile.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  const handleRowDropdownToggle = (index, event) => {
    event.stopPropagation();
    setShowRowDropdown(showRowDropdown === index ? null : index);
  };

  const handleAction = (action) => {
    console.log(`${action} clicked`);
    setShowActionDropdown(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Section Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Bulk Investments
          </h2>

          <div className="relative">
            <button
              onClick={() => setShowActionDropdown(!showActionDropdown)}
              className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors flex items-center gap-2"
            >
              Select Action
              <ChevronDown className="w-4 h-4" />
            </button>

            {showActionDropdown && (
              <div className="absolute right-0 top-12 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <button
                  onClick={() => handleAction("Export CSV")}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-200"
                >
                  Export CSV
                </button>
                <button
                  onClick={() => handleAction("Retry Bulk Investment")}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-200"
                >
                  Retry Bulk Investment
                </button>
                <button
                  onClick={() => handleAction("Pause Investment")}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-200"
                >
                  Pause Investment
                </button>
                <button
                  onClick={() => handleAction("Resume Investment")}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-200"
                >
                  Resume Investment
                </button>
                <button
                  onClick={() => handleAction("Stop Investment")}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 rounded-b-lg"
                >
                  Stop Investment
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Search and Date */}
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
            <span className="absolute right-3 top-3 text-xs text-gray-400">
              ⌘K
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              Jan 10, 2025 – Jan 16, 2025
            </span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Investment ID
                <ChevronDown className="inline w-3 h-3 ml-1" />
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer/Business Name
                <ChevronDown className="inline w-3 h-3 ml-1" />
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Risk Profile
                <ChevronDown className="inline w-3 h-3 ml-1" />
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
                <ChevronDown className="inline w-3 h-3 ml-1" />
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentItems.map((investment, index) => (
              <tr
                key={`${investment.id}-${index}`}
                className="hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => handleInvestmentClick(investment.id)}
              >
                <td className="py-4 px-6 text-sm font-medium text-gray-900">
                  # {investment.id}
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">
                  {investment.customerName}
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskProfileColor(
                      investment.riskProfile
                    )}`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></div>
                    {investment.riskProfile}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900">
                  {investment.amount}
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      investment.status
                    )}`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></div>
                    {investment.status}
                  </span>
                </td>
                <td className="py-4 px-6 relative">
                  <button
                    onClick={(e) => handleRowDropdownToggle(index, e)}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                  >
                    <MoreVertical className="w-5 h-5 text-gray-500" />
                  </button>

                  {showRowDropdown === index && (
                    <div className="absolute right-6 top-12 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-200">
                        Export CSV
                      </button>
                      <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-200">
                        Retry Bulk Investment
                      </button>
                      <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-200">
                        Pause Investment
                      </button>
                      <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-200">
                        Resume Investment
                      </button>
                      <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 rounded-b-lg">
                        Stop Investment
                      </button>
                    </div>
                  )}
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
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
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

export default BulkInvestments;
