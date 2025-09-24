import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const CalendarPicker = ({ selectedDate, onDateChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = (date) => {
    if (!date) return 'Select date';
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short', day: '2-digit', year: 'numeric'
    });
  };

  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const isSelected = (date) => selectedDate && date.toDateString() === new Date(selectedDate).toDateString();
  const isToday = (date) => date.toDateString() === new Date().toDateString();
  const isCurrentMonth = (date) => date.getMonth() === currentMonth.getMonth();

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-36 flex items-center justify-between pl-3 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        <span className="text-gray-700 text-xs">{formatDate(selectedDate)}</span>
        <Calendar className="w-4 h-4 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-64">
          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200">
            <button 
              onClick={() => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1))} 
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronLeft className="w-3 h-3" />
            </button>
            <h3 className="text-sm font-medium">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
            <button 
              onClick={() => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1))} 
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="p-3">
            <div className="grid grid-cols-7 gap-1 mb-1">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth().map((date, index) => (
                <button
                  key={index}
                  onClick={() => { 
                    onDateChange(date.toISOString().split('T')[0]); 
                    setIsOpen(false); 
                  }}
                  className={`w-7 h-7 text-xs rounded flex items-center justify-center transition-colors ${
                    isSelected(date) ? 'bg-teal-600 text-white font-semibold' :
                    isToday(date) ? 'bg-teal-50 text-teal-700 font-semibold' :
                    isCurrentMonth(date) ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {date.getDate()}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200">
            <button 
              onClick={() => { 
                onDateChange(new Date().toISOString().split('T')[0]); 
                setIsOpen(false); 
              }} 
              className="text-xs text-teal-600 hover:text-teal-700 font-medium"
            >
              Today
            </button>
            <button 
              onClick={() => { 
                onDateChange(''); 
                setIsOpen(false); 
              }} 
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPicker;