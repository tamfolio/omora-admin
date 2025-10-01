import React, { useState } from 'react';
import Modal from '../../Common/Modal';

const SuspendAccountModal = ({ isOpen, onClose, onConfirm }) => {
  const [reason, setReason] = useState('');

  const handleConfirm = () => {
    onConfirm(reason);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='"Suspend Account"'
      subtitle="Suspend all transactions"
    >
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium text-[#414651] mb-2">
            Reason for Request
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Short text"
            className="w-full px-3 py-2 border border-[#D5D7DA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] resize-none"
            rows={1}
          />
        </div>
        
        <div className="flex flex-col space-y-3">
          <button
            onClick={handleConfirm}
            disabled={!reason.trim()}
            className="w-full bg-[#008B99] hover:bg-[#008B99]/80 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-2.5 px-4 rounded-lg transition-colors"
          >
            Suspend Account
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

export default SuspendAccountModal;
