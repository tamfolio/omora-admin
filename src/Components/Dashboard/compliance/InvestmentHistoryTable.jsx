import React from "react";
import { CloudDownload, CheckIcon } from "lucide-react";
import { getSortIcon, sortData } from "./utils/sortingUtils.jsx";

const InvestmentHistoryTable = ({ 
  investmentData, 
  sortConfig, 
  onSort 
}) => {
  const getSortDirection = (column) => {
    return sortConfig.column === column ? sortConfig.direction : 'none';
  };

  return (
    <div>
      <div className="flex items-center justify-between px-6 pt-0 py-4">
        <h3 className="text-lg font-semibold text-[#181D27]">Investment History</h3>
        <button className="flex items-center space-x-2 px-3.5 py-2.5 font-semibold text-sm text-[#414651] border border-[#D5D7DA] rounded-lg hover:bg-gray-200 transition-colors">
          <CloudDownload color="#A4A7AE" className="w-4 h-4" />
          <span>Download all</span>
        </button>
      </div>
      
      <div className="space-y-6 border border-[#E9EAEB] rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#FAFAFA] border-b border-[#E9EAEB]">
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">
                  <button
                    onClick={() => onSort('startDate')}
                    className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
                  >
                    <span>Start Date</span>
                    {getSortIcon(getSortDirection('startDate'))}
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">
                  <button
                    onClick={() => onSort('endDate')}
                    className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
                  >
                    <span>End Date</span>
                    {getSortIcon(getSortDirection('endDate'))}
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">Tenor</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">Investment Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">Daily DCA Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">Total Returns</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortData(investmentData, sortConfig, 'investment').map((investment) => (
                <tr key={investment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-2 py-[2px] rounded-full text-xs font-medium text-[#067647] border border-[#ABEFC6] bg-[#ECFDF3]">
                      <CheckIcon size={12} color="#17B26A" strokeWidth={1.5} />
                      {investment.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-[#181D27]">
                    {investment.startDate}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-[#181D27]">
                    {investment.endDate}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#535862]">
                    {investment.tenor}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#535862]">
                    {investment.amount}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#535862]">
                    {investment.dcaAmount}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#535862]">
                    {investment.returns}
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

export default InvestmentHistoryTable;
