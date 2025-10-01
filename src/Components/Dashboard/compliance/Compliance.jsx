import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ComplianceDashboard from "./ComplianceDashboard";
import TransactionMonitoringTable from "./TransactionMonitoringTable";
import ComplianceKycHub from "./ComplianceKycHub";

function Compliance() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { setPageTitle } = useOutletContext() || {};

  useEffect(() => {
    if (setPageTitle) {
      setPageTitle("Compliance");
    }
  }, [setPageTitle]);

  const tabs = [
    { name: "Dashboard", key: "Dashboard" },
    { name: "KycHub", key: "KycHub" },
    { name: "Transaction Monitoring", key: "Transaction Monitoring" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <ComplianceDashboard />;
      case "KycHub":
        return <ComplianceKycHub />;
      case "Transaction Monitoring":
        return <TransactionMonitoringTable />;
      default:
        return <ComplianceDashboard />;
    }
  };

  return (
    <div className="max-w-full mx-auto">
        <div className="flex justify-between w-full mb-5">
            <h1 className="font-semibold text-[24px] text-[#181D27]">Compliance</h1>
            <button className="text-sm font-semibold text-[#414651] border border-[#D5D7DA] px-3.5 py-2.5 rounded-lg">Export data</button>
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

      <div className={activeTab === "Dashboard" ? "border border-[#E9EAEB] rounded-xl p-5" : ""}>
        {/* Tab Content */}
        <div>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default Compliance;
