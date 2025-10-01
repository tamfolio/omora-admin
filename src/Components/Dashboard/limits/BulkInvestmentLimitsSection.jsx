import React from "react";
import { ChevronDown, X, Search, Plus } from "lucide-react";

const BulkInvestmentLimitsSection = ({ bulkLimits, setBulkLimits }) => {
  return (
    <div className="bg-white border border-[#E9EAEB] rounded-lg overflow-hidden">
      <div className="px-6 py-5 border-b border-[#E9EAEB]">
        <h2 className="text-lg font-semibold text-[#181D27]">Bulk Investment Limits</h2>
      </div>
      
      <div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E9EAEB]">
              <th className="text-left text-sm font-medium text-[#717680] px-6 py-3">Minimum One-Time Investment (USDC)</th>
              <th className="text-left text-sm font-medium text-[#717680] px-6 py-3">Maximum One-Time Investment (USDC)</th>
              <th className="text-left text-sm font-medium text-[#717680] px-6 py-3">Applicable to</th>
            </tr>
          </thead>
          <tbody>
            {bulkLimits.map((limit, index) => (
              <React.Fragment key={index}>
                <tr className="border-b border-[#E9EAEB]">
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      value={limit.minOneTime}
                      onChange={(e) => {
                        const newLimits = [...bulkLimits];
                        newLimits[index].minOneTime = e.target.value;
                        setBulkLimits(newLimits);
                      }}
                      className="w-full px-4 py-2.5 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm font-semibold text-[#414651]"
                    />
                  </td>
                  <td className="px-6 py-4 border-r border-[#E9EAEB]">
                    <input
                      type="text"
                      value={limit.maxOneTime}
                      onChange={(e) => {
                        const newLimits = [...bulkLimits];
                        newLimits[index].maxOneTime = e.target.value;
                        setBulkLimits(newLimits);
                      }}
                      className="w-full px-4 py-2.5 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm font-semibold text-[#A4A7AE]"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative">
                      <select
                        value={limit.applicableTo}
                        onChange={(e) => {
                          const newLimits = [...bulkLimits];
                          newLimits[index].applicableTo = e.target.value;
                          setBulkLimits(newLimits);
                        }}
                        className="w-full px-4 py-2.5 border border-[#E9EAEB] rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm font-semibold text-[#414651]"
                      >
                        <option>All Individuals</option>
                        <option>Specific Customers</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </td>
                </tr>
                {limit.applicableTo === "Specific Customers" && (
                  <tr className={index === bulkLimits.length - 1 ? "" : "border-b border-[#E9EAEB]"}>
                    <td colSpan="2" className="border-r border-[#E9EAEB]"></td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        {limit.specificCustomers.map((customer, custIndex) => (
                          <div key={custIndex} className="flex items-center justify-between px-4 py-2.5 border border-[#E9EAEB] rounded-lg">
                            <span className="text-sm text-[#717680]">{customer}</span>
                            <button className="text-gray-400 hover:text-gray-600">
                              <X size={16} />
                            </button>
                          </div>
                        ))}
                        <div className="flex items-center space-x-2">
                          <div className="relative flex-1">
                            <input
                              type="text"
                              placeholder="John Doe"
                              className="w-full px-4 py-2.5 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm text-[#717680]"
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          </div>
                          <button className="px-4 py-2.5 text-sm font-semibold text-white bg-[#008B99] rounded-lg hover:bg-[#008B99]/80 transition-colors">
                            Add
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center px-6 py-4 bg-[#FCFCFC] border-t border-[#E9EAEB]">
        <button className="flex items-center space-x-2 text-[#008B99] font-semibold text-sm hover:text-[#008B99]/80">
          <Plus size={16} />
          <span>Add more field</span>
        </button>
        <div className="flex space-x-3">
          <button className="px-4 py-2.5 text-sm font-semibold text-[#414651] border border-[#D5D7DA] bg-white rounded-lg hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button className="px-4 py-2.5 text-sm font-semibold text-white bg-[#008B99] rounded-lg hover:bg-[#008B99]/80 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulkInvestmentLimitsSection;

