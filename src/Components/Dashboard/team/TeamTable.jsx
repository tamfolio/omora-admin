import React from 'react';
import { ChevronDown, ChevronUp, ChevronsUpDown, Edit3, Trash2, User } from 'lucide-react';

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

const TeamTable = ({ users, onSort, getSortDirection, onEdit, onDelete, selectedUsers, onSelectUser, onSelectAll, onToggleUserStatus }) => {
  const getInitials = (firstName, lastName) => {
    const first = firstName ? firstName.charAt(0).toUpperCase() : '';
    const last = lastName ? lastName.charAt(0).toUpperCase() : '';
    return first + last;
  };

  const getUserName = (name) => {
    const parts = name.split(' ');
    return {
      firstName: parts[0] || '',
      lastName: parts[1] || parts[0] || ''
    };
  };
  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'border-[#FEDF89] bg-[#FFFAEB] text-yellow-800';
      case 'active':
        return 'border-[#ABEFC6] bg-[#ECFDF3] text-green-800';
      case 'deactivated':
        return 'border-[#E9EAEB] bg-[#F9F9F9] text-gray-800';
      default:
        return 'border-[#E9EAEB] bg-[#F9F9F9] text-gray-800';
    }
  };

  const columns = [
    { key: 'name', label: 'Name', width: '250px' },
    { key: 'role', label: 'Role', width: '150px' },
    { key: 'status', label: 'Status', width: '120px' }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {/* Checkbox column */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{width: '50px'}}>
              <input
                type="checkbox"
                checked={selectedUsers.length === users.length && users.length > 0}
                onChange={onSelectAll}
                className="size-5 border-[#D5D7DA] rounded-md text-[#008B99] focus:ring-[#008B99] accent-[#008B99]"
              />
            </th>
            
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
          {users.map((user) => {
            const nameParts = getUserName(user.name);
            const initials = getInitials(nameParts.firstName, nameParts.lastName);
            
            return (
              <tr key={user.id} className="hover:bg-gray-50">
                {/* Checkbox */}
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => onSelectUser(user.id)}
                    className="size-5 border-[#D5D7DA] rounded-md text-[#008B99] focus:ring-[#008B99] accent-[#008B99]"
                  />
                </td>
                
                {/* Name */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {user.avatar ? (
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.avatar}
                          alt={user.name}
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-700">{initials}</span>
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-[#181D27] truncate">{user.name}</p>
                      <p className="text-sm text-[#535862] truncate">{user.email}</p>
                    </div>
                  </div>
                </td>
                
                {/* Role */}
                <td className="px-6 py-4 text-sm text-[#535862]">
                  {user.role}
                </td>
                
                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyle(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                
                {/* Actions */}
                <td className="px-6 py-4 text-right text-sm">
                  <div className="flex items-center justify-end space-x-3">
                    <button 
                      onClick={() => onToggleUserStatus(user)}
                      className="text-sm text-[#008B99] hover:text-[#008B99]/80 font-semibold"
                    >
                      {user.status.toLowerCase() === 'active' ? 'Deactivate' : 'Activate'}
                    </button>
                    <button 
                      onClick={() => onDelete(user)}
                      className="p-1 hover:bg-gray-100 rounded"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-600" />
                    </button>
                    <button 
                      onClick={() => onEdit(user)}
                      className="p-1 hover:bg-gray-100 rounded"
                      title="Edit"
                    >
                      <Edit3 className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;
