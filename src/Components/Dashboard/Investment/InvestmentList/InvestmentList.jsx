import React, { useState } from 'react';
import RecurringInvestments from './ReoccuringInvestments';
import BulkInvestments from './BulkInvestments';

function InvestmentList() {
  const [activeTab, setActiveTab] = useState('recurring');

  const tabs = [
    { id: 'recurring', label: 'Recurring Investments' },
    { id: 'bulk', label: 'Bulk Investments' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Investment Lists</h1>
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

      {/* Tab Content */}
      <div className="transition-all duration-200">
        {activeTab === 'recurring' && <RecurringInvestments />}
        {activeTab === 'bulk' && <BulkInvestments />}
      </div>
    </div>
  );
}

export default InvestmentList;