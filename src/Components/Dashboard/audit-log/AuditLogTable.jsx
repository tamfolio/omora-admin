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

const AuditLogTable = ({ auditLogs, onSort, getSortDirection }) => {
  const columns = [
    { key: 'user', label: 'User', width: '150px' },
    { key: 'role', label: 'Role', width: '120px' },
    { key: 'action', label: 'Action', width: 'auto' },
    { key: 'timestamp', label: 'Time stamp', width: '180px' }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {columns.map(({ key, label, width }) => (
              <th 
                key={key} 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                style={{width}}
              >
                <button 
                  onClick={() => onSort(key)}
                  className="flex items-center space-x-1 hover:text-gray-700 w-full text-left"
                >
                  <span className="truncate">{label}</span>
                  {getSortIcon(getSortDirection(key))}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {auditLogs.map((log, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">
                {log.user}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {log.role}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {log.action}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <div>{log.time}</div>
                <div className="text-xs text-gray-500">{log.date}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLogTable;