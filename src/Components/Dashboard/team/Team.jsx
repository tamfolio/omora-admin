import React, { useState, useMemo, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import TeamHeader from './TeamHeader';
import TeamTabs from './TeamTabs';
import AddSingleUserForm from './AddSingleUserForm';
import AddBulkUserForm from './AddBulkUserForm';
import ManageAllUsersTable from './ManageAllUsersTable';
import AddSingleUserModal from './AddSingleUserModal';
import UploadStatusModal from './UploadStatusModal';

// Sorting utilities (similar to newsroom)
const SORT_DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc',
  NONE: 'none'
};

const sortData = (data, column, direction) => {
  return [...data].sort((a, b) => {
    if (direction === SORT_DIRECTIONS.ASC) {
      return a[column] > b[column] ? 1 : -1;
    } else {
      return a[column] < b[column] ? 1 : -1;
    }
  });
};

const filterBySearch = (data, searchTerm) => {
  return data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
};

function Team() {
  const [activeTab, setActiveTab] = useState("Add Single User");
  const [showSingleUserModal, setShowSingleUserModal] = useState(false);
  const [showUploadStatus, setShowUploadStatus] = useState(false);
  const [uploadStatusType, setUploadStatusType] = useState('success');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    column: null,
    direction: SORT_DIRECTIONS.NONE,
  });

  const { setPageTitle } = useOutletContext() || {};

  useEffect(() => {
    if (setPageTitle) {
      setPageTitle("Team");
    }
  }, [setPageTitle]);

  // Mock user data
  const [usersData, setUsersData] = useState([
    {
      id: 1,
      name: "Olivia Rhye",
      email: "olivia@untitledui.com",
      role: "Audit",
      dateJoined: "15th July, 2025",
      status: "Active",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Relationship Manager",
      dateJoined: "14th July, 2025",
      status: "Active",
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Support",
      dateJoined: "13th July, 2025",
      status: "Pending",
    },
    {
      id: 4,
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      role: "Treasury",
      dateJoined: "12th July, 2025",
      status: "Deactivated",
    },
    {
      id: 5,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      role: "Compliance",
      dateJoined: "11th July, 2025",
      status: "Active",
    },
  ]);

  const filteredUsers = useMemo(() => {
    let result = usersData;

    // Filter by search
    if (searchQuery) {
      result = filterBySearch(result, searchQuery);
    }

    // Apply active filters
    if (activeFilters.length > 0) {
      result = result.filter((user) => {
        return activeFilters.some(filter => {
          if (filter === 'Active' || filter === 'Pending' || filter === 'Deactivated') {
            return user.status.toLowerCase() === filter.toLowerCase();
          }
          return user.role.toLowerCase().includes(filter.toLowerCase());
        });
      });
    }

    // Sort
    if (sortConfig.column && sortConfig.direction !== SORT_DIRECTIONS.NONE) {
      result = sortData(result, sortConfig.column, sortConfig.direction);
    }

    return result;
  }, [usersData, searchQuery, activeFilters, sortConfig]);

  const handleSort = (column) => {
    setSortConfig((prev) => ({
      column,
      direction:
        prev.column === column
          ? prev.direction === SORT_DIRECTIONS.ASC
            ? SORT_DIRECTIONS.DESC
            : SORT_DIRECTIONS.ASC
          : SORT_DIRECTIONS.ASC,
    }));
  };

  const getSortDirection = (column) => {
    return sortConfig.column === column
      ? sortConfig.direction
      : SORT_DIRECTIONS.NONE;
  };

  const handleEdit = (user) => {
    console.log("Edit user:", user);
    // TODO: Implement edit functionality
  };

  const handleDelete = (user) => {
    setUsersData((prev) => prev.filter((item) => item.id !== user.id));
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length && filteredUsers.length > 0) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id));
    }
  };

  const handleToggleUserStatus = (user) => {
    console.log("Toggle user status:", user);
  };

  const handleRemoveFilter = (filterToRemove) => {
    setActiveFilters(prev => prev.filter(filter => filter !== filterToRemove));
  };

  const handleClearAllFilters = () => {
    setActiveFilters([]);
  };

  const handleSaveSingleUser = (userData) => {
    const newUser = {
      id: Date.now(),
      name: `${userData.firstName} ${userData.lastName}`,
      email: userData.email,
      role: userData.role,
      dateJoined: new Date().toLocaleDateString(),
      status: "Active",
    };
    setUsersData((prev) => [...prev, newUser]);
    setShowSingleUserModal(false);
  };

  const handleStayOnPage = () => {
    setShowUploadStatus(false);
  };

  const handleRedirectToDashboard = () => {
    setShowUploadStatus(false);
    setActiveTab("Manage All User");
  };

  const tabs = [
    { name: "Add Single User" },
    { name: "Add Bulk User" },
    { name: "Manage All User" }
  ];

  const roleOptions = [
    "Audit",
    "Support", 
    "Compliance",
    "Treasury",
    "Relationship Manager"
  ];

  const countryOptions = [
    "NGN",
    "USD",
    "EUR",
    "GBP"
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Add Single User":
        return (
          <AddSingleUserForm 
            roleOptions={roleOptions}
            countryOptions={countryOptions}
            onTabChange={setActiveTab}
          />
        );
      
      case "Add Bulk User":
        return (
          <AddBulkUserForm 
            onCancel={() => setActiveTab("Manage All User")}
            onUploadStatus={(type) => {
              setUploadStatusType(type);
              setShowUploadStatus(true);
            }}
          />
        );
      
      case "Manage All User":
        return (
          <ManageAllUsersTable
            filteredUsers={filteredUsers}
            onSort={handleSort}
            getSortDirection={getSortDirection}
            onEdit={handleEdit}
            onDelete={handleDelete}
            selectedUsers={selectedUsers}
            onSelectUser={handleSelectUser}
            onSelectAll={handleSelectAll}
            onToggleUserStatus={handleToggleUserStatus}
            roleOptions={roleOptions}
            activeFilters={activeFilters}
            onRemoveFilter={handleRemoveFilter}
            onClearAllFilters={handleClearAllFilters}
          />
        );
        
        default:
          return null;
      }
    };

  return (
    <div className="max-w-full mx-auto p-4 overflow-x-hidden">
      {/* Header */}
      <TeamHeader 
        activeTab={activeTab}
        onAddUser={() => setShowSingleUserModal(true)}
      />

      {/* Tabs */}
      <TeamTabs 
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Tab Content */}
      {renderTabContent()}

      {/* Modals */}
      <AddSingleUserModal
        isOpen={showSingleUserModal}
        onClose={() => setShowSingleUserModal(false)}
        onSave={handleSaveSingleUser}
      />

      <UploadStatusModal
        isOpen={showUploadStatus}
        onClose={() => setShowUploadStatus(false)}
        type={uploadStatusType}
        onStayOnPage={handleStayOnPage}
        onRedirect={handleRedirectToDashboard}
      />
    </div>
  );
}

export default Team;