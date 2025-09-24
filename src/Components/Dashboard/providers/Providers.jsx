import React, { useState, useMemo } from 'react';
import { Search, Download } from 'lucide-react';
import CalendarPicker from './CalenderPicker';
import ProvidersTable from './ProvidersTable';
import ProviderDetails from './ProviderDetails';
import { 
  exportToCSV, 
  formatDataForExport, 
  SORT_DIRECTIONS, 
  sortData, 
  filterBySearch, 
  getNextSortDirection 
} from './utils';

function Providers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('2025-01-10');
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    column: null,
    direction: SORT_DIRECTIONS.NONE
  });

  const providersData = [
    {
      id: 1,
      providerName: 'Williams Smith Moneyto',
      category: 'KYC',
      environment: 'Sandbox',
      status: 'Active',
      upTime: '24h/7d',
      lastIncident: '15th July, 2025'
    },
    {
      id: 2,
      providerName: 'Williams Smith Moneyto',
      category: 'FX',
      environment: 'Prod',
      status: 'Degraded',
      upTime: '24h/7d',
      lastIncident: '15th July, 2025'
    },
    {
      id: 3,
      providerName: 'Williams Smith Moneyto',
      category: 'Custody',
      environment: 'Sandbox',
      status: 'Paused',
      upTime: '24h/7d',
      lastIncident: '15th July, 2025'
    },
    {
      id: 4,
      providerName: 'Williams Smith Moneyto',
      category: 'Bank',
      environment: 'Sandbox',
      status: 'Active',
      upTime: '24h/7d',
      lastIncident: '15th July, 2025'
    },
    {
      id: 5,
      providerName: 'Williams Smith Moneyto',
      category: 'Pricing',
      environment: 'Sandbox',
      status: 'Degraded',
      upTime: '24h/7d',
      lastIncident: '15th July, 2025'
    }
  ];

  const filteredProviders = useMemo(() => {
    let result = providersData;
    
    if (searchTerm) {
      result = filterBySearch(result, searchTerm);
    }
    
    if (sortConfig.column && sortConfig.direction !== SORT_DIRECTIONS.NONE) {
      result = sortData(result, sortConfig.column, sortConfig.direction);
    }
    
    return result;
  }, [searchTerm, selectedDate, sortConfig]);

  const handleSort = (column) => {
    setSortConfig(prev => ({
      column,
      direction: prev.column === column 
        ? getNextSortDirection(prev.direction)
        : SORT_DIRECTIONS.ASC
    }));
  };

  const getSortDirection = (column) => {
    return sortConfig.column === column ? sortConfig.direction : SORT_DIRECTIONS.NONE;
  };

  const handleExport = () => {
    const formattedData = formatDataForExport(filteredProviders);
    exportToCSV(formattedData, 'providers-export');
  };

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider);
  };

  const handleBackToList = () => {
    setSelectedProvider(null);
  };

  // Show provider details if selected
  if (selectedProvider) {
    return <ProviderDetails provider={selectedProvider} onBack={handleBackToList} />;
  }

  return (
    <div className="space-y-6 p-6 min-w-full" style={{minWidth: '1200px'}}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Providers</h1>
        <button
          onClick={handleExport}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          <Download className="w-4 h-4" />
          <span>Export CSV</span>
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Providers List</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-48 pl-10 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded">
                  ⌘K
                </span>
              </div>

              <CalendarPicker 
                selectedDate={selectedDate}
                onDateChange={setSelectedDate}
              />
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <ProvidersTable
            providers={filteredProviders}
            onSort={handleSort}
            getSortDirection={getSortDirection}
            onProviderClick={handleProviderClick}
          />
        </div>

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

export default Providers;