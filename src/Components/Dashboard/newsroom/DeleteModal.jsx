import React from 'react';
import { X, AlertCircle } from 'lucide-react';

const DeleteModal = ({ isOpen, onClose, onConfirm, itemTitle }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-xl border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-4">
            <AlertCircle className="w-6 h-6 text-red-600" />
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="text-center mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Are you sure you want to delete this?
          </h3>
          <p className="text-sm text-gray-600">
            This is an irreversible action. Once you delete this news you will not be able to undo your action.
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={onConfirm}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;