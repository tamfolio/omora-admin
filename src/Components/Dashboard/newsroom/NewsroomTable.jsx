import React from 'react';
import { ChevronDown, ChevronUp, Edit3, Trash2 } from 'lucide-react';

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

const NewsroomTable = ({ news, onSort, getSortDirection, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'published':
        return ' border-gray-300';
      case 'draft':
        return ' border-gray-300';
      default:
        return ' border-gray-300';
    }
  };

  const getStatusDot = (status) => {
    switch (status.toLowerCase()) {
      case 'published':
        return 'bg-teal-400';
      case 'draft':
        return 'bg-amber-400';
      default:
        return 'bg-gray-400';
    }
  };

  const columns = [
    { key: 'title', label: 'Title', width: '300px' },
    { key: 'author', label: 'Author', width: '150px' },
    { key: 'dateCreated', label: 'Date Created', width: '150px' },
    { key: 'status', label: 'Status', width: '120px' }
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
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" style={{width: '120px'}}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {news.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">
                <div className="truncate" title={item.title}>
                  {item.title}
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {item.author}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {item.dateCreated}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                  <div className={`w-2 h-2 rounded-full mr-1.5 ${getStatusDot(item.status)}`}></div>
                  {item.status}
                </div>
              </td>
              <td className="px-6 py-4 text-right text-sm">
                <div className="flex items-center justify-end space-x-2">
                  <button 
                    onClick={() => onEdit(item)}
                    className="p-1 hover:bg-gray-100 rounded"
                    title="Edit"
                  >
                    <Edit3 className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                  </button>
                  <button 
                    onClick={() => onDelete(item)}
                    className="p-1 hover:bg-gray-100 rounded"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-600" />
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

export default NewsroomTable;