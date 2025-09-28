import React from "react";
import { TrendingDown } from "lucide-react";
import ProviderChart from "./ProviderChart";

const ProviderInfo = ({ provider }) => {
  const recentLogsData = [
    {
      endpoint: "401",
      response: "401",
      timestamp: "12:00pm",
      date: "15th July, 2025",
    },
    {
      endpoint: "500",
      response: "500",
      timestamp: "12:00pm",
      date: "15th July, 2025",
    },
    {
      endpoint: "500",
      response: "500",
      timestamp: "12:00pm",
      date: "15th July, 2025",
    },
    {
      endpoint: "500",
      response: "500",
      timestamp: "12:00pm",
      date: "15th July, 2025",
    },
    {
      endpoint: "500",
      response: "500",
      timestamp: "12:00pm",
      date: "15th July, 2025",
    },
    {
      endpoint: "500",
      response: "500",
      timestamp: "12:00pm",
      date: "15th July, 2025",
    },
    {
      endpoint: "500",
      response: "500",
      timestamp: "12:00pm",
      date: "15th July, 2025",
    },
    {
      endpoint: "500",
      response: "500",
      timestamp: "12:00pm",
      date: "15th July, 2025",
    },
    {
      endpoint: "500",
      response: "500",
      timestamp: "12:00pm",
      date: "15th July, 2025",
    },
    {
      endpoint: "500",
      response: "500",
      timestamp: "12:00pm",
      date: "15th July, 2025",
    },
    {
      endpoint: "500",
      response: "500",
      timestamp: "12:00pm",
      date: "15th July, 2025",
    },
    {
      endpoint: "500",
      response: "500",
      timestamp: "12:00pm",
      date: "15th July, 2025",
    },
  ];

  const incidentsData = [
    {
      type: "Outage",
      rootCause: "Network Failure",
      resolution: "Database Fallover",
      date: "Mar 28, 13:45",
    },
    {
      type: "Degradation",
      rootCause: "Network Failure",
      resolution: "Database Fallover",
      date: "Mar 28, 13:45",
    },
    {
      type: "Outage",
      rootCause: "Network Failure",
      resolution: "Database Fallover",
      date: "Mar 28, 13:45",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Left Section - Performance, Incidents, and Usage Chart */}
      <div className="flex-1 space-y-4">
        {/* Performance Summary */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">
              Performance Summary
            </h3>
            <div className="text-sm text-gray-500">
              <span className="mr-6">Category: <span className="font-medium text-gray-900">{provider.category}</span></span>
              <span>Environment: <span className="font-medium text-gray-900">{provider.environment}</span></span>
            </div>
          </div>
          
          <div className="border-b border-gray-200 mb-6"></div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="text-sm text-gray-600 mb-4">
                Uptime (24h uptime)
              </div>
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold text-gray-900">99.9%</span>
                <div className="flex items-center text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-1">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  2%
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="text-sm text-gray-600 mb-4">Error rate</div>
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold text-gray-900">0.5%</span>
                <div className="flex items-center text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-1">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  2%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Incidents */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h4 className="text-lg font-medium text-gray-900 mb-6">
            Latest Incidents
          </h4>
          
          <div className="border-b border-gray-200 mb-6"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {incidentsData.map((incident, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="font-medium text-sm text-gray-900 mb-3">
                  {incident.type}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  Root Cause: {incident.rootCause}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  Resolution: {incident.resolution}
                </div>
                <div className="text-sm text-gray-500">{incident.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Chart */}
        <ProviderChart />
      </div>

      {/* Right Section - Recent Logs */}
      <div className="w-full lg:w-80">
        <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col h-full">
          <h3 className="text-base font-medium text-gray-900 mb-3">
            Recent Logs
          </h3>

          <div className="flex flex-col flex-1">
            <div className="grid grid-cols-3 gap-2 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 pb-2 mb-2">
              <div>Endpoint</div>
              <div>Response</div>
              <div>Time Stamp</div>
            </div>

            <div className="space-y-1.5 overflow-y-auto flex-1">
              {recentLogsData.map((log, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-2 py-1 text-xs border-b border-gray-100 last:border-b-0"
                >
                  <div className="text-gray-900">{log.endpoint}</div>
                  <div className="text-gray-900">{log.response}</div>
                  <div className="text-gray-600">
                    <div>{log.timestamp}</div>
                    <div className="text-xs text-gray-500">{log.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderInfo;