export const usageChartConfig = {
  type: 'line',
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      x: {
        display: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 11
          }
        }
      },
      y: {
        display: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 11
          },
          callback: function(value) {
            return value;
          }
        },
        beginAtZero: true,
        max: 120
      }
    },
    elements: {
      line: {
        tension: 0.4,
        borderWidth: 2
      },
      point: {
        radius: 0,
        hoverRadius: 6,
        borderWidth: 2,
        backgroundColor: 'white'
      }
    }
  }
};

export const generateUsageData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const currentMonthData = [60, 62, 64, 66, 68, 70, 72, 75, 77, 79, 81, 82];
  const lastMonthData = [38, 39, 42, 45, 48, 50, 52, 55, 53, 55, 57, 60];
  
  return {
    labels: months,
    datasets: [
      {
        label: 'Current Month',
        data: currentMonthData,
        borderColor: '#14B8A6',
        backgroundColor: '#14B8A6',
        fill: false
      },
      {
        label: 'Last Month',
        data: lastMonthData,
        borderColor: '#06B6D4',
        backgroundColor: '#06B6D4',
        fill: false
      }
    ]
  };
};