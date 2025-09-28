import React from 'react';
import { Edit3, Trash2 } from 'lucide-react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";

const ManageAuthenticatorPage = ({ onBack, onEdit, onDelete, isEnabled }) => {
  return (
    <div className="max-w-full mx-auto p-4 overflow-x-hidden">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Manage Authenticator App</h1>
        <p className="text-sm text-gray-600 mt-1">
          Protect your account and withdrawals with Passkeys and/or security keys, such as Yubikey.
        </p>
      </div>

      {/* Authenticator App Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            <div className="mr-4">
              {isEnabled ? (
                <CiCircleCheck className="w-6 h-6 text-green-600" />
              ) : (
                <IoCloseCircleOutline className="w-6 h-6 text-gray-400" />
              )}
            </div>
            <div>
              <h3 className="text-base font-medium text-gray-900 mb-2">Authenticator app</h3>
              <p className="text-sm text-gray-600">
                Use Google authenticator to get a verification code to enter every time you log into your Omora account.
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 ml-6">
            <button
              onClick={onEdit}
              className="p-2 hover:bg-gray-100 rounded-lg"
              title="Edit"
            >
              <Edit3 className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </button>
            <button
              onClick={onDelete}
              className="p-2 hover:bg-gray-100 rounded-lg"
              title="Delete"
            >
              <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAuthenticatorPage;