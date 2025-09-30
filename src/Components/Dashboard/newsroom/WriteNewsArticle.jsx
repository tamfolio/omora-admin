import React, { useState } from 'react';
import { Image, Type, Bold, Italic, Underline, AlignLeft, X, Trash2 } from 'lucide-react';

// RichTextEditor Component
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
  const textareaRef = React.useRef(null);

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

const WriteNewsArticle = ({ onBack, onPublish, onSaveDraft, onPreview, initialData }) => {
  const [blocks, setBlocks] = useState([
    { 
      id: 1, 
      type: 'text', 
      textType: 'heading', 
      content: '', 
      placeholder: 'Title of News',
      formatting: { bold: false, italic: false, underline: false, align: 'left' }
    }
  ]);
  const [activeBlockId, setActiveBlockId] = useState(1);
  const [currentTextType, setCurrentTextType] = useState('heading');

  const getPlaceholder = (textType) => {
    switch (textType) {
      case 'heading': return 'Title of News';
      case 'subheading': return 'Subheading text here';
      case 'paragraph': return 'Start writing your paragraph...';
      default: return 'Start writing...';
    }
  };

  const updateBlock = (blockId, updates) => {
    setBlocks(prev => 
      prev.map(block => 
        block.id === blockId ? { ...block, ...updates } : block
      )
    );
  };

  const addBlock = (type, afterBlockId = null) => {
    const newBlock = {
      id: Date.now(),
      type,
      textType: type === 'text' ? 'paragraph' : null,
      content: type === 'text' ? '' : null,
      placeholder: type === 'text' ? getPlaceholder('paragraph') : null,
      src: type === 'image' ? null : null,
      caption: type === 'image' ? '' : null,
      formatting: type === 'text' ? { bold: false, italic: false, underline: false, align: 'left' } : null
    };

    setBlocks(prev => {
      if (afterBlockId) {
        const index = prev.findIndex(block => block.id === afterBlockId);
        const newBlocks = [...prev];
        newBlocks.splice(index + 1, 0, newBlock);
        return newBlocks;
      }
      return [...prev, newBlock];
    });

    setActiveBlockId(newBlock.id);
    setCurrentTextType(newBlock.textType || 'paragraph');
  };

  const deleteBlock = (blockId) => {
    if (blocks.length === 1) return;
    
    setBlocks(prev => prev.filter(block => block.id !== blockId));
    
    if (activeBlockId === blockId) {
      const blockIndex = blocks.findIndex(block => block.id === blockId);
      const prevBlock = blocks[blockIndex - 1] || blocks[blockIndex + 1];
      if (prevBlock) {
        setActiveBlockId(prevBlock.id);
        setCurrentTextType(prevBlock.textType || 'paragraph');
      }
    }
  };

  const handleImageUpload = (blockId) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          updateBlock(blockId, { src: event.target.result });
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleTextTypeChange = (newTextType) => {
    setCurrentTextType(newTextType);
    if (activeBlockId) {
      const activeBlock = blocks.find(block => block.id === activeBlockId);
      if (activeBlock && activeBlock.type === 'text') {
        updateBlock(activeBlockId, { 
          textType: newTextType,
          placeholder: getPlaceholder(newTextType)
        });
      }
    }
  };

  const toggleFormatting = (formatType) => {
    if (!activeBlockId) return;
    
    const activeBlock = blocks.find(block => block.id === activeBlockId);
    if (activeBlock && activeBlock.type === 'text') {
      const currentFormatting = activeBlock.formatting || {};
      let newFormatting = { ...currentFormatting };
      
      if (formatType === 'align') {
        const alignments = ['left', 'center', 'right'];
        const currentAlign = currentFormatting.align || 'left';
        const nextIndex = (alignments.indexOf(currentAlign) + 1) % alignments.length;
        newFormatting.align = alignments[nextIndex];
      } else {
        newFormatting[formatType] = !currentFormatting[formatType];
      }
      
      updateBlock(activeBlockId, { formatting: newFormatting });
    }
  };

  const getActiveFormatting = () => {
    const activeBlock = blocks.find(block => block.id === activeBlockId);
    return activeBlock?.formatting || { bold: false, italic: false, underline: false, align: 'left' };
  };

  const TextBlock = ({ block }) => (
    <div className="group relative">
      <RichTextEditor
        value={block.content}
        onChange={(value) => updateBlock(block.id, { content: value })}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            addBlock('text', block.id);
          }
        }}
        onClick={() => {
          setActiveBlockId(block.id);
          setCurrentTextType(block.textType);
        }}
        onFocus={() => {
          setActiveBlockId(block.id);
          setCurrentTextType(block.textType);
        }}
        placeholder={block.placeholder}
        textType={block.textType}
        formatting={block.formatting}
        className={`p-2 ${
          activeBlockId === block.id ? 'bg-blue-50 ring-1 ring-blue-200' : 'bg-transparent hover:bg-gray-50'
        }`}
      />
      
      {blocks.length > 1 && (
        <button
          onClick={() => deleteBlock(block.id)}
          className="absolute -right-1 -top-1 w-5 h-5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 flex items-center justify-center"
        >
          <Trash2 className="w-2.5 h-2.5" />
        </button>
      )}
      
      <div className="flex items-center justify-center py-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => addBlock('text', block.id)}
          className="flex items-center gap-1 px-2 py-0.5 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
        >
          <Type className="w-3 h-3" />
          Text
        </button>
        <button
          onClick={() => addBlock('image', block.id)}
          className="flex items-center gap-1 px-2 py-0.5 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded ml-1"
        >
          <Image className="w-3 h-3" />
          Image
        </button>
      </div>
    </div>
  );

  const ImageBlock = ({ block }) => (
    <div className="group relative my-4">
      {!block.src ? (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-500 hover:bg-teal-50 transition-colors">
          <button
            onClick={() => handleImageUpload(block.id)}
            className="flex flex-col items-center gap-2"
          >
            <Image className="w-8 h-8 text-gray-400" />
            <span className="text-sm text-gray-500">Upload Image</span>
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <img
            src={block.src}
            alt="Article content"
            className="w-full max-w-2xl h-48 object-cover rounded-lg"
          />
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <RichTextEditor
              value={block.caption}
              onChange={(value) => updateBlock(block.id, { caption: value })}
              placeholder="Caption (optional)"
              textType="paragraph"
              className="p-2 text-xs text-gray-600 bg-white"
            />
          </div>
        </div>
      )}
      
      <button
        onClick={() => deleteBlock(block.id)}
        className="absolute -right-1 -top-1 w-5 h-5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 flex items-center justify-center"
      >
        <Trash2 className="w-2.5 h-2.5" />
      </button>
      
      <div className="flex items-center justify-center py-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => addBlock('text', block.id)}
          className="flex items-center gap-1 px-2 py-0.5 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
        >
          <Type className="w-3 h-3" />
          Text
        </button>
        <button
          onClick={() => addBlock('image', block.id)}
          className="flex items-center gap-1 px-2 py-0.5 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded ml-1"
        >
          <Image className="w-3 h-3" />
          Image
        </button>
      </div>
    </div>
  );

  const activeFormatting = getActiveFormatting();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">Write Article</h1>
          <button onClick={onBack} className="text-gray-400 hover:text-gray-600 p-1">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-teal-600 px-3 py-2 flex items-center gap-2">
                <select
                  value={currentTextType}
                  onChange={(e) => handleTextTypeChange(e.target.value)}
                  className="bg-teal-700 text-white border-none text-xs px-2 py-1 rounded focus:outline-none"
                >
                  <option value="heading">Heading</option>
                  <option value="subheading">Subheading</option>
                  <option value="paragraph">Paragraph</option>
                </select>
                
                <div className="flex gap-1">
                  <button 
                    onClick={() => toggleFormatting('bold')}
                    className={`p-1 text-white rounded transition-colors ${
                      activeFormatting.bold ? 'bg-teal-800' : 'hover:bg-teal-700'
                    }`}
                  >
                    <Bold className="w-3 h-3" />
                  </button>
                  <button 
                    onClick={() => toggleFormatting('italic')}
                    className={`p-1 text-white rounded transition-colors ${
                      activeFormatting.italic ? 'bg-teal-800' : 'hover:bg-teal-700'
                    }`}
                  >
                    <Italic className="w-3 h-3" />
                  </button>
                  <button 
                    onClick={() => toggleFormatting('underline')}
                    className={`p-1 text-white rounded transition-colors ${
                      activeFormatting.underline ? 'bg-teal-800' : 'hover:bg-teal-700'
                    }`}
                  >
                    <Underline className="w-3 h-3" />
                  </button>
                  <button 
                    onClick={() => toggleFormatting('align')}
                    className="p-1 text-white hover:bg-teal-700 rounded transition-colors"
                  >
                    <AlignLeft className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="min-h-[300px]">
                {blocks.map((block) => (
                  <div key={block.id}>
                    {block.type === 'text' ? (
                      <TextBlock block={block} />
                    ) : (
                      <ImageBlock block={block} />
                    )}
                  </div>
                ))}
                
                <div className="p-3 border-t border-gray-100">
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => addBlock('text')}
                      className="flex items-center gap-1 px-3 py-1 text-xs text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Type className="w-3 h-3" />
                      Add Text
                    </button>
                    <button
                      onClick={() => addBlock('image')}
                      className="flex items-center gap-1 px-3 py-1 text-xs text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Image className="w-3 h-3" />
                      Add Image
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-48 bg-white rounded-lg border border-gray-200 p-3 h-fit">
            <div className="space-y-3">
              <div className="text-xs font-medium text-gray-700 mb-2">Add Content</div>
              
              <button
                onClick={() => addBlock('image')}
                className="w-full flex flex-col items-center p-3 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 hover:border-teal-500 hover:bg-teal-50 transition-colors"
              >
                <Image className="w-6 h-6 text-gray-400 mb-1" />
                <span className="text-xs text-gray-600">Image</span>
              </button>
              
              <button
                onClick={() => addBlock('text')}
                className="w-full flex flex-col items-center p-3 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 hover:border-teal-500 hover:bg-teal-50 transition-colors"
              >
                <Type className="w-6 h-6 text-gray-400 mb-1" />
                <span className="text-xs text-gray-600">Text</span>
              </button>

              <div className="pt-3 space-y-2 border-t border-gray-200">
                <button
                  onClick={() => onPublish({ blocks })}
                  className="w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-xs font-medium"
                >
                  Publish
                </button>
                <button
                  onClick={() => onSaveDraft({ blocks })}
                  className="w-full py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs font-medium"
                >
                  Save Draft
                </button>
                <button
                  onClick={() => onPreview({ blocks })}
                  className="w-full py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs font-medium"
                >
                  Preview
                </button>
                <button
                  onClick={onBack}
                  className="w-full py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs font-medium"
                >
                  Back to Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteNewsArticle;