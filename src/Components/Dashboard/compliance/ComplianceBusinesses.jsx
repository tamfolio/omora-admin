import React, { useState, useMemo } from "react";
import BusinessesTable from "./BusinessesTable";
import ComplianceTabSection from "./ComplianceTabSection";
import {
  SORT_DIRECTIONS,
  sortData,
  filterBySearch,
  getNextSortDirection,
} from "../newsroom/newsroomUtils";

function ComplianceBusinesses() {
  const [activeTab, setActiveTab] = useState("Businesses");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    column: null,
    direction: SORT_DIRECTIONS.NONE,
  });

  const tabs = [
    { name: "Individuals", key: "Individuals" },
    { name: "Businesses", key: "Businesses" },
  ];

  const [businessesData, setBusinessesData] = useState([
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

  const filteredBusinesses = useMemo(() => {
    let result = businessesData;

    // Filter by search
    if (searchTerm) {
      result = filterBySearch(result, searchTerm);
    }

    // Sort
    if (sortConfig.column && sortConfig.direction !== SORT_DIRECTIONS.NONE) {
      result = sortData(result, sortConfig.column, sortConfig.direction);
    }

    return result;
  }, [businessesData, searchTerm, sortConfig]);

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

  const handleEdit = (business) => {
    console.log("Edit business:", business);
  };

  const handleDelete = (business) => {
    console.log("Delete business:", business);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Business Compliance</h2>
        <button className="px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
          Add Business
        </button>
      </div>
      
      {/* Content Container */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Tabs and Search */}
        <ComplianceTabSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Table */}
        <div className="overflow-hidden">
          <BusinessesTable
            businesses={filteredBusinesses}
            onSort={handleSort}
            getSortDirection={getSortDirection}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200">
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

export default ComplianceBusinesses;
