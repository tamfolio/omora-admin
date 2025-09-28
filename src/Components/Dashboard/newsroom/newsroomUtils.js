// Sort and filter utilities for newsroom
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
    
    // Handle date sorting for dateCreated
    if (column === 'dateCreated') {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
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