import React, { useState, useMemo } from "react";
import IndividualsTable from "./IndividualsTable";
import ComplianceTabSection from "./ComplianceTabSection";
import {
  SORT_DIRECTIONS,
  sortData,
  filterBySearch,
  getNextSortDirection,
} from "../newsroom/newsroomUtils";

function ComplianceIndividuals() {
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

  const [individualsData, setIndividualsData] = useState([
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

  const filteredIndividuals = useMemo(() => {
    let result = individualsData;

    // Filter by search
    if (searchTerm) {
      result = filterBySearch(result, searchTerm);
    }

    // Sort
    if (sortConfig.column && sortConfig.direction !== SORT_DIRECTIONS.NONE) {
      result = sortData(result, sortConfig.column, sortConfig.direction);
    }

    return result;
  }, [individualsData, searchTerm, sortConfig]);

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

  const handleEdit = (individual) => {
    console.log("Edit individual:", individual);
  };

  const handleDelete = (individual) => {
    console.log("Delete individual:", individual);
  };

  return (
    <div className="space-y-6">
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
          <IndividualsTable
            individuals={filteredIndividuals}
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

export default ComplianceIndividuals;
