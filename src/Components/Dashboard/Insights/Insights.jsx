import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Calendar } from 'lucide-react';
import WalletTransactions from './WalletTransactions';
import UserSection from './UserSection';
import SystemHealth from './SystemHealth';

function Insights({ userType: propUserType }) {
  const [activeTab, setActiveTab] = useState('wallet');
  const location = useLocation();
  
  // Get userType from prop or derive from current path
  const userType = propUserType || (location.pathname.includes('businesses') ? 'businesses' : 'individuals');

 

  // Fetch different data based on userType
  useEffect(() => {
    if (userType === 'businesses') {
      // Fetch business-specific data
      console.log('Fetching business data...');
      // Example: fetchBusinessData().then(data => setSampleData(data));
    } else {
      // Fetch individual-specific data  
      console.log('Fetching individual data...');
      // Example: fetchIndividualData().then(data => setSampleData(data));
    }
  }, [userType]);

  // Sample data structure - replace with your actual API data
  const sampleData = {
    wallet: {
      totalFunded: 912304000,
      totalWithdrawn: 912304000,
      balanceNGN: 912304000,
      balanceUSDT: 91200
    },
    transactions: {
      inflow: 912304000,
      outflowNGN: 912304000,
      outflowUSDT: 914000,
      approved: 912,
      pending: 14,
      rejected: 914,
      topCustomers: [
        { name: "Phoenix Baker", ngn: 908779900, usdt: "9087799007" },
        { name: "Phoenix Baker", ngn: 908779900, usdt: "9087799007" },
        { name: "Phoenix Baker", ngn: 908779900, usdt: "9087799007" },
        { name: "Phoenix Baker", ngn: 908779900, usdt: "9087799007" }
      ],
      adminInitiated: 14,
      recurringInvestment: 40,
      oneTimeInvestment: 60,
      activeDCA: 14,
      failed: 914
    },
    users: {
      total: 2200,
      registered: 912,
      active: 14,
      inactive: 914,
      kyc: {
        approved: 912,
        pending: 14,
        rejected: 914
      },
      riskProfile: {
        conservative: 912,
        balanced: 14,
        aggressive: 914
      },
      investment: {
        activeRecurring: 14,
        pausedUser: 914,
        pausedAI: 914,
        activeBulk: 914
      }
    },
    security: {
      failedLogins: 912,
      suspiciousLogins: 912,
      twoFANotEnabled: 14,
      accountsLocked: 500
    },
    performance: {
      apiUptime: 50,
      slaBreached: 50,
      pendingTransactions: 912
    },
    operational: {
      kycResponseTime: 912,
      conversionResponseTime: 14,
      withdrawalQueueSize: 914
    }
  };

  const tabs = [
    { id: 'wallet', label: 'Wallet & Transactions' },
    { id: 'user', label: 'User Section' },
    { id: 'system', label: 'System Health' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'wallet':
        return <WalletTransactions data={sampleData} userType={userType} />;
      case 'user':
        return <UserSection data={sampleData} userType={userType} />;
      case 'system':
        return <SystemHealth data={sampleData} userType={userType} />;
      default:
        return <WalletTransactions data={sampleData} userType={userType} />;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">O</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Welcome back, Olivia</h1>
              <p className="text-sm text-gray-500">16 January, 2025</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 w-80"
            />
          </div>
        </div>
      </div>


      {/* Tab Navigation - Card Style */}
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

      {/* Tab Content */}
      <div className="transition-all duration-200">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Insights;