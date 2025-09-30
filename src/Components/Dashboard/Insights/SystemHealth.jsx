import React from 'react';
import { Calendar } from 'lucide-react';

const SystemHealth = ({ data }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">System Health Section</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2">
            <Calendar className="w-4 h-4" />
            Jan 10, 2025 – Jan 16, 2025
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 p-6">
          {/* Security */}
          <div className="space-y-4 border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Security</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-500">Failed Logins</span>
                    <span className="text-sm text-red-500">↓ 2%</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{data.security.failedLogins}</span>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-500">Suspicious Logins</span>
                    <span className="text-sm text-red-500">↓ 2%</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{data.security.suspiciousLogins}</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">2FA Not Enabled</span>
                  <span className="text-sm text-green-500">↑ 12%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.security.twoFANotEnabled}</span>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Account Locked for Security</span>
                  <span className="text-sm text-red-500">↓ 2%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.security.accountsLocked}</span>
              </div>
            </div>
          </div>

          {/* Platform Performance */}
          <div className="space-y-4 border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Platform Performance</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">API Uptime %</span>
                  <span className="text-sm text-green-500">↑ 12%</span>
                </div>
                <span className="text-3xl font-bold text-gray-900">{data.performance.apiUptime}%</span>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Transaction Processing SLA Breached</span>
                  <span className="text-sm text-red-500">↓ 2%</span>
                </div>
                <span className="text-3xl font-bold text-gray-900">{data.performance.slaBreached}%</span>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Pending Transactions (Count)</span>
                  <span className="text-sm text-red-500">↓ 2%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.performance.pendingTransactions}</span>
              </div>
            </div>
          </div>

          {/* Operational Health */}
          <div className="space-y-4 border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Operational Health</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">KYC API Response Time</span>
                  <span className="text-sm text-red-500">↓ 2%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.operational.kycResponseTime}</span>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Conversion Engine Response Time</span>
                  <span className="text-sm text-green-500">↑ 12%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.operational.conversionResponseTime}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-500 block mb-1">Withdrawal Queue Size</span>
                  <span className="text-2xl font-bold text-gray-900">{data.operational.withdrawalQueueSize}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block mb-1">Withdrawal Queue Size</span>
                  <span className="text-2xl font-bold text-gray-900">{data.operational.withdrawalQueueSize}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;