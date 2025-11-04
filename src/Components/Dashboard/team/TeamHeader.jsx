import React from 'react';
import { Plus } from 'lucide-react';

const TeamHeader = ({ activeTab, onAddUser }) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-900">Team</h1>
      {activeTab === "Manage All User" && (
        <button 
          onClick={onAddUser}
          className="px-4 py-2 text-sm font-semibold text-white bg-[#008B99] rounded-lg hover:bg-[#008B99]/80 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add User</span>
        </button>
      )}
    </div>
  );
};

export default TeamHeader;
