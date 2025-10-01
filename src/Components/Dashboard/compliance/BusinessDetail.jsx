import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ResetKYCModal from "./ResetKYCModal";
import SuspendAccountModal from "./SuspendAccountModal";
import DownloadKYCModal from "./DownloadKYCModal";
import BusinessProfileDetailsSection from "./BusinessProfileDetailsSection";
import TransactionHistoryTable from "./TransactionHistoryTable";
import InvestmentHistoryTable from "./InvestmentHistoryTable";
import AuditTrailTable from "./AuditTrailTable";
import { SORT_DIRECTIONS, getNextSortDirection } from "./utils/sortingUtils.jsx";
import { createBusinessData, transactionData, investmentData, auditData } from "./utils/mockData";


const BusinessDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Profile Details");
  const [isResetKYCModalOpen, setIsResetKYCModalOpen] = useState(false);
  const [isSuspendAccountModalOpen, setIsSuspendAccountModalOpen] = useState(false);
  const [isDownloadKYCModalOpen, setIsDownloadKYCModalOpen] = useState(false);
  
  // Sorting states for each table
  const [transactionSortConfig, setTransactionSortConfig] = useState({
    column: null,
    direction: SORT_DIRECTIONS.NONE,
  });
  const [investmentSortConfig, setInvestmentSortConfig] = useState({
    column: null,
    direction: SORT_DIRECTIONS.NONE,
  });
  const [auditSortConfig, setAuditSortConfig] = useState({
    column: null,
    direction: SORT_DIRECTIONS.NONE,
  });


  const handleTransactionSort = (column) => {
    setTransactionSortConfig((prev) => ({
      column,
      direction: prev.column === column ? getNextSortDirection(prev.direction) : SORT_DIRECTIONS.ASC,
    }));
  };

  const handleInvestmentSort = (column) => {
    setInvestmentSortConfig((prev) => ({
      column,
      direction: prev.column === column ? getNextSortDirection(prev.direction) : SORT_DIRECTIONS.ASC,
    }));
  };

  const handleAuditSort = (column) => {
    setAuditSortConfig((prev) => ({
      column,
      direction: prev.column === column ? getNextSortDirection(prev.direction) : SORT_DIRECTIONS.ASC,
    }));
  };



  // Modal handlers
  const handleResetKYC = () => {
    console.log("Reset KYC for business:", id);
    // Add your reset KYC logic here
  };

  const handleSuspendAccount = () => {
    console.log("Suspend account for business:", id);
    // Add your suspend account logic here
  };

  const handleDownloadKYC = () => {
    console.log("Download KYC for business:", id);
    // Add your download KYC logic here
  };

  const tabs = [
    { name: "Profile Details", key: "Profile Details" },
    { name: "Transaction History", key: "Transaction History" },
    { name: "Investment History", key: "Investment History" },
    { name: "Audit Trail", key: "Audit Trail" },
  ];

  // Mock data - in real app, this would be fetched based on the ID
  const businessData = createBusinessData(id);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Profile Details":
        return (
          <div>
            <BusinessProfileDetailsSection businessData={businessData} />
          </div>
        );
      case "Transaction History":
        return (
          <TransactionHistoryTable 
            transactionData={transactionData}
            sortConfig={transactionSortConfig}
            onSort={handleTransactionSort}
          />
        );
      case "Investment History":
        return (
          <InvestmentHistoryTable 
            investmentData={investmentData}
            sortConfig={investmentSortConfig}
            onSort={handleInvestmentSort}
          />
        );
      case "Audit Trail":
        return (
          <AuditTrailTable 
            auditData={auditData}
            sortConfig={auditSortConfig}
            onSort={handleAuditSort}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
        <img src="/assets/home-line.svg" width={20} height={20} />
        <ChevronRight size={16} color="#A4A7AE" />
        <span className="text-[#717680] font-semibold">Business</span>
        <ChevronRight size={16} color="#A4A7AE" />
        <span>...</span>
        <ChevronRight size={16} color="#A4A7AE" />
        <span className="text-[#414651] font-semibold bg-[#FAFAFA] py-1 px-2 rounded-[6px]">
          123456
        </span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#181D27]">
            #{businessData.businessId}
          </h1>
        </div>
        {activeTab === "Profile Details" && (
          <div className="flex space-x-3">
            <button 
              onClick={() => setIsResetKYCModalOpen(true)}
              className="flex items-center border border-[#D5D7DA] py-2.5 px-4 text-[#414651] font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span>Reset KYC</span>
            </button>
            <button 
              onClick={() => setIsSuspendAccountModalOpen(true)}
              className="flex items-center border border-[#D5D7DA] py-2.5 px-4 text-[#414651] font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span>Suspend Account</span>
            </button>
            <button 
              onClick={() => setIsDownloadKYCModalOpen(true)}
              className="flex items-center border border-[#D5D7DA] py-2.5 px-4 text-[#414651] font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span>Download KYC</span>
            </button>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="flex border border-gray-300 rounded-lg overflow-hidden bg-white w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-sm font-semibold transition-colors border-r border-gray-300 last:border-r-0 ${
                activeTab === tab.key
                  ? "bg-white text-[#414651]"
                  : "bg-gray-50 text-[#717680] hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div >
        {renderTabContent()}
      </div>

      {/* Modals */}
      <ResetKYCModal
        isOpen={isResetKYCModalOpen}
        onClose={() => setIsResetKYCModalOpen(false)}
        onConfirm={handleResetKYC}
      />
      <SuspendAccountModal
        isOpen={isSuspendAccountModalOpen}
        onClose={() => setIsSuspendAccountModalOpen(false)}
        onConfirm={handleSuspendAccount}
      />
      <DownloadKYCModal
        isOpen={isDownloadKYCModalOpen}
        onClose={() => setIsDownloadKYCModalOpen(false)}
        onConfirm={handleDownloadKYC}
      />
    </div>
  );
};

export default BusinessDetail;