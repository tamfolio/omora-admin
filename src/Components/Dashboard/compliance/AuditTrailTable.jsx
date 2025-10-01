import React from "react";
import { getSortIcon, sortData } from "./utils/sortingUtils.jsx";

const AuditTrailTable = ({ 
  auditData, 
  sortConfig, 
  onSort 
}) => {
  const getSortDirection = (column) => {
    return sortConfig.column === column ? sortConfig.direction : 'none';
  };

  return (
    <div>
      <div className="flex items-center justify-between px-6 pt-0 py-4">
        <h3 className="text-lg font-semibold text-[#181D27]">Audit Trail</h3>
      </div>
      
      <div className="space-y-6 border border-[#E9EAEB] rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#FAFAFA] border-b border-[#E9EAEB]">
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">
                  <button
                    onClick={() => onSort('user')}
                    className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
                  >
                    <span>User</span>
                    {getSortIcon(getSortDirection('user'))}
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">Action</th>
                <th className="px-6 py-3 text-xs font-semibold text-[#717680] text-right tracking-wider">
                  <button
                    onClick={() => onSort('timestamp')}
                    className="flex justify-end items-center space-x-1 hover:text-gray-700 w-full text-right"
                  >
                    <span>Time Stamp</span>
                    {getSortIcon(getSortDirection('timestamp'))}
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortData(auditData, sortConfig, 'audit').map((audit) => (
                <tr key={audit.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-[#181D27]">
                    {audit.user}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#535862]">
                    {audit.role}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#535862]">
                    {audit.action}
                  </td>
                  <td className="px-6 py-4 text-sm text-right text-[#535862] whitespace-pre-line">
                    {audit.timestamp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Page 1 of 10</span>
            <div className="flex space-x-2">
              <button className="px-3 py-2 text-sm font-medium text-gray-400 bg-white border border-gray-300 rounded-lg cursor-not-allowed">
                Previous
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditTrailTable;
