import React from 'react';
import { X, Copy, Share } from 'lucide-react';

const PreviewNews = ({ onBack, articleData, formData }) => {
  const formatDate = (dateString) => {
    if (dateString) return dateString;
    return new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const renderBlock = (block, index) => {
    if (block.type === 'text') {
      const getTextStyle = (textType, formatting = {}) => {
        let baseStyle = '';
        switch (textType) {
          case 'heading':
            baseStyle = 'text-2xl font-bold text-gray-900 mb-4';
            break;
          case 'subheading':
            baseStyle = 'text-xl font-semibold text-gray-800 mb-3 mt-6';
            break;
          case 'paragraph':
            baseStyle = 'text-sm text-gray-700 leading-relaxed mb-3';
            break;
          default:
            baseStyle = 'text-sm text-gray-700 mb-3';
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

      return (
        <div key={block.id} className={getTextStyle(block.textType, block.formatting)}>
          {block.content}
        </div>
      );
    }

    if (block.type === 'image' && block.src) {
      return (
        <div key={block.id} className="my-6">
          <img
            src={block.src}
            alt={block.caption || 'Article image'}
            className="w-full max-w-2xl h-auto object-cover rounded-lg"
          />
          {block.caption && (
            <p className="text-xs text-gray-500 mt-2 text-center italic">
              {block.caption}
            </p>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">Preview Article</h1>
          <button 
            onClick={onBack}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Preview Content */}
      <div className="max-w-3xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Article Header */}
          <div className="text-center px-6 pt-6 pb-4 border-b border-gray-100">
            {formData?.category && (
              <div className="mb-3">
                <span className="inline-block px-2 py-1 text-xs font-medium text-teal-600 bg-teal-50 rounded-full">
                  {formData.category}
                </span>
              </div>
            )}
            
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              {formData?.title || 'Article Title'}
            </h1>
            
            <p className="text-sm text-gray-600 mb-4">
              {formData?.description || 'Article description'}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                {formData?.authorImage ? (
                  <img src={formData.authorImage} alt="Author" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-500 text-xs font-medium">
                    {formData?.author ? formData.author.charAt(0).toUpperCase() : 'A'}
                  </span>
                )}
              </div>
              <div className="text-left">
                <p className="text-xs font-medium text-gray-900">
                  {formData?.author || 'Author Name'}
                </p>
                <p className="text-xs text-gray-500">
                  {formatDate()}
                </p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {formData?.coverImage && (
            <div className="w-full">
              <img
                src={formData.coverImage}
                alt="Article cover"
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="px-6 py-6">
            {articleData?.blocks?.map((block, index) => renderBlock(block, index))}
            
            {(!articleData?.blocks || articleData.blocks.length === 0) && (
              <div className="text-center py-8 text-gray-500">
                <p className="text-sm">No content added yet. Go back to the editor to add content.</p>
              </div>
            )}

            {/* Tags */}
            {formData?.tags && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-1">
                  {formData.tags.split(',').map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                    >
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Social Sharing */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Share this article</span>
              <div className="flex space-x-2">
                <button className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-600 hover:text-gray-800 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </button>
                <button className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-600 hover:text-gray-800 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share className="w-3 h-3" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Editor Button */}
        <div className="mt-4 text-center">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
          >
            Back to Editor
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewNews;