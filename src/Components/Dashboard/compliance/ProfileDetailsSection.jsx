import React from "react";
import { Check } from "lucide-react";

const ProfileDetailsSection = ({ individualData }) => {
  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <div className="bg-white border border-[#E9EAEB] rounded-lg">
        <div className="flex justify-between items-center border-b border-[#E9EAEB] mb-4 p-3">
          <h3 className="font-semibold text-[#414651]">
            Personal Information
          </h3>

          <span className="text-sm text-[#414651]">
            Compliance Risk Profile:{" "}
            <span className="font-semibold">Low</span>
          </span>
        </div>
        <div className="grid grid-cols-4 px-4 pb-4.5">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">
                Individual ID
              </label>
              <p className="text-[#535862] text-sm font-semibold">
                #{individualData.individualId}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">
                Date of Birth
              </label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.dateOfBirth}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Gender</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.gender}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">First Name</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.firstName}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Email</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.email}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">
                Source of Funds
              </label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.sourceOfFunds}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">
                Middle Name
              </label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.middleName}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">BVN</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.bvn}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">
                Signup Date
              </label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.signupDate}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">Last Name</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.lastName}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Occupation</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.occupation}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding Status */}
      <div className="bg-white border border-[#E9EAEB] rounded-lg">
        <div className="border-b border-[#E9EAEB] mb-4 p-3">
          <h3 className="font-semibold text-[#414651]">
            Onboarding Status
          </h3>
        </div>
        <div className="grid grid-cols-4 px-4 pb-4">
          <div className="flex items-center space-x-2">
            <span className="text-[#535862] text-sm">
              KYC Verification
            </span>
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

      {/* Account */}
      <div className="bg-white border border-[#E9EAEB] rounded-lg">
        <div className="flex justify-between items-center border-b border-[#E9EAEB] mb-4 p-3">
          <h3 className="font-semibold text-[#414651]">Account</h3>
        </div>

        <div className="grid grid-cols-4 px-4 pb-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">
                Individual ID
              </label>
              <p className="text-[#535862] text-sm font-semibold">
                #{individualData.individualId}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">
                Date of Birth
              </label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.dateOfBirth}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Gender</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.gender}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">First Name</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.firstName}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Email</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.email}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">
                Source of Funds
              </label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.sourceOfFunds}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">
                Middle Name
              </label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.middleName}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">BVN</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.bvn}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">
                Signup Date
              </label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.signupDate}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">Last Name</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.lastName}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Occupation</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.occupation}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Investment */}
      <div className="bg-white border border-[#E9EAEB] rounded-lg">
        <div className="flex justify-between items-center border-b border-[#E9EAEB] mb-4 p-3">
          <h3 className="font-semibold text-[#414651]">
            Active Investment
          </h3>
        </div>
        <div className="grid grid-cols-4 px-4 pb-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">Type</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.investmentType}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Start Date</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.investmentStartDate}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">Status</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.investmentStatus}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">End Date</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.investmentEndDate}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">Tenor</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.tenor}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">
                ROI to Date
              </label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.roiToDate}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">Amount</label>
              <p className="text-[#535862] text-sm font-semibold">
                {individualData.amount}
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
                    {individualData.usdcAvailable}
                  </div>
                </td>
                <td className="text-center py-2 border-b border-gray-200">
                  <div className="text-[#535862] font-semibold">
                    {individualData.ngnAvailable}
                  </div>
                </td>
                <td className="text-center py-2 border-b border-gray-200">
                  <div className="text-[#535862] font-semibold">
                    {individualData.usdtAvailable}
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
                    {individualData.usdcLedger}
                  </div>
                </td>
                <td className="text-center py-2">
                  <div className="text-[#535862] font-medium">
                    {individualData.ngnLedger}
                  </div>
                </td>
                <td className="text-center py-2">
                  <div className="text-[#535862] font-medium">
                    {individualData.usdtLedger}
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
          <h3 className="font-semibold text-[#414651]">Lifetime Revenue Generated</h3>
        </div>
        <div className="grid grid-cols-3 px-4 pb-4">
          <div>
            <label className="text-sm text-[#535862]">
              Performance Fees (USDT)
            </label>
            <p className="text-[#535862] text-sm font-semibold">
              {individualData.performanceFees}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">
              Management Fees (USDT)
            </label>
            <p className="text-[#535862] text-sm font-semibold">
              {individualData.managementFees}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">
              Transaction Fees (USDT)
            </label>
            <p className="text-[#535862] text-sm font-semibold">
              {individualData.transactionFees}
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
              {individualData.dailyWithdrawalLimit}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">
              Single Withdrawal Limit
            </label>
            <p className="text-[#535862] text-sm font-semibold">
              {individualData.singleWithdrawalLimit}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">
              Monthly Withdrawal Limit
            </label>
            <p className="text-[#535862] text-sm font-semibold">
              {individualData.monthlyWithdrawalLimit}
            </p>
          </div>
        </div>
      </div>

      {/* KYC Details */}
      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="flex justify-between items-center border-b border-[#E9EAEB] mb-4 p-3">
          <h3 className="font-semibold text-[#414651]">KYC Details</h3>
        </div>
        <div className="grid grid-cols-3 px-4 pb-4">
          <div>
            <label className="text-sm text-[#535862]">Valid ID</label>
            <p className="text-[#535862] text-sm font-semibold underline cursor-pointer">
              {individualData.validId}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">
              Liveness Capture
            </label>
            <p className="text-[#535862] text-sm font-semibold underline cursor-pointer">
              {individualData.livenessCapture}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">
              Proof of Address
            </label>
            <p className="text-[#535862] text-sm font-semibold underline cursor-pointer">
              {individualData.proofOfAddress}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsSection;
