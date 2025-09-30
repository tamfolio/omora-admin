import React, { useState, useEffect } from 'react';
import { ChevronLeft, Home, ChevronDown } from 'lucide-react';

function BulkInvestmentDetails({ investmentId = '123456' }) {
  const [investment, setInvestment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('details');

  useEffect(() => {
    fetchInvestmentData(investmentId);
  }, [investmentId]);

  const fetchInvestmentData = async (id) => {
    try {
      const mockInvestment = {
        id: id,
        customerInfo: {
          customerName: 'Simon Smith Moneyton',
          rmAssigned: '07/07/1997',
          investmentRiskProfile: 'Conservative'
        },
        activeBulkInvestment: {
          investmentId: '# 1234567',
          status: 'Active',
          investmentAmount: '$50000',
          startDate: '01/02/2025',
          endDate: '01/02/2025',
          duration: '120 days'
        },
        performanceSummary: {
          cumulativeInvestmentAmount: '$50000',
          usdtReceived: '$5000',
          roiPercent: '50%',
          maxDrawdown: '40%',
          winLossRatio: '40:60'
        },
        linkedWallet: {
          availableNGN: 'NGN 300,000',
          usdtBalance: '2500'
        },
        complianceNotes: {
          note: 'This is a note'
        },
        executionHistory: [
          {
            date: '07/07/1997',
            investmentId: '# 1234567',
            status: 'Active',
            investmentAmount: '$50000',
            fxRate: '1530/$',
            fees: '350',
            usdtReceived: '1000.00 USDT',
            notes: 'This is a note and this is why we did this and that.'
          }
        ]
      };
      
      setInvestment(mockInvestment);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching investment:', error);
      setLoading(false);
    }
  };

  const handleNavigateBack = () => {
    console.log('Navigate back to bulk investments');
  };

  const handleSelectAction = () => {
    console.log('Select action clicked');
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading investment details...</div>
      </div>
    );
  }

  if (!investment) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Investment not found</div>
      </div>
    );
  }

  const tabs = [
    { id: 'details', label: 'Investment Details' },
    { id: 'audit', label: 'Audit Trail' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Home className="w-4 h-4" />
          <span>/</span>
          <button onClick={handleNavigateBack} className="hover:text-gray-700">
            Bulk Investments
          </button>
          <span>/</span>
          <span>...</span>
          <span>/</span>
          <span className="text-gray-900">{investment.id}</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={handleNavigateBack} className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">#{investment.id}</h1>
          </div>
          
          <button 
            onClick={handleSelectAction}
            className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 flex items-center gap-2"
          >
            Select Action
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white px-6 pt-6">
        <div className="w-1/3">
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
      </div>

      {/* Content */}
      {activeTab === 'details' && (
        <div className="p-6 space-y-6">
          {/* Customer Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Customer/Business Name</label>
                <p className="text-sm font-medium text-gray-900">{investment.customerInfo.customerName}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">RM Assigned</label>
                <p className="text-sm font-medium text-gray-900">{investment.customerInfo.rmAssigned}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Investment Risk Profile</label>
                <p className="text-sm font-medium text-gray-900">{investment.customerInfo.investmentRiskProfile}</p>
              </div>
            </div>
          </div>

          {/* Active Bulk Investment */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Bulk Investment</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Investment ID</label>
                <p className="text-sm font-medium text-gray-900">{investment.activeBulkInvestment.investmentId}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Status</label>
                <p className="text-sm font-medium text-gray-900">{investment.activeBulkInvestment.status}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Investment Amount</label>
                <p className="text-sm font-medium text-gray-900">{investment.activeBulkInvestment.investmentAmount}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Start Date</label>
                <p className="text-sm font-medium text-gray-900">{investment.activeBulkInvestment.startDate}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">End Date</label>
                <p className="text-sm font-medium text-gray-900">{investment.activeBulkInvestment.endDate}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Duration</label>
                <p className="text-sm font-medium text-gray-900">{investment.activeBulkInvestment.duration}</p>
              </div>
            </div>
          </div>

          {/* Performance Summary Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Summary Section</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Cumulative Investment Amount</label>
                <p className="text-sm font-medium text-gray-900">{investment.performanceSummary.cumulativeInvestmentAmount}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">USDT Received</label>
                <p className="text-sm font-medium text-gray-900">{investment.performanceSummary.usdtReceived}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">ROI %</label>
                <p className="text-sm font-medium text-gray-900">{investment.performanceSummary.roiPercent}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Max Drawdown %</label>
                <p className="text-sm font-medium text-gray-900">{investment.performanceSummary.maxDrawdown}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Win/Loss Ratio</label>
                <p className="text-sm font-medium text-gray-900">{investment.performanceSummary.winLossRatio}</p>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 gap-6">
            {/* Linked Wallet */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Linked Wallet</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Available NGN</span>
                  <span className="text-sm font-medium text-gray-900">{investment.linkedWallet.availableNGN}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">USDT Balance</span>
                  <span className="text-sm font-medium text-gray-900">{investment.linkedWallet.usdtBalance}</span>
                </div>
              </div>
            </div>

            {/* Compliance Notes */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Notes</h3>
              <p className="text-sm text-gray-600">{investment.complianceNotes.note}</p>
            </div>
          </div>

          {/* Execution History */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Execution History</h3>
            {investment.executionHistory.map((entry, index) => (
              <div key={index} className="grid grid-cols-4 gap-6 mb-4">
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Date</label>
                  <p className="text-sm font-medium text-gray-900">{entry.date}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Investment ID</label>
                  <p className="text-sm font-medium text-gray-900">{entry.investmentId}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Status</label>
                  <p className="text-sm font-medium text-gray-900">{entry.status}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Investment Amount</label>
                  <p className="text-sm font-medium text-gray-900">{entry.investmentAmount}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">FX Rate</label>
                  <p className="text-sm font-medium text-gray-900">{entry.fxRate}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Fees</label>
                  <p className="text-sm font-medium text-gray-900">{entry.fees}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">USDT Received</label>
                  <p className="text-sm font-medium text-gray-900">{entry.usdtReceived}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Notes</label>
                  <p className="text-sm font-medium text-gray-900">{entry.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'audit' && (
        <div className="p-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Audit Trail</h3>
            <p className="text-gray-500 mt-2">Audit trail content will be implemented here...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BulkInvestmentDetails;