import React from 'react';

const TeamTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="mb-8">
      <div className="flex border border-gray-300 rounded-lg overflow-hidden bg-white w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => onTabChange(tab.name)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-r border-gray-300 last:border-r-0 ${
              activeTab === tab.name
                ? "bg-white text-gray-900"
                : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TeamTabs;
