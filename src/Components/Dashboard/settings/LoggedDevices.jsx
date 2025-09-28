import React from 'react';
import { Monitor, MoreHorizontal } from 'lucide-react';

const LoggedDevices = ({ devices }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-medium text-gray-900">Where you're logged in</h3>
          <p className="text-sm text-gray-600">We'll alert you via olivia@untitledui.com if there is any unusual activity on your account.</p>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="space-y-3">
        {devices.map((device, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-shrink-0">
              <Monitor className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {device.name}
                </p>
                {device.isActive && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></div>
                    Active now
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 truncate">
                {device.location} • {device.lastActive}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoggedDevices;