import React, { useState } from 'react';

function PauseInvestmentModal({ isOpen, onClose, onSubmit }) {
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    if (reason.trim()) {
      onSubmit({ reason });
      setReason('');
    }
  };

  const handleCancel = () => {
    setReason('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80  flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Pause Investment</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reason
          </label>
          <input
            type="text"
            placeholder="Short text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-2.5 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors mb-3 font-medium"
        >
          Submit
        </button>
        
        <button
          onClick={handleCancel}
          className="w-full py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default PauseInvestmentModal;