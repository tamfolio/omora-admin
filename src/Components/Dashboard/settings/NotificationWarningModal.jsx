import React from 'react';
import { X, AlertCircle, CheckCircle } from 'lucide-react';

const NotificationWarningModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  notificationType, 
  isTurningOff, 
  channelType 
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const channelName = channelType === 'email' ? 'Email' : 'In-app';

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div 
        className="bg-white rounded-lg w-full max-w-md mx-4 shadow-2xl border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-end p-4">
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 pb-6">
          <div className="text-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
              isTurningOff ? 'bg-red-100' : 'bg-green-100'
            }`}>
              {isTurningOff ? (
                <AlertCircle className="w-8 h-8 text-red-600" />
              ) : (
                <CheckCircle className="w-8 h-8 text-green-600" />
              )}
            </div>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isTurningOff ? 'Warning' : 'Confirm Action'}
            </h2>
            
            <p className="text-sm text-gray-600 mb-8">
              {isTurningOff 
                ? `You may miss important investment updates by disabling ${channelName} notifications`
                : `Are you sure you want to enable ${channelName} notifications? You will receive updates about your investments.`
              }
            </p>
            
            <div className="space-y-3">
              <button
                onClick={onConfirm}
                className={`w-full px-4 py-3 text-sm font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isTurningOff 
                    ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500' 
                    : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                }`}
              >
                {isTurningOff ? `Turn off ${channelName} Notification` : `Turn on ${channelName} Notification`}
              </button>
              <button
                onClick={onClose}
                className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationWarningModal;