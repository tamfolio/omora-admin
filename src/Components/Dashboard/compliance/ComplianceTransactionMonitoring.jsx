import React from "react";

function ComplianceTransactionMonitoring() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Transaction Monitoring</h2>
        <div className="flex space-x-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Export Report
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-lg hover:bg-teal-700">
            Configure Rules
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Total Transactions</p>
              <p className="text-2xl font-bold text-gray-900">12,456</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Flagged</p>
              <p className="text-2xl font-bold text-gray-900">234</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Suspicious</p>
              <p className="text-2xl font-bold text-gray-900">18</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Cleared</p>
              <p className="text-2xl font-bold text-gray-900">12,204</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Flagged Transactions</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-gray-900">Transaction #TXN-001234</p>
                  <p className="text-sm text-gray-600">Amount: $15,000 • From: John Doe • To: Unknown Recipient</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  High Risk
                </span>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-gray-900">Transaction #TXN-001235</p>
                  <p className="text-sm text-gray-600">Amount: $8,500 • From: Alice Smith • To: Business Account</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Medium Risk
                </span>
                <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-gray-900">Transaction #TXN-001236</p>
                  <p className="text-sm text-gray-600">Amount: $2,500 • From: Bob Johnson • To: Family Member</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Under Review
                </span>
                <p className="text-xs text-gray-500 mt-1">6 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Monitoring Rules</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Active Rules</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm text-gray-600">Large Transaction Alert</span>
                  <span className="text-sm font-medium text-green-600">Active</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm text-gray-600">Unusual Pattern Detection</span>
                  <span className="text-sm font-medium text-green-600">Active</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm text-gray-600">Cross-Border Monitoring</span>
                  <span className="text-sm font-medium text-green-600">Active</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Rule Performance</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Accuracy Rate</span>
                  <span className="text-sm font-medium text-green-600">94.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">False Positives</span>
                  <span className="text-sm font-medium text-yellow-600">5.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Processing Time</span>
                  <span className="text-sm font-medium text-blue-600">0.3s avg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplianceTransactionMonitoring;
