// Export utilities
export const exportToCSV = (data, filename = 'providers-export') => {
  const csvContent = convertToCSV(data);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

const convertToCSV = (data) => {
  if (!data || data.length === 0) return '';
  const headers = Object.keys(data[0]);
  const csvHeaders = headers.join(',');
  const csvRows = data.map(row => {
    return headers.map(header => {
      const value = row[header];
      if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value;
    }).join(',');
  });
  return [csvHeaders, ...csvRows].join('\n');
};

export const formatDataForExport = (data) => {
  return data.map(item => ({
    'Provider Name': item.providerName,
    'Category': item.category,
    'Environment': item.environment,
    'Status': item.status,
    'Uptime': item.upTime,
    'Last Incident': item.lastIncident,
    'Export Date': new Date().toISOString().split('T')[0]
  }));
};

// Sort and filter utilities
export const SORT_DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc',
  NONE: 'none'
};

export const sortData = (data, column, direction) => {
  if (direction === SORT_DIRECTIONS.NONE) return data;
  
  return [...data].sort((a, b) => {
    let aValue = a[column];
    let bValue = b[column];
    
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }
    
    if (column === 'lastIncident') {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    }
    
    if (column === 'status') {
      const statusOrder = { 'active': 3, 'degraded': 2, 'paused': 1 };
      aValue = statusOrder[aValue.toLowerCase()] || 0;
      bValue = statusOrder[bValue.toLowerCase()] || 0;
    }
    
    if (direction === SORT_DIRECTIONS.ASC) {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });
};

export const filterBySearch = (data, searchTerm) => {
  if (!searchTerm) return data;
  const term = searchTerm.toLowerCase();
  return data.filter(item => 
    Object.values(item).some(value => 
      value.toString().toLowerCase().includes(term)
    )
  );
};

export const getNextSortDirection = (currentDirection) => {
  switch (currentDirection) {
    case SORT_DIRECTIONS.NONE:
      return SORT_DIRECTIONS.ASC;
    case SORT_DIRECTIONS.ASC:
      return SORT_DIRECTIONS.DESC;
    case SORT_DIRECTIONS.DESC:
      return SORT_DIRECTIONS.NONE;
    default:
      return SORT_DIRECTIONS.ASC;
  }
};