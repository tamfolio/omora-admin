import React, { useState, useRef } from "react";
import { ArrowDownRight, ArrowUpRight, Calendar } from "lucide-react";
import CalendarDropdown from "../../Common/CalendarDropdown";
import { EllipsisVertical } from "lucide-react";

function ComplianceDashboard() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(new Date(2025, 0, 10)); // Jan 10, 2025
  const [selectedEndDate, setSelectedEndDate] = useState(new Date(2025, 0, 16)); // Jan 16, 2025
  const buttonRef = useRef(null);

  const formatDateRange = (startDate, endDate) => {
    if (!startDate || !endDate) return "Select date range";
    
    const formatDate = (date) => {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    };
    
    return `${formatDate(startDate)} – ${formatDate(endDate)}`;
  };

  const handleDateRangeSelect = (startDate, endDate) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
    console.log("Date range selected:", { startDate, endDate });
  };

  const handleCalendarToggle = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const getArrowIcon = (percentage) => {
    const isPositive = !percentage.startsWith('-');
    const ArrowIcon = isPositive ? ArrowUpRight : ArrowDownRight;
    const color = isPositive ? '#17B26A' : '#F04438';
    
    return <ArrowIcon size={12} color={color} />;
  };

  const kycInfo = [
    {
        title: "Not Started",
        amount: 912,
        percentage: "2%",
    },
    {
        title: "Pending",
        amount: 14,
        percentage: "-2%",
    },
    {
        title: "Declined",
        amount: 914,
        percentage: "2%",
    },
    {
        title: "Approved",
        amount: 914,
        percentage: "-2%",
    },
  ]

  const transactionRiskAlerts = [
    {
        title: "Flagged Transactions",
        amount: 912,
        percentage: "2%",
    },
    {
        title: "Transactions Breaching Set Volume",
        amount: 912,
        percentage: "-2%",
    },
    {
        title: "High Value Transaction Alerts",
        amount: 912,
        percentage: "2%",
    },
  ]

  const riskProfiling = [
    {
        title: "High Risk",
        amount: 912,
        percentage: "2%",
    },
    {
        title: "Medium Risk",
        amount: 912,
        percentage: "-2%",
    },
    {
        title: "Low Risk",
        amount: 912,
        percentage: "2%",
    },
  ]

  return (
    <div className="relative">
      <div className="flex items-center justify-between relative">
        <h2 className="text-[#181D27] text-[18px] font-semibold">Overview</h2>
        <button 
          ref={buttonRef}
          onClick={handleCalendarToggle}
          className="flex gap-2.5 items-center h-10 py-2.5 px-3.5 rounded-lg border border-[#D5D7DA] font-semibold text-[#414651] text-sm hover:bg-gray-50 transition-colors"
        >
          <Calendar color="#A4A7AE" />
          {formatDateRange(selectedStartDate, selectedEndDate)}
        </button>

        <CalendarDropdown
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        onDateRangeSelect={handleDateRangeSelect}
        initialStartDate={selectedStartDate}
        initialEndDate={selectedEndDate}
        position="bottom-right"
        triggerRef={buttonRef}
        className="mt-2 z-50"
      />
      </div>

      <div className="mt-4">
        <h3 className="text-[#181D27] font-medium mb-4">KYC Status</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kycInfo.map((info, index) => (
                <div key={index} className="p-5 pb-3 border border-[#E9EAEB] flex flex-col justify-between  rounded-xl space-y-4">
                    <div className="flex justify-between items-center">
                        <h4 className="text-[#535862]">{info.title}</h4>
                        <buttonz className="cursor-pointer"><EllipsisVertical size={20} color="#A4A7AE" /></buttonz>
                    </div>

                    <div className="flex justify-between items-end">
                        <span className="text-[#181D27] font-semibold text-[30px]">{info.amount}</span>
                        <span className="flex items-center justify-center gap-2 py-[2px] px-2 border border-[#D5D7DA] rounded-[6px]">{getArrowIcon(info.percentage)} {info.percentage}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-[#181D27] font-medium mb-4">Risk Profiling</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {riskProfiling.map((info, index) => (
                <div key={index} className="p-5 pb-3 border border-[#E9EAEB] flex flex-col justify-between rounded-xl space-y-4">
                    <div className="flex justify-between items-center">
                        <h4 className="text-[#535862]">{info.title}</h4>
                        <buttonz className="cursor-pointer"><EllipsisVertical size={20} color="#A4A7AE" /></buttonz>
                    </div>

                    <div className="flex justify-between items-end">
                        <span className="text-[#181D27] font-semibold text-[30px]">{info.amount}</span>
                        <span className="flex items-center justify-center gap-2 py-[2px] px-2 border border-[#D5D7DA] rounded-[6px]">{getArrowIcon(info.percentage)} {info.percentage}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-[#181D27] font-medium mb-4">Transaction Risk Alerts</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {transactionRiskAlerts.map((info, index) => (
                <div key={index} className="p-5 pb-3 border border-[#E9EAEB] flex flex-col justify-between rounded-xl space-y-4">
                    <div className="flex justify-between items-center">
                        <h4 className="text-[#535862]">{info.title}</h4>
                        <buttonz className="cursor-pointer"><EllipsisVertical size={20} color="#A4A7AE" /></buttonz>
                    </div>

                    <div className="flex justify-between items-end">
                        <span className="text-[#181D27] font-semibold text-[30px]">{info.amount}</span>
                        <span className="flex items-center justify-center gap-2 py-[2px] px-2 border border-[#D5D7DA] rounded-[6px]">{getArrowIcon(info.percentage)} {info.percentage}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ComplianceDashboard;
