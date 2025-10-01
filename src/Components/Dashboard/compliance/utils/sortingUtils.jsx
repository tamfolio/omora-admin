import React from "react";
import { ChevronsUpDown, ChevronUp, ChevronDown } from "lucide-react";

export const SORT_DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc',
  NONE: 'none'
};

export const getSortIcon = (direction) => {
  switch (direction) {
    case SORT_DIRECTIONS.ASC:
      return <ChevronUp color='#A4A7AE' className="w-3 h-3" />;
    case SORT_DIRECTIONS.DESC:
      return <ChevronDown color='#A4A7AE' className="w-3 h-3" />;
    default:
      return <ChevronsUpDown color='#A4A7AE' className="w-3 h-3" />;
  }
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

export const sortData = (data, sortConfig, dataType) => {
  if (!sortConfig.column || sortConfig.direction === SORT_DIRECTIONS.NONE) {
    return data;
  }

  return [...data].sort((a, b) => {
    let aValue = a[sortConfig.column];
    let bValue = b[sortConfig.column];

    // Handle different data types
    if (dataType === 'transaction' && sortConfig.column === 'type') {
      // Sort transaction types alphabetically
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    } else if (dataType === 'transaction' && sortConfig.column === 'timestamp') {
      // Sort timestamps (assuming they're in format "12:00pm\n15th July, 2025")
      const parseTimestamp = (timestamp) => {
        const [time, date] = timestamp.split('\n');
        return new Date(date);
      };
      aValue = parseTimestamp(aValue);
      bValue = parseTimestamp(bValue);
    } else if (dataType === 'investment' && (sortConfig.column === 'startDate' || sortConfig.column === 'endDate')) {
      // Sort investment dates (assuming they're in format "15th Dec, 2025")
      const parseDate = (dateStr) => {
        return new Date(dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1'));
      };
      aValue = parseDate(aValue);
      bValue = parseDate(bValue);
    } else if (dataType === 'audit' && sortConfig.column === 'user') {
      // Sort users alphabetically
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    } else if (dataType === 'audit' && sortConfig.column === 'timestamp') {
      // Sort audit timestamps
      const parseTimestamp = (timestamp) => {
        const [time, date] = timestamp.split('\n');
        return new Date(date);
      };
      aValue = parseTimestamp(aValue);
      bValue = parseTimestamp(bValue);
    }

    // Compare values
    if (aValue < bValue) {
      return sortConfig.direction === SORT_DIRECTIONS.ASC ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === SORT_DIRECTIONS.ASC ? 1 : -1;
    }
    return 0;
  });
};

