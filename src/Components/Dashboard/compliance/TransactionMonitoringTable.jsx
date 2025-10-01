import React, { useState, useRef } from 'react';
import { Search, ChevronsUpDown, ChevronUp, ChevronDown, Calendar } from 'lucide-react';
import CalendarDropdown from '../../Common/CalendarDropdown';

const SORT_DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc',
  NONE: 'none'
};

const getSortIcon = (direction) => {
  switch (direction) {
    case SORT_DIRECTIONS.ASC:
      return <ChevronUp color='#A4A7AE' className="w-3 h-3" />;
    case SORT_DIRECTIONS.DESC:
      return <ChevronDown color='#A4A7AE' className="w-3 h-3" />;
    default:
      return <ChevronsUpDown color='#A4A7AE' className="w-3 h-3" />;
  }
};

const TransactionMonitoringTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({
    column: null,
    direction: SORT_DIRECTIONS.NONE,
  });
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

  // Mock data
  const transactions = [
    { id: 1, reference: "23456786", customerName: "Williams", transactionType: "Funding", amount: "USD 100.00", timestamp: "12:00pm\n15th July, 2025", initiator: "Individual" },
    { id: 2, reference: "23456786", customerName: "Williams", transactionType: "Withdrawal", amount: "USD 100.00", timestamp: "12:00pm\n15th July, 2025", initiator: "Admin" },
    { id: 3, reference: "23456786", customerName: "Williams", transactionType: "Conversion", amount: "NGN 1,000,000,000", timestamp: "12:00pm\n15th July, 2025", initiator: "Operator" },
    { id: 4, reference: "23456786", customerName: "Williams", transactionType: "DCA Execution", amount: "NGN 1,000,000,000", timestamp: "12:00pm\n15th July, 2025", initiator: "Automated DCA" },
    { id: 5, reference: "23456786", customerName: "Williams", transactionType: "Fee", amount: "NGN 1,000,000,000", timestamp: "12:00pm\n15th July, 2025", initiator: "Omora" },
    { id: 6, reference: "23456786", customerName: "Williams", transactionType: "DCA Execution", amount: "NGN 1,000,000,000", timestamp: "12:00pm\n15th July, 2025", initiator: "Individual" },
    { id: 7, reference: "23456786", customerName: "Williams", transactionType: "DCA Execution", amount: "NGN 1,000,000,000", timestamp: "12:00pm\n15th July, 2025", initiator: "Admin" },
    { id: 8, reference: "23456786", customerName: "Williams", transactionType: "DCA Execution", amount: "NGN 1,000,000,000", timestamp: "12:00pm\n15th July, 2025", initiator: "Individual" },
  ];

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

  const sortedTransactions = React.useMemo(() => {
    if (!sortConfig.column || sortConfig.direction === SORT_DIRECTIONS.NONE) {
      return transactions;
    }

    return [...transactions].sort((a, b) => {
      let aValue = a[sortConfig.column];
      let bValue = b[sortConfig.column];

      // Handle timestamp sorting
      if (sortConfig.column === 'timestamp') {
        const parseTimestamp = (timestamp) => {
          const [time, date] = timestamp.split('\n');
          return new Date(date);
        };
        aValue = parseTimestamp(aValue);
        bValue = parseTimestamp(bValue);
      } else if (typeof aValue === 'string') {
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
  }, [sortConfig, transactions]);

  const filteredTransactions = sortedTransactions.filter((transaction) =>
    transaction.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.transactionType.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const columns = [
    { key: 'reference', label: 'Reference', sortable: true },
    { key: 'customerName', label: 'Customer / Business Name', sortable: true },
    { key: 'transactionType', label: 'Transaction Type', sortable: true },
    { key: 'amount', label: 'Amount', sortable: false },
    { key: 'timestamp', label: 'Time Stamp', sortable: true },
    { key: 'initiator', label: 'Initiator', sortable: true },
  ];

  return (
    <div>
      <div className="bg-white border border-[#E9EAEB] rounded-lg">
        {/* Header Section */}
        <div className="px-6 py-5 border-b border-[#E9EAEB]">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#181D27]">Real Time Transaction Feed</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-[296px] pl-10 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded">
                  ⌘K
                </span>
              </div>
              <div className="relative">
                <button
                  ref={buttonRef}
                  onClick={handleCalendarToggle}
                  className="flex gap-2.5 items-center py-2.5 px-3.5 h-10 rounded-lg border border-[#D5D7DA] font-semibold text-[#414651] text-sm hover:bg-gray-50 transition-colors"
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
                  alignment="right"
                  triggerRef={buttonRef}
                  className="mt-2 z-50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-[#E9EAEB]">
              <tr>
                {columns.map(({ key, label, sortable }) => (
                  <th 
                    key={key} 
                    className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider"
                  >
                    {sortable ? (
                      <button 
                        onClick={() => handleSort(key)}
                        className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
                      >
                        <span>{label}</span>
                        {getSortIcon(getSortDirection(key))}
                      </button>
                    ) : (
                      <span>{label}</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTransactions.map((transaction) => (
                <tr 
                  key={transaction.id} 
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-[#181D27]">
                    #{transaction.reference}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#535862]">
                    {transaction.customerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-1.5 py-[2px] rounded-[6px] text-[#535862] text-xs font-medium border border-[#D5D7DA]">
                      <div className="w-2 h-2 rounded-full mr-1.5 bg-[#00A5B5]"></div>
                      {transaction.transactionType}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#535862]">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#535862] whitespace-pre-line">
                    {transaction.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-1.5 py-[2px] rounded-[6px] text-[#535862] text-xs font-medium border border-[#D5D7DA]">
                      <div className="w-2 h-2 rounded-full mr-1.5 bg-[#00A5B5]"></div>
                      {transaction.initiator}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
};

export default TransactionMonitoringTable;
