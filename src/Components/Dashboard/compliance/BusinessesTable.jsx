import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronsUpDown, ChevronUp, ChevronDown } from 'lucide-react';

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

const BusinessesTable = ({ businesses, onSort, getSortDirection }) => {
  const navigate = useNavigate();

  const handleRowClick = (business) => {
    navigate(`/dashboard/compliance/business/${business.id}`);
  };
  const getKycStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return ' border-gray-300';
      case 'not approved':
        return ' border-gray-300';
      default:
        return ' border-gray-300';
    }
  };

  const getKycStatusDot = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-[#00A5B5]';
      case 'not approved':
        return 'bg-[#85888E]';
      default:
        return 'bg-gray-400';
    }
  };

  const columns = [
    { key: 'businessId', label: 'Business ID', width: '150px' },
    { key: 'businessName', label: 'Business Name', width: '200px' },
    { key: 'registrationNumber', label: 'Registration Number', width: '180px' },
    { key: 'businessType', label: 'Business Type', width: '150px' },
    { key: 'email', label: 'Email', width: '200px' },
    { key: 'signUpDate', label: 'Sign Up Date', width: '150px' },
    { key: 'kycStatus', label: 'KYC Status', width: '120px' }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b border-[#E9EAEB]">
          <tr>
            {columns.map(({ key, label, width }) => (
              <th 
                key={key} 
                className="px-6 py-3 text-left text-xs font-semibold text-[#717680] tracking-wider"
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
          {businesses.map((item) => (
            <tr 
              key={item.id} 
              className="hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => handleRowClick(item)}
            >
              <td className="px-6 py-4 text-sm font-medium text-[#181D27]">
                <div className="truncate" title={`#${item.businessId}`}>
                  #{item.businessId}
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-[#535862]">
                <div className="truncate" title={item.businessName}>
                  {item.businessName}
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-[#535862]">
                {item.registrationNumber}
              </td>
              <td className="px-6 py-4 text-sm text-[#535862]">
                {item.businessType}
              </td>
              <td className="px-6 py-4 text-sm text-[#535862]">
                <div className="text-wrap">
                  {item.email}
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-[#535862] text-nowrap">
                {item.signUpDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className={`inline-flex items-center px-1.5 py-[2px] rounded-[6px] text-[#535862] text-xs font-medium border border-[#D5D7DA] ${getKycStatusColor(item.kycStatus)}`}>
                  <div className={`w-2 h-2 rounded-full mr-1.5 ${getKycStatusDot(item.kycStatus)}`}></div>
                  {item.kycStatus}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusinessesTable;
