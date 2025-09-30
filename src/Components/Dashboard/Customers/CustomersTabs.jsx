import React from 'react';

function CustomerTabs({ activeTab, setActiveTab, customerType }) {
  const tabs = [
    { id: 'profile', label: 'Profile Details' },
    { id: 'transactions', label: 'Transaction History' },
    { id: 'investments', label: 'Investment History' },
    { id: 'audit', label: 'Audit Trail' }
  ];

  return (
    <div className="mb-6 w-2/3">
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
  );
}

export default CustomerTabs;