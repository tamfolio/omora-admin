import React, { useState } from 'react';
import { Shield, Key, Phone, Monitor, MoreHorizontal } from 'lucide-react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import AuthenticatorModalFlow from './AuthenticatorModalFlow';
import DisableAuthenticatorModal from './DisableAuthenticatorModal';
import ManageAuthenticatorPage from './ManageAuthenticatorPage';
import ChangePasswordPage from './ChangePasswordPage';

const ProfileSecurity = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDisableModal, setShowDisableModal] = useState(false);
  const [showManagePage, setShowManagePage] = useState(false);
  const [showPasswordPage, setShowPasswordPage] = useState(false);
  const [isAuthenticatorEnabled, setIsAuthenticatorEnabled] = useState(false);

  const handleManageAuthenticator = () => {
    setShowManagePage(true);
  };

  const handleManagePassword = () => {
    setShowPasswordPage(true);
  };

  const handleAuthenticatorEnabled = () => {
    setIsAuthenticatorEnabled(true);
    setShowAuthModal(false);
    setShowManagePage(false);
  };

  const handleAuthenticatorDisabled = () => {
    setIsAuthenticatorEnabled(false);
    setShowDisableModal(false);
    setShowManagePage(false);
  };

  const handleEditAuthenticator = () => {
    setShowManagePage(false);
    setShowAuthModal(true);
  };

  const handleDeleteAuthenticator = () => {
    setShowManagePage(false);
    setShowDisableModal(true);
  };

  const handlePasswordSuccess = () => {
    setShowPasswordPage(false);
  };

  // Show password change page if requested
  if (showPasswordPage) {
    return (
      <ChangePasswordPage
        onBack={() => setShowPasswordPage(false)}
        onSuccess={handlePasswordSuccess}
      />
    );
  }

  // Show manage page if requested
  if (showManagePage) {
    return (
      <ManageAuthenticatorPage
        onBack={() => setShowManagePage(false)}
        onEdit={handleEditAuthenticator}
        onDelete={handleDeleteAuthenticator}
        isEnabled={isAuthenticatorEnabled}
      />
    );
  }

  const securityItems = [
    {
      id: 'authenticator',
      icon: Shield,
      title: 'Authenticator App',
      description: 'Use Google Authenticator to protect your account and transactions.',
      status: isAuthenticatorEnabled ? 'On' : 'Off',
      isToggle: true,
      showManage: true,
      statusIcon: isAuthenticatorEnabled ? CiCircleCheck : IoCloseCircleOutline,
      statusIconColor: isAuthenticatorEnabled ? 'text-green-600' : 'text-gray-400'
    },
    {
      id: 'password',
      icon: Key,
      title: 'Update Password',
      description: 'Login password is used to log in to your account.',
      status: null,
      isToggle: false,
      showManage: true,
      statusIcon: null,
      statusIconColor: null
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Phone Number',
      description: 'Use your phone number to protect your account and transactions.',
      status: '813****364',
      isToggle: false,
      showManage: true,
      statusIcon: null,
      statusIconColor: null
    }
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

  return (
    <div className="space-y-8">
      {/* Security Details */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-2">Security Details</h2>
        <p className="text-sm text-gray-600 mb-6">
          Protect your account and withdrawals with Passkeys and/or security keys, such as Yubikey.
        </p>

        <div className="space-y-6">
          {securityItems.map((item) => {
            const IconComponent = item.icon;
            const StatusIconComponent = item.statusIcon;
            
            return (
              <div key={item.id} className="flex items-center justify-between py-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <IconComponent className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  {/* Status/Toggle */}
                  {item.isToggle ? (
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        {isAuthenticatorEnabled ? (
                          <CiCircleCheck className="w-4 h-4 text-green-600" />
                        ) : (
                          <IoCloseCircleOutline className="w-4 h-4 text-gray-400" />
                        )}
                        <span className={`text-sm ${
                          isAuthenticatorEnabled ? 'text-green-600' : 'text-gray-600'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <button 
                        onClick={
                          item.id === 'authenticator' ? handleManageAuthenticator :
                          item.id === 'password' ? handleManagePassword : 
                          undefined
                        }
                        className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                      >
                        Manage
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-4">
                      {item.status && (
                        <span className="text-sm text-gray-600">{item.status}</span>
                      )}
                      <button 
                        onClick={
                          item.id === 'authenticator' ? handleManageAuthenticator :
                          item.id === 'password' ? handleManagePassword : 
                          undefined
                        }
                        className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                      >
                        Manage
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Logged Devices */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-medium text-gray-900">Where you're logged in</h3>
            <p className="text-sm text-gray-600">We'll alert you via olivia@untitledui.com if there is any unusual activity on your account.</p>
          </div>
          <button className="p-1 hover:bg-gray-100 rounded">
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="space-y-3">
          {devices.map((device, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
              <div className="flex-shrink-0">
                <Monitor className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {device.name}
                  </p>
                  {device.isActive && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></div>
                      Active now
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 truncate">
                  {device.location} • {device.lastActive}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      <AuthenticatorModalFlow
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onComplete={handleAuthenticatorEnabled}
      />

      <DisableAuthenticatorModal
        isOpen={showDisableModal}
        onClose={() => setShowDisableModal(false)}
        onComplete={handleAuthenticatorDisabled}
      />
    </div>
  );
};

export default ProfileSecurity;