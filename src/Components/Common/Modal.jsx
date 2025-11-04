import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, subtitle, children, width = 'max-w-md' }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-[#515256] bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className={`bg-white p-6 rounded-lg shadow-lg ${width} w-full mx-4`}>
        {/* Header */}
        <div className="flex justify-center px-6">
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
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
