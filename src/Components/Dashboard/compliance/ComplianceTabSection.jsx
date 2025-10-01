import React from 'react';
import { Search } from 'lucide-react';

const ComplianceTabSection = ({ 
  activeTab, 
  setActiveTab, 
  tabs, 
  searchTerm, 
  setSearchTerm 
}) => {
  return (
    <div className="px-6 py-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex border border-gray-300 rounded-lg overflow-hidden bg-white w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-sm font-medium transition-colors border-r border-gray-300 last:border-r-0 ${
                  activeTab === tab.key
                    ? "bg-white text-gray-900"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[296px] pl-10 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded">
              ⌘K
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceTabSection;
