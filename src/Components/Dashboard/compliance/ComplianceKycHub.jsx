import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import IndividualsTable from "./IndividualsTable";
import BusinessesTable from "./BusinessesTable";
import {
  SORT_DIRECTIONS,
  sortData,
  filterBySearch,
  getNextSortDirection,
} from "../newsroom/newsroomUtils";

function ComplianceKycHub() {
  const [activeTab, setActiveTab] = useState("Individuals");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    column: null,
    direction: SORT_DIRECTIONS.NONE,
  });

  const tabs = [
    { name: "Individuals", key: "Individuals" },
    { name: "Businesses", key: "Businesses" },
  ];

  const [individualsData] = useState([
    {
      id: 1,
      individualId: "23456786",
      lastName: "Doe",
      firstName: "John",
      middleName: "Michael",
      email: "john.doe@email.com",
      signUpDate: "15th July, 2025",
      kycStatus: "Approved",
    },
    {
      id: 2,
      individualId: "23456787",
      lastName: "Smith",
      firstName: "Alice",
      middleName: "Jane",
      email: "alice.smith@email.com",
      signUpDate: "14th July, 2025",
      kycStatus: "Not Approved",
    },
    {
      id: 3,
      individualId: "23456788",
      lastName: "Johnson",
      firstName: "Bob",
      middleName: "Robert",
      email: "bob.johnson@email.com",
      signUpDate: "13th July, 2025",
      kycStatus: "Approved",
    },
    {
      id: 4,
      individualId: "23456789",
      lastName: "Williams",
      firstName: "Sarah",
      middleName: "Elizabeth",
      email: "sarah.williams@email.com",
      signUpDate: "12th July, 2025",
      kycStatus: "Not Approved",
    },
    {
      id: 5,
      individualId: "23456790",
      lastName: "Brown",
      firstName: "David",
      middleName: "James",
      email: "david.brown@email.com",
      signUpDate: "11th July, 2025",
      kycStatus: "Approved",
    },
    {
      id: 6,
      individualId: "23456791",
      lastName: "Davis",
      firstName: "Emma",
      middleName: "Grace",
      email: "emma.davis@email.com",
      signUpDate: "10th July, 2025",
      kycStatus: "Not Approved",
    },
  ]);

  const [businessesData] = useState([
    {
      id: 1,
      businessId: "34567890",
      businessName: "TechCorp Solutions Ltd",
      registrationNumber: "RC-123456",
      businessType: "Technology",
      email: "info@techcorp.com",
      signUpDate: "15th July, 2025",
      kycStatus: "Approved",
    },
    {
      id: 2,
      businessId: "34567891",
      businessName: "Finance Solutions Inc",
      registrationNumber: "RC-123457",
      businessType: "Financial Services",
      email: "contact@financesolutions.com",
      signUpDate: "14th July, 2025",
      kycStatus: "Not Approved",
    },
    {
      id: 3,
      businessId: "34567892",
      businessName: "Retail Group Ltd",
      registrationNumber: "RC-123458",
      businessType: "Retail",
      email: "info@retailgroup.com",
      signUpDate: "13th July, 2025",
      kycStatus: "Approved",
    },
    {
      id: 4,
      businessId: "34567893",
      businessName: "Healthcare Services",
      registrationNumber: "RC-123459",
      businessType: "Healthcare",
      email: "admin@healthcare.com",
      signUpDate: "12th July, 2025",
      kycStatus: "Not Approved",
    },
    {
      id: 5,
      businessId: "34567894",
      businessName: "Construction Co",
      registrationNumber: "RC-123460",
      businessType: "Construction",
      email: "office@construction.com",
      signUpDate: "11th July, 2025",
      kycStatus: "Approved",
    },
    {
      id: 6,
      businessId: "34567895",
      businessName: "Consulting Firm",
      registrationNumber: "RC-123461",
      businessType: "Consulting",
      email: "team@consulting.com",
      signUpDate: "10th July, 2025",
      kycStatus: "Not Approved",
    },
  ]);

  const filteredData = useMemo(() => {
    let result = activeTab === "Individuals" ? individualsData : businessesData;

    // Filter by search
    if (searchTerm) {
      result = filterBySearch(result, searchTerm);
    }

    // Sort
    if (sortConfig.column && sortConfig.direction !== SORT_DIRECTIONS.NONE) {
      result = sortData(result, sortConfig.column, sortConfig.direction);
    }

    return result;
  }, [activeTab, individualsData, businessesData, searchTerm, sortConfig]);

  const handleSort = (column) => {
    setSortConfig((prev) => ({
      column,
      direction:
        prev.column === column
          ? getNextSortDirection(prev.direction)
          : SORT_DIRECTIONS.ASC,
    }));
  };

  const getSortDirection = (column) => {
    return sortConfig.column === column
      ? sortConfig.direction
      : SORT_DIRECTIONS.NONE;
  };

  return (
    <div className="space-y-6">
      {/* <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          {activeTab === "Individuals" ? "Individual Compliance" : "Business Compliance"}
        </h2>
        <button className="px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
          Add {activeTab === "Individuals" ? "Individual" : "Business"}
        </button>
      </div> */}
      
      {/* Content Container */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Tabs and Search */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden bg-white w-fit">
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

            {/* Search */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-[296px] pl-10 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded">
                  ⌘K
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden">
          {activeTab === "Individuals" ? (
            <IndividualsTable
              individuals={filteredData}
              onSort={handleSort}
              getSortDirection={getSortDirection}
            />
          ) : (
            <BusinessesTable
              businesses={filteredData}
              onSort={handleSort}
              getSortDirection={getSortDirection}
            />
          )}
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 bg-[#FCFCFC]">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Page 1 of 10</span>
            <div className="flex space-x-2">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplianceKycHub;