import React, { useState } from 'react';
import { Home, ChevronRight } from 'lucide-react';
import ProviderInfo from './ProviderInfo';
import ProviderChart from './ProviderChart';

const ProviderDetails = ({ provider, onBack }) => {
  if (!provider) return null;

  return (
    <div className="max-w-full mx-auto p-4 overflow-x-hidden">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
        <button 
          onClick={onBack}
          className="flex items-center hover:text-gray-700"
        >
          <Home className="w-4 h-4" />
        </button>
        <ChevronRight className="w-4 h-4" />
        <span>Individual</span>
        <ChevronRight className="w-4 h-4" />
        <span>...</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900">123456</span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-900">{provider.providerName}</h1>
        <div className="flex space-x-3">
          <button className="px-3 py-1.5 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            Activate
          </button>
          <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            Deactivate
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-4">
        <div className="flex space-x-8">
          <div className="py-2 px-1 border-b-2 border-teal-500 text-sm font-medium text-teal-600">
            Provider Details
          </div>
          <div className="py-2 px-1 text-sm font-medium text-gray-400 cursor-not-allowed">
            Audit Log
          </div>
        </div>
      </div>

      {/* Content - Flexible Layout */}
      <div className="space-y-4">
        <ProviderInfo provider={provider} />
      </div>
    </div>
  );
};

export default ProviderDetails;