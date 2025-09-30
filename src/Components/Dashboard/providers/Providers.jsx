import React, { useState, useMemo, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
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

  const { setPageTitle } = useOutletContext();

  useEffect(() => {
    // A check to ensure setPageTitle is available before calling it
    if (setPageTitle) {
      if (selectedProvider) {
        setPageTitle(selectedProvider.providerName);
      } else {
        setPageTitle('Providers');
      }
    }
  }, [selectedProvider, setPageTitle]);

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
    <div className="space-y-6 p-4 w-full">
      <div className="flex items-center justify-end">
        <button
          onClick={handleExport}
          className="flex items-center space-x-2 px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          <Download className="w-3 h-3" />
          <span>Export CSV</span>
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="px-4 py-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-medium text-gray-900">Providers List</h2>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-40 pl-8 pr-6 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
                <Search className="w-3 h-3 text-gray-400 absolute left-2.5 top-1/2 transform -translate-y-1/2" />
                <span className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-200 px-1 py-0.5 rounded">
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

        <ProvidersTable
          providers={filteredProviders}
          onSort={handleSort}
          getSortDirection={getSortDirection}
          onProviderClick={handleProviderClick}
        />

        <div className="px-4 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-700">Page 1 of 10</span>
            <div className="flex space-x-2">
              <button className="px-2 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-2 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
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