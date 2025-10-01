import React, { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import DCALimitsSection from "./DCALimitsSection";
import BulkInvestmentLimitsSection from "./BulkInvestmentLimitsSection";
import CorporateWithdrawalSection from "./CorporateWithdrawalSection";
import IndividualsWithdrawalSection from "./IndividualsWithdrawalSection";
import LimitRequestTable from "./LimitRequestTable";
import LimitRequestDetail from "./LimitRequestDetail";

const SORT_DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc',
  NONE: 'none'
};

const Limits = () => {
  const { setPageTitle } = useOutletContext() || {};
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Investment Limits");
  const [selectedRequest, setSelectedRequest] = useState(null);
  
  // Sorting state for Limit Increase Request table
  const [sortConfig, setSortConfig] = useState({
    column: null,
    direction: SORT_DIRECTIONS.NONE,
  });

  useEffect(() => {
    if (setPageTitle) {
      setPageTitle("Limits");
    }
  }, [setPageTitle]);

  const tabs = [
    { name: "Investment Limits", key: "Investment Limits" },
    { name: "Withdrawal Limits", key: "Withdrawal Limits" },
    { name: "Limit Increase Request", key: "Limit Increase Request" },
  ];

  // Investment Limits state
  const [dcaLimits, setDcaLimits] = useState([
    { minRecurring: "1540", maxRecurring: "1540", applicableTo: "All Individuals", specificCustomers: [] },
    { minRecurring: "1540", maxRecurring: "1540", applicableTo: "Specific Customers", specificCustomers: ["John Doe"] },
  ]);

  const [bulkLimits, setBulkLimits] = useState([
    { minOneTime: "1540", maxOneTime: "1540", applicableTo: "All Individuals", specificCustomers: [] },
    { minOneTime: "1540", maxOneTime: "1540", applicableTo: "Specific Customers", specificCustomers: ["John Doe"] },
  ]);

  // Withdrawal Limits state - Corporate
  const [corporateWithdrawalLimits, setCorporateWithdrawalLimits] = useState([
    { limit: "Daily Withdrawal Limit", currentRate: "$10,000", period: "/ day", applicableTo: "All Corporate", specificCustomers: [] },
    { limit: "Single Withdrawal Limit", currentRate: "$2,000", period: "/ day", applicableTo: "Specific Corporate", specificCustomers: ["John Doe", "John Doe", "John Doe", "John Doe", "John Doe"] },
  ]);

  // Withdrawal Limits state - Individuals
  const [individualsWithdrawalLimits, setIndividualsWithdrawalLimits] = useState([
    { tier: "Tier 1", dailyLimit: "$500", singleLimit: "$100", applicableTo: "All Individuals", specificCustomers: [] },
    { tier: "Tier 2", dailyLimit: "$10,000", singleLimit: "$2,000", applicableTo: "Specific Individuals", specificCustomers: ["John Doe", "John Doe", "John Doe", "John Doe", "John Doe"] },
  ]);

  // Limit Increase Requests
  const [limitRequests] = useState([
    { id: 1, requestId: "23456786", fullName: "Williams Smith Moneyton", upgradeRequest: "Tier 1 → Tier 2", requestDate: "15th July, 2025" },
    { id: 2, requestId: "23456786", fullName: "Williams Smith Moneyton", upgradeRequest: "Tier 1 → Tier 2", requestDate: "15th July, 2025" },
    { id: 3, requestId: "23456786", fullName: "Williams Smith Moneyton", upgradeRequest: "Tier 1 → Tier 2", requestDate: "15th July, 2025" },
    { id: 4, requestId: "23456786", fullName: "Williams Smith Moneyton", upgradeRequest: "Tier 1 → Tier 2", requestDate: "15th July, 2025" },
    { id: 5, requestId: "23456786", fullName: "Williams Smith Moneyton", upgradeRequest: "Tier 1 → Tier 2", requestDate: "15th July, 2025" },
    { id: 6, requestId: "23456786", fullName: "Williams Smith Moneyton", upgradeRequest: "Tier 1 → Tier 2", requestDate: "15th July, 2025" },
    { id: 7, requestId: "23456786", fullName: "Williams Smith Moneyton", upgradeRequest: "Tier 1 → Tier 2", requestDate: "15th July, 2025" },
    { id: 8, requestId: "23456786", fullName: "Williams Smith Moneyton", upgradeRequest: "Tier 1 → Tier 2", requestDate: "15th July, 2025" },
  ]);

  const handleSort = (column) => {
    setSortConfig((prev) => ({
      column,
      direction: prev.column === column 
        ? (prev.direction === SORT_DIRECTIONS.NONE 
            ? SORT_DIRECTIONS.ASC 
            : prev.direction === SORT_DIRECTIONS.ASC 
              ? SORT_DIRECTIONS.DESC 
              : SORT_DIRECTIONS.NONE)
        : SORT_DIRECTIONS.ASC,
    }));
  };

  const getSortDirection = (column) => {
    return sortConfig.column === column ? sortConfig.direction : SORT_DIRECTIONS.NONE;
  };

  const sortedRequests = React.useMemo(() => {
    if (!sortConfig.column || sortConfig.direction === SORT_DIRECTIONS.NONE) {
      return limitRequests;
    }

    return [...limitRequests].sort((a, b) => {
      let aValue = a[sortConfig.column];
      let bValue = b[sortConfig.column];

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) {
        return sortConfig.direction === SORT_DIRECTIONS.ASC ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === SORT_DIRECTIONS.ASC ? 1 : -1;
      }
      return 0;
    });
  }, [sortConfig, limitRequests]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Investment Limits":
        return (
          <div className="space-y-6">
            <DCALimitsSection dcaLimits={dcaLimits} setDcaLimits={setDcaLimits} />
            <BulkInvestmentLimitsSection bulkLimits={bulkLimits} setBulkLimits={setBulkLimits} />
          </div>
        );

      case "Withdrawal Limits":
        return (
          <div className="space-y-6">
            <CorporateWithdrawalSection 
              corporateWithdrawalLimits={corporateWithdrawalLimits} 
              setCorporateWithdrawalLimits={setCorporateWithdrawalLimits} 
            />
            <IndividualsWithdrawalSection 
              individualsWithdrawalLimits={individualsWithdrawalLimits} 
              setIndividualsWithdrawalLimits={setIndividualsWithdrawalLimits} 
            />
          </div>
        );

      case "Limit Increase Request":
        return selectedRequest ? (
          <LimitRequestDetail 
            selectedRequest={selectedRequest} 
            setSelectedRequest={setSelectedRequest} 
          />
        ) : (
          <LimitRequestTable
            sortedRequests={sortedRequests}
            handleSort={handleSort}
            getSortDirection={getSortDirection}
            setSelectedRequest={setSelectedRequest}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-full mx-auto">
      <div className="flex justify-between w-full mb-5">
        <h1 className="font-semibold text-[24px] text-[#181D27]">Limits</h1>
        {selectedRequest ? (
          <div className="flex space-x-3">
            <button 
              onClick={() => {
                console.log("Decline request:", selectedRequest.id);
                setSelectedRequest(null);
              }}
              className="text-sm font-semibold text-[#414651] border border-[#D5D7DA] px-3.5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Decline Limit Request
            </button>
            <button 
              onClick={() => {
                console.log("Approve request:", selectedRequest.id);
                setSelectedRequest(null);
              }}
              className="text-sm font-semibold text-white bg-[#008B99] px-3.5 py-2.5 rounded-lg hover:bg-[#008B99]/80 transition-colors"
            >
              Approve Limit Request
            </button>
          </div>
        ) : (
          <button className="text-sm font-semibold text-[#414651] border border-[#D5D7DA] px-3.5 py-2.5 rounded-lg">
            Export data
          </button>
        )}
      </div>

      {/* Tabs */}
      <div>
        <div className="flex border border-gray-300 rounded-lg overflow-hidden bg-white w-fit mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-sm font-medium transition-colors border-r border-gray-300 last:border-r-0 ${
                activeTab === tab.key
                  ? "bg-white text-gray-900"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Limits;
