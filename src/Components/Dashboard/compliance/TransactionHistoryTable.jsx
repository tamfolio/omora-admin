import React from "react";
import { CloudDownload, CheckIcon } from "lucide-react";
import { getSortIcon, sortData } from "./utils/sortingUtils.jsx";

const TransactionHistoryTable = ({ 
  transactionData, 
  sortConfig, 
  onSort 
}) => {
  const getSortDirection = (column) => {
    return sortConfig.column === column ? sortConfig.direction : 'none';
  };

  return (
    <div>
      <div className="flex items-center justify-between px-6 pt-0 py-4">
        <h3 className="text-lg font-semibold text-[#181D27]">Transaction History</h3>
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
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">Transaction Ref</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">
                  <button
                    onClick={() => onSort('type')}
                    className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
                  >
                    <span>Transaction Type</span>
                    {getSortIcon(getSortDirection('type'))}
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider">Status</th>
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
              {sortData(transactionData, sortConfig, 'transaction').map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-[#535862]">
                    #{transaction.ref}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-1.5 py-[2px] rounded-[6px] text-[#535862] text-xs font-medium border border-[#D5D7DA]">
                      <div className="w-2 h-2 rounded-full mr-1.5 bg-[#00A5B5]"></div>
                      {transaction.type}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#535862]">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-2 py-[2px] rounded-full text-xs font-medium text-[#067647] border border-[#ABEFC6] bg-[#ECFDF3]">
                      <CheckIcon size={12} color="#17B26A" strokeWidth={1.5} />
                      {transaction.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-right text-[#535862] whitespace-pre-line">
                    {transaction.timestamp}
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

export default TransactionHistoryTable;
