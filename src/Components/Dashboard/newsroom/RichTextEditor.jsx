import React, { useRef } from 'react';

const RichTextEditor = ({ 
  value, 
  onChange, 
  placeholder, 
  textType = 'paragraph',
  onKeyDown,
  onClick,
  onFocus,
  className = '',
  formatting = {}
}) => {
  const textareaRef = useRef(null);

  const getTextStyle = (textType) => {
    let baseStyle = '';
    switch (textType) {
      case 'heading':
        baseStyle = 'text-xl font-bold text-gray-900';
        break;
      case 'subheading':
        baseStyle = 'text-lg font-semibold text-gray-800';
        break;
      case 'paragraph':
        baseStyle = 'text-sm text-gray-700 leading-relaxed';
        break;
      default:
        baseStyle = 'text-sm text-gray-700';
    }

    // Apply formatting
    let formatStyle = '';
    if (formatting.bold) formatStyle += ' font-bold';
    if (formatting.italic) formatStyle += ' italic';
    if (formatting.underline) formatStyle += ' underline';
    if (formatting.align === 'center') formatStyle += ' text-center';
    if (formatting.align === 'right') formatStyle += ' text-right';

    return baseStyle + formatStyle;
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
    
    // Adjust height
    requestAnimationFrame(() => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = Math.max(32, textarea.scrollHeight) + 'px';
      }
    });
  };

  return (
    <textarea
      ref={textareaRef}
      value={value || ''}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      onClick={onClick}
      onFocus={onFocus}
      placeholder={placeholder}
      className={`w-full border-none focus:outline-none resize-none min-h-[32px] ${getTextStyle(textType)} ${className}`}
      style={{ 
        fontFamily: 'inherit',
        overflow: 'hidden'
      }}
    />
  );
};

export default RichTextEditor;