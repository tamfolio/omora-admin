import React from 'react';
import { Calendar } from 'lucide-react';

const UserSection = ({ data }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">User Section</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2">
            <Calendar className="w-4 h-4" />
            Jan 10, 2025 – Jan 16, 2025
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 p-6">
          {/* Total Users */}
          <div className="space-y-4 border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Total User ({data.users.total})</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Registered</span>
                  <span className="text-sm text-red-500">↓ 2%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.users.registered}</span>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Active</span>
                  <span className="text-sm text-green-500">↑ 12%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.users.active}</span>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Inactive</span>
                  <span className="text-sm text-red-500">↓ 2%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.users.inactive}</span>
              </div>
            </div>
          </div>

          {/* KYC Status */}
          <div className="space-y-4 border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">KYC Status</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Approved (Count)</span>
                  <span className="text-sm text-red-500">↓ 2%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.users.kyc.approved}</span>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Pending (Count)</span>
                  <span className="text-sm text-green-500">↑ 12%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.users.kyc.pending}</span>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Rejected (Count)</span>
                  <span className="text-sm text-red-500">↓ 2%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.users.kyc.rejected}</span>
              </div>
            </div>
          </div>

          {/* Risk Profile Distribution */}
          <div className="space-y-4 border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Risk Profile Distribution</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Conservative</span>
                  <span className="text-sm text-red-500">↓ 2%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.users.riskProfile.conservative}</span>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Balanced</span>
                  <span className="text-sm text-green-500">↑ 12%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.users.riskProfile.balanced}</span>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Aggressive</span>
                  <span className="text-sm text-red-500">↓ 2%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.users.riskProfile.aggressive}</span>
              </div>
            </div>
          </div>

          {/* Investment Participation */}
          <div className="space-y-4 border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Investment Participation</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Active Recurring Investment</span>
                  <span className="text-sm text-green-500">↑ 12%</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.users.investment.activeRecurring}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-500 block mb-1">Paused User</span>
                  <span className="text-2xl font-bold text-gray-900">{data.users.investment.pausedUser}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block mb-1">Paused AI</span>
                  <span className="text-2xl font-bold text-gray-900">{data.users.investment.pausedAI}</span>
                </div>
              </div>
              
              <div>
                <span className="text-sm text-gray-500 block mb-1">Active Bulk</span>
                <span className="text-2xl font-bold text-gray-900">{data.users.investment.activeBulk}</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Growth Chart */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-medium text-gray-900">User Growth Statistics</h3>
              <p className="text-sm text-gray-500">Average number of signups</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Current Month</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-600">Last Month</span>
              </div>
            </div>
          </div>
          
          {/* Chart Container */}
          <div className="h-64 relative">
            <div className="absolute inset-0 flex flex-col">
              {/* Y-axis labels */}
              <div className="flex-1 relative">
                <div className="absolute left-0 top-0 text-xs text-gray-500">100</div>
                <div className="absolute left-0 top-1/4 text-xs text-gray-500">80</div>
                <div className="absolute left-0 top-2/4 text-xs text-gray-500">60</div>
                <div className="absolute left-0 top-3/4 text-xs text-gray-500">40</div>
                <div className="absolute left-0 bottom-0 text-xs text-gray-500">20</div>
                <div className="absolute left-0 bottom-6 text-xs text-gray-500">0</div>
              </div>
              
              {/* Chart area */}
              <div className="ml-8 mr-4 h-full bg-gray-50 rounded relative overflow-hidden">
                {/* Sample chart lines */}
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Current month line */}
                  <polyline
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    points="0,40 10,35 20,38 30,32 40,30 50,28 60,25 70,22 80,20 90,18 100,15"
                  />
                  {/* Last month line */}
                  <polyline
                    fill="none"
                    stroke="#22D3EE"
                    strokeWidth="2"
                    points="0,60 10,58 20,55 30,52 40,50 50,48 60,45 70,42 80,40 90,38 100,35"
                  />
                </svg>
              </div>
              
              {/* X-axis labels */}
              <div className="flex justify-between ml-8 mr-4 mt-2 text-xs text-gray-500">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
              <div className="text-center text-xs text-gray-500 mt-1">Month</div>
            </div>
            <div className="absolute left-0 top-1/2 -rotate-90 text-xs text-gray-500 -translate-y-1/2">
              Number of Users
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSection;