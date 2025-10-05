import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import Modal from '../../Common/Modal';

const UploadStatusModal = ({ isOpen, onClose, type, onStayOnPage, onRedirect }) => {
  const isSuccess = type === 'success';
  
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
    >
      <div className="text-center">
        {/* Icon */}
        <div className="flex justify-center mb-5">
          {isSuccess ? (
            <div className="w-12 h-12 bg-[#D1FADF] border-8 border-[#ECFDF3] rounded-full flex items-center justify-center">
              <CheckCircle size={24} color='#039855' />
            </div>
          ) : (
            <div className="w-12 h-12 bg-[#FEF0C7] border-8 border-[#FFFAEB] rounded-full flex items-center justify-center">
              <AlertTriangle size={24} color='#DC6803' />
            </div>
          )}
        </div>

        {/* Message */}
        <h3 className={`text-lg font-semibold text-[#181D27] ${isSuccess ? 'mb-8' : 'mb-2'}`}>
          {isSuccess ? 'Upload successfully' : 'Upload Failed'}
        </h3>
        
        {!isSuccess && (
          <p className="text-sm text-[#535862] mb-8">
            File too large
          </p>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {isSuccess ? (
            <>
              <button
                onClick={onStayOnPage}
                className="w-full px-4 py-2 text-sm font-semibold h-11 text-[#3538CD] bg-[#EEF4FF] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Stay on Page
              </button>
              <button
                onClick={onRedirect}
                className="w-full px-4 py-2 text-sm font-semibold h-11 text-[#414651] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Redirect to Dashboard
              </button>
            </>
          ) : (
            <div className='flex items-center gap-3'>
                <button
                onClick={onRedirect}
                className="w-full px-4 py-2 text-sm font-semibold h-11 text-[#414651] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={onStayOnPage}
                className="w-full px-4 py-2 text-sm font-semibold h-11 text-white bg-[#D92D20] border border-transparent rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Re Upload
              </button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default UploadStatusModal;
