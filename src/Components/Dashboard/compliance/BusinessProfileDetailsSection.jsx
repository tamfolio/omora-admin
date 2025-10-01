import React from "react";
import { Check } from "lucide-react";

const BusinessProfileDetailsSection = ({ businessData }) => {
  return (
    <div className="space-y-6">
      {/* Business Information */}
      <div className="bg-white border border-[#E9EAEB] rounded-lg">
        <div className="flex justify-between items-center border-b border-[#E9EAEB] mb-4 p-3">
          <h3 className="font-semibold text-[#414651]">
            Business Information
          </h3>

          <span className="text-sm text-[#414651]">
            Compliance Risk Profile:{" "}
            <span className="font-semibold">{businessData.riskProfile}</span>
          </span>
        </div>
        <div className="grid grid-cols-4 px-4 pb-4.5">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">Business ID</label>
              <p className="text-[#535862] text-sm font-semibold">
                #{businessData.businessId}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">
                Registration Date
              </label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.registrationDate}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Business Type</label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.businessType}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">Business Name</label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.businessName}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Email</label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.email}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Phone Number</label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.phoneNumber}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">
                Registration Number
              </label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.registrationNumber}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Address</label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.address}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Signup Date</label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.signupDate}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">
                Business Category
              </label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.businessCategory}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">
                Number of Employees
              </label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.numberOfEmployees}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Annual Revenue</label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.annualRevenue}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding Status */}
      <div className="bg-white border border-[#E9EAEB] rounded-lg">
        <div className="border-b border-[#E9EAEB] mb-4 p-3">
          <h3 className="font-semibold text-[#414651]">Onboarding Status</h3>
        </div>
        <div className="grid grid-cols-4 px-4 pb-4">
          <div className="flex items-center space-x-2">
            <span className="text-[#535862] text-sm">KYC Verification</span>
            <div className="size-6 bg-[#079455] rounded-full flex items-center justify-center">
              <Check size={16} color="#FFFFFF" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#535862] text-sm">Risk Profile</span>
            <div className="size-6 bg-[#079455] rounded-full flex items-center justify-center">
              <Check size={16} color="#FFFFFF" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#535862] text-sm">Wallet Funded</span>
            <div className="size-6 bg-[#079455] rounded-full flex items-center justify-center">
              <Check size={16} color="#FFFFFF" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#535862] text-sm">
              Dollar Cost Averaging (DCA)
            </span>
            <div className="size-6 bg-[#079455] rounded-full flex items-center justify-center">
              <Check size={16} color="#FFFFFF" />
            </div>
          </div>
        </div>
      </div>

      {/* Director Information */}
      <div className="bg-white border border-[#E9EAEB] rounded-lg">
        <div className="border-b border-[#E9EAEB] mb-4 p-3">
          <h3 className="font-semibold text-[#414651]">
            Director Information
          </h3>
        </div>
        <div className="px-4 pb-4">
          <div className="grid grid-cols-4 gap-4 font-medium text-sm text-[#717680]">
            <div>Full Name</div>
            <div>Email</div>
            <div>Mobile</div>
            <div>Address</div>
          </div>
          {businessData.directors?.map((director, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="grid grid-cols-4 gap-4 py-2">
                <div className="text-[#535862] text-sm font-semibold">{director.name}</div>
                <div className="text-[#535862] text-sm font-semibold">{director.email}</div>
                <div className="text-[#535862] text-sm font-semibold">{director.mobile}</div>
                <div className="text-[#535862] text-sm font-semibold">{director.address}</div>
              </div>
              <div className="mt-2">
                <label className="text-sm text-[#535862]">BVN</label>
                <p className="text-[#535862] text-sm font-semibold mt-1">{director.bvn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-white border border-[#E9EAEB] rounded-lg">
        <div className="border-b border-[#E9EAEB] mb-4 p-3">
          <h3 className="font-semibold text-[#414651]">Team</h3>
        </div>
        <div className="px-4 pb-4 space-y-4">
          {businessData.team?.map((member, index) => (
            <div key={index} className="border border-[#E9EAEB] rounded-lg p-4 pt-0">
              <div className="flex items-center space-x-3 border-b border-[#E9EAEB] p-3 px-0">
                <h4 className="font-semibold text-[#414651]">{member.name}</h4>
                <span className={`px-2 py-0.5 rounded-[16px] text-xs font-medium ${
                  member.role === 'Initiator' 
                    ? 'bg-[#ECFDF3] text-[#067647] border border-[#ABEFC6]'
                    : 'bg-[#EFF8FF] text-[#175CD3] border border-[#B2DDFF]'
                }`}>
                  {member.role}
                </span>
              </div>
              
              <div className="grid grid-cols-4 gap-4 mb-3">
                <div>
                  <label className="text-sm text-[#535862]">Email</label>
                  <p className="text-[#535862] text-sm font-semibold">{member.email}</p>
                </div>
                <div>
                  <label className="text-sm text-[#535862]">Mobile</label>
                  <p className="text-[#535862] text-sm font-semibold">{member.mobile}</p>
                </div>
                <div>
                  <label className="text-sm text-[#535862]">Address</label>
                  <p className="text-[#535862] text-sm font-semibold">{member.address}</p>
                </div>
                <div>
                  <label className="text-sm text-[#535862]">BVN</label>
                  <p className="text-[#535862] text-sm font-semibold">{member.bvn}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="text-sm text-[#535862]">Role</label>
                  <p className="text-[#535862] text-sm font-semibold">{member.role}</p>
                </div>
                <div>
                  <label className="text-sm text-[#535862]">2FA Status</label>
                  <p className="text-[#535862] text-sm font-semibold">{member.twoFAStatus}</p>
                </div>
                <div>
                  <label className="text-sm text-[#535862]">KYC Status</label>
                  <p className="text-[#535862] text-sm font-semibold">{member.kycStatus}</p>
                </div>
                <div>
                  <label className="text-sm text-[#535862]">Last Login</label>
                  <p className="text-[#535862] text-sm font-semibold">{member.lastLogin}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Account Section */}
      <div className="bg-white border border-[#E9EAEB] rounded-lg">
        <div className="border-b border-[#E9EAEB] mb-4 p-3">
          <h3 className="font-semibold text-[#414651]">Account Section</h3>
        </div>
        <div className="grid grid-cols-4 px-4 pb-4">
          <div className="space-y-1">
            <label className="text-sm text-[#535862]">Activity Status</label>
            <p className="text-[#535862] text-sm font-semibold">
              {businessData.activityStatus}
            </p>
          </div>
          <div className="space-y-1">
            <label className="text-sm text-[#535862]">RM Assigned</label>
            <p className="text-[#535862] text-sm font-semibold">
              {businessData.rmAssigned}
            </p>
          </div>
          <div className="space-y-1">
            <label className="text-sm text-[#535862]">
              Investment Risk Profile
            </label>
            <p className="text-[#535862] text-sm font-semibold">
              {businessData.investmentRiskProfile}
            </p>
          </div>
          <div className="space-y-1">
            <label className="text-sm text-[#535862]">
              Virtual Account Number
            </label>
            <p className="text-[#535862] text-sm font-semibold">
              {businessData.virtualAccountNumber}
            </p>
          </div>
        </div>
      </div>

      {/* Active Investment */}
      <div className="bg-white border border-[#E9EAEB] rounded-lg">
        <div className="flex justify-between items-center border-b border-[#E9EAEB] mb-4 p-3">
          <h3 className="font-semibold text-[#414651]">Active Investment</h3>
        </div>
        <div className="grid grid-cols-4 px-4 pb-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">Type</label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.investmentType}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Start Date</label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.investmentStartDate}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">Status</label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.investmentStatus}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">End Date</label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.investmentEndDate}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">Tenor</label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.tenor}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">ROI to Date</label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.roiToDate}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">Amount</label>
              <p className="text-[#535862] text-sm font-semibold">
                {businessData.amount}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wallet */}
      <div className="bg-white border border-[#E9EAEB] rounded-lg px-4 pb-4">
        <div className="flex justify-between items-center border-b border-[#E9EAEB] p-3">
          <h3 className="font-semibold text-[#414651]">Wallet</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-[#181D27] py-2 border-b border-gray-200"></th>
                <th className="text-center text-[#535862] py-2 border-b text-sm border-gray-200">
                  USDC
                </th>
                <th className="text-center text-[#535862] py-2 border-b text-sm border-gray-200">
                  NGN
                </th>
                <th className="text-center text-[#535862] py-2 border-b text-sm border-gray-200">
                  USDT
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left py-2 border-b border-gray-200">
                  <div className="text-sm text-[#535862]">
                    Available Balances
                  </div>
                </td>
                <td className="text-center py-2 border-b border-gray-200">
                  <div className="text-[#535862] font-semibold">
                    {businessData.usdcAvailable}
                  </div>
                </td>
                <td className="text-center py-2 border-b border-gray-200">
                  <div className="text-[#535862] font-semibold">
                    {businessData.ngnAvailable}
                  </div>
                </td>
                <td className="text-center py-2 border-b border-gray-200">
                  <div className="text-[#535862] font-semibold">
                    {businessData.usdtAvailable}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left py-2">
                  <div className="text-sm text-[#535862]">
                    Ledger Balances
                  </div>
                </td>
                <td className="text-center py-2">
                  <div className="text-[#535862] font-medium">
                    {businessData.usdcLedger}
                  </div>
                </td>
                <td className="text-center py-2">
                  <div className="text-[#535862] font-medium">
                    {businessData.ngnLedger}
                  </div>
                </td>
                <td className="text-center py-2">
                  <div className="text-[#535862] font-medium">
                    {businessData.usdtLedger}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Lifetime Revenue Generated */}
      <div className="bg-white border border-[#E9EAEB] rounded-lg">
        <div className="flex justify-between items-center border-b border-[#E9EAEB] mb-4 p-3">
          <h3 className="font-semibold text-[#414651]">
            Lifetime Revenue Generated
          </h3>
        </div>
        <div className="grid grid-cols-3 px-4 pb-4">
          <div>
            <label className="text-sm text-[#535862]">
              Performance Fees (USDT)
            </label>
            <p className="text-[#535862] text-sm font-semibold">
              {businessData.performanceFees}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">
              Management Fees (USDT)
            </label>
            <p className="text-[#535862] text-sm font-semibold">
              {businessData.managementFees}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">
              Transaction Fees (USDT)
            </label>
            <p className="text-[#535862] text-sm font-semibold">
              {businessData.transactionFees}
            </p>
          </div>
        </div>
      </div>

      {/* Limits */}
      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="flex justify-between items-center border-b border-[#E9EAEB] mb-4 p-3">
          <h3 className="font-semibold text-[#414651]">Limits</h3>
        </div>
        <div className="grid grid-cols-3 px-4 pb-4">
          <div>
            <label className="text-sm text-[#535862]">
              Daily Withdrawal Limit
            </label>
            <p className="text-[#535862] text-sm font-semibold">
              {businessData.dailyWithdrawalLimit}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">
              Single Withdrawal Limit
            </label>
            <p className="text-[#535862] text-sm font-semibold">
              {businessData.singleWithdrawalLimit}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">
              Monthly Withdrawal Limit
            </label>
            <p className="text-[#535862] text-sm font-semibold">
              {businessData.monthlyWithdrawalLimit}
            </p>
          </div>
        </div>
      </div>

      {/* KYC Details */}
      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="flex justify-between items-center border-b border-[#E9EAEB] mb-4 p-3">
          <h3 className="font-semibold text-[#414651]">KYC Details</h3>
        </div>
        <div className="grid grid-cols-4 px-4 pb-4 gap-6">
          <div>
            <label className="text-sm text-[#535862]">
              Certificate of Incorporation
            </label>
            <p className="text-[#535862] text-sm font-semibold underline cursor-pointer">
              {businessData.certificateOfIncorporation}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">
              CAC Form 2&7/Status Extract
            </label>
            <p className="text-[#535862] text-sm font-semibold underline cursor-pointer">
              {businessData.cacForm}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">
              Authorization Letter
            </label>
            <p className="text-[#535862] text-sm font-semibold underline cursor-pointer">
              {businessData.authorizationLetter}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">
              Valid ID of Director
            </label>
            <p className="text-[#535862] text-sm font-semibold underline cursor-pointer">
              {businessData.validIdDirector}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">
              Recent Utility Bill
            </label>
            <p className="text-[#535862] text-sm font-semibold underline cursor-pointer">
              {businessData.recentUtilityBill}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfileDetailsSection;