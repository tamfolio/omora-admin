import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { User, Phone, Mail, Users, Monitor, MoreHorizontal, Upload } from 'lucide-react';
import ProfileSecurity from './ProfileSecurity';
import NotificationSettings from './NotificationSettings';
import LogoutModal from './LogoutModal';

function ProfileSettings() {
  const [activeTab, setActiveTab] = useState('My Profile');
  const [profilePhoto, setProfilePhoto] = useState('/api/placeholder/80/80');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Olivia Rhye',
    phone: '07023456789',
    email: 'olivia@untitledui.com',
    role: 'Super Admin'
  });

  const tabs = [
    { name: 'My Profile', count: null },
    { name: 'Security', count: null },
    { name: 'Notifications', count: 2 },
    { name: 'Log out', count: null }
  ];

  const devices = [
    {
      name: '2024 MacBook Pro 14-inch',
      location: 'Melbourne, Australia',
      lastActive: '22 Jan at 10:40am',
      isActive: true
    },
    {
      name: '2024 MacBook Pro 14-inch',
      location: 'Melbourne, Australia',
      lastActive: '22 Jan at 4:20pm',
      isActive: false
    }
  ];

  const { setPageTitle } = useOutletContext() || {};

useEffect(() => {
  if (setPageTitle) {
    setPageTitle("Settings");
  }
}, [setPageTitle]);

  const handleFileClick = () => {
    document.getElementById('file-upload').click();
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target.result);
        setShowPhotoUpload(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'My Profile':
        return (
          <div className="space-y-12">
            {/* Personal Info Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Personal Info</h2>
              <p className="text-sm text-gray-600 mb-8">
                Protect your account and withdrawals with Passkeys and/or security keys, such as Yubikey.
              </p>

              {/* Photo Upload Section */}
              <div className="mb-12">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="mb-2">
                      <span className="text-sm font-medium text-gray-700">Your photo</span>
                      <span className="text-red-500 ml-1">*</span>
                    </div>
                    <p className="text-sm text-gray-600">This will be displayed on your profile.</p>
                  </div>
                  
                  <img 
                    src={profilePhoto} 
                    alt="Profile" 
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />

                  <div 
                    className="border-2 border-dashed border-teal-300 rounded-xl p-6 text-center bg-teal-50 cursor-pointer flex-1 max-w-sm"
                    onClick={handleFileClick}
                  >
                    <div className="mb-4">
                      <div className="w-10 h-10 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center">
                        <Upload className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-teal-600">Click to upload</span>
                        <span className="text-sm text-gray-600"> or drag and drop</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </div>

                  <div className="flex gap-3 flex-shrink-0">
                    <button 
                      onClick={() => setShowPhotoUpload(false)}
                      className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button className="px-4 py-2 text-sm text-white bg-teal-600 rounded-lg hover:bg-teal-700">
                      Save
                    </button>
                  </div>
                </div>
                
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Name</h3>
                    <p className="text-sm text-gray-600 mt-1">{formData.name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Phone number</h3>
                    <p className="text-sm text-gray-600 mt-1">{formData.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Email</h3>
                    <p className="text-sm text-gray-600 mt-1">{formData.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Role</h3>
                    <p className="text-sm text-gray-600 mt-1">{formData.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Logged Devices Section */}
            <div>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Where you're logged in</h3>
                  <p className="text-sm text-gray-600">
                    We'll alert you via <span className="font-medium">olivia@untitledui.com</span> if there is any unusual activity on your account.
                  </p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {devices.map((device, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Monitor className="w-6 h-6 text-gray-400 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm font-medium text-gray-900">{device.name}</h4>
                        {device.isActive && (
                          <span className="inline-flex items-center text-xs text-green-700">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                            Active now
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        {device.location} • {device.lastActive}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'Security':
        return <ProfileSecurity />;
      case 'Notifications':
        return <NotificationSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Profile Settings</h1>
      </div>

      {/* Tabs */}
      <div className="mb-12">
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => {
                if (tab.name === 'Log out') {
                  setShowLogoutModal(true);
                } else {
                  setActiveTab(tab.name);
                }
              }}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.name
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span>{tab.name}</span>
                {tab.count && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                    {tab.count}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {renderTabContent()}
      </div>

      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={() => {
          console.log('User logged out');
          setShowLogoutModal(false);
        }}
      />
    </div>
  );
}

export default ProfileSettings;