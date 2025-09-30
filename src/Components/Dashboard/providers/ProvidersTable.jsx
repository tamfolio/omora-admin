import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SORT_DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc',
  NONE: 'none'
};

const getSortIcon = (direction) => {
  switch (direction) {
    case SORT_DIRECTIONS.ASC:
      return <ChevronUp className="w-3 h-3" />;
    case SORT_DIRECTIONS.DESC:
      return <ChevronDown className="w-3 h-3" />;
    default:
      return <ChevronDown className="w-3 h-3 opacity-30" />;
  }
};

const ProvidersTable = ({ providers, onSort, getSortDirection, onProviderClick }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'border-gray-300';
      case 'degraded':
        return 'border-gray-300';
      case 'paused':
        return 'border-gray-300';
      default:
        return 'border-gray-300';
    }
  };

  const getStatusDot = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-400';
      case 'degraded':
        return 'bg-amber-400';
      case 'paused':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px]">
              <button 
                onClick={() => onSort('providerName')}
                className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
              >
                <span>Provider</span>
                {getSortIcon(getSortDirection('providerName'))}
              </button>
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">
              <button 
                onClick={() => onSort('category')}
                className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
              >
                <span>Category</span>
                {getSortIcon(getSortDirection('category'))}
              </button>
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[110px]">
              <button 
                onClick={() => onSort('environment')}
                className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
                title="Environment"
              >
                <span>Environment</span>
                {getSortIcon(getSortDirection('environment'))}
              </button>
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">
              <button 
                onClick={() => onSort('status')}
                className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
              >
                <span>Status</span>
                {getSortIcon(getSortDirection('status'))}
              </button>
            </th>
           <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px]">
              <button 
                onClick={() => onSort('upTime')}
                className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
              >
                <span>Uptime</span>
                {getSortIcon(getSortDirection('upTime'))}
              </button>
            </th>
           <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px]">
              <button 
                onClick={() => onSort('lastIncident')}
                className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
              >
                <span>Last Incident</span>
                {getSortIcon(getSortDirection('lastIncident'))}
              </button>
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[180px]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {providers.map((provider) => (
            <tr 
              key={provider.id} 
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => onProviderClick(provider)}
            >
              <td className="px-4 py-4 text-sm font-medium text-gray-900">
                <div className="truncate" title={provider.providerName}>
                  {provider.providerName}
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                {provider.category}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                {provider.environment}
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(provider.status)}`}>
                  <div className={`w-2 h-2 rounded-full mr-1.5 ${getStatusDot(provider.status)}`}></div>
                  {provider.status}
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                {provider.upTime}
              </td>
              <td className="px-4 py-4 text-sm text-gray-900">
                <div className="truncate" title={provider.lastIncident}>
                  {provider.lastIncident}
                </div>
              </td>
              <td className="px-4 py-4 text-right text-sm">
                <div className="flex items-center justify-end space-x-2" onClick={(e) => e.stopPropagation()}>
                  <button 
                    className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle deactivate action
                    }}
                  >
                    Deactivate
                  </button>
                  <button 
                    className="px-3 py-1.5 text-xs font-medium text-white bg-teal-600 border border-transparent rounded hover:bg-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle activate action
                    }}
                  >
                    Activate
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProvidersTable;