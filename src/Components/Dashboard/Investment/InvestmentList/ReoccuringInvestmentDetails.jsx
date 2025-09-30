import React, { useState, useEffect } from "react";
import { ChevronLeft, Home } from "lucide-react";
import InvestmentDetailsTab from "./InvestmentDetailsTab";
import AuditLogTab from "./AuditLogTab";
import PauseInvestmentModal from "./Modals/PauseInvestmentModal";
import ResumeInvestmentModal from "./Modals/ResumeInvestmentModal";
import StopInvestmentModal from "./Modals/StopInvestmentModal";

function RecurringInvestmentDetails({ investmentId = "123456" }) {
  const [investment, setInvestment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("details");
  const [showPauseModal, setShowPauseModal] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showStopModal, setShowStopModal] = useState(false);

  useEffect(() => {
    fetchInvestmentData(investmentId);
  }, [investmentId]);

  const handlePauseSubmit = (data) => {
    console.log("Pause investment:", data);
    setShowPauseModal(false);
    // Add your pause logic here
  };

  const handleResumeSubmit = (data) => {
    console.log("Resume investment:", data);
    setShowResumeModal(false);
    // Add your resume logic here
  };

  const handleStopSubmit = (data) => {
    console.log("Stop investment:", data);
    setShowStopModal(false);
    // Add your stop logic here
  };

  const fetchInvestmentData = async (id) => {
    try {
      const mockInvestment = {
        id: id,
        customerInfo: {
          customerName: "Simon Smith Moneyton",
          rmAssigned: "AnAME",
          investmentRiskProfile: "Conservative",
        },
        activeRecurringInvestment: {
          investmentId: "# 1234567",
          status: "Active",
          investmentAmount: "$50000",
          dailyInvestmentAmount: "USD $100.00",
          duration: "90 days",
          startDate: "01/02/2025",
          endDate: "01/02/2025",
        },
        performanceSummary: {
          cumulativeInvestmentAmount: "$50000",
          usdtReceived: "$5000",
          roiPercent: "50%",
          maxDrawdown: "40%",
          winLossRatio: "40:60",
          endDate: "01/02/2025",
        },
        executionHistory: [
          {
            date: "07/07/1997",
            investmentId: "# 1234567",
            status: "Active",
            investmentAmount: "$50000",
            dailyInvestmentAmount: "USD 100.00",
            fxRate: "1530/$",
            fees: "350",
            usdtReceived: "1000.00 USDT",
            notes: "This is a note and this is why we did this and that.",
          },
        ],
        linkedWallet: {
          availableNGN: "NGN 300,000",
          usdtBalance: "2500",
        },
        complianceNotes: {
          note: "This is a note",
        },
        auditLog: [
          {
            user: "User A",
            role: "Operator",
            action: "deposited NGN 5,000,000 into account",
            timestamp: "12:00pm\n15th July, 2025",
          },
          {
            user: "User A",
            role: "Admin",
            action: "approves account status",
            timestamp: "12:00pm\n15th July, 2025",
          },
          {
            user: "User A",
            role: "Operator",
            action: "deposited NGN 5,000,000 into account",
            timestamp: "12:00pm\n15th July, 2025",
          },
        ],
      };

      setInvestment(mockInvestment);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching investment:", error);
      setLoading(false);
    }
  };

  const handleNavigateBack = () => {
    console.log("Navigate back to recurring investments");
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading investment details...</div>
      </div>
    );
  }

  if (!investment) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Investment not found</div>
      </div>
    );
  }

  const tabs = [
    { id: "details", label: "Investment Details" },
    { id: "audit", label: "Audit Log" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <PauseInvestmentModal
        isOpen={showPauseModal}
        onClose={() => setShowPauseModal(false)}
        onSubmit={handlePauseSubmit}
      />
      <ResumeInvestmentModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
        onSubmit={handleResumeSubmit}
      />
      <StopInvestmentModal
        isOpen={showStopModal}
        onClose={() => setShowStopModal(false)}
        onSubmit={handleStopSubmit}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Home className="w-4 h-4" />
          <span>/</span>
          <button onClick={handleNavigateBack} className="hover:text-gray-700">
            Recurring Investments
          </button>
          <span>/</span>
          <span>...</span>
          <span>/</span>
          <span className="text-gray-900">{investment.id}</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleNavigateBack}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">
              #{investment.id}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">
              Export CSV
            </button>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">
              Retry
            </button>
            <button
              onClick={() => setShowPauseModal(true)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Pause
            </button>
            <button
              onClick={() => setShowResumeModal(true)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Resume
            </button>
            <button
              onClick={() => setShowStopModal(true)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Stop
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white px-6 pt-6">
        <div className="w-1/3">
          <nav className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 flex-1 ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "details" && (
          <InvestmentDetailsTab investment={investment} />
        )}
        {activeTab === "audit" && (
          <AuditLogTab auditLog={investment.auditLog} />
        )}
      </div>
    </div>
  );
}

export default RecurringInvestmentDetails;
