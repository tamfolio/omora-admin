import React from "react";
import { ChevronsUpDown, ChevronUp, ChevronDown } from "lucide-react";

const SORT_DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc',
  NONE: 'none'
};

const LimitRequestTable = ({ sortedRequests, handleSort, getSortDirection, setSelectedRequest }) => {
  const getSortIcon = (direction) => {
    switch (direction) {
      case SORT_DIRECTIONS.ASC:
        return <ChevronUp color='#A4A7AE' className="w-3 h-3" />;
      case SORT_DIRECTIONS.DESC:
        return <ChevronDown color='#A4A7AE' className="w-3 h-3" />;
      default:
        return <ChevronsUpDown color='#A4A7AE' className="w-3 h-3" />;
    }
  };
  return (
    <div className="bg-white border border-[#E9EAEB] rounded-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-[#E9EAEB]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">
                <button 
                  onClick={() => handleSort('requestId')}
                  className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
                >
                  <span>Request ID</span>
                  {getSortIcon(getSortDirection('requestId'))}
                </button>
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">
                <button 
                  onClick={() => handleSort('fullName')}
                  className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
                >
                  <span>Full Name</span>
                  {getSortIcon(getSortDirection('fullName'))}
                </button>
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">
                <button 
                  onClick={() => handleSort('upgradeRequest')}
                  className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
                >
                  <span>Upgrade Request</span>
                  {getSortIcon(getSortDirection('upgradeRequest'))}
                </button>
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">
                <button 
                  onClick={() => handleSort('requestDate')}
                  className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
                >
                  <span>Request Date</span>
                  {getSortIcon(getSortDirection('requestDate'))}
                </button>
              </th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-[#717680] tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedRequests.map((request) => (
              <tr 
                key={request.id} 
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedRequest(request)}
              >
                <td className="px-6 py-4 text-sm font-medium text-[#181D27]">
                  #{request.requestId}
                </td>
                <td className="px-6 py-4 text-sm text-[#535862]">
                  {request.fullName}
                </td>
                <td className="px-6 py-4 text-sm text-[#535862]">
                  {request.upgradeRequest}
                </td>
                <td className="px-6 py-4 text-sm text-[#535862]">
                  {request.requestDate}
                </td>
                <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-end space-x-2">
                    <button 
                      onClick={() => setSelectedRequest(request)}
                      className="px-3 py-1.5 text-sm font-semibold text-[#535862] transition-colors"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Decline request:", request.id);
                      }}
                      className="px-3 w-[126px] py-1.5 text-sm font-semibold text-[#535862] border border-[#D5D7DA] rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Decline
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Approve request:", request.id);
                      }}
                      className="px-3 w-[126px] py-1.5 text-sm font-semibold text-white bg-[#008B99] rounded-lg hover:bg-[#008B99]/80 transition-colors"
                    >
                      Approve
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 bg-[#FCFCFC]">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Page 1 of 10</span>
          <div className="flex space-x-2">
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitRequestTable;

