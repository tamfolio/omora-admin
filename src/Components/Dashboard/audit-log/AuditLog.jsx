import React, { useState, useMemo, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Download } from "lucide-react";
import AuditLogTable from "./AuditLogTable";
import {
  exportToCSV,
  formatDataForExport,
  SORT_DIRECTIONS,
  sortData,
  filterBySearch,
  getNextSortDirection,
} from "./auditLogUtils";

function AuditLog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    column: null,
    direction: SORT_DIRECTIONS.NONE,
  });

  const { setPageTitle } = useOutletContext();

  useEffect(() => {
    if (setPageTitle) {
      setPageTitle("Audit Log");
    }
  }, [setPageTitle]);

  const auditLogData = [
    {
      user: "User A",
      role: "Operator",
      action: "deposited NGN 5,000,000 into account",
      time: "12:00pm",
      date: "15th July, 2025",
    },
    {
      user: "User A",
      role: "Admin",
      action: "approves account status",
      time: "12:00pm",
      date: "15th July, 2025",
    },
    {
      user: "User A",
      role: "Operator",
      action: "deposited NGN 5,000,000 into account",
      time: "12:00pm",
      date: "15th July, 2025",
    },
    {
      user: "User A",
      role: "Operator",
      action: "deposited NGN 5,000,000 into account",
      time: "12:00pm",
      date: "15th July, 2025",
    },
    {
      user: "User A",
      role: "Operator",
      action: "deposited NGN 5,000,000 into account",
      time: "12:00pm",
      date: "15th July, 2025",
    },
    {
      user: "User A",
      role: "Operator",
      action: "deposited NGN 5,000,000 into account",
      time: "12:00pm",
      date: "15th July, 2025",
    },
    {
      user: "User A",
      role: "Operator",
      action: "deposited NGN 5,000,000 into account",
      time: "12:00pm",
      date: "15th July, 2025",
    },
    {
      user: "User A",
      role: "Operator",
      action: "deposited NGN 5,000,000 into account",
      time: "12:00pm",
      date: "15th July, 2025",
    },
    {
      user: "User A",
      role: "Operator",
      action: "deposited NGN 5,000,000 into account",
      time: "12:00pm",
      date: "15th July, 2025",
    },
    {
      user: "User A",
      role: "Operator",
      action: "deposited NGN 5,000,000 into account",
      time: "12:00pm",
      date: "15th July, 2025",
    },
  ];

  const filteredAuditLogs = useMemo(() => {
    let result = auditLogData;

    if (searchTerm) {
      result = filterBySearch(result, searchTerm);
    }

    if (sortConfig.column && sortConfig.direction !== SORT_DIRECTIONS.NONE) {
      result = sortData(result, sortConfig.column, sortConfig.direction);
    }

    return result;
  }, [searchTerm, sortConfig]);

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

  const handleExport = () => {
    const formattedData = formatDataForExport(filteredAuditLogs);
    exportToCSV(formattedData, "audit-log-export");
  };

  return (
    <div className="max-w-full mx-auto p-4 overflow-x-hidden">
      {/* Header */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleExport}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          <Download className="w-4 h-4" />
          <span>Export data</span>
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="overflow-hidden">
          <AuditLogTable
            auditLogs={filteredAuditLogs}
            onSort={handleSort}
            getSortDirection={getSortDirection}
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

export default AuditLog;
