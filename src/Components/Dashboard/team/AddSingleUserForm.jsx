import React, { useState } from 'react';
import { Mail, Phone, ChevronDown, Search, Check } from 'lucide-react';

const AddSingleUserForm = ({ roleOptions, countryOptions, onTabChange }) => {
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Audit');
  const [roleSearchTerm, setRoleSearchTerm] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('NGN');

  const filteredRoles = roleOptions.filter(role =>
    role.toLowerCase().includes(roleSearchTerm.toLowerCase())
  );

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setShowRoleDropdown(false);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <div className='flex justify-between gap-10'>
        <div>
            <h2 className='text-[#414651] text-sm font-semibold'>User Info</h2>
            <p className='text-[#535862] text-sm'>Update User details.</p>
        </div>
        <div className="bg-white border border-[#E9EAEB] rounded-lg shadow-sm">
          <div className="p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Form Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#414651] mb-1">
                  First Name<span className="text-[#444CE7]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Olivia"
                  className="w-full px-4 py-2.5 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-[#181D27]"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-[#414651] mb-1">
                  Last Name<span className="text-[#444CE7]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Rhye"
                  className="w-full px-4 py-2.5 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-[#181D27]"
                  required
                />
              </div>

              {/* Middle Name */}
              <div>
                <label className="block text-sm font-medium text-[#414651] mb-1">
                  Middle Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your middle name"
                  className="w-full px-4 py-2.5 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-[#181D27]"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-[#414651] mb-1">
                  Email Address<span className="text-[#444CE7]">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="olivia@untitledui.com"
                    className="w-full pl-10 pr-3 py-2.5 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-[#181D27]"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-[#414651] mb-1">
                  Phone Number
                </label>
                <div className="flex">
                  <div className="relative country-dropdown-container">
                    <button
                      type="button"
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="px-4 py-2.5 border border-[#E9EAEB] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] bg-white text-[#181D27] flex items-center justify-between min-w-[80px]"
                    >
                      <span>{selectedCountry}</span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 ml-2 transition-transform duration-200 ${showCountryDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {showCountryDropdown && (
                      <div className="absolute top-full left-0 mt-1 bg-white border border-[#E9EAEB] rounded-lg shadow-lg z-50 min-w-[120px]">
                        {/* Country Options */}
                        <div className="py-1">
                          {countryOptions.map((country) => (
                            <button
                              key={country}
                              type="button"
                              onClick={() => handleCountrySelect(country)}
                              className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center justify-between ${
                                selectedCountry === country ? 'bg-gray-50' : ''
                              }`}
                            >
                              <span className="text-[#181D27]">{country}</span>
                              {selectedCountry === country && (
                                <Check className="w-4 h-4 text-teal-600" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="relative flex-1">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="+234 (555) 000-0000"
                      className="w-full pl-10 pr-3 py-2.5 border border-l-0 border-[#E9EAEB] rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-[#181D27]"
                    />
                  </div>
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-[#414651] mb-1">
                  Role<span className="text-[#444CE7]">*</span>
                </label>
                <div className="relative role-dropdown-container">
                  <button
                    type="button"
                    onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                    className="w-full px-4 py-2.5 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] bg-white text-[#181D27] text-left flex items-center justify-between"
                  >
                    <span>{selectedRole}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${showRoleDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showRoleDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E9EAEB] rounded-lg shadow-lg z-50">
                      {/* Search Bar */}
                      <div className="p-3">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search"
                            value={roleSearchTerm}
                            onChange={(e) => setRoleSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-8 py-2 bg-gray-50 border border-[#E9EAEB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          />
                          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded">
                            ⌘K
                          </span>
                        </div>
                      </div>
                      
                      {/* Role Options */}
                      <div className="max-h-48 overflow-y-auto">
                        {filteredRoles.map((role) => (
                          <button
                            key={role}
                            type="button"
                            onClick={() => handleRoleSelect(role)}
                            className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center justify-between ${
                              selectedRole === role ? 'bg-gray-50' : ''
                            }`}
                          >
                            <span className="text-[#181D27]">{role}</span>
                            {selectedRole === role && (
                              <Check className="w-4 h-4 text-teal-600" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => onTabChange("Manage All User")}
                className="px-4 py-2.5 text-sm font-semibold text-[#414651] border border-[#D5D7DA] bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2.5 text-sm font-semibold text-white bg-[#008B99] rounded-lg hover:bg-[#008B99]/80 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AddSingleUserForm;
