import React from "react";

const LimitRequestDetail = ({ selectedRequest, setSelectedRequest }) => {
  const requestData = {
    id: selectedRequest.id,
    individualId: "1234567",
    firstName: "Simon",
    middleName: "Smith",
    lastName: "Moneyton",
    email: "mikesmith@gmail.com",
    dateOfBirth: "07/07/1997",
    gender: "Male",
    bvn: "2233445566",
    occupation: "Surgeon",
    sourceOfFunds: "Inheritance",
    signupDate: "21/04/2025",
    currentTier: "Tier 1",
    requestedTier: "Tier 2",
    validId: "IMG23038477585.jpeg",
    livenessCapture: "IMG23038477585.jpeg",
    proofOfAddress: "IMG23038477585.jpeg",
  };

  return (
    <div>
      {/* Back button */}
      <div className="mb-4">
        <button 
          onClick={() => setSelectedRequest(null)}
          className="text-sm text-[#717680] hover:text-[#414651] font-medium"
        >
          ← Back to requests
        </button>
      </div>

      {/* Personal Information */}
      <div className="bg-white border border-[#E9EAEB] rounded-lg mb-6">
        <div className="flex justify-between items-center border-b border-[#E9EAEB] mb-4 p-3">
          <h3 className="font-semibold text-[#414651]">Personal Information</h3>
          <span className="text-sm text-[#414651]">
            <span className="font-semibold">{requestData.currentTier}</span>
          </span>
        </div>
        <div className="grid grid-cols-4 px-4 pb-4.5">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">Individual ID</label>
              <p className="text-[#535862] text-sm font-semibold">
                #{requestData.individualId}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Date of Birth</label>
              <p className="text-[#535862] text-sm font-semibold">
                {requestData.dateOfBirth}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Gender</label>
              <p className="text-[#535862] text-sm font-semibold">
                {requestData.gender}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">First Name</label>
              <p className="text-[#535862] text-sm font-semibold">
                {requestData.firstName}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Email</label>
              <p className="text-[#535862] text-sm font-semibold">
                {requestData.email}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">BVN</label>
              <p className="text-[#535862] text-sm font-semibold">
                {requestData.bvn}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">Middle Name</label>
              <p className="text-[#535862] text-sm font-semibold">
                {requestData.middleName}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Source of Funds</label>
              <p className="text-[#535862] text-sm font-semibold">
                {requestData.sourceOfFunds}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Signup Date</label>
              <p className="text-[#535862] text-sm font-semibold">
                {requestData.signupDate}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#535862]">Last Name</label>
              <p className="text-[#535862] text-sm font-semibold">
                {requestData.lastName}
              </p>
            </div>
            <div>
              <label className="text-sm text-[#535862]">Occupation</label>
              <p className="text-[#535862] text-sm font-semibold">
                {requestData.occupation}
              </p>
            </div>
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
            <label className="text-sm text-[#535862]">Valid ID</label>
            <p className="text-[#535862] text-sm font-semibold underline cursor-pointer">
              {requestData.validId}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">Liveness Capture</label>
            <p className="text-[#535862] text-sm font-semibold underline cursor-pointer">
              {requestData.livenessCapture}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">Proof of Address</label>
            <p className="text-[#535862] text-sm font-semibold underline cursor-pointer">
              {requestData.proofOfAddress}
            </p>
          </div>
          <div>
            <label className="text-sm text-[#535862]">Proof of Address</label>
            <p className="text-[#535862] text-sm font-semibold underline cursor-pointer">
              {requestData.proofOfAddress}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitRequestDetail;

