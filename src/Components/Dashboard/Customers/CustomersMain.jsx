import React, { useState } from 'react';
import { Search, Filter, Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function CustomersMain() {
  const [activeTab, setActiveTab] = useState('individuals');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  const handleCustomerClick = (customerId) => {
    navigate(`/dashboard/customers/${customerId}`);
    console.log(`/dashboard/customers/${customerId}`)
  };

  // Sample customer data
  const customersData = {
    individuals: [
      {
        id: '23456786',
        fullName: 'Williams James Doe',
        email: 'williamsmith@gmail.com',
        balance: 'USD 10000',
        signupDate: '15th July, 2025',
        kycStatus: 'Approved',
        rmAssigned: 'Williams'
      },
      {
        id: '23456787',
        fullName: 'Sarah Johnson',
        email: 'sarah.johnson@gmail.com',
        balance: 'USD 15000',
        signupDate: '12th July, 2025',
        kycStatus: 'Not Started',
        rmAssigned: 'Johnson'
      },
      {
        id: '23456788',
        fullName: 'Michael Brown',
        email: 'michael.brown@gmail.com',
        balance: 'USD 8500',
        signupDate: '10th July, 2025',
        kycStatus: 'Pending',
        rmAssigned: 'Brown'
      },
      {
        id: '23456789',
        fullName: 'Emily Davis',
        email: 'emily.davis@gmail.com',
        balance: 'USD 12000',
        signupDate: '8th July, 2025',
        kycStatus: 'Approved',
        rmAssigned: 'Davis'
      },
      {
        id: '23456790',
        fullName: 'David Wilson',
        email: 'david.wilson@gmail.com',
        balance: 'USD 9500',
        signupDate: '5th July, 2025',
        kycStatus: 'Not Started',
        rmAssigned: 'Wilson'
      },
      {
        id: '23456791',
        fullName: 'Jessica Miller',
        email: 'jessica.miller@gmail.com',
        balance: 'USD 11000',
        signupDate: '3rd July, 2025',
        kycStatus: 'Approved',
        rmAssigned: 'Miller'
      },
      {
        id: '23456792',
        fullName: 'James Anderson',
        email: 'james.anderson@gmail.com',
        balance: 'USD 13500',
        signupDate: '1st July, 2025',
        kycStatus: 'Not Started',
        rmAssigned: 'Anderson'
      },
      {
        id: '23456793',
        fullName: 'Lisa Thompson',
        email: 'lisa.thompson@gmail.com',
        balance: 'USD 7800',
        signupDate: '28th June, 2025',
        kycStatus: 'Pending',
        rmAssigned: 'Thompson'
      }
    ],
    businesses: [
      {
        id: '34567890',
        fullName: 'Tech Solutions Ltd',
        email: 'contact@techsolutions.com',
        balance: 'USD 50000',
        signupDate: '10th July, 2025',
        kycStatus: 'Approved',
        rmAssigned: 'Corporate Team'
      },
      {
        id: '34567891',
        fullName: 'Global Traders Inc',
        email: 'info@globaltraders.com',
        balance: 'USD 75000',
        signupDate: '8th July, 2025',
        kycStatus: 'Pending',
        rmAssigned: 'Corporate Team'
      }
    ]
  };

  const getKycStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Not Started':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const currentData = customersData[activeTab];
  const filteredData = currentData.filter(customer =>
    customer.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.id.includes(searchTerm)
  );

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          Export data
        </button>
      </div>

      {/* Tab Navigation - Card Style */}
      <div className="mb-6 w-1/3">
        <nav className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('individuals')}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 flex-1 ${
              activeTab === 'individuals'
                ? 'bg-white text-gray-900 shadow-sm border border-gray-200'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            Individuals
          </button>
          <button
            onClick={() => setActiveTab('businesses')}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 flex-1 ${
              activeTab === 'businesses'
                ? 'bg-white text-gray-900 shadow-sm border border-gray-200'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            Businesses
          </button>
        </nav>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Section Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {activeTab === 'individuals' ? 'Individuals' : 'Businesses'}
          </h2>
          
          {/* Search and Filters */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500"
              />
              <span className="absolute right-3 top-3 text-xs text-gray-400">⌘K</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">Jan 10, 2025 – Jan 16, 2025</span>
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {activeTab === 'individuals' ? 'Individual ID' : 'Business ID'}
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Full Name
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Balance
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Signup Date
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  KYC Status
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  RM Assigned
                  <ChevronDown className="inline w-3 h-3 ml-1" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentItems.map((customer, index) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => handleCustomerClick(customer.id)}>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    #{customer.id}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">
                    {customer.fullName}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {customer.email}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    {customer.balance}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {customer.signupDate}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getKycStatusColor(customer.kycStatus)}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></div>
                      {customer.kycStatus}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {customer.rmAssigned}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomersMain;