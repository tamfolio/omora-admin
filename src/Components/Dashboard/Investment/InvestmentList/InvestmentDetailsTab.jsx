import React from 'react';

function InvestmentDetailsTab({ investment }) {
  return (
    <div className="space-y-6">
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

      {/* Active Recurring Investment */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Recurring Investment</h3>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Investment ID</label>
            <p className="text-sm font-medium text-gray-900">{investment.activeRecurringInvestment.investmentId}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Status</label>
            <p className="text-sm font-medium text-gray-900">{investment.activeRecurringInvestment.status}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Investment Amount</label>
            <p className="text-sm font-medium text-gray-900">{investment.activeRecurringInvestment.investmentAmount}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Daily Investment Amount</label>
            <p className="text-sm font-medium text-gray-900">{investment.activeRecurringInvestment.dailyInvestmentAmount}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Duration</label>
            <p className="text-sm font-medium text-gray-900">{investment.activeRecurringInvestment.duration}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Start Date</label>
            <p className="text-sm font-medium text-gray-900">{investment.activeRecurringInvestment.startDate}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1 block">End Date</label>
            <p className="text-sm font-medium text-gray-900">{investment.activeRecurringInvestment.endDate}</p>
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
          <div>
            <label className="text-sm text-gray-500 mb-1 block">End Date</label>
            <p className="text-sm font-medium text-gray-900">{investment.performanceSummary.endDate}</p>
          </div>
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
              <label className="text-sm text-gray-500 mb-1 block">Investment Amount</label>
              <p className="text-sm font-medium text-gray-900">{entry.dailyInvestmentAmount}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-1 block">Daily Investment Amount</label>
              <p className="text-sm font-medium text-gray-900">{entry.dailyInvestmentAmount}</p>
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
            <div className="col-span-3">
              <label className="text-sm text-gray-500 mb-1 block">Notes</label>
              <p className="text-sm font-medium text-gray-900">{entry.notes}</p>
            </div>
          </div>
        ))}
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
    </div>
  );
}

export default InvestmentDetailsTab;