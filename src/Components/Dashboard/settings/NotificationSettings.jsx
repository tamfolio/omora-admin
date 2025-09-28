import React, { useState } from 'react';
import NotificationWarningModal from './NotificationWarningModal';

const NotificationSettings = () => {
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [pendingToggle, setPendingToggle] = useState(null);
  const [notifications, setNotifications] = useState({
    systemHealth: {
      email: true,
      inApp: false
    },
    investmentActivity: {
      email: true,
      inApp: false
    },
    kyc: {
      email: true,
      inApp: false
    },
    approvals: {
      email: true,
      inApp: false
    },
    walletActivity: {
      email: true,
      inApp: false
    }
  });

  const notificationTypes = [
    {
      id: 'systemHealth',
      title: 'System Health',
      description: 'Daily DCA logs,rebalancing alerts'
    },
    {
      id: 'investmentActivity',
      title: 'Investment Activity',
      description: 'Daily DCA logs,rebalancing alerts'
    },
    {
      id: 'kyc',
      title: 'KYC',
      description: 'Daily DCA logs,rebalancing alerts'
    },
    {
      id: 'approvals',
      title: 'Approvals',
      description: 'Daily DCA logs,rebalancing alerts'
    },
    {
      id: 'walletActivity',
      title: 'Wallet Activity',
      description: 'Daily DCA logs,rebalancing alerts'
    }
  ];

  const handleToggle = (type, channel, currentValue) => {
    // Always show modal for any toggle
    setPendingToggle({ type, channel, value: !currentValue });
    setShowWarningModal(true);
  };

  const handleConfirmToggle = () => {
    if (pendingToggle) {
      setNotifications(prev => ({
        ...prev,
        [pendingToggle.type]: {
          ...prev[pendingToggle.type],
          [pendingToggle.channel]: pendingToggle.value
        }
      }));
    }
    setShowWarningModal(false);
    setPendingToggle(null);
  };

  const handleCancelToggle = () => {
    setShowWarningModal(false);
    setPendingToggle(null);
  };

  return (
    <div className="max-w-4xl">
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-2">Notification settings</h2>
        <p className="text-sm text-gray-600 mb-4">
          We may still send you important notifications about your account outside of your notification settings.
        </p>

        <div className="space-y-4">
          {notificationTypes.map((type) => (
            <div key={type.id} className="flex items-center justify-between py-3">
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-900 mb-1">{type.title}</h3>
                <p className="text-sm text-gray-500">{type.description}</p>
              </div>
              
              <div className="flex flex-col space-y-1 ml-4">
                <div className="flex items-center justify-between w-20">
                  <span className="text-sm text-gray-700">Email</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={notifications[type.id].email}
                      onChange={() => handleToggle(type.id, 'email', notifications[type.id].email)}
                      className="sr-only peer" 
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between w-20">
                  <span className="text-sm text-gray-700">In-app</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={notifications[type.id].inApp}
                      onChange={() => handleToggle(type.id, 'inApp', notifications[type.id].inApp)}
                      className="sr-only peer" 
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NotificationWarningModal
        isOpen={showWarningModal}
        onClose={handleCancelToggle}
        onConfirm={handleConfirmToggle}
        notificationType={pendingToggle?.type}
        isTurningOff={pendingToggle?.value === false}
        channelType={pendingToggle?.channel}
      />
    </div>
  );
};

export default NotificationSettings;