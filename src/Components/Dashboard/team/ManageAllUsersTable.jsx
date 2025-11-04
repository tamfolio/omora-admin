import React, { useState } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import { IoFilterOutline } from 'react-icons/io5';
import TeamTable from './TeamTable';

const ManageAllUsersTable = ({ 
  filteredUsers, 
  onSort, 
  getSortDirection, 
  onEdit, 
  onDelete, 
  selectedUsers, 
  onSelectUser, 
  onSelectAll, 
  onToggleUserStatus,
  roleOptions,
  activeFilters,
  onRemoveFilter,
  onClearAllFilters
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  return (
    <div className="bg-white border border-[#E9EAEB] rounded-lg shadow-sm">
      {/* Header Section with Title, Count, and Search */}
      <div className="px-6 py-4 border-b border-[#E9EAEB]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h2 className="text-lg font-bold text-[#181D27]">Team members</h2>
            <span className="inline-flex items-center px-2 py-[2px] rounded-[16px] text-xs font-medium border border-[#C7D7FE] bg-[#EEF4FF] text-[#3538CD]">
              {filteredUsers.length} users
            </span>
          </div>
          
          {/* Search Bar and Filters */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[296px] pl-3 pr-10 py-2 bg-white border border-[#E9EAEB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
            
            {/* Filter Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-[#E9EAEB] rounded-lg hover:bg-gray-50"
              >
                <IoFilterOutline className="w-4 h-4" />
                <span>Filters</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Filter Dropdown Menu */}
              {showFilterDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-[#E9EAEB] rounded-lg shadow-lg z-10">
                  <div className="p-4">
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                          Status
                        </label>
                        <div className="space-y-2">
                          {['Active', 'Pending', 'Deactivated'].map((status) => (
                            <label key={status} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={activeFilters.includes(status)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    // Add filter logic
                                  } else {
                                    onRemoveFilter(status);
                                  }
                                }}
                                className="rounded border-gray-300 text-[#008B99] focus:ring-[#008B99] mr-2"
                              />
                              <span className="text-sm text-gray-700">{status}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                          Role
                        </label>
                        <div className="space-y-2">
                          {roleOptions.map((role) => (
                            <label key={role} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={activeFilters.includes(role)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    // Add filter logic
                                  } else {
                                    onRemoveFilter(role);
                                  }
                                }}
                                className="rounded border-gray-300 text-[#008B99] focus:ring-[#008B99] mr-2"
                              />
                              <span className="text-sm text-gray-700">{role}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Filters */}
        {activeFilters.length > 0 && (
          <div className="flex items-center space-x-2 mt-4">
            <span className="text-sm text-gray-500">Filters:</span>
            {activeFilters.map((filter, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {filter}
                <button
                  onClick={() => onRemoveFilter(filter)}
                  className="ml-1.5 inline-flex items-center justify-center w-3 h-3 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-2 h-2" />
                </button>
              </span>
            ))}
            <button
              onClick={onClearAllFilters}
              className="text-sm text-[#008B99] hover:text-[#008B99]/80 font-medium"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-hidden">
        <TeamTable 
          users={filteredUsers} 
          onSort={onSort}
          getSortDirection={getSortDirection}
          onEdit={onEdit}
          onDelete={onDelete}
          selectedUsers={selectedUsers}
          onSelectUser={onSelectUser}
          onSelectAll={onSelectAll}
          onToggleUserStatus={onToggleUserStatus}
        />
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-[#E9EAEB] bg-[#FCFCFC]">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Page 1 of 10</span>
          <div className="flex space-x-2">
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-[#E9EAEB] rounded-lg hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-[#E9EAEB] rounded-lg hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllUsersTable;
