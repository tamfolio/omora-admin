import React from 'react';
import Modal from '../../Common/Modal';

const DownloadKYCModal = ({ isOpen, onClose, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='"Download KYC"'
      subtitle="Download Individual KYC Documents"
    >
      <div className="space-y-4">
        <div className="flex flex-col space-y-3">
          <button
            onClick={handleConfirm}
            className="w-full bg-[#008B99] hover:bg-[#008B99]/80 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors"
          >
            Download KYC
          </button>
          <button
            onClick={onClose}
            className="w-full bg-white border border-[#D5D7DA] text-gray-700 font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DownloadKYCModal;
