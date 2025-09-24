import React, { useEffect, useRef } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Chart, registerables } from 'chart.js';
import { usageChartConfig, generateUsageData } from './chartConfig';

Chart.register(...registerables);

const ProviderChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      const chartData = generateUsageData();
      
      chartInstance.current = new Chart(ctx, {
        ...usageChartConfig,
        data: chartData
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-medium text-gray-900">Usage</h3>
          <p className="text-xs text-gray-500">Calls/min</p>
        </div>
        <button className="p-1.5 hover:bg-gray-100 rounded-lg">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </button>
      </div>
      
      <div className="h-64">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default ProviderChart;