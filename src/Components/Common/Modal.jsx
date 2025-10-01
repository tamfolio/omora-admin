import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, subtitle, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#515256] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
        {/* Header */}
        <div className="flex justify-center px-6 pt-6">
          <div>
            <h2 className="text-lg text-center font-semibold text-[#181D27]">{title}</h2>
            {subtitle && (
              <p className="text-sm text-center text-[#535862] mt-1">{subtitle}</p>
            )}
          </div>
          {/* <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button> */}
        </div>

        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
