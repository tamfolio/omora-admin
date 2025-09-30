import React from "react";
import { Calendar } from "lucide-react";

const WalletTransactions = ({ data }) => {
  return (
    <div className="space-y-6">
      {/* Wallet Section */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Wallet</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2">
            <Calendar className="w-4 h-4" />
            Jan 10, 2025 – Jan 16, 2025
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 p-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500 mb-2">Total NGN Funded</p>
            <p className="text-3xl font-bold text-gray-900">
              ₦{data.wallet.totalFunded.toLocaleString()}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500 mb-2">Total NGN Withdrawn</p>
            <p className="text-3xl font-bold text-gray-900">
              ₦{data.wallet.totalWithdrawn.toLocaleString()}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500 mb-2">Wallet Balance NGN</p>
            <p className="text-3xl font-bold text-gray-900">
              ₦{data.wallet.balanceNGN.toLocaleString()}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500 mb-2">Wallet Balance USDT</p>
            <p className="text-3xl font-bold text-gray-900">
              {data.wallet.balanceUSDT} USDT
            </p>
          </div>
        </div>
      </div>

      {/* Transactions Section */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Transactions</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2">
            <Calendar className="w-4 h-4" />
            Jan 10, 2025 – Jan 16, 2025
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 p-6">
          {/* Total Transaction Volume */}
          <div className="space-y-4 border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">
              Total Transaction Volume
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Inflow (NGN)</p>
                <p className="text-2xl font-bold text-gray-900">
                  ₦ {data.transactions.inflow.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Outflow (NGN)</p>
                <p className="text-2xl font-bold text-gray-900">
                  ₦ {data.transactions.outflowNGN.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Outflow (USDT)</p>
                <p className="text-2xl font-bold text-gray-900">
                  {data.transactions.outflowUSDT.toLocaleString()} USDT
                </p>
              </div>
            </div>
          </div>

          {/* Number of Transactions */}
          <div className="space-y-4 border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">
              Number of Transactions
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Approved</span>
                  <span className="text-sm text-red-500">↓ 2%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {data.transactions.approved}
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Pending</span>
                  <span className="text-sm text-green-500">↑ 12%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {data.transactions.pending}
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Rejected</span>
                  <span className="text-sm text-red-500">↓ 2%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {data.transactions.rejected}
                </span>
              </div>
            </div>
          </div>

          {/* Top Customers */}
          <div className="space-y-4 border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Top Customers</h3>
            <div className="space-y-3">
              {data.transactions.topCustomers.map((customer, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">P</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {customer.name}
                    </p>
                    <div className="text-xs text-gray-500">
                      <div>NGN: {customer.ngn.toLocaleString()}</div>
                      <div>USDT: {customer.usdt}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-4 gap-4 p-6 border-t border-gray-200">
          {/* Initiator vs Admin */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Initiator vs Admin Initiated Transactions
            </h4>
            <p className="text-xs text-gray-600 mb-3">
              % split (to show how corporates are using team roles)
            </p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">
                {data.transactions.adminInitiated}
              </span>
              <span className="text-sm text-green-500">↑ 12%</span>
            </div>
          </div>

          {/* Investment-Linked Transactions */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Investment-Linked Transactions
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-600 mb-1">
                  % of inflows going directly into Recurring Investment
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {data.transactions.recurringInvestment}%
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">
                  % of inflows going directly into One-time Investment
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {data.transactions.oneTimeInvestment}%
                </p>
              </div>
            </div>
          </div>

          {/* High Risked Transaction Alerts */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              High Risked Transaction Alerts
            </h4>
            <p className="text-xs text-gray-600 mb-3">Active DCA</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">
                {data.transactions.activeDCA}
              </span>
              <span className="text-sm text-green-500">↑ 12%</span>
            </div>
          </div>

          {/* Failed Transaction */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Failed Transaction
            </h4>
            <p className="text-xs text-gray-600 mb-2">Count</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-gray-900">
                {data.transactions.failed}
              </span>
              <span className="text-sm text-red-500">↓ 2%</span>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-2">
                Top 5 reasons for failure
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Low Funds</li>
                <li>• Banned</li>
                <li>• Reason 3</li>
                <li>• Reason 4</li>
                <li>• Reason 5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletTransactions;
